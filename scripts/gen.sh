WORKPLACE="$HOME/workplace/WebAppTemplate"
WORKSPACE="$WORKPLACE/WebAppTemplateReactApp"
SCHEMA_PATH="$WORKPLACE/WebAppTemplateApi/api/openapi.yaml"

(
  cd "$WORKSPACE"
  rm -rf openapi-client
  npx openapi -i "$SCHEMA_PATH" -o openapi-client
)
