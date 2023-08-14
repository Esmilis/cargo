import { ExecutorContext } from "@nrwl/devkit";

import { parseCargoArgs, runCargo } from "../../common";
import CLIOptions from "./schema";
import * as cp from "child_process";

export default async function (opts: CLIOptions, ctx: ExecutorContext) {
	try {
		let args = parseCargoArgs(opts, ctx);
		await runCargo(args, ctx);


    // hack to push up bootstrap
    let moveArgs = [`${opts.lambdaDir}/${ctx.projectName}/*`, opts.lambdaDir];
    cp.spawn("mv", moveArgs, {
      cwd: ctx.root,
      shell: true,
      stdio: "inherit",
    });

		return { success: true };
	} catch (err) {
		return {
			success: false,
			reason: err?.message,
		};
	}
}
