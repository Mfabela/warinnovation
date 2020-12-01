<script type="text/javascript">
    $("#modal_add_network").css("overflow-y", "scroll");
</script>
<form method='' action='' id='frm_add_network'>
    <div class="frmHead">
        <p class="frmTitle">Create New WiFi Network</p>
        <ul class="frmHeadBtn">
            
        <!--SelectLanguages--
        <select  name="langdemo" class="selectdropdown_network langdemo_5">
        <option value="English"> 
        Select Language
        </option>
        <option value="English"> 
        English
        </option>
        <option value="Deutsche">
        Deutsche
        </option>
        <option value="Dutch">
        Dutch
        </option>
        <option value="French">
        French
        </option>
        <option value="Italian">
        Italian
        </option>
        <option  value="Spanish">
        Spanish
        </option>
        </select>
       <!--Select Languages-->

            <li class="frmHelpBtn headBtns"><i class="fa fa-question-circle-o frmHelp" ></i></li>
            <li class="frmCloseBtn headBtns"><i class="fa fa-close frmClose" onclick='demoClose()'></i></li>
        </ul>
    </div>
    <div class="networkNavContainer">
        <ul class="networkNav">
            <li id='li_step1'>
                <div class="step-number onStep">1</div>
                <hr class="step-divider onStep firstStep">
                <div class="step-title">Network Details</div>
            </li>
            <li id='li_step2'>
                <div class="step-number">2</div>
                <hr class="step-divider">
                <div class="step-title">Portal Type</div>
            </li>
            <li id='li_step3'>
                <div class="step-number">3</div>
                <hr class="step-divider">
                <div class="step-title">Onboarding</div>    
            </li>
            <li id='li_step4'>    
                <div class="step-number">4</div>
                <hr class="step-divider">
                <div class="step-title">Portal Web Page</div> 
            </li>
            <li id='li_step5'>
                <div class="step-number">5</div>
                <hr class="step-divider">
                <div class="step-title">Venues</div>    
            </li>
            <li id='li_step6'>
                <div class="step-number">6</div>
                <hr class="step-divider lastStep">
                <div class="step-title">Summary</div>     
            </li>
        </ul>
    </div>    
    <div>
        <div>
            <div id='step1'>
                <div class="networkContainer">
                    <div class ="networkCont1 netCont">
                        <div class="frmRow activeRadio">
                            <label for='cn_nd_name' class='frmRequired'><span class="asterix req">*</span>Network Name:</label>
                            <input type='text' name='cn_nd_name' id='cn_nd_name' autofocus onfocus='addNetworkVerifyReset("net_name")' onblur='addNetworkVerify("net_name", this.value)'/><i class="fa fa-question-circle-o blueQ" ></i>
                        </div>
                        <div class="frmRow activeRadio">
                            <label for='cn_nd_desc'><span class="asterix">*</span>Description:</label>
                            <textarea name='cn_nd_desc' id='cn_nd_desc'></textarea>
                        </div>
                        <div class="frmRadio inactiveRadio">
                            <input type='radio' name='cn_nd_access_type' id='cn_nd_access_type1' value='1' onclick='this.checked=false; modalSignUpSmall(); $("#cn_nd_access_type4").prop("checked", true);'/>
                            <label for='cn_nd_access_type1'><strong>Pre-Shared Key (PSK)</strong> <p>Requires users to enter a passphrase (that you have defined for the network) to connect</p></label>
                        </div>
                        <div class="frmRadio inactiveRadio">
                            <input type='radio' name='cn_nd_access_type' id='cn_nd_access_type2' value='2' onclick='this.checked=false; modalSignUpSmall(); $("#cn_nd_access_type4").prop("checked", true);'/>
                            <label for='cn_nd_access_type2'><strong>Enterprise AAA</strong> <p>Use 802.1X standard and WPA2 security protocols to authenticate users using an authentication server on the network</p></label>
                        </div>
                        <div class="frmRadio inactiveRadio">
                            <input type='radio' name='cn_nd_access_type' id='cn_nd_access_type3' value='3' onclick='this.checked=false; modalSignUpSmall(); $("#cn_nd_access_type4").prop("checked", true);'/>
                            <label for='cn_nd_access_type3'><strong>Cloudpath</strong> <p>Use an authentication server and Cloudpath onboarding to authenticate users</p></label>
                        </div>
                        <div class="frmRadio activeRadio">
                            
                            <div class="recommended">
                            <div style="display:block; float:left; width:100%; height:auto">
                            <img class="arrow" src="../img/arrow.png">
                            Recommended
                            </div>
                            </div>

                            <input type='radio' name='cn_nd_access_type' id='cn_nd_access_type4' value='4' checked/>
                            <label for='cn_nd_access_type4'><strong class="orangeText">Captive Portal</strong> <p>Users are authorized through a captive portal in various methods</p></label>
                        </div>
                        <div class="frmRadio inactiveRadio">
                            <input type='radio' name='cn_nd_access_type' id='cn_nd_access_type5' value='5' onclick='this.checked=false; modalSignUpSmall(); $("#cn_nd_access_type4").prop("checked", true);'/>
                            <label for='cn_nd_access_type5'><strong>Open Network </strong><p>Allow users to access the network without any authentication/security <span>(not recommended)</span></p></label>
                        </div>                   
                    </div>
                 <div class="networkCont2 netCont">
                    <p>Captive Portal</p>
                    <img class="networkImg" src="../img/click_through_diagram.png" alt="picture">
                </div>   
            </div>
        </div>
            <div id='step2' style='display: none;'>
                <div class="networkContainer">
                    <div class ="networkCont1 netCont">
                        <p class="networkItems secondText">Select ways users gain access to the network through the captive portal</p>
                        <div class="frmRadio secondRad inactiveRadio">
                            <input type='radio' name='cn_pt_access_type' id='cn_pt_access_type1' value='1' onclick='this.checked=false; modalSignUpSmall(); $("#cn_pt_access_type2").prop("checked", true);'/>
                            <label for='cn_pt_access_type1'><strong>Click-Through</strong> <p>Users just need to accept Terms and Conditions in order to access the network</p></label>
                        </div>
                        <div class="frmRadio secondRad activeRadio" >
                            <input type='radio'  name='cn_pt_access_type' id='cn_pt_access_type2' value='2' checked/>
                            <label for='cn_pt_access_type3'>
                            
                            <div class="recommended">
                            <div style="display:block; float:left; width:100%; height:auto">
                            <img class="arrow" src="../img/arrow.png">
                            Recommended
                            </div>
                            </div>
                            
                            <strong class="orangeText" >Self Sign In </strong><p>Users can sign in with their social media account or, register their details in the portal and get personal password</p></label>
                        </div>
                        <div class="frmRadio secondRad inactiveRadio">
                            <input type='radio' name='cn_pt_access_type' id='cn_pt_access_type3' value='3' onclick='this.checked=false; modalSignUpSmall(); $("#cn_pt_access_type2").prop("checked", true);'/>
                            <label for='cn_pt_access_type3'><strong>Host Approval</strong> <p>Users register their details in the portal including their host email - the host needs to approve the requeset</p></label>
                        </div>
                        <div class="frmRadio secondRad inactiveRadio">
                            <input type='radio' name='cn_pt_access_type' id='cn_pt_access_type4' value='4' onclick='this.checked=false; modalSignUpSmall(); $("#cn_pt_access_type2").prop("checked", true);'/>
                            <label for='cn_pt_access_type4'><strong>Guest Pass</strong> <p>Users sign in with personal password which they need to get in advance from the network administration staff</p></label>
                        </div>
                    </div>
                    <div class="networkCont2 netCont">
                        <p>Self Sign In</p>
                        <img class="networkImg SignInImg" src="../img/self_sign_in_diagram.png" alt="picture">
                    </div>
                </div> 
                </div>
            </div>
            <div id='step3' style='display: none;'>
                <div class="networkContainer">
                    <div class ="networkCont1 netCont">
                        <div class="net3row socialinactive">    
                            <label class="net3Head">Allow Sign-In Using:</label>
                            <input type='checkbox' name='cn_o_sign_in' id='cn_o_sign_in1' value='1' onchange='' style="margin-left:3%;" onclick="this.checked=false;"/>
                            <label for='cn_o_sign_in1'>
                            <em class="sms-icon net3Icon" style="margin-right: 6px; margin-left: 10px;"></em>    
                            <span class="socialinactive socialctrl" >SMS Token</span></label><br>
                        </div>
                        <div class="net3row">
                            <input onclick="socialActiveFB(this)" type='checkbox' name='cn_o_sign_in' id='cn_o_sign_in2' value='2' onchange='' checked style="margin-left:37%;"  />
                            <label for='cn_o_sign_in2'>
                            <em class="facebook-icon net3Icon" style="margin-right: 6px; margin-left: 10px;"></em>     
                            <span>Facebook</span></label><br>
                        </div>
                        <div class="net3row">
                            <input type='checkbox' name='cn_o_sign_in' id='cn_o_sign_in3' value='3' onclick="socialActiveG(this)" onchange='' checked style="margin-left:37%;"/>
                            <label for='cn_o_sign_in3'>
                            <em class="google-icon net3Icon" style="margin-right: 6px; margin-left: 10px;"></em>    
                            <span>Google</span></label><br>
                        </div>
                        <div class="net3row"> 
                            <input onclick="socialActiveL(this)" type='checkbox' name='cn_o_sign_in' id='cn_o_sign_in4' value='4' onchange='' checked style="margin-left:37%;"/>
                            <label for='cn_o_sign_in4'>
                            <em class="linkedIn-icon net3Icon" style="margin-right: 6px; margin-left: 10px;"></em>    
                            <span>LinkedIn</span></label><br>
                        </div>
                        <div class="net3row">
                            <input type='checkbox' name='cn_o_sign_in' id='cn_o_sign_in5' value='5' onclick="socialActiveT(this)" onchange='' checked style="margin-left:37%;"/>
                            <label for='cn_o_sign_in5'>
                            <em class="twitter-icon net3Icon" style="margin-right: 6px; margin-left: 10px;"></em>    
                            <span>Twitter</span></label><br>
                        </div>
                        <div class="net3row">    
                            <input  type='checkbox' name='cn_o_redirect_checkbox' id='cn_o_redirect_checkbox' value='' onclick='this.checked=false; modalSignUpSmall();' />
                            <label for='cn_o_redirect_checkbox'>Redirect users to:</label>
                            <input class="netRedirect" type='text' name='' id='' placeholder='E.g. http://www.example.com'/>
                        </div>
                    </div>    
                    <div class="networkCont2 netCont">
                        <p>Self Sign In</p>
                        <img class="networkImg SignInImg" src="../img/self_sign_in_diagram.png" alt="picture">
                    </div>
                </div>
            </div>
            <div id='step4' style='display: none;'>
                <div class="networkContainer">
                    <div class ="networkCont1 netCont">
                        <p class="netGrey">Define the captive portal web page:</p>
                        <div class="frmRow">  
                            <label for='cn_pwp_language'>Display Language:</label>
                            <select name='cn_pwp_language' id='cn_pwp_language'>
                                <option value='English'>English</option>
                                <option value='Danish'>Danish</option>
                                <option value='Finnish'>Finnish</option>
                                <option value='French'>French</option>
                                <option value='Dutch'>Dutch</option>
                                <option value='Norwegian'>Norwegian</option>
                                <option value='Swedish'>Swedish</option>
                                <option value='Italian'>Italian</option>
                                <option value='Spanish'>Spanish</option>
                                <option value='German'>German</option>
                                <option value='Portuguese'>Portuguese</option>
                                <option value='Turkish'>Turkish</option>
                                <option value='Greek'>Greek</option>
                                <option value='Romanian'>Romanian</option>
                                <option value='Polish '>Polish </option>
                            </select>
                        </div>
                        <div class="frmRow">
                            <label for='cn_pwp_logo'>Logo:</label>
                            <p><span class="filename" id="logoname" > Default Logo Selected</span> </p>
                            <input type='file' onchange="logoChange(this);" class="cn_pwp_logo" value="Change" name='cn_pwp_logo' style="display: block"/>
                        </div>
                        <div class="frmRow">
                            <label for='cn_pwp_wt'>Welcome Text:</label>
                            <input type='text' name='cn_pwp_wt' id='cn_pwp_wt' placeholder='Welcome to the Guest Network' onkeypress='addNetworkCaptivePortalMarketing("w", this.value)'/>
                            <a onclick='$("#cn_pwp_wt").val("Welcome to the Guest Access login page"); addNetworkCaptivePortalMarketing("w", "Welcome to the Guest Access login page")' class="submittext">Submit</a>
                        </div>
                        <div class="frmRow">
                            <label for='cn_pwp_advert'>Advert:</label>
                            <p><span class="filename" id="advertname">No Image Selected</span></p>
                            <input type='file' onchange="advertChange(this);" name='cn_pwp_advert' value="Upload" class="cn_pwp_advert" style="display: block"/>
                        </div>
                        <div class="frmRow">
                            <label for='cn_pwp_mm'>Marketing Message:</label>
                            <input type='text' name='cn_pwp_mm' id='cn_pwp_mm' placeholder='Tip: should be short and inviting.' onkeypress='addNetworkCaptivePortalMarketing("m", this.value)'/>
                        </div>
                        <div class="frmRow">
                            <label for='cn_pwp_tnc'>Terms and Conditions:</label>
                            <textarea name='cn_pwp_tnc' id='cn_pwp_tnc' onkeypress="addNetworkCaptivePortalTerms(this.value)"></textarea>
                        </div>
                    </div>
                    <div class="networkCont2 netCont">
                    <!--Pop-->
                        <div class="apPop" id="tip">
                            <!--Arrow-->
                            <img class="arrow" src="../img/arrow.png">
                            <!--Arrow-->
                            <div class="apPopHead">
                                <a class="apPopClose"><img src="../img/Exit-1.png" onclick="tipClose()"></a>
                                
                            </div>
                            <div class="apPopCont">
                            <!--SelectLanguages-->
                            <select  name="langdemo" class="selectdropdown_network langdemo_5">
                            <option value="English"> 
                            Select Language
                            </option>
                            <option value="English"> 
                            English
                            </option>
                            <option value="Deutsche">
                            Deutsche
                            </option>
                            <option value="Dutch">
                            Dutch
                            </option>
                            <option value="French">
                            French
                            </option>
                            <option value="Italian">
                            Italian
                            </option>
                            <option  value="Spanish">
                            Spanish
                            </option>
                            </select>
                           <!--Select Languages-->
                                <img class="apPopImg" src="../img/ruckuslogo_black.png" alt="Image">
                                <span id="previewpop">
                                <p>Here you can see a <strong class="orangeText">preview</strong> of your captive portal before you take it live</p>
                                </span>
                            </div>
                            
                        </div>
                    <!--Pop-->
                        <div class="logoBox">

                            <img id="logo" src='../img/logos_1.jpg' width="100px" height="64px" alt="captive portal default logo">
                            <p id='cn_cp_wm' style='display: none'>Welcome</p>
                            
                            <!--Advert-->
                            <img  src='../img/logos_3.jpg' width="373px" height="52.27px" style="margin-right: 0px;position: absolute;display: block;right: 5px;top: 3px;width: 100px;height: 64px;" id="advert" class="advert" alt="advert">
                            <!--Advert-->
                            
                            <p id='cn_cp_mm' style='display: none'>hello there</p>
                            <ul class="logoBoxSocial">
                                <p id='cn_cp_tnc' style='display: none'>By clicking a button, you are accepting the <a>terms &amp; conditions</a></p>
                                <li class="facebook"><i class="fa fa-facebook"></i>Connect with Facebook</li>
                                <li class="twitter"><i class="fa fa-twitter"></i>Connect with Twitter</li>
                                <li class="google"><i class="fa fa-google"></i>Connect with Google</li>
                                <li class="linkedin"><i class="fa fa-linkedin"></i>Connect with LinkedIn</li>
                            </ul>
                            <img src="../img/ruckuslogo_black.png" align="right" width="50px" alt='ruckus black logo' style="margin-right: 34px; margin-top: 10px;" />
                            
                            <br />
                            <br />
                           
                     </div>  
                    </div> 
                </div>
            </div>    
            <div id='step5' style='display: none;'>
                <div class="networkContainer1">
                        <div class ="netCont">
                            <p>
                            <span class="net4Head">Select venues to activate this network</span>
                            <span class="net4Head2">Activate in venues: <a onclick='dashAddToggleVenue("a")'>All</a>|<a onclick='dashAddToggleVenue("n")'>None</a></span>
                            </p>
                            <table class="net5Table">
                                <tr>
                                    <th><img src="../img/location_black.png" width="10px" />&nbsp;Venue</th>
                                    <th>City</th>
                                    <th>Country</th>
                                    <th>Networks</th>
                                    <th>APs</th>
                                    <th>Activated</th> 
                                </tr>
                                <tr>
                                    <td><img src="../img/location_green.png" width="10px" /> HQ</td>
                                    <td>London, UK</td>
                                    <td>United Kingdom</td>
                                    <td id="networknetwork" >7</td>
                                    <td id="networkap">15</td>
                                    <td><img  src="../img/on_switch.png" class="switch" width="50px"></td>
                                </tr>
                                 <tr>
                                    <td class="s2"><img src="../img/location_green.png" width="10px" /> Warehouse - Oxford</td>
                                    <td class="s2">Oxford, UK</td>
                                    <td class="s3">United Kingdom</td>
                                    <td class="s3">3</td>
                                    <td class="s3">4</td>
                                    <td class="s3"><img  src="../img/on_switch.png" class="switch" width="50px"></td>
                                  </tr>
                                  <tr>
                                    <td class="s2"><img src="../img/location_green.png" width="10px" /> Store - Cambridge</td>
                                    <td class="s2">Cambridge, UK</td>
                                    <td class="s3">United Kingdom</td>
                                    <td class="s3">4</td>
                                    <td class="s3">5</td>
                                    <td class="s3"><img  src="../img/on_switch.png" class="switch" width="50px"></td>
                                  </tr>
                                  <tr>
                                    <td class="s2"><img src="../img/location_green.png" width="10px" /> Store - Edinburgh</td>
                                    <td class="s2">Edinburgh, Scotland</td>
                                    <td class="s3">Scotland</td>
                                    <td class="s3">2</td>
                                    <td class="s3">2</td>
                                    <td class="s3"><img  src="../img/on_switch.png" class="switch" width="50px"></td>
                                  </tr>
                                  <tr>
                                     <td class="s2"><img src="../img/location_green.png" width="10px" /> Store - Brussels</td>
                                    <td class="s2">Brussels, Belgium</td>
                                    <td class="s3">Belgium</td>
                                    <td class="s3">3</td>
                                    <td class="s3">2</td>
                                    <td class="s3"><img  src="../img/on_switch.png" class="switch" width="50px"></td>
                                  </tr>
                                  <tr>
                                     <td class="s2"><img src="../img/location_green.png" width="10px" />Store - Cologne</td>
                                    <td class="s2">Cologne, Germany</td>
                                    <td class="s3">Germany</td>
                                    <td class="s3">3</td>
                                    <td class="s3">3</td>
                                    <td class="s3"><img  src="../img/on_switch.png" class="switch" width="50px"></td>
                                  </tr>
                                  <tr>
                                    <td class="s2"><img src="../img/location_green.png" width="10px" />Store - Paris</td>
<td class="s2 softmerge"><div class="softmerge-inner" style="width: 115px; left: -1px;">Paris, France</div></td>
<td class="s3">France</td>
                                    <td class="s3">2</td>
                                    <td class="s3">2</td>
                                    <td class="s3"><img  src="../img/on_switch.png" class="switch" width="50px"></td>
                                  </tr>
                            </table>
                            
                        </div>
                        
                </div>
            </div>
            <div id='step6' style='display: none;'>
                <div class="networkContainer">
                        <div class ="networkCont1 netCont net6Cont">
                            <p>Network Info</p>
                            <p>
                                <label>Name:</label>
                                <span id='cn_summary_name' class="netName">Neywork Name</span>
                            </p>
                            <p>
                                <label>Type:</label>
                                <span id='cn_summary_type' class="netCap">Captive Portal - Self sign In</span>
                            </p>
                            <p>
                                <label>Sign in options:</label>
                                <span class="facebookholder" >
                                <em  class="netFb facebook-icon net3Icon" style="margin-right: 6px; margin-left: 10px;"></em> 
                                <span>Facebook</span>
                                </span>
                            </p>
                            <p class="netSoc googleholder">
                                <em class="google-icon net3Icon" style="margin-right: 6px; margin-left: 10px;"></em> 
                                <span>Google</span>
                            </p>
                            <p class="netSoc linkedinholder">
                                <em class="linkedIn-icon net3Icon" style="margin-right: 6px; margin-left: 10px;"></em> 
                                <span>LinkedIn</span>
                            </p>
                            <p class="netSoc twitterholder">
                                <em class="twitter-icon net3Icon" style="margin-right: 6px; margin-left: 10px;"></em> 
                                <span>Twitter</span>
                            </p>
                            <p>
                                <label>Redirect URL:</label>
                                <span id='cn_summary_name' class="netOr">Original URL requested</span>
                            </p>
                            <p>
                                <label>Portal display language:</label>
                                <span id='cn_summary_name' class="netEn">English</span>
                            </p>
                        </div>
                        <div class="networkCont2 netCont">
                            <p>Network Info</p>
                        </div>
                </div>
            </div>
        </div>
        <div></div>
    </div>

    <div class="networkFoot">
        <p class="networkItems"><span class="asterix req">*</span> Required field</p>
        <ul class="netFootList">
            <li class="netCancel" onclick='dashAddClose()'>Cancel</li>
            <li style='display: none;' class="netBack" id='modal_add_network_prev' onclick='dashAddPrevious("step1")'>Back</li>
            <li class="netNext" id='modal_add_network_next' onclick='dashAddNext("step2"); modalSignUpClose();'>Next</li>
        </ul>
    </div>

</form>