import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: black;
  color: white;
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>

        <div>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>

        <div>
          <h3>CURRENCY</h3>
          <select>
            <option>USD</option>
          </select>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;