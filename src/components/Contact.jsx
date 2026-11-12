import TransitionLink from './TransitionLink';

const WHATSAPP_NUMBER = '918667041407'; // +91 86670 41407

// The original Webflow form posted to Webflow's servers. On a self-hosted React site
// there is no such endpoint, so the form opens a pre-filled WhatsApp chat instead.
// Replace this handler with a fetch() to your own backend / Formspree / EmailJS if you prefer.
function onSubmit(e) {
  e.preventDefault();
  e.stopPropagation();
  const form = e.currentTarget;
  const data = new FormData(form);
  const text = [
    "Hi Sam, I'd like to start a project.",
    `Name: ${data.get('Name') || ''}`,
    `Email: ${data.get('Email') || ''}`,
    `Service: ${data.get('Services') || ''}`,
    '',
    `${data.get('Message') || ''}`,
  ].join('\n');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  const wrap = form.parentElement;
  const done = wrap && wrap.querySelector('.w-form-done');
  if (done) {
    form.style.display = 'none';
    done.style.display = 'block';
  }
}

export default function Contact() {
  return (
      <div className="contact_component" style={{"display": "none"}}>
        <div className="contact_bg-wrap">
          <div className="contact_bg" />
        </div>
        <div className="contact_wrap">
          <a data-scroll="start" data-cursor="close" href="#" className="contact_close-w w-inline-block">
            <div className="contact_close-btn">
              <div className="icon_embed20">
                <div className="svg-icon w-embed">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.86621 4.61621C5.32387 4.15855 6.04809 4.12979 6.53906 4.53027L6.63379 4.61621L19.1338 17.1162L19.2197 17.2109C19.6202 17.7019 19.5915 18.4261 19.1338 18.8838C18.6761 19.3415 17.9519 19.3702 17.4609 18.9697L17.3662 18.8838L4.86621 6.38379L4.78027 6.28906C4.37979 5.79809 4.40855 5.07387 4.86621 4.61621Z" fill="#FAFAFA" />
                    <path d="M19.1338 4.61621C18.6761 4.15855 17.9519 4.12979 17.4609 4.53027L17.3662 4.61621L4.86621 17.1162L4.78027 17.2109C4.37979 17.7019 4.40855 18.4261 4.86621 18.8838C5.32387 19.3415 6.04809 19.3702 6.53906 18.9697L6.63379 18.8838L19.1338 6.38379L19.2197 6.28906C19.6202 5.79809 19.5915 5.07387 19.1338 4.61621Z" fill="#FAFAFA" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <div className="contact_main">
            <div data-lenis-prevent="" className="contact_inner">
              <div className="contact_main-top">
                <h4 className="title-l">
                  {"get in touch"}
                </h4>
                <div className="contact_form-block w-form">
                  <form onSubmitCapture={onSubmit} id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" className="contact_form" data-wf-page-id="678a8007cb26ff76720a94b1" data-wf-element-id="aceaa5dd-0a41-602a-7df9-a52efa14d43e" aria-label="Contact Form">
                    <div className="w-layout-grid form_fields-grid">
                      <div className="form-field_component">
                        <div className="field_label">
                          <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/682edf6631580393fef30a86_profile-v2.json" className="field_lottie" />
                          <label htmlFor="name-2" className="txt-size-s txt-caps">
                            {"Name"}
                            <span className="txt-color-light-60o">
                              {"*"}
                            </span>
                          </label>
                        </div>
                        <input className="field_input w-input" maxLength="256" name="Name" data-name="Name" placeholder="Full Name" type="text" id="Name" />
                      </div>
                      <div className="form-field_component">
                        <div className="field_label">
                          <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/68273156c7716cc91e9d2192_mail%20(1).json" className="field_lottie" />
                          <label htmlFor="name-2" className="txt-size-s txt-caps">
                            {"email"}
                            <span className="txt-color-light-60o">
                              {"*"}
                            </span>
                          </label>
                        </div>
                        <input className="field_input w-input" maxLength="256" name="Email" data-name="Email" placeholder="exemple@mail.com" type="email" id="Email" />
                      </div>
                    </div>
                    <div className="form-field_component">
                      <div className="field_label">
                        <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/682731560bfd5d0633b391ec_services.json" className="field_lottie" />
                        <label htmlFor="name-2" className="txt-size-s txt-caps">
                          {"services needed"}
                          <span className="txt-color-light-60o">
                            {"*"}
                          </span>
                        </label>
                      </div>
                      <div className="w-layout-grid form_radio-grid">
                        <label className="field_radio-button w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom form_radio-button w-radio-input" />
                          <input type="radio" name="Services" id="Design" data-name="Services" style={{"opacity": "0", "position": "absolute", "zIndex": "-1"}} value="Portfolio website" />
                          <span className="txt-color-light-60o w-form-label" htmlFor="Design">
                            {"Portfolio website"}
                          </span>
                        </label>
                        <label className="field_radio-button w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom form_radio-button w-radio-input" />
                          <input type="radio" name="Services" id="Webflow" data-name="Services" style={{"opacity": "0", "position": "absolute", "zIndex": "-1"}} value="E-commerce website" />
                          <span className="txt-color-light-60o w-form-label" htmlFor="Webflow">
                            {"E-commerce website"}
                          </span>
                        </label>
                        <label className="field_radio-button w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom form_radio-button w-radio-input" />
                          <input type="radio" name="Services" id="Design-Webflow" data-name="Services" style={{"opacity": "0", "position": "absolute", "zIndex": "-1"}} value="Portfolio + E-commerce" />
                          <span className="txt-color-light-60o w-form-label" htmlFor="Design-Webflow">
                            {"Portfolio + E-commerce"}
                          </span>
                        </label>
                        <label className="field_radio-button w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom form_radio-button w-radio-input" />
                          <input type="radio" name="Services" id="Other" data-name="Services" style={{"opacity": "0", "position": "absolute", "zIndex": "-1"}} value="Other" />
                          <span className="txt-color-light-60o w-form-label" htmlFor="Other">
                            {"Other"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field_component">
                      <div className="field_label">
                        <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/68273156c032f162aff3a4ab_message.json" className="field_lottie" />
                        <label htmlFor="name-2" className="txt-size-s txt-caps">
                          {"message"}
                          <span className="txt-color-light-60o">
                            {"*"}
                          </span>
                        </label>
                      </div>
                      <textarea id="Message-2" name="Message" maxLength="5000" data-name="Message" placeholder="Tell me more about your project. Don’t hesitate to include links if necessary." required className="field_input text_area w-input" />
                    </div>
                    <div className="form_button-trigger">
                      <input type="submit" data-wait="Please wait..." className="form_button w-button" value="Send Message" />
                    </div>
                  </form>
                  <div className="contact_success w-form-done" tabIndex="-1" role="region" aria-label="Contact Form success">
                    <div className="contact_success-inner">
                      <h4 className="title-s">
                        {"Thanks for reaching out!"}
                      </h4>
                      <div className="txt-size-s txt-caps opacity60">
                        {"I’ll get back to you within a day."}
                      </div>
                    </div>
                  </div>
                  <div className="contact_error w-form-fail" tabIndex="-1" role="region" aria-label="Contact Form failure">
                    <div className="txt-color-dark txt-caps txt-size-s txt-align-center">
                      {"Oops! Something went wrong while submitting the form."}
                      <br />
                      <span className="txt-color-dark-60o">
                        {"please try again later"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_main-border" />
              <div className="divider is_contact" />
              <a href="https://www.instagram.com/sam.codecraft/" target="_blank" className="form_alternative-w w-inline-block">
                <div className="txt-size-s txt-caps opacity60">
                  {"don't like forms ?"}
                </div>
                <div className="form_alternative-link txt-underline">
                  <div className="icon_embed20">
                    <div className="svg-icon w-embed">
                      <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.5" y="2.5" width="15" height="15" rx="4.5" stroke="currentColor" strokeWidth="1.2" />
                        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.2" />
                        <circle cx="14.6" cy="5.4" r="1" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="txt-size-s txt-caps">
                    {"dm me on instagram"}
                  </div>
                </div>
              </a>
            </div>
            <div className="contact_form-overlay" />
          </div>
        </div>
      </div>
  );
}
