import React, { useState } from 'react';
import { Button, Col, FormGroup, Label, Row } from 'reactstrap';
import '../../assets/css/SectionLogin.css'; // Import the custom CSS file


const ChatBot = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState('');  // <-- Use an empty string here


  const questions = [
    { id: 'yourName', text: 'What is your name?' },
    { id: 'contactInfo', text: 'What is your contact information?' },
    { id: 'siteName', text: 'What do you want the name of your site/app to be?' },
    { id: 'siteType', text: 'What type of website or app do you want?' },
    { id: 'budget', text: 'What is your budget?' },
    { id: 'siteStyle', text: 'What colors, style, and functionality do you want the site to have?' },
    { id: 'deadline', text: 'When do you want it to be ready?' },
    { id: 'additionalInfo', text: 'Anything else you want me to know about your site?' },
  ];

  const handleNext = () => {
    setAnswers({ ...answers, [questions[step].id]: inputValue });
    setInputValue('');

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const composeEmailLink = () => {
    const subject = encodeURIComponent('New Site Request');
    const body = encodeURIComponent(
      `Your Name: ${answers.yourName}\n` +
      `Contact Info: ${answers.contactInfo}\n` +
      `Site Name: ${answers.siteName}\n` +
      `Site Type and Goal: ${answers.siteType}\n` +
      `Budget: ${answers.budget}\n` +
      `Site Style: ${answers.siteStyle}\n` +
      `Deadline: ${answers.deadline}\n` +
      `Additional Info: ${answers.additionalInfo}`
    );
    return `mailto:njwright92@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="form-container text-center align-items-center justify-content-center">
      <Row>
        <Col md="12">
          <h1 style={{ marginBottom: ".5em", fontWeight: "bold", color: "white", fontSize: "4em", textShadow: "2px 2px 4px #000000" }}>
            Site Request!
          </h1>
          <h4 className='text-black mb-3'>I'm collecting information to understand your needs. Please answer the following questions.</h4>
        </Col>
        <Col md="12">
          {step < questions.length ? (
            <>
              <FormGroup className='mx-auto p-1 align-items-center justify-content-center'>
                <Row className='mx-auto p-1 m-1 align-items-center justify-content-center'>
                  <Col md="auto">
                    <Label htmlFor={questions[step].id} style={{ color: 'black' }}>
                      <h4><strong>{questions[step].text}</strong></h4>
                    </Label>

                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className='form-control mx-auto p-1 m-1 align-items-center justify-content-center'
                      rows="5"
                      style={{ width: '50vw' }}
                    >
                    </textarea>

                  </Col>
                </Row>
                <Row className="mt-3 align-items-center justify-content-center">
                  <Col md="auto">
                    <Button
                      className="btn-lg btn-round"
                      style={{
                        fontSize: '1em',
                        margin: 'auto',
                        boxShadow: '4px 4px 8px white',
                        marginBottom: '.5em',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none'
                      }}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
              {inputValue && <p className="text-black mb-3">Your response has been recorded.</p>}
            </>
          ) : (
            <>
              <h4 className="mb-1">Thanks for answering the questions! Click the button below to email me your site request with the information you provided.
              </h4>
              <Button
                className="btn-lg btn-round"
                style={{
                  fontSize: '1em',
                  margin: 'auto',
                  boxShadow: '4px 4px 8px white',
                  marginBottom: '.5em',
                  backgroundColor: '#007BFF',
                  color: 'white',
                  border: 'none'
                }}
                href={composeEmailLink()}
              >
                Send Request!
              </Button>
            </>
          )}
        </Col>
      </Row>
    </div >
  );

};

export default ChatBot;