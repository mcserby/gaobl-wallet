package eu.accesa.gaobl.wallet.dto;

public class CreateWalletRequest {

    private WalletRq wallet;
    private String privateKey;

    public CreateWalletRequest() {
    }

    public CreateWalletRequest(WalletRq wallet, String privateKey) {
        this.wallet = wallet;
        this.privateKey = privateKey;
    }

    public WalletRq getWallet() {
        return wallet;
    }

    public String getPrivateKey() {
        return privateKey;
    }
}
