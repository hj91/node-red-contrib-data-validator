# Node-RED Data Validator Node

A Node-RED node to validate the data type of incoming messages' payload.

## Overview

This Node-RED custom node allows you to validate the data type of the payload in incoming messages. You can configure the node to accept specific data types, and if the payload matches the selected data type, the message is allowed to pass through. Otherwise, the message is blocked, and an error is logged.

## Installation

You can install this node directly from the Node-RED Palette Manager or manually by following these steps:

1. Open your Node-RED instance.
2. Navigate to the directory where Node-RED is installed (usually `~/.node-red`).
3. Run the following command:

    ```bash
    npm install node-red-contrib-data-validator
    ```

4. Restart Node-RED.

## Usage

1. Drag and drop the "Data Validator" node from the Node-RED palette onto the workspace.
2. Configure the node by selecting the desired data type from the dropdown list.
3. Connect the input of the "Data Validator" node to the output of a previous node.
4. Deploy your flow.
5. When a message arrives at the "Data Validator" node, it will check the data type of the payload.
6. If the payload matches the selected data type, the message will be allowed to pass through.
7. If the payload does not match the selected data type, the message will be blocked, and an error will be logged.

## Configuration

- **Name**: Optional name for the node.
- **Data Type**: Select the data type to validate against (String, Number, Boolean, Object, or Array).

## Contributing

Contributions are welcome! Please feel free to submit issues, fork the repository, and submit pull requests.

## Author 

node-red-contrib-data-validator is written by Harshad Joshi @ Bufferstack.IO Analytics Technology LLP, Pune

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.


