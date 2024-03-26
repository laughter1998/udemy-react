import InputGroup from "./inputGroup";

export default function UserInput({ onChangeInput, user }) {
  // console.log(onChangeInput);
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>
            INITIAL INVESTMENT
            <input
              type="number"
              required
              value={user.initialInvestment}
              onChange={(event) =>
                onChangeInput("initialInvestment", event.target.value)
              }
            />
          </label>
        </p>
        <p>
          <label>
            ANNUAL INVESTMENT
            <input
              type="number"
              required
              value={user.annualInvestment}
              onChange={(event) =>
                onChangeInput("annualInvestment", event.target.value)
              }
            />
          </label>
        </p>
        {/* <InputGroup
          initail={(initialInvestment = 0)}
          onChangeNumber={handleNumberChange1}
        >
          INITIAL INVESTMENT
        </InputGroup>
        <InputGroup initail={(annualInvestment = 0)}>
          ANNUAL INVESTMENT
        </InputGroup> */}

        {/* <label>
          INITIAL INVESTMENT
          <input type="number" value={initail} onChange={handleInputChange} />
        </label> */}
        {/* <label>
          ANNUAL INVESTMENT
          <input type="number" />
        </label>
      </div>
      <div className="input-group">
        <label>
          EXPECTED RETURN
          <input type="number" />
        </label>
        <label>
          DURATION
          <input type="number" />
        </label> */}
      </div>
      <div className="input-group">
        <p>
          <label>
            EXPECTED RETURN
            <input
              type="number"
              required
              value={user.expectedReturn}
              onChange={(event) =>
                onChangeInput("expectedReturn", event.target.value)
              }
            />
          </label>
        </p>
        <p>
          <label>
            DURATION
            <input
              type="number"
              required
              value={user.duration}
              onChange={(event) =>
                onChangeInput("duration", event.target.value)
              }
            />
          </label>
        </p>
        {/* <InputGroup initail={(expectedReturn = 0)}>EXPECTED RETURN</InputGroup>
        <InputGroup initail={(duration = 0)}>DURATION</InputGroup> */}
      </div>
    </section>
  );
}
