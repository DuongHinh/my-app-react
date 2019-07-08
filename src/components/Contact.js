import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class Contact extends Component {
    constructor(props){
       super(props);
       this.state = {
           isRedirect: false,
           fName: "",
           fEmail: "",
           fPhone: "",
           fMessage: "",
           fDate: "Sunday"
       }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    isFileChange = (event) => {
        const fileName = event.target.files[0].name;
        this.setState({
            fFile : fileName
        });
    }

    submitForm = () => {       
        this.setState ({
            isRedirect : true
        })
    }

    print = () => {
        var contentSubnmit = "";
        contentSubnmit += "Name: " + this.state.fName + ", ";
        contentSubnmit += "Email: " + this.state.fEmail + ", ";
        contentSubnmit += "Phone: " + this.state.fPhone + ", ";
        contentSubnmit += "Message: " + this.state.fMessage + ", ";
        contentSubnmit += "Date: " + this.state.fDate + ", ";
        contentSubnmit += "Image: " + this.state.fFile;
        return contentSubnmit;
    }

    render() {
        if(this.state.isRedirect){
            console.log(this.print());
            return <Redirect to="/" />
        }
        return (
            <div>
                 {/* begin contact */}
             <div>
                <header className="masthead news">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-1 text-center">Contact</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
               
                <section className="page-section" id="contact">
                    <div className="container">
                    {/* Contact Section Heading */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                        </div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Contact Section Form */}
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                        <form onSubmit={e => e.preventDefault()} name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input onChange = {(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group  controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input onChange = {(event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input onChange = {(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea onChange = {(event) => this.isChange(event)} name="fMessage" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Choose date</label>
                                    <select className="form-control" value={this.state.fDate} onChange = {(event) => this.isChange(event)} name="fDate" id="">
                                        <option value="Monday">Monday</option>
                                        <option value="Tueday">Tueday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                        <option value="Sunday">Sunday</option>
                                    </select>
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Choose file</label>
                                    <input className="form-control-file" type="file" onChange = {(event) => this.isFileChange(event)} name = "fFile"/>
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <br />
                            <div id="success" />
                            <div className="form-group">
                            <button type="submit" onClick = {() => this.submitForm()} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end contact */}
                </div>

            </div>
        );
    }
}

export default Contact;