import React from "react";
import ReactDOM from "react-dom/client";
import { withLDProvider, useFlags } from "launchdarkly-react-client-sdk";

import "./index.css";

const App = () => {
  const { "show-customer-logo": showCustomerLogo } = useFlags();

  React.useEffect(() => {
    console.log("showCustomerLogo updated:", showCustomerLogo);
  }, [showCustomerLogo]);

  return (
    <div className="app-container">
      <img
        className="logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAZlBMVEUoKCj///8AAAD8/PwhISElJSUWFhYMDAzp6ekZGRnt7e0SEhJeXl4bGxvx8fGOjo4vLy9xcXF8fHzOzs6oqKiYmJja2tqhoaFAQEDj4+M0NDQ5OTm8vLxNTU2Dg4NTU1NoaGixsbH5A0VGAAACv0lEQVRoge2Y2ZKrIBRFmVFBiWIcWqPx/3+yQY1tpTPdBp6uuypV6sNysz3AIQAcOnTo0KG/ipBwbJZLEYpNCghzHgo+Qoyvoeiohjicd15hjEPR6cnAYRGIzgpo6SgMHfXQKJB3KhLzUUPRycVah4Mf+v2U5wra3AcfucdSopTunyBtnGOo3OlEQtiqE9rhaZrNybjT6Wg5WT/u7KdX6Ml72mkbMWwHwG/po3KG+/CO8rn6YDZdbvZR5cs7SMUZz3hYFbGweNrZwZjf2UPN8G6emIaWlcY+AKKA3rybbGS7mIdQ51xQswwstz68A4LUUoE2/bpBPFrH4oUOGJjgzT3WslsvPdEBuuiVbRxHFfTq3WRTbNls8kYHKa+3bDa4NzrgjQ7jnRIjYcvS3fvMihkTaBFvxlEWw6Dq++Q/9E6Y4LNYzMBFyquq67LXukpwhuFTfUQnYzlNfVVV7QvSY7pib5P4N+Re7Vvrafue8kT6LZxSKWV+Njlrk3OGPw4HZ1/0Hdzu9kuF8KVCRNc0Y6HUeep73SZJhh+/MOn+cjCglJI0jtn6MnRqmu7XImB8ezl0UE6me/Qfff/Sfl3f4IkX38uONIe+RW98e2HzU/+zJG4XXtgpsl3AbS8q9foKH99y7l9uqhQq1svo5M7mnd7C6EfOm+UOZ+5sRspbyK1ipq9DkS/fBA3Z6rq/Irv4obXUE+DIpmislu8YnddmNM6XYSSnD9aTVxKgn01jbUwvLHNinAcSufoWam5Cs/pr66DXJtf4dmST3GJ0jsRPALa7sCG5+ga0wVnZ8HT/PrnMeQ/1TfnetH1A7UaNIxrijx17mMPuNfhQQtnv6573I5GLLZ4kSCaUtcF822lvOvMgvgHLvdT3Q9kToqlBx/Xkiey0D1ODZpsbYDDfgF7c18EXdIQC+T506NChQ/+tvgGKMB6tRCShuAAAAABJRU5ErkJggg=="
        alt="LaunchDarkly Logo"
      />
      {showCustomerLogo && (
        <>
          <div className="heart">❤️</div>
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHY2phQ80a01Hk5VrbWNeeYd4V_onr2wSvCw&s"
            alt="CVS Logo"
          />
        </>
      )}
      <p style={{ color: 'white', fontSize: '18px', marginTop: '20px' }}>
        showCustomerLogo: {String(showCustomerLogo)}
      </p>
    </div>
  );
};

const LDWrappedApp = withLDProvider({
  clientSideID: "67ab777b54c9290a157ea751",
  flags: { "show-customer-logo": false },
})(App);

ReactDOM.createRoot(document.getElementById("root")).render(<LDWrappedApp />);

