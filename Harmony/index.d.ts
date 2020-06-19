/// <reference path="../shared/qtscript.d.ts" />
/// <reference path="../shared/tba.d.ts" />
/**
 * This file contains all API features that has remained unchanged (as far as I know) from Harmony 15 onwards.
 */

/**
 * This file represents objects that exist across all Harmony versions.
 */

/**
 * String describing path in network, e.g. "Top/Composite"
 */
declare type NodePath = string;
/**
 * String describing attribute, e.g. "SCALE"
 */
declare type AttrKeyword = string;
/**
 * String representing attribute value
 */
declare type AttrStringValue = string;

/**
 * A node's type, e.g. "READ".
 */
// declare type NodeType = "AnimatedMatteGenerator" | "ArticulationModule" | "AutoFoldModule" | "AutoMuscleModule" | "AutoPatchModule" | "BLEND_MODE_MODULE" | "BLUR_DIRECTIONAL" | "BLUR_RADIAL" | "BLUR_VARIABLE" | "BOXBLUR-PLUGIN" | "BRIGHTNESS_CONTRAST" | "BendyBoneModule" | "BezierMesh" | "Bloom" | "BoneModule" | "BurnIn" | "CAMERA" | "CHANNEL_SWAP" | "CHROMA_KEYING" | "COLOR2BW" | "COLOR_ART" | "COLOR_CARD" | "COLOR_MASK" | "COLOR_OVERRIDE_TVG" | "COLOR_SCALE" | "COMPOSITE" | "COMPOSITE_GENERIC" | "CONTRAST" | "CROP" | "CUTTER" | "ComputeNormals" | "CurveModule" | "DEPTHBLUR" | "DISPLAY" | "DITHER" | "DeformationCompositeModule" | "DeformationRootModule" | "DeformationScaleModule" | "DeformationSwitchModule" | "DeformationUniformScaleModule" | "DeformationWaveModule" | "DynamicSpring" | "EXTERNAL" | "FADE" | "FIELD_CHART" | "FLATTEN" | "FLICKER_BLUR" | "FOCUS_APPLY" | "FOCUS_SET" | "FilterBanding" | "FoldModule" | "GAUSSIANBLUR-PLUGIN" | "GLCacheLock" | "GLOW" | "GLUE" | "GRADIENT-PLUGIN" | "GRAIN" | "GROUP" | "GameBoneModule" | "Grid" | "HIGHLIGHT" | "HUE_SATURATION" | "ImageSwitch" | "KinematicOutputModule" | "LAYER_SELECTOR" | "LINE_ART" | "LensFlare" | "LightPosition" | "LightShader" | "LuminanceThreshold" | "MATTE_BLUR" | "MATTE_COMPOSITE" | "MATTE_RESIZE" | "MOTION_BLUR" | "MULTIPORT_IN" | "MULTIPORT_OUT" | "MasterController" | "MedianFilter" | "MultiLayerWrite" | "NEGATE" | "NOTE" | "NormalFloat" | "OGLBYPASS" | "ORTHOLOCK" | "OVERLAY" | "ObjectDefinition" | "OffsetModule" | "OpenGLPreview" | "PEG" | "PEG_APPLY3" | "PEG_APPLY3_V2" | "PIXELATE" | "PLUGIN" | "Particle3dRegion" | "ParticleBaker" | "ParticleBkerComposite" | "ParticleBounce" | "ParticleExplosion" | "ParticleGravity" | "ParticleKill" | "ParticleMove" | "ParticlePlanarRegion" | "ParticleRotationVelocity" | "ParticleSink" | "ParticleSize" | "ParticleSprite" | "ParticleSystemComposite" | "ParticleVelocity" | "ParticleVisualizer" | "ParticleVortex" | "ParticleWindFriction" | "PointConstraint2" | "PointConstraint3" | "PointConstraintMulti" | "QUADMAP" | "Quake" | "RADIALBLUR-PLUGIN" | "READ" | "REFRACT" | "REMOVE_TRANSPARENCY" | "SCALE" | "SCRIPT_MODULE" | "SHADOW" | "StaticConstraint" | "SubNodeAnimation" | "SubNodeAnimationFilter" | "Switch" | "TONE" | "TbdColorSelector" | "ToneShader" | "TransformGate" | "TransformLimit" | "TransformationSwitch" | "Turbulence" | "TurbulentNoise" | "UNDERLAY" | "VISIBILITY" | "WRITE";
declare type NodeType = string;

/**
 * Column Type as returned by column.type()
 */
declare type ColumnType = "DRAWING" | "SOUND" | "3DPATH" | "BEZIER" | "EASE" | "EXPR" | "TIMING" | "QUATERNION" | "QUATERNIONPATH" | "ANNOTATION";

/**
 * Type name as returned by Attribute.typeName()
 */
declare type AttrValueType =
  | "ALIAS"
  | "ARRAY_POSITION_2D"
  | "ARRAY_STRING"
  | "BOOL"
  | "COLOR"
  | "COMPATIBILITY"
  | "CUSTOM_NAME"
  | "DOUBLE"
  | "DOUBLEVB"
  | "DRAWING"
  | "ELEMENT"
  | "ENABLE"
  | "FILE_EDITOR"
  | "FILE_LIBRARY"
  | "GENERIC_ENUM"
  | "HSL"
  | "HUE_RANGE"
  | "INT"
  | "LOCKED"
  | "PATH_3D"
  | "POINT_2D"
  | "POSITION_2D"
  | "POSITION_3D"
  | "PUSH_BUTTON"
  | "QUATERNION_PATH"
  | "ROTATION_3D"
  | "SCALE_3D"
  | "SIMPLE_BEZIER"
  | "STRING"
  | "TIMING";
/**
 * The specialFolders JavaScript global object. Provide the path to application specific paths
 */
declare namespace specialFolders {
  /**
   * read-only property for the root installation folder
   */
  var root: string;

  /**
   * read-only property that contains the folder where application configuration files are stored. Normally, this is the /etc folder.
   */
  var config: string;

  /**
   * read-only property that contains where the resources files are stored.
   */
  var resource: string;

  /**
   * read-only property that indicates where the [install]/etc folder is.
   */
  var etc: string;

  /**
   * read-only property that contains the folder where the language files are stored.
   */
  var lang: string;

  /**
   * read-only property that contains the platform specific folder.
   */
  var platform: string;

  /**
   * A read-only property containing the folder where the platforms specific applications are stored. Application and Binary folders are different on OS X, but are identical on all other platforms.
   */
  var app: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific binaries are stored. Application and Binary folders are different on OS X. They are identical on all other platforms.
   */
  var bin: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific 32-bit binaries are stored.
   */
  var bin32: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific libraries are stored.
   */
  var library: string;

  /**
   * Location where the plugins that were designed for the previous SDK are stored. Replaces the plugins property.
   */
  var legacyPlugins: string;

  /**
   * Location where the plugins that comply with the current SDK are stored.
   */
  var plugins: string;

  /**
   * This is a read-only property that contains where the application will create its temporary files.
   */
  var temp: string;

  /**
   * This is a read-only property that contains the folder where the user configuration is stored.
   */
  var userConfig: string;

  /**
   * This is a read-only property that contains the folder where the html help folder is.
   */
  var htmlHelp: string;

  /**
   * This is a read-only property that contains the folder where the user scripts are stored.
   */
  var userScripts: string;
}

/**
 *
 */
declare namespace CELIO {
  function getLayerInformation(path: string): QVariant;

  function getInformation(path: string): QVariant;

  function getInformation(path: string, withLayers: boolean): QVariant;
}

/**
 * The Backdrop JavaScript global object. Get, set and add backdrops
 */
declare namespace Backdrop {
  /**
   * Return the backdrops of a group.
   */
  function backdrops(group: string): QScriptValue;

  function setBackdrops(group: string, backdrops: QScriptValue): boolean;

  function addBackdrop(group: string, backdrop: QScriptValue): boolean;
}

/**
 * The compositionOrder JavaScript global object. Extract timeline composition order
 */
declare namespace compositionOrder {
  /**
   * returns an array of Composition object using the current default composition order as used by the camera view or the timeline.
   */
  function buildDefaultCompositionOrder(): QScriptValue;

  /**
   * return an array of Composition object using the specified display name.
   */
  function buildCompositionOrderForDisplay(displayNode: string): QScriptValue;
}

/**
 * The copyPaste JavaScript global object. Copy paste to/from templates
 */
declare namespace copyPaste {
  function createTemplateFromSelection(name: string, path: string): string;

  function useCreateTemplateSpecial(flag: boolean, addModellingDir?: boolean, addScanFiles?: boolean, includeDefaultCameraName?: boolean): void;

  function pasteTemplateIntoScene(templateSrcPath: string, insertColumnName: string, insertFrame: int): boolean;

  function pasteTemplateIntoGroup(srcPath: string, groupName: string, insertFrame: int): boolean;

  function pasteActionTemplateIntoNode(srcPath: string, nodeName: string, insertFrame: int): boolean;

  function usePasteSpecial(flag: boolean): void;

  function setExtendScene(flag: boolean): void;

  function setPasteSpecialCreateNewColumn(flag: boolean): void;

  function setPasteSpecialElementTimingColumnMode(mode: "ELEMENT_AS_ELEMENT_AND_TIMING_AS_TIMING" | "ALL_DRWGS_AS_ELEMENTS" | "ALL_DRWGS_LINKED_THRU_TIMING_COLS"): void;

  function setPasteSpecialAddRemoveMotionKeyFrame(flag: boolean): void;

  function setPasteSpecialAddRemoveVelocityKeyFrame(flag: boolean): void;

  function setPasteSpecialAddRemoveAngleKeyFrame(flag: boolean): void;

  function setPasteSpecialAddRemoveSkewKeyFrame(flag: boolean): void;

  function setPasteSpecialAddRemoveScalingKeyFrame(flag: boolean): void;

  function setPasteSpecialForcesKeyFrameAtBegAndEnd(flag: boolean): void;

  function setPasteSpecialOffsetKeyFrames(flag: boolean): void;

  function setPasteSpecialReplaceExpressionColumns(flag: boolean): void;

  function setPasteSpecialDrawingAction(mode: "DO_NOTHING" | "ADD_OR_REMOVE_EXPOSURE" | "UPDATE_PIVOT"): void;

  function setPasteSpecialDrawingFileMode(mode: "NEVER_CREATE" | "ONLY_CREATE_IF_DOES_NOT_EXIST" | "ALWAYS_CREATE" | "ALWAYS_CREATE_AND_VERSION_IF_NECESSARY"): void;

  function setPasteSpecialDrawingAutomaticExtendExposure(extendExposure: boolean, keyFrameMode: boolean): void;

  function setPasteSpecialColorPaletteOption(
    mode:
      | "DO_NOTHING"
      | "REUSE_PALETTES"
      | "COPY_AND_OVERWRITE_EXISTING_PALETTES"
      | "COPY_AND_CREATE_NEW_PALETTES"
      | "COPY_AND_CREATE_NEW_PALETTES_IN_ELEMENT_FOLDER"
      | "COPY_PALETTE_AND_MERGE_COLOURS"
      | "COPY_PALETTE_AND_UPDATE_COLOURS"
      | "LINK_TO_ORIGINAL"
      | "COPY_SCENE_PALETTE_AND_MERGE_COLOURS"
      | "COPY_SCENE_PALETTE_AND_UPDATE_COLOURS"
  ): void;

  function copyPaste(parent: QObject, name: char): void;

  function registerObjects(engine: QScriptEngine): void;

  function setPasteSpecialCopyScanFiles(copy: boolean): void;

  function setPasteSpecialCopyModelDir(copy: boolean): void;

  function setPasteSpecialTVPreserveName(preserve: boolean): void;

  function setPasteSpecialDefaultCameraName(flag: boolean): void;

  function setPasteSpecialMatchNodeName(flag: boolean): void;

  function setPasteSpecialFullTransfer(flag: boolean): void;

  function setStartFrameSrc(startFrame: int): void;

  function setNumFramesSrc(nFrames: int): void;

  function getCurrentCreateOptions(): CopyOptions;

  function getCurrentPasteOptions(): PasteOptions;

  /**
   * Create an object that represent a 'copy' of a selection of nodes and a range of frames.
   */
  function copy(selectionOfNodes: StringList, startFrame: int, numFrames: int, createOption: CopyOptions): DragObject;

  /**
   * paste drag object as an action template. Must past over a selection of nodes. No new modules created by this action.
   */
  function paste(dragObject: DragObject, selectionOfNodes: StringList, startFrame: int, numFrames: int, pasteOptions: PasteOptions): boolean;

  function pasteNewNodes(dragObject: DragObject, groupWhereToDrop: string, pasteOptions: PasteOptions): boolean;

  function copyFromTemplate(filename: string, startFrame: int, numFrames: int, createOption: CopyOptions): DragObject;
}

/**
 * The Drawing JavaScript global object. Iterate and manipulate the drawings of an element node
 */
declare namespace Drawing {
  /**
   * return the # of drawings in the element.
   */
  function numberOf(elementId: int): int;

  /**
   * return the drawing id.
   */
  function name(elementId: int, drawingIndex: int): string;

  /**
   * return true if the given drawing exists in this element.
   */
  function isExists(elementId: int, timing: string): boolean;

  /**
   * create a drawing.
   */
  function create(elementId: int, timing: string, fileExists: boolean, storeInProjectFolder?: boolean): boolean;

  /**
   * return the 'load' filename of this drawing. This filename may be in the temp folder or project folder. Before the project is actually saved, this is where the drawing must reside to be found by the application.
   */
  function filename(elementId: int, drawingName: string): string;
}

declare const enum DrawingLayer {
  underlayArt = 0,
  colourArt = 1,
  lineArt = 2,
  overlayArt = 3
}

/**
 * The element JavaScript global object. Add, remove, modify or get information about element nodes in the scene
 */
declare namespace element {
  /**
   * returns the number of elements in the scene
   */
  function numberOf(): int;

  /**
   * returns the id (key) of the element
   */
  function id(elementIndex: int): int;

  /**
   * return the current element name.
   */
  function getNameById(id: int): string;

  /**
   * returns a string that is the scan type of the element. The scan type is either: COLOR, GRAY_SCALE or BW
   */
  function scanType(id: int): string;

  /**
   * This function returns the field chart size for a given element. The element ID must be provided. The field chart is a number such as 12,16 or 24 field.
   */
  function fieldChart(id: int): double;

  /**
   * This function returns the vector type for the given element. In theory, there is support for multiple types of vector drawing. In practice, only TVG has been implemented. The value 0 : indicates that the element is NOT a vector drawing. It is an IMAGE type. The value 2: indicates that the element is a TVG vector drawing.
   */
  function vectorType(id: int): 0 | 2;

  /**
   * returns the pixmap format for the provided element ID
   */
  function pixmapFormat(id: int): string;

  /**
   * return the actual element folder. This is normally the element name (unless it has been renamed and the project is not saved) but may include the ".<element id>" in the name if multiple elements share the same name.
   */
  function folder(id: int): string;

  /**
   * return the complete element folder. This is normally the element name (unless it has been renamed and the project is not saved) but may include the ".<element id>" in the name if multiple elements share the same name.
   */
  function completeFolder(id: int): string;

  /**
   * return the actual name of the drawings. This is different that the element name if this one has been renamed and the changes have not yet been saved.
   */
  function physicalName(id: int): string;

  /**
   * changes the attributes of the folder of element elem
   */
  function modify(id: int, scanType: string, fieldChart: double, pixmapFormat: string, vectorType: int): boolean;

  /**
   * create a new element. returns the element id of the newly added element if successful, otherwise it returns -1
   */
  function add(name: string, scanType: string, fieldChart: double, fileFormat: string, vectorize: string): int;

  /**
   * remove given element. Also optionally delete the disk files. This function returns true when successful.
   */
  function remove(id: int, deleteDiskFile: boolean): boolean;

  /**
   * rename an existing element. The element ID must be provided
   */
  function renameById(id: int, name: string): boolean;
}

/**
 * The fileMapper JavaScript global object. Map paths from one format to another
 */
declare namespace fileMapper {
  /**
   * returns the complete path of the passed path resolving shortcuts in windows. Will also convert the path separator to '\'.
   */
  function toNativePath(path: string): string;

  /**
   * Converts a path of the form /USA_DB/jobs/[job]/scene-[scene]/[remainder...] to eg. /usadata000/[job]/scene-[scene]/[remainder...].
   */
  function toScenePath(path: string): string;

  function fileURLToPath(url: string): string;
}

/**
 * The frame JavaScript global object. Get the current frame or number of frames. Add or remove frames in your scene. Manipulate the timeline marker
 */
declare namespace frame {
  /**
   * Returns the number of frames in the scene.
   */
  function numberOf(): int;

  /**
   * Returns the number of the current frame.
   */
  function current(): int;

  /**
   * Inserts frames at the selected frame number.
   */
  function insert(atFrame: int, nbFrames: int): boolean;

  /**
   * Deletes frames starting from the selected frame number.
   */
  function remove(atFrame: int, nbFrames: int): boolean;

  /**
   * Allows you to change the current frame.
   */
  function setCurrent(frame: int): void;

  /**
   * Returns if marker exists at this frame.
   */
  function hasTimelineMarker(frame: int): boolean;

  /**
   * Returns markers text.
   */
  function timelineMarkerNote(frame: int): string;

  /**
   * Returns markers start frame.
   */
  function timelineMarkerStart(frame: int): int;

  /**
   * Returns markers length.
   */
  function timelineMarkerLength(frame: int): int;
}

declare type ContinuityValue = "STRAIGHT" | "SMOOTH" | "CORNER";

/**
 * The library JavaScript global object. Select templates, and generate thumbnails or movies for them
 */
declare namespace library {
  /**
   * returns the number of files that are selected
   */
  function numberOfTemplatesSelected(): int;

  /**
   * returns the path to the ith file that is selected
   */
  function getSelectedTemplate(i: int): string;

  /**
   * generates the thumbnails for selected templates
   */
  function getThumbnailForSelectedTpl(idx: int, res: int, dstPath: string): boolean;

  /**
   * generates the movies for selected templates
   */
  function getQuicktimeMovieForSelectedTpl(idx: int, start: int, end: int, xRes: int, yRes: int, userName: string, displayModule: string, dstPath: string, withSound: boolean): boolean;
}

/**
 * The MessageBox JavaScript class. Simplified MessageBox Qt dialog
 */
declare namespace MessageBox {
  /**
   * information box. One button, OK.
   */
  function information(message: QScriptContext, unknown?: QScriptEngine): QScriptValue;

  /**
   * warning box. Two buttons are Abort and Retry.
   */
  function warning(message: QScriptContext, unknown?: QScriptEngine): 524288 | 262144;

  /**
   * critical box. One button, Retry.
   */
  function critical(message: QScriptContext, unknown?: QScriptEngine): QScriptValue;
}

/**
 * The MessageLog JavaScript global object. Allows the user to print messages to the message log window
 */
declare namespace MessageLog {
  /**
   * writes the message to the message log
   */
  function trace(message: string | any): void;

  /**
   * writes the message to the message log if debug mode is on
   */
  function debug(messageIfDebug: string | any): void;

  /**
   * Prints message to message log as an error.
   */
  function error(message: string | any): void;

  /**
   * sets debug mode to on/off
   */
  function setDebug(b: boolean): void;

  /**
   * returns whether debug mode is set
   */
  function isDebug(): boolean;
}

/**
 * The MovieImport JavaScript global object. Import a QuickTime movie in the current scene
 */
declare namespace MovieImport {
  /**
   * defines the input movie filename.
   */
  function setMovieFilename(filename: string): void;

  /**
   * defines where to store the extracted images.
   */
  function setImageFolder(folder: string): void;

  /**
   * defines which prefix to use to save the images.
   */
  function setImagePrefix(prefix: string): void;

  /**
   * set the start frame (frame are 1 bound). The default value is 1. This will affect the 'doImport()' command where only these frames are considered.
   */
  function setStartFrame(startFrame: int): void;

  /**
   * set the desired last frame. This will affect the number of frames that will be extracted by 'doImport()' default value: 0 which mean that all frames are imported
   */
  function setStopFrame(stopFrame: int): void;

  /**
   * set the expected audio filename. must be wav format (as this is currently the only one supported ) sound filename can be left empty. if so, there will not be any file created.
   */
  function setAudioFile(audioFilename: string): void;

  /**
   * perform the import - no progress bar.
   */
  function doImport(): boolean;

  /**
   * return the number of imported images from the last import.
   */
  function numberOfImages(): int;

  /**
   * return the complete filename for the imported image 'index' from the last import.
   */
  function image(index: int): string;

  /**
   * return true if a sound file was created at the given filename.
   */
  function isAudioFileCreated(): boolean;
}

/**
 * The PaletteManager JavaScript global object. Get information about the Colour view current selection
 */
declare namespace PaletteManager {
  /**
   * Gets the current color Id from the ColourView.
   */
  function getCurrentColorId(): string;

  /**
   * Gets the current color name from the ColourView.
   */
  function getCurrentColorName(): string;

  /**
   * Gets the current palette id from the ColourView.
   */
  function getCurrentPaletteId(): string;

  /**
   * Gets the current palette name from the ColourView.
   */
  function getCurrentPaletteName(): string;

  /**
   * Gets the current palette path (including palette name) from the ColourView.
   */
  function getCurrentPalettePath(): string;

  /**
   * Sets the current palette in the ColourView.
   */
  function setCurrentPaletteById(palette: string): void;

  /**
   * Sets the current color in the ColourView.
   */
  function setCurrentColorById(color: string): void;

  /**
   * Sets the current palette and colour in the ColourView.
   */
  function setCurrentPaletteAndColorById(palette: string, color: string): void;

  /**
   * gets the length of the current palette in the ColourView
   */
  function getCurrentPaletteSize(): int;

  /**
   * Gets the name of the the colour in the currently selected palette.
   */
  function getColorName(index: int): string;

  /**
   * Gets the id of the the colour in the currently selected palette.
   */
  function getColorId(index: int): string;

  /**
   * Gets number of palettes in the current selected palette list in ColourView list.
   */
  function getNumPalettes(): int;

  /**
   * Gets number of palettes in palette list in ColourView.
   */
  function getNumPalettes(scenePaletteList: boolean): int;

  /**
   * Gets the name of the palette in the current palette list.
   */
  function getPaletteName(index: int): string;

  /**
   * Gets the name of the palette in the current palette list.
   */
  function getPaletteName(index: int, scenePaletteList: boolean): string;

  /**
   * Gets the path (including name) of the palette in the current palette list.
   */
  function getPalettePath(index: int): string;

  /**
   * Gets the path (including name) of the palette in the current palette list.
   */
  function getPalettePath(index: int, scenePaletteList: boolean): string;

  /**
   * Gets the id of the palette in the current palette list.
   */
  function getPaletteId(index: int): string;

  /**
   * Gets the id of the palette in the current palette list.
   */
  function getPaletteId(index: int, scenePaletteList: boolean): string;
}

/**
 * The PaletteObjectManager JavaScript global object. Provides access to palette list (PaletteList) and palette (Palette) objects
 */
declare namespace PaletteObjectManager {

  const Constants: Constants;
  
  /**
   * Load the element palette list specified by the element ID 'id' and return the corresponding PaletteList object.
   */
  function getPaletteListByElementId(id: int): PaletteList;

  /**
   * Load the scene palette list and return the corresponding PaletteList object.
   */
  function getScenePaletteList(): PaletteList;

  /**
   * Return the number of loaded palette lists.
   */
  function getNumPaletteLists(): int;

  /**
   * Returns a PaletteList object for the loaded palette list at position 'index'.
   */
  function getPaletteListByIndex(index: int): PaletteList;

  /**
   * Return a PaletteList object for the loaded palette list with the specified list ID.
   */
  function getPaletteListById(id: string): PaletteList;

  /**
   * Returns a Palette object for the loaded palette with the specified palette ID.
   */
  function getPalette(id: string): Palette;

  function removePaletteReferencesAndDeleteOnDisk(id: string): boolean;
}

/**
 * The PenstyleManager JavaScript global object. Query/modify the current penstyle and list of penstyles
 */
declare namespace PenstyleManager {
  /**
   * Gets the number of penstyles.
   */
  function getNumberOfPenstyles(): int;

  /**
   * Gets the name of the penstyle.
   */
  function getPenstyleName(index: int): string;

  /**
   * Gets the index of the current penstyle.
   */
  function getCurrentPenstyleIndex(): int;

  /**
   * Gets the name of the current penstyle.
   */
  function getCurrentPenstyleName(): string;

  /**
   * sets the current penstyle
   */
  function setCurrentPenstyleByName(name: string): void;

  /**
   * sets the current penstyle
   */
  function setCurrentPenstyleByIndex(index: int): void;

  /**
   * set the current penstyle minimum size
   */
  function changeCurrentPenstyleMinimumSize(minimum: double): void;

  /**
   * set the current penstyle maximum size
   */
  function changeCurrentPenstyleMaximumSize(maximum: double): void;

  /**
   * set the current penstyle outline smoothness
   */
  function changeCurrentPenstyleOutlineSmoothness(smooth: double): void;

  /**
   * set the current penstyle centreline smoothness
   */
  function changeCurrentPenstyleCenterlineSmoothness(smooth: double): void;

  /**
   * Gets the current penstyle minimum size.
   */
  function getCurrentPenstyleMinimumSize(): double;

  /**
   * Gets the current penstyle maximum size.
   */
  function getCurrentPenstyleMaximumSize(): double;

  /**
   * Gets the current penstyle outline smoothness.
   */
  function getCurrentPenstyleOutlineSmoothness(): double;

  /**
   * Gets the current penstyle center line smoothness.
   */
  function getCurrentPenstyleCenterlineSmoothness(): double;

  /**
   * Gets the current penstyle eraser flag.
   */
  function getCurrentPenstyleEraserFlag(): boolean;

  /**
   * Create a string representing the penstyle which can be used to store the penstyle and import it later.
   */
  function exportPenstyleToString(index: int): string;

  /**
   * Formats the penstyle list into a string, which can be used to store the penstyle list and import it later.
   */
  function exportPenstyleListToString(): string;

  /**
   * Imports a penstyle list from a previously formatted penstyle string.
   */
  function importPenstyleListFromString(str: string): void;

  /**
   * Saves the penstyles.
   */
  function savePenstyles(): void;
}

/**
 * The preferences JavaScript global object. Set or retrieve user preferences saved in the user local data
 */
declare namespace preferences {
  /**
   * get the color from the given preference name
   */
  function getColor(name: string, defaultValue: ColorRGBA): ColorRGBA;

  /**
   * set the color for the given preference name
   */
  function setColor(name: string, color: ColorRGBA): void;

  /**
   * get the double value from the given preference name
   */
  function getDouble(name: string, defaultValue: double): double;

  /**
   * set the double value for the given preference name
   */
  function setDouble(name: string, value: double): void;

  /**
   * get the integer value from the given preference name
   */
  function getInt(name: string, defaultValue: int): double;

  /**
   * set the integer value for the given preference name
   */
  function setInt(name: string, value: int): void;

  /**
   * get the boolean value from the given preference name
   */
  function getBool(name: string, defaultValue: boolean): boolean;

  /**
   * get the boolean value for the given preference name
   */
  function setBool(name: string, value: boolean): void;

  /**
   * get the string value from the given preference name
   */
  function getString(name: string, defaultValue: string): string;

  /**
   * set the string value for the given preference name
   */
  function setString(name: string, value: string): void;

  function getEnumValue(name: string, defaultValue: int): double;

  function setEnumValue(name: string, value: int): void;

  function preferences(parent: QObject, name: char): void;
}

/**
 * The render JavaScript global object. Render the scene or a part of the scene
 */
declare namespace render {
  /**
   * Set if rendered frames sets should be combined and in which order. Specify these options if you are rendering in PAL or NTSC format.
   */
  function setCombine(autoCombine: boolean, secondFieldFirst: boolean): void;

  /**
   * Sets the frame output format.
   */
  function setFieldType(type: int): void;

  /**
   * Set the background color to use when rendering in scene machine mode.
   */
  function setBgColor(bgColor: ColorRGBA): void;

  /**
   * Set the scene resolution to use for rendering.
   */
  function setResolution(x: int, y: int): void;

  /**
   * Set the scene resolution to use for rendering.
   */
  function setResolutionName(name: string): void;

  /**
   * Set which display module to use for rendering. "Display All" uses the global unconnected display module.
   */
  function setRenderDisplay(name: string): void;

  /**
   * Enable or disable write modules during the render.
   */
  function setWriteEnabled(enabled: boolean): void;

  /**
   * Enable or disable thumbnail cropping for the render. Mainly used when rendering thumbnails.
   */
  function setAutoThumbnailCropping(enabled: boolean): void;

  /**
   * Enable rendering on a white background. The default is false, which renders on a black background.
   */
  function setWhiteBackground(enabled: boolean): void;

  /**
   * Render a part of the scene.
   */
  function renderScene(fromFrame: int, toFrame: int): void;

  /**
   * Render the complete scene.
   */
  function renderSceneAll(): void;

  /**
   * Interrupt an active render.
   */
  function cancelRender(): void;

  /**
   * disconnect all scripts from signals emited by this object.
   */
  function disconnect(): void;

  /**
   * Event that notifies the script that a certain frame is available and at which location.
   */
  function frameReady(frame: int, frameCel: QObject): void;

  /**
   * Event that notifies the script when the render has completed.
   */
  function renderFinished(): void;

  function render(parent: QObject, name: char): void;

  function attach(impl: TUScriptInterfaceImpl): void;
}

/**
 * The selection JavaScript global object. Retrieve information about the nodes or columns that are selected
 */
declare namespace selection {
  /**
   * returns the number of modules that are selected.
   */
  function numberOfNodesSelected(): int;

  /**
   * returns the path of the selected node
   */
  function selectedNode(i: int): string;

  /**
   * returns a value for the number of columns selected in the xsheet.
   */
  function numberOfColumnsSelected(): int;

  /**
   * returns the ith column selected in the xsheet.
   */
  function selectedColumn(i: int): string;

  /**
   * Clear the selection.
   */
  function clearSelection(): boolean;

  /**
   * Add a node to the selection.
   */
  function addNodeToSelection(node: string): boolean;

  /**
   * Remove a node from the selection.
   */
  function removeNodeFromSelection(node: string): boolean;

  /**
   * Add a column to the selection.
   */
  function addColumnToSelection(column: string): boolean;

  /**
   * Adds the drawing column and it's associated read node to the selection.
   */
  function addDrawingColumnToSelection(columnName: string): boolean;

  /**
   * Adds the column to the selection. If the column is a drawing column, also adds the associated read node to the selection.
   */
  function extendSelectionWithColumn(columnName: string): boolean;

  /**
   * Sets the selection frame range.
   */
  function setSelectionFrameRange(start: int, length: int): void;

  /**
   * Return true if the selection has a range.
   */
  function isSelectionRange(): boolean;

  /**
   * Return the selected start frame.
   */
  function startFrame(): int;

  /**
   * Return the number of selected frame.
   */
  function numberOfFrames(): int;

  /**
   * selects all nodes and all columns in the scene
   */
  function selectAll(): void;

  /**
   * return an Array of all selected nodes.
   */
  function selectedNodes(): NodePath[];

  /**
   * sub selection - obtains the ID of all the sub selection for the provided node.
   */
  function subSelectionForNode(node: string): QScriptValue;

  /**
   * sub selection - select a set of ID from the sub selection
   */
  function addSubSelectionForNode(node: string, subSelection: QScriptValue): boolean;

  /**
   * clear all subselection on a given node.
   */
  function clearSubSelectionForNode(vnode: string): boolean;

  function selection(parent: QObject, name: char): void;
}

/**
 * The sound JavaScript global object. Access the scene soundtrack in part or in whole. The scripting environment can receive notifications when scene frame is ready. See the TB_ExportFLV.js script for an example
 */
declare namespace sound {
  /**
   * Sets the number of frames per second. By default the scene frame rate is used.
   */
  function setFrameRate(rate: int): void;

  /**
   * Sets the audio sample rate in Hz (i.e. 22050, 44100, ...).
   */
  function setSampleRate(rate: double): void;

  /**
   * Sets the audio channel size (i.e. 8 or 16 bit).
   */
  function setChannelSize(size: int): void;

  /**
   * Sets the number of audio channels (i.e 1 for mono and 2 for stereo).
   */
  function setChannelCount(count: int): void;

  /**
   * Return a part of the scene's soundtrack in a temporary file in the WAV format.
   */
  function getSoundtrack(fromFrame: int, toFrame: int): QObject;

  /**
   * Return the scene's soundtrack in a temporary file in the WAV format.
   */
  function getSoundtrackAll(): QObject;

  /**
   * Check if the export file path os in unicode.
   */
  function isUnicode(exportFilePath: string): boolean;

  /**
   * Copy the content of the source file to the destination file and say if the copy is done completely.
   */
  function copy(srcFileName: string, dstFileName: string): boolean;

  /**
   * Event that notifies the script when the sound file is available.
   */
  function soundReady(): QSignal<() => void>;

  function sound(parent: QObject, name: char): void;

  function attach(impl: TUScriptInterfaceImpl): void;
}

/**
 * The Timeline JavaScript global object. Get informations about layers and frames from the Timeline view
 */
declare namespace Timeline {
  /**
   * return true if the selIdx points to a column
   */
  function selIsColumn(selIdx: int): boolean;

  /**
   * Convert the selected index to a column.
   */
  function selToColumn(selIdx: int): string;

  /**
   * Convert the selected index to a node.
   */
  function selToNode(selIdx: int): string;

  /**
   * return true if the selected index is a node
   */
  function selIsNode(selIdx: int): boolean;

  /**
   * return true if the layer index is a column
   */
  function layerIsColumn(layerIdx: int): boolean;

  /**
   * return the layer as a column, or the empty string if this layer is not a column.
   */
  function layerToColumn(layerIdx: int): string;

  /**
   * return true if the layer is a node.
   */
  function layerIsNode(layerIdx: int): boolean;

  /**
   * return node associated to the layer, or the empty string if this layer is not a node..
   */
  function layerToNode(layerIdx: int): string;

  /**
   * convert a selection index to a layer index
   */
  function selToLayer(selIdx: int): int;

  /**
   * return the layer index of the parent node
   */
  function parentNodeIndex(layerIdx: int): int;

  /**
   * return true if the parent layer index is an ancestor of the layer index
   */
  function isAncestorOf(parentLayerIdx: int, layerIdx: int): boolean;

  /**
   * return true if display was set to unconnected
   */
  function setDisplayToUnconnected(): boolean;

  /**
   * return the number of layer selected.
   */
  var numLayerSel: int;

  /**
   * return the first frame selected.
   */
  var firstFrameSel: int;

  /**
   * return the number of the selected frame, if only one frame is selected. It will return zero (0) if no frames are selected.
   */
  var numFrameSel: int;

  /**
   * return the number of layers in the timeline.
   */
  var numLayers: int;
}

/**
 * The ToolProperties JavaScript global object. Controls the Tool Properties
 */
declare namespace ToolProperties {
  /**
   * set the Apply to Line Art and Colour Art checkbox state to b; in the Select Tool Options.
   */
  function setApplyAllArts(b: boolean): void;

  /**
   * toggle the Draw Behind mode of the Brush tool
   */
  function setDrawBehindMode(b: boolean): void;

  /**
   * set the auto create colour art mode of the current tool to b if applicable.
   */
  function setAutoCreateColourArt(b: boolean): void;

  /**
   * set the auto flatten mode if applicable.
   */
  function setAutoFlattenMode(b: boolean): void;

  /**
   * set the Respect Protected Colour mode if applicable.
   */
  function setRespectProtectedColourMode(b: boolean): void;

  /**
   * set the magnifier mode
   */
  function setDrawingMagnifierMode(b: boolean): void;

  /**
   * set the select tool mode selection to Lasso or Marquee. If b is true, the mode will be set to Marquee.
   */
  function setMarkeeMode(b: boolean): void;

  /**
   * set the snapping mode for the contour, align and grid mode all to the modes specified in argument.
   */
  function setSnapping(contour: boolean, align: boolean, grid: boolean): void;

  /**
   * will turn the permanent selection mode on/off depending on the parameter
   */
  function setPermanentSelectionMode(b: boolean): void;

  /**
   * set the select by colour mode of the Select tool .
   */
  function setSelectByColourMode(b: boolean): void;

  /**
   * toggle whether contour editor shows all tool controls or not.
   */
  function setShowHideAllContourEditingControls(b: boolean): void;

  /**
   * set the selection mode of the transform tool to peg mode if b is true
   */
  function setPegSelectionMode(b: boolean): void;

  /**
   * set the align and grid snapping modes of the transform tool.
   */
  function setTransformToolSnapping(align: boolean, grid: boolean): void;

  /**
   * will hide the transform tool manipulator if b is true
   */
  function setShowHideManipulatorControls(b: boolean): void;

  /**
   * instruct the paint tool to remove the opacity texture if b is true.
   */
  function setPaintAndRemoveTextureMode(b: boolean): void;

  /**
   * instruct the paint tool to use the gradient/texture matrix stored in the tool if b is true.
   */
  function setUsedStoredColourGradientMode(b: boolean): void;

  /**
   * If b is true, the paint tool will select the newly painted zone after painting. This can be useful if you want to edit a gradient on multiple zones after painting.
   */
  function setPaintToolShouldSelectPaintedZonesAfterPainting(b: boolean): void;

  /**
   * set the apply all drawing mode to b
   */
  function setApplyAllDrawings(b: boolean): void;

  /**
   * set the apply all visible drawing mode to b
   */
  function setApplyAllVisibleDrawings(b: boolean): void;

  /**
   * set the auto gap closing mode to m. Mode can be 0, 1, 2 or 3, Which corresponds to No Gap, Small, Medium and Large.
   */
  function setAutogapClosingMode(m: int): void;

  /**
   * set the auto fill mode of Rectangle and Ellipse tool to b
   */
  function setAutoFillInside(b: boolean): void;

  /**
   * set the cutter's gesture mode to b
   */
  function setGestureCutter(b: boolean): void;

  /**
   * set the cutter's gesture break mode to b
   */
  function setMouseGestureBreakeMode(b: boolean): void;

  /**
   * show the inkable lines if b is true
   */
  function setShowInkableLines(b: boolean): void;

  /**
   * set the smart ink line connection mode to b
   */
  function setSmartInkLineConnectionMode(b: boolean): void;

  /**
   * instruct the ink tool to select inked lines after inking if b is true
   */
  function setInkLineSelectionMode(b: boolean): void;

  /**
   * instruct the ink tool to bring inked lines on top after inking if b is true
   */
  function setBringInkedLinesOnTop(b: boolean): void;

  /**
   * set the join mode of the inked lines to be joinType. Join type can be one of: "ROUND_JOIN", "MITER_JOIN" or "BEVEL_JOIN"
   */
  function setInkJoinMode(unknown_0: string): void;

  /**
   * set the pencil tip shape used by the eraser, cutter, and ink tools whenever an existing pencil line gets split by the tool.
   */
  function setPencilTipMode(pencilTip: string): void;

  /**
   * set the line building mode of the Pencil tool to b.
   */
  function setLineBuildingMode(b: boolean): void;

  /**
   * set the line pushing mode of the Pencil tool to b.
   */
  function setLinePushingMode(b: boolean): void;

  /**
   * toggle the auto gap closing functionality for the line and pencil tools. When the auto gap functionality is on, the line or pencil tool tries to add a stroke line to cover the gap between the newly created line and any existing line.
   */
  function setLineAutoGapClosing(b: boolean): void;
}

/**
 * The view JavaScript global object. Provides information about the contents of selected View windows
 */
declare namespace view {
  /**
   * returns a unique identifier for the current, active View.
   */
  function currentView(): string;

  /**
   * returns a string that indicates what type of View the currentView is.
   */
  function type(viewName: string): string;

  /**
   * returns the name of the current Group Module in the active Network View.
   */
  function group(viewName: string): string;

  /**
   * returns the name of the column for the currently displayed function in the Function View.
   */
  function column(viewName: string): string;

  /**
   * forces a refresh of the drawing and scene planning views.
   */
  function refreshViews(): void;

  /**
   * returns the drawing tool manager.
   */
  function currentToolManager(): QObject;
}

declare interface WidgetConfig {
  /**
   * The name of the automatically generated attribute, or
   * An attribute that matches this type of widget.
   */
  data: string | Attribute;
  [key: string]: any;
}
/**
 * Base class of the script widget classes
 */
declare class WidgetBase extends MO_SignalEmitter {
  constructor(config: WidgetConfig);

  public data(index?: int): Attribute;

  public onDrag(dragContext: DragContext);

  /**
   * signal called on mouse down when picking this widget with the Transform tool
   */
  public dragStarted: QSignal<(dragContext: DragContext) => void>;

  /**
   * signal called when this widget is dragged with the Transform tool
   */
  public drag: QSignal<(dragContext: DragContext) => void>;

  /**
   * signal called on mouse up after having manipulated this widget with the Transform tool
   */
  public dragEnded: QSignal<(dragContext: DragContext) => void>;
}

declare interface CustomWidgetConfig extends WidgetConfig {
  attribute: string;
  drag_manipulator: string;
  painter: string;
  picker: string;
  local_transformation?: string;
}

/**
 * The CustomWidget JavaScript class. A widget for which the attribute, drag_manipulator, painter, picker and local_transformation components are specified at the widget creation
 */
declare class CustomWidget extends WidgetBase {
  constructor(config: CustomWidgetConfig);
  /**
   * valueChanged signal called when value of the attribute of the widget has changed
   */
  public valueChanged(newValue: string): void;
}

declare interface Line2dDisplayWidgetConfig {
  /**
  An array of existing 2D point attribute.
  Default: - 
  */
  data: Attribute[];
  /**
  The thickness of the line.
  Default: 0.01 
  */
  size?: float;
  /**
  The colour of the sphere manipulator.
  Default: 255, 0, 0 
  */
  color?: ColorRGBA;
}

/**
 * The Line2dDisplayWidget JavaScript class. A 2 dimensional line linking 2 points
 */
declare class Line2dDisplayWidget extends WidgetBase {
  constructor(config: Line2dDisplayWidgetConfig);
}

declare interface Rotation3dWidgetConfig {
  /**
  The name of the automatically generated 3D rotation attribute (if none is provided)
  Default: -
  */
  data: string | Attribute;
  /**
  The radius of the 3D sphere in field.
  Default: 1
  */
  radius?: float;
  /**
  The colour of the sphere manipulator.
  Default: 255, 0, 0, 120
  */
  color?: ColorRGBA;
  /**
  The colour of the sphere manipulator when selected.
  Default: 255, 0, 0, 180
  */
  selection_color?: ColorRGBA;
}

/**
 * The Rotation3dWidget JavaScript class. A rotatable spherical widget
 */
declare class Rotation3dWidget extends WidgetBase {
  constructor(config: Rotation3dWidgetConfig);
  /**
   * valueChanged signal called when the Rotation 3D attribute value has changed
   */
  public valueChanged: QSignal<(point2d: QScriptValue) => void>;
}

declare interface RotationXWidgetConfig {
  /**
  The name of the automatically generated double floating point attribute (if none is provided)
  Default: -
  */
  data: String | Attribute;
  /**
  The radius of the circle in fields.
  Default: 1
  */
  radius?: float;
  /**
  The width between the external and internal circles (band) in fields.
  Default: 0.03
  */
  width?: float;
  /**
  The colour of the circle manipulator.
  Default: 255, 0, 0, 120
  */
  color?: ColorRGBA;
  /**
  The colour of the circle manipulator when selected.
  Default: light red
  */
  selection_color?: ColorRGBA;
}

/**
 * The RotationXWidget JavaScript class. A rotatable circle widget around the x axis
 */
declare class RotationXWidget extends WidgetBase {
  constructor(config: RotationXWidgetConfig);
  public valueChanged: QSignal<(x: float) => void>;
}

declare interface RotationYWidgetConfig {
  /**
  The name of the automatically generated double floating point attribute (if none is provided)
  Default: -
  */
  data: String | Attribute;
  /**
  The radius of the circle in fields.
  Default: 1
  */
  radius?: float;
  /**
  The width between the external and internal circles (band) in fields.
  Default: 0.03
  */
  width?: float;
  /**
  The colour of the circle manipulator.
  Default: 0, 255, 0, 120
  */
  color?: ColorRGBA;
  /**
  The colour of the circle manipulator when selected.
  Default: light green
  */
  selection_color?: ColorRGBA;
}
/**
 * The RotationYWidget JavaScript class. A rotatable circle widget around the y axis
 */
declare class RotationYWidget extends WidgetBase {
  constructor(config: RotationYWidgetConfig);
  public valueChanged: QSignal<(y: float) => void>;
}

declare interface RotationZWidgetConfig {
  /**
  The name of the automatically generated double floating point attribute (if none is provided)
  Default: -
  */
  data: String | Attribute;
  /**
  The radius of the circle in fields.
  Default: 1
  */
  radius?: float;
  /**
  The width between the external and internal circles (band) in fields.
  Default: 0.03
  */
  width?: float;
  /**
  The colour of the circle manipulator.
  Default: 0, 0, 255, 120
  */
  color?: ColorRGBA;
  /**
  The colour of the circle manipulator when selected.
  Default: light blue
  */
  selection_color?: ColorRGBA;
}

/**
 * The RotationZWidget JavaScript class. A rotatable circle widget around the z axis
 */
declare class RotationZWidget extends WidgetBase {
  constructor(config: RotationZWidgetConfig);
  public valueChanged: QSignal<(z: float) => void>;
}

declare interface TranslationXWidgetConfig {
  /**
  The name of the automatically generated double floating point attribute (if none is provided)
  Default: -
  */
  data: String | Attribute;
  /**
  The radius of the base of the arrow manipulator in field.
  Default: 0.15
  */
  radius?: float;
  /**
  The lenght of the stick of the arrow manipulator in field.
  Default: 1.0
  */
  length?: float;
  /**
  The colour of the arrow manipulator.
  Default: red
  */
  color?: ColorRGBA;
  /**
  The colour of the arrow manipulator when selected.
  Default: light red
  */
  selection_color?: ColorRGBA;
}

/**
 * The TranslationXWidget JavaScript class. A translatable arrow in the x axis
 */
declare class TranslationXWidget extends WidgetBase {
  constructor(config: TranslationXWidgetConfig);
  /**
   * valueChanged signal called when the x translation value has been modified by the Transform tool.
   */
  public valueChanged(x: float): void;
}

declare interface TranslationYWidgetConfig {
  /**
  The name of the automatically generated double floating point attribute (if none is provided)
  Default: -
  */
  data: String | Attribute;
  /**
  The radius of the base of the arrow manipulator in field.
  Default: 0.15
  */
  radius?: float;
  /**
  The lenght of the stick of the arrow manipulator in field.
  Default: 1.0
  */
  length?: float;
  /**
  The colour of the arrow manipulator.
  Default: green
  */
  color?: ColorRGBA;
  /**
  The colour of the arrow manipulator when selected.
  Default: light green
  */
  selection_color?: ColorRGBA;
}

/**
 * The TranslationYWidget JavaScript class. A translatable arrow in the y axis
 */
declare class TranslationYWidget extends WidgetBase {
  constructor(config: TranslationYWidgetConfig);
  /**
   * valueChanged signal called when the y translation value has been modified by the Transform tool.
   */
  public valueChanged(y: float): void;
}

declare interface TranslationZWidgetConfig {
  /**
  The name of the automatically generated double floating point attribute (if none is provided)
  Default: -
  */
  data: String | Attribute;
  /**
  The radius of the base of the arrow manipulator in field.
  Default: 0.15
  */
  radius?: float;
  /**
  The lenght of the stick of the arrow manipulator in field.
  Default: 1.0
  */
  length?: float;
  /**
  The colour of the arrow manipulator.
  Default: blue
  */
  color?: ColorRGBA;
  /**
  The colour of the arrow manipulator when selected.
  Default: light blue
  */
  selection_color?: ColorRGBA;
}

/**
 * The TranslationZWidget JavaScript class. A translatable arrow in the z axis
 */
declare class TranslationZWidget extends WidgetBase {
  constructor(config: TranslationZWidgetConfig);
  /**
   * valueChanged signal called when the z translation value has been modified by the Transform tool.
   */
  public valueChanged(z: float): void;
}

/**
 * Base class for color and texture pots stored in palettes
 */
declare class BaseColor extends QObject {
  public setName(n: string): void;

  /**
   * If true, the color pot is a texture.
   */
  isTexture: boolean;

  /**
   * The color pot name.
   */
  name: string;

  /**
   * Unique ID of the color.
   */
  id: string;

  /**
   * Returns true if the color is valid.
   */
  isValid: boolean;
}

/**
 * The JavaScript class for manipulating colours. Can be created from a Palette object
 */
declare class Color extends QObject {
  public setColorType(colorType: string): void;

  public setColorType(t: int): void;

  /**
   * Set the rgba or gradient values of the colour.
   */
  public setColorData(v: QVariant): void;

  /**
   * The type of colour can be: ColorType.SOLID_COLOR, ColorType.LINEAR_GRADIENT or ColorType.RADIAL_GRADIENT.
   */
  colorType: int;

  /**
   * The colour as either an object if the colour is solid or an array of objects if it is a gradient.
   */
  colorData: QVariant;
}

/**
 * The JavaScript class for manipulating textures. Can be created from a Palette object
 */
declare class Texture extends QObject {
  /**
   * Set the tiling attribute.
   */
  public setTiled(unknown_0: boolean): void;

  /**
   * Will load the file in a bitmap and make an internal copy.
   */
  public setTextureFile(filename: string): void;

  /**
   * Will make a copy of the image and store it in the texture.
   */
  public setTextureBitmap(image: QImage): void;

  /**
   * True if the texture is tiled.
   */
  tiled: boolean;

  /**
   * Width of the texture. -1 if invalid texture.
   */
  width: int;

  /**
   * Height of the texture. -1 if invalid texture.
   */
  height: int;

  /**
   * Will return a copy of the texture bitmap.
   */
  bitmap: QImage;
}

/**
 * The JavaScript class for manipulating color override nodes. Can be created from the node global object
 */
declare class ColorOverride extends QObject {
  /**
   * Returns the number of whole palette overrides.
   */
  public getNumPalettes(): int;

  /**
   * Returns the full path (including name and extension) of the palette override at postion 'index'.
   */
  public palettePath(index: int): string;

  /**
   * Set the path (including name and extension) of the palette at position 'index'.
   */
  public setPalettePath(index: int, path: string): void;

  /**
   * Clear the list of whole palette overrides.
   */
  public clearPalettes(): void;

  /**
   * Add a full palette path at the bottom of the list of whole palette overrides.
   */
  public addPalette(path: string): void;

  /**
   * Remove a palette with the supplied path from the list of whole palette overrides.
   */
  public removePalette(path: string): void;

  /**
   * Returns the number of individual colour overrides.
   */
  public getNumColorOverrides(): int;

  /**
   * Returns the path of a texture file for the colour override at the specified position in the list.
   */
  public getOverrideTexturePath(index: int): string;

  /**
   * Sets the path of a texture file for the colour override at the specified position in the list.
   */
  public setOverrideTexturePath(index: int, path: string): void;

  /**
   * Returns the full path (including name and extension) of the palette to which the override colour belongs.
   */
  public getOverridePalettePath(index: int): string;

  /**
   * Sets the full path (including name and extension) of the palette to which the override colour belongs.
   */
  public setOverridePalettePath(index: int, path: string): void;

  /**
   * Returns the number of selected colours.
   */
  public getNumSelectedColors(): int;

  /**
   * Returns the full path (including name and extension) of the palette to which the selected colour belongs.
   */
  public getSelectedPalettePath(index: int): string;

  /**
   * Sets the full path (including name and extension) of the palette to which the selected colour belongs.
   */
  public setSelectedPalettePath(index: int, path: string): void;
}

/**
 * The ColorRGBA JavaScript class. Represent an 8 bits per channel Red Green Blue Alpha colour
 */
declare class ColorRGBA extends QObject {
  /**
   * Create a new default ColorRGBA (ie. opaque white).
   */
  constructor();

  /**
   * Create a new ColorRGBA.
   */
  constructor(r: double, g: double, b: double, a?: double);

  /**
   * red value [ 0, 255 ]
   */
  r: int;

  /**
   * green value [ 0, 255 ]
   */
  g: int;

  /**
   * blue value [ 0, 255 ]
   */
  b: int;

  /**
   * alpha value [ 0, 255 ]
   */
  a: int;
}

/**
 * The JavaScript class for defining the different color types. Obtain it from Constants
 */
declare class ColorType extends QObject {
  /**
   * Represents a solid color.
   */
  SOLID_COLOR: int;

  /**
   * Represents a linear gradient color.
   */
  LINEAR_GRADIENT: int;

  /**
   * Represents a radial gradient color.
   */
  RADIAL_GRADIENT: int;
}

/**
 * The JavaScript class for getting the composition information of a node. Obtain one from the compositionOrder global object
 */
declare class CompositionItem extends QObject {
  /**
   * name of this node ( see node interface )
   */
  node: string;

  /**
   * true when this node is a root (it has no parent).
   */
  isNodeRoot: boolean;

  /**
   * true when this node is a normal node and has a parent.
   */
  isNodeNormal: boolean;

  /**
   * true when this node has a parent but the parent is not present in the composition. Some modules, such as composite module, are never listed in the composition, however, they can be the parent of some other modules that will be listed in the composition.
   */
  isNodeBroken: boolean;

  /**
   * parent less node that is within a child group.
   */
  isNodeSubnodeRoot: boolean;
}

/**
 * The JavaScript class for getting the constant colour and palette data. Obtain it from PaletteObjectManager
 */
declare class Constants extends QObject {
  /**
   * Holds the constants to represent a palette location.
   */
  Location: PaletteLocation;

  /**
   * Holds the constants to define the color types.
   */
  ColorType: ColorType;

  PaletteListType: PaletteListType;
}

/**
 * The function below is referenced in Toon Boom's script "curveOverEnvelope.js"
 * @param nodePath
 * @param frame
 */
declare function createVertexTransform(nodePath: NodePath, frame: number): VertexTransform;

declare interface VertexTransform {
  applyVertexTransform(p: Point2d): Point2d;
}

/**
 * The Controller JavaScript object. This object is available in Master Controller callback functions
 */
declare class Controller extends QObject {
  /**
   * The object type "__master_controller_object__".
   */
  public static name: string;

  /**
   * The node path to the Master Controller node ex: "Top/MyMasterController".
   */
  public static node: string;

  /**
   * The script widget array.
   */
  public static controls: QScriptValue;

  public static data: QScriptValue;

  /**
   * Called when the user shows the Master Controller node controls.
   */
  public static onShowControl: QScriptValue;

  /**
   * Called when the user hides the Master Controller node controls.
   */
  public static onHideControl: QScriptValue;

  /**
   * Called when the current frame of the application changes.
   */
  public static onFrameChanged: QScriptValue;
}

/**
 * The JavaScript class for getting or setting the model directory, the scan files and the default camera name flags when copying. Obtain from the copyPaste global object
 */
declare class CopyOptions extends QObject {
  addModelsDir: boolean;

  addScanFiles: boolean;

  defaultCameraName: boolean;
}

/**
 * The JavaScript class for converting position from one coordinate system to another. Obtain it as a parameter to the WidgetBase drag signals
 */
declare class DragContext extends QObject {
  /**
   * Return the picking point in world coordinates.
   */
  public dragPoint(): QObject;

  /**
   * Project a given point in world coordinates to the screen and then back to the model plane.
   */
  public projectToModelPlane(worldPoint3d: QObject): QObject;

  /**
   * Transform a given point in world coordinates to the model space.
   */
  public transformFromWorldToModel(worldPoint3d: QObject): QObject;

  /**
   * Transform the camera chain model matrix.
   */
  public transformModelMatrix(transformationMatrix: Matrix4x4): QObject;

  /**
   * Multiply by the matrix of transformations associated with the script widgets registered after the current one.
   */
  public multiplyByPostMatrix(modelPoint3d: QObject): QObject;
}

/**
 * The JavaScript class representing a dragged object. Obtain from the copyPaste global object copy method
 */
declare class DragObject extends QObject {
  constructor();

  constructor(dragObject: DD_DragObject);

  public dragObject(): DD_DragObject;
}

/**
 * The DrawingToolParams JavaScript class. Set or unset the "apply on all drawings" setting of the DrawingTools methods
 */
declare class DrawingToolParams extends QObject {
  public applyAllDrawings(): boolean;

  public setApplyAllDrawings(b: boolean): void;
}

/**
 * The IO JavaScript global object. Enumerates the different types of stream behaviour the ImageFile can take
 */
declare class FileIOType extends QObject {}

/**
 * The PermanentFile and TemporaryFile JavaScript classes. Used to represent an actual image file on disk
 */
declare class FileWrapper extends QObject {
  /**
   * Specify absolute path of this image file. Name of file can not be changed if there is an open stream.
   */
  public setPath(path: string): FileWrapper;

  /**
   * Retrieve file path.
   */
  public path(): string;

  /**
   * Change extension for file name. Extension won't change if there is an open stream.
   */
  public setExtension(ext: string): FileWrapper;

  /**
   * Retrieve file extension.
   */
  public extension(): string;

  /**
   * Verify if file exists on disk.
   */
  public exists(): boolean;

  public remove(): boolean;

  /**
   * Check if file is opened.
   */
  public isOpen(): boolean;

  /**
   * Check if file is closed.
   */
  public isClose(): boolean;

  /**
   * Open file stream for read/write.
   */
  public open(m?: int): boolean;

  /**
   * Close file stream.
   */
  public close(): boolean;

  /**
   * Write string in current stream.
   */
  public write(text: string): void;

  /**
   * Write string line in current stream.
   */
  public writeLine(text: string): void;

  /**
   * Write entire content of parameter file in current stream.
   */
  public writeFile(file: FileWrapper): void;

  /**
   * Read entire content of stream.
   */
  public read(): string;

  /**
   * Read single line of stream.
   */
  public readLine(): string;

  public move(dest: FileWrapper): boolean;

  public copy(dest: FileWrapper): boolean;

  /**
   * Create a new FileWrapper.
   */
  constructor();

  /**
   * Create a new FileWrapper.
   */
  constructor(path: string);
}

/**
 * The JavaScript class providing informations about a palette list. Obtain from PaletteObjectManager methods like getPaletteListByElementId, getScenePaletteList or getPaletteListById
 */
declare class PaletteList extends QObject {
  /**
   * Returns the folder in which this palette list is located.
   */
  public getPath(): string;

  /**
   * Returns whether the javascript wrapper refers to a valid object.
   */
  public isValid(): boolean;

  /**
   * Returns a Palette object for the palette at position 'index'.
   */
  public getPaletteByIndex(index: int): Palette;

  /**
   * Returns a Palette object for the palette with ID 'id'.
   */
  public getPaletteById(id: string): Palette;

  /**
   * Returns a Palette object for the palette with ID 'id'.
   */
  public getPaletteById(id: string, lookInLinkedPalettes: boolean): Palette;

  /**
   * Try getting the database lock, returning true on success or false on failure. Without the lock, methods that change the state of the palette list can fail.
   */
  public getLock(): boolean;

  /**
   * Release the lock.
   */
  public releaseLock(): boolean;

  public createPalette(path: string): Palette;

  public createPalette(path: string, index: int): Palette;

  public createPaletteAtLocation(location: int, elementId: int, diskName: string): Palette;

  public createPaletteAtLocation(location: int, elementId: int, diskName: string, index: int): Palette;

  /**
   * Adds a palette to the end of this palette list, returning a Palette object.
   */
  public addPalette(path: string): Palette;

  /**
   * Adds a palette to this palette list at the position specified by 'index', returning a Palette object.
   */
  public insertPalette(path: string, index: int): Palette;

  /**
   * Adds a palette to the end of this palette list, returning a Palette object.
   */
  public addPaletteAtLocation(location: int, elementId: int, name: string): Palette;

  /**
   * Adds a palette to this palette list at the position specified by 'index', returning a Palette object.
   */
  public insertPaletteAtLocation(location: int, elementId: int, name: string, index: int): Palette;

  /**
   * Remove the palette at the position specified by 'index'.
   */
  public removePaletteByIndex(index: int): boolean;

  /**
   * Remove the palette with the specified palette ID.
   */
  public removePaletteById(id: string): boolean;

  /**
   * Remove the palette by path.
   */
  public removePalette(path: string): boolean;

  /**
   * Search the given color ID and return the first match, also looking in the scene palette list if applicable.
   */
  public findPaletteOfColor(colorId: string): Palette;

  /**
   * Move the specified palette up one place in this palette list.
   */
  public movePaletteUp(id: string): boolean;

  /**
   * Move the specified palette down one place in this palette list.
   */
  public movePaletteDown(id: string): boolean;

  /**
   * Was the palette list successfully loaded from disk (true or false)?
   */
  public isLoaded(): boolean;

  /**
   * Number of palettes in this palette list.
   */
  numPalettes: int;

  /**
   * The palette list ID of this palette list.
   */
  id: string;

  /**
   * The type of palette list. One of the PaletteListType constants.
   */
  type: int;

  /**
   * Will return the elementId of this palette list if the type is PaletteListType.Element will return -1 if the type is PaletteListType.Scene.
   */
  elementId: int;
}

/**
 * The JavaScript class for getting the palette list type. Obtain it from Constants
 */
declare class PaletteListType extends QObject {
  /**
   * The PaletteList is a Scene palette list if its.
   */
  Scene: int;

  /**
   * Represent the Job location of the project. A palette created with this location would be stored in the job folder.
   */
  Element: int;

  /**
   * Represent the Scene location of the project. A palette created with this location would be stored in the scene folder.
   */
  Hidden: int;

  /**
   * The palette list type is unspecified. Maybe the palette list is invalid.
   */
  Unspecified: int;
}

/**
 * The JavaScript class for defining the standard palette locations. Obtain it from Constants
 */
declare class PaletteLocation {
  /**
   * Represent the Environment location of the project. A palette created with this location would be stored in the environment folder.
   */
  ENVIRONMENT: int;

  /**
   * Represent the Job location of the project. A palette created with this location would be stored in the job folder.
   */
  JOB: int;

  /**
   * Represent the Scene location of the project. A palette created with this location would be stored in the scene folder.
   */
  SCENE: int;

  /**
   * Represent a location in an element of the project.
   */
  ELEMENT: int;

  /**
   * Represents a location outside the project.
   */
  EXTERNAL: int;
}

/**
 * This class is used to retrieve Constants used in the palette and colors
 */
declare class PaletteLocator extends QObject {
  /**
   * Will return the full palette-library path for a given location.
   */
  public folderForLocation(location: int, elementId: int): string;

  /**
   * Will return the filename of the palette including the .plt extension for a given palette and location.
   */
  public palettePathForLocation(location: int, elementId: int, paletteName: string): string;

  /**
   * Will return the texture folder of the palette for a given palette and location.
   */
  public textureFolderForLocation(location: int, elementId: int, paletteName: string): string;

  public palettesAtLocation(location: int, elementId: int, fullFileName: boolean): StringList;

  public importPaletteAtLocation(palettePath: string, location: int, elementId: int, paletteName: string): boolean;
}

/**
 * The JavaScript class for getting or setting the model directory, the scan files and the default camera name flags when pasting. Obtain from the copyPaste global object
 */
declare class PasteOptions extends QObject {
  extendScene: boolean;

  defaultCameraName: boolean;

  createNewColumn: boolean;

  elementMode: string;

  addRemoveMotionKeyFrame: boolean;

  addRemoveVelocityKeyFrame: boolean;

  addRemoveAngleKeyFrame: boolean;

  addRemoveSkewKeyFrame: boolean;

  addRemoveScalingKeyFrame: boolean;

  forceKeyframeAtBeginningAndEnd: boolean;

  offsetKeyFrame: boolean;

  replaceExpressionColumns: boolean;

  drawingPasteAction: string;

  drawingFileMode: string;

  autoExtendExposure: boolean;

  drawingSubstitution: boolean;

  colourPalette: string;

  copyScanFiles: boolean;

  copyModelsDir: boolean;

  preserveColumnName: boolean;

  fullTransfer: boolean;

  startFrameSource: int;

  numberOfFramesSource: int;

  matchNodeName: int;

  /**
   * set the write mode. Value strings: INSERT,OVERWRITE, DO_NOTHING. Default: OVERWRITE )
   */
  writeMode: string;

  /**
   * set the delete mode. Value strings : REMOVE, EMPTY, DELETE_NOTHING. Default: DELETE_NOTHING )
   */
  deleteMode: string;
}

declare class Process2 extends Process {}
/**
 * The Process JavaScript class. Launch an external process
 */
declare class Process extends QObject {
  /**
   * Launch process.
   */
  public launch(): int;

  /**
   * Launch process.
   */
  public static execute(cmd: Array<string>, unknown?: string): int;

  /**
   * Launch process and detach it from application.
   */
  public launchAndDetach(): int;

  /**
   * Fetch command line to be executed in this process.
   */
  public commandLine(): string;

  /**
   * Fetch error code.
   */
  public errorCode(): int;

  /**
   * Fetch error message.
   */
  public errorMessage(): string;

  /**
   * Terminate process.
   */
  public terminate(): void;

  /**
   * Verify if process is still alive.
   */
  public isAlive(): boolean;

  /**
   * Fetch process PID.
   */
  public pid(): int;

  public start(env?: StringList): void;

  public launch(buf: string, env?: StringList): void;

  public readStdout(): string;

  public readStderr(): string;

  public canReadLineStdout(): boolean;

  public canReadLineStderr(): boolean;

  public readLineStdout(): string;

  public readLineStderr(): string;

  public tryTerminate(): void;

  public kill(): void;

  public writeToStdin(buffer: string): void;

  public closeStdin(): void;

  public readyReadStdout(): void;

  public readyReadStderr(): void;

  public processExited(): void;

  public wroteToStdin(): void;

  public launchFinished(): void;

  /**
   * Create a new Process. A process created with a pid cannot be launched as it already should have been. terminate() and isAlive() functions can still be called with such a process.
   */
  constructor(pid: int);

  /**
   * Create a new Process.
   */
  constructor(name: string, unknown_1: any);

  /**
   * Create a new Process.
   */
  constructor(name: string, list: StringList);

  /**
   * Create a new Process.
   */
  constructor(commandLine: string);

  constructor(args?: StringList);

  constructor(...args: string[]);

  public arguments(): StringList;

  public setArguments(arguments: StringList): void;

  public workingDirectory(): string;

  public setWorkingDirectory(workingDirectory: string): void;

  public running(): boolean;

  public exitStatus(): int;

  //objectName: string;
}

/**
 * The RemoteCmd JavaScript class. Send one sided commands to a remote host
 */
declare class RemoteCmd extends QObject {
  //public connect(machine: string, port: int): boolean;

  public connectTimeout(machine: string, port: int, timeout: int): boolean;

  public send(cmd: string): boolean;

  public receive(timeout: int): boolean;

  public sendMsg(msg: string): boolean;

  public receiveMsg(timeout: int): boolean;

  //public disconnect(): void;

  public connected(): boolean;

  public lastReceived(): string;

  constructor();
}

/**
 * The deformation JavaScript global object. Provide deformation node parent matrix transformations
 */
declare class deformation extends SCR_AbstractInterface {
  public lastDeformMatrix(node: string, frame: int): Matrix4x4;

  public nextDeformMatrix(node: string, frame: int): Matrix4x4;

  public lastRestMatrix(node: string): Matrix4x4;

  public nextRestMatrix(node: string): Matrix4x4;
}

/**
 * The WebCCExporter JavaScript global object. Generate movies encoded in H.264
 */
declare class ExportOH264 extends SCR_AbstractInterface {
  public exportMovieFromWriteModules(fromFrame?: int, toFrame?: int): void;

  public exportMovieFromWriteModule(moduleName: string, firstFrame?: int, lastFrame?: int, withSound?: boolean, movieFile?: string): void;

  public exportMovieFromFiles(movieFilename: string, framesFilenames: StringList, firstFrame?: int, lastFrame?: int, withSound?: boolean): void;
}

/**
 * The CheckBox JavaScript class. A simplified CheckBox Qt widget
 */
declare class CheckBox extends SCRIPT_QSWidget {
  /**
   * the text shown alongside the checkbox
   */
  text: string;

  /**
   * whether or not the checkbox is checked
   */
  checked: boolean;
}

/**
 * The Dialog JavaScript class. A simplified Qt dialog
 */
declare class Dialog extends SCRIPT_QSWidget {
  /**
   * add a new tab to the dialog
   */
  public newTab(label: string): void;

  /**
   * add a new column to the dialog
   */
  public newColumn(): void;

  /**
   * add spacers to the dialog layout
   */
  public addSpace(space: int): void;

  /**
   * add widgets to the dialog
   */
  public add(widget: SCRIPT_QSWidget): void;

  /**
   * run the dialog in modal mode. Pressing ok accepts the dialog input. Pressing cancel cancels the dialog.
   */
  public exec(): boolean;

  /**
   * it is the title of the dialog
   */
  title: string;

  /**
   * it is the (legacy, but we still support it ) title of the dialog
   */
  caption: string;

  /**
   * it is the width of the dialog
   */
  //width: int;

  /**
   * it is the name of the ok button
   */
  okButtonText: string;

  /**
   * it is the name of the cancel button
   */
  cancelButtonText: string;
}

/**
 * The ExportVideoDlg JavaScript class. A dialog that can be used before an export to query the user about various settings
 */
declare class ExportVideoDlg extends UI_DialogController {
  /**
   * Get the first scene frame index to export.
   */
  public getFromRange(): int;

  /**
   * Get the last scene frame index to export.
   */
  public getToRange(): int;

  /**
   * Get the x resolution of the scene.
   */
  public getResX(): int;

  /**
   * Get the y resolution of the scene.
   */
  public getResY(): int;

  /**
   * Get the name to display.
   */
  public getDisplayName(): string;

  /**
   * Get the output file.
   */
  public getOutputFile(): string;

  /**
   * Get the video configuration.
   */
  public getVideoConfig(): string;

  /**
   * Set the video configuration.
   */
  public setVideoConfig(config: string): void;

  /**
   * Get the audio configuration.
   */
  public getAudioConfig(): string;

  /**
   * Set the audio configuration.
   */
  public setAudioConfig(config: string): void;

  /**
   * Get the both video and audio configuration.
   */
  public getVideoAndAudioConfig(): string;

  /**
   * Set the both video and audio configuration.
   */
  public setVideoAndAudioConfig(config: string): void;

  /**
   * Get the title of the dialog.
   */
  public getTitle(): string;

  /**
   * Set the title of the dialog.
   */
  public setTitle(title: string): void;

  /**
   * Get the prefix used to set preferences.
   */
  public getPrefPrefix(): string;

  /**
   * Set the prefix used to set preferences.
   */
  public setPrefPrefix(prefix: string): void;

  /**
   * Add a file extension to be known by the dialog, displaying it in the file explorer.
   */
  public addFileType(type: string, typeDesc: string): void;

  /**
   * Clear all the file extension and description know.
   */
  public clearFileTypes(): void;

  /**
   * Initialize dialog and settings for export.
   */
  public init(): void;

  /**
   * Open the dialog widget.
   */
  public Exec(): int;

  /**
   * Enable the progress for the export.
   */
  public enableProgress(): void;

  /**
   * Update the progress for the export.
   */
  public updateProgress(progress: int): void;

  /**
   * Open a dialog for the export frame progress.
   */
  public startExport(): void;

  /**
   * Close the export progress dialog.
   */
  public endExport(): void;

  public exportCanceled(): void;

  public showAudioOptions(): void;

  public showVideoOptions(): void;

  public showVideoAndAudioOptions(): void;

  public fileFormatChanged(unknown_0: int): void;

  /**
   * Begin index frame used for export.
   */
  fromFrame: int;

  /**
   * End index frame used for export.
   */
  toFrame: int;

  /**
   * Name displayed of the dialog.
   */
  display: string;

  /**
   * File used for output.
   */
  outputFile: string;

  /**
   * Video configuration.
   */
  videoConfig: string;

  /**
   * Audio configuration.
   */
  audioConfig: string;

  /**
   * title of the dialog
   */
  title: string;

  /**
   * the prefix to use for the preference items
   */
  prefPrefix: string;
}


declare namespace QFile {

  function copy(sourceFile: string, destFile: string);
}