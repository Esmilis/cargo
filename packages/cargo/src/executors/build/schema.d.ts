import {
	CompilationOptions,
	DisplayOptions,
	FeatureSelection,
	OutputOptions,
} from "../../common/schema";

// prettier-ignore
type Options =
	& FeatureSelection
	& CompilationOptions
	& OutputOptions
	& DisplayOptions
	& ManifestOptions;

export default Options;
