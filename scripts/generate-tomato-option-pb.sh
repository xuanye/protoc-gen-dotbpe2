set -ex

cd $(dirname $0)

pwd

PROTOC=protoc


OUT_DIR=../src/tomato/protos

PROTO_DIR=../protos


if [ -d $OUT_DIR ]; then
  rm -rf $OUT_DIR
fi

mkdir -p $OUT_DIR


$PROTOC -I=$PROTO_DIR --js_out=import_style=commonjs,binary:$OUT_DIR $PROTO_DIR/tomato_option.proto