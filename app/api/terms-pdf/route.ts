import { NextResponse } from "next/server"

export async function GET() {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SuccessNOW.ai - Terms and Conditions of Use</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .content {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            color: #00BFFF;
            margin-bottom: 10px;
        }
        h2 {
            color: #333;
            border-bottom: 2px solid #00BFFF;
            padding-bottom: 5px;
            margin-top: 30px;
        }
        h3 {
            color: #555;
            margin-top: 25px;
        }
        h4 {
            color: #666;
            margin-top: 20px;
        }
        .section {
            margin-bottom: 25px;
        }
        .subsection {
            margin-left: 20px;
            margin-bottom: 15px;
        }
        ul, ol {
            margin-left: 20px;
        }
        li {
            margin-bottom: 5px;
        }
        .highlight {
            background-color: #fff3cd;
            padding: 15px;
            border-left: 4px solid #ffc107;
            margin: 15px 0;
        }
        .important {
            background-color: #f8d7da;
            padding: 15px;
            border-left: 4px solid #dc3545;
            margin: 15px 0;
        }
        .contact-info {
            background-color: #e7f3ff;
            padding: 20px;
            border-radius: 8px;
            margin-top: 30px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
            font-size: 0.9em;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>SuccessNOW.ai</h1>
        <h2>Terms and Conditions of Use</h2>
        <p><strong>Effective Date: March 24, 2025</strong></p>
    </div>

    <div class="content">
        <div class="important">
            <strong>Important Notice:</strong> By accessing or using SuccessNOW.ai services, you agree to be bound by these Terms and Conditions. Please read this document carefully.
        </div>

        <div class="section">
            <p>Welcome to <strong>SuccessNOW.ai</strong> (the "Website"), a product of SuccessNOW AI Platform. This Terms of Use Agreement (the "Agreement") is made and entered into by and between you and <strong>SuccessNOW AI INC</strong> doing business as <strong>SuccessNOW AI™</strong> (the "Company", "us", "we", or "our"). This Agreement sets forth the terms and conditions that govern your use of and access to the Website and any products, materials, and services provided by or on the Website (collectively, the "Services").</p>
        </div>

        <h2>1. ACCEPTANCE OF THIS AGREEMENT</h2>
        
        <h3>1.1. Acceptance Through Using or Accessing the Services</h3>
        <div class="subsection">
            <p>Please review the following terms carefully. By accessing or using the Services (or by clicking on "accept" or "agree" to this Agreement when prompted), you agree to be bound by the terms and conditions of this Agreement on behalf of yourself or the entity or organization that you represent. If you do not agree to the terms and conditions of this Agreement, you may not use or access the Services and must exit the Website immediately.</p>
        </div>

        <h3>1.2. Eligibility Requirements to Use or Access the Services</h3>
        <div class="subsection">
            <p>To use the Website or any other Services, you must be (i) at least 16 years old, (ii) not a competitor of or using the Services for purposes that are competitive with the Company.</p>
            <p>By accessing or using the Services, you represent and warrant that you meet all the foregoing eligibility requirements. You also represent and warrant that you have the right, authority, and capacity to enter into this Agreement on your behalf or the entity or organization that you represent. If you do not meet all these requirements, you may not use or access the Services.</p>
        </div>

        <h3>1.3. Changes to this Agreement</h3>
        <div class="subsection">
            <p>The Company reserves the right to change this Agreement from time to time in its sole discretion. Except for changes made for legal or administrative purposes, the Company will provide reasonable advance notice before the changes become effective. All changes will apply to your use of and access to the Services from the date the changes become effective and onwards. For new users, the changes will be effective immediately.</p>
            <p>Your continued use of or access to the Services following any changes to this Agreement shall constitute your acknowledgment of such changes and agreement to be bound by the terms and conditions of such changes. You should check this page frequently so that you are aware of any changes since they are binding on you.</p>
        </div>

        <h2>Services Provided</h2>
        <div class="section">
            <p>SuccessNOW.ai offers AI-powered automation tools, smart websites, marketing systems, lead engagement agents, CRM automation, paid ads management, SEO optimization, and other business growth solutions. These services are integrated into a proprietary system managed entirely by SuccessNOW.</p>
            <p>Some elements of the SuccessNOW system may include white-labeled technology solutions provided by third-party vendors, but all services are fully managed, configured, and supported exclusively by SuccessNOW.ai.</p>
        </div>

        <h2>Ownership and Access Rights</h2>
        <div class="section">
            <p>All websites, funnels, automations, AI agents, CRM systems, campaigns, and software configurations created or implemented by SuccessNOW are proprietary to SuccessNOW.ai.</p>
            <p>Upon subscription cancellation, termination, or account closure:</p>
            <ul>
                <li>No data, assets, websites, automations, or technology are transferable to any external provider or platform.</li>
                <li>Access to all SuccessNOW systems and services will be discontinued.</li>
                <li>No refunds or data exports will be provided for proprietary systems.</li>
            </ul>
            <p>You retain access only to assets explicitly delivered for download (e.g., PDFs or editable templates) and not to hosted, coded, or automated systems.</p>
        </div>

        <h2>Payment Terms</h2>
        <div class="section">
            <p>You agree to the pricing and payment schedule presented during onboarding, which may include:</p>
            <ul>
                <li>A one-time setup fee (non-refundable)</li>
                <li>A recurring subscription (monthly or annually)</li>
                <li>Additional service fees for upgrades or support tiers</li>
            </ul>
            <p>Failure to maintain active payment may result in service suspension or termination without access to data recovery.</p>
            <p>You may cancel your subscription by submitting written notice before your next billing cycle. Cancellation will take effect at the end of the current paid period.</p>
        </div>

        <h2>Third-Party Services</h2>
        <div class="section">
            <p>While parts of the platform may utilize third-party systems under a white-label arrangement:</p>
            <ul>
                <li>You are contracting exclusively with SuccessNOW.ai</li>
                <li>All integration, customization, hosting, and management are handled by SuccessNOW</li>
                <li>You do not hold any direct license or rights to the underlying third-party technology</li>
            </ul>
            <p>We reserve the right to substitute, upgrade, or adjust the underlying technology used in the delivery of services without notice.</p>
        </div>

        <h2>Client Responsibilities</h2>
        <div class="section">
            <p>You agree to:</p>
            <ul>
                <li>Use the platform for lawful business purposes only</li>
                <li>Provide accurate information for onboarding and support</li>
                <li>Not duplicate, reverse-engineer, extract, or migrate SuccessNOW systems or content to external platforms</li>
            </ul>
            <p>Use of the SuccessNOW.ai platform to engage in unethical, deceptive, or illegal activity is grounds for immediate termination.</p>
        </div>

        <h2>Termination by SuccessNOW.ai</h2>
        <div class="section">
            <p>We reserve the right to suspend or terminate your access at any time for violations of these terms, abuse of platform resources, non-payment, or activity that may compromise system integrity.</p>
            <p>Upon termination, all services and systems will be deactivated and access to all hosted assets will cease immediately.</p>
        </div>

        <h2>No Guarantees</h2>
        <div class="section">
            <p>SuccessNOW does not guarantee specific financial results, performance metrics, or ROI. The effectiveness of AI automation, advertising, or SEO tools depends on variables beyond our control, including but not limited to market conditions, client responsiveness, and third-party platform rules.</p>
        </div>

        <h2>Limitation of Liability</h2>
        <div class="section">
            <p>To the fullest extent permitted by law, SuccessNOW shall not be liable for any indirect, incidental, punitive, or consequential damages arising out of or in connection with the use—or inability to use—our platform or services.</p>
        </div>

        <h2>Changes to Terms</h2>
        <div class="section">
            <p>We may update these Terms from time to time. Continued use of the SuccessNOW platform after such updates constitutes acceptance of the revised terms.</p>
        </div>

        <h2>Governing Law</h2>
        <div class="section">
            <p>This Agreement shall be governed by and construed in accordance with the laws of the Cayman Islands, where SuccessNOW.ai is incorporated.</p>
        </div>

        <h2>2. ACCESS TO THE SERVICES</h2>
        
        <h3>2.1. Changes to Your Access and the Services</h3>
        <div class="subsection">
            <p>The Services may change from time to time as the Company evolves, refines, or adds more features to the Services. The Company reserves the right to modify, withdraw, or discontinue the Services, in whole or in part, at any time without notice to you. You agree that the Company shall have no liability to you or any third party for any losses or damages caused by the Services not being available, in whole or in part, at any time or for any period.</p>
        </div>

        <h3>2.2. Creating an Account</h3>
        <div class="subsection">
            <p>You may be required to register for an account and provide certain information about yourself to access the Services or certain features of the Services. You promise to provide us with accurate, complete, and updated information about yourself. The Company may have different types of accounts for different users. If you connect to any Services with a third-party service, you grant us permission to access and use your information from such service as permitted by that service to store your login credentials for that service. All information that you provide will be governed by our Privacy Policy. You consent to all actions that we may take with respect to your information consistent with our Privacy Policy.</p>
        </div>

        <h3>2.3. Account Responsibilities</h3>
        <div class="subsection">
            <p>You are entirely responsible for maintaining the confidentiality of your password and account. You are also entirely responsible for any and all activities associated with your account. Your account is personal to you and you agree not to provide any other person with access to the Services or any portions of it using your username, password, or other security information. You should ensure that you exit from your account at the end of each session. You should use extra caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information. You may not transfer your account to anyone else without our prior written permission. You agree to notify the Company immediately of any actual or suspected unauthorized use of your account or any other breach of security. The Company will not be liable for any losses or damages arising from your failure to comply with the above requirements. You will be held liable for losses or damages incurred by the Company or any third party due to someone else using your account or password.</p>
        </div>

        <h3>2.4. Termination or Deletion of an Account</h3>
        <div class="subsection">
            <p>The Company shall have the right to suspend or terminate your account at any time in our sole discretion for any or no reason, including if we determine that you have violated any terms or conditions of this Agreement.</p>
        </div>

        <h2>3. ARTIFICIAL INTELLIGENCE (AI) SERVICES</h2>
        
        <h3>3.1. Nature of AI Services</h3>
        <div class="subsection">
            <p>The Services may include AI-powered features, including but not limited to AI voice assistants, text-based chatbots, and other automated tools (collectively, "AI Services"). These AI Services use artificial intelligence technologies, including machine learning models, natural language processing, and other automated systems to provide responses, generate content, and assist users.</p>
        </div>

        <h3>3.2. Disclosure of AI Interaction</h3>
        <div class="subsection">
            <p>When you interact with our AI Services, you are communicating with an automated system, not a human representative. We will clearly identify when you are interacting with an AI agent rather than a human. You acknowledge and understand this distinction when using our Services.</p>
        </div>

        <h3>3.3. AI Limitations and Disclaimers</h3>
        <div class="subsection">
            <p>You acknowledge and agree to the following regarding our AI Services:</p>
            <ol type="a">
                <li><strong>Inherent Limitations:</strong> AI technology has inherent limitations and may occasionally provide incomplete, inaccurate, inappropriate, or unexpected responses. The Company makes no guarantees about the accuracy, quality, or appropriateness of AI-generated content or responses.</li>
                <li><strong>Not Professional Advice:</strong> Information provided by our AI Services is for general informational purposes only and should not be considered professional advice (legal, financial, medical, or otherwise). You should not rely solely on our AI Services for making critical decisions without independent verification by qualified professionals.</li>
                <li><strong>Content Accuracy:</strong> AI-generated content may not always reflect our official position, policies, or advice. In all cases, the Company's official policies, terms, conditions, and human communications supersede any information provided by our AI Services in case of discrepancies.</li>
                <li><strong>Third-Party Information:</strong> Our AI Services may reference, summarize, or relay information from third-party sources. The Company does not endorse or verify the accuracy of such information.</li>
                <li><strong>Content Modification:</strong> The Company reserves the right to review, modify, or remove any AI-generated content at our discretion without notice.</li>
            </ol>
        </div>

        <h3>3.4. User Responsibilities When Using AI Services</h3>
        <div class="subsection">
            <p>When using our AI Services, you agree to:</p>
            <ol type="a">
                <li>Use our AI Services only for lawful purposes and in accordance with this Agreement.</li>
                <li>Not attempt to manipulate, "jailbreak," or circumvent the safety and ethical guardrails implemented in our AI Services.</li>
                <li>Not use our AI Services to generate content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, invasive of another's privacy, hateful, or otherwise objectionable.</li>
                <li>Verify any important information provided by our AI Services before relying on it for important decisions.</li>
                <li>Not use our AI Services to impersonate others or attempt to obtain sensitive or confidential information from other users.</li>
            </ol>
        </div>

        <h3>3.5. Data Use for AI Training and Improvement</h3>
        <div class="subsection">
            <p>By using our AI Services, you acknowledge and agree that:</p>
            <ol type="a">
                <li>We may collect, store, and analyze your interactions with our AI Services, including your queries, preferences, and feedback.</li>
                <li>We may use this information to train, improve, and optimize our AI models and Services.</li>
                <li>We take reasonable measures to protect any personal information in accordance with our Privacy Policy.</li>
                <li>You can request deletion of your conversation history with our AI Services by contacting support@successnow.ai</li>
            </ol>
        </div>

        <h3>3.6. Bot Disclosure</h3>
        <div class="subsection">
            <p>In accordance with applicable laws and regulations, we disclose that our automated agents are bots, and this disclosure is made at the beginning of any conversation or interaction with an AI agent.</p>
        </div>

        <h3>3.7. Intellectual Property in AI-Generated Content</h3>
        <div class="subsection">
            <ol type="a">
                <li><strong>Ownership of AI-Generated Content:</strong> Unless otherwise specified in writing, content generated by our AI Services in response to your prompts or inputs is owned by the Company. However, we grant you a limited, non-exclusive, non-transferable license to use such AI-generated content for your personal or internal business purposes.</li>
                <li><strong>No Commercialization:</strong> You may not sell, license, or otherwise commercialize any content generated by our AI Services without our explicit written permission.</li>
                <li><strong>No Representations:</strong> You agree not to represent AI-generated content as being created by a human or to misrepresent the source of such content.</li>
            </ol>
        </div>

        <h3>3.8. AI Service Availability and Modifications</h3>
        <div class="subsection">
            <ol type="a">
                <li><strong>Service Availability:</strong> We strive to make our AI Services available continuously, but we do not guarantee uninterrupted access. AI Services may be temporarily unavailable due to maintenance, upgrades, or factors beyond our control.</li>
                <li><strong>Feature Modifications:</strong> We may modify, update, or discontinue any aspect of our AI Services at any time without prior notice. This includes altering capabilities, removing features, or changing how our AI Services function.</li>
                <li><strong>No Compensation:</strong> No compensation will be provided for any modifications, suspensions, or discontinuations of our AI Services.</li>
            </ol>
        </div>

        <h3>3.9. Liability Limitation for AI Interactions</h3>
        <div class="subsection">
            <p>To the fullest extent permitted by law, the Company disclaims all liability for any damages, losses, or harm arising from:</p>
            <ol type="a">
                <li>Reliance on information or content provided by our AI Services.</li>
                <li>AI system errors, malfunctions, or unavailability.</li>
                <li>Decisions made or actions taken based on AI-generated information.</li>
                <li>Any misunderstandings, miscommunications, or disappointments that may occur during AI interactions.</li>
                <li>Any offensive, inappropriate, or objectionable content that may be generated by our AI Services, despite our safeguards.</li>
            </ol>
        </div>

        <h2>4. POLICY FOR USING THE SERVICES</h2>
        
        <h3>4.1. Prohibited Uses</h3>
        <div class="subsection">
            <p>You may use the Services for lawful purposes only and in accordance with this Agreement. You agree not to use the Services in any way that could damage the Services or general business of the Company. You may use the Services for any business or commercial purposes.</p>
        </div>

        <h3>4.2. Prohibited Activities</h3>
        <div class="subsection">
            <p>You further agree not to engage in any of the following prohibited activities in connection with using the Services:</p>
            <ol type="a">
                <li><strong>No Violation of Laws or Obligations:</strong> Violate any applicable laws or regulations (including intellectual property laws and right of privacy or publicity laws) or any contractual obligations.</li>
                <li><strong>No Unsolicited Communications:</strong> Send any unsolicited or unauthorized advertising, promotional materials, spam, junk mail, chain letters, or any other form of unsolicited communications, whether commercial or otherwise.</li>
                <li><strong>No Impersonation:</strong> Impersonate others or otherwise misrepresent your affiliation with a person or entity in an attempt to mislead, confuse, or deceive others.</li>
                <li><strong>No Harming of Minors:</strong> Exploit or harm minors in any way, including exposing inappropriate content or obtaining personally identifiable information.</li>
                <li><strong>Compliance with Content Standards:</strong> Upload, display, distribute, or transmit any material that does not comply with the Content Standards set out below in this Agreement.</li>
                <li><strong>No Interference with Others' Enjoyment:</strong> Harass or interfere with anyone's use or enjoyment of the Services, or expose the Company or other users to liability or other harm.</li>
                <li><strong>No Interference or Disabling of the Services:</strong> Use any device, software, or routine that interferes with the proper working of the Services, or take any action that may interfere with, disrupt, disable, impair, or create an undue burden on the infrastructure of the Services, including servers or networks connected to the Website.</li>
                <li><strong>No Monitoring or Copying Material:</strong> Copy, monitor, distribute, or disclose any part of the Services by automated or manual processes, devices, or means.</li>
                <li><strong>No Viruses, Worms, or Other Damaging Software:</strong> Upload, transmit, or distribute to or through the Services any viruses, Trojan horses, worms, logic bombs, or other materials intended to damage or alter the property of others.</li>
                <li><strong>No Unauthorized Access or Violation of Security:</strong> Violate the security of the Services through any attempt to gain unauthorized access to the Services or to other systems or networks connected to the Services.</li>
                <li><strong>No Reverse Engineering:</strong> Reverse engineer, decompile, or otherwise attempt to obtain the source code or underlying information of or relating to the Services.</li>
                <li><strong>No Collecting User Data:</strong> Collect, harvest, or assemble any data or information regarding any other user without their consent.</li>
                <li><strong>No Other Interference:</strong> Otherwise attempt to interfere with the proper working of the Services.</li>
                <li><strong>Attempt or Assist Others in Attempting:</strong> Attempt any of the foregoing or assist, permit, or encourage others to do or attempt any of the foregoing.</li>
            </ol>
        </div>

        <h3>4.3. Geographic Restrictions</h3>
        <div class="subsection">
            <p>The Company is based in the Cayman Islands. While our Services are intended primarily for users in the United States, Canada, they may be accessed internationally. By choosing to access the Services from any location, you accept full responsibility for compliance with all local laws. The Company makes no representations that the Services or any of its content are accessible or appropriate outside of the United States.</p>
        </div>

        <h2>5. TERMS AND CONDITIONS OF SALE</h2>
        
        <h3>5.1. Purchasing Process</h3>
        <div class="subsection">
            <p>Any steps taken from choosing Services to order submission form part of the purchasing process. The purchasing process includes these steps:</p>
            <ol type="a">
                <li>By clicking on the checkout button, users open the third-party merchant checkout section, wherein they will have to specify their contact details and a payment method of their choice.</li>
                <li>After providing all the required information, users must carefully review the order and, subsequently, confirm and submit it by using the relevant button or mechanism on the Website, hereby accepting these Terms and committing to pay the agreed-upon price.</li>
            </ol>
        </div>

        <h3>5.2. Order Submission</h3>
        <div class="subsection">
            <p>When you submit an order, the following applies:</p>
            <ol type="a">
                <li>The submission of an order determines contract conclusion and therefore creates for you the obligation to pay the price, taxes, and possible further fees and expenses, as specified on the order page.</li>
                <li>In case the purchased Services requires active input from you, such as the provision of personal information or data, specifications or special wishes, the order submission creates an obligation for you to cooperate accordingly.</li>
                <li>Upon submission of the order, users will receive a receipt confirming that the order has been received.</li>
            </ol>
            <p>All notifications related to the described purchasing process shall be sent to the email address provided by you for such purposes.</p>
        </div>

        <h3>5.3. Prices</h3>
        <div class="subsection">
            <p>You are informed during the purchasing process and before order submission, about any fees, taxes and costs (including, if any, delivery costs) that they will be charged.</p>
        </div>

        <h3>5.4. Methods of Payment</h3>
        <div class="subsection">
            <p>Information related to accepted payment methods are made available during the purchasing process. Some payment methods may only be available subject to additional conditions or fees. In such cases related information can be found in the dedicated section of the Website. All payments are independently processed through third-party services. Therefore, the Website does not collect any payment information -- such as credit card details -- but only receives a notification once the payment has been successfully completed. If payment through the available methods fail or is refused by the payment service provider, the Company shall be under no obligation to fulfill the purchase order. Any possible costs or fees resulting from the failed or refused payment shall be borne by you.</p>
        </div>

        <h3>5.5. Retention of Usage Rights</h3>
        <div class="subsection">
            <p>You do not acquire any rights to use the purchased Services until the total purchase price is received by the Company.</p>
        </div>

        <h2>6. CONTRACT DURATION</h2>
        
        <h3>6.1. Subscriptions</h3>
        <div class="subsection">
            <p>Subscriptions allow you to receive Services continuously or regularly over a determined period of time. Paid subscriptions begin on the day the payment is received by the Company. In order to maintain subscriptions, you must pay the required recurring fee in a timely manner. Failure to do so may cause service interruptions.</p>
        </div>

        <h3>6.2. Fixed-term Subscriptions</h3>
        <div class="subsection">
            <p>Paid fixed-term subscriptions start on the day the payment is received by the Company and last for the subscription period chosen by you or otherwise specified during the purchasing process. Once the subscription period expires, the Services shall no longer be accessible, unless you renew the subscription by paying the relevant fee. Fixed-term subscriptions may not be terminated prematurely and shall run out upon expiration of the subscription term.</p>
        </div>

        <h3>6.3. Automatic Renewal</h3>
        <div class="subsection">
            <p>Subscriptions are automatically renewed through the payment method that you chose during purchase unless you cancel the subscription within the deadlines for termination specified in the relevant section of these Terms and/or Website. The renewed subscription will last for a period equal to the original term. You shall receive a reminder of the upcoming renewal with reasonable advance, outlining the procedure to be followed in order to cancel the automatic renewal.</p>
        </div>

        <h3>6.4. Termination</h3>
        <div class="subsection">
            <p>Recurring subscriptions may be terminated at any time by sending a clear and unambiguous termination notice to the Company using the contact details provided in this document, or — if applicable — by using the corresponding controls inside the Website.</p>
        </div>

        <h3>6.5. Termination Notice</h3>
        <div class="subsection">
            <p>If the notice of termination is received by the Company before the subscription renews, the termination shall take effect as soon as the current period is completed.</p>
        </div>

        <h2>7. INTELLECTUAL PROPERTY RIGHTS</h2>
        
        <h3>7.1. Ownership of Intellectual Property</h3>
        <div class="subsection">
            <p>You acknowledge that all intellectual property rights, including copyrights, trademarks, trade secrets, and patents, in the Services and its contents, features, and functionality (collectively, the "Content"), are owned by SuccessNOW AI INC doing business as SuccessNOW™, its licensors, or other providers of such material. The Content is protected by U.S. and international intellectual property or proprietary rights laws. Neither this Agreement nor your access to the Services transfers to you any right, title, or interest in or to such intellectual property rights. Any rights not expressly granted in this Agreement are reserved by the Company and its licensors.</p>
        </div>

        <h3>7.2. License to Use the Services</h3>
        <div class="subsection">
            <p>During the Term of this Agreement, the Company grants you a limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to use and access the Content for any business or commercial use in accordance with this Agreement. The Content may not be used for any other purpose. This license will terminate upon your cessation of use of the Services or at the termination of this Agreement.</p>
        </div>

        <h3>7.3. Certain Restrictions</h3>
        <div class="subsection">
            <p>The rights granted to you in this Agreement are subject to the following restrictions:</p>
            <ol type="a">
                <li><strong>No Copying or Distribution:</strong> You shall not copy, reproduce, publish, display, perform, post, transmit, or distribute any part of the Content in any form or by any means except as expressly permitted herein or as enabled by a feature, product, or the Services when provided to you.</li>
                <li><strong>No Modifications:</strong> You shall not modify, create derivative works from, translate, adapt, disassemble, reverse compile, or reverse engineer any part of the Content.</li>
                <li><strong>No Exploitation:</strong> You shall not sell, license, sublicense, transfer, assign, rent, lease, loan, host, or otherwise exploit the Content or the Services in any way, whether in whole or in part.</li>
                <li><strong>No Altering of Notices:</strong> You shall not delete or alter any copyright, trademark, or other proprietary rights notices from copies of the Content.</li>
                <li><strong>No Competition:</strong> You shall not access or use the Content in order to build a similar or competitive website, product, or service.</li>
                <li><strong>Systematic Retrieval:</strong> You shall not use any information retrieval system to create, compile, directly or indirectly, a database, compilation, collection or directory of the Content or other data from the Services.</li>
            </ol>
        </div>

        <h3>7.4. Trademark Notice</h3>
        <div class="subsection">
            <p>All trademarks, logos, and service marks displayed on the Services are either the Company's property or the property of third parties. You may not use such trademarks, logos, or service marks without the prior written consent of their respective owners.</p>
        </div>

        <h2>8. USER CONTENT</h2>
        
        <h3>8.1. User Generated Content</h3>
        <div class="subsection">
            <p>The Services may contain message boards, chatrooms, profiles, forums, and other interactive features that allow users to post, upload, submit, publish, display, or transmit to other users or other persons content or materials (collectively, "User Content") on or through the Services.</p>
            <p>You are solely responsible for your User Content. Please consider carefully what you choose to share. All User Content must comply with the Content Standards set forth below. Any User Content you post on or through the Services will be considered non-confidential and non-proprietary. You assume all risks associated with the use of your User Content. This includes any reliance on its accuracy, completeness, reliability, or appropriateness by other users and third parties, or any disclosure of your User Content that personally identifies you or any third party. You agree that the Company shall not be responsible or liable to any third party for any User Content posted by you or any other user of the Services.</p>
            <p>You further agree that the Company shall not be responsible for any loss or damage incurred as the result of any interactions between you and other users. Your interactions with other users are solely between you and such users. If there is a dispute between you and any other user, we are under no obligation to become involved.</p>
        </div>

        <h3>8.2. License</h3>
        <div class="subsection">
            <p>You hereby grant to the Company an irrevocable, non-exclusive, royalty-free and fully paid, transferable, perpetual, and worldwide license to reproduce, distribute, publicly display and perform, prepare derivative works of, incorporate into other works, and otherwise use and exploit your User Content, and to grant sublicenses of the foregoing rights, in connection with the Services and the Company's business including, without limitation, for promoting and redistributing part or all of the Services in any media formats and through any media channels.</p>
            <p>You represent and warrant that you have all the rights, power, and authority necessary to grant the rights granted herein to any User Content that you submit. You hereby irrevocably waive all claims and have no recourse against us for any alleged or actual infringement or misappropriation of any proprietary rights in any communication, content, or material submitted to us. Please note that all of the following licenses are subject to our Privacy Policy to the extent they relate to any User Content that contains any personally identifiable information.</p>
        </div>

        <h3>8.3. Content Standards</h3>
        <div class="subsection">
            <p>You agree not to send, knowingly receive, upload, transmit, display, or distribute any User Content that does not comply with the following standards ("Content Standards"). User Content must not:</p>
            <ol type="a">
                <li><strong>Violate Laws or Obligations:</strong> Violate any applicable laws or regulations (including intellectual property laws and right of privacy or publicity laws), or any contractual or fiduciary obligations.</li>
                <li><strong>Promote Illegal Activity or Harm to Others:</strong> Promote any illegal activity; advocate, promote, or assist any unlawful act; or create any risk of any harm, loss, or damage to any person or property.</li>
                <li><strong>Infringe Intellectual Property Rights:</strong> Infringe any copyright, trademark, patent, trade secret, moral right, or other intellectual property rights of any other person.</li>
                <li><strong>Defamatory, Abusive, or Otherwise Objectionable Material:</strong> Contain any information or material that we deem to be unlawful, defamatory, trade libelous, invasive of another's privacy or publicity rights, abusive, threatening, harassing, harmful, violent, hateful, obscene, vulgar, profane, indecent, offensive, inflammatory, humiliating to other people (publicly or otherwise), or otherwise objectionable.</li>
                <li><strong>Promotion of Sexually Explicit Material or Discrimination:</strong> Promote sexually explicit or pornographic material, violence, or discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age.</li>
                <li><strong>Fraudulent Information or Impersonation:</strong> Contain any information or material that is false, intentionally misleading, or otherwise likely to deceive any person including, without limitation, impersonating any person, or misrepresenting your identity or affiliation with any person or organization.</li>
                <li><strong>Endorsement by the Company:</strong> Represent or imply to others that it is in any way provided, sponsored, or endorsed by the Company or any other person or entity, if that is not the case.</li>
            </ol>
        </div>

        <h3>8.4. Monitoring and Enforcement</h3>
        <div class="subsection">
            <p>We reserve the right at all times, but are not obligated, to:</p>
            <ol type="a">
                <li>take any action with respect to any User Content that we deem necessary or appropriate in our sole discretion, including if we believe that such User Content violates the Content Standards or any other provision in this Agreement, or creates liability for the Company or any other person. Such action may include reporting you to law enforcement authorities.</li>
                <li>remove or reject any User Content for any or no reason in our sole discretion.</li>
                <li>disclose any User Content, your identity, or electronic communication of any kind to satisfy any law, regulation, or government request, or to protect the rights or property of the Company or any other person.</li>
                <li>Terminate or suspend your access to all or part of the Services for any or no reason, including without limitation, any violation of this Agreement.</li>
            </ol>
            <p>We do not review User Content before it is posted on or through the Services, and therefore cannot ensure prompt removal of questionable User Content. Accordingly, the Company and its affiliates, and their respective officers, directors, employees or agents, assume no liability for any action or inaction regarding transmissions, communications, or content provided by any user or third party. The Company shall have no liability or responsibility to anyone for performance or non-performance of the activities described in this Section.</p>
        </div>

        <h3>8.5. Copyright Infringement (Digital Millennium Copyright Act Policy)</h3>
        <div class="subsection">
            <p>The Company respects the intellectual property of others and expects users of the Services to do the same. If you believe that your work has been copied in a way that constitutes copyright infringement and wish to have the allegedly infringing material removed, please provide the following information to our designated copyright agent:</p>
            <ol type="a">
                <li>a physical or electronic signature of the copyright owner or a person authorized to act on their behalf;</li>
                <li>a description of the copyrighted work that you allege has been infringed;</li>
                <li>a description of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled;</li>
                <li>a description of where the material that you claim is infringing is located;</li>
                <li>your contact information, including your address, telephone number, and email address;</li>
                <li>a statement that you have a good faith belief that use of the objectionable material is not authorized by the copyright owner, its agent, or under the law; and</li>
                <li>a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
            </ol>
            <p>Please note that any misrepresentation of material fact in a written notification automatically subjects the complaining party to liability for any damages, costs, and attorneys' fees incurred by us in connection with the written notification and allegation of copyright infringement.</p>
            <p><strong>Designated copyright agent for the Company:</strong><br>
            EMAIL: support@successnow.ai</p>
        </div>

        <h3>8.6. Feedback to the Company</h3>
        <div class="subsection">
            <p>If you provide the Company with any feedback or suggestions regarding the Services ("Feedback"), you hereby assign to the Company all rights in such Feedback and agree that the Company shall have the right to use and fully exploit such Feedback and related information in any manner it deems appropriate. The Company will treat any Feedback that you provide to the Company as non-confidential and non-proprietary. You agree that you will not submit to the Company any information or ideas that you consider to be confidential or proprietary.</p>
        </div>

        <h2>9. WHITE LABEL CRM SERVICES</h2>
        
        <h3>9.1. White Label Relationship</h3>
        <div class="subsection">
            <p>We may provide white-labeled CRM services to our clients. Please be aware of the following regarding these services:</p>
        </div>

        <h3>9.2. Limitations of Responsibility</h3>
        <div class="subsection">
            <p>While the Company takes reasonable precautions to ensure the reliability and security of the Services, certain functionalities, features, and underlying technologies are provided by CRM Platform as the platform provider. You acknowledge and agree that the Company is not responsible for:</p>
            <ol type="a">
                <li>Any issues, defects, outages, or security breaches that occur within the systems controlled exclusively by the Third Party Provider</li>
                <li>Changes to the underlying CRM platform that may affect the functionality of our Services</li>
                <li>Discontinuation of features or services by the Third Party Provider that may impact our ability to provide certain aspects of the Services</li>
                <li>Data breaches or security incidents that originate within Third Party Provider's infrastructure and are not within our reasonable control</li>
            </ol>
        </div>

        <h3>9.3. Support and Intermediary Role</h3>
        <div class="subsection">
            <p>The Company will use commercially reasonable efforts to:</p>
            <ol type="a">
                <li>Communicate with CRM Provider on your behalf regarding any issues with the underlying platform</li>
                <li>Provide first-line support for all Services,</li>
                <li>Notify you promptly of any significant changes to the platform that may affect your use of the Services</li>
                <li>Advocate for solutions to any issues you encounter with the underlying platform functionality</li>
            </ol>
            <p>However, you understand and agree that the ultimate resolution of certain issues may be dependent on Third Party Provider and outside of our direct control.</p>
        </div>

        <h2>10. SMS AND TEXT MESSAGING SERVICES</h2>
        
        <h3>10.1. Compliance with Regulations</h3>
        <div class="subsection">
            <p>The text messaging services provided through the Services comply with applicable telecommunications regulations. You are required to adhere to all applicable telecommunications laws and carrier requirements when using any text messaging features. This includes, but is not limited to, obtaining proper consent before sending text messages and honoring opt-out requests.</p>
        </div>

        <h3>10.2. Required Consent Language</h3>
        <div class="subsection">
            <p>When collecting phone numbers for text messaging, you must include appropriate consent language on all forms that clearly informs recipients about the types of messages they will receive, frequency, and how to opt out.</p>
        </div>

        <h3>10.3. Prohibited Messaging Practices</h3>
        <div class="subsection">
            <p>You agree not to use the text messaging services for any of the following:</p>
            <ol type="a">
                <li>Sending messages to recipients who have not provided explicit consent</li>
                <li>Sending messages that violate the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, or any other applicable laws</li>
                <li>Sending messages containing inappropriate, offensive, or illegal content</li>
                <li>Continuing to send messages to recipients who have opted out</li>
                <li>Sending messages at inappropriate times (e.g., outside of normal business hours)</li>
            </ol>
        </div>

        <h3>10.4. Data Privacy for Text Messaging</h3>
        <div class="subsection">
            <p>You acknowledge and agree that:</p>
            <ol type="a">
                <li>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes</li>
                <li>Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the Text Message services</li>
                <li>All text messaging data will be handled in accordance with our Privacy Policy</li>
            </ol>
        </div>

        <h3>10.5. Opt-Out Management</h3>
        <div class="subsection">
            <ol type="a">
                <li>Opt-out requests must be honored immediately and permanently</li>
                <li>You will not attempt to contact individuals who have opted out through alternative means without obtaining new explicit consent</li>
                <li>The Company maintains the right to enforce these opt-out mechanisms across all customer accounts on the platform</li>
            </ol>
        </div>

        <h2>11. ASSUMPTION OF RISK</h2>
        <div class="section">
            <p>The information presented on or through the Services is made available for general information purposes only. The Company does not warrant the accuracy, completeness, suitability, or quality of any such information. Any reliance on such information is strictly at your own risk. The Company disclaims all liability and responsibility arising from any reliance placed on such information by you or any other user to the Services, or by anyone who may be informed of any of its contents.</p>
        </div>

        <h2>12. PRIVACY</h2>
        <div class="section">
            <p>For information about how SuccessNOW AI INC doing business as SuccessNOW™ collects, uses, and shares your information, please review our Privacy Policy. You agree that by using the Services you consent to the collection, use, and sharing (as set forth in the Privacy Policy) of such information.</p>
            <p>The Children's Online Privacy Protection Act requires that online service providers obtain parental consent before they knowingly collect personally identifiable information online from children who are under 13 years old. We do not knowingly collect or solicit personally identifiable information from children under 13 years old. If you are a child under 13 years old, please do not attempt to register for the Services or send any personal information about yourself to us. If we learn we have collected personal information from a child under 13 years old, we will delete that information as quickly as possible. If you believe that a child under 13 years old may have provided us personal information, please contact us.</p>
        </div>

        <h2>13. TERMINATION</h2>
        
        <h3>13.1. Termination</h3>
        <div class="subsection">
            <p>The Company may suspend or terminate your access or rights to use the Services at any time, for any reason, in our sole discretion, and without prior notice, including for any breach of the terms of this Agreement. Upon termination of your access or rights to use the Services, your right to access and use the Services will immediately cease. The Company will not have any liability whatsoever to you for any suspension or termination of your rights under this Agreement, including for termination of your account or deletion of your User Content. If you have registered for an account, you may terminate this Agreement at any time by contacting the Company and requesting termination.</p>
        </div>

        <h3>13.2. Effect of Termination</h3>
        <div class="subsection">
            <p>Upon termination of this Agreement, any provisions that by their nature should survive termination shall remain in full force and effect. This includes, without limitation, ownership or intellectual property provisions, warranty disclaimers, and limitations of liability. Termination of your access to and use of the Services shall not relieve you of any obligations arising or accruing prior to termination or limit any liability that you otherwise may have to the Company or any third party. You understand that any termination of your access to and use of the Services may involve deletion of your User Content associated with your account from our databases.</p>
        </div>

        <h2>14. NO WARRANTY</h2>
        <div class="section">
            <p><strong>THE SERVICES ARE PROVIDED ON AN "AS-IS" AND "AS AVAILABLE" BASIS. USE OF THE SERVICES IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT.</strong></p>
            <p><strong>WITHOUT LIMITING THE FOREGOING, THE COMPANY AND ITS LICENSORS DO NOT WARRANT THAT THE CONTENT IS ACCURATE, RELIABLE, COMPLETE, OR CORRECT; THAT THE SERVICES WILL MEET YOUR REQUIREMENTS; THAT THE SERVICES WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED, ERROR-FREE, OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; THAT THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR THAT THE SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR REQUIREMENTS OR EXPECTATIONS.</strong></p>
        </div>

        <h2>15. LIMITATION OF LIABILITY</h2>
        <div class="section">
            <p><strong>TO THE FULLEST EXTENT ALLOWED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY OR ITS AFFILIATES, OR THEIR RESPECTIVE LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE SERVICES, ANY THIRD-PARTY LINK, OR ANY CONTENT ON THE SERVICES OR SUCH THIRD-PARTY LINK, INCLUDING, WITHOUT LIMITATION, ANY LOSS OF USE, REVENUE, OR PROFIT, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF DATA, LOSS OF GOODWILL, OR DIMINUTION IN VALUE, OR FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, OR PUNITIVE DAMAGES WHETHER ARISING OUT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, REGARDLESS OF WHETHER SUCH DAMAGE WAS FORESEEABLE AND WHETHER OR NOT THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</strong></p>
        </div>

        <h2>16. INDEMNIFICATION</h2>
        <div class="section">
            <p>You agree to indemnify, defend, and hold harmless the Company and its affiliates and their respective officers, directors, employees, agents, affiliates, successors, and permitted assigns (collectively, "Indemnified Party") from and against any and all losses, claims, actions, suits, complaints, damages, liabilities, penalties, interest, judgments, settlements, deficiencies, disbursements, awards, fines, costs, fees, or expenses of whatever kind, including reasonable attorneys' fees, fees and other costs of enforcing any right to indemnification under this Agreement, and the cost of pursuing any insurance providers, arising out of or relating to your breach of this Agreement or your use or misuse of the Services including, but not limited to, your User Content or any actions taken by a third party using your account.</p>
        </div>

        <h2>17. DISPUTES</h2>
        
        <h3>17.1. Governing Law</h3>
        <div class="subsection">
            <p>All matters relating to this Agreement, and all matters arising out of or relating to this Agreement, whether sounding in contract, tort, or statute are governed by, and construed in accordance with, International Commonwealth Business laws, without giving effect to any conflict of law principles.</p>
        </div>

        <h3>17.2. Dispute Resolution</h3>
        <div class="subsection">
            <p>Any action or proceeding arising out of or related to this Agreement or the Services shall be brought only in a court of competent jurisdiction in the State Cayman Islands, although we retain the right to bring any suit, action, or proceeding against you for breach of this Agreement in your country of residence or any other relevant country. You hereby irrevocably submit to the jurisdiction of these courts and waive the defense of inconvenient forum to the maintenance of any action or proceeding in such venues.</p>
            <p>At the Company's sole discretion, it may require any dispute, claim, or controversy arising out of or relating to this Agreement, or the breach, termination, enforcement, interpretation, or validity thereof, to be submitted to and decided by binding arbitration under the rules Arbitration in Commonwealth law. The decision of the arbitrator shall be final and binding on the parties and may be entered and enforced in any court of competent jurisdiction by either party.</p>
            <p><strong>YOU UNDERSTAND AND AGREE THAT BY ENTERING INTO THESE TERMS, YOU ARE WAIVING THE RIGHT TO TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.</strong></p>
        </div>

        <h3>17.3. Limitation to Time to File Claims</h3>
        <div class="subsection">
            <p><strong>ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE SERVICES MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION AROSE; OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY WAIVED AND BARRED.</strong></p>
        </div>

        <h2>18. GENERAL PROVISIONS</h2>
        
        <h3>18.1. Entire Agreement</h3>
        <div class="subsection">
            <p>This Agreement, our Privacy Policy, and any other agreements expressly incorporated by reference herein, constitute the entire and exclusive understanding and agreement between you and the Company regarding your use of and access to the Services, and except as expressly permitted above may only be amended by a written agreement signed by authorized representatives of all parties to this Agreement.</p>
        </div>

        <h3>18.2. Relationship Between the Parties</h3>
        <div class="subsection">
            <p>Nothing in this Agreement shall be deemed to create an agency, partnership, joint venture, employee-employer or franchisor-franchisee relationship of any kind between us and any user.</p>
        </div>

        <h3>18.3. No Third-Party Beneficiaries</h3>
        <div class="subsection">
            <p>This Agreement is between you and the Company. No user has any rights to force the Company to enforce any rights it may have against any other user.</p>
        </div>

        <h3>18.4. Notices</h3>
        <div class="subsection">
            <p>All notices under this Agreement will be in writing and will be deemed to have been duly given when received, if personally delivered or sent by certified or registered mail, return receipt requested; when receipt is electronically confirmed, if transmitted by facsimile or e-mail; or the day after it is sent, if sent for next day delivery by recognized overnight delivery service.</p>
        </div>

        <h3>18.5. Interpretation</h3>
        <div class="subsection">
            <p>The section titles in this Agreement are for convenience only and have no legal or contractual effect. The word "including" means "including without limitation". If any part of this Agreement is held invalid or unenforceable, that portion shall be construed in a manner consistent with applicable law to reflect, as nearly as possible, the original intentions of the parties, and the remaining portions shall remain in full force and effect.</p>
        </div>

        <h3>18.6. Export Control</h3>
        <div class="subsection">
            <p>You may not use, export, import, or transfer the Services except as authorized by U.S. law, the laws of the jurisdiction in which you obtained the Services, and any other applicable laws.</p>
        </div>

        <h3>18.7. Consumer Complaints</h3>
        <div class="subsection">
            <p>In accordance with applicable consumer protection legislation, you may report complaints to the appropriate consumer protection authority in your jurisdiction.</p>
        </div>

        <h3>18.8. Anti-Spam Compliance</h3>
        <div class="subsection">
            <p>In using our Services, you agree to comply with the CAN-SPAM Act and similar legislation in other jurisdictions. This includes obtaining proper consent before sending commercial electronic messages and providing clear mechanisms for recipients to unsubscribe.</p>
        </div>

        <h3>18.9. Contact Information</h3>
        <div class="subsection">
            <p>If you have any questions, concerns, or comments about this Agreement, please contact us at:</p>
        </div>

        <div class="contact-info">
            <h3>SuccessNOW.ai Inc.</h3>
            <p>20 Genesis Close<br>
            George Town KY1-1208<br>
            Cayman Islands</p>
            <p><strong>Email:</strong> support@successnow.ai</p>
            <p><strong>Website:</strong> https://successnow.ai</p>
        </div>
    </div>

    <div class="footer">
        <p><strong>Document Generated:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Effective Date:</strong> March 24, 2025</p>
        <p><strong>SuccessNOW AI INC</strong> doing business as <strong>SuccessNOW AI™</strong></p>
        <p>This document contains the complete Terms and Conditions of Use for SuccessNOW.ai platform and services.</p>
    </div>
</body>
</html>
  `

  return new NextResponse(htmlContent, {
    headers: {
      "Content-Type": "text/html",
      "Content-Disposition": 'attachment; filename="SuccessNOW-Terms-and-Conditions.html"',
    },
  })
}
