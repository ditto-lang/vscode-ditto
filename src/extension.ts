import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

function startDittoLanguageServer(): LanguageClient {
  const config = vscode.workspace.getConfiguration("ditto");
  const serverOptions: ServerOptions = {
    command: config.path,
    args: ["lsp"],
    transport: TransportKind.stdio,
  };
  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "ditto" }],
  };
  client = new LanguageClient(
    "dittoLanguageServer",
    "Ditto Language Server",
    serverOptions,
    clientOptions
  );
  client.start();
  return client;
}

let client: LanguageClient;

export function activate(_context: vscode.ExtensionContext) {
  client = startDittoLanguageServer();
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
