function Skills() {
  const web3Skills = [
    "Rust",
    "Cairo",
    "Soroban",
    "Stylus",
    "Ink!",
    "Solidity",
    "Uniswap v4 hooks",
    "Clarity",
    "Wagmi",
    "Ethers.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
  ];

  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My Arsenal</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">Pioneering the Web3 Ecosystem.</div>
            <p>
              I am a heavily specialized blockchain developer and software
              engineer with deep expertise across modern smart contract
              platforms. My core engineering focus is building secure, highly
              scalable decentralized applications, implementing Formal
              Verification, and crafting robust runtime guards for DeFi
              protocols.
            </p>
            <p>
              Beyond the EVM, I leverage next-generation platforms like
              Polkadot, Starknet, Stacks, and Stellar to write native,
              high-performance contracts.
            </p>
            <div className="web3-tags">
              {web3Skills.map((skill, index) => (
                <span key={index} className="web3-tag">
                  {skill}
                </span>
              ))}
            </div>
            <a
              href="#projects"
              style={{ marginTop: "30px", display: "inline-block" }}
            >
              See My Projects
            </a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>Rust & Smart Contracts (Ink/Soroban/Stylus)</span>
                <span>95%</span>
              </div>
              <div className="line rust"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Solidity & Uniswap v4 Hooks</span>
                <span>90%</span>
              </div>
              <div className="line solidity"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Cairo & Starknet Ecosystem</span>
                <span>80%</span>
              </div>
              <div className="line cairo"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Frontend Dev (React, Next.js, Wagmi)</span>
                <span>90%</span>
              </div>
              <div className="line react"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Backend Dev (Node.js, Express, NestJs)</span>
                <span>90%</span>
              </div>
              <div className="line react"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
