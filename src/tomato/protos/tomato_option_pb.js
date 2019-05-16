/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.exportSymbol('proto.tomato.HttpApiOption', null, global);
goog.exportSymbol('proto.tomato.commonFields', null, global);
goog.exportSymbol('proto.tomato.genericAbstractClass', null, global);
goog.exportSymbol('proto.tomato.genericHttpApiRoutes', null, global);
goog.exportSymbol('proto.tomato.genericMarkdownDoc', null, global);
goog.exportSymbol('proto.tomato.httpApiOption', null, global);
goog.exportSymbol('proto.tomato.messageId', null, global);
goog.exportSymbol('proto.tomato.serviceGroup', null, global);
goog.exportSymbol('proto.tomato.serviceId', null, global);
goog.exportSymbol('proto.tomato.timeout', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tomato.HttpApiOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tomato.HttpApiOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tomato.HttpApiOption.displayName = 'proto.tomato.HttpApiOption';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tomato.HttpApiOption.prototype.toObject = function(opt_includeInstance) {
  return proto.tomato.HttpApiOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tomato.HttpApiOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tomato.HttpApiOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    method: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timeout: jspb.Message.getFieldWithDefault(msg, 4, 0),
    plugin: jspb.Message.getFieldWithDefault(msg, 5, ""),
    category: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tomato.HttpApiOption}
 */
proto.tomato.HttpApiOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tomato.HttpApiOption;
  return proto.tomato.HttpApiOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tomato.HttpApiOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tomato.HttpApiOption}
 */
proto.tomato.HttpApiOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeout(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlugin(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tomato.HttpApiOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tomato.HttpApiOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tomato.HttpApiOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tomato.HttpApiOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPlugin();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.tomato.HttpApiOption.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tomato.HttpApiOption.prototype.setPath = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string method = 2;
 * @return {string}
 */
proto.tomato.HttpApiOption.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tomato.HttpApiOption.prototype.setMethod = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.tomato.HttpApiOption.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tomato.HttpApiOption.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 timeout = 4;
 * @return {number}
 */
proto.tomato.HttpApiOption.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.tomato.HttpApiOption.prototype.setTimeout = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string plugin = 5;
 * @return {string}
 */
proto.tomato.HttpApiOption.prototype.getPlugin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.tomato.HttpApiOption.prototype.setPlugin = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string category = 6;
 * @return {string}
 */
proto.tomato.HttpApiOption.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.tomato.HttpApiOption.prototype.setCategory = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `serviceId`.
 * @type {!jspb.ExtensionFieldInfo.<number>}
 */
proto.tomato.serviceId = new jspb.ExtensionFieldInfo(
    51001,
    {serviceId: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.ServiceOptions.extensionsBinary[51001] = new jspb.ExtensionFieldBinaryInfo(
    proto.tomato.serviceId,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.ServiceOptions.extensions[51001] = proto.tomato.serviceId;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `serviceGroup`.
 * @type {!jspb.ExtensionFieldInfo.<string>}
 */
proto.tomato.serviceGroup = new jspb.ExtensionFieldInfo(
    51002,
    {serviceGroup: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.ServiceOptions.extensionsBinary[51002] = new jspb.ExtensionFieldBinaryInfo(
    proto.tomato.serviceGroup,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.ServiceOptions.extensions[51002] = proto.tomato.serviceGroup;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageId`.
 * @type {!jspb.ExtensionFieldInfo.<number>}
 */
proto.tomato.messageId = new jspb.ExtensionFieldInfo(
    51002,
    {messageId: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[51002] = new jspb.ExtensionFieldBinaryInfo(
    proto.tomato.messageId,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[51002] = proto.tomato.messageId;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `httpApiOption`.
 * @type {!jspb.ExtensionFieldInfo.<!proto.tomato.HttpApiOption>}
 */
proto.tomato.httpApiOption = new jspb.ExtensionFieldInfo(
    51003,
    {httpApiOption: 0},
    proto.tomato.HttpApiOption,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.tomato.HttpApiOption.toObject),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[51003] = new jspb.ExtensionFieldBinaryInfo(
    proto.tomato.httpApiOption,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.tomato.HttpApiOption.serializeBinaryToWriter,
    proto.tomato.HttpApiOption.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[51003] = proto.tomato.httpApiOption;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `timeout`.
 * @type {!jspb.ExtensionFieldInfo.<number>}
 */
proto.tomato.timeout = new jspb.ExtensionFieldInfo(
    51004,
    {timeout: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[51004] = new jspb.ExtensionFieldBinaryInfo(
    proto.tomato.timeout,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[51004] = proto.tomato.timeout;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `genericMarkdownDoc`.
 * @type {!jspb.ExtensionFieldInfo.<boolean>}
 */
proto.tomato.genericMarkdownDoc = new jspb.ExtensionFieldInfo(
    51005,
    {genericMarkdownDoc: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[51005] = new jspb.ExtensionFieldBinaryInfo(
    proto.tomato.genericMarkdownDoc,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[51005] = proto.tomato.genericMarkdownDoc;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `genericAbstractClass`.
 * @type {!jspb.ExtensionFieldInfo.<boolean>}
 */
proto.tomato.genericAbstractClass = new jspb.ExtensionFieldInfo(
    51006,
    {genericAbstractClass: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[51006] = new jspb.ExtensionFieldBinaryInfo(
    proto.tomato.genericAbstractClass,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[51006] = proto.tomato.genericAbstractClass;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `genericHttpApiRoutes`.
 * @type {!jspb.ExtensionFieldInfo.<boolean>}
 */
proto.tomato.genericHttpApiRoutes = new jspb.ExtensionFieldInfo(
    51007,
    {genericHttpApiRoutes: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[51007] = new jspb.ExtensionFieldBinaryInfo(
    proto.tomato.genericHttpApiRoutes,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[51007] = proto.tomato.genericHttpApiRoutes;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `commonFields`.
 * @type {!jspb.ExtensionFieldInfo.<string>}
 */
proto.tomato.commonFields = new jspb.ExtensionFieldInfo(
    51008,
    {commonFields: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[51008] = new jspb.ExtensionFieldBinaryInfo(
    proto.tomato.commonFields,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[51008] = proto.tomato.commonFields;

goog.object.extend(exports, proto.tomato);