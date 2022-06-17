package eu.accesa.gaobl.wallet.dto;

public class GaoBlSignature {

    public String signature;

    public GaoBlSignature(String signature) {
        this.signature = signature;
    }

    public GaoBlSignature() {
    }

    public String getSignature() {
        return signature;
    }
}
