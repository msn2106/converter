import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "../styles/Button";

const Footer = () => {
  return (
    <>
      <Wrapper>
        {/* <section className='contact-short'>
          <div className='grid grid-two-column'>
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className='btn hireme-btn'>
                <NavLink to='/'> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section> */}
        {/* footer section */}

        <footer>
          <div className='container grid grid-four-column'>
            <div className='footer-about'>
              <h3>Converter</h3>
              <p><NavLink to="/converter/json2csv" style={{textDecoration:'none', color: 'white'}}>JSON to CSV</NavLink></p>
              <p><NavLink to="/converter/json2xlsx" style={{textDecoration:'none', color: 'white'}}>JSON to XLSX</NavLink></p>
              <p><NavLink to="/converter/csv2json" style={{textDecoration:'none', color: 'white'}}>CSV to JSON</NavLink></p>
              <p><NavLink to="/converter/xlsx2json" style={{textDecoration:'none', color: 'white'}}>XLSX to JSON</NavLink></p>
            </div>
            <div className='footer-subscribe'>
              <h3>Subscribe to get important updates</h3>
              <form action='#'>
                <input type='email' name='email' placeholder='YOUR E-MAIL' />

                <input type='submit' value='subscribe' />
              </form>
            </div>
            <div className='footer-social'>
              <h3>Follow Us</h3>
              <div className='footer-social--icons'>
                <div>
                  <FaDiscord className='icons' />
                </div>
                <div>
                  <FaInstagram className='icons' />
                </div>
                <div>
                  <FaYoutube className='icons' />
                </div>
              </div>
            </div>
            <div className='footer-contact'>
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>

          <div className='footer-bottom--section'>
            <hr />
            <div className='container grid grid-two-column '>
              <p>@{new Date().getFullYear()} Converter. All Rights Reserved</p>
              <div>
                <span>PRIVACY POLICY</span> nbsp; nbsp;
                <span>TERMS & CONDITIONS</span>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 4rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    span {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 1rem 0 1rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
