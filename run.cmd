@pushd Server & start /b npm run start:dev & popd
@pushd Client
@start /b node GatewayServer\index.js
@ng serve
@popd
