<template>
  <div>
    <Hero>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="hero__text"></div>
          </div>
        </div>
      </div>
    </Hero>

    <section class="episodes spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Studio Gadgets</h2>
            </div>
          </div>
        </div>
        <Spinner v-if="false" />

        <Nodata title="Data not found gadgets" v-else-if="false"> </Nodata>
        <div class="row" v-else>
          <table
            bgcolor="#F5F5F5"
            cellpadding="0"
            cellspacing="0"
            class="nl-container"
            role="presentation"
            style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F5F5F5; width: 100%;"
            valign="top"
            width="100%"
          >
            <tbody>
              <tr style="vertical-align: top;" valign="top">
                <td
                  style="word-break: break-word; vertical-align: top;"
                  valign="top"
                >
                  <div style="background-color:transparent;">
                    <div
                      class="block-grid"
                      style="Margin: 0 auto; min-width: 320px;  overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"
                    >
                      <div
                        style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"
                      >
                        <div
                          class="col num12"
                          style="min-width: 320px; display: table-cell; vertical-align: top; width: 650px;"
                        >
                          <div style="width:100% !important;">
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="divider"
                                role="presentation"
                                style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                valign="top"
                                width="100%"
                              >
                                <tbody>
                                  <tr style="vertical-align: top;" valign="top">
                                    <td
                                      class="divider_inner"
                                      style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
                                      valign="top"
                                    >
                                      <table
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="divider_content"
                                        height="10"
                                        role="presentation"
                                        style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-top: 0px solid transparent; height: 10px;"
                                        valign="top"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr
                                            style="vertical-align: top;"
                                            valign="top"
                                          >
                                            <td
                                              height="10"
                                              style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                              valign="top"
                                            >
                                              <span></span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div style="background-color:transparent;">
                    <div
                      class="block-grid"
                      style="Margin: 0 auto; min-width: 320px;  overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;"
                    >
                      <div
                        style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;"
                      >
                        <div
                          class="col num12"
                          style="min-width: 320px;  display: table-cell; vertical-align: top; width: 650px;"
                        >
                          <div style="width:100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                            >
                              <div
                                style="color:#052d3d;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                              >
                                <div
                                  style="line-height: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 12px; color: #052d3d;"
                                >
                                  <p
                                    style="line-height: 24px; text-align: center; font-size: 12px; margin: 0;"
                                  >
                                    <span style="font-size: 20px;"
                                      >Your Items in cart</span
                                    >
                                  </p>
                                </div>
                              </div>
                              <!--[if mso]></td></tr></table><![endif]-->
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
                  <div style="background-color:transparent;">
                    <div
                      class="block-grid four-up no-stack"
                      style="Margin: 0 auto; min-width: 320px;  overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #F8F8F8;"
                    >
                      <div
                        style="border-collapse: collapse;display: table;width: 100%;background-color:#F8F8F8;"
                      >
                        <div
                          class="col num3"
                          style="max-width: 320px; min-width: 162px; display: table-cell; vertical-align: top; width: 162px;"
                        >
                          <div style="width:100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid #E8E8E8; padding-top:15px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                            >
                              <div
                                style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                              >
                                <div
                                  style="font-size: 12px; line-height: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #555555;"
                                >
                                  <p
                                    style="font-size: 14px; line-height: 16px; text-align: center; margin: 0;"
                                  >
                                    <strong>ITEM</strong>
                                  </p>
                                </div>
                              </div>
                              <!--[if mso]></td></tr></table><![endif]-->
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                      
                        <div
                          class="col num3"
                          style="max-width: 320px; min-width: 162px; display: table-cell; vertical-align: top; width: 161px;"
                        >
                          <div style="width:100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:1px dotted #E8E8E8; padding-top:15px; padding-bottom:5px; padding-right: 15px; padding-left: 15px;"
                            >
                              <div
                                style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                              >
                                <div
                                  style="font-size: 12px; line-height: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #555555;"
                                >
                                  <p
                                    style="font-size: 14px; line-height: 16px; text-align: center; margin: 0;"
                                  >
                                    <strong>QTY</strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <div
                          class="col num3"
                          style="max-width: 320px; min-width: 162px; display: table-cell; vertical-align: top; width: 162px;"
                        >
                          <div style="width:100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                            >
                              <div
                                style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                              >
                                <div
                                  style="font-size: 12px; line-height: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #555555;"
                                >
                                  <p
                                    style="font-size: 14px; line-height: 16px; text-align: center; margin: 0;"
                                  >
                                    <strong>PRICE</strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="background-color:transparent;">
                    <div
                      class="block-grid four-up no-stack"
                      style="Margin: 0 auto; min-width: 320px;  overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;"
                    >
                      <div
                        style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;"
                      >
                        <div
                          class="col num3"
                          style="max-width: 320px; min-width: 162px; display: table-cell; vertical-align: top; width: 162px;"
                        >
                          <div style="width:100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                            >
                              <!--<![endif]-->
                              <div
                                align="center"
                                class="img-container center fixedwidth"
                                style="padding-right: 0px;padding-left: 0px;"
                              >
                                <img
                                  align="center"
                                  alt="Image"
                                  border="0"
                                  class="center fixedwidth"
                                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1564284280/2.png"
                                  style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 130px; display: block;"
                                  title="Image"
                                  width="130"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col num3"
                          style="max-width: 320px; min-width: 162px; display: table-cell; vertical-align: top; width: 161px;"
                        >
                          <div style="width:100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:1px dotted #E8E8E8; padding-top:30px; padding-bottom:35px; padding-right: 0px; padding-left: 0px;"
                            >
                              <div
                                style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:5px;padding-left:0px;"
                              >
                                <div
                                  style="line-height: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 12px; color: #555555;"
                                >
                                  <p
                                    style="line-height: 14px; text-align: left; font-size: 12px; margin: 0;"
                                  >
                                    <span style="color: #2190e3;"
                                      ><span
                                        style="font-size: 16px; line-height: 19px;"
                                        ><strong>Laptop Bag </strong></span
                                      ></span
                                    >
                                  </p>
                                </div>
                              </div>
                              <div
                                style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:0px;"
                              >
                                <p
                                  style="font-size: 12px; line-height: 14px; color: #555555; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; margin: 0;"
                                >
                                  Laptop bag
                                </p>
                              </div>
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <div
                          class="col num3"
                          style="max-width: 320px; min-width: 162px; display: table-cell; vertical-align: top; width: 161px;"
                        >
                          <div style="width:100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:1px dotted #E8E8E8; padding-top:55px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                            >
                              <div
                                style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                              >
                                <div
                                  style="font-size: 12px; line-height: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #555555;"
                                >
                                  <p
                                    style="font-size: 14px; line-height: 24px; text-align: center; margin: 0;"
                                  >
                                    <span style="font-size: 20px;"
                                      ><strong>2</strong></span
                                    >
                                  </p>
                                </div>
                              </div>
                              <!--[if mso]></td></tr></table><![endif]-->
                              
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <div
                          class="col num3"
                          style="max-width: 320px; min-width: 162px; display: table-cell; vertical-align: top; width: 162px;"
                        >
                          <div style="width:100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:55px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                            >
                              <div
                                style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;"
                              >
                                <div
                                  style="line-height: 14px; font-size: 12px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #555555;"
                                >
                                  <p
                                    style="line-height: 24px; text-align: center; font-size: 12px; margin: 0;"
                                  >
                                    <span style="font-size: 20px;"
                                      ><span
                                        style="line-height: 24px; font-size: 20px;"
                                        ><strong>45.00</strong></span
                                      ></span
                                    >
                                  </p>
                                </div>
                              </div>
                              <!--[if mso]></td></tr></table><![endif]-->
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
                  <div style="background-color:transparent;">
                    <div
                      class="block-grid four-up no-stack"
                      style="Margin: 0 auto; min-width: 320px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #F9F9F9;"
                    >
                      <div
                        style="border-collapse: collapse;display: table;width: 100%;background-color:#F9F9F9;"
                      >
                        <div
                          class="col num3"
                          style="max-width: 320px; min-width: 162px; display: table-cell; vertical-align: top; width: 162px;"
                        >
                          <div style="width:100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                            >
                              <!--<![endif]-->
                              <div
                                align="center"
                                class="img-container center fixedwidth"
                                style="padding-right: 0px;padding-left: 0px;"
                              >
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><!
                                [endif]--><img
                                  align="center"
                                  alt="Image"
                                  border="0"
                                  class="center fixedwidth"
                                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1564284280/fem.png"
                                  style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 130px; display: block;"
                                  title="Image"
                                  width="130"
                                />
                                <!--[if mso]></td></tr></table><![endif]-->
                              </div>
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <div
                          class="col num3"
                          style="max-width: 320px; min-width: 162px; display: table-cell; vertical-align: top; width: 161px;"
                        >
                          <div style="width:100% !important;">
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:1px dotted #E8E8E8; padding-top:30px; padding-bottom:35px; padding-right: 0px; padding-left: 0px;"
                            >
                              <div
                                style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:5px;padding-left:0px;"
                              >
                                <div
                                  style="line-height: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 12px; color: #555555;"
                                >
                                  <p
                                    style="line-height: 14px; text-align: left; font-size: 12px; margin: 0;"
                                  >
                                    <span style="color: #2190e3;"
                                      ><span
                                        style="font-size: 16px; line-height: 19px;"
                                        ><strong>Winter Hoody</strong></span
                                      ></span
                                    >
                                  </p>
                                </div>
                              </div>
                              <div
                                style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:0px;"
                              >
                                <p
                                  style="font-size: 12px; line-height: 14px; color: #555555; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; margin: 0;"
                                >
                                  Winter hoody for men
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col num3"
                          style="max-width: 320px; min-width: 162px; display: table-cell; vertical-align: top; width: 161px;"
                        >
                          <div style="width:100% !important;">
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:1px dotted #E8E8E8; padding-top:55px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                            >
                              <div
                                style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                              >
                                <div
                                  style="line-height: 14px; font-size: 12px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #555555;"
                                >
                                  <p
                                    style="line-height: 24px; text-align: center; font-size: 12px; margin: 0;"
                                  >
                                    <span style="font-size: 20px;"
                                      ><strong>1</strong></span
                                    >
                                  </p>
                                </div>
                              </div>
                              <!--[if mso]></td></tr></table><![endif]-->
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="divider"
                                role="presentation"
                                style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                valign="top"
                                width="100%"
                              >
                                <tbody>
                                  <tr style="vertical-align: top;" valign="top">
                                    <td
                                      class="divider_inner"
                                      style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
                                      valign="top"
                                    >
                                      <table
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="divider_content"
                                        height="30"
                                        role="presentation"
                                        style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-top: 0px solid transparent; height: 30px;"
                                        valign="top"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr
                                            style="vertical-align: top;"
                                            valign="top"
                                          >
                                            <td
                                              height="30"
                                              style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                              valign="top"
                                            >
                                              <span></span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col num3"
                          style="max-width: 320px; min-width: 162px; display: table-cell; vertical-align: top; width: 162px;"
                        >
                          <div style="width:100% !important;">
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:55px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                            >
                              <div
                                style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;"
                              >
                                <div
                                  style="line-height: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 12px; color: #555555;"
                                >
                                  <p
                                    style="line-height: 24px; text-align: center; font-size: 12px; margin: 0;"
                                  >
                                    <span style="font-size: 20px;"
                                      ><strong>100</strong></span
                                    >
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div style="background-color:transparent;">
                    <div
                      class="block-grid"
                      style="Margin: 0 auto;  overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;"
                    >
                      <div
                        style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;"
                      >
                        <div
                          class="col num12"
                          style=" display: table-cell; vertical-align: top; width: 650px;"
                        >
                          <div style="width:100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div
                              style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:20px; padding-right: 0px; padding-left: 0px;"
                            >
                              <!--<![endif]-->
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="divider"
                                role="presentation"
                                style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                valign="top"
                                width="100%"
                              >
                                <tbody>
                                  <tr style="vertical-align: top;" valign="top">
                                    <td
                                      class="divider_inner"
                                      style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
                                      valign="top"
                                    >
                                      <table
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="divider_content"
                                        height="0"
                                        role="presentation"
                                        style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-top: 0px solid transparent; height: 0px;"
                                        valign="top"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr
                                            style="vertical-align: top;"
                                            valign="top"
                                          >
                                            <td
                                              height="0"
                                              style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                              valign="top"
                                            >
                                              <span></span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                align="center"
                                class="button-container"
                                style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                              >
                                <a
                                  href="#"
                                  style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #fc7318; border-radius: 15px; -webkit-border-radius: 15px; -moz-border-radius: 15px; width: auto; width: auto; border-top: 1px solid #fc7318; border-right: 1px solid #fc7318; border-bottom: 1px solid #fc7318; border-left: 1px solid #fc7318; padding-top: 5px; padding-bottom: 5px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"
                                  target="_blank"
                                  ><span
                                    style="padding-left:20px;padding-right:20px;font-size:18px;display:inline-block;"
                                  >
                                    <span
                                      style="font-size: 16px; line-height: 32px;"
                                      ><span
                                        style="font-size: 18px; line-height: 36px;"
                                        ><strong
                                          >FINISHING CHECKING OUT ›
                                        </strong></span
                                      ></span
                                    >
                                  </span></a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
table,
td,
tr {
  vertical-align: top;
  border-collapse: collapse;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors="true"] {
  color: inherit !important;
  text-decoration: none !important;
}

@media (max-width: 670px) {
  .block-grid,
  .col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }

  .block-grid {
    width: 100% !important;
  }

  .col {
    width: 100% !important;
  }

  .col > div {
    margin: 0 auto;
  }

  img.fullwidth,
  img.fullwidthOnMobile {
    max-width: 100% !important;
  }

  .no-stack .col {
    min-width: 0 !important;
    display: table-cell !important;
  }

  .no-stack.two-up .col {
    width: 50% !important;
  }

  .no-stack .col.num4 {
    width: 33% !important;
  }

  .no-stack .col.num8 {
    width: 66% !important;
  }

  .no-stack .col.num4 {
    width: 33% !important;
  }

  .no-stack .col.num3 {
    width: 25% !important;
  }

  .no-stack .col.num6 {
    width: 50% !important;
  }

  .no-stack .col.num9 {
    width: 75% !important;
  }

  .video-block {
    max-width: none !important;
  }

  .mobile_hide {
    min-height: 0px;
    max-height: 0px;
    max-width: 0px;
    display: none;
    overflow: hidden;
    font-size: 0px;
  }

  .desktop_hide {
    display: block !important;
    max-height: none !important;
  }
}
</style>
