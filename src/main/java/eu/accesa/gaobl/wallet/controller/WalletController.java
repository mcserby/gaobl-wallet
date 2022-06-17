package eu.accesa.gaobl.wallet.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import eu.accesa.gaobl.wallet.dto.CreateWalletRequest;
import eu.accesa.gaobl.wallet.dto.GaoBlTransactionSignRequest;
import eu.accesa.gaobl.wallet.dto.KeyPairDto;
import eu.accesa.gaobl.wallet.keygen.RSAGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.security.*;
import java.util.Base64;

import static eu.accesa.gaobl.wallet.keygen.RSAGenerator.getKey;
import static eu.accesa.gaobl.wallet.service.Transaction.prepareTransactionMessage;
import static eu.accesa.gaobl.wallet.service.WalletImpl.sign;

@RestController
public class WalletController {

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/generateKP")
    public KeyPairDto generateKeyPair() {
        try {
            KeyPair keyPair = RSAGenerator.generateRSAKeyPair();
            KeyPairDto dto = new KeyPairDto();
            String privateKey =
                    new String(Base64.getEncoder().encode(keyPair.getPrivate().getEncoded()), StandardCharsets.UTF_8);
            String publicKey =
                    new String(Base64.getEncoder().encode(keyPair.getPublic().getEncoded()), StandardCharsets.UTF_8);
            dto.setPrivateKey(privateKey);
            dto.setPublicKey(publicKey);
            return dto;
        } catch (NoSuchAlgorithmException | NoSuchProviderException e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/signTransaction")
    public String generateSignature(@RequestBody GaoBlTransactionSignRequest tx) {
        try {
            String message = objectMapper.writeValueAsString(tx.getMessage());
            PrivateKey privateKey = getKey(tx.getPrivateKey());
            byte[] signedMessage = sign(message, privateKey);
            return new String(Base64.getEncoder().encode(signedMessage), StandardCharsets.UTF_8);
        } catch (NoSuchAlgorithmException | NoSuchProviderException | InvalidKeyException | SignatureException | JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/signWallet")
    public String generateSignature(@RequestBody CreateWalletRequest rq) {
        try {
            String message = objectMapper.writeValueAsString(rq.getWallet());
            PrivateKey privateKey = getKey(rq.getPrivateKey());
            byte[] signedMessage = sign(message, privateKey);
            return new String(Base64.getEncoder().encode(signedMessage), StandardCharsets.UTF_8);
        } catch (NoSuchAlgorithmException | NoSuchProviderException | InvalidKeyException | SignatureException | JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
