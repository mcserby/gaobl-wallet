package eu.accesa.gaobl.wallet.service;

public class Transaction {
    public static String prepareTransactionMessage(
            String senderId,
            String receiverId, int amount) {
        return "{\"senderId\":\"" + senderId + "\","
                +"\"receiverId\":\"" + receiverId + "\","
                +"\"amount\":\"" + amount + "\""
                + "}";
    }

    public static String getSignedTractionMessage(String message, String signature){
        return  "{\"message\":" + message + ","
                +"\"signature\":\"" + signature + "\""
                + "}";
    }
}
