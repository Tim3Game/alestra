import Evaluator from '../Parser/Evaluator.mjs';
import Method from '../Parser/Method';
import { multiOptions } from '../Util/Util';
import { Type } from 'klasa';

export default function init(evaluator) {
	if (!(evaluator instanceof Evaluator)) throw new TypeError(`Expected evaluator to be an Evaluator instance, got ${new Type(evaluator)} instead.`);

	evaluator
		// .add(new Method('changeCanvasSize')
		// 	.add({ name: 'width', type: 'number', required: true })
		// 	.add({ name: 'height', type: 'number', required: true }))
		// .add(new Method('changeCanvasWidth')
		// 	.add({ name: 'width', type: 'number', required: true }))
		// .add(new Method('changeCanvasHeigth')
		// 	.add({ name: 'height', type: 'number', required: true }))
		.add(new Method('save'))
		.add(new Method('restore'))
		.add(new Method('rotate')
			.add({ name: 'angle', type: 'number', required: true }))
		.add(new Method('scale')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true }))
		.add(new Method('translate')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true }))
		.add(new Method('clip'))
		.add(new Method('setTransform')
			.add({ name: 'a', type: 'number', required: true })
			.add({ name: 'b', type: 'number', required: true })
			.add({ name: 'c', type: 'number', required: true })
			.add({ name: 'd', type: 'number', required: true })
			.add({ name: 'e', type: 'number', required: true })
			.add({ name: 'f', type: 'number', required: true }))
		.add(new Method('resetTransformation'))
		// .add(new Method('getImageData')
		// 	.add({ name: 'x', type: 'number', required: false })
		// 	.add({ name: 'y', type: 'number', required: false })
		// 	.add({ name: 'width', type: 'number', required: false })
		// 	.add({ name: 'height', type: 'number', required: false })
		// 	.add({ name: 'callback', type: 'callback', required: false }))
		// .add(new Method('putImageData')
		// 	.add({ name: 'imagedata', type: 'Uint8Array', required: true })
		// 	.add({ name: 'dx', type: 'number', required: true })
		// 	.add({ name: 'dy', type: 'number', required: true })
		// 	.add({ name: 'dirtyX', type: 'number', required: false })
		// 	.add({ name: 'dirtyY', type: 'number', required: false })
		// 	.add({ name: 'dirtyWidth', type: 'number', required: false })
		// 	.add({ name: 'dirtyHeight', type: 'number', required: false }))
		.add(new Method('fill'))
		.add(new Method('addText')
			.add({ name: 'text', type: 'string', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'maxWidth', type: 'number', required: false }))
		.add(new Method('addResponsiveText')
			.add({ name: 'text', type: 'string', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'maxWidth', type: 'number', required: true }))
		.add(new Method('addMultilineText')
			.add({ name: 'text', type: 'string', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'maxWidth', type: 'number', required: true })
			.add({ name: 'lineHeight', type: 'number', required: true }))
		.add(new Method('stroke'))
		.add(new Method('addStrokeRect')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true }))
		.add(new Method('addStrokeText')
			.add({ name: 'text', type: 'string', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true }))
		// .add(new Method('measureText')
		// 	.add({ name: 'text', type: 'string', required: true })
		// 	.add({ name: 'callback', type: 'callback', required: false }))
		.add(new Method('setStroke')
			.add({ name: 'color', type: 'string', required: false }))
		.add(new Method('setLineWidth')
			.add({ name: 'width', type: 'number', required: false }))
		.add(new Method('setStrokeWidth')
			.add({ name: 'width', type: 'number', required: false }))
		.add(new Method('setLineDashOffset')
			.add({ name: 'value', type: 'number', required: true }))
		.add(new Method('setLineJoin')
			.add({ name: 'value', type: 'custom', required: true, custom: multiOptions.bind(null, ['bevel', 'round', 'miter']) }))
		.add(new Method('setLineCap')
			.add({ name: 'value', type: 'custom', required: true, custom: multiOptions.bind(null, ['butt', 'round', 'square']) }))
		.add(new Method('setLineDash')
			.add({ name: 'segments', type: 'number[]', required: true }))
		.add(new Method('addImage')
			.add({ name: 'link', type: 'buffer', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true })
			.add({
				name: 'options', type: 'object', required: false, properties: new Map()
					.set('radius', { name: 'radius', type: 'number', required: false })
					.set('type', { name: 'type', type: 'custom', required: false, custom: multiOptions.bind(null, ['round', 'bevel']) })
					.set('restore', { name: 'restore', type: 'boolean', required: false })
			}))
		.add(new Method('addRoundImage')
			.add({ name: 'link', type: 'buffer', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: false }))
		.add(new Method('addBevelImage')
			.add({ name: 'link', type: 'buffer', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: false }))
		.add(new Method('addCircle')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: false }))
		.add(new Method('createRoundPath')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: true })
			.add({ name: 'start', type: 'number', required: false })
			.add({ name: 'angle', type: 'number', required: false }))
		.add(new Method('createRoundClip')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: true })
			.add({ name: 'start', type: 'number', required: false })
			.add({ name: 'angle', type: 'number', required: false }))
		.add(new Method('createRectPath')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true }))
		.add(new Method('createRectClip')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true }))
		.add(new Method('createBeveledPath')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: true }))
		.add(new Method('createBeveledClip')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: true }))
		.add(new Method('addRect')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true }))
		.add(new Method('setColor')
			.add({ name: 'color', type: 'string', required: true }))
		.add(new Method('setTextFont')
			.add({ name: 'font', type: 'string', required: true }))
		.add(new Method('setTextAlign')
			.add({ name: 'align', type: 'custom', required: true, custom: multiOptions.bind(null, ['left', 'center', 'right', 'start', 'end']) }))
		.add(new Method('setTextBaseline')
			.add({ name: 'baseline', type: 'custom', required: true, custom: multiOptions.bind(null, ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom']) }))
		.add(new Method('beginPath'))
		.add(new Method('closePath'))
		.add(new Method('createPattern')
			.add({ name: 'image', type: 'buffer', required: true })
			.add({ name: 'repetition', type: 'custom', required: true, custom: multiOptions.bind(null, ['repeat', 'repeat-x', 'repeat-y', 'no-repeat']) }))
		.add(new Method('createLinearGradient')
			.add({ name: 'x0', type: 'number', required: true })
			.add({ name: 'y0', type: 'number', required: true })
			.add({ name: 'x1', type: 'number', required: true })
			.add({ name: 'y1', type: 'number', required: true })
			.add({
				name: 'steps', type: 'object[]', required: false, properties: new Map()
					.set('position', { name: 'position', type: 'number', required: true })
					.set('color', { name: 'color', type: 'string', required: true })
			}))
		.add(new Method('printLinearGradient')
			.add({ name: 'x0', type: 'number', required: true })
			.add({ name: 'y0', type: 'number', required: true })
			.add({ name: 'x1', type: 'number', required: true })
			.add({ name: 'y1', type: 'number', required: true })
			.add({
				name: 'steps', type: 'object[]', required: false, properties: new Map()
					.set('position', { name: 'position', type: 'number', required: true })
					.set('color', { name: 'color', type: 'string', required: true })
			}))
		.add(new Method('createRadialGradient')
			.add({ name: 'x0', type: 'number', required: true })
			.add({ name: 'y0', type: 'number', required: true })
			.add({ name: 'r0', type: 'number', required: true })
			.add({ name: 'x1', type: 'number', required: true })
			.add({ name: 'y1', type: 'number', required: true })
			.add({ name: 'r1', type: 'number', required: true })
			.add({
				name: 'steps', type: 'object[]', required: false, properties: new Map()
					.set('position', { name: 'position', type: 'number', required: true })
					.set('color', { name: 'color', type: 'string', required: true })
			}))
		.add(new Method('printRadialGradient')
			.add({ name: 'x0', type: 'number', required: true })
			.add({ name: 'y0', type: 'number', required: true })
			.add({ name: 'r0', type: 'number', required: true })
			.add({ name: 'x1', type: 'number', required: true })
			.add({ name: 'y1', type: 'number', required: true })
			.add({ name: 'r1', type: 'number', required: true })
			.add({
				name: 'steps', type: 'object[]', required: false, properties: new Map()
					.set('position', { name: 'position', type: 'number', required: true })
					.set('color', { name: 'color', type: 'string', required: true })
			}))
		.add(new Method('createEllipse')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'radiusX', type: 'number', required: true })
			.add({ name: 'radiusY', type: 'number', required: true })
			.add({ name: 'rotation', type: 'number', required: true })
			.add({ name: 'startAngle', type: 'number', required: true })
			.add({ name: 'endAngle', type: 'number', required: true })
			.add({ name: 'anticlosewise', type: 'boolean', required: false }))
		.add(new Method('arc')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: true })
			.add({ name: 'startAngle', type: 'number', required: true })
			.add({ name: 'endAngle', type: 'number', required: true })
			.add({ name: 'anticlosewise', type: 'boolean', required: false }))
		.add(new Method('arcTo')
			.add({ name: 'x1', type: 'number', required: true })
			.add({ name: 'y1', type: 'number', required: true })
			.add({ name: 'x2', type: 'number', required: true })
			.add({ name: 'y2', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: true }))
		.add(new Method('quadraticCurveTo')
			.add({ name: 'cpx', type: 'number', required: true })
			.add({ name: 'cpy', type: 'number', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true }))
		.add(new Method('bezierCurveTo')
			.add({ name: 'cp1x', type: 'number', required: true })
			.add({ name: 'cp1y', type: 'number', required: true })
			.add({ name: 'cp2x', type: 'number', required: true })
			.add({ name: 'cp2y', type: 'number', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true }))
		.add(new Method('lineTo')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true }))
		.add(new Method('moveTo')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true }))
		.add(new Method('setShadowBlur')
			.add({ name: 'radius', type: 'number', required: true }))
		.add(new Method('setShadowColor')
			.add({ name: 'color', type: 'string', required: true }))
		.add(new Method('setShadowOffsetX')
			.add({ name: 'value', type: 'number', required: true }))
		.add(new Method('setShadowOffsetY')
			.add({ name: 'value', type: 'number', required: true }))
		.add(new Method('setMiterLimit')
			.add({ name: 'value', type: 'number', required: true }))
		.add(new Method('setPatternQuality')
			.add({ name: 'pattern', type: 'custom', required: true, custom: multiOptions.bind(null, ['fast', 'good', 'best', 'nearest', 'bilinear']) }))
		.add(new Method('setTextDrawingMode')
			.add({ name: 'mode', type: 'custom', required: true, custom: multiOptions.bind(null, ['path', 'glyph']) }))
		.add(new Method('setAntialiasing')
			.add({ name: 'antialias', type: 'custom', required: true, custom: multiOptions.bind(null, ['default', 'none', 'gray', 'subpixel']) }))
		.add(new Method('setGlobalCompositeOperation')
			// eslint-disable-next-line max-len
			.add({ name: 'type', type: 'custom', required: true, custom: multiOptions.bind(null, ['source-over', 'source-in', 'source-out', 'source-atop', 'destination-over', 'destination-in', 'destination-out', 'destination-atop', 'lighter', 'copy', 'xor', 'darken', 'lighten', 'color-dodge', 'color-burn', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'multiply', 'screen', 'overlay', 'hard-light', 'soft-light', 'hsl-hue', 'hsl-saturation', 'hsl-color', 'hsl-luminosity']) }))
		.add(new Method('setGlobalAlpha')
			.add({ name: 'value', type: 'number', required: true }))
		.add(new Method('resetShadows'))
		.add(new Method('clearCircle')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: true })
			.add({ name: 'start', type: 'number', required: false })
			.add({ name: 'angle', type: 'number', required: false }))
		.add(new Method('clearPixels')
			.add({ name: 'x', type: 'number', required: false })
			.add({ name: 'y', type: 'number', required: false })
			.add({ name: 'width', type: 'number', required: false })
			.add({ name: 'height', type: 'number', required: false }))
		// .add(new Method('getLineDash'))
		// .add(new Method('lineDash'))
		.add(new Method('isPointInPath')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'fillRule', type: 'custom', required: true, custom: multiOptions.bind(null, ['nonzero', 'evenodd']) }))
		.add(new Method('isPointInStroke')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true }))
		.add(new Method('toBuffer'))
		.add(new Method('toBufferAsync'))
		// .add(new Method('toDataURL')
		// 	.add({ name: 'type', type: 'string', required: true })
		// 	.add({ name: 'args', type: '', required: true }))
		// .add(new Method('toDataURLAsync'));
		// .add(new Method('getCanvas'))
		.add(new Method('addTextFont')
			.add({ name: 'path', type: 'string', required: true })
			.add({ name: 'family', type: 'string', required: true }));
	// .add(new Method('registerFont')
	// 	.add({ name: 'path', type: 'string', required: true })
	// 	.add({ name: 'family', type: 'string', required: true }));
	// .add(new Method('process')
	// 	.add({ name: 'fn', type: 'function', required: true }))
}
