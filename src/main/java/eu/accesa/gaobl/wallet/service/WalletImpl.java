package eu.accesa.gaobl.wallet.service;

import java.nio.charset.StandardCharsets;
import java.security.*;


public class WalletImpl {

    public static byte[] sign(String message, PrivateKey privateKey)
            throws NoSuchAlgorithmException, NoSuchProviderException, InvalidKeyException, SignatureException {
        Signature signature = Signature.getInstance("SHA1withDSA", "SUN");
        signature.initSign(privateKey);
        signature.update(message.getBytes(StandardCharsets.UTF_8));
        return signature.sign();
    }
}
