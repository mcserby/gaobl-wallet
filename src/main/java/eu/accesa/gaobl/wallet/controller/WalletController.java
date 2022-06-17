package eu.accesa.gaobl.wallet.controller;

import eu.accesa.gaobl.wallet.dto.KeyPairDto;
import eu.accesa.gaobl.wallet.dto.Transaction;
import eu.accesa.gaobl.wallet.keygen.RSAGenerator;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.security.*;
import java.util.Base64;

import static eu.accesa.gaobl.wallet.keygen.RSAGenerator.getKey;
import static eu.accesa.gaobl.wallet.service.Transaction.prepareTransactionMessage;
import static eu.accesa.gaobl.wallet.service.WalletImpl.sign;

@RestController
public class WalletController {

    @GetMapping("/generateKP")
    public KeyPairDto generateKeyPair() {
        try {
            KeyPair keyPair = RSAGenerator.generateRSAKeyPair();
            KeyPairDto dto = new KeyPairDto();
            String privateKey = new String(Base64.getEncoder().encode(keyPair.getPrivate().getEncoded()), StandardCharsets.UTF_8);
            String publicKey = new String(Base64.getEncoder().encode(keyPair.getPublic().getEncoded()), StandardCharsets.UTF_8);
            dto.setPrivateKey(privateKey);
            dto.setPublicKey(publicKey);

            return dto;
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        } catch (NoSuchProviderException e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/generateSignature")
    public String generateSignature(@RequestBody Transaction tx) {
        String transactionMessage = prepareTransactionMessage(tx.getSenderId(), tx.getReceiverId(), tx.getAmount());
        PrivateKey privateKey = getKey(tx.getPrivateKey());
        byte[] signedMessage = null;
        try {
            signedMessage = sign(transactionMessage, privateKey);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        } catch (NoSuchProviderException e) {
            throw new RuntimeException(e);
        } catch (InvalidKeyException e) {
            throw new RuntimeException(e);
        } catch (SignatureException e) {
            throw new RuntimeException(e);
        }
        return new String(Base64.getEncoder().encode(signedMessage), StandardCharsets.UTF_8);
    }
}
