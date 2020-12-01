<div class='content'>
        <p class="APHead">Access Points</p>
        <div class="APCont">
            <div class="APCont1">
                <a onclick='dashAdd("ap")' class="blueLinks addBtn">Add AP</a>
                <br><br><br>
                <div class="APTop">
                    <form>
                        <input class="searchAP" type='text' name='search' placeholder="AP's name/ MAC Address" required/>
                        <i class="fa fa-search fa-lg searchIconAP" aria-hidden="true"></i>

                        <select class="dropDown">
                    <option value='all'>All Types</option>
                    <option value='wifi'>WiFi</option>
                </select>

                        <select class="dropDown">
                    <option value='All Statuses'>All Statuses</option>
                    <option value='disconnected'><img src='' alt='red x'/> AP disconnected</option>
                    <option value='operational'><img src='' alt='green tick'/> Operational</option>
                </select>

                        <select class="dropDown">
                    <option value='all'>All Models</option>
                    <option value='R310'>R310</option>
                    <option value='R500'>R500</option>
                    <option value='R600'>R600</option>
                </select>

                        <select class="dropDown">
                    <option value='all'>All Tags</option>
                    <p>No Tags</p>
                </select>
                    </form>
                </div>
                <table class="adminT1">
                    <tr>
                        <th>AP</th>
                        <th>Status</th>
                        <th>Model</th>
                        <th>IP Address</th>
                        <th>Mac Address</th>
                        <th>Venue</th>
                        <th>Mesh Role</th>
                        <th>Cthents</th>
                        <th>Tags</th>
                    </tr>
                    <tr>
                        <td>DO-EAST-02</td>
                        <td>AP diconnected</td>
                        <td>R500</td>
                        <td>172:16:112:72</td>
                        <td>E0:10:7F:12:87:C0</td>
                        <td>District Office</td>
                        <td>AP</td>
                        <td>0</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DO-EAST-01</td>
                        <td>Operational</td>
                        <td>R310</td>
                        <td>192:168:1:46</td>
                        <td>E0:10:7F:12:87:C0</td>
                        <td>District Office</td>
                        <td>AP</td>
                        <td>0</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DO-WEST-01</td>
                        <td>AP diconnected</td>
                        <td>R600</td>
                        <td>172:16:112:131</td>
                        <td>74:3E:2B:36:C7:40</td>
                        <td>District Office</td>
                        <td></td>
                        <td>0</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DO-SOUTH-02</td>
                        <td>Operational</td>
                        <td>R600</td>
                        <td>172:16:113:44</td>
                        <td>74:3E:2B:36:BC:20</td>
                        <td>District Office</td>
                        <td>AP</td>
                        <td>0</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>