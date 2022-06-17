package eu.accesa.gaobl.wallet.dto;

public class GaoBlTransactionSignRequest {

    private GaoBlMessage message;
    private String privateKey;

    public GaoBlTransactionSignRequest() {
    }

    public GaoBlTransactionSignRequest(GaoBlMessage message, String privateKey) {
        this.message = message;
        this.privateKey = privateKey;
    }

    public GaoBlMessage getMessage() {
        return message;
    }

    public String getPrivateKey() {
        return privateKey;
    }
}
