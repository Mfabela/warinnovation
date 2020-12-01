<form method='' action='../ap/' id='frm_add_ap' onsubmit="return false;" >

    <div class="frmHead">
        <p class="frmTitle">Create AP</p>
        <ul class="frmHeadBtn">
            <li class="frmHelpBtn headBtns"><i class="fa fa-question-circle-o frmHelp" ></i></li>
            <li class="frmCloseBtn headBtns"><i class="fa fa-close frmClose" onclick='demoClose()'></i></li>
        </ul>
    </div>
    <div class="bodyAP">
        <div class="frmRow">
        <label><span class="asterix req">*</span>Venue:</label>
        <select name='' id='ap_venue' onfocus='demoAddApStep("step1")'>
            <option value='HQ'>HQ</option>
            <option value='Warehouse - Fresno'>Warehouse - Fresno</option>
            <option value='Store - Phoenix'>Store - Phoenix</option>
            <option value='Store Irvine'>Store Irvine</option>
            <option value='Store - Las Vegas'>Store - Las Vegas</option>
            <option value='Store - San Diego'>Store - San Diego</option>
            <option value='Store - Sacramento'>Store - Sacramento</option>
            <!--populate with a list of -->
        </select>
        </div>
    <div class="frmRow">
        <label for='ca_apn' class='frmRequired'><span class="asterix req">*</span>AP Name:</label>
        <input type='text' name='ca_apn' id='ap_name' placeholder='Add a tag' required/><i class="fa fa-question-circle-o blueQ" ></i>
    </div>
    <div class="frmRow">
        <label for='ca_desc'><span class="asterix">*</span>Description:</label>
        <textarea name='ca_desc' id='ap_description'></textarea>
    </div>    
    <div class="frmRow">    
        <label for=''><span class="asterix req">*</span>Serial Number:</label>
        <input type='text' name='' id='ap_seriealnumber' onfocus='demoAddApStep("step2")' />
    </div>
    <div class="frmRow">
        <label for=''><span class="asterix">*</span>Tags:</label>
        <input type='text' name='' id='ap_tags' onfocus='demoAddApStep("step2")' placeholder='Add a tag'/>
    </div>
    </div>
    <div class="addApFoot" id="footsignup">
        <p><input type='checkbox' onclick='this.checked=false;signupcreateAP();' name='ca_fp' id='ca_fp'/><label for='ca_fp'>Go to floor plans and place this AP</label></p>
        <ul class="ApFootLinks">
            <li class="APcancel" onclick='dashAddClose()' >Cancel</li>
            <li class="APcreateLi"><input class="ApCreate" type='submit' name='submit' value='Create' onclick='apcookiesave()'/></li>
        </ul>
    </div>
</form>