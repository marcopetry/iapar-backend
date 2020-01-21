const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

exports.send = async (to, token) => {
    sgMail.send({
        to: to,
        from: 'noreply@iapar.com',
        subject: 'Confirmação de cadastro IAPAR',
        text: 'and easy to do anywhere, even with Node.js',
        html: `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
                <!--[if !mso]><!-->
                <meta http-equiv="X-UA-Compatible" content="IE=Edge">
                <!--<![endif]-->
                <!--[if (gte mso 9)|(IE)]>
                <xml>
                <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                <!--[if (gte mso 9)|(IE)]>
            <style type="text/css">
            body {width: 600px;margin: 0 auto;}
            table {border-collapse: collapse;}
            table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
            img {-ms-interpolation-mode: bicubic;}
            </style>
        <![endif]-->
                <style type="text/css">
            body, p, div {
                font-family: arial,helvetica,sans-serif;
                font-size: 14px;
            }
            body {
                color: #000000;
            }
            body a {
                color: #1188E6;
                text-decoration: none;
            }
            p { margin: 0; padding: 0; }
            table.wrapper {
                width:100% !important;
                table-layout: fixed;
                -webkit-font-smoothing: antialiased;
                -webkit-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
            img.max-width {
                max-width: 100% !important;
            }
            .column.of-2 {
                width: 50%;
            }
            .column.of-3 {
                width: 33.333%;
            }
            .column.of-4 {
                width: 25%;
            }
            @media screen and (max-width:480px) {
                .preheader .rightColumnContent,
                .footer .rightColumnContent {
                text-align: left !important;
                }
                .preheader .rightColumnContent div,
                .preheader .rightColumnContent span,
                .footer .rightColumnContent div,
                .footer .rightColumnContent span {
                text-align: left !important;
                }
                .preheader .rightColumnContent,
                .preheader .leftColumnContent {
                font-size: 80% !important;
                padding: 5px 0;
                }
                table.wrapper-mobile {
                width: 100% !important;
                table-layout: fixed;
                }
                img.max-width {
                height: auto !important;
                max-width: 100% !important;
                }
                a.bulletproof-button {
                display: block !important;
                width: auto !important;
                font-size: 80%;
                padding-left: 0 !important;
                padding-right: 0 !important;
                }
                .columns {
                width: 100% !important;
                }
                .column {
                display: block !important;
                width: 100% !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                }
            }
            </style>
                <!--user entered Head Start--><!--End Head user entered-->
            </head>
            <body>
                <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#FFFFFF;">
                <div class="webkit">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
                    <tbody><tr>
                        <td valign="top" bgcolor="#FFFFFF" width="100%">
                        <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tbody><tr>
                            <td width="100%">
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tbody><tr>
                                    <td>
                                    <!--[if mso]>
            <center>
            <table><tr><td width="600">
            <![endif]-->
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                                <tbody><tr>
                                                <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
            <tbody><tr>
                <td role="module-content">
                <p></p>
                </td>
            </tr>
            </tbody></table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="69f0a7e8-cab7-44a2-8d8b-9275557ccdaa">
            <tbody>
                <tr>
                <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                    <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:30% !important; width:30%; height:auto !important;" width="180" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/daa5dc9fa8471ba4/bef642c1-8537-47ec-bc14-15cd8538ef61/800x800.png">
                </td>
                </tr>
            </tbody>
            </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f7db221f-2b20-4617-bc4f-c82958b91bdc" data-mc-module-version="2019-10-22">
            <tbody>
                <tr>
                <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-family: verdana, geneva, sans-serif">Olá, seja bem vindo ao sistema da IAPAR.</span></div>
        <div style="font-family: inherit; text-align: inherit"><br></div>
        <div style="font-family: inherit; text-align: inherit"><span style="font-family: verdana, geneva, sans-serif">Seu cadastro está quase completo, falta apenas confirmar. Cliquei abaixo para validarmos seu</span></div>
        <div style="font-family: inherit; text-align: inherit"><span style="font-family: verdana, geneva, sans-serif">email.</span></div><div></div></div></td>
                </tr>
            </tbody>
            </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="59734236-2a5a-4bc4-b3b7-5a219d9febbb">
                <tbody>
                <tr>
                    <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
                    <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                        <tbody>
                        <tr>
                        <td align="center" bgcolor="#333333" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                            <a href="http://localhost:3333/auth/${token}" style="background-color:#333333; border:1px solid #333333; border-color:#333333; border-radius:6px; border-width:1px; color:#ffffff; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid; width:600px;" target="_blank">Clique aqui para confirmar seu cadastro</a>
                        </td>
                        </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                </tbody>
            </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="040214bf-a9d3-4f62-ba92-4772a2249b23" data-mc-module-version="2019-10-22">
            <tbody>
                <tr>
                <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Att. Coordenação IAPAR.</div><div></div></div></td>
                </tr>
            </tbody>
            </table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                                                    <div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-size:12px; line-height:20px;">{{Sender_Name}}</p><p style="font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p></div>
                                                    <p style="font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="">Unsubscribe Preferences</a></p>
                                                    </div></td>
                                                </tr>
                                            </tbody></table>
                                            <!--[if mso]>
                                            </td>
                                        </tr>
                                        </table>
                                    </center>
                                    <![endif]-->
                                    </td>
                                </tr>
                                </tbody></table>
                            </td>
                            </tr>
                        </tbody></table>
                        </td>
                    </tr>
                    </tbody></table>
                </div>
                </center>
            
            
        </body></html>
        `,
    });
}
