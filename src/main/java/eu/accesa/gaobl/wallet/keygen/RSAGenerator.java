package eu.accesa.gaobl.wallet.keygen;

import java.nio.charset.StandardCharsets;
import java.security.*;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

public class RSAGenerator {
    public static KeyPair generateRSAKeyPair() throws NoSuchAlgorithmException, NoSuchProviderException {
        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("DSA", "SUN");
        SecureRandom random = SecureRandom.getInstance("SHA1PRNG", "SUN");
        keyGen.initialize(1024, random); //generate key pair
        KeyPair pair = keyGen.generateKeyPair();
        return pair;
    }

    public static PrivateKey getKey(String key) {
        try {
            PKCS8EncodedKeySpec X509privateKey = new PKCS8EncodedKeySpec(Base64.getDecoder().decode(key.getBytes(StandardCharsets.UTF_8)));
            KeyFactory kf = KeyFactory.getInstance("DSA");
            return kf.generatePrivate(X509privateKey);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
