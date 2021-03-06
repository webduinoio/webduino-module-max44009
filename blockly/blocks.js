Blockly.Blocks['max44009_new'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_MAX44009_SDA, "MAX44009，SDA")
        .appendField(new Blockly.FieldDropdown([
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["9", "9"],
          ["10", "10"],
          ["11", "11"],
          ["12", "12"],
          ["13", "13"],
          ["14", "14"],
          ["15", "15"],
          ["16", "16"],
          ["17", "17"],
          ["18", "18"],
          ["19", "19"]
        ]), "sda")
        .appendField(Blockly.Msg.WEBDUINO_MAX44009_SCL, " SCL")
        .appendField(new Blockly.FieldDropdown([
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["9", "9"],
          ["10", "10"],
          ["11", "11"],
          ["12", "12"],
          ["13", "13"],
          ["14", "14"],
          ["15", "15"],
          ["16", "16"],
          ["17", "17"],
          ["18", "18"],
          ["19", "19"]
        ]), "scl");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['max44009_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("max44009"), "var")
        .appendField(Blockly.Msg.WEBDUINO_MAX44009_START, "開始偵測");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_MAX44009_DO, "執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['max44009_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("max44009"), "var")
        .appendField(Blockly.Msg.WEBDUINO_MAX44009_STOP, "停止偵測");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['max44009_val'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("max44009"), "var")
        .appendField(Blockly.Msg.WEBDUINO_MAX44009_VAL, "數值");
    this.setOutput(true, null);
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};