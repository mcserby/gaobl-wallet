package eu.accesa.gaobl.wallet.keygen;

import java.io.FileOutputStream;
import java.security.PrivateKey;

public class KeyPairToFile {
    public static boolean dumpPrivateKey(PrivateKey privateKey, String name){
        try (FileOutputStream fos = new FileOutputStream(name)) {
            fos.write(privateKey.getEncoded());
            return true;
        } catch (Exception e){
            System.out.println(e);
        }
        return false;
    }
}
