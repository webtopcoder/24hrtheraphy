import React from 'react';
import Link from 'next/link';

const Services = () => {
	return (
		<div className="services-area bg pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Our Services</span>
					<h2>The Therapy we offer</h2>
					<p>Online Therapy with CBT Therapists and Psychologists anytime and anywhere.<br />Choose the type of therapy you want to do and find the therapist.</p>
				</div>

				<div className="row">
					<div className="col-lg-6 col-sm-6">
						<div className="single-services">
							<span className="flaticon-man"></span>
							<h3>Individual Therapy</h3>
							<p>Individual therapy is a process of collaborative effort between the therapist and the person in therapy. The common goal of the individual therapy is to help overcome their issue and improve the quality of life. <br />Individual therapy is also called therapy, psychotherapy, talk therapy and counselling. Individual therapy can help you learn how to deal with difficult situation and make healthy decisions. At 24 hour therapy, we provide online Individual therapy through webcam.<br /> Many enjoy this journey of self-awareness and continue the therapy for self-growth.  </p>
							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-sm-6">
						<div className="single-services">
							<span className="flaticon-people"></span>
							<h3>Couples Therapy</h3>
							<p>Couples therapy is also a relationship counselling, marriage counselling and couples counselling that supports people who are in an intimate relationship. <br />Couples therapy helps you and your partner improve your relationship and help you rebuild your intimacy. Couple therapy address wide range of relationship issue such as recurring conflicts, resentments, an affair, issues related to sex or feelings of disconnection. <br />Couples therapy can help you in every stage of your relationship and helps you improve yourself as an individual.</p>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-sm-6">
						<div className="single-services">
							<span className="flaticon-doll"></span>
							<h3>Child Therapy</h3>
							<p>Therapy is for everybody and there is different type of therapy available to those in need. Many children and teens have problems and go through different kind of difficulties which impacts their learning, acting and growing capability. <br />Mental health problem can slow down a child growth psychologically and physically. Child Therapy can help children and teens understand their feelings such as grief, sadness, anger, low self-esteem. <br />At 24 hour therapy, there are therapists who are specially trained for child therapy. They help the children and teens who are going through the tough times like family conflicts, school bullying, health problems. They also help child and teens with conditions such as ADHD, eating disorders, anxiety, self-injury. </p>
							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-sm-6">
						<div className="single-services">
							<span className="flaticon-people"></span>
							<h3>Group Therapy</h3>
							<p>Different types of group therapy exist depending on the mental conditions of the people. Group therapy helps people to understand the problem and make them realize that they are not alone. <br />Group therapy helps people connect with others by sharing their problem, sharing activities, socializing. Group therapy helps people with depression, phobias, grief. </p>
							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-6">
						<div className="single-services">
							<span className="flaticon-email"></span>
							<h3>Live - Chat Therapy</h3>
							<p> Live Chat therapy can be done individually or in group. <br />If you are not comfortable talking through your problems through webcam, you can choose the chat options and text your therapists. <br />Live Chat Therapy is also designed for the people who have serious social anxiety. Having to meet with the therapist in person may not be comfortable for some people. <br />Chat Therapy can help such people overcome their problem and help them communicate. </p>
							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services;