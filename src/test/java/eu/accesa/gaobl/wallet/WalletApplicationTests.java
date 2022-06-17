package eu.accesa.gaobl.wallet;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.nio.charset.StandardCharsets;
import java.security.PrivateKey;
import java.util.Base64;

import static eu.accesa.gaobl.wallet.keygen.RSAGenerator.getKey;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class WalletApplicationTests {

	@Test
	void contextLoads() {

		String privateKey = "MIIBSwIBADCCASwGByqGSM44BAEwggEfAoGBAP1/U4EddRIpUt9KnC7s5Of2EbdSPO9EAMMeP4C2USZpRV1AIlH7WT2NWPq/xfW6MPbLm1Vs14E7gB00b/JmYLdrmVClpJ+f6AR7ECLCT7up1/63xhv4O1fnxqimFQ8E+4P208UewwI1VBNaFpEy9nXzrith1yrv8iIDGZ3RSAHHAhUAl2BQjxUjC8yykrmCouuEC/BYHPUCgYEA9+GghdabPd7LvKtcNrhXuXmUr7v6OuqC+VdMCz0HgmdRWVeOutRZT+ZxBxCBgLRJFnEj6EwoFhO3zwkyjMim4TwWeotUfI0o4KOuHiuzpnWRbqN/C/ohNWLx+2J6ASQ7zKTxvqhRkImog9/hWuWfBpKLZl6Ae1UlZAFMO/7PSSoEFgIUbO1IjIKxPRm5QkEKEK51ysKUG1Y=";

		PrivateKey privateKey1 = getKey(privateKey);

		String key = new String(Base64.getEncoder().encode(privateKey1.getEncoded()), StandardCharsets.UTF_8);
		assertEquals(privateKey, key);
	}

}
