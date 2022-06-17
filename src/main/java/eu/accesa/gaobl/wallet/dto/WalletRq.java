package eu.accesa.gaobl.wallet.dto;

public class WalletRq {

    private String nickname;
    private String publicKey;


    public WalletRq() {
    }

    public WalletRq(String nickname, String publicKey) {
        this.nickname = nickname;
        this.publicKey = publicKey;
    }

    public String getNickname() {
        return nickname;
    }

    public String getPublicKey() {
        return publicKey;
    }
}
