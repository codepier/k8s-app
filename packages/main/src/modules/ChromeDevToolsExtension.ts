import { AppModule } from "../AppModule.js";
import { ModuleContext } from "../ModuleContext.js";
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from "electron-devtools-installer";

export class ChromeDevToolsExtension implements AppModule {
  async enable({ app }: ModuleContext): Promise<void> {
    await app.whenReady();

    installExtension.default(REACT_DEVELOPER_TOOLS, {
      forceDownload: true,
      loadExtensionOptions: {
        allowFileAccess: true,
      },
    });

    installExtension.default(REDUX_DEVTOOLS, {
      forceDownload: true,
      loadExtensionOptions: {
        allowFileAccess: true,
      },
    });
  }
}

export function chromeDevToolsExtension(
  ...args: ConstructorParameters<typeof ChromeDevToolsExtension>
) {
  return new ChromeDevToolsExtension(...args);
}
