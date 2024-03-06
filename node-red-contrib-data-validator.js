
/**

  node-red-contrib-data-validator.js  - Copyright 2023 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/




module.exports = function (RED) {
    function DataValidatorNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function (msg) {
            var selectedType = config.datatype;
            var payloadType = Array.isArray(msg.payload) ? "array" : typeof msg.payload;

            if (payloadType === selectedType) {
                node.send(msg);
                node.status({ fill: "green", shape: "dot", text: "Data type is valid" });
            } else {
                node.error("Data type is not valid: " + payloadType);
                node.status({ fill: "red", shape: "ring", text: "Wrong data type: " + payloadType });
            }
        });
    }
    RED.nodes.registerType("data-validator", DataValidatorNode);
}

