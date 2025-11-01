import {
	s as Mn,
	e as te,
	c as ne,
	b as Ge,
	f as ee,
	p as G,
	i as Ve,
	O as Xh,
	n as Wt,
	P as Za,
	o as Yh,
	a as Fe,
	l as fn,
	g as ke,
	Q as Li,
	q as Rt,
	h as Q,
	R as Ke,
	S as Zh,
	T as zn,
	A as wr,
	D as mi,
	r as Nt,
	u as cn,
	U as _r,
	t as Mi,
	d as Ei,
	j as ra,
	w as Qh,
	x as $h,
	y as zh,
	z as ed,
	V as Dn,
	W as an,
	X as Bs,
	Y as td
} from '../chunks/scheduler.m1-vAFwk.js';
import {
	S as En,
	i as Sn,
	f as yn,
	b as gt,
	d as Vt,
	m as _t,
	g as on,
	t as $e,
	e as xt,
	c as un,
	a as qe
} from '../chunks/index.ZjQd7wwx.js';
import { _ as nd } from '../chunks/preload-helper.0HuHagjb.js';
function jl(e) {
	return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function rd(e) {
	let t, n, r;
	return {
		c() {
			(t = te('div')), this.h();
		},
		l(i) {
			(t = ne(i, 'DIV', { style: !0, class: !0 })), Ge(t).forEach(ee), this.h();
		},
		h() {
			G(t, 'style', e[0]), G(t, 'class', 'm-0');
		},
		m(i, a) {
			Ve(i, t, a), n || ((r = Xh(e[1].call(null, t))), (n = !0));
		},
		p(i, [a]) {
			a & 1 && G(t, 'style', i[0]);
		},
		i: Wt,
		o: Wt,
		d(i) {
			i && ee(t), (n = !1), r();
		}
	};
}
function id(e, t) {
	return t.forEach(([n, r]) => (e[n] = r)), e;
}
function ad(e, t, n) {
	let { target: r = void 0 } = t,
		{ sketch: i = void 0 } = t,
		{ parentDivStyle: a = 'display: block;' } = t,
		{ debug: s = !1 } = t,
		o;
	const u = Za(),
		l = {
			ref() {
				u('ref', r);
			},
			instance() {
				u('instance', o);
			}
		};
	function f(c) {
		return (
			n(2, (r = c)),
			{
				destroy() {
					n(2, (r = void 0));
				}
			}
		);
	}
	return (
		Yh(async () => {
			const c = await nd(
					() => import('../chunks/p5.min.UWtGHzD0.js').then((m) => m.p),
					__vite__mapDeps([]),
					import.meta.url
				),
				{ default: h } = c,
				d = Object.entries(c).filter(
					([m, v]) => v instanceof Function && m[0] !== '_' && m !== 'default'
				);
			s && console.log('available p5 native classes', d),
				(o = new h(
					(m) => (
						(m = id(m, d)), s && console.log('p5 instance', m), (window._p5Instance = m), i(m)
					),
					r
				)),
				l.ref(),
				l.instance();
		}),
		(e.$$set = (c) => {
			'target' in c && n(2, (r = c.target)),
				'sketch' in c && n(3, (i = c.sketch)),
				'parentDivStyle' in c && n(0, (a = c.parentDivStyle)),
				'debug' in c && n(4, (s = c.debug));
		}),
		[a, f, r, i, s]
	);
}
class sd extends En {
	constructor(t) {
		super(), Sn(this, t, ad, rd, Mn, { target: 2, sketch: 3, parentDivStyle: 0, debug: 4 });
	}
}
function od(e, t, n) {
	if (((e = fa(e)), (t = fa(t)), e !== void 0 && t !== void 0)) {
		var r = Lu(e),
			i = Lu(t),
			a = Uc(Sl(r, i, n));
		if (e.length === 3 && t.length === 3) return a;
		var s = e.length > 3 ? e[3] : 255,
			o = t.length > 3 ? t[3] : 255;
		return (a[3] = ((1 - n) * s + n * o + 0.5) | 0), a;
	}
}
function ud(e, t, n) {
	if (((e = Eu(e)), (t = Eu(t)), e !== void 0 && t !== void 0)) {
		var r = ca(e),
			i = ca(t),
			a = El(Sl(r, i, n));
		if (e.length === 3 && t.length === 3) return a;
		var s = e.length > 3 ? e[3] : 1,
			o = t.length > 3 ? t[3] : 1;
		return (a[3] = (1 - n) * s + n * o), a;
	}
}
function ld(e, t, n) {
	if (((e = Su(e)), (t = Su(t)), e !== void 0 && t !== void 0)) {
		var r = Tu(e),
			i = Tu(t),
			a = Bc(Sl(r, i, n));
		if (e.length === 3 && t.length === 3) return a;
		var s = e.length > 3 ? e[3] : 1,
			o = t.length > 3 ? t[3] : 1;
		return (a[3] = (1 - n) * s + n * o), a;
	}
}
function fd(e, t, n) {
	var r = [e, t, n];
	return (
		(r.toString = function () {
			return this.length > 3
				? 'rgba(' + this[0] + ',' + this[1] + ',' + this[2] + ',' + this[3] / 255 + ')'
				: 'rgb(' + this[0] + ',' + this[1] + ',' + this[2] + ')';
		}),
		r
	);
}
function cd(e, t, n) {
	var r = fa(t === void 0 && n === void 0 ? e : [e, t, n]);
	if (r !== void 0) return Lu(r);
}
function Uc(e) {
	if (Array.isArray(e) && e.length === 7) {
		var t = Vc(e[0], e[1], e[2], e[3]);
		return fd(
			(er(t[0] + e[4]) * 255 + 0.5) | 0,
			(er(t[1] + e[5]) * 255 + 0.5) | 0,
			(er(t[2] + e[6]) * 255 + 0.5) | 0
		);
	}
}
function hd(e, t, n) {
	var r = Eu(t === void 0 && n === void 0 ? e : [e, t, n]);
	if (r !== void 0) return ca(r);
}
function El(e) {
	if (Array.isArray(e) && e.length === 7) {
		var t = Vc(e[0], e[1], e[2], e[3]);
		return [er(t[0] + e[4]), er(t[1] + e[5]), er(t[2] + e[6])];
	}
}
function dd(e, t, n) {
	var r = Su(t === void 0 && n === void 0 ? e : [e, t, n]);
	if (r !== void 0) return Tu(r);
}
function Bc(e) {
	var t = El(e);
	if (t !== void 0) return [Fs(t[0]), Fs(t[1]), Fs(t[2])];
}
function Gc(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function er(e) {
	return Math.min(Math.max(e, 0), 1);
}
function Fs(e) {
	return e >= 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
}
function Uo(e) {
	return e >= 0.0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055 : 12.92 * e;
}
function Sl(e, t, n) {
	for (var r = [0, 0, 0, 0, 0, 0, 0], i = 0; i < 7; i++) r[i] = (1 - n) * e[i] + n * t[i];
	return r;
}
function fa(e) {
	if (Array.isArray(e) && e.length >= 3) return e;
	if (typeof e == 'string') return Bo(e);
	if (typeof e == 'object')
		return typeof e.getHexString == 'function'
			? Bo(e.getHexString())
			: !isNaN(e.r) && !isNaN(e.g) && !isNaN(e.b)
				? isNaN(e.a)
					? [e.r, e.g, e.b]
					: [e.r, e.g, e.b, e.a]
				: Bo(e.toString());
	if (typeof e == 'number' && isFinite(e) && Math.floor(e) === e && e >= 0)
		return [(e >>> 16) & 255, (e >>> 8) & 255, e & 255];
}
function Eu(e) {
	if (Array.isArray(e) && e.length >= 3) return e;
	if (typeof e == 'object' && !isNaN(e.r) && !isNaN(e.g) && !isNaN(e.b))
		return isNaN(e.a) ? [e.r, e.g, e.b] : [e.r, e.g, e.b, e.a];
	if ((e = fa(e))) {
		for (var t = 0; t < e.length; t++) e[t] /= 255;
		return e;
	}
}
function Su(e) {
	if (Array.isArray(e) && e.length >= 3) return e;
	if (typeof e == 'object' && !isNaN(e.r) && !isNaN(e.g) && !isNaN(e.b))
		return isNaN(e.a) ? [e.r, e.g, e.b] : [e.r, e.g, e.b, e.a];
	if ((e = fa(e))) {
		for (var t = 0; t < 3; t++) e[t] = Fs(e[t] / 255);
		return e.length > 3 && (e[3] /= 255), e;
	}
}
function Lu(e) {
	return ca([e[0] / 255, e[1] / 255, e[2] / 255]);
}
function ca(e) {
	var t = er(e[0]),
		n = er(e[1]),
		r = er(e[2]),
		i = t * 63,
		a = n * 63,
		s = r * 63,
		o = i | 0,
		u = a | 0,
		l = s | 0,
		f = i - o,
		c = a - u,
		h = s - l,
		p = o + u * 64 + l * 64 * 64,
		d = 0,
		m = 0,
		v = 0,
		w = 0;
	(w = (1 - f) * (1 - c) * (1 - h)),
		(d += w * ut[p + 192]),
		(m += w * ut[p + 262336]),
		(v += w * ut[p + 524480]),
		(w = f * (1 - c) * (1 - h)),
		(d += w * ut[p + 193]),
		(m += w * ut[p + 262337]),
		(v += w * ut[p + 524481]),
		(w = (1 - f) * c * (1 - h)),
		(d += w * ut[p + 256]),
		(m += w * ut[p + 262400]),
		(v += w * ut[p + 524544]),
		(w = f * c * (1 - h)),
		(d += w * ut[p + 257]),
		(m += w * ut[p + 262401]),
		(v += w * ut[p + 524545]),
		(w = (1 - f) * (1 - c) * h),
		(d += w * ut[p + 4288]),
		(m += w * ut[p + 266432]),
		(v += w * ut[p + 528576]),
		(w = f * (1 - c) * h),
		(d += w * ut[p + 4289]),
		(m += w * ut[p + 266433]),
		(v += w * ut[p + 528577]),
		(w = (1 - f) * c * h),
		(d += w * ut[p + 4352]),
		(m += w * ut[p + 266496]),
		(v += w * ut[p + 528640]),
		(w = f * c * h),
		(d += w * ut[p + 4353]),
		(m += w * ut[p + 266497]),
		(v += w * ut[p + 528641]),
		(d /= 255),
		(m /= 255),
		(v /= 255);
	var g = 1 - (d + m + v),
		x = d * d,
		M = m * m,
		_ = v * v,
		y = g * g,
		L = d * m,
		C = d * v,
		T = m * v,
		P = 0,
		k = 0,
		I = 0,
		w = 0;
	return (
		(w = d * x),
		(P += 0.07717053 * w),
		(k += 0.02826978 * w),
		(I += 0.24832992 * w),
		(w = m * M),
		(P += 0.95912302 * w),
		(k += 0.80256528 * w),
		(I += 0.03561839 * w),
		(w = v * _),
		(P += 0.74683774 * w),
		(k += 0.04868586 * w),
		(I += 0 * w),
		(w = g * y),
		(P += 0.99518138 * w),
		(k += 0.99978149 * w),
		(I += 0.99704802 * w),
		(w = x * m),
		(P += 0.04819146 * w),
		(k += 0.83363781 * w),
		(I += 0.32515377 * w),
		(w = L * m),
		(P += -0.6814695 * w),
		(k += 1.46107803 * w),
		(I += 1.06980936 * w),
		(w = x * v),
		(P += 0.27058419 * w),
		(k += -0.1532487 * w),
		(I += 1.98735057 * w),
		(w = C * v),
		(P += 0.80478189 * w),
		(k += 0.6709371 * w),
		(I += 0.184245 * w),
		(w = x * g),
		(P += -0.35031003 * w),
		(k += 1.37855826 * w),
		(I += 3.68865 * w),
		(w = d * y),
		(P += 1.05128046 * w),
		(k += 1.97815239 * w),
		(I += 2.82989073 * w),
		(w = M * v),
		(P += 3.21607125 * w),
		(k += 0.81270228 * w),
		(I += 1.03384539 * w),
		(w = m * _),
		(P += 2.78893374 * w),
		(k += 0.41565549 * w),
		(I += -0.04487295 * w),
		(w = M * g),
		(P += 3.02162577 * w),
		(k += 2.55374103 * w),
		(I += 0.32766114 * w),
		(w = m * y),
		(P += 2.95124691 * w),
		(k += 2.81201112 * w),
		(I += 1.17578442 * w),
		(w = _ * g),
		(P += 2.82677043 * w),
		(k += 0.79933038 * w),
		(I += 1.81715262 * w),
		(w = v * y),
		(P += 2.99691099 * w),
		(k += 1.22593053 * w),
		(I += 1.80653661 * w),
		(w = L * v),
		(P += 1.87394106 * w),
		(k += 2.05027182 * w),
		(I += -0.29835996 * w),
		(w = L * g),
		(P += 2.56609566 * w),
		(k += 7.03428198 * w),
		(I += 0.62575374 * w),
		(w = C * g),
		(P += 4.08329484 * w),
		(k += -1.40408358 * w),
		(I += 2.14995522 * w),
		(w = T * g),
		(P += 6.00078678 * w),
		(k += 2.55552042 * w),
		(I += 1.90739502 * w),
		[d, m, v, g, t - P, n - k, r - I]
	);
}
function Tu(e) {
	return ca([Uo(e[0]), Uo(e[1]), Uo(e[2])]);
}
function Vc(e, t, n, r) {
	var i = 0,
		a = 0,
		s = 0,
		o = e * e,
		u = t * t,
		l = n * n,
		f = r * r,
		c = e * t,
		h = e * n,
		p = t * n,
		d = 0;
	return (
		(d = e * o),
		(i += 0.07717053 * d),
		(a += 0.02826978 * d),
		(s += 0.24832992 * d),
		(d = t * u),
		(i += 0.95912302 * d),
		(a += 0.80256528 * d),
		(s += 0.03561839 * d),
		(d = n * l),
		(i += 0.74683774 * d),
		(a += 0.04868586 * d),
		(s += 0 * d),
		(d = r * f),
		(i += 0.99518138 * d),
		(a += 0.99978149 * d),
		(s += 0.99704802 * d),
		(d = o * t),
		(i += 0.04819146 * d),
		(a += 0.83363781 * d),
		(s += 0.32515377 * d),
		(d = c * t),
		(i += -0.6814695 * d),
		(a += 1.46107803 * d),
		(s += 1.06980936 * d),
		(d = o * n),
		(i += 0.27058419 * d),
		(a += -0.1532487 * d),
		(s += 1.98735057 * d),
		(d = h * n),
		(i += 0.80478189 * d),
		(a += 0.6709371 * d),
		(s += 0.184245 * d),
		(d = o * r),
		(i += -0.35031003 * d),
		(a += 1.37855826 * d),
		(s += 3.68865 * d),
		(d = e * f),
		(i += 1.05128046 * d),
		(a += 1.97815239 * d),
		(s += 2.82989073 * d),
		(d = u * n),
		(i += 3.21607125 * d),
		(a += 0.81270228 * d),
		(s += 1.03384539 * d),
		(d = t * l),
		(i += 2.78893374 * d),
		(a += 0.41565549 * d),
		(s += -0.04487295 * d),
		(d = u * r),
		(i += 3.02162577 * d),
		(a += 2.55374103 * d),
		(s += 0.32766114 * d),
		(d = t * f),
		(i += 2.95124691 * d),
		(a += 2.81201112 * d),
		(s += 1.17578442 * d),
		(d = l * r),
		(i += 2.82677043 * d),
		(a += 0.79933038 * d),
		(s += 1.81715262 * d),
		(d = n * f),
		(i += 2.99691099 * d),
		(a += 1.22593053 * d),
		(s += 1.80653661 * d),
		(d = c * n),
		(i += 1.87394106 * d),
		(a += 2.05027182 * d),
		(s += -0.29835996 * d),
		(d = c * r),
		(i += 2.56609566 * d),
		(a += 7.03428198 * d),
		(s += 0.62575374 * d),
		(d = h * r),
		(i += 4.08329484 * d),
		(a += -1.40408358 * d),
		(s += 2.14995522 * d),
		(d = p * r),
		(i += 6.00078678 * d),
		(a += 2.55552042 * d),
		(s += 1.90739502 * d),
		[i, a, s]
	);
}
function jt(e) {
	return e.length === 1 && (e = e + e), parseInt('0x' + e, 16);
}
function ti(e) {
	var t = e.charAt(e.length - 1) === '%' ? (Number(e.slice(0, -1)) / 100) * 255 : Number(e);
	return Gc(Math.round(t), 0, 255);
}
var Hr = /[+\-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:\d[eE][+\-]?\d+)?%?/,
	pd = new RegExp('^rgb\\((' + Hr.source + '),(' + Hr.source + '),(' + Hr.source + ')\\)$', 'i'),
	vd = new RegExp(
		'^rgba\\((' + Hr.source + '),(' + Hr.source + '),(' + Hr.source + '),(' + Hr.source + ')\\)$',
		'i'
	),
	md = /^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,
	gd = /^#?([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])$/i,
	_d = /^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
	xd = /^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i;
function Bo(e) {
	e = e.replace(/\s/g, '');
	var t;
	if ((t = pd.exec(e))) return [ti(t[1]), ti(t[2]), ti(t[3])];
	if ((t = vd.exec(e))) return [ti(t[1]), ti(t[2]), ti(t[3]), Gc(Number(t[4]) * 255, 0, 255)];
	if ((t = _d.exec(e))) return [jt(t[1]), jt(t[2]), jt(t[3])];
	if ((t = md.exec(e))) return [jt(t[1]), jt(t[2]), jt(t[3])];
	if ((t = xd.exec(e))) return [jt(t[1]), jt(t[2]), jt(t[3]), jt(t[4])];
	if ((t = gd.exec(e))) return [jt(t[1]), jt(t[2]), jt(t[3]), jt(t[4])];
	var n = {
			aliceblue: [240, 248, 255],
			antiquewhite: [250, 235, 215],
			aqua: [0, 255, 255],
			aquamarine: [127, 255, 212],
			azure: [240, 255, 255],
			beige: [245, 245, 220],
			bisque: [255, 228, 196],
			black: [0, 0, 0],
			blanchedalmond: [255, 235, 205],
			blue: [0, 0, 255],
			blueviolet: [138, 43, 226],
			brown: [165, 42, 42],
			burlywood: [222, 184, 135],
			cadetblue: [95, 158, 160],
			chartreuse: [127, 255, 0],
			chocolate: [210, 105, 30],
			coral: [255, 127, 80],
			cornflowerblue: [100, 149, 237],
			cornsilk: [255, 248, 220],
			crimson: [220, 20, 60],
			cyan: [0, 255, 255],
			darkblue: [0, 0, 139],
			darkcyan: [0, 139, 139],
			darkgoldenrod: [184, 134, 11],
			darkgray: [169, 169, 169],
			darkgreen: [0, 100, 0],
			darkgrey: [169, 169, 169],
			darkkhaki: [189, 183, 107],
			darkmagenta: [139, 0, 139],
			darkolivegreen: [85, 107, 47],
			darkorange: [255, 140, 0],
			darkorchid: [153, 50, 204],
			darkred: [139, 0, 0],
			darksalmon: [233, 150, 122],
			darkseagreen: [143, 188, 143],
			darkslateblue: [72, 61, 139],
			darkslategray: [47, 79, 79],
			darkslategrey: [47, 79, 79],
			darkturquoise: [0, 206, 209],
			darkviolet: [148, 0, 211],
			deeppink: [255, 20, 147],
			deepskyblue: [0, 191, 255],
			dimgray: [105, 105, 105],
			dimgrey: [105, 105, 105],
			dodgerblue: [30, 144, 255],
			firebrick: [178, 34, 34],
			floralwhite: [255, 250, 240],
			forestgreen: [34, 139, 34],
			fuchsia: [255, 0, 255],
			gainsboro: [220, 220, 220],
			ghostwhite: [248, 248, 255],
			gold: [255, 215, 0],
			goldenrod: [218, 165, 32],
			gray: [128, 128, 128],
			green: [0, 128, 0],
			greenyellow: [173, 255, 47],
			grey: [128, 128, 128],
			honeydew: [240, 255, 240],
			hotpink: [255, 105, 180],
			indianred: [205, 92, 92],
			indigo: [75, 0, 130],
			ivory: [255, 255, 240],
			khaki: [240, 230, 140],
			lavender: [230, 230, 250],
			lavenderblush: [255, 240, 245],
			lawngreen: [124, 252, 0],
			lemonchiffon: [255, 250, 205],
			lightblue: [173, 216, 230],
			lightcoral: [240, 128, 128],
			lightcyan: [224, 255, 255],
			lightgoldenrodyellow: [250, 250, 210],
			lightgray: [211, 211, 211],
			lightgreen: [144, 238, 144],
			lightgrey: [211, 211, 211],
			lightpink: [255, 182, 193],
			lightsalmon: [255, 160, 122],
			lightseagreen: [32, 178, 170],
			lightskyblue: [135, 206, 250],
			lightslategray: [119, 136, 153],
			lightslategrey: [119, 136, 153],
			lightsteelblue: [176, 196, 222],
			lightyellow: [255, 255, 224],
			lime: [0, 255, 0],
			limegreen: [50, 205, 50],
			linen: [250, 240, 230],
			magenta: [255, 0, 255],
			maroon: [128, 0, 0],
			mediumaquamarine: [102, 205, 170],
			mediumblue: [0, 0, 205],
			mediumorchid: [186, 85, 211],
			mediumpurple: [147, 112, 219],
			mediumseagreen: [60, 179, 113],
			mediumslateblue: [123, 104, 238],
			mediumspringgreen: [0, 250, 154],
			mediumturquoise: [72, 209, 204],
			mediumvioletred: [199, 21, 133],
			midnightblue: [25, 25, 112],
			mintcream: [245, 255, 250],
			mistyrose: [255, 228, 225],
			moccasin: [255, 228, 181],
			navajowhite: [255, 222, 173],
			navy: [0, 0, 128],
			oldlace: [253, 245, 230],
			olive: [128, 128, 0],
			olivedrab: [107, 142, 35],
			orange: [255, 165, 0],
			orangered: [255, 69, 0],
			orchid: [218, 112, 214],
			palegoldenrod: [238, 232, 170],
			palegreen: [152, 251, 152],
			paleturquoise: [175, 238, 238],
			palevioletred: [219, 112, 147],
			papayawhip: [255, 239, 213],
			peachpuff: [255, 218, 185],
			peru: [205, 133, 63],
			pink: [255, 192, 203],
			plum: [221, 160, 221],
			powderblue: [176, 224, 230],
			purple: [128, 0, 128],
			red: [255, 0, 0],
			rosybrown: [188, 143, 143],
			royalblue: [65, 105, 225],
			saddlebrown: [139, 69, 19],
			salmon: [250, 128, 114],
			sandybrown: [244, 164, 96],
			seagreen: [46, 139, 87],
			seashell: [255, 245, 238],
			sienna: [160, 82, 45],
			silver: [192, 192, 192],
			skyblue: [135, 206, 235],
			slateblue: [106, 90, 205],
			slategray: [112, 128, 144],
			slategrey: [112, 128, 144],
			snow: [255, 250, 250],
			springgreen: [0, 255, 127],
			steelblue: [70, 130, 180],
			tan: [210, 180, 140],
			teal: [0, 128, 128],
			thistle: [216, 191, 216],
			tomato: [255, 99, 71],
			turquoise: [64, 224, 208],
			violet: [238, 130, 238],
			wheat: [245, 222, 179],
			white: [255, 255, 255],
			whitesmoke: [245, 245, 245],
			yellow: [255, 255, 0],
			yellowgreen: [154, 205, 50]
		},
		r = e.toLowerCase();
	if (n.hasOwnProperty(r)) return n[r];
}
function bd() {
	return `#ifndef MIXBOX_INCLUDED
#define MIXBOX_INCLUDED

#ifndef MIXBOX_LUT
  #if __VERSION__ <= 120
    #define MIXBOX_LUT(UV) texture2D(mixbox_lut, UV)
  #else
    #define MIXBOX_LUT(UV) textureLod(mixbox_lut, UV, 0.0)
  #endif
#endif

#define mixbox_latent mat3

vec3 mixbox_eval_polynomial(vec3 c)
{
  float c0 = c[0];
  float c1 = c[1];
  float c2 = c[2];
  float c3 = 1.0 - (c0 + c1 + c2);

  float c00 = c0 * c0;
  float c11 = c1 * c1;
  float c22 = c2 * c2;
  float c01 = c0 * c1;
  float c02 = c0 * c2;
  float c12 = c1 * c2;
  float c33 = c3 * c3;

  return (c0*c00) * vec3(+0.07717053, +0.02826978, +0.24832992) +
         (c1*c11) * vec3(+0.95912302, +0.80256528, +0.03561839) +
         (c2*c22) * vec3(+0.74683774, +0.04868586, +0.00000000) +
         (c3*c33) * vec3(+0.99518138, +0.99978149, +0.99704802) +
         (c00*c1) * vec3(+0.04819146, +0.83363781, +0.32515377) +
         (c01*c1) * vec3(-0.68146950, +1.46107803, +1.06980936) +
         (c00*c2) * vec3(+0.27058419, -0.15324870, +1.98735057) +
         (c02*c2) * vec3(+0.80478189, +0.67093710, +0.18424500) +
         (c00*c3) * vec3(-0.35031003, +1.37855826, +3.68865000) +
         (c0*c33) * vec3(+1.05128046, +1.97815239, +2.82989073) +
         (c11*c2) * vec3(+3.21607125, +0.81270228, +1.03384539) +
         (c1*c22) * vec3(+2.78893374, +0.41565549, -0.04487295) +
         (c11*c3) * vec3(+3.02162577, +2.55374103, +0.32766114) +
         (c1*c33) * vec3(+2.95124691, +2.81201112, +1.17578442) +
         (c22*c3) * vec3(+2.82677043, +0.79933038, +1.81715262) +
         (c2*c33) * vec3(+2.99691099, +1.22593053, +1.80653661) +
         (c01*c2) * vec3(+1.87394106, +2.05027182, -0.29835996) +
         (c01*c3) * vec3(+2.56609566, +7.03428198, +0.62575374) +
         (c02*c3) * vec3(+4.08329484, -1.40408358, +2.14995522) +
         (c12*c3) * vec3(+6.00078678, +2.55552042, +1.90739502);
}

float mixbox_srgb_to_linear(float x)
{
  return (x >= 0.04045) ? pow((x + 0.055) / 1.055, 2.4) : x/12.92;
}

float mixbox_linear_to_srgb(float x)
{
  return (x >= 0.0031308) ? 1.055*pow(x, 1.0/2.4) - 0.055 : 12.92*x;
}

vec3 mixbox_srgb_to_linear(vec3 rgb)
{
  return vec3(mixbox_srgb_to_linear(rgb.r),
              mixbox_srgb_to_linear(rgb.g),
              mixbox_srgb_to_linear(rgb.b));
}

vec3 mixbox_linear_to_srgb(vec3 rgb)
{
  return vec3(mixbox_linear_to_srgb(rgb.r),
              mixbox_linear_to_srgb(rgb.g),
              mixbox_linear_to_srgb(rgb.b));
}

mixbox_latent mixbox_rgb_to_latent(vec3 rgb)
{
#ifdef MIXBOX_COLORSPACE_LINEAR
  rgb = mixbox_linear_to_srgb(clamp(rgb, 0.0, 1.0));
#else
  rgb = clamp(rgb, 0.0, 1.0);
#endif

  float x = rgb.r * 63.0;
  float y = rgb.g * 63.0;
  float z = rgb.b * 63.0;

  float iz = floor(z);

  float x0 = mod(iz, 8.0) * 64.0;
  float y0 = floor(iz / 8.0) * 64.0;

  float x1 = mod(iz + 1.0, 8.0) * 64.0;
  float y1 = floor((iz + 1.0) / 8.0) * 64.0;

  vec2 uv0 = vec2(x0 + x + 0.5, y0 + y + 0.5) / 512.0;
  vec2 uv1 = vec2(x1 + x + 0.5, y1 + y + 0.5) / 512.0;

  if (MIXBOX_LUT(vec2(0.5, 0.5) / 512.0).b < 0.1)
  {
    uv0.y = 1.0 - uv0.y;
    uv1.y = 1.0 - uv1.y;
  }

  vec3 c = mix(MIXBOX_LUT(uv0).rgb, MIXBOX_LUT(uv1).rgb, z - iz);

  return mixbox_latent(c, rgb - mixbox_eval_polynomial(c), vec3(0.0));
}

vec3 mixbox_latent_to_rgb(mixbox_latent latent)
{
  vec3 rgb = clamp(mixbox_eval_polynomial(latent[0]) + latent[1], 0.0, 1.0);

#ifdef MIXBOX_COLORSPACE_LINEAR
  return mixbox_srgb_to_linear(rgb);
#else
  return rgb;
#endif
}

vec3 mixbox_lerp(vec3 color1, vec3 color2, float t)
{
  return mixbox_latent_to_rgb((1.0-t)*mixbox_rgb_to_latent(color1) + t*mixbox_rgb_to_latent(color2));
}

vec4 mixbox_lerp(vec4 color1, vec4 color2, float t)
{
  return vec4(mixbox_lerp(color1.rgb, color2.rgb, t), mix(color1.a, color2.a, t));
}

#endif
`;
}
var es;
function yd(e) {
	if (!es) {
		for (var t = new Uint8Array(1048576), n = 0; n < 64; n++)
			for (var r = 0; r < 64; r++)
				for (var i = 0; i < 64; i++) {
					var a = (n % 8) * 64 + i,
						s = ((n / 8) | 0) * 64 + r,
						o = i + r * 64 + n * 64 * 64;
					(t[(a + s * 512) * 4 + 0] = ut[o + 192]),
						(t[(a + s * 512) * 4 + 1] = ut[o + 262336]),
						(t[(a + s * 512) * 4 + 2] = ut[o + 524480]),
						(t[(a + s * 512) * 4 + 3] = 255);
				}
		var u = e.getParameter(e.TEXTURE_BINDING_2D);
		(es = e.createTexture()),
			e.bindTexture(e.TEXTURE_2D, es),
			e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 512, 512, 0, e.RGBA, e.UNSIGNED_BYTE, t),
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
			e.bindTexture(e.TEXTURE_2D, u);
	}
	return es;
}
function wd(e) {
	var t = new Uint8Array(790785),
		n = 0,
		r = 0,
		i = 0,
		a = 0,
		s = 9,
		o = (1 << s) - 1,
		u = [
			0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
			13
		],
		l = [
			3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131,
			163, 195, 227, 258, 0, 0
		],
		f = [
			0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0
		],
		c = [
			1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537,
			2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0
		],
		h = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
	function p(w, U, N) {
		(this.fast = new Uint16Array(1 << s)),
			(this.firstCode = new Uint16Array(16)),
			(this.firstSymbol = new Uint16Array(16)),
			(this.maxCode = new Int32Array(17)),
			(this.size = new Uint8Array(288)),
			(this.value = new Uint16Array(288));
		var D = 0,
			B = 0,
			q = new Int32Array(16),
			H = new Int32Array(17);
		for (D = 0; D < this.fast.length; D++) this.fast[D] = 65535;
		for (D = 0; D < N; D++) ++H[w[D + U]];
		H[0] = 0;
		var j = 0;
		for (D = 1; D < 16; D++)
			(q[D] = j),
				(this.firstCode[D] = j),
				(this.firstSymbol[D] = B),
				(j = j + H[D]),
				(this.maxCode[D] = j << (16 - D)),
				(j <<= 1),
				(B += H[D]);
		for (this.maxCode[16] = 65536, D = 0; D < N; D++) {
			var K = w[D + U];
			if (K !== 0) {
				var Z = q[K] - this.firstCode[K] + this.firstSymbol[K];
				if (((this.size[Z] = K), (this.value[Z] = D), K <= s))
					for (var ve = g(q[K], K); ve < 1 << s; ) (this.fast[ve] = Z), (ve += 1 << K);
				q[K] += 1;
			}
		}
	}
	var d, m;
	function v(w) {
		return (
			(w = ((w & 43690) >>> 1) | ((w & 21845) << 1)),
			(w = ((w & 52428) >>> 2) | ((w & 13107) << 2)),
			(w = ((w & 61680) >>> 4) | ((w & 3855) << 4)),
			(w = ((w & 65280) >>> 8) | ((w & 255) << 8)),
			w
		);
	}
	function g(w, U) {
		return v(w) >>> (16 - U);
	}
	function x() {
		return n >= e.length ? 0 : e[n++];
	}
	function M() {
		do (a |= x() << i), (i += 8);
		while (i <= 24);
	}
	function _(w) {
		i < w && M();
		var U = a & ((1 << w) - 1);
		return (a >>>= w), (i -= w), U;
	}
	function y(w) {
		var U;
		i < 16 && M();
		var N = w.fast[a & o];
		if (N < 65535) return (U = w.size[N]), (a >>>= U), (i -= U), w.value[N];
		var D = g(a, 16);
		for (U = s + 1; !(D < w.maxCode[U]); ++U);
		return U === 16
			? -1
			: ((N = (D >>> (16 - U)) - w.firstCode[U] + w.firstSymbol[U]),
				(a >>>= U),
				(i -= U),
				w.value[N]);
	}
	function L() {
		for (;;) {
			var w = y(m);
			if (w < 256) t[r++] = w;
			else {
				if (w === 256) return;
				w -= 257;
				var U = l[w];
				f[w] !== 0 && (U += _(f[w])), (w = y(d));
				var N = c[w];
				u[w] !== 0 && (N += _(u[w])), (N = r - N);
				for (var D = 0; D < U; D++, N++) t[r++] = t[N];
			}
		}
	}
	function C() {
		for (
			var w = new Uint8Array(455),
				U = new Uint8Array(19),
				N = _(5) + 257,
				D = _(5) + 1,
				B = _(4) + 4,
				q = 0;
			q < B;
			q++
		)
			U[h[q]] = _(3);
		for (var H = new p(U, 0, U.length), j = 0; j < N + D; ) {
			var K = y(H);
			if (K < 16) w[j++] = K;
			else if (K === 16) {
				K = _(2) + 3;
				for (var q = 0; q < K; q++) w[j + q] = w[j - 1];
				j += K;
			} else if (K === 17) {
				K = _(3) + 3;
				for (var q = 0; q < K; q++) w[j + q] = 0;
				j += K;
			} else {
				K = _(7) + 11;
				for (var q = 0; q < K; q++) w[j + q] = 0;
				j += K;
			}
		}
		(m = new p(w, 0, N)), (d = new p(w, N, D));
	}
	function T(w) {
		return w >= 92 ? w - 36 : w - 35;
	}
	function P(w) {
		for (var U = new Uint8Array((w.length * 4) / 5), N = 0, D = 0; w.charCodeAt(N); ) {
			var B =
				T(w.charCodeAt(N + 0)) +
				85 *
					(T(w.charCodeAt(N + 1)) +
						85 *
							(T(w.charCodeAt(N + 2)) +
								85 * (T(w.charCodeAt(N + 3)) + 85 * T(w.charCodeAt(N + 4)))));
			(U[D + 0] = B & 255),
				(U[D + 1] = (B >>> 8) & 255),
				(U[D + 2] = (B >>> 16) & 255),
				(U[D + 3] = (B >>> 24) & 255),
				(N += 5),
				(D += 4);
		}
		return U;
	}
	e = P(e);
	var k = !1;
	do (k = _(1) !== 0), _(2), C(), L();
	while (!k);
	for (var I = 0; I < t.length; I++) t[I] = (I & 63 ? t[I - 1] : 127) + (t[I] - 127);
	return t;
}
var ut = wd(
		"#$6cTLFMX$M:PgZQ0uX#c3Hv3j%J:58NctbqUCrcZ#^pc.=#G_)_C0K)6PdZZKP0X+Aa=(<R9Y`tOclFQdG&Hp;1LfTE9n^:6S&uK`Z'hu@%prNaF=3@u6La8:AucRJe9n*3M-?=VkLSQ^d/J@.Drd0/_glJU1%aU;#cA@E@IUc3lI^L*sWK_>i0V9/QuO-^mL`JLUJeIfW7ZB#F+q-M>)n/f_1tB_s)ew2HO[e.0^o0?E$(-_.`Ij#hBlY-^hjMZl*uMf6]jE31glP(x^K4T9hiBQi4p;(wguxYlHI^$:u3[D^L4r&`uif7UBV=dDJ%D-SkSvcri,<vqi+E-g)e(ItZpoIaY>->']48?P3kFDd-;XcL0-+iia2FtMDDQ7=<1jAr>%tk0<V-WSVU5U%'@aat8f%g'$q1b4:*2iNVZ,V7qdihfp4#j3ENT1KQKt4I;Z`4$g#Sfj?l&6C`&PKc-fF2&VXRs_[*/ONu#(E74lN/kJld4S'G+u+W04v6)ha3n;0L)H+W4Q1i1`N_+nvWsmWal&.;h>;6*9Km,'6R$u@Q'3:-.F/9IF<?(gE*lx94vnnK5r_9`n_1u4>ca[Jkqkb<XD4hCFC:3np&iJgt137L2oYu,KT,e[<(%5Hn;L/Ca;=>#aSp<`kHv]HklG(B>tr'LRbTLY;UK)o9N_m`+krq4wH*Zj.5TG[&u?9ml$fZWsx#`R=Qm.kJah+[oMCud1eE4k(PPNPTos_R#9<9H.BnW/u./Y'O$Jul.$4BX)#Q>k/TI?^DCp(?lf,Je[=KWgUAg)#AM'?Es=lAOJG7m.rk`d[i<HEa.lPF%euUiHg%/lsXFfl]_5U&f$<QQ7&OJHSwvudG1+cAqWYj1ktKGV>]#L@IM<P]QvN@_Xa[k+NN?LO;lsWwTQ<DD%XhkrGw51v]Ij75(reW`qM6$ms;KY1Fk.O/J>U,*lRc1ik%%.1aG/ws,O5RD2;iPaP)U`h#nLR1t--NV7HhSU1]xPHq4'S[WwcS'l$^/8eE`]6K&3AWba8CXaY#%/F7xa;#jn0[aA.0E2E/u/$w]HSu[Lw#k0ujSr%1&@iH85LjfdZCi7gLnZiu17>pjC@l+aAHqnBH#P66q?ULl12KxS)x;K>mCm$q;4s<2e(uc3.eqwt`JuNtc%YR4WW55Q9Hd%@3>Q/6qt5D46fU]DJ=?A2D5Hf20n<PepYY0=K_<igKu'DDCd4vVb*vssj#Yu$I]&*TSA6Fo^%-FMCP.2a2&@DnQktW7UoH/SK05qj$t2c/G`WAG>5vU&x1-%uom[l_(wt#mdhq-6C7tgv><^EnZ=ujsK5v=SU?o/J^o0jlosUZfskS+-wpD.`njbMU3i;hbgFi'dJ06l]r^O2dx]Zxv@xFHbMQu2[k/v:^x9#.Mbl/^P.$SbB+1[BA'##;fp6711@`<4F+2u;-ftg^Qtmkev9x5PLd7uBYJ+N5qG.r>.Wn:8X*8tVibD+3Rk^a=`0fuqB(p1?#'XP%hWB36t65[?>>BmnwX(FWfO#BrH3%lLB2UDd+)1pGfCTh,)p@X8uITrXZf4vPg)8tw]+mf]Y-3_X9O$vHbe$vI55^se.E<Un((ROTtA.qv*Ebu`H]dm&jH*f=OSR/oS:*I:Hd^a8s':)pR?slu$%R7R)9cuwgM-L)=WxFN0wCtssSaudS@FVhBc.tGs>OumJ-gW%6eL#RkC?uSj:.;xGgR[fLqHpu9k@iL42+Lodf`o*owCXT#b/vw<A<tknvQ7d,d4v0E#58mwe;6;DBNmS<b0&0g>PCk9vBVK=0*Uke@/p4pWc])0Vl8`60^$6)n.vSE1uhi,i+r(AxDVQTBQfi%7Ydn+-K_^X-<sZpv[/txR#$/0$GMw0OqsZxsQ7n_E`GdbD0u$:-L?nP#0v93:4]%[v#>IoAEMH8XZ)oB&2rj;U8jnJ:G^W)+#Mn&rRKbq?RqZhSfF`mNs/,eV*o)Yi$sZ)vjA5n/qL<(<E[0DXe01krh;epxb,+;b*(Uhs7u>T$?^<IaBu$62$sR^-s,jASEnOV;TaHqE[p@eAZ<(oKc;_G':5'9#FVL]uCnU6g-0K`RstEogo.]23>.KX*%qjQ*g^v_5rb*6A8u,$?ek+3bMX@kw4*r+6QZN:F=tP9=E?'15-#ruGot-q>SKfe=KGY/t1+6,ustAEIBj+N]*pdaSCeN`e@kGc>#8Y@A]FUtsfe->Cp'm>C9u+W8LT5v#TY$mI8#_c;Xa_WiTk6:R%lcZ..P`;DTiQgZGbP13G;_P/viP+A:DPSK>0U4tttFM^MJ%+e*(^^H,v[qq9F[rC[DuMbwk*I1`av1ABEY'BFVP57,kF(_9v8j'ocNNCVSIpB0rrXH-L=Z-@5tq:xf_E^Ar$Puekh[Is:kDQGSrL7#eHOnm5U4H1rpW:9v@+B.qur*W&0&=uqD2#xsK;l$GNj@;aiOg.:+ZQAe#s>J1d].Wps)G*tWd_g4_u/04Bo']t?'A(t#Ha**R[6]m-mC9u^++'t?RZvtC879[J=g.:(alXN6dO=A?,reL;Ot'S3:YM;X/FT$^7#B7nEv%S3.v%#eFBOJ$+1$VLSv/pat3g_5JoGJ$'U6eePcR,n)R<ZeCQSJQ?#O+;WL$#JF>@b*6qFr;HpRprv_g]SeUIn$6`,v/uURnimD*vS#^YgCG4.(3[(&#rYZTV:Y/hVR22AFVj>'s(@J1v9hFGI8O=]sm3hUUw<O.hY%Su9Y-Z>6hT0.lGiKQYw`'+?uR^428K2nK/U&7aHN<5t0R.^r():hQ.37S7u9BRevHOQf]EL5v&0__6jF)mSkb^[CWebXYSffNt_(6x=WxXTsI9SrHsCCdNE'+_Y&S1Um4#e](>#EidWMo@:mE)2hLS[Amd:.]s$h&,LraGiHX2qmk1'r@l/htZHhq9<P-%83AA=YvFX8D:a?=3g:q<Tkd8_B$KwgJdc#Ewq-tF`Hl;1P*iJRq7vKAt?a`+-Lp38*6@6*@eeHgES]h8&YC^b8QrEnD$h$6u7k8gQ,v'Db@bF,e#dM&eMr4<?=RZmbVC4L2BT?*=(6Y&Z(+$h(#JOPFEouhQ6G'3XUsT7IK<>am7vwWl1k@YYaQ+9$Vm^hs>BmfHhuPVvhaZ%)=Y4^%'fl2aAu?14?+dj?U8,HZBpwUwH^,mq9l@`V-LYv4tGvi*CHq]%6H$-x>JAmd:l]&mTi?>8tuaPm,m&/'-msCmqnpu9X@-3EEE&Z(:v#Mk[hEmv.($s^c'*&3@ubR;s_FXU+U^dY-qRYgR/ruaglI-RJ6qbiRVib?eNqvL[*(gtR[?>5]F@TnN4t2>^3[U*FhiTmR%&Uq5(G;N1g5rj5ZPF:Mq'*Z/t9.q(#g3c<(nf/>te[UeL=i^vt<9@8v:L)kV2*'eu-s4Q`;>(+B)SC;$F>c/$Pr42Lj99lfpKR:$?&X/u&tRAd5X<3#c%ouk9)w;eeWVUu$J$%#V..75%#e&qI<)YlKh?@lV5+Uf034<7%e3YEhK:`I?t`=lSnbNF,QB^Lq_%kcX,i/:fWAlfLUDF`%`_PA-ECS751Xi&+HbCV2;rs^*Gml_YcImD2E+xkC?b1o<xP>s1'&Kb$c_1QDr'Oi]YbHuH-p.Za?,I0.P[$vaI85aphaNqBk[+i0qdr>'AwF7)J.]tTjpku(n-0uwmesBDpIuk%e1XA;*4[R'V/'>uX-6Kmr5nVC@rSoJpt)qA4+OE%`Z&8cD]^'e`,DuY)d0CtdDJ`uD1FZVO=aK7Y/te';h.mr4IucuDx:D1)i86?,YBr3EHr),dLf#T:Clf>n&BW$n%KXRKFkXR-]KlApAcK.)Y%R?pcPnEvrj`TSM&Lo^pGUFRdmjgqjub$c$DWXW=Yl(N8]X7vmnJigq:Q0TsM87H_Z+.)*FrIAkFiTL,%7?m#pt.DI;mCB:5f@_E`<1(69-7h[t'9lFd'Qe-cr9HG-WhQg8i5L_l/eYsvOv;t*MQ[I%tS4f@2dG_HgYTbc]Wf7&XX-wW6`9$.L;EMlUiA?7v^3Yj1TUhx4mj,9tXmpGKS::J:-Ev[U+0XXuH0o6c]Vd'vC(,kUHP=M97QX`/8`',v-uR9VOB5-L&x3<Y_aT0-jXY?Bm<QMdrY-P#*%+AuVP;wKeL*WSeOoaaaGYtq;rGTKLSxSa^cO/(RdpGF)<^Mu8Zh;g`3v##(q=Z.Ml?0t%NATt.B#*9Rw^BWQi)I)aj[q'qT*v'W]J>02F'N2(Tu;u:F;G28[AteqT73L[rIga^-sukY4YU/5eXu#dpr+HTkBmA18DR.b9@+k+5Et?`c-*V71]FiB0e@4TdgOJU6766fx`me0$w-##4@YK'1^OcZLS4AjQ_nco?[6a7ae#v(,<<lhS2eIv@7_*:jRfL(_1tPoW$;n;]G?'W=]gmDGABkB?+5:[,GdqLTo2JJ&@'A9mTt5]$82%8)%GrqCx]ms_;Y>2)9Z7(+oSrdd`NbQvMB/Kwi@gXPi-E$cn3.5N1nY#Og]Cfi;vc7nr.Omq9`.BMsQshY9`Zp]3oH29f<_4shguBrGG#b/k:uZV$,/?$9^Fj)2%phw5sk;6N-BlWLuFAU=&v=BIx*J=FAk'pVBiSE1?bAXp[OpDI+o/gedowI''B#poSNcgR3&A>cvJEGcHhg1`vmMljv@-RL4)Lf1F/7uS:)e%SaNAL46ONvRBJ5U*lJRZS=K6x('m+[`t+,.isCR]hx48IPub9ruZDQwpugIUYCCu%.$vA^o?dG(Vq1tr(?k:ElW5]Fed-wU(5<J*65Y6Bj:Z3LA:)IoM`<m>:(9Q?./(@.@:vNcC.J.rubs#,Yi9[M*s6YQ9OFd[%;OvX=wq0uYtAqE)SUgSJ([#n`7v'P$*dP:54vfw,1g]o27ULg1#noZ@=-]52)lTa*_sH`s9r(xUxK#@hV]3/Q0-ueh-G<9>6sge5G_vdG:v:vhOIaO%VmoF?TpME*h>qXU88sIw@Pft`5:Wh?hE$HuD2FLoNKiflF#-7h8v;2LMqk-F<mIr9u3DaVuIDm5?%OeZ)vstmY6]i-x_-j3wt/P3wq:b::->gPv]2.:8nEixW7v=*P#6oSC(504]30mVY?qTBs6]4V^SttvLbS`j+L>=FWcmK6XeX$i77U=0#v[#:S7*4[=7OA_O#vS6N7T;#0^`DR:#jH^1uKH/,D_&9uuJfI>s2N-7_t0ox^>OLJq-IBsKLVOI7KlF3K'-00g>GgC%J`1fq>`q;[C/4@.'1s$b6f1R@b)^sF?MjK9mPbR58M[H`aP2Ff`$v%qg&ZfLXaOcfW]HgY,El=5dX`UKb;mpaVI>MR<-QfqVrt44RKZI7e13=juS@t$#*eN''@jaa>F7@i<1ob_9cjf4ON/lJ/BAuAl`%i`J#.w+O3dXN3L4CU_C&d9^=?h#q-=O7n.MgO$a.x+I#<1'&[LqjEx?@'^[SZur[XHk0rq^f?b>SGEeq'q,Vm)qw(.sTKo%D;EbRh$s;Y(GF#kE8^L28t*eF/)N:BA%4G`vmr0-]bJXAVn(S']u^9=cnK;j0udC&Nsdu[,a4Bj,2V?tSux,DS78wtE<dt$Il^115vFKsoAE(4lARFLR*N9(.XiB_>;DmF'vukAp,./k/v@h1[G96PruAu=(etj[WWhv9mTcp6BASQa8v1p_XcCZ28v[AvpSb?+,v8JT/vCv<8_@XG22ojZBk5H_=OuXXE%8vnb0R[$w+kQKLieFLJ61bSk.:0MYln_m8CqH;h#X-Ac;gohh9[JYiTQ?p3-l#ffuF3@G'V;<lK;ke-@#XD,Dmh0)147tkdlW&BDCb[>oh*6YcP1a)Li8U;Ac?)G'bn1b7t_+E=T)W;u]B[Qn*_Y,Fk3l5Hc,<'iGH5Z7w#(OKgWef;Tx+Cs^cnguV]r]dB>LUV_bN^]/HoSInV^:mW06#cN6:lAN:Iuci%EoV@h6:lweXfaQaRP4WpGJug2gl/-#1mn8.-&fs#Db^Hx-8ohGD$mn@JR%([pjfpBhwt:i9eqM+J%bBrJG6s%+;uvJt3oDWQX/J(o1BAr3jHRJ%GeVvrjArSnR[#i-rI)K%t^kO*g]?skRn[Z1ed(9IooG^%m8XB9.(>hl<.*NxSn*=SL707>/j2lI1=oWJ[4M.kl8s>-c#NE's`@bro2TNB)W+s^)dHD+%$607vTW>r4L,e7Qtk@_aSW<,^k7Y=*ad;xaoK8sb`Km?KLWqd6j[A*wXXAqA-&XC$$V7%xG#/a0pDG>agiM3]k9[5e4'#75aM)[;1]HVOL,lx5qM$If*-N;ruLWk)_,v$@PPE:VPx&JIRsj4uK=_KuKXv#=0EHd=6+6>x=1.bv&-3*h&<)A(Wj6<<s<Ib+q9eG0v6nD=*#Kqiu9V$a;,-Yu4-<rquq2(8]PKNrOZAC&/4a0wd0hd2vNo@YjPQi*g8/U.pu1>,vGZjlEv>>]Oo$j#Nbuq5v^qaV7+,>lA-Q-ZKv?5_up4lx4-4g9`iDD.qwxw'.9+Bot%;q(rSSb-$*rMdT6_)>#dG>KutchSaJ^Jl7=T<FK[sKC)7Xvql+,1)lH`+h'=$HX_1&iNl.-=_,T[5=n,&=LtI(o/Lf-*xk>Y7f#jaiku$:AoAmT<(hhIX<n:vr6ua$HcTbHSD=i9E0vM*F$0TDm6vJth;/umJQ8Jsn:f5PW<FRFWoq@ON4+NUPVR@RCx?MQ^BHs7ZMnZ$h0d)].^e=jqmaeG?*L@Q2b3MZB$iW@BK&LFb#LTwsq+9?7uOrxHZs-Mo`<'dnQnUGC<cmv+f?TTWcE0@%Odt$=ak>m/0vqipR%Qqh&n/EEkSGpJTamr^i9%3Kn%:$g)7v?UgK`X9r_>)<v4q6MI_wX&FLw*.C):_T:ag>taI:]HeIFfAF`3D9:^SP.hlIA*<o`oH5$Z-Kk#[Cd;#fjY;d:u$)?FBO7*unJAnSdgekCBina7P:/<X0HYoAYE;^tJd]NZoDj_WEdvg0k0qWR_5#R%TFO<*Xj7j?tjpu#b8Z-fk?3(';1TZ.>RwRfHR4Htb;0lC&dv[<E>mrZWl38Rd_a%;*D4&UwF4f]pOvhc,D,aNFox+r<Gq0-Q81rg/#:Z,qgA,Yru12*0]l/WgLB76I4ul]`HHq&R_#Q`*nE29#Sx%sEmEMwx^Di8BO@b?<pMbFJC,QGSMlR>L@Xu9Tt27TXpvp:ND1Sv=n#tfgAI6?VCRUY5_mJq<[fE:)f6vqmA@GIXV-HRBmWC8cQ/Ud[06vb.i)mSL_8E'Aw1a>UGVmIPh:Z#43UuXfajo.UclpeSx1spV;TRxhdSJN4<4e5GZ-r4b]4-$twFsBYD%JSsgCMZp]-L+@uo$l)kI'R;7Cqd7f##E)j'59%f2]U&&.(p33T_=kN7vQhr%$GO4$1]A2&>,W7)*Q3g)vR2(;?7+L(`Ve<Ua.8mE73NP.hEb/FCJ#/rqG#Ae#,7Qh%U)q#_OH,DJ_#Z?&lc]e$V)39]:4f3t-]BvB6pV?c.X`bf$OcbZW=^ss__K[aQ6Y4RW4xYWeQ(;u#Sbxu;pvjF6>7]*,coS6K-xF-NqCAQjf'$#cb/<qO6<%WLEsxuH4]S7vZi`uf*&6l9=w.SeTO]sPn?ogat-[(d)'AI[;IqChZIqCafGF7^8]:4<,PGZF59+U<w,;`9#ic([URse-R&Mnu@akXproFMYDs$LrthTKkuY4vOHAr$c3kx878p2v(>I]=9Q$7vD^e8vweDS%n2IEOsbQ;i#=sP&j>C.(1l_Q#<[S2^-ME*JY0u@dx_w4(_O,<caEr/oV61kP#14F<x*2I#oaH;qndrmu$C[bksBijS#'X^a6e&euMr+`*V3>#5.L]I^*krwF1$=17:Nqr?c&Q^AK]YEK.*-]T&.Miu60A_A^Ugc4b6SfY,5PCLmk;+`AgiHJ]G>94wZP#(u4XlUY7u'G?0o?($E,DIGH41oD<Xps=0M/t[`TiM`(>aC'.?leSB:#Njie.lx9cJ6raH&0*uYkZE2eQNC_nN`io*6LfemR7c=AKT3#W@,?;8UuxeiiGd`h8_6FvXlj_oNqNj_1uBjkR7),99J+0@6'TVF$G'8rOr#+]Pq].MQtBnPdZm#aqgU>;d(JXk8h7K,:v-*Zb->xSku(gG.3OB>&b>XqfsZQ%e+HK:BW^9947WVYc7G@WZN5AX:doK#C_jhMQhft-.L@.:u,0#qF0Yu:Bg[Kte6a?eX5()<sSs/b/erg$/(`^=l.t1k.s0(B7bB$iF$@OJDh*39W6q,9sFft1`#v;ODqX6_cD7JO[H4^o1-`:w'5bx,Ka0XiR[gkM&u_8do#)i>0]F#vj?6n'cDYaJI9;Pr64:rLR@uMJsNX]wHGprCjb0([u**h(QA'_s[-&)Nhpnfe$XBjPrL50iST@c4Z,1shxYg[]En9>._oP0Tat,=H9gF0q'fVd(P7RrkWG@AI$c2^)@ZqAP4=jshUuo/ZelFERw^H]^wZRHmfa=M9YclP+rbQoXLKu$?-]42fI&<n7.vq5VY#m?n:$u@?CZTJ((UZ$L)1cn7S%I7$'oo2m=rn%N`3LI)hUC[GnASCLN7dR0>5m@N,L#K:>6cH)Ju]0v$8v%Qs66MVG`PQP2r;xS6vnh+qeE@CX2vqH6#h5)cKLr^`=s=dDu>r@:-xi9fUROmnu?r$<t^%qdhS*;`*$=8jbYBV#CshAc&nO-d`R[d2&f*JOEtQ*E%%o-jt$m3F/b'#f?6M9tsSL9P8:_*,LapSHQLkbjB39:.ge:gr-P@N&V'JD@VBM[U%.Dx)qj>boJ25vaT#4a5FnAZH-F)=:AdYeg,;4kwp]+w]kpo+Tk5Z2hLToq/:'Y'YuI`0pK`.>+%HhQ4'DIRr6.97nl>X83R3%C[ceR6iJ#a9kJZR4ss^N/MBLqCs#/RP95pHiV7G=VrKaRu=?Q+nDu`R+$,'96'$-uA*iFC_,D)<2cWF/6Q%tKiO$FRcV*4<pTg=SPlJV,$BcXtS<CgM)+T'OULKAuU0d=c&@S=e60#YmmnGCCI8s1'#/]Q_`YO&csat0?cwlk/+Y=`s`-A$xm%A7TP8RZiW'*$#W0Z?>$d+Uk'OU.A-M%L$=kT/7_ftcBN9awFVM7Ck?-:AF4j^[okHDH.q[SL$ZHJY>bET;fn7P-btEaC'NUP-Gx&#&fFIb&I]#J.ogkLg](:lIMHV&_OwA).0?(6b@`G#[?[*uLrFiKfPCqH^h>Lqv)ueUYeF)6r+.s7COxFKcOw9Om(E$0Em(rdMp1&$m,8S%sPAn&SZL9.8[O^t4mRh9HT7k:P;)It0f=k4FaD#-v^TgcXTlYu.x:%NK0e%Ng@o$=/M>juM$e:dEmj+UPG8^amqH(sW92HqdBW##aE*JLRH%SfW)wZi15Z.<:YR(W3)O=^dxNHr><KTr,1'JuX#fudNR6d)bcwxIkAtDd`%q>(IwB_aSuZ*JXT;S7YR?(>Y>jWK1^MS]Y[a1vux=aqg]CnWoT-vu5Sbkir0t-WP,3@b][Ocsh]OuYIOZDm#np9kR]C(E]@sVUBs<dsNjaNKNXjAs7=hQk/Xo:?rblBq;2C8q5xpSeU(vF21]9=l7JnJ7%:xBfmpoNKNdnWl/Sx7-[@+_l,jhoX=VNN7exDE+VC-4v)uGTtm?6<LM@HngHQw3(2rK7B,wW0nw$S888bCc%8/5uXZXArl9X,uI/Yb1/J;PcsB;TFfcZ0NDdiwBm@$f:dNQ#LI`UrB5%EZ+B1aO(LO4$)u+o>4OeYpd&v`Ri]arMvZQh=;Q/SMR6BJ7L=O%T&`,Nn-qoNA04:V9N'x8OR=1d<0GW^XxRA?<cQ]#u%YtMCXKqjmAYtl#^*g%(ogY=5a3mIIi-FNOl8wGB/iW<-BCg^*;uYIlsls$d&57=46u#9un6[@%SuKdX9)Xo?MHRht*GxFs+rfd:,Lf;eN`,V'Si2Hu'ni:kF.8.&Y)HQCxK2LS4:C(9KYt3tCr+W9DHbxNkl3:bV8ECkDT,ut+IL[g0@fUoa.;h)6ia2QATDuSV'e0$kRHIcWL)6utIi>_3O@.6W7lUv)#'*,Hi-Xi=G4Kl':W)`1qJlavKP-k@MYK>/<N$k(la;@fT0=9c*`txQ5juoTZ4[UWh+CvL7Xw*GDhXQU>*d>sk?8Z2j^7r;YaGa=lF.OU($L'$O(@b=uOvYX%10Buf2^w3ZJ&57/uP%Qs3O.4VTLHS,'V=Ht^.hwk4&-eQVecDRnmvN%(`[M-T=<nkANW4$Hud@bb5xA]Yv%;O&s;m4o;)`%DBQOo4Op1BZ$6kaH0I#OD)Zmu-c;s1`%sHofbPi,P';.(<IP=P01*X7L6EAa&@h;kgpxKh)<ZSeDu*wlw>;LEn^*#GstK-(rZ,%+eNd]<niA#]HWR(uIlm4J(mSKkv=]PY/jGbu<X,_a%<8S%(,FG(^W7oRXcQ&LHqeNF,t7oIrDQ.L6W#Hd;V>8`khSd3RJfi7TGG<tUnM-SJwqJ<pS$Alw_M0vnaQaug/_2;r9Q0o-S8xkrl/'(.8pbC-O>g<qlcwkb+]_N5W;B%kqkJ)q9)(rm6)pprqe/Ngck)&8)4PJpNBItFM0a05b+;/r;G<$8A8tn$*Rf5f'[e_vMS(k#>xjt$WkafC0Pv.sm$asOcuqdjVVUe`tS7QK3/'gt$ZNYH7)72c9sa2GfXF/ZB4&/c%VHE[]`Xcl%Gn_oKuuuRp'0]4C6)]sYh31A2xq-Q.bLZlTPM>Q=MAUQ3^_JAQ_&)aA3e)ZhmLIk-q42'$AJl-di@#+Ek`q^sLX./7Qk*m@gHQCV?:]1['uLmxRsF*a*cUjbpx7f@&#GB0St[V0tn5:a@,2P/fI#d+C0vHL-42x@Aa7N/+_fhi5MTMj^CgxRA'l@G/((VHE)([;A4r_'q]dK'5o=YlX88t/<tCPVXH7F4]*RX#EiIuJ+4nnf)-=C`oMAjYF9X'%VTrNd8,Y?uaS^%0ET4tj'Zjj(3BS+HL.0IZp%Af[c3NP>(8uZPT8rRgxZ%o.Et?'q1u]7c?h#G5cQt5Aq,0b`mogxE([&d;/xkF5cYTA:E&s@8wOUTD#[D#L45r4$';$kQj0V+q,es[XR[+oAk8mY(<C2E`?.1DRF>%HH>SZ_R4u6W=:P21Io87fpNvuZhlq8T[cG@vfVRt/NNg3'q6YXo5d=V(4/DbN(lCSnR_0vaSMtlNXbMNsuM7nB<MW&UAFMt$/jJL,E7VcHZW.DSqm.==ZT;or.1w$=Ix)L1E8%43;X-r+`mum-MFZq$o#L`HYj&%9%lwu25gTSV3:da1:=e*4V(3t8sClJ;reC,Oh&[m)E-/LN?A<i=t]x_Eu)2_FeCSf,K)__0P&7BXT00--%c<LPO9UuHd,H?$8T$WE7d:1r2H/qpT5b<v=mRnWQ%j1D7m7[FhKh%:%O7[jfn(UqH1KB928p=u_.]so<X8k4,]DJjgx*&'p's,-7^`kGnV&2hcU1v=h;/v>20ugvUxL7Y><G)qth/e92Dm#H.>L9Y'.x,=pQ)DnF=m>dqjvbNbV]ll'U4-rN&c)bs_+-pDXb'2'ghp3jvtbZ8S4lHt%r5lVpoqDGXm[/>?O%Y3l/Rik=1(q2+UfXIs>I0,S:-`(q//TDwfs)RY+?k$kC`3K;QA1]kLq=K&Wq-->DF`YDVq>0F.9Br2p^Wo<'`6%/L$JkkZL@^eY^d3LQI4QHi<bC6dseBJdpkGQAixabvRksa=l]m<,ucw+P.Ji[rU%()C?ZD74uPu^f#C.0`jWbkc>L`a-$&3l7Lcud#p$i6><C1(p#wJLRYJ5HFc%+m;btg?k=BjoH?R*U,b-.u@AoF-Z%(vd#t^tR'//AqAelH;r<ov]A75T7Hhg-9=u&WrjtK045NFu)I>)W*=+,?-qP+xv8Alu2G:;tg+q^geF#/&PV+o5V1f8vp[/r>S#ZiL)l^Kcm)*B#lGUjUBLLv/A07Av`xZJEX+$eg2jO&$HbK8)Sf3->LHKfQ4hJfW:MBo)OG)F+?F7-6EYP04#pLb8$&#mESfs8Kp$#LEUlJQG_o^xDHT<&(S?s-Q7@FY;8QjZpVoAk8sHlZ;Q5CbGR)<+9*/L=2=<N0xpT7x).nKW)%7(I^A1^-cxraE`e]*6D0wqu;Y^#Sx`].ZVC?'5(QD_q$o1?UUlJMphqk/2^3=$7[`8NMn)$#%.e^Y+G$jb?*,(eaV:'vjX)x+XDqG2NS%e($27rb)V/%hJT#Q#E&c?-/];o#N=Gq;s;]lf&&aUg9O+/L4^fQNOe28(kjYpu>r.GVao@5qOKYQr@@E#v$B`4>0JU;H-axpV%t_L2'2dke&(eaflGO@rev`G[,d.FlMDPn^?*4AuH$J7v0(l:QWgJi]6@_c7J4pWdu>lP5an^Sg(52fc44uLgr7-&-Umi0fW<p+;U6,M^HqioKF`KTj5v$vOKmngUc>Z(W=x0w,]@F/qVRZ.abEA.qf/Dm3'as#g-p=_/(^c/vjR,iKOg8BW:0mg/m<2&o3LGOH,,h8'`NoO038YtoY+^$B^rwkKj6#P65gS5qJ8(^,q`P.(;w<w`k&A.NoX7s8&d;'B$(0MB3[NE'&n7rNr9Oa?c,WU%hcL?Vc]j&)NGL:B3Mv_P:amA?U'w9c1)hr6EVP-(pjt<kEnAsOV-'VmSWHY5cNEImm<@nWX6G';Gn7,uscIwsj=a9*i&L:-KRdn76*R]4)gFGE@:+'UI++:Y&nA=#6'P,v@dhsPa1i5&R[#dV)hJ*Fuw5B5]6U@o-Cax+xuqSlnMI5,OH;/Ktx/2NBq#(BYTg$Hu?f_Ted7X1'c-^n_CDNon$M8g_.k484XcCMiL>.udkdmsIMD)@6:Pc<>7bkbN'X6?6()qW,P1R%g]DOUVD#NBmc8>Z*sKh7L=tLg>j]h%F;VaM50)_XaLn+v.r<ZgBd>'4cBPuf;gD`ui()xBrrZ'f5D%N$fxUs/0.^nShlHv,+kh1/h$8.8J_ZxPOJ2pPT1bSM9WK;h<uo8u(rMV%UP#$oJ273oQE#>l,UJqLr'aY1$)hAh2fr)us<T3De]k:]QAK`KE*hWfEG?uF8>/[##?.S?YC[<VXGxDpwSG9?QGLfs2(08%4HQ]s3-I5KA2b4u*7b=l_Fdw'@6T9,N]rE#?3$?u:32Ud@F@['I/ZLKs%M4#Sfm.%BdTN:s/%RfvA;.#8NKCs,CqES0HhYnwj70DxDZm'_&:W2;?X)q.7k%5mOpTngx+lSOWAKMG_Gc-xCgmW-<+o+ABFvec@wAQ@'cou*o5V%eo)ZoDE0-8c`TLJ#t&a<llg?ngr6hmgo@TNv]9KDL2eJYbW_^+]RG5dK&,wqTd5wiTRGZ4&FTwiZN@v3r*B+.?T5R[kI#ZNd6)3lgDI9V=B;0voN=9D>^HLKm=x48HvVr=U&F`<pYda;LFp-LG`Cn.&QH&v(*;Q7$U`vk'L'3Z+h9h+NHZPqc/6<a7,LBJ^K[`N0K@%t)x#IMIn%FrCF,9i=t4uX=LsTK/oShT>vp&Jcha=hPUh0ZqSce:;+/qYM.HSu+JD2?FpgR&'7ZTDN)B-vYcfeqjOer;,KF@J%ux7X9&TbUen6>U4L;:;sqO-(JABcH)Ha^fYxs.#N*<?gtJXWN%q(jXo1F^.#SfIl1%Ao%rniOX,$HWK>lgik^iZkdYY+W-dW5>7a>*EHP,?@7bD*emwHE<VTXxx9SPY$PjET>ATWn[=?mvJP$J75lF@>d[o?D5GjCH<L<c4@2+X)T],//`-PO>Fr?a+Qt$uNh8-sSY&VLv9K]C^U?MjbD(],%wu*Av5*u'r8)99lCDoJtY6C*fr/J)a@bk%@(oh&]HQ3$vL7MHSq'Wlca#5l#%v_ZT6IQ$H4ep=)b*kkfg?wI'<?D.80q_0$+D-SN;-[E9Ar6Ux<)uTt_%KiB4an&j1_L`R^9S[fcA[&q#gi_l>%lsBP?[^C(JmrpW0brYH+wJ68.Kd>)hkTW6NB>5(/TspSK@f^Za.g]:&MBqCjggKkdAp-JVop*MrmCp?5_9JF0iY6pSN<X-.E:K>gM3sEk$iwiU2?-S^=Ex^8]P6`XHm:*;ns,9hh;T.(-o[)(BAAwL]@iIEMdB2u=q+;?jMsbtk0&R<-A[gu<rDG28gs9kmIT3LYBc%livxOSGmq##%2i+qcK@rmI)Q;S;DI8lw47_<K]M#PddWDV('Kp&@nsT2J.r9LK<_R%&.?jnWKA$PQH;,LXC&PmDnZ3cwj=>Lf.h$`pN<nL%3Vrrqa$ZL[wf01@4fTK1@Hx#oZp48T6mkB[b+w27lJ.vGA,D,Wu$GDp,H[sL%QL@YiII95A8.L@3`0qv%eIK$os?r`,4[JA*QXuW_DX7g`6629hu-Z=?gFC&k,c&/j7lfRqHCWM@ovHcsOKU^s^0#r;J&VBrfHQ#WN03karxuZ%pckDZ^tuK:AgRbIM_ajI'`h#ehxtt*NHn<$^'chh@#vcf?Hq`?h,deY64Oae4iAQdjtG'3gk0D@Hd+jd%YMK-Ol&d&NepJ.e:eUX/wm'DiRiaTKpk<>T^[7,Sn<a05pkMKtKg#2vXnKk>_XZBP`4j[HS@+G`Rqnr6wSprFl^T?#CCZs1&&I%@DAv:X.urVvBQ6#DfutXKu,b)SH[I?[c@;w3/a]c`Ef-`aHV9JJLTGXLmhsKG@Ns?B'li<W(7QCmW$p0X9(rlq0;n-UZUVc3>LWjIbg,tcG6MTJ-;5m'Cqi7ACreM>>$@k3$PoDBeo*$I,;*Z7JM,dCUqMLe_Wj:X5&twNl&i6msrL,ISZ19YWY<-ah=u_A$BEx*P7Ue`bdFh#4M9#^jbd[%FI8B28g0-AjK4N0x)sM$x?l6+M9`:R)#Fuq1q5_&wo5*G`E.[B%Sd,O#BPec`<4Q%leDWpP3es%],MtCj2K,N)DaEF;sIoNx)>%T9V3>$Yu]qihWEnqE/S8&5gXK3M3i[HqjC#i22^K_K_IeB)tgp8r_@oMP4gbD(lU;6/O2m%nRPUY9-kxKZQ.Ju]D::95i1Bk:O*]u1rG1n_u<aDj6;d/pXS;9TlCW&&<-^2Z5m3ZlJ'7I*<LU:KkBpQk7%JSG[B[Dp/Ju-EQ1QZ2LWo9xm.g#5LC0S5v2,$(Lb3B)Pi%JLaL0:IL)eYLauMvXMMB;bA4br/lNi0E3caQcrm-T0v:L5i7]jh)D/;#AQ?B2nsCR82(=JLYr^YHE?#cg/#ZZ;#v7)0t;n4@&?()MYsAT)Ns@FbK@`-XgnaS4<G<+/,CWWOTql>^R,k>X'q'KcOR@Waw,Lks1i`B=pM$TmE`xg<F&QdnT_:vv@`4UiFrTmIbK`w;4v%Y%LpfVA/v^nM3]Y>[FE`[d^f7nLru.W?Q*`hiEImxUn/CP&;?EH;$:fZJdFE1CNr3(Zmk)nUJn2WDL9?F%fmIfumJf=odJT<G&a6gC1s5V1aG=DTd_cWN?aP4F>eHUOVd`'f+H&:?2ZadR0C/bDS`&lUX>Q2nW;>oO/(r?f_bj@k'U]''u#25Tc;Gt57oXX&7MCI&I%U1d:oS:G$VuG#7iLh-d3Z4WYjBckZcR*[=-B071fpkqfsU-wo3+YH)a4i1^-qC*A7PXFLor:.d:'_$6(P10B2GhJ^*M[kD^n_'xJb[O@b[-([(;;^pM1mVEogA'qjGOQgV5M:Yb?_5mD,?h2ur/*2_SSb?<$&m[5xSilEN,SbF?ufRGTC);V;+JCMfRL+To1%YuHlT3NG9@g&TTqvuVrM_1Rg$9%hgt/*$V[#UBV7rTQV^kB.cJIpgN?CH[^hKRviKWBfah64[vGBhBj(i7s6g>lI+kLfbP+(H39.eO+SQx42GG^,]iGQ7rYgl;=l5aN.fouf8[-<7rwEmLke++^>Dx7qlA^nP4Vf<S1pw%L2T#B8cpI`mL`xGSnAB2:a'HYO',/Jk:*wI_/V3R.b3cdZOGnugr+`]Wp*S.#O$5;D(+iss-O3lXFK(7[MWSMarg-LG1o-S%cIiO2o*k1h8Abh%mfAg<P*r.vxX.S%uui0tMu/-vv2BEMk52<+HWWvkV1,g1<A]u_wF4J(ARf.(bTd+(S=/8ula;Hus][aE,@GS%N&%SnFIL(W>SYcaCHh#gcX5sI4Du()Q/mE2u;$gqvY4YYKWG@f:9b`3d7L`<4Og)D=/:uTv]`>LPlHsX=A>xti@G7(ij9pq3igfuEJ@_i=1deU$&s&jH2e<u0WOoki`rEI,ewR79e?$LEf+xt?Ar[R/Ki$u0)vvK_7dmIu[t%(9Dh>?MtIfKw6Pas^p#aqRPS/&q*N*tt*adJs9X,g;ag5Q[JpEs[jT5v'Y>,F#n1[^AMr[2_)V's>Jwor4Z-(vQp9lsrd9gp?m1EInd?aMD)57vTre@r'[:4sQ4hm@>GI]B'45:;]Jx[6^X92L+#neLe]_g+'eQ:btJ'^^)Up^@aqSX$'JBaKFf'RO.KK;MUArPqKUC<#N?U$(hXR?#:ZSeAp,u948PLd*L-M?0keB<ufOD6(EIX-a2A]vdV4:U;MjN%bh9;SHbgQ^Ld(/ghUu<F-`LM,3%lgr6M=4?I'l=Q&w%&+h:STR'leY$1v@UE+TDhL7goUs4%[9u(0ed:H`-tk6q-RQX`0Km*R@OHFM8R1vwM?/fQJPCY`^XMV@?mRR9NC4uXkG^'i3t,l-pc.-P4<B.:j<Xu,RZr['U2IufB08scr)H<,]IE<qMQ09B2x3(?4.OZa,bZ_^=*O_J$7EHFBkHf4V3E(^CrRg8fou#g.P/?]-IEEcM?qh$%l?S=*x<r0-r.3+Qn<V?/wL*uYTA7muk/rAPe=4ILFcIb7o&fRj5=o1V/:6mn57<p([Q0l<a]tGnnVKb`9wK`5]E8]gKWq]j/T7)mS?K;)Jdq'L'KL+F6UQC`hX74X#Di,iTU#%JHDEtoiq5?AmduY[4b8A#k48r+WAH%4'WBtb4Y5mf>;%0E6p&>,Pw#+QW%<eE0+&dKI_G,w_ek'FN?=(gY:-p(1<#wGS?0cmLV-r<^4vUJ&I[OS4vF0qW+DNk`]W'lPK.B%RwaO.,ZtCf#.qLRCP/`ouXlMIt0-oi?Zp(UhZYgBV:vGGMuB?_D36O5@gr.x?8v+4OWlE8GQ[j*Zi<Lfx@u.RDrQX;8d4_x&$,GDTKgxoMBJLM3f)^1VH`EY6-Lt&[eJGh3eq]sFQK#VZQ%Et`JlHLp8t-+gc#Wsw=Z;gFPav_#dUAQ=sARJE)NC4qKcNJ?d0w%FT.+AIV%#2r'q)dU1`e*5Im<gw,LY&91(N0Bpq,BDiLa`#CQG`_vuP6:=FioYO8h>oS%-i+:$7qW_b$okx;(k-;001E8pqwDvO-6+pVLb@RK9k-I_mE11g<vLTZwFmMM9Jwv0WOG-Jj%Ta`pG`j3Y$COr4wppkTVDEn^n)BkS]]E@m[gPgP/+r':#?S%H2lrd0.Uo,[30+auuH0v+nb@CGIKI$WddVICj2Jl1l$R^iC:=23ZRP#Zo[TcHQ3Wp(BJ:7kK%sI[e4:Zqg&.;u2Uka2v'e,>F$g#cO'8ZZ/H[p/,%+ks_B9f%[FtiE`8fLP`mh@XL`qE8pqLHR7+gLEh8i1G=Ee`1iwgU1-GGK2@l2a>B[Jj*2ZUp^fTX./,hO8_]81LXDL+MJ@fY+K/9RnLK&($Qe5$ciN/PrTUQ0LhAG%tb,__CG/EtI.Y)6=5;[+&jmUVt&wQwWJnNgla6PsI$Z-F74;XDb3ifD+M,R/V.u[0Ysch#u2RnDoit^777J#jZp0GMr^;dwKS.Sq31uF?S'd*<u(6RCD.g?fuLEK4-Y-Z;TPE'wu&2N.(BGg^-ZZZ$LK^FT%V`G>u9P]R7^2P&:A+:H?Tek'u@Cx=#$E#9HIaq]s/;t&OCVtAuUOh68?]N8rOOc5hH@,972KM-a(I1i*tB[]2g&03vc7un&E1-he%hlN%7-XwrND^#FFA8`+ij%`sI]jZ4'Z^QtvHUX_SVRUCG:6jF/g;%u))8>Qaq<=$HFRT`wK76INocJaCN-`A*SZWfUA2KBIwbhKI&`/V8)5=7n6XAt5BU*K42Ska.FOsOU=i1[Y+H`3(GjSAO[g7v<j$cro4pi,mVeeMWkJf/rOBKe4CX*$bK#'GP$J6#$;JHs,_07v+k89]X>'fAQJeCV*e)FhmiDLR.d?QT((TTp`'q6RQ?5;-Zp*Hu_V^8-bQ=ft6(NIhh0@Q-AQ1Tr@`'Qp'T5*;k*fRSAW'ZIDS=7ESmBZ#o5;/TKS4IS&HWu#K66/&e9VHo*>V-?cJE/k$xH-#*7_36$F-GA5qT%vFl/+h9An`aHE2tr59:[KKm6o[ZViD(W)_eS/It(QrtBW%_0tUf#Mk1VUr<=6L%B675<Q@<aYw%<RAjvJ9Q?bXlxNV;&w@:vvCdZ;#PCV#QaI<ugf&:kl^&YK,;J#d[+]pCqe`rn2wZ6JDf1`*FFD1KQ5P=21:#N[BfK-(U$r/s*t;FO^QP;FGa%/&xhp`sA?Ki7H5-bDw`$Nm?uAPoD4[[up6S9;(@SU[1Wd>7#H:&5IIIu=Fo/t,q)>EOjl]9$nPWB*M1J=Of,E%Lh?4A4/dY9Mhvl[fg#DC8=fdS$wIbR%558wQ^eI.s^[X6tA2LW&V^^^>jJvn#,Q%?6(kIE[^KhcNM:G(a4*FZc6$,6Db(6/s0$XuG75Q;#793'b43HY5&<2%uIAN^aR43NjERv%+BTevR2qRHi-elG*Om1[uKJ)-Q(lu*=KtZNr_udaj>J,(Yi1(v@QipaIfb*i%aF,C)g*h6fj]9;#sIir]jeT6XjHaBKiar%YPmhC_nNrvPe)86PB+=bE0#=DNpX'_kHI58IH@6R^n*,FM_X(j98sia7&8(n3K:OOOCcssqYMH%tM_eC7^s0_&m+fR7&/WYgxSZ8b*tG67]dRtoVQKLKdCrTI6:;^J=`*;-BNmIovRN)qv1+[juSoZK_<3B6J>(1Ta`O2ZKN;xt&$6_DpFr`nZ''R@7*w8G:N4PJ*Xb:d^34$KVxYm],Z54W4fpmtbq2Hpe_^o0ik]PAnEfFiR#2Vr&ijY-j@pRnVOpCI)V+Jt&AnesdUMxkf3YxFDHb#[RDuX#4di3v4tU0v>fxX*=?H6E+=j;lk)^Kdts2fMA6CAh+dP#vup8#$<-E>#PqoxKG5LA_F?Ho7QO]ZgIrm-(j?ZRt-8p?)MA`2Krj_l-^9`8gfJBJl5Y[j<:<d<#V&.1(CiM@V6e0u8EDFd*`Ucma@k['N2h0v'X^]5SLIe;Qj6-nt%Tcma$`Yu@m>')MMe%+D:DCDAHe5p4heXQ7+(2FuwDCB72i^Nkom9]/PP<)s,`7Yl6eFm6W#eI%S&HE6m>T-kGed?JQ_X?BrV8fLHHtx>HUY*Bc9cO7]up'uWX,:-qEM/o^)H2fE1]tU-M<0aFq-:SZS5W,S#0>6@<-R<bueg?0x4_+?pqN7x@#,)2>ZGsFH`<(>$;*(NY8=$@a>R.T`f0nI>03l/U<V$btKI-0mhvYR^w3#FT'%u^DsFD[%'6e9M-huG%1raTis7pllpI(5Rf.(5<nr$Jq1R71gnJ1W;`*AE.pte#LcAQ`Xx1(>A6&v9[TJD*xRdCnc[a*W,5#upJcSI`&d=N0'.8[[n.oi[2_:b+sgoetk.gAn<Z,%VQ4K=gL=(1_E)#u`xCn8`o-jQTunV.w3,5#C^6$O$0`nuNQr;=0_/pVxfSX#6:QRlQL+#pVSJMp_'V:-gr(3bI8djshAsCp:*H'Kn@k45l&)GuxbnctxpiA?Fv-ee8<AOFSZDxkVw2TaJt]M0G]NXjZKwx1nE=@lBOU4RwA8Lp=x5+((Kho^(-(]*WjinnVsWO[D=H4q;eMsugRbkIW9U6NA2s&,eM3`agqZeK[R*N'q/bIlAx+fqfc=qEUk;X+fTg8&TeQ_tq5QQGsJaFitt9)v=:OPaRj<&Wkri.:@+-Yc1+x)vF#at*vPi(bBEB1vA=8o(/>S/_Uxb68^LLB71nn(L-Mc[un6AauH,K%phsEsnFOldkM@8MsuE_a[CiK+v7RhO$ZSmOs*(@5`BZkUI#=4Xe?'SWoSsW2jGJ<Im`.vim[l&Ll+lrNox<3,LeRCD,a,n#IdQr[-?OxA=xHrh3(]>f]B7f524IBul$q1ST88VQj+`4^;@lUb?B*mIL9f`P9LdGV%%[Pk&Jo0=l<TfKQmsT'.[=R;oaABhec><jmYBXvf;f[3i.+qS#,Bpc(4$>V#O@0#,BKivAjIBYZ0N*hYdI#G;IrM<Jqr7T[^$2XefFH1-D-pKh#QNYkl/D6$=#LTRM(BPowAkLBK`s8-^eO:vT$7-aQqPFMNNH@bVf[FMH>iPGk;1.=OPIJD9',$lsKNgAp*.K<m$5pMI)W+b^O71]mHs3DE=:>7B)8V#4t$?l2E#B&=b6Mg4X0F<2T^@NOBsLuhviTVK`M-M7hu&8-`?8%?v0okN*$>$DGM9v9M.&Gr=Xo7#VwYZ;CJR%v7e%BuEmou4ot'8E;5`L(_)V7d#(JL&:joQ`&q;:@[loua.mPFOv/aivui*SlEH%bQO[mX)YY/((:)n7(K.Rl2F#i7^2Br$q*QOg*t-RN0pVgt:F6p&Lg4aVv<tjAJg>na3S@wKm:jn/@I]O7RUil%f>Z?t%rm519n=&llLsl$)SQGpfQD2oiQ^nmlOA@NTmSa`Xsn$n)=1:?+k<?g=u%6:MKh9-cf;FJ?w0h.#uiQKWmPOR1U-<7:2L*Y0=(XK?N>:d%RoILG=tFe*Fj.vB31<FJ.so9B1+cqwAD9vdB$jOVQmc#>&cYu3dqck@bYm3jm$dW]e=i8at]Lp+eu:`H6Bw0YHQrqM,>4k.gRlhxImTBn_Y*N@@i]s$i`xg^0%#Zm9tn&#-CVYF:6Wgb_S>??if7[r3$eJG$,;nS>DUqBBTesX8*Pk##*auh9;cU5O0k$Y&65N/*qA(F&K%bMn3RfV'OB,-VKN7_dA5qflr=I%)jH-f]j32VlV&F'<<`W7)c:ZB@4kX;60P%iS&t:X6,kBia`$r[1l^]ZRjB7hw>Q%:jhV?SW0;$UF(N2E09jA&pD)(Kg4Q%kH)FBo.%:3_/O'LV_j(E$ia##gRN@roW?S7XIq?'`4-;$iZwcU8-*JV&oBcoZpBIB5AFa>='YWLXgC^ghi;f;&Hc>>q,@k8%;#GV8?jsqjx71L<WVduBq#582bBS7uT4Dk$t*??&U.]C+X_jOXC:4d%09>#g=guUMK80l3tGi^d_b8C#SA_<+l4UXbTND':La@b><4T@lL-gL/FnpVIcZmke.YwZo>a9MN`/gY'K0aHKH+)Gtn6rs5qumo@b8>#Y8W>-cU7$B6N(;$`n6p&mNL-(2-X-3$bJlHT<OG2's(F2R,e0-Sj<4q(xD43ufD[ucXP]2'fACu-p)O>u;6hB-[EUbxH).(NLe)2Dik_@41sfk$>&3o/a2vneTsSe(A%S%mQQpuw9h7[<BU<75Kad]9WKjBu^=%ldtKl%0hDAnYckLbD712L*dc'PA#.v+c*QJM(5Tuu1g1f5PV'PIgg%.agk=jo9;k>b#A#MJ$EUE7K&RlDS'.vu(?lbtrGEg^v/EQ7bia?`QqxCpm*2N<bvO,Kfsr'Lh(@xt+>+3bgxl?-<E9oIYEOD=<V8$Cnq&rGIgUtjt5t5m13K7Sl?g7vjw#nkp@8S7(;I?9CYNIis`v)(wGof'=Y^:m48>fChg4'r3/Z%b]&UU%;_tN+;T;6vJx`qg<*Jhu6`2=JqnW)INqUnuA3opt_k*ZIY@`^oK.fwk(E[7Rjr2ub]&Eo/>0`=Ie2B<J:u)=(4:dfLO:qJt9IZc[MHGb@kXKY#T&rqQ<um`'2sm-(Z0o@+-c65%S`5&svYjA2D:AK-r%uMDr>:4nT,63-lrj'S&>,v^BuO^[(Cw=gR<7GNv%)bNH'o(<ZV&'7(Ge$p3hUiLKYdW_x3F9QWs?e'67,[tOt1b4EP]9qWu>Q%icX[J^xL>#0xw=`JuY`%jIeO2>Fv48t^@;Km4hRthaN%b?ctY*s(a0lhw.$_;+2M#l2hw/C4m1KirlWC'(HgnVcs]8oQ@&S<M2(LVU<FDBZqTNn6;Uu$U7h#_N*q(Y7)*JN=?C,oxwiu`)jI_a]%%/]MMftgcZk*xu-+qXlWbdwjQ37ag`?q:BL]8)QcR%gDGAb(nrMucLh[aq&Txtw<]4(:mn]*lDJ-'aoG$B=TX;%vJ%`F&/truv?oai=gD:VI$b<$?1;fL8&>N'F'<VgjRDrpxOq[q`=<-#3Nc-(-x*Vdv0h-(0<ieKjX@x]7r3NX0[4N7EP8%bEXK<hID(6SaK`Z^*=dTe&2JxrOXW(@'cC7%'xKN<NmH+,Y4F+-7529u4hulr9NL&_C-@%#DGk480Jg1Bmv=Mu0cajK`t7T%Pp0TAI9[>M;MGE=(Q%Hu?-u/*_$[KrC@s2'Z6oaER.I,$#R51K8n_HDUHb'GpO[mef9P3ZnM&On.Igml^9ouXASm7n[#ngu?bC_adL1Nad^WZ@[rJ$91MD]*.C$f4MEZWh#B@^7(#cWij2qr6CVA_KA4H0vL0Zs4FK]`cGKYxDD:H0veM)v^@XNS%;EBlSfTb(>c.Q%u#$0lf;@7;kJTF%55WL[0#WlQ^`cToaF(BW-OJ<bfXecK92CZaV9:,Yuc/$qlUD*>mM5>@#Q/D>`EqtFVe.]<:LV&cEm<^<k>7OrQxYS4BLW`efFg<Ls2+q.L`=f.L,,wI_<><NMsTs/pAuW'7>T.q[xRkjOQ:)JLR0=7]vVE89W36-ds`+5SR&AQKq)d*`6DwUQQKh*oIcK9D3p;pspFunE8gU2-bS`YK$1DW0a8v,v2$M%Qwfb')O>OwYSu7H@?.fPPvh^ZM4$sZt^a>2CFtvNql.ouGMCZRfv.$:vausXuQxH$#seb.L'swk7M+pSUgm<jep#Rx8?d50pw::e0vf5Xd/NhK#WWv--hFag=2B_,a`[iKIcwVSn@rP0rnYaCYP;t9%WYOcA25?Ue@Yr-(XA7X%q9M/(kYg@O'7]pLMfMEb>xg_`[gu+Mel']rp2d.Lv?g7R)BWT[6lOYu6M9(ael-jLe%AHt)f+7uw-%;$SJC'o'troSrM5A4vo(M4Y6*)<)0J87EZ:mljt$gUS(x'N'*[Go[MX;dcek>@RtsPup-vmogl$]bJx<OlFA';-bsE2aGBd'POcw-VfXlg4VG7nj*_//j``o5SJ94P8Z2X=-_Dq.3Z[jft[p8Le%5@-=fuQtKvjk-N):4ZKBcsWq+Y`sHD-QHQ;[9(e&?m@F=`jWqOxd%LwQ2cqnk#PRGNR(WU;N,$%v[XdQwhT4*:>@kN0wFV(sY5J9iZ%uubSZ=,ukHV_+*k/e&3IuE>W6`C$*1$K6&xke+Z9),0_N$=08wpEntE#vgQb4BbT22QtXWY2ftLu*Llho_JGB#Eh82v,vkP'A&EYKgsJrrEJ@xT7([P0V5/?<-E]Hs3G=wU?to;gwlUJVxOKZb;Ac(lLKdS%`v4?*?9_UGsa[0-X&L*[r_Ztl_l-gNB>A.^'A_'qw&x*MufDp^5KH(vm33$c=J0;7sV>]=R&Z'sg3gVYbQhY%xCluu=m0GtogN=l[wO:]nXKlAa=OYt(7$B-d'<-#Jr6&vjIau@Z0n7R9auA7a,F0v@k/8vI]-r+sw]&L2g].UKdGo+&ZlmalvV;[2K;Z'QG>MpcV.7Q=]g4fkXGr,aHtN7g-DXBJk_JaIW(7i<A*rqgt:YP/Vfg4P/1G(jg,IWi+JeaX:fVRwq&HnR;W(Njbx1h3DScZ6m[Jjrf.$Bu,W=Dp(sg6ZB0R^1M$whHZ.X^^bJ7#+Ka+1S1M1ZNo9XsNC[]Zp1(0lmcV9vWpuVV+JIDk%;CWuWjvT%vXESs^trtkF'Pa7$fn]*14h+iNKa&LV_JD/a^D*PYMS1a==%B[[#TSgrSs8]bE*Vfa=LNd1Y--D1h)]dE`>e62JVMK-PRg&1;H0v6<^4Md]JfD&Mg^]mnTl&eM6hG9sqMKDt_J:#cKl8kLOru*mQW@VxTKQ*FI_G%N^k&cxES%N.PMtYsi+D+5l:$g*P^)QHQh[9eq/8herL7_0@#2xIIV%aJF4A<7PHr=dxS4kWFAhoYB4fMTHO7:7BM/SefouHgRL7rvj8T>jp4bA^uc*8M)%Dk`:.(nfsZhmI>H7j4w<Zo)kMV*<j=#16<v^,9]/:#JT.(fdtHohu5t'9r9wt`UcH(%+XK4/[39qYTTY&GTwQbu-H0UpYpnQEpnRS#WXurrYP[-.+>Z#v_$D@,Ngffwt9iaf,kdrS=h>bp2,ljF4?&v?.Jb)TDV-vrTX^<^fv:C++0.,@fO>AWS$gUBA_&#M3vB;2/m^rQ9;qNWs-$u-GOmO`a4B#Gm;gb67DH1KbOqG3SceSSjQwp,)6mYkN2BTAm>QX&3)PsFPY`J9-/Nm,i5_QT^JIu;=Dwb)6hH=VJB0jM#FHum,]Opt7JTZcjs7If)0s'*/CFX6/m]&utK`aoK_sTu['E;KtR[W9rV2[Man.-O;I2V05Gsdf:5%b*MG/$F%'kF,xX'v:8_8J_6iC[7_a[W6`/q)pE'cD?'Cd>pOMO#-1])5Gk9gC$%-R#psAmk-jIh(GP=%c>J,fKb<P&OC:-IiT&-`<hAuAJ:bqku8d<TADLbZ8Ux%x#D=8b9]K:CLq4u@(J$lmaIj3gdJw(M2Ga*.L=w03AlL(s?R:f]lVw=`Nn@cFTBrPsp8+CHTJ?#HtqcpF`H:.4u[i%JL=_E_L3#h:u(:+jVv%l^$Yv^M7DLD1gL4A#r#*A`ET4t$eLZ&QU-'fd*OV4j`qUAx)JhAxt?LigTD[C%/s--5f(.$X/>s%k`Z:AbI><_r?vceZa'@sb'WcG?-b*Q3u'x2QnxiTBYNFSw1o]#I2b$6k9:,[F2+(@,;Xd#N;kds*u&>oAOxihK#FVkCr3amOZr:/5vF/ep4a68r$v<@I,)6HWrD@rXr-]%A7G+Yb%,?F>uf<[NOYG(tm*rZ6Np`O$rD^DfLGn+37fVHCVilJ^UKI=+>?CG=a*r'^*HDduDXvEdA=h7a'u86CLh7_7jgQaAoH;6weN)Xu#IJ4pK.pLPceK4$c]OL5?]spbnPRWA53%0,(/>Pm8-/pu#fo8tuDMw-$F`'4H#=2K0mwk:QgbJx;$FW7mw_6P%g(pVe3'YRLIA*[r.W99O7HMCXgMglu-<O=nq3ZHhmFZQIl%?`N[)_euj$G@8OX.K)s)M[(n;>3]RKttt6s1s?%3'rH4B+xkjH'qs]-*+qe*6D;8X8MT$3i`#+VNmj#;cqJ%wU9#[;dho-eqC.^x2jtE7p9$7i`g/&2:iuA3usKRY/cC2vT_a;GL3lnmx+<ECW#Ke,i0?0]wi:tj?H'3d:on=p6$#3tFMgg4oVa_G7@&+VAhX>IhCRd7::$T,29rSQRYK`$=qNh$UU%AwBpYQ[se(pbUQ%<Ro@-672jC+N:#Jgb#U%]=]Zlsxlx#X0H:v^-'$e?Ri63hH-)vimDxT'#'1lFDp%4j7oFNSj9]R2';Yl4G&N#,GH%p4mhRn7+V,1Cr`AbP(*?p'-NA+RGH-b9,U9O*Zf9vt]KZgR$#P_[.A^-`@Z+rCjZk:[oP7v/WBlST]Q0L0x5Otx4sTtvvdU(75aHV8A8C)wSnn&4sO%r&u8]T9g>8--:$cJWF2:@xpm-vpX;>0KUMvm#[A`a`nR^<AbAY'=2r<sN41;jOWXN7^tcTEa,g#7#=G)n*A3_g1n[oo/ADZ+QRgLBvnQ1i^Pk`]JC)bN<jowAms;oXHwUT'L&LDFBQ0gG'V9J:0V77o&j/VQQ1SqX3supVU-b*a%fO1HxdtM[w]9$0kvdQ%M]SRWS)qRQc5l#%uhD8e88CfLgq46u;hv#gJXh3vk7?g<uL_R%bA3Lu<mDSu/<+GU-xdtuCB;gt]%MdUJlHxr#)XNL_Iw%v,hA+0_M=StY43SNXxI,(*s++%D-]=lBRPB8NsT_a#a_FNjQ<aa<hG?2H/j@32'ERZdL@FVqncQ](:CFM@tc/vKt'[gA42R%hsp0BrnUBr8gw0sKpn5k68'/BZ;:?@-SL8vI5$+rF7q5Of*9>#4IB8-f8dM(l-Bk02fS;Z,U+:mhv$mXp3TP70P>W2=N%:vdot2vBkxI:JL'5vE[$VUM;W&El0clJ[rG;[EI5&mrm8;HWG]X#qWLlJ5#O_s]:AU*`T/:+L=aAQYW:8KRtH'tNvl>6*neS@mo$:1S:k8-02a-Lg.Y9#KYwI_:_4ft%^8:'W6VoN,:Evo@2sZ/NYgIUX%^,u-IDF;EHQRV*.WU(8,(9vIO]TDtWZ+:15]V24;X^7`/BU2<9tfrT4os[f7w8vxI]lOYk>JJZOCwSrE+Z78F(9rQj>uaaM5/$_XSV%NLd=6#oXfaGEE>#:`0&vR4obgikIi7E5C0_[P;?nOLvj9Q-J=AkI6oO1U6(vs>,_^[b2i[JspqN$iD_a9&$&++*uD7F/Thr+U+N'kQ.$lb=/tg%sH7Cq5'^,j:^FiR>`up1U]m&Sp_`Ti2LY#F;Cs+;Qh)#f7m%[ZW<[$2cBqsCdbJYO5NY#S^*3fl2]+vjh6;Fi79-L`wO0L7YN%(dxq1vZ1nh/@:R.18p$EdE,mkS46HBT)lbhl`kmcEpvE=YodoVuRbclc>AtO%kQbmkbnX,lfvaK_b]A976PIU'BeI>?$Yi<&u2(N;%mLts_[I>?et&%sDgb?,Zp5cuLKl+sWmO%=+QkvJ?Mf?ngW'.(h8O_/%EGJVs'W-(a@Vnmbb;F`qVq7jdZmct'.6>n.7=cVCqUPsmXqo+3B'3u'>6Caq_=xkZ%HZr/M%_q[C3tZ_k-@A%`j(7WgM+LEmqwKL,$-#Gs'.v4FC<M:,Bd7&`?O$8[E+L[W8T+ikKpG#-[gu8a=^3n`_.(kX=%rm'6gAu;YeS.kf'#Px<WrmwOc+?0r1MM3%du&lV5vdC>pGYnt7G8]GOQT0[?9-IH@^X025JB=RGVU?3'J@<6&#eg/)7Y]E^K[4WXtF/0_/K'3hC1bq-(QTbH-Yk-,XOtljA6mxYJc<r>gSSVQB$,]=cUnu@LeR$`5NY6TGO^L`tDJq`Os8O.'f'v>6>>`@#_@u_BlXJ7-uXn1Axlubu;^vfaASp#$d)mm'Fp8%^t#Kotka&KlQ,<<#:Z&6vjk_mD=jF-LZd.oUrmfQCKMF]H/*,Ste4jK.F#,>tuZExk7OVW'WF/i%P`JgcJ8:IU^$hGUJcrIWbbS)(+k:Bo<q*N2F)XO7C`<.'m_s-8@qDPA:_aFf+IpMX+%>lfs*?bqjULnE1M+Pp6Cl7(pPGfL#5sed_o6FNU9Z%LPM^>[-`#R)K@iVfqC/](Db(qn9ixq6Dq0J91]kpu&O@0Gu+rle.8LPqQ`1&#;^Qm88%04vL)-56:W>wH?kS>eM1WhA0.H4v1YHX%/I2.J^O[[*1QOIM#bSlrB2NV2?T$Wh*RC:vY.0-mslP;tK/l`eJK58q,b6=&;QkH7tgGTCmEM.ht]sMV=6X0#e,/;t)/]NuT5Xgh0%cZ6>gE2aES+%F#K$pAkM7,5[(MYmG*1sG(g(2_#K:T7TdDX@n5I?tw9GJVx^.>#E.5b<p;:80+04*v#l5)l^F(5LqenxK;KUiqn%Z7t$tB$C<]U^@8:hL7S)t35.wjCK><X0#hl[VIPp,E38+(hS?B&I`IH)E#:G=&HbYeD2:TSX68tfXtu35#L0qKd%2_7]uEM)P]/J52bi(RER)dwYsL.Rv76IFPn1qS]7j%_OSYc7+E:xKc#+-+^ao7occ`Z3K9Ul8mfbF?On)@hBA$xMV`s)8-Q[.A`kf$O<?t>B'#OD2NiNEPk,%5G,B@/X`FPp6J5@&RmO/+kv7W7us0Xu?luYve862Tc1BEw9lp.8.w4UsM+l)>P)L#JZ;UlXT*MlJCkuf=v,7)htSP@As:-LMr>cUj7_PWQDKtch(/($vx;WaV@kP'As=#*L`9vv(BTp#F*j&EmRLM_']0i:QLMsfOqK7=,fk`Zxu*e1Bs9$Qano8e2>EqGJn)e=u05BeQjZc,7mN?c(pOAa4`xJl[e[O6s@uegjiXCm>_f=$u_xF/,lY]ET=8kE^h7?RTYansB@p^77I.vdcx'd=0PV[*B=Pp;NAsAC0I;(pthfUL)9daRJ1vu/Fx)U5@R@$D5&*v#Ta&sEID.vbE^EW&NuU%pw-a%PS&06,1)5t*q>Fu009T%4o6A*rrsp1T;6(LWCjO71H?CaN@vel)kNxuh&X5->=(d)SnVcp>MA?YKMf&.EA`Vth&9$D<fsR%p/O3-Sw=#TQp[@V@han=_jW<QG9D-$/PX;dsW>T/pfNT:AY+_Ebx=euh4Eu+%N7Pf+MCXW%_p:$)('g5`//dX;Nnv*xP`bunt,sfZ$Di2SYGY#eo1)exD1*q`Do>I88W:$Dugc_9Tn6u&9NF9@cJFTN%`/U;T>dsWg4S$NkGY#P'tLJpuG,($%gasmuECh^.#p4Q;S_uVa7V%]7Y+HY)rM%Oe_?[Vl5$vO<_R[d?:C9x]*H7JPF5o.:=dqVe=>QQ5KJ7=Qf_:e(JnhFX0I#8HgWD20Y0Ib2aVo7AGo4*d,W8:7T$r>uZDVK$oTAg4lX3:fW.hPtsM7.6XO49tpXPJ5s#L/aZSp'749Q<D<E(r5E`EPX[E#YA-;2)bw:QFE`ZIpdnM'^`:0v*8w_s8Kh_V9:ASn:XrF2/,^%O<^xA)]OmIi*$r6vE9Xju%WMV-O0<lf=5H;l3_f7-dG,rqMuu5JcEL]L*EDolIEmYt;*C'#-6VCncH&_K+mA./',Lj7kDCcu.^<ZrJ1Jvo=&f&QOG?_h*'Q'v4AT>tw7imj<3DZ1P>;6%Mb7(CtdLfCE/<6vdhXZH/ueau$sw:HLv6D'C#B<rSdr:-EBS]+`D:>7IlVar5vsOo*nw.r9rBrrpEg:,'//H0P)TWhuxOY#a<h,rjkx_*,-q>K.cJ]=Jn>s&)EIWRvtlFUt?-6v60-)(3F6=7kTYSA3Wnx+>ipPj?VS&(Fhpfs1?CgA-XU]e.CBa#M3%=u;N;8Lb<jsJq9s@Xb0Wxk:1-+qC,_5kDEnj?%.>fL;2i_aI^?mIak58:6Y]-#iScJjX48`WBLIKA+kpQt[g1'Ae9dE[8'Z%L9H3?XxA3hCC8D;tnY8LDQGm':%JSO+?Z.^LxKZ)[YGTX&$vllA[clVPN_?&@&'enK98@e]49Z+MX6YV`$[rNZ,-n8v9.&0j9BE5q02TL6_?trjf&5tldD54($)uA)6>[_W^Me7n>dog),@BQA)p#qmg[J+,kmsOI:f-juS(Y.(Nefs:v/g1pc3S:XKWumoH;Q$$B>xY,OUiD)nGNHr>ap&=@w,sf%nxT%P9/9mU?J>,mVaofHSmi7:]uMT^qjM7HXZctY-TpniGtXJQc_<p;;l0b6fcH7pU$cr'#K0Up2,KXq9v(ux?o)16RbtWMY@dI/s?AIe+w5uKvFL/]Ev^lQVfwVp[nnZS3sN.sjin&_v($v^QNDVwc<G-IuU:8wNLZJl/pAVM7@+V%_1OZQW)7vNFGQS(B:jtlrF:d0LF5dP8PV$Z@3;A/O<lA_o8cudV2aKKwO&vr4tq>`nxd,aaieAJv5Gifr<vKewQrXMxsZrtSVK#?eNR7V,rugTkrMZ,4%L:SF^(#*ZN:v?qJ.tgbBbD*Oi@k,FX`s5Q<Y#OQ_<GrZ<,O/cbvf+9-odC5wckpZa]XT(r0v)?w%YPRl5]mlMt-C4kwk,>MO%K'.$pNb))La`ue8ETf$JbZhXcAe6.vTOev8-3Tet_#;bMvw]/va&TR%cJ=M)o8KYY_9eEn9ZNw,9Fin9/K@nh,*_Vl5B:heOR.jk3e'+Zpk,Y#gb2`aD[;xk(bq?dF&BP8VrjZtH-Y;qAUe,mxLf4s#W(^BrA=<L/`hGkE;owuG/`W_OQFp$q)49U&PqCaG?9foPC$&L5TYancnUV$m%+6s8n0X%F90MuN:dS8I*'#APk_7vtQM[nOu:^kH<Laif:*4ph?IInO,tglMI`H-sM;$s.<2gLxZ#4v?8OFFh)Sp5]Yv-(jbjk6jGXH7e7TC-Wp0^ub1wNmHkf=u9PKc4u-cB:FUUU=]0;UK?S$tG.^oZb*P=9-8H'%hKrZ4$m*E7lqL^>#Ae<wT%q[S,wthVAerdu?Y6<S%,hZHdrK7H7c32dM9MK'ArcTkLxrl&QclnF1I+Zo7#&M]=%F]#Lfh5b%h$%AO/,x48xirx%WG'JL.10Wut$CxtiF+xud][;5(NZ_*HTSM[T6g3_U[j=;R3fj#d[u9vWqSIZ7/E>H^tMkWd9C+tvt'[sBR'Kcb7dG=uL4Wgi%V;qtc/SK-?C$`N1xvTSDG@YlLaWuNHq_'+Fsk8k>LS63?0:vZD2/n69(7Pn(0@&W@&GVQfL$LAo36]X6NDV@odf>Qmv2Bl3@u#PVer$JOJ;$G:)+YVO2kf%f;n4f7Gd2.mEmcR0.>,dW4xtCts%WlKs&#NWUF;7NlMR1X=vqv;__<;:+abhO6(VkUlQ,Avf2vaO%E)ngMdPH[bGtU^P&49-X[Sa<n_aBc9W<lY57t;BJ#aZtOp$c1?+EJxcP7aaRlu%1F2]2i'].`T.@t,ACZF3AGB&0strFG:1#qvniV`*Q#%f_mLoR2+=:vFd+SuDBN3vWEm^rS6V/<C[G+n2@+/qn$Jxb:-K17gieOsocBSIsb.TEd['M2(LZ-L)%F^Z2ju?lA7jsqHTCsAtOXUm?ESxX_>LS.nb7-Ln4Arkne.`sTJ&V,.ob&+n??`oUVE5fX,8:v1O?8v79/%5]O)ku3$iG<nj#9uEkHh^Ifcn%PowoA0G6TLZ][l/Ug$Gu`<o<b/Mk3vC^3:v7[Qdo`^NY#X-LV&fBE$#dkjxD7pd7OwH0<2JBO0LA;^0g<.ml4al'5%sr&GVtS8,qc9?=am&m-(BX$0Yk]gcq3#62L<(gof6Tx:$OfiCs1wG%LO7NB-^7m+v4CY1gPLcf_^NEm*SZSLttbL##4I=euK1(Mg9XRo7$xJA(VVBW-sKQU77%OtU3JK@6/=Nhn_[moST-6ntk4H:8?)v>r_o/.Mmjqkf%rhJD1W8F&>aGN#Mc;D)vNX*v0r9&4@/n=^KE+b2d3:(CpnL$>]LeJ)7n6Of2r<l&Td))2D3>l&NE/PSnMPv7I]S5f'&8,(u>.tuV^;P&=bhNX>?gl8/c<pC5qovTQ8C$l^D3Jq+EY#bFJ_]mH$%^aEiX'e<204HX'g;.#IAxh^+jfLdM)w=3jL_um5`Ct]BtvuNb5l@mrq194qc1V4AF98v'tqdXra9$IFi3V/ODL]feC#+O<$CYO0%vHv^r.LWS/>#G:oMKfY@rsm8qlK+1xA%bCJSoEIo/?P%U+vd40xtlnQ.qN7+D'A0g;e:;@9$0TDmN>wI0oO9`KCK5Fu7XA-Xnmu`mf.Yf`8`SYlj;m)M4tNk(5<qmf+v1=lf]ccW#Y3jwk_dir9XF$3,`Ov>QNoY#:mN7Hs.GF>0tmJ.vKd5j2bPP1YEqMG.gIf5s-a&=J1IBruW;m#g4$$/a8>B'WYYqRo'(%ks6*AWT.]..8EWD`Eed&S%_mWA%1[K:-H%s/m$h<MPD03:v>12eGtwwfM).wEJT$90gb-a=UlGle1#[NFH&Z`_r#O9:$o2LOdP-'mun+5<)D:((E7V;8vmv;4d^UU.1G$)Gu^@(AuI=tXLSvSI$14wRD@F]:d=JgOH)7pE9-N;6vxYI>E>*airKk1@n8E..vLSS.:N7uWM?(l3vbNq1LE+q7+<*H7tUb].L$D'YukYXB5)qq(;[[gV*$E27&#:'Xjor6>(OUYSb2<E:vd=Dk9EU,>VO2tUQ&a,.(#SAo.<V&nfHm[.9BE-jujvCVnL$lRuV'F7avEVr+KGc_q%:)@:>gbojrG%X8&r;Y#4hNB`b1C;oihAP/?Zp^b5;ZA#E`/garT5+#dL,*u]/9&qZxhfU[o?#G,N?=tkw7#,Cc9#vh2M0$:>8&v+wq<2W2PpdP4#ip/UG%(%l&0lCMraeN<LeL6_JTpdn0go=S4igwF>5-QAIg:38%/+s3I9v2n3:fq9g'qvx2$4QixP:[b?Jn>;lx+#-d1B#2UaQ,Xr$I9RmwkHUULt@8*d@r98rK]^]$$?G+/haED'<uc1N9G>L-fSq.6vA8pM>WVYhSSd3<7hIE(LJO*G=3Xxod*cnf,6OuIU<Z[#LF9%Q]o7i4`%e'fUaN=8dAK0Qhs5@]O+/Q0QtVh1f]n5/t:HVhtgZnkS]>.BY)<J(oK[PjmpUXpt*)PLK`W4lU>Z8hT]/dDqSOSlC'-CGrQf^O-35b&4[1Oq?:#SN]V]pl/P$&lAnV4loe^&R<YQ[6*B#*SgrcbO/X9(;-6w^Z^c>%bCB&v_u[#+B7m/KYaA-5$v1aaOsYeAeqISdtcrZLqhjaup6FaKN*E=#n[<F5NMkXrKuRp2vgF7F4QovCxtsiloSg;2wcl0L_suTs+1e>2L85]4DkJgnPBV5q.(mG$w^;I-sa&Z'hTvkB0njwrH'>&P^2_I$<lNDC4vtHG3vMXH9-:t9-Llm3+dO.L+N`0I/hK?M'`P[iCR^Ek+q0)u3>O^_a.wgtLK;D@WB[`8oGYg;4(3b+$qCrT8eEdm%#/g^)(J?C+X`7xeo)i*a#,7IO+^N4d5Ub_m2x-kP%`Mn]J(cn6u>`/ut,N(3tc3GmkC:(v>*mH<L[)9.viXwFGNtFQD%@_<q=eD2JJ,*m$Mof<sJjLsjOPvF:`N3Us+DtjAb[KSQxO0?5n1f,r%BsqQ>^&>cUxU+2f3*;?8/co-,KgDniLA0GKKRJDf5<#L8Uc9OMtqZY;oQ-#dL+ku*gm._tu0R%_Q5+#]M6.(K2MVdxADhKPaP$m)N>9D)U@oe^%f1gvY(ZKorT^oVM=xOLtx+IS`T'LrpOmW*TqK`bl@,U>%H'VXo5E%3MG=QVHY(+O>6]*RUm0D28ghkA9Q1I*s8qIhX#;Oi3>5qSZua*MN5LK8fmfp?r?gtS4'GW>]4MBI2hiBP3jwVB=58_T%*D@Z@c=c`iTnl4sZ$#[b&wtbYoDN_@@3orwQCtr1M+$70[jas/09$F_m$vT?.]N;>V*#`Rr-BHc1#-c&WX<8,Hg:_wUGu8-r_NN`Q]fI_`U$KVJ]=hlZ5b(D>IoG)Xf6XdEaRt+:H)?,Zf(7,4R%Wu25v-,0h`51O./#oFhL2JA%tBB9vs.X`1<o`)_N.j*AuPf9trBUw.v*L&C7Bcqg#?7^<1C=p8$8Gm#L9mrls`4E1g)6:SfL(=mr3',ilQYUdmf5eDs>u*G@t1@:?X&/tKG(T5dS$@8#`ugtK$mX+acA4^K):k_lb'-:unUW9a3@Q--Qk%7->&vDJG;-O;-eEK7ThYcf6+Hts#6&HhpkOY3>oBlSbXq)(:JtU#tW;9v?Z0Ka[NF:-h.PD+.=%$BNpe:5d[;[*x4akN%ZC2m81pnbm9CS%Vlte:4UhJ`+p,ntB'10ql:Y*tUuWq_HXRR,GS0`NNmJo;36T4o,AvI@-'90vrdR=O1:(*8#dgoIU]]JDpki3rs6jZG<Od5;`UZmk06_>$eG)JL%$go[&ZAOr&,JHrDB&E%+t9X5lK,:6Za2oLfHCfL3poY7#0-$lcrh@bvMVKT.%L%b'DLKCv7EIaX$G<q,^qv00*29-/7>ipZTX.(KT_V$9l%Wp:BV,uG:1#V/IE+L<bBv@GV&S%EAH%8_M8m]0fcC#Y]4DkCDch:T<1^uj9_sq8au:?aKK/(Es<HQIM5R%cVYfC%GH?TbDfJiTd9lMd-LBf)G@VkrPY&#<(X_NB9b=GlH`d`@T6WhCOHIK_,7DAnZGiTq*'w&-uk<u+b*Pt9kFKtOOn$7gVvTROQ@_m/hSZ7<;MqmAjQR%J(wm$A7a>fUtvL9r+U&&=3'^#wJd)-Vhe3[1c[?fj[hT3n(lcN$3N`a/rMGq2bHSIqLM`^nHqI7xx4;X/bkW-1(x'h4YMNs#Q@&#qj[me=GOZ=(hf'-?Wo'nbr$;-wYa<,W6@<jF7BHmSrY`*c8S]<%w@vjuw-OmI6()v^c,;uq8&u$fBdU=eW&586'#ONCDDiB]-S1vjOs@X,+jXap>kgfMYK'=+4)EZh:75JhfAi<[.VPqZj-/Wh-]4rUSCPtvUe[#B*w6&eM7FV561gH2bVpnha+SfER&>;Kk>xN7H-xf71SXSPEA,(f]xOs_8&q2RQA^uA8?ZuJDjRp`%CYu&&#:vgjt/m=KL2:S;egYU&CT#^<h[av5O^axw[EP5q64vp4<.F]kCHUt9S(3jVmW_I/-9uWck:ZT/#hhAUlF`@D'%$`uM+LxPi<^qrcQ7q[3#`eqIQ2l=WZgJ#?]F#M]vBvD]VI'K@WKTFH#l$3Ia,mYQ@4=dC>8#1-IT.;=jV.rE)qTf*h?.#*j1?GoFAK'3YYs&3M,EKE6T#hRn5:j^8gJ'><Ll1DXKKMKqi?j'/qM9C^-_.k%l,M,v&*=O-L7r8sjU@b=u`:M,(*67O7-Y5_**3a>XDOo9$jen^gNVKY#Ko+>u1S%_uYKqDJ3x#luLDM0#j@'GM?NP_r,;?S%RZRgAZw9duoZG&Qb/g?bjjSxuR^h5v@b`e#=6:IEv^xSIJ@imq[NlTgJ^8koiYg[bow^LUEAtV'cVBxtBWZg?eF?3bm2Ap1,C.CGV#*7[Dno`338l]m3b^n@gDrI`t+7dup*-%YAZZ<VC(dFMCWs9L`Uj-vmPX_Nc<,du+U9>#2Cp=2]TD:-CU+_uZe(+YqY9wF2sHX#p^Z5V(#spuJ].#hQpt=Ki1@rKEZ<okgaAt<%lm=bD*v#kb0VcVhkJYE:6g;(H6Qp$EWb9-*o'1JB1c*pAPO:msBvxJ%2^wF3T6xpU)Zm6-RhV%gAvUG/UKws(JJwutbX2(xTO9vrB`HhKON1vX6*C7j=/&>)gxvtU2o;sa5nbGSk)*-IQ@^uMc?lb(>S^H:C.S7Euk2LD4(9Qqi:q2DQ_GktU<>%`?E3J(/C7%F,/#vnM<8vIe-%+lkf9vit7c`8k^E-Z4V%+:>+6v[]bx+nv7xsMT;lfNB5GVjMWGkS]],?2v[+Lqo;H6Psa.LFrtSKg<.YcI-3m%:Lw_5e]k=c**d7T-bE##H,cQupg-1I;3;bo9lD&#pu:3?[0GZa&iLQIu;Wi28VO'N2OM&6-1+QMaPsD)JasGp5>ZRtNJK$#LIw$V/xV8V4B%t'>BheL+,k89BpYA4;$0lRS@w:js$hP%N`7UF:BqkAmclPnffhot4sZMjq'>EeaL2SIda4ArJ?(stljL#Ll7-B:ptFu^2YU0DbBCsFe+k/2cwmFMbdYQ#pCxH2D7,]GV5[mKqt'aj()2R%^@A8#>A+/_Nds)Gti,jJJCOqfi>0rK29F4M2mxF;>csugpULrY%d*OmP#_hoZlnnfRRD.$g*'lfv^tK-0&^4'S0ni'_UgAJG.&LBG]41#;iBukkFdbqcZ5p&l@nb#]1$guxn^5Q:#8l#4OW<QbT_Bj0A$*Z_e&^Q+iLjJ1.0??RmDY>.E)b7q,M=I.oL+Lx]goatt)b/A(]r-^LH3ue.?Yl?`w3meKR5]Uj&rc=,87%rf-176I>buCo:.v4==S)0BXpuw_/TltW%`a-jcPtHX#B)o*l5:naJV<>TtpV,B`M%#dTb^;e%?r`G<cMJmx-%9F(`s#<%[NH(.9oZ:C:vUS]7uVGvd)Ab@%u'YRe<>3nYPU[5fL&a*h6%SC(N2J?(Z^uFLtd]psLiqRtf:WRH#`-j1v-W0YYb[Jd9K8h'aG(*DuWW'LpC0qQr?6+loc^S?oLQ#lfCJC>-49k]>/;26MBi3A4iM_HGu1l.<Fi>FO`['_KH*'M-Qd5fhaI07NVFSPqdrH5vd>n(t6j_4Q#$&2^(C^0-nkYrsYX43J^Z%vkfhq+rFc,gN@b?.qI#B3a[3<[r&btlJZpBBuG%a;#xH,x&fLYiT:rsU#1C_+VIe0Ln$8l9S]iBY#'FWg(dIn_<e;RE7A1w>ePIcdd)^L^70UEc?$PBACS5>OZTQan2fwB-LB;v09`'McVWlw1vADn%;#^k>r4/HeoU3l*Wdu'pp`(6p.>jSR7+O44vBH;2K/11K)Z[<YGTSKNjib5lA6<hpZwf]wu;I7I.'fAxt6'm+sMo:GuWYvpV:AZ-(&nE;HbnV>-LKM#vp2S1g[eQe:`L:k<N>F*vnvB`<pIvNJW6,OAj)ViRIJ^LJDe(E0kh_3v,cLHQ7`?NeodR7.k,;5Jl4Nmj(?aeb1&)0bhskduS(5:DO]:s]=Kb]uNh3q2Jw:213rhEjiRLSaKj8e;fV1[7U:/6`:?(ZcjnAxtFbTjsH*I=ELgM:-/B2NLZCH<tJI>wIA7@Ir5u;aEH4TK'Ma]6sxBY(D$Yskfk^$RU<<LErNi/;r)nZ/#(gUlIldjV-PScU491'CqaK#dAF73S[WZimhL86tUj/k8a>R*Aar?w#4s<`C)nvf2n.@:7vZ_L[t+IPkPBY8Zf3.`o/.WiQ[;tS9I&BvPK6EV8v9*u?,eh[@uT^YmeCQ39>[5kYu7:6`uf5[+64f,vuJ/(R7DeQeU``93^_`5J`&7/luue?EVn.$xkw)-'tJZ(wq3,^*(X>K_T[A`&-&22(]@H%nsc4Vcaa'8/Pa&*S7)HM2v(*$Xa%(M0-J*Vj0mKjwuOOb>Ym<81v[<qo%Fn8;-^n^b_8J0-[#KjML]9u4vm(BL2a1;`NwBQf:f'wd`r%q[^2+ucOe-kYs;w%Kl#+=Ok1F^1Bm3lV*_Rf_;_Y*t&^-eqpk9ZN7pXCS_m<bHq0.$uKvB/.+$jNY3a,B&kWb0UIume2HBsk=7q=>u4G.Ewu>`P]%KouX#llwq-?xvcU=OmiJ8Skma`e#C_hpJ9-th6I.6S+^*>eh/:.q]V-FJjs#k@DTfZt/['&,=QRCxhmn9xIKueIK?tmdM3t_ReKK[./VZJ<K-LucJ[`KiJ@n%2@Tam7e=#NhI;8>tZH73q=S@[:nESVOLIKt3+B*h<ptgtBx]N:9<-L+9E8-LgLil<m_ffJcCS7Oa)])Pf]Gu[-mDG8I3htZCWwum_-R%r'Q2+Df4nS'=twO=433().7wuuw-R%8PM%Yhnxls<u)n<B)N6$;L5.vk133jLdml*+MM`^dsYNu%,(NSK@D+iu<1`AXx'ZAb==m^YQNMBE?Yfq/$cmMBC>-?88swEe&HQ)>(6>5T'mJ&b]/Pt=*t1q?=+LG`q%++k&RiS#D(HcdvG-qN4)]dq*ep,Qj):vdfaV`TXUqsoH]uN8A)%v.iH-'9xWBN<R(K)Fu`-L')*,Lxut7ITQ4lkFlJnF?T39v:<>+$u5,csFL3A4?$)#()22#tl35^u?<kPYW)#*n_cOL;R=F,M9PHfpnQMXcL`m%gir2lfA1(P2w:N/vni9&sPiqLg3mekAXE^RS;c(F+U<b,?sQ@-vcjH87@uJ<PZtfeL`lHS]TG-lJ7w#9:[kESo&,ox+OSx7vgkC,OG,Q9VBa*su3o%fq^mDxX/Cq@XdACsA,SnRCbja/Kp?,13MKmhI,R2<q7tT+LR_VetsRg]]f[iCs-oht=fO_x=+Q9MrBwTSKD-d)#;dNxuBw^4f-6Dm$f?#;$,;=ki+=K$#+E%5vq<Q3=_bKSeUoR#mDi&Yl_D*K3wQNO7G4&x;(U$)`CNqkf%M8`W<%Y^Gu)`(N(YN;$H];FVC6I#k5cO)G9-/B+W=G.LA.i0rmW_YuwQDYs@<MefE5@3AtK^OA<LF;H@rnjFxN7Us4xg<u4`NlJcPZoo0^bhod7@MKvt`,pCoL3=#6Z>FkJCGArPX%8.`uQK0v#B-xf?hHCTTLi*G5efhpu;K8#?#sP2K2`b(j3v2`qFp*aE]t/?TIC#.MZp-SHStJ0#SHLXZTCrb6L-fW)]bqvA@cc5l4u(NT8.Vi=P$@$[Q0,XY5aOr>k11ZA1Zn^gUYWVWx+2$e3+Ig=;qZiYbsXl0m%$;mCrxVkP;WFoW(Zqd@XDaT7#=]3=G*D@Tt0.]ZsdeZ-RM#5AuHD<g<>kfH2J?l4Jk:U82e+hTl1IUhtwZ1prIB7a3i^=X#AG-oN-)1L,3X1c[*8Sx=vbv>7j:XjHp>^ZuDF)V%joCrla3NlJ?+rdnR@eStSReb2dmHC'>kcm1'6<TAq1M63l$oCW,?wVJBJVv.tM%9vAJG/vWSvjJ:F4#5VZk[$t_+7a#<Ggc`27G0jMV1?9U?1tJZ<>XLDl/v2Mk?a7FIe,?wcvg$Ak45c/2wokgb*nf;`PdNgD3t#Y6)Kw5/>#Skxx4uQ<r@)&bRK7'g.ufkM)vk#Kvr;b[r6d):&oYYkMK1L:.LVrliK#VJwuT[;lABN5Y.W9e&q0$DK9:_Df4#UN1vPRL8T164[uORT>tHYH4vC_0LRG*rF`asWPgk2:@XRYcdU*pk@=W58MTS/;VVj=V3*u`j_a*o-tZ-O=-(M.i)#;G%GVt<bvKllfCt+l$pA]d&%#gNM65k5m-(bYLF'?;cFQZ9s^aB6Sh/Ui>YG%b`]GV.CE`,5wkfh)v1m=5N2(DY%,LT-ecf$G#lfftY&s/XQ(NE5V;W(LW7a_ZoPt'b9xngsjPn:^=Wu+jsHtuLfiFDQ.ppp]G8V(p3+0RJosu?U;4ueFb3_EF.?-HNs`uej9h:hSj>h>+5c*vhN3Jj%SIk$#MEs1%dl/s>jepmXB?ta1))QT@k8op(o=YsZU^;9P/5f*,q.:jqkE.^9^LaCqHX_3]UNKO^OoYa93`#nL@Z<d.I(#lEMHZP$iWK=>1xWTqT&nNa59V02Njj0=qK;q//<uZ&7wAth7GDxPHcatvsF2k3Z_%-.9>#oa>wUg15CBd5o'Lc-dxUaUP0m+RPUu9:ix4`e#?>OUDBb6we+Lu@M`3etYqXo-:m1kDq:#j^w8u;ZT&W0i`'-cV^.rsM@1geU]QQ#r@^-xRUh-;Y].rS2UoVV&*;Z/$SxXJi2L(kGKxXD2I.qk,O.h+5=sG:t0-v43wUNQ1vtus2a(N%v6r##e`O&.q>9u>i%Ec./SJnV%1HVWXa?8hI-Qj^moPIL#/@2uw^EiB#rN%K0D6Kg<E0rRi6G;51jeWK=E+L<2SsFI9(On]m1ZoP^r/oS:fFM#3<c_G@wx=(UfR[gOS9[-^'_,ifmG2^;M+LnOZr?^[XOuXQn%vK^W6bjW8l+R71)R)_BPlG^h:-5_f[oJgSLWVP3`NJq###[V5`*U_RCSi,u4Jh*F5hlC:1us0]uu%GU4vVh--(g.L-.9Hd'q+nqshdZD_q:4wjJ=.UbK-%#lfKU(cdYpl1cnsR5LL(&wsMTuIL:m.km5R^?`[2b$2V?nlA<7:HJ]gQ:#$U;RK]?N9Do)=o@vr*n$TCXFVo:1>rXXBiH-1m9vZDqY[bY-af$5L0E;#$sf'r/ErQ/T:$lY)qmdP:^e3h[%bmgvaA(to5u4q[H-K<ip7qbeXcfvIfp./`?K$TUnu[]Ghn9'W]a/ipbu'%`SaCKm1,I5s&#N_JjaGTI^rO^;?t^Cx0LfAK?sDb0rX8`>0oHnLts'bE3uS=Rb/PEovX:P([E<^uxDu[cokl#r65(cC&B3Xw7RRq;6as7$^PLV?HQ1PGfo0vp:6vYB-K<&YhcsERHQF?@`pj_f.%7hpiZOaVIhG`O%YLmPXN0]T5ri0hlPXAO3d,?x-ud']DaAZuL.trF1-HVC3tE5^xF?#*7.fC`xFBQcUI./_x4ruc.mF0%%q>,#5LB;A/fN/ixQP;;st'Unw;E`0D03xB=k3V0n<2=lwu/=jR7MJ6MBK;Boel'7xCJJ:/vvKmek%]]B_ehWKPI=9RA94mRi5Dp+L*/7xk0XKB[%eUY#ZWI%kk9.^ERVx3YLCWYf?/MYpMl3&creI:Z/'YQua[OYuZNH*u<8`WPVq*i_Qi2jA^2/-_Dw%jJa%&'[(ZG^uU2#6&0bCM0L'O:-%A`v'4_J$vji)?E3G3M+Cck.Ls9$2d3U$;?7ucLh7jp+Lb[q.(t4.fqR,w?rD*u3v,^_$vPZlAucn*MT/%6,LS&Brtb:pf@K&N%?mnW[Tq1Gwu.'t9v>&<9`Q,47ZBc&h06N?R7Lr:^3`LhL>>+;fAM7<dFkK)@t*NT^UF7dPcPA992Cc,am'Zi7ZDT([rV-Gn/A;0<22seEK$luUd8rcWLuN6H*ojAXslOg.#C+FbAbZ-d=H%Y*R9wl]m#5Mt_uspA2`efu#IOqkLT9rboNsq*TYqTH[rqXD%B#0l&x7vOq3^]*a`oJP7rQ55hf&]:duR*fLi#onG?D[Oj.Yw.Lq%eFZ@q=ruko482)h;K-9v_[s.D@gRQDsZm>-jtuK3-rg0A+3O@GbDmGC*MTtZ6HrC&)Se+lZ?l7nD,`MQZDa08x`,/GrY5h'>uup(JwdBGAQKu#VGJa<B0(@Ij3vs70f0VMJ8v?09sh<.5pTfoM8#c30r9m1*oR/3`nq,d]1Vmb<R<NiP/vBH1f::UF^$Fq4^u%:8,lXD%-v;..-L^I-1q%ao5s=cI)AP2mO7>#tuFsNdK7:hBao7Jh/v]2%(SSjt0[G>:T`(01qS^NEG;6f$O=xnXWtXKfN4LQ5]l?Gj<arG1Y8cKNhuU,e]GO)Kb(?4t@pNw;4v8&8wT[,Jk/boxIA2?7D$-Bh[s-[sckCY5xO>Mi=I'g[bo:'ZGu;Qs7Ii'kon`G63A6V(MT:hp+LYT,'rF`?6P7j#JEI:E>f](:I72pAfa5FJY#@2#[snTei'CHYSRB;rsP+tU>VS`s`[g.kx#`&?6v;pH=re7%K=rLfeLc)j>gjeQUH=RF9:Rdv.C9KJ:v[2kx+`XWx$gT%kkCP[St;=e7[7fs5S_8-=J&1WCZ(2*JVKMkNd+H;tjD=5>VXVr9cAd%Qna%_JuQ0s(rlZu5u'fD<LbClMubU$7Ye$OSn(NrnKFg,&k[O%9LJ5?NlE[S*knx+mejl+W8mxaO2;wb:Q*8[(NM[q$^;Y/;-KadwC3K;4fZ^Tx4d90gm+UXt#k++nEIB1pZ&-x)vFS%Yl%(sjOZ1P'Lbu/3L2OsEg6L1Xu=$Psa,PJF19PjxP-dpmsbGSbEqk@1vxI;1>CNZQ<i).AE+*%P<5hZoToWTruX.Tu_k1`l/1T:mJh8UTNtoL4v^.rC3]Pm.C[H<d.G:&atx1BCrY=OSC[Icf4966D^]Kx:Y`PRoO9(1jfYqVW49),J6G7neDb3&B-KS4:v*l*#o9wVIT3#TA7X<Nx)?vwXuw0NF?eVRcuT5]]Aqw^g>1U#mq^RI)b4l_=#J8qAnpQ)NtpA,?ttd=tH8$l`#36geXYj2/&'ObI7'T/B2]<?#qeVq/q?:R*<5Fq/uipawT)F1/C,W]V<?K*C16]$NJK`LfrW#quqX8[Es`Sr7[;3B-U,$#Po(6_N[u$>>#Mxd`a/nr:2Y4?f_G,(wGj<rx+w>K7b[Pg8v)IB7[]PEo7jr.Ln=J)d?gQsIaN^l@KA6Rdox.HPuD(FEti9FV-MA<9uAR@^s+8ER:#9w(ukms.(lq67uEg:>#GnBoeTa,up7^>@s#b4C#pYL1J`2#S79AXq;@rF7v/o-+BM?/XudeUb%<JY4S;`t=7:Uh670Dv4Ak>[._$?8tu;+l6ulO@S7$#D%>X<K.:@#82UF(4WI&AKE2qZ_ku<TvAZnDhPfO8F_5rBInuK[nmQn[gMs>wr4-mI.Of[NXOe&[75)7A[P]t,xwP7l95Y+LCnK>oKR7tKVj/BT9.-4Mhn<]<5Y<(nt$m&#:$#nWEStnWD=l3x>cn)+-[qa#3QCs0Y=/ebNoR=Kc#g@,.(:iX8;o@BtVK#&)YEVwhSKfTTJ2xL*U$RB'MIg?se/wg,Q(N8.)ATVk@OOT>9$NU&<9$(tC)H8-2-9&_GCb9=#siU(sfvlU;&o=pwt*fN:dqDKl6E1*S[5@G%L5[`5_T3$5HRbaSpT(S6QMx+8f#@i#_b,Ftu-,IKmE^L,%8@LBS2+gdPfgUc[V:X9QL*negHgMpa%Am8`-F[rK@/A5v'KbBQC(^17*pX2t^he]FqdhOs;2PVKgbksX1r'8vh4>8pM>f'24-4YYjQ-EABcS#v<6:`WWJ_(cL@cF%-wTOnDS[(qnJTkJM.w:HX=*`a/KXchM=8pB)w8XqO6O?Kt<?<uM2l:78^I;0rSwZ=dSt:H6OV$sB8hot4B%ZI%#KUATH=-L/f$Cq_mNxusJrr$>VFxkYZ@k95WfeA=mq8vv]S&$)36=u=dNcR&R<S7?V@^sjdM&dD59)lw<xMlM)#;?dZ3o`,8YpmFj]6v7c256JM6wB2o7ABcgc+#L_/:DtkpwLq?ZPs'$O%#SLScjcc')LZJ>=5`w&/(b*R6bbHcEr_wXD:BD6)*Dn4&PK1rSu%&sbuCWkq4m-LJ60EraEqn(9s2QF]U.9#LePep=QRR5G2Hp9N7g?vi&u8m@3N+Q3ce,`JVvHrW1[soW75e$6h`jiA?iG34*9>&M9uoJiF.#+VJ@6J#,Nq)T;j8L^ap9dR=Q]*'tV)5S%=`'v8DTRang)eoUrP,FuT]o.vNKjSgtk5%#G4%5&cl];IN:^jm'fu,_jM)Wq)7(jtb_'_]Q(LN[6KG$?,,ULl[DagnxxauS)0L>dI5d.tl;I]Ix]Z(v23)6v@>>[#j)8YK3vD/@lnl/ukZ=tsPQ-td6DMLKboAXa_*3-Zr[CI_)(HKpMh.nZkX9q#J=7GR(m0:v'tME(gqe3vSfoLpvNX:qNKFiTJt;*('qPS.X6Zff4c,Pde`>wk;],&v(qf_a9MG`<*N$Q[XkaQN@Z=&s<PFark-*gt.e%<lHRD7KbgYwttrYl&TfS_uknX*rScBS@_n]`j`8A5vYoHGRG;:X*2uHx,7*8e'')dhI2QIc:_9UFu*Wc&jv@b7C8cWk/o(EQ%GJ`-8+<d`A,mqf&$[A>ATD-G2;a^c)&*t7IGri@qnA)KtqHeeVob^fkDt;)+Jf+.L*`Yt&]9A:vmQ^IsxMAV7?nn]&hj,f;]Hl:QpwGjtJSPDHxt[R3u388vml#Bsh@Dt$ahW/t(ebXIr/^OeDuLlSpMJS.?Bs48BI;4#NG=%cmrKQrCCWFV:+-ik%4eQ<%U,7vatU:q^*^[OsxI=VCpK2rLbB#L)?#iK]WJRI6*a*`XuOf:g:FC&9I1KXJ<%?nr8(O7w)fukM^+:?g4h=O'8f1tXV4aqffDRekrJ)(Q)pXs/)sQ1OlNFWCuXXP(tY9iFTR%Yu9;,u<)T1B8VT4t(E]Mi,+TmAf*gsq9vA;dY9Akf[d;xJld<#54*9./&GP8uaUGHDXKSrKS:)fsE77uuHl0f>?&'[)$qc'L7ewr(6>g-Rm.47vU+ja`w1'=c?&a4t(RWH`D=6W$cP8Q(xYjkof$@?7cMth_=$'#OE]#72j/;rrI7meI(21HtV-?i^RYk,iW50Nk+Kq__b<Ru#aP4[1R<G(sXHEwkk;A]uaO45v2YQN@ZNi`NmGi9us=)g)B:J^sh-v+2TiiNgnm5G2o6H'WGc[NnCm0EVA@ds$h>i3rO)u]Z>*dcDrH@]a8vW/_QRJV?B#=T[J?RRu%pRJa4-]q#GAAM'UcIJV]4QM.XH9:u(03]p(008?b'?R,;,AFiPsIfuU-ge%b7I_W;&/?g_wI4rk_w.((EQrqf?T^AK+u;Vho>B7;)X$0g?O,F]a`X[7`gge9:$pu+PB8KZY^mt@TGB-.OE1vw5E^jbQ<S74i%q6XHL[GJBmJ;E$.Y:'=K)lsNw+2()qhjMp'R@ui28vH*960if3`aM-%)u<;]92LI>`NE*f51eqMsubb,?bO+g7-0o?9v9v*7v3K'kpUl-gfBTuq+R-N=DD6qC$H#R$vNpOD`92-goa6[<1$J<LREnpk'#S+hr,$^<l;k@3kv)$;nd.E`n<s?=u#ZG@20Li,vX;c+#6]_iqo^$jJ?dCSt;,OIAJ5*Df&Y*VKlwpJnRb7gk#E,e6K/?9kEs/###ts*=%UGj3xrWWSW,E^f55Djl5(_&QN$SfuQDxJLHNkZKZ`JNbw^'sLa6hC)9p8k8L6U,#P#_;C2j@J#L<7vkF>P%bJ`Jd6(o)mK0f;Gp>bc^s-.V/J/)Zfrp7K[a*K#<_cU8tqEF59-CnP/tLlnUnY(>##^kf#vXMd77Nr8bAo(u)O(u1Kp'9%+qRiKc`pYfXu+?],tc6W1gN&wcuH@oI:Efoa_ahn*F:F)N6c=mQ<3eLFDJR)AJhiRrQ_McP%dlQCW%b-b.rkg2tXLU)2.=FE#KZC&+u7+F`&X*EQbh6RVAdlGa%4I_41ADG);Ol(<ET5.Ls5TJup/$NS33B`/.(b1uA)uQ2vgT[>1WM-LF(Bv+[)f<r#NuN7FB?L3<X<O05wFZKVVnx4?,(mql.O%bq/Rh&GcZFVp64=VIH5jup-54vLhEjbXwBTm&MG@a#Rw&v6Guird/=&3Hi.4pVH^2vf9H+Mndx-L9v,E3kUk.C67/e#%1fOIIQ1%c6MwmJHZMG.b7R.2B:g]Op1[&e`>%/1;,P.qw;p.seNCfqRsQ`*?w4.LmK=-Eg2l)6A&H(#::FrdZV+6-NGBJ'e.N.q^=hR,:onD=lL1UDLX?e7sB+numDTWh#59cD,@NP%nBf`;x<IRGHZ`BMc69WJMcX/uOpCp+$uklTZrZkrP=l;hvGwTupO][)(5.6D@'`%*oOK;_Z@[Lf-C&b,Z4tLs0FlGkWfseq)'D@,@UKVk2A)'*1LC>TE)L0($xVmK9Vp5ID;QB8/#Poml/S:QnomEtvn'WNlJrcuB7q=6x&q%K*16tXQ-1$#7sVY#p-Zd'HNl0-sIj,(>?33M`9l*r.plXsVvd^si=1;2;[P+V2PQ5ZxI&(Kcwh;-]s7uuZ#XAkx7PZaGJ:*rkKjoFvfdXu@xp&8'`ioo/;8snc5wnsPUPKdk7n_o>1q-oLWMwtJl1%amFxJ)oiMwtX&9iu9Y1AVO^oweZ6`3VfO,eeT-3rm__LU?o*/Bu9=n77EV0MKgpaX7eLo5Hcd@YGbZU[**Axm<&&Nbuf2/42&>P.UAvQ,oawoweem_Sr@ibm%G^'An8+1.n*gNL,Dbq:tbhZ]cvqrZ9-e'#Xi,/qK$o%3t<d'>V5HQ'eXpIOpH)6G2ZV?U3+nKftG%Y#MD)BEUUg<eq]QppM3f.@sYb0`#8cWtp^khZF4xBOjq,2l1g0DGs1%evh%J2Om8*C-_(dSxqj8Lgpe[r7oXCoknu&<(,B(3Yp-`A2%4+e_a`r1tC=W^c%GIrda_A2Yl[r4Y#2o*M&CZYR71k^JEmP,5vm^<i';X,utp1;cug1iatsxtq$P`>Ti%L@,v7SL@ev^p$1bVdZKLX#E^_Jx/u>r9JSWGD%'j5x9ATi9#:H&ERquruEthgB^*=2h-$f04m'o8c2tqL:1%fUiMg+NMFrtg5k`-(Gr@m3m5(avbhf:>E,ZGS/kfl<EX]VhGxrJg;:l3C89VdC-KqJ38]35Fp:k=mZ:n&?90A<jm=F7<l6u8=A2#g+b+#35*bulb51G5P@05+ue@S9iQYGL8i#R1_?atI8DN.389-_WZ`a6cM+^7GU]%+xK(uuFxGDGjXBiMT9g[aFtf#Qi_of/63+vkvS6dU(sZJtHoksQ>0(VZ-nOmuPtuLKqJiq/]m8hj3h7>luc_6TM[m_`Kb`,t^'K^#q91NtFKvJa+1s*qUqmJpJ<m@J[BCFi8lpmWLWPiK;mAW;RwvAml`')LZ&$IPjpw#L1^Ax9iWj&m`9/`ajmUkX@/=sAPq9Q[I-2/1'eVrHHTabj$9C5vU&6uOBonsqg:/Gur_&iS&3;lA<rF8LIdo_1m,Xu#:KXSk0ljcudlU9JZjv<?QSY+5ee(_sHK3oR/h0[sIkh)r&:jdZjww_#1K:8ujGaCDiC'r$EhR`rsoh8vBSZvK34#a5dFq_C,mu/pTD+X#5l[]X$jp&tZ3Z_rUXF@3jsF7vY9(W8#Y[1v-Irfs-N(.prO<wX(k=uu'Ib#(c9Ufu(@L((_A=,1jdu%+h3'ErWlt^A?a-1v`3E$Gj?$%)F*?DK0TujYrF'J&]7d98Lv&#Q-GfA+#+2M9QiM,qr/)ai3q+E?>YRHVM7aL.&/),$JAFDOHh[<un&t46i^]sdmAAG1-sHgiTI#rmZw6Zg]pS)n+^#`<iVtfAdhl;Kjw)5vq)C%tL#@$rMX^'1?WswOKH/NV0_(Wt+@aSt<OK0-%M95OY-)L7AB34L17Blf+qxvK]D9E7IQUTZ8</X7U/g:6<rI,(?`'hPd+awXh9'k4El`4v&i+nK.vNekP,h.%.$f4<)VweUTp%R%6nBFrE+rfap^?%u&c_/<-c#0t=jA4s=eY=l%;_d-N0Y,q_l0c`=&a96FXlCMf&(hUnQ1q4Uq$mfHhJ$KN84`<#4owt5^IhI7x^xX@EZfq?_vH,R2.uX&,5>#siK^sck7QV:PWiB%GJ@2na(fq2xS(v;K/@OD2=_ETe:NtaSO2^^lPrfA9UfuPZLm<+wZro=J3%v:ol*`hj%_O)2_T9AfE9ZH$vj<u*F^c^^taA#YK5QKY=Am>dhouL$/X#EbVBAZ'4PuDsnwt'IT-^rnZG`G>$/(bVd,q3iYqJa>mj:H=gfEaUaqdTH9^?b]N_-g(aGnVcpHr(nqEr:8,`jP$_R7lrwA]O36FU=88=Zod7S7*%;Ji$UCru;hEK`Sf]>a#9o5v/.Do%bVb:dA#@tY2gnLAXP_Ac^@rQ38iIesIY]s5YHZmamenH%#m4Ut5Uwp`#LF(uCl1tZhsJ<rTa[(+s`p5al.-T=pKFB][jQS7[[*C#vq*GMCr)$#`;1ukZ/UEk#^hXY3>V.?sZ[)'rX^nP$:,[^vno]fNL&KVfcL(q]-/wbhoRk5fP=Xus)eCHR5oQ[=%<w2;NdluH,mEQ?4nmWRjHq?omX.(I&EU*#ZB)J'c*pKbIgVJ-Q_u5A2ND[&d]l_+`iwkHOt2Vqik;rFmYbVVJrbucQEk_'YgZa`i3hrWpTNkIuq.tI,bsu;'&Ler&P9L,0*7]N>bBL'x%]5EujE%CS2MII5.+rZ'TloB-gZf@1^j][m_D,X;/o[viCV/53-%`NOfeLm;]5ZDZk/2^%%ZeA9=@tkK5<V>wZ7u>cp'LoF@4s_mP(#C;)vTG71E2rADf_6bGXu.cK:tPHeot*jTCaZXe,q:,7_cX(@'#u%mT2`0)(V%[Y,q,''2_8$$Xp]=g,72;p3d-gqakl8-,qI`xEAITp]W.1[wtISCU*i?Co.<i]#EVAAXuTJFpqUPBHdb2D]sj-#:t>>C&#w[ppncmf8tTM1qmmVSfumHS^oWb5N+ZIYXlh7OTrGb=05ZTE[UaJi,q%>heud>+6<a1s,t8654?-0im<L1Ht6tI.%hH?(>5_4bifB%hJksk)KuQQ/d4_86%s)-*&L-6eHm(lS1OuFtF`OMY_)H4L'f.]sou8oKe57jOb^4Sf-m`,mftsZ1(vO0[?rP=.=)>*Kmu-`@xtEa6GrlB,]k,Go-udY-e-_5bBa2<<<-pBPxOi7?,Uij]RIV;*/vbP(c7Mt]hJ6xLb`v@xigsCb#9.&7W/sW<sK]<5XP7N=5tlD4H7A-IIap0%VU^55JrRX*+t9wG`5%?oAndIVFBg'qR%IEto*OBDnO*^MJ$n$bX3-v`I1L*u2k<VxqmPM#NDWwmZu6beRJe#hhfrMM`*h5u:Q?bG^*BTs(RXE?p,,?h[ac65_`+kM.Sec95Vnr2?/p(-&v_RvqH[1Iu$`]kar?Wpg17t^rk?sV.C:O9.Le<mP/6R&9MZ[-_sD3.A2@jSNnK9@U/8B_VcPo#MuJgFe.X3(KcV_lW,Nj]xF:jfSuepF2t]Hf$bSj,PfWo'h/f<9luJbFY^EAMLK/O<kuh&VlqniNV#K+OmeAIu,v8I6=uXN09#6O9WufFqe/@4hcu/#k8v*[mBS<W$uK(5j%tgQnUaNxC+L%b:=aEV<%#h#Yo)rfb^tF2YIqP_BO#cOCiK6c4_s#gLY5C2Z?@C`U9vn3jAgK4BF$_x4*R%ZthS[=U=uax:O[s$K8$o[+:u$vrQ3QT;(vvar,v(.hRu0YF<U8L*P8qqq;0>/0nKA?lsuP#,tdEBw%q;P`IUTp/*sxa>-LE_K[hEDQCn/>U0,p,9&sj>hI1)j%eu5Yp4J?<$nN;bTw$+leu,RHX._WHn=-k4j<Y<(Gkb/qDI/GVF(#x&*GDS82*6&n+S[Vu7$#w_UwZ;^KJf9*d'fo*4;u6LZF:@&AS79kMFpMr9hkJa/S%:%vX?.Lj_j,C`Wth`xc%?,XnKCABDl8L2x+r`,Wblr+UNj)$Bs]GWWV^<iwkncj/#I5_4@P[2:[S+>:Qg7K=Ui.f1_-URsn)^;5sQHBOiB9NtT$TuKKgMZQe*+j[EnDtA-tF6R7G#YqmPGWd-ucvrqm7`CWburhAPG*c`AGqfYYc@cu^6k0nSE*P<k-%VdGuJtkW'N^KEfkLKC.%?7uXd>7)%]FuGLb)k4?j'LQpaiBIA:-C'VevK1FuvoYbmkJTV#+[j3<(a(To%kC483v4xV-q'*eI_M9JPu^YrP//Evh%v3#]kJ5VRtu^TaM9tj4o&4X*@[S#j](U1_s:0Y?i5&$NIZp3uuq&I%<=LUXuVxcLKLr$Q.s'=vJi2B-glfKx3@>1G;:B`wXM]_u't>`WUmO(x,Rcol8R_7dum%BXA)+N:v/,HZjq7X)>a[nuKxg>aSnQR:v6SK.L%^pWZUY0H[=3mM%#o*tt'8buiNxQT7^K=^s1/0)-AfOJt<S,lJs^>>--[];2+%U<ab`q1-vEP%4FG-;%7PiPatLwVCiJttkQHb0j5GdVR`[bWLih];JQJmWm1jSr-SJ_.LR(2.fMen.Hn<>Ip4-WoHGOhI5d29GMN_P`3]]82d[xH(s]b>N?_w/SRbeB4[fEi6vbH@Z3x'1u,7ho[oYGCLlx,I@2j51GMX<4=]3PJGNdd'#XvitXV^59:uA5nP'Z[]J[_/jk/DB?U[7+Solv#=X74wrW1VkBHt.'W.-S`Qwku9>A79$a>J(vK[3h5-=iZS^3*T`97Ku+Qa1BsXsi3e_RdU?xUFLotH7gw$t7,v&9Qg#CrUm`)2vKKG@JuWW1bUjh_jhcM77vvZYag%1D<_JeI_Z$]hIv?&5u?9K+iVBqrkWn%+Jls2*6Zwq19@xY*B?Oh[&eA=tk`*B0#(#wULs/j[XUrejsI_g>7dK'Wu5(o&I(@fLK,`gQn>b?guHL$+c44Qbfbc6hKD@u1q3VBrt&xHk^SnUun>&7.C,tj,(iqv2Q%]kb`fC7tJ:V34ncZ*=72+38t/>6CsW_;:4>joK>_AM(D?5Vvk;A,g]8`H`W[jh,vEPUlAdv@YKqSZifUp]LB:bv77HPVf&*vSruXL?Ra`34Qo@sUOl4p4@Mb/P8ujU`5(kK?6sY2K(qdKI=aZ'?Q%&,Q$-GKuirLTDW-[CYg^:*=6WiDI4&o_8=<m3lG-sEutdW)?^RbC$drv3,$BFRa@<Qic)HvRT)^rhR%vpq<R.fZgU#5k3'sU6B`&-Yjdr@fi>?<1f-v/Em[Wk?n4vZ,$mie44]upG#ajoUkWPXnctN%Z4ieDv18&NkJS%RW')v?XlSfI=?ZuR_]f)2m,G2'xgtL-0<lJ4>PV([+FxkTc#Z$r]uT2[,#wfJmhNtoa]nI+UWPpkWGxX4xR.GI%4lUI:#i=@N0SIRltb;rFbkJ)QYv$n9>a`kd+Ta75ZN<T$H`t+eCoQ?WAA_p7M(tAv=fuWO]-(8VY0(s(8FDQklB6QI`X>+jbL9:?l^j*J%GqTEE0ntCfsM0kl9u(s@9MLTd<7d29:2,;(Safl7R%8CAw'L^F@a_%PFrOI1iqY<fknLt?MKc'tLKsFLlKi;d**Ux<;JI0vgqkG8xNqUB96=O<9VG1E2i>EWQICQ2/Csjel/jd(5vVfO@pUENK7o[+-5'VcR<<P1B2Iq.AcV'ECrSl?4-$T,VruA[:ZY91Mm-D,]u89[8v9HC0L]%L^sX=P=u<FP&7gRQmk[V9RslalRRw4>mrdk84I+U1_sT=,B1E3S:v_cCIJ:g&%CeHnDr7ZU)d<BnSu>9/02NA0r'$`-c;M0L8$p_V-(7Q<Je;R*sf=^Ya6/Y&auCg%_s/Y3cM+5=4OPKI]s/wCSA/G2>5j;==<RFb/lW8@-^e9K/]F9?6(m[lnKsDMo$s:X1g<#<8$r0d5(Ghieqp/bcK)ZdW_3'D0,F*@Ot&GdOt<o;)s28ZruI,BjjC&1T@[fI8$=]Fvqj>G@Cv<wT753#bK;,h/n2Zk2aE^Ar$>k<LsR<m(<muKftk0@'`f7IG<'M&JV2+6&r(_&sHXPF/aw2k]buSI9-KqG%.J*=+U;>Mgp&]eU/5%CM0%Z>a<===.>'mH[kL?'kl9OC6-?pJWO+YIuKZi'&hm#w?Jd?S>7cdk>.rI<<UPT1V;w23Bam@5(vc<;/aidX_sgHDLuP[*j]]QvcbvLFr6u[oh%<cn%vXH9#=(>G3M?MmwklZYtcB'uwKX8#Q67LQBoN=.?gu'&5uMT@-?h=ZGZB'9N7>w80sO;Bjs-[t:Ai_]:usEK^jT*28$Yv5w9Wh^[u&p^]3Y-H+tUt0QA>ig,qJ'-O'HstWu%^K^sP5V'&^p'Sa[.c:QG*eZK&W=1ERDI[3FnPQa63FVHF2;.L%#3l=xjbtcvN'<qk@P4&/*:6vue94-xDWmQ]kL7Qm#8$#*+2uu/Bsdtf/t5VT_'P]<5^@'1]tLKc@D1S4m-A4Cr)-tZou;ue)&=Y2[Al&7I89VkX;8teolGm1C+n*q@*v6Hltj]ddu0G&31JBnoC-(mjV38KLfCarmRF08jFf:(d<u^=2owt6;TAVhmIBtxD]2DL:+/'@s3kAw.d1KW]h-(.L?qkq]Aefk+:GRn&k#,SKCvsE>ZR%3fiuA0#'Mu*br(]]-W9RabZR%inusq2/d5-DMT:uPWwO7o#G--;g=kQL=JRuO6&S7xh4:#^'aIQD8hFM$r><?F7tq=INH$-jcJwt0sPxX<cR^al/)Zk+lr1B4l;tpJ.agHwZ0sug-p-/Fx'20#c7*Ik3.tGDT`;8Ex*wlpSq[9ptV@t+W15mH8]1vwl<n$Z+OTrjNoshQ2bTK9hg7[OunkXhH0Ca%meh&(d+JtwTjkoi.@xE^2v.uIRW-j/#IBN'5rE$H6*ubq%5Pq0M9qtZ'0$bRI_[rounCaEKX2U#-H:6_[_n=+7JB%l<I?FniX'_3ZRa/Ia8*uoZZ(CEECnkrxvwsr_$5I#xGoKg6q3dd?$$/4<aS`Sk0MOs0#6df[]1Keo-/WFbqXhf=M4#BQu&7vqoX<^oq#Gxf`-#0wTbXWR#?,W]/:-'uTxL$F;1'Cb>QeR>CDpg>c)C@h*Z7NZ?4qG6Mx+Rkg^sUm'gfpe()(L-[,qBJjh>u-*rH4`c%u)RNYd?P@l8NM'e+ZV:suGIl&a@#`vkn/E-$PW2xDV)qVt*+<r_0+%4JlkaLUDT&_s6;An/&kKS7M-aK7oSMS7eGv6v3tSbat'mqF'r7Ig)wL?uh;90t<*itMt_?6NrK[p77*$M7;R.fh%j@ul,6ZhcQWf1'=fXVJiGt=GFk`nrL(9_jJ>MMs@<#H?n*^Hn6QFZtOcs`_$sB*o$.M:vL+7B%tgUHH*qR*(k,cx=eSb-v5c(65$K9@iwhTbpgWF*6&%1]3@RWh[^AmYeI<@h6]RGHhH2IErVp8oi85Pn]XBtlBVx^YX5)$SIgJ^K*3A,@#qL(gA4(*j-9M&re##HK[6cJDn&sE>eOGwoi6E$)*ZBHmNuVAhpAF^O?:ncfu:HLclSSB,r4w/D)vTU6J[h2<reu:L,.l'BGge:x'^_4'rN(<_Nd-x'hFV3a'v.2(s+J`i_@Ww9.9Hw-oO22vKRT<M9slmw>tow*DiUW]ITPB8ur%OYL:`Ts/W3q<$LK[%LrKU.l<]E:9N8EDu-Rd;fggqUrIHUv%&?m)*//8,W-cjtGj(N-q/'Wu-XlRf/Td.skGH`u,7fpth`XELso$C2/1=ju,mLF<m_m,k'8qZ_W$N.Og<C_M#u?L<:7rk$V<73_sS+m4b/[xba^0n`]Zs[?^rFuMsa^Tsp]f'ppQ5+Yu)@INuZ:PJuV.EKpB.rnm08EareSHiKkrDQ%K<BUgo<$)*8b+*ePl>[aH.&m_8[&QM[hQL7&Kn^j`FP9$(9F<tt:4ONnkACK;LSpr.hMwtA;kW#lL@Jj/c?keE>F`<N-6_KWx46(mb:<u<H]FJm,W)[7>;qFE_MRu')*N2TNK+v'%Sr-9@6;VS2&UDhw`fICA3ZkT@T6TEq1/vQS=QeBK-;6''5sK=k=^sK5DZ<dTqQ3jI;;+pfJ9vNC(jPWsXfmbGw:ZNT::vsEc0-@fTg>;@q[<NjB5jHkUk`dCs+#nLN/v:wKsA=jq6vv-KTrs_xlq4;EMR:HDK=*uDlf_/9+(v[O%3q_4aITep9JP,sjl.Uox$xmCY,G5I]5QI]l45t0?pQ&88v2h*Ya^<J)Lk+nVqwuDbsk)M)sDtK3HG/):qVd@DuM@4o[Yq1B)9<c[ad&?D*Gf1ks/o-,0woxvuWwFXt)x,8.p3eqbb&SIGaI'tt*<D]u`=)4Q$e`,v3R@/N=ps9;mB9%XxZ:Qf.]PdKQqiw?LrEMt^]Afu3A07)nj'JUn@xq=etqBmM4ACkYQi;-98MUk,$Z%+K/R$rQY&x;^Fwvt3RP_fsfGHdFR(lo?b@e6GPlQI2KAAF:`,pcaZ+<UF^jjJoc[w`%Yk*vL'dYV3miN7I*,.q%g<Rgdk+YIo/:$BRlLejssjQ<Q-Ukf8q5Fr4m@[#50W<uRSAcsj#HDrm%PP%'U#;?<c+gN.]gFiN<5$Ure.1vHHAn8kGb:d7&8wtSs+ZaP8-inlNRKr<STUuXw1w?e]e7tovTncxl,ZeNk)xk)J(Ks3fm8vk_eup2<j;Pi3tLsOmYjuEv<[9_VKS%0J`*/QNm:r+N*km)Ym7Imv*$#IKNY-EN.;-`pQlAlt1aKDmx^a-B%.q+K$<&TF31v+u=M9herEtwH-.L0avYDwV/;Q=m.YGDu]<Xbi7SW2<ooS`>G4e.tj/v*#D-(tNd6v^[NucCHP.qSr^=nuJHg]GRIF_T8v.C/xHDV-$J07']3t>U,ofu9(UfudgJWP#1KE26>)H%/mIk'gr2ts>;VFn:JuJT0i8eJrd&?Dw;(B?er^XtIl6^u'XTF)jG#gAHp3USCDr3dc2kQufYJ/lNdsUm3LUGmrosDIWCi<uxTI`ui=?@c3xT=t>7x:Hf=$lt8r3nr^TP7eg<(ob8dNM(e<??K=CGBAvCwfl.=Z.7&fML[e=1CrvdO@t$vrUKphO1o,YQo?r[3qC]KURNrMT8a+lD$+1koi%Rm%dm>-g)a62/HV:>0Vrt/D,#'GV/P>X7EQ=xr6ev656Vmp4UtJJnjAGMuccvV,(#4Pa>W*+I0Dnf+$[8cFft4L2BTxKFs(nmmL;@SX*piOocY[&@wnVurg''^`UUrP^-IXgTRBHBqZjVN&$P&;I_s]sidU4mHZHaJm]?.99a-+iko6kXHZu0+r]R+Tm($Uw2m.#(_.rAXJpq#P3eY$U(:bVYED&(I7ebWwo>@7b'B[hC4(q2&)m3kPUI['X<6q`9l;8vd3&GgJL3L](I$uk=wYD4<$Uq0V1o,7G%k=Hc7L=mgd5BWwwT)6lj019;5#/UZH7r2KMr+[%nuAilU^ov4i6GvD[_:L3.19Fo5A4ADHvSc(h<_DM3wXURugNkJFc;xc_/U-bUGVdg4+L1WI<EAOFp<bqf9'jxX?p+N+>#0*Vnrh#BI#^6A%ubNlg;G]c>7N9/Ia2E;gE%S@a#9L/*-t0mBOCN=<1%[O(LDv4,HPn[1C*a:@p5NJmp[^/TsqPAVA1dH%BDA(JJDtl&98*v1Z/hu/V&0H?'QcJES=:FV4%2Q,m`:*1H;A*F[3[v;-`aE`V3(PsG?@ra#%`YL0mJJf_'bg8q&7DM.S,QY*'c]x8/O%BR.m&/;q-Gg;Mth=u)7Yf#N<*[,mS7FI*@;B%YTDRN]l[I#e.BwU+?*.WojDYnx7--H1>qwi^:;T/fwK2VbaO6%)Xi)?YV0notxx##c)sAQ]q'1M%t[uI8%>UnRke+/8c$UOo&q*A/t0u=PL$4tJ^4nsqF]L`[3c'$f3DPgGKLjG+2TrQ5+jHR]t_(_*_HQfoM`^Ie2ohIU4^j%Uur1+;1rHW.D39#ZSQuQpF7xrOv6=t,^P9R$498$&958.RC`o)`)m`alic3#7N4IDF4iHOJ]#DjDLV`2dvN]a4LAC&iptefe?<<1d6L6qBrcqX[XAe;`Sos52ASifJ%=7*`;gE(41^<V.T%LLCOIdqo#E3u#8E/NqbYGulHN#7FoMQJ2i+B#egWFVfw<mle<Zb`'bT-a+N+^a<EQNq;L_sp>m92bL;@0GJAIPu99L1+OoKamshW**9K<O75d[bKEoC.(o.k7v2-(H6LX&4QgpT%Nhm,sU2v)9bT-_$`O>@hAS>V[jeaYIlVq)roLY$2h6f?Bs..cq`K:ggfE--H+iYIHu[Z$Mu/_H8vsX7EC:M2uR$<e:Q[V*e6jN=@/*]aR7[)4=tc#=v/;O6'u+-$LkE/:](+VD4vLSPxF=ohRY%G[FV$9XAuIlQ7c0mRrk>dU*v0;AVa)n[5:X,Ibr7CGQ$%A?lAN<x0bUHr[5$3*OGJ<$&uDHU;o=*fFiIIg7vmgn'aS<]Kl+%awTk%+x=rh=f,,`Q=qMd-xk(j7Lt'->I,'`)GLk[:T5N32SI8lh/Vc80Bn^5ussmR<9m[n,ntw)?US[Y]quZ`nA?kgB`<@rkFVr6^_i')Uxk#&U(*&rCTY^K2D<#e^Ku?,*x&)enH6Twx:?$;[<rE%Js9D@0CGeXP]4Amh-8igHMIFDr@0Ye_)d[)xa)0Ski$f@AvHc4HS73v+UtX[8J<;0L#5vE/1f,vcT?t'G[/xf0p@(0ZcOXLtSP=K^S7''7m/xuX_`wEnjp0+O,<U6&(P6@F[pw2<s,F;.JI@xXnP&bdQ#Z./wtt(w1([hT[5)Lj-?eWp]-AH@AieV81fwK2>j(0UBfPD;)['lc3tC/7g(2(Yhla=0+<tC/3'<hQ['Wo;Eon0lY^V0NkC(o[hrB,:j0iMlJIC<o2WW16esd(qt-3_#$vqMkRQtIRQHi@d<(IG&:3mLd'vFFB&kt'/*?o1IZpm@#*L2(#s-R`pdL9+kB&1w&J6bAG-LDD7u]7W9Ln3<bB^23)ZqSp;-$*R-<^b?@Ra=Y`PES68c1b'07e$NIxbK4^pru^f8a8OC-67IiLFv)Qch[RAHqsl<9$Za0Easxn7rH7P6tJJ4R$?rTKcgoLpdoW(`S_GlO39'GLIM=pVt28kj#_j#Xhsi%,#:]-Udu2+:``XIXsC#+okN$abjsK'`lZ)4hk;A4jF`Ke1mFrcTIdJchIC0%<&P0.oI=#?`af0m9vEDcY<HSJCs;]J)GkgQIoCMjU@D2U_sm)04mAZx=#ta_M'Yo4BjMs92U^pS];pW&4n/,Ln+4D%^QZ1Y-l6/>:=hK2t?=RY*iY9Jlu333:'ON3htHLt*v&xoK,pF69vtLhOLPC.uXMQPA'Jxhv>(*h7-(Zl'v_=(ip@VYD`8IJZ1FcLfAs;XYu7c@?LNFJM@=v(/(0Ta*;L84>H8Uil&wlFRa9oXpmc)d,a3Bv1q>Fr7IJH&OpDZs,V:U#-h$AHpBkp7xDJG$.L#BTI^]9+_u^oOiuu$aUk;SUfNe7`mr3Mo/1Ee$vd`[$`s.N&c2XWn-Le4M?so8`L-,cb0%l.P_ai_^SubY-wfu&86Nfq0Q$)8tBrOf%ck1.a?k5[sQ%&6ph'eGD^jobP>^^Qj&@N4,1O*-;*VJWwdPT4(MM#fKYP8+Z>(.UE<sWZ[5G>F78pX:[9@3j:u&%sE*W=3Ihe530In3Aoc32+-(('tu=LCN;nKATLN'Q_k^E[^dKq']#daj=S6vP[,upsMxp;jKXW<uS82t6R%%4`Z.)u&U*Oe_+nw1fBTmuO2*(:K4^$?O'*G*h,]'q[6=anOVLFpEHIDR/Y046NW&2)Q0*CjfHBxllJ7FKm^VmK^&m8?/V;XZoO:Zpo)2B+<UF1LZl%E%cG)iQZHw]afQ3'Bhk8eu'l#]E9JsWsHb6e_)&]D`;?F(aPpe<hF-<#L@Os.C?-1;lFf1Q#?WJ[,lXa[$NZntIkb:21nA6S&ROViK_kC5I:3M9vX,*Vk<0odf35=[j^VpZb:/mFM#FUAd)HG+<x(XLVM&t_LA$Glk^C2MVg0GQe$Eb_/R1^&t;`25=Ns+Bssb@usXKSlA]Q`n#eT4ob20`8$VJ'Cj#2(wtj-VV]C7aOs)bwYod2D8vk>k7QhLuSKv`NXnf$Lk'Y_nvb0[K)GZ)h.Lj<$=YF@#1gGl)?k<d'S%Y^'ZsxvtNAT&;Zuv4HNsG#BB6bslga7ahT-2t(QJ6f5Mkd^nVmhv2sZlHA/f_uo9lK4Q.;97)bN`(79v1e&ppAmVoKFtDHqh^N]%iDpj&_Dhm))wlemo%::#[xm@^GrP?h?%S$55n_Sa7PpU?cUgl&O5(L1ArXHpZK9-LHv_-Z=fq8G=5?`<RbP(+ZeaspO6Bd4TaeeUwkfCiRo7:F@s/xTmKA;#5`7X`:TS_E9s;Qu9QC8vNs5H0^[P.Uj^rw6qLp*v-<md*vde;NNZkOI3Cwf__-VK&$X^X,QVkx4qwsX+7(]YDt)5A7UaKW-+KBG)MHa8r(4wv:wq]D*1'#`sqcWvuD)/JL4h51v57rnewU:@+(H<OSKwx@#@?LbIN-tikJ-`3L.spvnQ/9tZ*xn^706U_s_xr>2dsKSIgRw?3Sc?n.DB#*`8PT(9^0jb?Q,umK_C@>3w=8PuTN$4H:&b6v3D43$cQi`hd_9kFZCaImkbDTrX_##F%Mumn:%B3Gb14EVO-]ZTg[j6l5(/lXO?m7t]%p7N6/b&qKI9eFE/vuuq?S6vZ^W@^Lxwa1sJS/v8@#Fi?s/qmKD]ncJ,U`a;;q5`4Idi1CGEwV0H1:uj@54IQOP@=i2Q-NUh:h*w159I6=j9Q-`qZ767U#g_HR/rFOCK0rT_kXY]o%3L+K^s&M4U4f=^>kExs>%*%F76_g[7[r=38@I./U['T[u,gWRBD4Dl&)_-:X>v3vSKTNH4a3om#'i[EfK:]?,#=Xu7TlrK8L'NI(a@@B.VTPH+,g/1r;;1p6uLbV5lSq`<S60uoCfXLaex.phe/-nq>u5B6`CUCU*/9*a?a0Pl9)ZkHCKYw*D1=`)/9+B-37f@g,lqj6o7bwxt;_>#gR8ilU_tec78],C'nU;'3@MCAJVi>).>3$kSijh-_s*d=-'(ipm$N^>QE0n:4U2p1BN+?m<Fr%W2m#*YlqRH<Lwkp,HCdA362.CAbpT8Y#,P/mRXw-xF^KQhIlXd*hc-a_SD.jtuuq8wkc-OBPk#tJr]W.01gGFVdxow`$[D=lFJZhF8+[:(2&2aHVYH%sr3o;uFsp9&Cg#/5IK'Xsmcbt(<)uHPA),B#&2P7QCoEec+.cxh%nQVY3R3B#(<V0U@GxYw6WFhcA@ARtj*Kr,V%U7^JU__:J`3?5Y(NUMpZilW5jCq8B.fn.C<HfGG1]v<DPOw,-Z&P=pefj_sNg)Wu.:PS%ndb:aTQvbpQ`n#LE<V8&.^5N%.0>#v?OVuk)bG<YIXL(LK:?H#@F$&tB&d=%?MMU/Ifs,HS9pE`HWomsgu;aFEKYorf722qi<D_.eg`0abbvsFS</>lH&(iocQF2v19`b7M+jStK.e;QhpYg7#1Sg9t9Xco0S`XHE,fB(r&lR*i#=@kT^K8uJN[hk'7c;d(`*%XakB5k29D;AQ`_AVhQS=NJ0e4uIkj)A2mc)v(saC<L^&>$ql/pI_n[.aKA#7%2t(M%#Sq3?NNMrr8Y?Q%+?1Q';LsQ+$J2mfHCM9v@uBFM987(?korJu%GVbl8YUX2Nn4l4Z@d[Zjpd@`LGEtuG;rmR[>cmXXJLbt2Bo52+-x/J(VLeNnk46Bep'KGw6-aK&b[*&-XB6twfXLK2%*@aR8b<S?&lG+jxZ59*fd,L](_BWDwK.[%+qPObQ-*o&8dbPP+5iA[n$@b/Pb-pD_+%T1iK:2.R_Wu#Sv@b0&S(KW9b5XCYn6l^iDP/Riw3?c;om%:-4QX`>jBL]fU@aA8I#kF;lm)-h;qRq.0Ch:Bd?trlgfk](U.U]hu8io_8%v7heM-_=VW>C@sVB@*RTGv2s#&2.gYT6&Ph,;>9[a4_gTZeX2x8n)6#f;/9qaWnF;fBMCdcS^Cul,(OGu:l7SCOS^.hfAn,('s.<@vhq:$WfE(a.`UIjPX)#_%Ac##@0K]Lf+.n@(mmDrQ`*S6>*wYS#oqsUNTpoK1:)+6YbXREW[Nef<RtvsIn]pr^c_Miebv4(p$8=[[iS+VCc&-QD^iGi9hLYnkF@IGsG@_hQfF-LoT<mdKXA]pBWF*784@NX@VW4ffS?+OM(lrN$Q_B1V-8d5n7XX5)Nu0st#QkntDOE%'=;ja1ll4,a%5K1?Pl*&Kr(#L4,3`22Xj^3<l7.L<B_t3+.]mI8JIP_MpaiXTgA[L=qLL(6%Sh8A(t([bwX0?R:hKE/(rLeR`$4]L)gd16e=3H5m-k;:D+7'Z5KBTN<s5Hk@l;*^`kpi)8Da)beWE.vAoWnbW)Fs+)g9sNaXkkMdLM7h;ocJv%Z8&`=F9v(%FJpjZ8u'=I30unuV,WRPNhgmcf%=E#aH?u__LJY?vg#[?lFu=tBag8aH#if1nKH/iZ+u7cotu9,d,LYB7=d^t;T'KW.a%F)Bf'bT=jDVa,U6<j?cVYMN7vA@aor/Hv.,t-ExL..P((^I=^a)j#gCwudbtH>2o/hiE#qjeFGHO<`4vc==d#[De3tD1OfogueJ9bI$Z[;>J)vP3=omZMdo6w&(3v;1b(vhcfOnd)rN(J`j7ngi%.aR$g`dj[e+DH;oUG$k<(KosFmu&dqQ4-pR)lODJ9D4xc-Q-2gi8NSWdpNqE8A>34IifVBh*o-gUqCa,I^75];iUcw8Y$doOJ7R?Ul(+CFt-c6ZVgmo_ailCQs>WcSInQG=388W$Bx3o1`vtfOj5U`1G?KI9NTKhN%7Ys$?`Na->_&LT15/Eu45eFYcf`9QejCZ&m%.`1VnC0t#svo=Wh'=C`jAQ@JKo,tks$^e#,K<@j86AO/k9^'U[^CCV'nBdUvi2T_s^aOH>B8F'2gY/bge5U_Gcxk]JG`4*72rrIWQ2%IX/up%vpNp/=g]v/=M6piC:'kfGvasQ.C.10<6p1iGO(8?I=Ght1GXRMxYX0Fv<fL,EVA`U@1J7L<^dx,?m%cMrX&;5m5wh0,4NV+Ct;2GCogM$of&(Z>MXK^s<`4u#bGhe,pbJa,kd#kL>a6vn=]vSg&R>+;,A<c-#JL)k;]ucHBV(N_7d]k4EYSRGXqkf6D'&LK.E-q+<?]7kS;0G&+'.LGl&&K5LBVasteq1ZHMYlrg0nRc#f:d`jC@Ln1TAt,:_)`KCZ:7BH:F2(ixFV8sHJn5+Qrij<7I<DaNM7^ImF`it=:vSv%_N.=n1?+?&H4#Hj*X/bN>p>Yk50u^:$s&g1e?)-qsL,80;pcu@O1KiPm61p,sfXxj7.:F#6-X3=bE1@`nSJql3>w4%'G:c<q6B9kcCfX.3(gQDxk#ilr<go;8<xu>NUeXa[#LEQX0:wC77O-_u`]ki+(0ZT%GRdhJ<9m%7NL<SS4(XSjKi`/mr=A&9%q)?$5>f%>G[K1sd*CxE[6]HVtAmA@P,@Ou=Xj()E1TIAt,4mNK:ZvB9'v]/q8itQuUm?cVRr*U2GuoCs>NP.L*t3Bjl;wo7YgCM0w5CnW+$,.LmU`n4?Q3ktPN`tstQlu2jLq'*&m-(PJfx9v%&)QiFgiRa^:UEK)ff)BtNBhV-KRLkF3&Ca<2Gl4TIxQ*OMIukt^Nj+91?w>qXe[LQPc0@eWm7(5;bP-a?EJV3h`xAe7jkKgs/RF<A]&+FZ)p88)O)G[4)ku%vbjk@VIYP=CqI^*IN7&O3)o7bVQs^Owl]+?:*Wqu:/'2pnN2vewxVCH/=q>)rKc;uscCQdv&u%d8qqqOY8[RJnrgcQD)96Y=P7r]#E?Juj1M%1C)8pnT)xbZ.Neq1CMnF[(hKIZ3B<M#wQKE3D1nk-Qet=[u1CalsE)giI8X&s+lQK[N)XDKDua__wd'FAvAbtlvM20M%DpLcaOr?uVusHwMst;'lsv0VuhrQxViFuE6TqFrNw?03nnj1IMwJqordZ-kYG%JrhK@ufY@(a-Hg6n1V7ZNiK$4;e.6$K9dgX62eW*2<Ss0(sGNtmx,x^fY8G?E6,dHlgSS;JmGnF1<SlA8:3]&(hc-?r-XwWLTv/##VK@vkUkl1#V(k:_B#4&.GIxwq]OeDc#h'97T-9wY>B-Gu5Euk&*[`##..:bJCa;i%elbdm+&reTH.]V6;etvkY4+ht/GGDn[3P;7A[2`adN/dKX3Wcb^E@[Y7L0;$Cn)xtf,FFMGI`&InRw9SX;?_*2K,W[]x'3uvx;8tYfOhkp092a`_/ATt:p^`D@gXdO77riWs6xt)^Dfr32m++$_EXPb[3][:o1*v'-i'Lj5uKg;JAigDI*0K%Mlx)]+Ej2;a4S-bB:J_2C`4d1>bRm:@[8v3^bMDS5@05KZoDVbhDW$(0Z5:u]c35TbfV<B[e-L'+Iu4^6X@5u`8G;-evhS%m>vp^NLrCNO/-qbH'iaWSJd#$t>S@e_6$BCbu]QfZ9sd8k28H5x9GN&t4L1A04HoE;/'8tk:n&F5`k8[(e+ur_%`$oO<vJB)vw=-M1xW?&eDKQatSVu2NH$[1`pd(JC.PS*/^XiwmO$H<TB#sG5'u>tMK]b3)(rUX>fknxUvLLEV+rRtZ`(pldoNKur`uuLeN]a-aa?YbU.LLG0+vMjOgK&rqmR<*.,Wvevx>,N&*md6fS9.4^[=F/s_aX.Ikc^iISfbd&VZ^:d@lY.%ZJc(c%'JYl>)okuu8'riA>NSx@3N]d4vv9#L)`5@Z%B5.?S._;qpgX4BaW^Ti$eLaL%l0:?^ma`sol`ib)3h^N&4Zq0gTOe*,44=Fb:WGqGkS>$Zm[4`>wBEmJ8*$rAo'xaK'u77Lx&[4U[$hBu-Kp&1H3S,5:W7;6=dh_s-x)1-j6,:<p-k$LJA3-Z%2$H0J7%'t1svUUScP2m+D#Z`<e+kfVcgcUNF/ao6J3KZ3o)kf]SmOlMJ`fc?ev2U##7pTNTD&Tc(dMspj$kfr&.75MZgY?B3u:QkpY9;&K5548:Lbuu*+Ku%0`7.feudOLOP^o>X3+D7194mkRS%m.[GFUmOw=X$K?vp0Lanm]QL:DYkIa)-&H>0CCHYWI:*g0m(:0#TPMe<qvD%s*g()_5.[fJ6]k#`0Q=5iE).YOeaPAk7V6P/']LBLD#W5iX2A<cY-UA,pjxc$c8nsLE9PFBno43aZmjPLZ?N.$pRkT;]jjh=dVgnD:(f-v(qIlA?CbJtBwx5-+*K1oQCfdsO<tFV@:oup*rG9Hc%lV7h9m3o+cr9tMX2UK4jM^t]-E^aO*LC(>T(IqZj06r8_uvtqZlt'aI+#7/Qrgul$7/QN,]hk)OvFp4@aOpZS+9vBilsXmN?,$^1&;,RfkZZ;f_J4D%j_3<Yj$WZ#;:H=kg=SfxNuMfQH.]_WK0iMWgXcA**lE[CASl_#U2HiCMOL,_S&LUIbxu7vRA'x##mR*RK0reZJ#L$GfWs8])@#Pl$8A[&lVL568A$SZAU.R2YGLh<JI+2cLV5==7OZcHcD>D@?@Do'_N4oGt)7Ht_Cipg('iLK;E7@$Nj2ax5TKt5%:veWK-LHO/AK$+wQ*^6*.mvJ=Pp`J,,L8;Z&U?d-2]tjA9v@roO#Ff_nFTh6WfrXDSK0AK[@sfO](#6S$v6H-3IO4u;p5N#l=[axcu'1OpG1b$L)Xpg,qd'q>]oe)S'xEG&a8mEQ`n8p?rj,;D*R4`(qTAnAH&Q_.Qgv2_#=0u3PAO3]$:r?3/a`&`emrJK-(C]'bZ9xQcT9L$+8CsD8(P(aqlbA)Ed=,EILpOSLU`MYsf/lv(t#/wTFI#>(]QCaKQN:SV`SI%Gtk?kYL3-EIf'Mjp<Cg$(1JJ==lV+b.uRUX3>Ow^-xrMTbK]qvqu(+<0m2um2Pp#1TbSW<>q5X)Q#:S`rQqWCNWi,wbm*F'(sM.QI&%glqogcZ#X4>Y[4a$hZ+)w;Bh7)H]SK*Mt7+'=i#Xs$Z&)w4COUlsfh_43_Q-Y1J8GGi_%Z4*vV?3]%@O@.ipRVQ0Emct]>E2uFI.t(ET#F)f,V9Y*hcO57)]-T7XT[HZB*lc=U04CWE.MjM^?tZ9vY9E`:c.sea^6MJ'fkfn4=^8G-Aq7a6W5Z0c=*Y_=YHd7J%ZeCsP^.U_F#E>F=mcT_*$ANHuXO0?p*g@?Mdk^fl(4A9Ivh9wht#V<1;Cr03J&lQ;/KLL/;mUe*0-qWrgINih?`'WI^TN3bv:lqO%cKnsWj)A(a5Nm54Y=v]1Uu?_:&f,$=[-/WcI,CZQuP)dEFe8oSVG7gg[2lPq,q.hE(aD#G*q%w%JuB;n58?^URmx$d2RvpX`uHtG0uJ@CLI)r&oe=k_7v_f/4Hx&FVfQ/#B6W#]f7XlTtm-Xsq?QuT%-Fd%*6r>Y5morX.UE_/1vSKK$U64]HA+ql-vnA47,V5)@V7qUMgBSi:?roG1u(aCxkI0S5v;PU:$:9gX='W2]lnZ&?5FJdY>-ww0.C2S`3tDPY69rD46?VWHQUH#+^YrAjtpvH>`ZU:,dVTt+i+9&?UE96>6U/k.l*nM-*/=ibNNEPb&F]_-L*3/Cgv*DLlF$lsj`F62i[79a7:n-0sGEWbL+A/_1Hk,&_FH4jbloMMsem(/tA1a4`f_=%OwV=QqH1k-Ta++B+7[6Z@tBo:QD#e2F)W-R9rJDh%;2kr-heq3aj%o';uthQ@_?453-Rl=dA).Z):5HuWo<;=?PH4L-/^ICM59b2'mtG=tH6OV-6V'.@@=P1Sdl]u'>iPa5uR>KXRKK,Wwn7S71CaBn#[$2(FbOj)I(G<GFuxE_//?/sc(dZKHUw%3YELYk0/cU$OZ&om-'GbFh_:HtGDD'l_@6),C+2jnCDHnTKHsS+2.I*Kn'e;CqT.MimoVJSlvroF$>YXESo)nMEZC,3G_`3;[Db5?&E]$n7l[1VsHn&,3mo;RnP&au&$Tb9+.R@prnO_frbanq^Uw/s?i=(aOOehJ;IQsE.`0P%i]bOpfMlMJ?Uhh^4t#90uMO'bowcUk[#gGclF,4n7;Wp4`x<j<bDdXQq^M:&*-Ka.Zb?OZXvHf[Y>kgefq1FmaeF%K<E.R-[XgMIe^]vBZ+`KZvQq2FSsh1jW<?W_jeVd[2[rkov:E(aO..[@*sq/&Z?8$r<bl1,PP*u;?i?1?Xno$;U,-9,%8nik*vGVtE^Zmm;R-Crx'N#LaW`&&)ao@O_Xb1o&sHF0lThcb@deqGG2e;q9swduawo6@ge>_#i<Fw7<R%SMad1A42N(Yjm52ra/>T27Sk0Xj4=*%g8wXWnXk>C#x]LJ(ccT_DqR(]#RjuXNaa;K^k^biVwp2c'>I4=+4WPArf8KuGTdA,Ec['-@NIO7:HBr35me?S3OI6>rQ<bw7JLMF[.P+'m@IHn8CmlIo<,66_;]bfU>a83d&XEl]12c-@=@J*;*an<,4bGXVx2<cf-7A@4kW8I]c=6e$QauwDnV,5o4:qtPw:aFiG4a_sm1<h(9fG;$8iZ._gnhEa5b=RLpd47cE4oJhZRcBVoiiLBjND2:l,D(N7-Evk.Ob_NpOchGY4i^o@@Hxbfx#r6m%c0-UMaotxG4't2(+Q76vUiKI-?(riAn9-uhkP2H?9R%'UVHJGB8lo`<B0KE5_g9.uk09W]`YP9B#j1c7sj5DQkjQs,ePDjeDID?V9>&%PPvG&Os?QM<>sII=sj*a>'s6f[Prjir@`EhvK:Bl^8/$3r#EEv/WIeG-tQ#if'ef)(pa%%=441fKA$v&Y+L4+j+YlYC'$`J=s_aa7N0etD62]w*a,.,:gcUT(KnFe&7A&0YoUuf<;>,r&20$(be*dxZ]%b#Vo7u>?]7692KB]RfUaf+D<p(3v)@UIIq68NKRER<7A>c0.H(46uv$PSp3:vv#L<ga>D#;Jn`1'Pepc&ELJ:N;]HGbubGP5bl,h,r)N_scn%%hGHTmnsggb1Ot,&k@;<HpN^H7a8D/]heo+4Hx[ad=T%1*$Dxb4@Y&q>?7Vn$#4BVN1`hSds.fQO9h=fSlt&ME;(5,bb(dE'`atW-P;mG[ZXRL5J7c_?$Q/1P10Gm[)HHbV5jpM9_<)o@ZE3o%r@ZTB$`Nqx@EPj&Yr%%T2Dv24#2/Un]3H]DltNJ#(U2w1g_;]X&FYq((t>)Rb@%(k66LR%rPu-3vjl-mLaMpW%'J;'K-aPp)+'R6b&%-*tQ3J,rxic%an+H._]BsoMYVn]V[?-xX/1E'vdN`BZbO(1e/CoE(5=Rs=`5ep(h<tBX0F*`ED5)MT@pZ1rh10l3ik[45HM`4vSoa#r#&;n)-E;KWoMm3$Qv%gR17HC6_m-HMT/r_=YbHa3L1$C#OhlEkgVRuXbn0j`A//J;uBEml5ado#GYZVWXXYAh<`v0[T:)SI80j3+E0;EOO`m^G%i7tu)I8plv6H<K_%-0m82+qt3&_Fi@'*3gLM4<]CQYd&/0ND[)[um%(>4>0_M_Lg:A#dsQvf7nTc91L?KIhtl&cB-L`TO7^o($O`7'Ohs3WnSn3HG[<6;XH;Erw-t1s^u'siS&5FSGF`p$/3o#+Is<LlmX%t:,qLk&)ltl);,h$@fk#XFC<WlBZ3aUm<4C;?>7$N*rL%B2gLi>g:Z1]2(p@$[qdmUT>+?`%QrqF*M.@Aogms:]I)D]m_a<K0:uIPFhX<j#1tpn$=b9ns'h#;_o9O>_Nr^9kuZa,R9-0rf9Vfp'e6&cO66:&QMR<ALF2u:*kEW&k_sdTI[h1nD0rN(lH-^_R7Fa90[$Xa=Pp.8m;80gXZT5Fw9r%hk^qu`2R%77FDoB>27rs],f:PL;?F`L7F2tl?.L4kg]^CWh%$><xYOLCU.(4RgPf3gTrOt4LWu?9_vn]JF/u[Q?p#9j,_FM6@:K7Gswtrb*d`#ag#gOXWO[-u8xkE>?U7IOnoSCC2*r8rf9W4@CIbfHn$:L3E%t4mkF#&S03Y[$5e7h)&3.ZnK[gN.xV7sGK0h,sW[-ufIc5k]jV8*,m1HeM@cup*-tEluZAXo/D5L9dUaeK>Q3vokC+e,A76?]=E92)v[l8HJIBLn4-YEjQAI6x48*qv3UT[p3&aah%EQ1nak40V1l/:VratfeOh7c=3]Y0>>&k#=r('#p`7<&MxMrXM6Of`TYG2$u$2h%rtg0MX?-^nhKQWo9IVS@rWU9['G<uEY]]_c^?q'*sJ]Mrd@ug7o^p+1Pl2eIcA>>[$&0silSE+Sud@8K5Q)B6,:9V$X^_lfuFUc%&.DAq_T%5$Vpu[[cjjFsjhMMm/vw#'&&1G'pg@glXnNMUEOun%X5qA)bfQL?r-`0W^`VN%P[%4n%FsT__@h6P<R^)lWh#woZG_km]d1v=Dc29VD@U4IE3(:4ALs`;eU$'4GEA/[whl0bTJLKkpFefU.7D/9o>o^C)@FnTGVJx4F^cQL(R8J]>cr-&6[mU)@HfN&-3)Q*J_*-se:jgp.)MUGCF)OI8DM^ABP34jR(W_-:n$'^bvu]QEHS&Aci_]1q>s,tj]Z_WW+)rK5hT?fIc&/:WgEWu7L]XUhdG'hmv9Ykl[/.L<Snq6:4]sgFo5GKt][apkt:>lSk0R*)(U.ce)S-a?F+NmHt>%n<[i_02h_&tK2or_/=<jRGg##qnD)M':C2V5>Mik`&NbtH)9AOq,R1Z@9SU*)r3xHHbcg(.%^-aJZ0(sQC,RN7%u:E6eRWn&U&Bt8'6=/Gl7^;&Bjs%rvR*1XU&52sNZiLr:80wFK_5SaDFCL[qb*(-wghxf1c>dqwPm_g4plOnSK0gN.lB-LcxvFV#1g:5B*We/_THsATYR-(&+P:#*pp'rFjA]VfKO+VOfI)jR5GDnXuI52sa9ES5S+)u]dVlRD7*YsZG^9pun/ifiCbvYbdx5CP]l_a/-INf'M]f/HSLtn6C86UnQ-SSwdS:$VG)bk0H6:NFj]UD.g*+vQD$JubW#EZAwTOnt3cU%,Q<&dFIlidfRRx:mG&`j^C5d+mV02qZ`S-s^)PUleQd_uQ>N#(Be$Mu8RISm`.WlsN8Uo&rYtju5'-=@M==(6Xx(LTIQ<*d'n^+3k2D25sTjdFg-o+L6<>>a8i:%7JZCF+U[o%m($eqFo&[hICdN5v0BTRNb$Z@LOC3i]u`3a,pIWaJqAiw,Q)@:v?N%p9lvB<5BY<C-8*2S4nXIaJE:HhfUb,UN?nIUUWU?r>k.pg4bs5P;E8MatSTLQfVoXu]+f1w;-S#,S$sJKLIEKF-/iDZ0Uhs@IPNUe&W#,)G9,P#vDhr'<b4$]M>(n/&jT&@AkUrJDEnc=DwK>Qo;G7SnKBIF'Pa`<c_2;L#G)V_t?DJf)3^Uor1:>dO;Qr:*11-A2LajTij*B&*&EB=.q(xP@Un3ofE0YL?xR9OZlk0BM=vk=WF1FZS]=Ud&1J?'nGavFXFL15<+FB/2^U[OrG)3`aAZ)J,CT?lnoK-bK;ehXbh[ikLY*O_J:]/npTWI#)W=#k1?/D9#9FA(s0dM[p,&:DQ.Af>tOb0Me0p%0i5jPju?p3(3QbtKdGXDEa#P3x4k.*euctZXuK_b$V--uVT^v#uT?Uf`_S4T3JMM_r(t.h7OgTP*Fk3@JT1(:(4(5oWs@#G18bT##,H6ZGk8%s(VWB3_$m-8iMWd[NaXUm4S4<J<A`GaY`$[wf(r.7Ktj&YB#'qWN(un89t6I.]@5)x'l4(.1(F0iPiGCf3$Wbt1T#ZqHiIelIIOOO^$LHmU7/J4+2Ge&aujub?tVjZ?WN%ao9wu<IAL1@3XuP$t'bM>)0O?p&5=ql#5qgL35_cp<$sMrJ%LkR`*dY-X+-vX'vJgmTGb>O*lLGIvh9Yau4X;TGkaYA;^i7'/*>Hv+vjs?>V-ca@#)0:AG74V2]]8(U7tdMj#+H,i.2cB4)LvT'#xl-FP7r`9uEIKE;`[t@4TGx^j$bfw6:WanPKxFc_dpe/TBI_SsjZsMp'E#0qRr/HnXT'/m%YMl@.q>Se.bQ8-9va4tJ$UKTiJBB1e3JR7`AI9-lLZ+(1VB1^Na%pi<OgXcWTLl0deFlJ[H>aU-/V^Ko.&Ya]CN0JmIM1LUYW@dJKWb?x84DKnF/I?DP`OtFvRUTR<kmRv.]tptVR.:IW*unMeD>'SJ21)Go'mLamqx+N:d(h:3YGJlg&tA+?GWqIUepQ[uwSr`d0:J&6='S;kj)S`dYSjpd+S>6`Bvtd.ium&e.j_ShJx.QPB/bGY#8@3AXq33wGgAq,#,i:D167S/PUp(BG[Hx_[$vX$8$Qda`nm(iZ4q;Qg,J9RSf_M&l5sjg.CtqLc/;=2UtlKww(38u_oGwONg?cdYbrIHYN`ko`4uCMJaavgl-au@eCr_X+A)nO2f2Ec82GldNt1NrXkX3GOJ1oP2;?Vm^)&)Z&_eMItGV'$5a&VS8d7rZLB6Oe8F+.je'ZGPOFFYvu'alI*ne@PG;D6&>slcJaSUCq=^AM&3vNG4Z,m&<i9uYYs%3B+Gch7$j>7/urwoUHAH$-NnFiFc3?adsiOAf9:NRZIS[q(J=+D;:69-IUjgq^2I`N(MEfKsS2gk#*=b6?9^@LDENaECQ)Td.9j$k@$.kdKhvYqDIL^V3pDO2J,WL/Q4SYR@$`GINBhlENXCs?j^&_h6H.c+wwUArQu(e/[V$ns<32br?gUNcfshK$Ah?_s?(>DpA]K3mbP3k_7iveMI?q.a^AbYaH5#?&0-$Ze7hFl`J7>W,viqxs.@#m]d[';-5w[C1wQ30kkRGqChZIqCu5NI3&sJ@X7;WG>6b@NtUa1Z2eGbbQAWnwJC_'`IQVYN5'u`cYlNrBqGZp@rnZpcrpd/c(m96QC^w`>?Ggj%BJm@NM)AWp'qB%R/PPEE(w-H9^E&q+gxS`?Ivn%#2.5G>,8ja&d[AVwZ=^vkJ/VtHaV+f/_ui^LSDfI:m8.NG%]e:k/YVVPLZ.>.7Ic]JYoscGtmek=K[4;6Nf/E7BZIp*9EnUa,cJEeB[X]-v:2F5IjThuQ8)rUG3?0E6EtF'g?N/^([w>Lte5,ha[)05Ao=4A+Dj6;rwi(o6g*CM.@6KUnB&xNLn%vatv<sOAT/^=tYLsY(CO@.N]3;e<=gG68uf`XP>Q<SRVLOh]N=vDR[w=sfMo4wlq5>En/P#oc2>5@nxZbeqS0+%bqLqEk_0Tif&8Gr$_H^*s7seiaSsSFt2?P@b'gMNfkf@61b]K=f:CQ6Vhg2747VG^X&DU3Z:MHo[lLbTVqMf,$k9=*Ec(<@tP?IermEYED.L3.gUOO3ercRHjExdGO[F^Z^9^L3vt71+IZB[Va7$KcLL=xKdL(XTG)KKqpnYjk;p:uMYr2.#&kax+FJ/gWX*A`^hd.+9V>)0U$9[d]H,16F@E/6FM2aWJ2T&$%q@'@4lfRL51Ae#JpKtAho?1S&-l=_A:sC0@a1%Y8lo5))vYr&MEgQI6F5J@&b-+ZLtv*?$;B[L02XbX%<:jEi&D[;6(3&1:D[j@)E<[&wM%,bal*ij3#35946#s[[<IO)+S9mfggG[f),R:]j<B%;nSD%@XBFu=nC,0-3X0R6]khcY8?EG6O#lS*K#[:mq=DE%W%u%[?FGDbxtU/V=rt/Db<-mfoH;&:6psHT-@9?Yi98KqR%eeU$(R78T<Fe?CuYv>.]29O;Qd%K4SUiHAGY_4B(#6annVO0MqB'`O8enLhrDm.P4).sNk)d2J+6TTF2G0JH^2D'*[_6)*8_GUbss5a_M-m'E,R>m*p.+G7s3ZWO%[P+l,[RET1a>H,h5mvB_k;+.q'1X<20b9O7@+Q7_gtBV$'EI`e0Z&Ajjj]1k^>_1p0.N>%g'gSnnk]XWHrH^*ONM%LX9(xXnc7j`/s=$7hDNSlP0q`Y#'>76>55N%,Kh'kw@43FdvRW`pF*x;WCE)10T'%a]gZt1UfQiuqYJdFB.O<8f0K*UTX5b[F0#AIi*+.$GO`n<Ag(.38Ojtua^QOc?hGGt29LMq?t]TIa`+M$[1;u$%LvK9k.q8G/uLQ*#PWjA(htELBIIcs]NAcUE2N=XHft;B'.;huP8]qAfE<lFC>gitf'l:r]-aQuFnT'u?gJ:^_ve=H6nj/.+&nj=ZC(vuqcn86n?X)QCFh&jZ=sqd.qBU3.:&e]H5@%ukJbd6OuiGu%+F&V3ovfaOL';7=f@hXg`1OhEU^HTjSN`Eim_io%gniN[K&]#D'uo$>d@UG_YD.mhkwc4@HI8N5AfAA3&<Yr[_FFNlkL]@&`RicaVY1(bhe+Ad&;2%c$&kI2$/sb-+Njj-Y-p$>->=J`vL(eS0v7vg(06W=,X&/T^o?sYC-xFq@/XDhG;2<et3x+>T`p,8Rc+us73>-,&Y,Nm>g)I[kp$L[^MN@rV&TAk`vX,:W(6HSV=V[8Fd]?NNg#mlP(#X)wxfj,TwFMbav/kL)cRg43L1#]$O/vGOrFM7k7_MDx1Q4hb48fQ<lItM700?RFiI:LhqF:e)[Gta0oA@NG9QtOWYihmWS(6_*uZqCZx7bP'Yjaf%#rO%($Pe18TGLuOh7M82<[r[)v+anpNJ-6u:IA-uu_<@EW1rA?_i^Dq#aED<7VQ0'F2LO#`Zawv]&Act5&@SS7MPMjxTj8&>,-rSL`C0@74bIr<cWPdF`o8xl&2L'[5ix,B58U#^5/I2[nYlN'v4l-I##?D`8#=Dias3A#bDi%+)CH2G`s'x%cj(nH07v`XJu+(.p89UGcmqdp-U]lJEIO_Tw`;B'&Pb@'5';u2:sWSSJtK*L4A7x/X,UW4>[S@8vkUBbj]e_d]33mdtVQCfcMsh:R<e#)KtOP%bEMe#=)8L3r2mgW@_FBIHK*Kk$E;/D-Uw29TIW.qqZ_1GK;*nm)%-RIj)eiw>UIX<&h&6;c<moc5(6?222u==p,C:tU>&'As*59L8&sC$((lnj,mmb<e[9=J]oKqC#jjkU@#,Awn0MVk5r%@BX?gYqo,_rPeuiVrKp7h.aoU9UE6/S44AvN8(jGW-YPtPP(a7LrM9N[42D2`m-Rpc>2vJlUcElLX;u.QchS9MLuuaY+'.XT8wT,ei7R]_=guI2k,<I9W'u#q5jrCEkdrKX%rK9*7WE,_$LP,xUnA?8cw&Dp8vKG#OSkI&n:$>^fkJfj=6'%)>XnZM/sffpo)uq^#-vNiiof)=kAfDo'&LQ]*$LgOKn5<#ij&I'k4vpZFJ;vEL7<FNbp]>R^elw.x,n#E0@WAG;K&=9OZ]>p&SLw#CbIp:J=j=Si;X?sP$FQ/RxPe'=9r9_G3%6Dw<;YsQG4]d?)voE0`kNh<8S@*&Ja0c.(Envb:%fMv@5XiGnoC(NAD*illP^FA?7QmlK'_%1GsR(&Pe&ELJF.2=ut,%t:artX[2^<3d&a,qmf]Ee%u+*a^0A@r+7^KY_(._bMt+A[;S^-u:5h5Q>FpceD'&WObm2SMdn*Tv9-W5DWFH</pF,ja(jYkpj$H-sU?wRWRDV?)0-*mnGVBf71nm(]miSr;(aXiPB=FJ,+6`@^uN=q_L-uI%0b@(Zt#rRT^qhg8s/;wNKIAaN2Oh<rSB>cj.UeBx2DRn=/IMJ]C3LgcK7hQLbnYcwTA/Jr,([%8TGRuowk/1Sf@9aPQa1OV=X'?>esm1uUU30gpt4dsg3)&iLbnpALW#4PP<l_C$'e];pdvF;OYJ0d1.p-?*3bTRt2)2_B&:Ur[nTJSGEBkq3L@gVpam2o.#LYFwNM<tSDeU=.vC_0EZ4B,7rmc%8vTUi/VaZ`K'n%<=(Ux:c;>Knd&OG>xPW`,tFIGdA<9BA=un+v6q)iJSiUL9`+eBSok.fQ7q00*MKliZc2AYKRfl7xEbwHi<-Ep1I#V&[PlFA1=@*<4;-FNaDLd&PU[CFw4ZD3U/VH]hd<bt3[5Ka#um01v;`TRl^<>xxU>Kof==ND&9@USE3mqpPHH)VfltSnLF0bTW2u4#Q/N*7$nLt$7Ig%1$Dn/Bs^a.3bBaK>^KT==xjgN.51VOq,i9wTx9:u6F^sDDvvUhRZ7$<@),q-OhqTtR+e?p'[kS?vHo68&4rq5[@-?BJ>aIAg(@a%Xp^pwSa`Apsn@#B<r&LosD_#:LpXs2lg^sZLY1v0g`,qY1>juS;-1c'rJ2a,sI34x_:5_TL6Ac*eq9dEqC&gWVIE'8/m-/g:G6s4[+R&lLC#ci)2eJc]L2J7^2N.g13Q`4j:r?%.u:A#7/F/kPwh$-Jp5:44Lc6M--'pZLnw&'##cKh=Ng1Ys7P3=XNfAS7].)`0,7)24q#;SM%k_i4@Y6T.7)C]k117me`@Wd;ddIUww`,G3Qxp2oTOIZwHK$s/Fg1W@2.f.xh`KPifFpP^]GB1db#PsV^uAJ-<n*uv^NoSgK8;@b$RP)Z$S0Y0)YhF6B(i@`OX_'Xv591ncR3SET$c]WW'b=hL[2V2bl_3ofWtv7v`V3GGSm9L$v:&Y/L[3i':8B5JL-uc/irNkG[U>nNmuZ4bZjH8?,;R]skj]HSr`Mo[88qN1x@#3KDZ;Vr%+V93Stm_@7b<aZc)RTxqSGn>Y,(Z0LjkvXQNtXBpH(4X._k[.B4B%H3+XR651q>-WAY*J_/9;k:46nZe5Y-D?M,<bduokD#)s`+?Kw;xpG2+[,`Y=@.UK1Ns.qKnsP5?AaU^$MJdOKrC.v;6PAaG$<&gFkXK1M9LPn7=Au#Nh)Il+U/&w8N]%2J;_<kH;FK<0pr$[Q&t_m7WPL<b*^E_f^>$255Q4@/W:ZJOB)$*J&9sa#`okF(KZ%+1sS*BvYTM#A>N^WgpbaB7t`#a_oclQBf/Ki4==6`IIuKR:g1/;:8V>=7%G^=#i7h2D&Rt]:ju#I#5mmLHV;<r>;asR$9BYm0uug^BITRTgW&$xFW:vK'wS.(tIbK[tcH$8x7Zti(J$7Q<Fx0'sIMB<e=@sU84JT:ngVJj@LJ7d#$Af@avG)pg0vRhS4jGAhfjAKdPb,NHB]k>14M7xU@c(/cgaN;+nM6`9s=t1U=1_8wvRAY,g*83T?qSMxvJthswU-A=>_'Qe/']HmNd<&I,L:FhfiL_e;[u%k6N6)I*?o4.;^ag2f-hN8ZSuSZ0<t,euZ_7=WCHH@RWq@i(J:Rn<gHsFu(U+&N@p*;@$UBk^oKkx#+rs]gV`En+'R[WFTs53V#l2k7k;`ifoPK<9@Ma6I0:H108b*@wkLdTXc&5$FFVbkJN76G8g0c%eL4W=/QjO@WI]O<Q7uL]+uuD#'1luk%'(>Y?PS5O5x4PY6XJlN)kffk/CQbrKRrx*[.D/[aU`hMUf_.8_;$jmn&*b6tk;*5CUmS/%5uL27rn_-#r5BX(/V`q=I-#je48Qj.-L]LbPBa15vec#lhP`vwws*L44@qAT/BxfGR@W3)coNiKaMo8UI=dJZAbj@8unF4WCTrp_F>3uF.gEF.J1XguS#JxMnHijHD4R:;larjFd<4GMl]i/6%+:BYt/mh+T*DpAP7?wZvTC]'<[_ad#Wqv`lnM#)<LN2@9H@JCul-d(1r_1x6VdiHR[1,1qtq+beZA64xW][,3LZ(DM)1+,N0kEO/htdcn$0j9`RvYo<-R:VgrZQDAoD?F[Ww8'E<`4T;AWjes-E.n)(0d=#6_LI]Ou,(bgxI,rt(ruI0SNd6F@N7.ro;NAgl+q*lukm8)[uBG:`aa@`H7.S7jeB0h(e'tc,9=C-Zv=@T`E$`WrT&$7_KWYn3eJx3L2DG79d64?`#>Wo1s0Ffww9tJQj[^j]jqnAgR%<poT]R>xs58LXV9SI9F&laCioRAwt?C#UjL_Uo*E)>a.k%-IVq4&ijxgAAh&pFxsdF[MFxK<jSJu,6:qdINWL/)sgZ'0L4QBrRHQ6-Kue&&>cH#:>4^r+dWM'OaPdIkog*de)2LiaLOSR/2=<gd-YooL*W^I<8ZK=,pd4.8*`J96IxNg2#]/^aANFT,c/C[fPEF(au.&NR,Z,;?epr'5L%3s;sc(P%b8up?7#J0UROHnBXp.x=`=nn@G8^*qd01f.HwVOf0xKC`a2TVa>vs%aS8:+tPs_'6'[.u1w]XJ[_0)*%43ZiuB6>,Lj_(0^_?]t;a?AJe+Ht8$vf;wm+e(6-T'S%iSB+P8ew.[68vW1vIY*7r]b(Ss7MalNi.HFtot3SP1xu&.JWT-;v+%Ma1DWPq8xLk&BU3mboV^*hu]tJE08H?9f_X>G9xX5_,:/$m<@9*;.-'dm7<*1vj5ap'Eg)6U#G1LZHr(CCW-wHI.7hwg[F)D#5,>V)DDJN728uRG369-?_/M=e1nrMDh#h_iUa6oPiXd:Lu>4o[;M5`25@Pd#`0#+mtIp[<IBN<VNJqB8ss5o`k/lT*4n6)`8W<jaF_@:dlj$:b'j0Cphf<e^O*W4aY>LJ,I/[EV0j$vkIpewch>:$;PnQ*E1B*Ep&+0,q1#A^eKGp3Z'xYc+'&MBQt99E#ZENP#BAkHQF_s/*QEK3B>qXhlio+?.Zq&1vF49V<-HO7LGBmJ'bO@2Qq4S_anOJdFv.`vO$3RhRPq^.6NKjjJQYAXsZ8]:6*QU;LM_50BGg:+G9]v4$oeo'q&8L=;JX$@rj#a,+O$029wGwT%RneB3EUQc?70p,$i>a%9%qQTqBTawr[i`b3vCX)>XUb7.dge[F?>'hn]`QcuAp[0UnZlf/R;g8(UK(&v0JRH#@6b0U%N?[t#XsvP:KqKaUg23rx5B`<.&nI<+@3Np%8H+2rkWgVdMx<rLLx$Ne*j',iL[.eQ(Sr1jBT2Ut1Jh1b$;SA</q]F_F^)r3=/-p:G.$QR8ipAE$rTKOqZDXHN+eou,e0>S6onqs1[mejv&MuN7Xw`^:Q>nDg/wj>.Z/tXP#nuein3.`(5o6lHHKPOiMh@P##U<4Qv7IjMfIA1xK$:<@eqKu)wNiQ0[_m*O1^j/wT5j-NJ<LEtk.C]kI:qG$-nNh<mDGGKL.(-;W'uJw(hn<'/m,.[i$t%Vq/lbZRw>N<6usvK^6%idRd'hG1B@^VPVc7.Xwgn1N<`Rv:Rr4s*Ar0+1bAPKcHN#JMbKgg2W(5l+)OKvxjF7s<0:4b6>[I-.U-q0Ns=_ttTQEf+L'1ngF_n@sMH[X,b-X'_a7Z3_Klse7EPnViv;iXt^sPC5GWHC4_'oHB:44mrS'vPe&ca_hOq(Y)oY()QYk'_*7pcL?Vs+OVt#rknW0D^3NuKk^)tP5o;#4GZ:m@,E@A6gn8V?s-^^48jsf<@;1E5JAN?@sBt(%@oPVg97C%FEM^thTD%tK<-mi*H'6t0w@W=HGtvp9lUps6llGo=lA)$qQQ`sKgKi-6/+ipt@:(L)[A:`o*`#bYl3NI;tcr6>M0j##-&LPTNQ^seF6$75'c2rHnhBejxGXOW:^92,3w:d2mJMdS'oG(-H7&SqJZ%tXZUERM`Jq<'Pv(^@OUaVt2G'T0[JG7&$+faXbh4&*kN5_W<&xtuN@#e,p]g0iKVG%6FgfLw9-S9qx_@t2HKh04Jg:$iB.h#6,'$]`]VQ#WGtkr>nof,/NQm:3-XClTAf&$_<#Qpm<VLu-&M4r6g;3vC]YX5f-dY/Mx6)uUPWLSfk=K7;^OvS`;1+#b4)>-Nsw4Y_FMioSGm]m1'HB,E3-mlH5rI6XHiILfmqmJ0KgHm-Q;vo,%RUX9uxEA2-Zj>0FKS/YLJ=c8oH^$r]T1a/>kV*7bNd(1ChUIcg6V2KDKH[O4OXM7L'nuE;[u>ND>sFGx55D5s_Oto_6Z,YnA#JPs?Y-lUXCJH-nVTiEr[aJMq<-A@UDm>os7vYo:oHKCIx=Us*'gjeXr5nvINBkoN?pi:gRcA^,WI[@k:Z];7G2r*=>RtCQe0cIF:Zs_o^@]?gPok=1kTQV0:vJu$gUceG?&ac]k2M-D=(k$]mXf,o8'u^melwsdR7*?O$hC-thu(V?N'7p1PS.`tm.Atr1qOQ3Z0FVH0]TIQ-HCR/pqG0?A2-tR_q`q4gFnKn.:u#l,Y8)H^XfIA`FElGUa.-rh/pYGK#@XOskGegYe7`s/kR.tntZ9'D<1*:N8b_^Mk?0ra_CPC)#<8_Vuxi@s1e`WG><TocKC_*I#WEY4[1TDS79kDXr@e.35H0e-VprsD;'*#S%NgY8H#%I6<&K<(L/]$ZW@J%?UJgMsdjPXtVC9w^Lg/Y0m(ltMVtMB6nH]Q;NR8cf(aEP_arii^k9mtx^ichBm0X+u,<pga*C?Pajn3*uuB#aWakR5ohO*?DsK'M>>$2Ol&rvDC#rQV#G^m)J2`XN(*CNBfU0f8'l^1rLpmml=nX'R/_R%*=TWZ-Wn5WL+VQS2Z7MkYS@f0V*i9a^;8g>H/tW[<9d_L8aE)TcH-Z,'$OfnBMq4C)rt0/v*-X5+@toZ??2OdSKaSvEx45sk9Ng4U8d6[6Utd9aZuwh()8Vsr9W6=#i<kA0?-fxbCspX$aIxH8$0;ca67BbYW2Ycf]q:+0>tc7IfGVK/>&Dif]r+#fdhehdQs@C=RIO$2FKx]6B7bod3?e/h'<j?YFTB8?;u/#Cd#BwpRa'#NXt`P&`F`*k7MIw7C1Ii*i8AQ@8v.?0l$im:eSfxUK3KbRJa(Z?qAAMM^7O=+/L*,GRcH?&)tSg[F^w93b%@+9^e@vcttbVL_^J02b'*nU@.6j%lJ%#NmHmPYj%QE$1Z.tIuGY78g>92%n>+^2+l;lcYnxLs+<1gVX15<d[</n)wtG+IrcH#U:HQY#n[0A+=ua)bsUsdgFkp3;+lV36kJ9?$Ch_L/N,s#JkXB2+6:MT,`Eb:#12:_#RscnfD`)8kCM.:6ad*?(FuX`.M+_*mqoq*J+CQ$K>r2LMxXHrYs+8/8DiKuaX3dw,4&F@Te5W'x=#_#mZ&Rcu=PCVC]9P7DjZ$YAnd`[<kn]`hSj6?uU@`#G+Og.j;*P[Lpq`/?woaOT[mxdwD]*0u>6Dp9,t5M`=U'E4HhhVnEdaoU,%3%1S[h,?VqrP^.K?eUB6iYiR7cWH$v?'O-Q?5uTmx307S`=P(IpN:'7JQE=$<+mZc9GvP^J:he&K)tP]FH$F/TkQJ7g*'oA*_TjA*v4w>dtcZY6ls9%fDsVL)+=^a#AY.$lBVNMO#9Al8]$C.E&%oK]Hx1L2FT-6VtmKG`QF,8#:bTuUea$vo+A_Iqt)'=Y7sp*K0mPL_V;xnavplJl/c_Jj5L.3#2I>O';73Fnn#g&&DO/CV8c-p^s_5$#JSKXD4-Z7f$.7nFQ.oUr38QACIUOVWa*'Vhha9v%^;2`t`r0&e+[>KG_uft2c4Ru`H)Nb>R25aLp[a#G`M;6*6%B80-o_`4Gfa>@UBgAm-M-$VNH7:gHE=$`FWdk%3H=I_C#`a4BBD@mjc,L72Bk)v4w?rZN_[EhGp9rrf&pN9HEjLfs$jiPYcv^vdBso>=ldKQW)lJ3-38XHTs$u+`NHCm`lZDM)Mvp6D.113ZZwr28X.OQH*-d:_rb';iF7b+[C`<>tpXGVdb)%#?a4AAD0r6DrP>6e&SUuh[HlFx>6xu6GHQEDiRZk^-:G`D%VX<snTju;VuIqqkA/[r,=rJRdEP@TN6c<Gp)&R*dv2=^XeN`][P$Bih((:,IGJjAH;I/9pFmq1[hM-+<%s^#S1bEsq36#p2C*dIhLNjo<2r8q$=F`#J5E1*Yf^qb`u?t)9ta2]lG:v1fC7v`PVBb<k@tY,A.lu[nWjFFgDGuZkuB]SJAx]k_aLE=$6VZg0:tQ%+1=AJmW(:MSQ1vjP=<#)Uj+-'Wh9qYmW:?3-AW7tOKZbI=V`fa[T1pBP%i8+:aZ'v4jGBHw7*a2[#EZf6lY?s>`bN0m8>=jMA)%H.w_nMWQOVP67O5e8$4dd/`CsSs)Y<5tH_L&$_J;)6m^kV,iTSCOtJdK+:^-^7b[34oMYh`gQ4aG=E_7x:Fi8>Aw+q#NY2i7=ee&)lBfu,E=2c4s2oUpf+bNt(Z=Ct89oHnfa0a`OhuNI;NoU+S@:6VPqo/dO/&ov_W8lTcLNueI0=(4p_nuYaj;lE1,F%>xhm7qPmxD8;hDG/5OU4>r;C`c`LxOjm@9$F]9+L1Z`/C_$gVtl$?1FUEext#LWq0gYElA)@R0kIEC*EX;?TV`OB^sRa`4Zk$%/'pxucU]YLP&UE4R*uAm@m#2bHHL;R;RaeF/_GiWfp0mC)qBKmdJoH><.xV;^mF+i07^u7YI6t$5_xw/5i>82Jesj<OLJ3l4f*<>pS:jvOf9gKcaMk8#gD9nj8;RLY5Y7+m+GAV7-LktMReZ?nXnS6':K7JZ<>v?JqCM%L>l<aidX6.JLX>Uw>6c9wtDwgl'p:-&vIST)@c(IXuWQ:6_0IJJ#mP:Gf0[b9a1K/<UCQL2)]h,ErAP)n3CLS[R,O2:vq+ifU2wAR+'NI*Wc6<^ttSIuIF;K:$n/YeSJZ[,qLK)mqv.1Me48Y0'()X,^6kQnogo?t80*P;E14%>rcAxIGb,VkbqKLR#RFkrHK#*H6BsB`iQ+jqfP^58L5XUxM5*/%_SUF.q@A5D2T)q_u*e_i0F#%P;^`6eY@-R]b3:jWU1QmoB@gf8q&aw+OtFL&lY/:::NqW%RF@j<$S+>4=rnMXa<DUM:>AOS.I(J$7NYBv6GdR<D@)gV<kxovJQs-gl<sY#r%7+?bKn-dstd/$&S^x)*`UGuOG13/BZVF<.ha&JasTVjm;DmlJMma1&@h+XAZ%)]EBds@-jhYBL^]'kae`BHmRZE5q=cmVtPJ0J:_FjPV(F$e:R8aDi)Cl781>sAfQsPX3M9n20l>w1S9HS`jZ]_^st]V@K8NmtLIgNQaH9nhk#C>Cdg&r+r2s*<uWSd+e@8DBD2J]Oet&O`o%aIqav&?hrfkNX73EMPFeMr+MK$C/&Fv40*J8AoVae>,6b)l4_o9pb(a23g'cj?iu]g%@MA,:&lVt4OI_[)[$`FO-su1Uj#Y8w3iUu&Qk5'g0ISj5(ume=R*MaK<.,VKo$%S#V(Q4H=iLiZAJgS,eqJ2[[c`5Ks12<;N)0V;A'nj`Su<6O:p2PLZ.uPt&gs#4^7l;x9kakT//s(Kb_lC[O%@8GHIG%Z)(M.E$OdHj'L,QpO.0*%asIs[ZN/XW6b:&-t6_HoC6W(,F7(FgKe;_r/l`*hu#B_@S6:S55Ef,KQt<]2,Fbux:DYO'i/ZbVO7<VSL>F@E_aM())dKiRjs;[qv`?m^fUKCW>Ku;T*vae%ku&^q@_mEGH)Wt>th>6iw`EGZ%ME?k^SS6TA7Bv*7@47T,gcvUL.d;Y+?7Y(2(oe.0oaJ;PA-.K3b^qdkoq#3c[QWYZPe,Wl])L6]F)a=bft7G,vRVphfa5RU+pqBuT8;Bk<$m[d+oT=+qAg><0OEnCjVkO68B:`o@H*kH(bjV>-.1pm@$?<-vG)@+uMS1YZx^Wv6:vF.LT86$KHRckUEixwgQR>2CEcnC*A6Z#7c'v/KN$D*L`+'Ja_<jr6eME-hWQTBgBB4w(N)a:+6AuNB)tQXu8xXcrS6(6AM'PZ52W:4SIn+^Il2mW>r8g*rw]M^*02wL:baa%rAo9t:f]lKu5HjF1cwKCj$>2Q@gVW?k>`@._j&?Zs[*,<&B8&,:gCn.m>7)?-N^2v6Qe.apJQ8<u58Vr6c:tJNX5d'au[QZs;(HDa/;d[fau0l7*OpEsOU^[B+0*Y#AZVKW&b(bMB4;,u1vm5aMXq%#DWZ&7,K,s^G&2leRfEhSUiXf(.ht;/%[(&vd(3No7m8S2a@wTnwe[JuG:nt+'CqcE;EutuAXnN.G>[CF?w7U-P)'r4B$'^j(-f/Yi85oW'%;/^vub2B7,9O0BEXf1-rhuKN^8+qZ@Utj%bpR[1Ucs:<lQT,4$>e]wO4H:X?Jg2UJ$D+gkI5QmeFrsSSM8uFAYHc7;_dEOU9U:M==GTet<N.qivf?Bpc0av^-_U4sUAD&mO_c:FdO&KjbL7IhH)mpglFMmN>xOO/d/3I//6f=,RxKS%;i0W5gR%U*D[jgV<Y683@-v[&wNmwKPK9cjL2_;S(_s:lTc+[9qejxjqw$%Mwr7m]kc24`u:r_&Pec;,x2,:R/nk`3,E77>D^%w_HxFGWe2rlSx],V:9j&4iNhpB<CxAt4Ml<j5NQLYe+22rQge8RD+huk2/=1s1(1J1es_KGN.Bj-fNb^lB:_fiS+>>f$7sUZ(xYcRh>Q>P8pouM4b<V)lB7%l0SR[Xg`^s1lx1LjA+dXrPxA)Hll(YGEAuAcdJdFR>&a>b`A)l2Z:Y1KlAmLid].U;H>w,R-6YYLO%5)%l&Vd7iie5RmNnJ=iaU$gc4kc)=(>>V)uFM>r2j^3'(bWDjucO$BZVA$U/&>c]=asd9aj#C'?BNhSCX.<xv=`uBg7uAK_e4[M?.#Z1.--dFo)C9n=]N7@Vjrp@;ul#aK=p4<:p1&[jL>sj+K.*oB%$'_[rK%HhnfS'i5*[#D:6ZdfS.=Y(2W)vIQ.Iwx_h#@5t#xKp7%U*O7$5VAmkoAt5<[=$c>SPZ)qa9S?UeD.$TXKR0u+sie-ZoC`E,J#'JZ-r:u[ek):*b2/(gs'%_a9P,5MASSAc=PWaJ:@wK>0G*p*vKruxYYvZqu.T-@45gaDE4vc=)NDukv'5vncg+@<LFE.l0I(EULJ##I>ktXtV:Ga+kv)[2xrm>Hf9oH/+KpU40S,=v,Q1gN[Fd$U,n=?O__gpAWN7i*a?;Vq3,-P@MI/-8ls]JNIt1BTPVDIxP0qsJFBXXlun^/)ST_cM=g>]>8#dfGs@Hn?Cl]jo@iQp)7MC`G(`r.&QT8.&/p=Jw%VNp;EB)jlLfG4i'f;Q/UE1vsu7&E_12.imXVlkAx08R/L;<DRrcI`.N%iTfYfo&@$E6qfx'b7j7B_A+S]Suh50=Qs]-bkt<$,bVbN2$PCcUTUw3<]>5E'o'FE<d^g1NpdIdR7bLQWq@c)R(@iI7/@#`hf1:7=l2D+YEpbTFr5*=,MH1$%B$afb;ijF*G)>bsc'x1C(CU(L124U_=:rkW3<3^Hom=,`lBW(*%]=b,MDdDW-iS&OWCmeL%1m)l39@nX[BlmbYC_.LSWAhat5DEoZbYcwJbIm0'2&x_NC,v]7uQ$LuCDU^f-Cgn)#Rf^%>*$daKCX5Q%0*djP&8-vxg8xE`bsn3k(dS2rMPKc2`/^jJ:qoK%knhb_;in8Oe.St*0RVDa+7))S7[-J`YcC>04C:-UqJOlE+IP7BVwf2(jqm7k:duDOO`hkxI-WXMbtTBFsV'%8#dvZ8aqS7hgNhM`pM5#a:q,vF:os133i/#I_@3b0]RIE0cj'o=u-^7P6hKlpT5fMMUBW@tba:,L'#.&g8f=u.Fc(`:8wfstHD?mhd2qr*dtw4p%vi$^r<EN19^R7?#9Xj[^(9v3;<Di%ph.l:4@KpRnhNI^6P6*f`Z]9*VjO]dW1xK43WrK>a+>L9JwopNW2-ZDK_,P2nIVe#$eZV[A9Fh;dg/iE^(PQ)e4?X$4M5_?C%k/Iv(Cf=Zlmu0afAFZV1*KBd4&3)&Axj8u54tYtU[F7rjm*<aG5vPUwX'jV'%c3Fr^A2)I0'5EbJqF^@00^ci*JYxO3L,-TmkCwxP.X1&6:U<ZgO9?fka$n?&T6ggH8u+KfDP/Z4b=OaxMd9nR%,UM5`YQ>5vW*%eaJR@At0;'5%bw_AQ70-(2Fm$=uN@s'a3WQj@'2PL/vQw.vlo9XDYFOL>.VrtJb>R>E+JdfVE0@)4jOp.Rvsj5lS7b-a)]E>HlR7H_V)i/tD%k@3Q[POJA0qW,lnx`$wTL.Nm;JID[jIfJchwhAv[>`PI-s>#MhJ(1[QBrmo'o3P*aq/UGfo3A0l-@$/i.xtC]f,'2AAiS89jY3>Qq6*si#arHYENK)X5<VAG:,MkuPa,PlJ@omn[%1%i`HlZ<--&^ILKZUKDqV:U&aA+EdjH<I3kmXcw'CxqEtg*Q.ts>op1,ZNr'q/X0^8Wf8-Qj1`7pXtTwK0iSOd]'u.:4J^*<u#E$QomUm8UsEVn5[@4&p7*'*WX-=VNL-:=DfG9VVk=HatR('oG#%PCLX?VSw#q@2^&:Z^T5XYc^1Qa;Y.xZunU5Ju=CD2]o%pF;I&u,C<7.sN;q`#u1&GrFW74Ho0KucUnKd]jvC*FnAd527c>GlLfADE7G?tjV(=5/^4+6:#A9wWe>^k%Pk-0Xo#9r8vS9/b*5?b@b?s(`a]f-PE1lppHpxK5_)XQQIC'<S%%U::m3&uaj?R2*qn&>%/@f&;f9;BEMSdn7fY;@;ErA@xuU7KEsNEv4^Fm>>8$*%RnKu3/d[8OW-8f_hrHJoOWb7@12]mHk&v(2-CTZt6:X$6/$V8bCuW)QjWo=#L9b*h0e_jmxTf)KAn^k+@N=bn8e*nv)^1;>p?75=8R3BK8,=YnAM?SNrFgsn@%XTRos@BPf=2Zg_SL6v>/k^.B3auGnYxU(FplIo>KO9E`Xw3F/.WQ2BNjgKI(B9Cw=@(ph+[G,pc?l6;lH`iFMY'_SI4Grv^dvYAm76w&L%OiQc<S1XKX&TKL1hOhQWQTsLo(?#tEGr0#B2_[Ws4dh*2%TC8;cZ:rEuqlK]a&l96Moa%1)]qb8ISiB.0<.Oq,*.25fe#g];C(&dpBLtLbf(<FCI?oZ[G@an&t?488O0iYlCL'2,:Egox',a-sE]X7h,tQ-_pb`k3,tkCT]O5Y$Rl&@a8A6Q2b2W>'Fej,(`1v.mAw91nrY%='LPIm[2sZPf.huC=S0(</e3Uiqv'#XgNIp#/v/HknGS$*27#,]02Z</Ct*4Z'2Sn.QB0)L]K3uL9kBlix-Zu*)%^F$^QvN-^MVaZHU&?-+urDmj8KIM/a(N`sM`X?Qi<uRqcEugfT;$V@[V`j=>[*%2GEts=+S7?uXgVSeK3l_*s5tOvLmocEm3Up(u=PGUhi^,-rvOp8n9_-4YrKBJvX%:#B2X0Tc[1]1LV-t?3jJIEc@b_-U^f==pS&Vg-[>LuvCTtE7S%FrPdO?Uok721k=5-Xmku64`vDAm45(Y]orcQX<F'7n9)lpH2mK9?1OFgl%>rixkxdBYIbkxA%*frcjGo?[C]bRK=:vQf9?o7NIDLY<[;rEY1)q?MZ;-UsATma:Fc-VWhupn6N?ZG1`=^M8=gblH1<4#gVQ7;i46%ST^xs>sE9(^A4.7>WC-qIJH8`*t0+hYlS1AK`J^aJ)g9-oOXFmAV>#vpDG?Bd=n7$'kkQ+^jh8$Ki1*q:Aru$NH-nL+*F@)k$OkOh.b<u)?,P<41$].Mj$^>g'8<+htf$hh*kW(9iJ+A+Q3'.N$pX*i`P&oISp1KtGBIS+G@jSFm*m)`Yp6vtq?8%uo6q$LB4&X6%;$SK[.2m>ArPsRIGFhLF<Re)SZkZU6uOs*XHTn`86w;;t`+lo/7:od[-EeuUn:Y3`3qs[9PcaE*C^Gk0ZU-Mpb%//(k@X0#&3tKddtI4gcaMsn:(1hTZM7W>l[J0INfKX#19/jEStsJp9-C<--Y3+/N@uHvai'^O9l`Dfh:ZS/X5tb'oZDl>7)qIo^_Xt3+ZK.+Wq1$t'N[V>V44`G1E9w'vVsF+[,X+(']8lBN47FT.)KRo_?)UI=<ig155&Am9&5i>kTZ/HaO%P$=##NkNA`YYScN;qTlkABNq-'%8GMl.9kJRK-$uU-dj%3Yrp)_#=puTn1]bXbjEj%rF$T@_o*^5OC&bMGu'hv@YtNk:@rtpmou#eK0mk);rY6BunuUR4v#e-PO?`2.cN`v>vQJ]<&:8LWxnmKN1Kp^+VYD[jsas)/Ee#xG#v#k93OKfmYC(0i3Q7w#_<L%k;*V`P*'c-Ql2pO;U:([_)=K078][6J72sdcN_s0$HXjIDsWsb:.%ui_Th&ZgqtaMxBok'IBd&ZLmY7:;/Y*etG=kdk/kIr1e9vr#;nJ[IJ9D,mYI2*^mP_i2S**xEdYa/xJY*8RjVfa8f_(9Lv=uBCXXk'X^EV<ZTvfapZsU'#L6#Iu7nJf2o;AgSqisk>,46S<]wr[[q$VwT4Z(r`ot_4_Qg#UvO*a9e;/P^xr*,8W0c'BE#Nsh=E3SABR3Qvg;NZPdw^8p`V^+>'(.842ox(E2U_CNtU-+FGpS?nKVVqJbY$s=pbuI'FPluFg'welCfUa`s?U+DEXpFb#_ca;7MH`vgK(U6$:%-g8^/v[O$vlMDR:uWi&M7N:0C8s+$dItO)S7jw+oqP&*JavBex5lu',Higt3QxZU#b>%n3?$A5D%/<Nbun(_<LC^&6kZ';l7k+N#9)^dx6dkkm's_*nD6sR;6)p(Zrt&&R5'AMTd-BehI(;d$uSLr5:=:Dl]M<@Kqo]XMD-Hsk.q-i0uC%&g8K4)P*<pn'h&#Sw:^9i#3&)9Y3U_LSKNU%gsa#[*g:Ha._ZMgFM8E^+(Ve1B;fc`%&g(A?#XXbWuV%JX%ntj.VEc5=b8JkaK*i$A+)GX.0,=hwSa?ghk?Dh()uE:.(0n)V5l.E)WDbfS(t(?>QlMsKR*'.*tC9Fk&R2OZ#.h+YEt[MRo87.*DceMZXBUW^fD#HqDOm#77#Dig#n*@0lds%?n?UR%vP[?DWw4b):rD<==CtW1uu.QxpJ/?p7B-#aU-F5k,&8GYKT)f]0%0vBtP<u:II4^;64AS0q[@v9.RDd8Yqo1[tN,YUsu*OGUctQSES(VAb^vK-me1#pJZQ=FgDXQ5);?3X:ZV^UPMn2Jg#+t@8m7t'*ZEYFI$_s#/:9$5@,Wh@Orhg9[nw7h#M9GA.n([YEN_YdJO%/-mt%+@69rQtsbfefkt;Er,M6)qKCAb3_j(Q'l7=SxX1gO*t:dXVqIK+h7#s^=leSP^A@6rH;?FvkjoQcDf3%$Spn38'rSZZJa9d1tV??x-qEI$D<BxA4(GR5*nwcxg#(+d*L$R$m9A?mRZb2e'parV<`FX5<q*tXkuGB0BSY#Nk&7`d*Hg,Vn6'%iI68P6VQg#&$'W%=G)#U$8%ae6mb.3^FMVx_#S1SQ.,tZ%nR9O<:vEj@$bKTm&2;7^N8U<PxiC8N>mt-dpmiRth9iNB*WT^p(*piY8tToI49FMN?a6]/nS=n:I&m:_d'_fQAbaleCarm,3voWrX,T.k.L&s0.L15s6utd#Xj8I#d/p0mYPJFUo+xI5`GEZDS*iIbV7uXx=leuXY`ZH(KL-W#cqj5emN#Lj,*%Bm1(D1o+2a1n)*aWt(ahOaoFf,q6lK5ou>V0ccucCj_1t^g$(x/U:WL#Nxa^R'=dxo[jbj>cuWQ8h+C1OS^Wjo]iT[:QKbgBBMnV?q4.^D]Bb'_5kJI%],LsTuoQ/UV.:(AW)ESI-r4CB&_au$6/5WBM*9g(-h*#@kJp''paYDA>[bYEuLu8Gvllot(7.=f5WtPK5i^>Y%x4c_w=61*9^R]Nfokm4>p5b5'8gXULfS5ncHVfXCS7:CL*t7n99Vn.Ijmf&,Bre+Xut`+)S%*?q]I9g'+ve1E><8=_cmK.(fu/pxu(wc1?BLMtPpc@H-q7f@))]`WCO6/,A)H3SFK%Lq:$Ik-4FemI4$Y$xjJFXI.9kxgiuHH:-5:O&;$^Xj]'S5%,t/F'8ZifUU7b;rj94%UWWihLX4eRO9vH0Yh[T5qmaHdRxFq,[.L;j.MoREfvf(h$eZ;u>Z71>jrk?OrY&i9f=l0KXan3j'6Ab)(`aC;&Cq*w[7[dN6bTG]WA+<JG;$hDFOt%5VaC[/HqNJSR$cci%.uEC,)v%#uvpET=G[#M77mlAT&&,/p%v0M_7moa;rFBAtHqMRD@24)kI[2IGouu/s?i9>la3e_lb;Xg5wLO?TSIL_hH?bAVbe@ZMEIT#/mKj7Z-jG_nUHAo.D#9xiu>8u_T(Y8xu4icZU&N8]AZVS^2tBs2`Nl,4Ut38IP7I7o_j>-4I_Gd1D'9tr19SIj2aeU$f/^7fcaV8O5oGR8BWL`jdXH#&=^*t':(mrX0m]*&)qi*P]bsV7i+oJR-uVw9Y94POY5C[vfqMX1Zaf@+:_-[E&?1qhv<88tt*smkKHwV.I.ZX%gual6lJ?I_KGW_pTan@1)lqwg2qOahmjsYJ>7c,r.:`_(2vD;1@t#g/RjRc/JaD`n/O)tvg?-U*@FmwX>Bnn_+UHCF8/&q+2tCOYDs'3QS@Vxu5$)/.#gSOLk$+>uV%n9,MtK$Qn%0EuwDl?5d#Q9[nUfqEjs7&n5:@nA(#N@%rlc=FK_R0?lArwPh4c1n[#@ChYn=T$G2ogL9H1/gc1N=8N4KLw%Yx7CuXd4RWtwM5aN:WY[bikPQ*2;jMVsk0O/DfMbi0g9+%h>u_H37BB3[)s#a&J8,lYbY%(]RQeumaR22.BN#LQDf+_nJF]+.$=Y[-_C5iFX<Dq76g,24`o&JT*LS-T$kd<EXn6n-cdf'TDUXaGw@Z5x6uR7/c?IDt<8=b7f6aV@'.oQaG[()?FChc(R*uc(OQjNS9S^k[^#sb?1/w9i1K-uV>-(M<`^:QrDw-ARjf,nqA$aE-(%vr*Hnlo5KPq%II`L.tebtrd&Wl'ceG^2T+,:*'C:?KH<=^bo8RcsD8t8_Lm3qa$D/O&4EXd7ov7k]^P[l1:N^]sM@)VJ@dUWY>'27OfJoC;sVigg5.7nJI>IMedm>8vLPFpM>RY)v3otvthr.beiQ+Ergvh$(*]IW2j)Csk'/tJfM2RZKUBLV-FZ7MaN0Q.(CaCQs1gNGlx#`[j6O>4cwDc7-,6O2$0MP'tAJdfU-w5r$I&io]^,v'5F6S9c0Pnr6E=m:$I68o%'UGCu[O+3kxYv:$Av,NttnN+%t)T,=GCUR>]<qL2=8ZXqEL+(_^NlEA4W-*jMkA%j'_s&(3cZ5veu)I)_JGf&Zr(F7nQq*g?W2EiHPO@X3V2.sk>'$JHc?Xu8kl(a:bC?uE-CPl_,g_F_LRrZ?fp3uHp2g'`]`cs`^0Co>?f#KaLoV.t'I%K^nL65/6)<uqS%_oAZNd54B[ctXsx0-AGN`tmEEH$C^Q?Bs]A8s+AH*_Lvka*625l8K],4AK8_IpZbq`G.qtj#iOowi`=EtOiU4N`.F0eN>RA#b7H1t`Ear6B.SoR1A2jiSA,+<CF&EIr3(a3o=;BM=mp>B$(+Lkjmbu_*MVX8l59d#L%QWASrP2))0;M'::4@coeVGsKWVq=TTs[dox.K7#ejU:YFF/<t$D%N'b>ub-Xw>EsV`f$u&.Ew`Gj,_qkrP,]xfKBhtPY)npvDsFsGeWLcA'mtA(.]WLnE4(GQ:jVZqnP71d1QQpsl@uxxUOeJh#VuE;iO7OWUekfb]Kr)u:&5([-DmlkkcE6DUB'5dl48rNMd5X8,QU;D,X#4W]J-f0@8Jsr9n%NJ(0AF)_H1s]2R%*MHu4#lHH_*Ch>P-Bu&gd6Q,h;BC(o:J4F<:.tK386MMC2$Bc/u$D9u<wkcIa9*JeiEs*9aK(p9,_`+(VFtaIa'DZ<0-S1Lp]3QDf8thWpN%C:s?*Q*eZun&'^),#]ed-(c`<t#u*.`N;E=,22bh<U@Q,doSV,gs,2Abga-3Gn_AGm8hZHoYc'Qia,pk$B56%9`C#lmg&;hKlOJErkprv[>o,w?t@g=l$<n+2Tu1krF5^gO@t;-WotBv6LogF=lmQhV@6092gCeS*hF.3V-iRl-^pVPTMEP$n5u_p*vLQ6hIEdXx7v?/,L].v_F22U.:cO`QAItQ%BC%gj*FQs-A-UcT7gQ7Bu*2RwqK+0FFG,-#-lsIk'_3-,-LAr>'6bZf0_tr4,B%mk%W=U4p&57rG?;'vkNo5t`vdxh'w3cAQ)WA=<cO$kS3w7lu-E1HtvLOcuB-&nul4p1BsiTn[-YrT2=Qu%vkt9S%(9mk(x(J;?rsCNRs37&G($PV4LjrmkAg$Wuxj?KahT)Qh*dYQ%3FsJtp>3U-EJ3u)4AvlJ(4Z;?%9Aw9WY*CL,FiouNc*_4o>^8OjTa`(>Ob=-#nBhLgj&K?3cv48k;3a%o],nV-<a9iM#-vU,-F&qp0PMq&Dr=G:7E#c.sh1g+%^(#%p(<uON95q9KR?b9PW@J&[FR*rvUlAkw/Sft;nO@wqQM``Ps#tw0kPfGOMWu_9E'v2x1Re5Q3ENqFo%bK-U:r;p.d&XG*2mc*TH2I89WJ=Kp]rd6'.rBg9EHT3_`TN'K#kfkOn>bo,rphp2_S5Ups?>9R<<2j0-$VCto32aO3Duq]6rK<sJl-4Cwg+jJ/c^%t4nDvfJD1O>Q.q$tcbp5M%jtdl3&mdbAe0XdZ)QNhc'nuB/_TLuf3,PMaAUq.+G6%(7Z(SAM&ox/7(<p#EL[jqMalasRRHR4nBk<dNA2thj^E:PjO1CCvJ'pZc(vrG^u<C,+_;tcKnfwDXEMNs^aiQ6pqqJCruZ<ea[R[.OrfTIXu*-8>cb.G.T]#L9vahODrfj8S%nFH_hgq-;$C8ueUB0j4gSc#8vI#kSnNi6W?a5eU8_l9jMrTn7r)KUp/KaFN7313T@8/?l8xNH(<[-P)GWvurtu<7<Yaf;4WYbHb%E$4r+U'6G-eL6ktCLeT`m;.bBEn301`4^r=T^w'LR<7?7Gr)6l-?1?@Id_rujjSqpar8;6>wl7$c9;t&O-smIVKwkte:Fqk#Njk28J9ZsErl12rwf[2t3vS$muo<Rq'xxtfvi1?hRsXsMB7ArQs,s0R4UO1Ibs+q&_TE#;nAj$3q(9Dn*UMOG]I?c-`$12d(1vc:#6Ldu26KS%//]tD:'.Z`57p@Q)qwKU?5QNg%(F%'j`<ucls&J.$djdiW)0lFg_g=>*pxFYL_Eg:e]Qkh>nijls`0qC[sEFJv).Q3vj9APIG1'(@qPcY-U+]P^roK`W1@Jw/7lpvI(_<wgq6Q+gsRR>o&lZ(w`XE&UnLl`ITMI[.('U/[i0aXQT5u3NQeqH$fi8.$6su=^u8aiEjD'*F3U<nhOJ6=M:$j-A8S%>KP>u]q;f4&LkO7hv7SIlh6sC`,x9v$'p5[kS'6V'Si`f^:VRGkfK=7kl^Mi(0iN&f34B7xq@duHbQJa[=2?fDfdi&/odh8qPnj.M57(j_PUs-S<KZf_2i%+IZM4&M$mZA.bXq]V3/ua?u%3lJKkC+Dc/duRC)/tBX54$0xniUX+l*rp]&_(3VlhuAoUT.*cEX=mgE^F@dF;GdC?<q[@3SI6g8(L`?w9Z<4tCWvT]A1EL53#xO8'S>x^Y<@pD%[#1`.24$.+BVwJI2@AXt-#;p8-cNO(JI_w>[).qa*iC_6ASaghojfKD2nUL*MfYw9a80XmSZ5]:LC#'hJkEsg9989f'LPj96&+&WTeU,Qi_mWIKt^+8$95]ptLN`o7%N'2awY<jti?VdEZ`2nuD/ZJsqfZI%Z_;;[@Q;6@=8Om/N>F^6rM74/Qmu&hg:;2idt*j-Dv#7qPff,4_bVOO@?M8N(a&+rCcv1-lL;UK^m<atS-D--KNfokOiG*N:KeVa0gpmJ;wk,vRDuj8^,9QLT/%gqoi(.([;A.Bw*PXo^#/tuwV7)qo'OVunQH'E_x8$L2J,&j9k[]B3m6=%-rX+PMu'dpkht^O-qgfCM+w@=:(2rU.'<LMUs-[sh,l5=mNE+M1r1q2b(<Z6A:+]FT_DH;Kxo#?kZ6=,iQks4f=wb/m>exp4;Mp7n;5_L^k7@>q6Emu-/]'/Z[^-P+=fH^&<A84U-T'1#*G^Z6X<jWg*KaZQ*&seV59.qBD,A68GKK#k8LVcn)+'Ej8UG_Y.f=L?<U`$xmFxOwwil@NgTD-3.3'a;[Y6Y2,/7KP1X:9#FtakuBdF[`6qGqon(=$gJ6:6);oVUNUfUs9.:9M51Se]dq[[rQ3T_$867n5Kpa65=S7`W6<k,&oCKrYBR+dp-l`woJ;?n)Gx4-$UxVs=Qn6Ac^ukp;Wt=V,`&RR[@#PPl%v2M=Op?FLx/x:q`P4Dj,_JrJ_N,W,%rt+2ZGx$a$fQ.(4B]-(Z(-@VXoownec$B2U@c(L0KGsACUXg^I)iK#%l)rl@gvttwp8A=s8ktt9C'ipv(qR%2woTsMH>nk[?MEsu9Nqd2Ix6uHZA0G>v[nf%,kx$O)`A=Ot3@kJ$<aL<gJ&=I?HG/I1wXlBF2edf'lutj5xQ8v8Ro$WKgK7'@Qr;bTA$,86jX7NY15#uRqZ+JhBe&gE29-2ME2]O3D4%>:w5JheK6%m<pVf)fLBS.*R]cC5I8vS-X6JpiI%<^GKSm6q6='qc3#7K9e;K2oXX&sQQPV]#L4&;Z4%La0(cU$)7M4B@p8_/xK6&xcdBhEha'PEXa&v5n+a6&*o73*_)^*kw$%qZP:vOa3wSt$AcH`0M6ug+B59[sE'&D.8x%<EPV=qS`5:QG<,-]KhU9VNS]BuinI:Gsq9NjIZ5PFPaU0l=9SGADmUZgia%l^oi#gO2P>k$6pD&mH8SbMX`f_i.jc`2='g?a_)`T8WY=%p)3#jY&='_EeX0(GfKGd4F:c^[8iFIR6R=gbe*,01=TB1fWO*RuO-8-UAwaWmA/)tR@r=1a%-X<7)5QZsD5])(bih-(AP&Ya`BDfurc:Jar0OAdSPEar0Ku2vIRaYn=,,2V7/l6^s^o'f]9Rtu@dEC^S$tQ'VZBq$?45eb'^;VgK[*XPOhr>J'uA15NO2(H[XP@Q3cupVgW%/aXhVpRL+x]tCRAp]rIW5-o1a8cV6dIkr@[;SfDQ7K*ms5m[7,qT^OT,_SZL(-bWx^VL2.t/cP`GsR%`)5j'-7pKv30#&Oj`A:ZdC;nmdlJx67SI:fcoU7aiMM%uOjf%Wm<7;'lr)R5o5(U6/nts^*2oIMt_V:PItN-I)v1x3s6u8)E92%@QA202]MD]Q)k/LL9ZMPBVF74sFVuG?=&ZQ'm<h@``(X_eV'P08)[u8BuC)<V$n/v5R:$V?j<$4oiak,Y98-$eggNYlVKpqxUqoruYBZFDk0-nZ4@Mj=2g;SaNR@qJ=O[j7/bI/LH4?Z3*fg15x>tF$6:u>Gu8-I.fwUM>685J/,Kj&)^*L#%^DRF<?fLI+19Q36fHM9pXArF^i#4eUZAr42-KiKvw=#lRN<7E.Mu3_o/H5paOQbvg_a[mN95-+'h(cb*^pMSL@Z*Woa_N<7UG)8IjCunGN5&,1L.j:6W(tfRJsOf`eEW6_i%3pT;u;`*m`[uBe=l6xi@77AHe]>`I^DX5OpfDcbWk?On38F^<5Lu*7Lg*gwJdWjRY<ml<.^v>P;>aMwtV+CAoQm9?S7LTv'NWi-U/x*o,mD.79aT2%VlE5.ic#Yw[FwpvDEQ[dvtFrYdf4@*$TdY7I)=X^t6hi1gae8;s@#V-?-+mps/12KwC_eY`XLj]2#VoXs&-Lq0lb)MepjG-vsX0Xq*HX5p/,u$rfdwoC2t/6@dK3#fAgaNoAtGenX^PG@rV^s*I'hgh1s9&IMld5PpK&][S?-L<'9sKAdM,c.UuV6RT7s&QZr2D=lGEa%EG#Q-LXvLk&=WK1QiSVcu+xopr0qf0-oLt3lNnM_qK3A_Sduh`bi5UQFFTh9ii,YoXnI8)Sh^CFTK'L>)c^kNb);&FX@=]Iceg94dxxR?BLk'RkUVdSOq$%CYGA;9D)k/j/@Y_JqV7g%/ZS=N'KW%+mmN]48QT[*QbJ;,(Fe,/qZW.$a*io6vN`+rb5jnMteEQ&rbf2w$;1--$**#N.YU#blYwN<S[^m'j2#l2#Yg>TW2R)@#n:tSDpH8r,AZE*&*6%nNTxj0`<h9U^d<)'IC&7t/ILM^an?i]*d/ga#03:x4G(F%bs^9n*<i,;Ha`UXBw>#&c+&*p%-kSWmxSb'L,9mE7Of6(:D@D1Jpq6R9gV3wB2i@c(MQ31p%I^ggT5=Y#[Ruvqqin6vUugjFW=d;r2Rk^E0uGqtRa$sFfKL>7UbpnUM^a0PF*>n0I)%_8]T$8[c$URI/m1]N#G&/dBA3VkS/cP%6#.9$6Z+moREU)(hn`=E4`aD2<&%=7$F]4f<I%_/]KEM`X@J)G^M?5G;i3L6Vv?sFPG2_oitgGFpBPsdsqdYuPj.@)1'<X_&8Cx%m6+G7[2HC`+KI`P2--JLCDK[a)+19l;R4nQ,u2(Lid5aNkpX^tB;M<Lu0lZ$4m2N7xTmwFp.J4;SAZ9N6;g784qB=ttiJ9$d3Cwu>H(lIpdO(Iv;HMfs*i$&EgN)UwA(hcM6?ZL)BVmAV[73j'BEJ4>_CeJ#<^[S0QfV6]AQ3u]C^x.?N).tA>(N'`AmPrkh-Z#`5&<EeS^L,xmt2'?wW5ag`DLVZ029dMs]jRjHTpn[&]#v?Utg_EUJ'*/@0x2gt?RefgRVofaQ_</>d77-K;mdd/6,VgJWG6I358Yd'J)(SK4%kAsdgu1SJCrW%NXuVM6XeeZD48%rAH7AYU,u-u2)?i,,#(lq-Dtn$$Ye$_gDA=gUmShqhbqnLi-('O9?0c2$fMcDA;$]9[tZS+FD;bQ,fL=L&H2F0bV@8(626F5u;H^=HL)^VSSHg.,qt>]v^N/A0hlK-^w]+-/Y#q16Z4+L^]:M=o3v,d?ipZ:ET9/&c_aT$P(Y3>>5q[R<o6S$D22[5loXvlmXmpE+`aafG:T8e4,.$l00,P%0kK%]A`*['M.qP;te:hn].LM3-6<TPg<qXev@=Ol6f(i]Bi3_gMM>]Dvk7e8cUK59(>8^S)B2oJT#W7@$Z6W@6%b8E%[-[)Yo@#>98ot3RpO_N1Y5V3O3r.h;S7DL;wkfBiQN[)D8.LS@rdB&LBtc,m%b*T;gt)M,YK_?`9vM*bsm5qt5-pFv),HW>Ua&Kdt68GhB2ndH&V<wR&GZ,'YMbxc?-m[D[a#(AVnGLfTaLGhDnTE+ugFjdC[LT53:8&=7A<eqhfLSVl&*L5e6bUh)(xVl<tTir_W*fxX@5RmV#.C]m&;HE[WT2_C&;A2^kftQ$.Vio]7#='tu2>`/qd;F[)+[HJVEs%4h;^UWsd##'$?QT/$owZh*VI4,kx(j/4B9o48U4@I+k+pEmt'<[tn;p4/xU8eKK/hj<pj'9v=<PY*QNQ)7OCTNp9a%>9+`sjoBA7abgV,Mn7#DAd?gkXrA1Qo%Mk:luHAvXeM4`c5<)+05]/Qj$i;*tdS2.8SD;HX@(W6x$OHlP,M_l&+[RV[Ldbk'Lc-q]jkl8'2LN%[kw:>R0w?#'sAso^*ig@DaUJjCK7r_PAPgR*>YD?6UZOlqunWu/v$CL>7L.8%LRDFa;'@1-m]s?/aHGpETQ1ow4tu^EMS-W[=CPh4p#`)sfjE@=7Ah2p`^4g-((2I=b[j,,aY(A:2;abm/.I'54#(R*tA@6)N5mb9`%.;0(g&w0)*CANbP5ZJsx]w;lb7R]*dUfAI3fh46,dO,($gT;$V&`.rfE-RfjpPV$sKa/Nx=L67mU[j3d>#CqP;th(r=80YtmBwt+bWwT4B?[D_Es+6>Ab,j,^>u23mbi7?9RFr]9D1P2sUvt-ditS*-2#^+=Y9uDJl6*U:T)(kmt*DMN3JG?',=`6-T6krL[DtsPM0L4K'D4TqfIRaKJZ*(Y]G37S9N7Yp,Y8Cuojmu=ErOUII5q(YJ3F>M5nmA;h/DArJ,XCKe0tI0`H(KRO,as^JKl_3eROB^2ALe/5`aY)seuQS(5vNJ7=.YC$W$+Ac^<U>DjQEwZ(s%SfP%]_C=*j/Dg*ae^c@X==RKeF`>73Y=6unCeIj[fZDuHfR4l$djs#Q]H<]tPKR7=9%F2>&O?jPP1>'*6?,a1rVY*8h^a[&?]uADn_WhG.LoK#;mr%x)A&LoH(]]s/J&LB<l,Y+QW_sB,nw^>'@R,+n<(WGP'=K()_q+k6JD^_;EX<`9(`s0<?hK,^.BJf7#'^@q<Ja4;g?r1NPS-1e-PEE-'f8.nkDr1j/o2Ykv;JgenVDFsUo@EL-kt%auA6S@eI+[Y5;RN[Ted42w1R[R,;d.D<Hq:+auRO8J'*1TC=7QCSXW%J>FPfIdlb?9dD[RD>$q5/3OXu_t.s*w>pu''Sj0f&tM[<.3)Yshx;un=/l?-4u6S,I_XPvts@>XYlx4E^3)q5AmF<R(+`[BUFop,+txaZggeLh]FZKCDANb5::a5^8)M7:D9Dj)13N7cklkFheOl&[3in>qmok_n'kO6JA]0KY--pKAani)V]&=s3]B;2EVvY[#)1R%>1Gos%PAI$>U-L`#-@L'LHtx=N2h:6t''YO]Wj46cbF'$cHwMl+4],%Gx&%aSr5,(I3ss/QZ9F6BR/U[v`SfE2:r&l7<n3H$X3KN>:R19t9=M$t.bPjjR/eIt7dQu&_E^4g=,g)(fFIuJldqLiI.+vkT`;u*e>$0fX^TRvB9xl%kCDGF<jK5=9Qq3]q`O.vn%'3tYpQ0&IWtrm:UJ1f8N[LoC*];^*kxua8Bl<SOOsFEh[N.o7^>l3]Fw']t(g#6)]biG7:_$$w:>8M2bKL=/j[^][ReV3aY^jANw8r@lO,(wFwX#8YVoTuK7Sf($CxD^44ZI9*c.topJ-m.EKPu_*CKlc@xrM%EGNs%sqR%@Zx5-,bf&r;:75'BFN,Lkbp6lY??aN6.D5--4IA,aq>Csb(:Aa+]B8I/6IY3*w`.u@/19+1i(Fn++&7#62upB=&kdN$,nRpBFlZO.R$lSB,'_,Xs)r[UW@uZ8TrupTPu]kYA*t1-On[`j:fMK0,m/agxg-LubQ@`4>GNA&D>MIFOkGg;WhbYZ,Z6v/n.@bjC0tCX'%t0>R^P)`pP*iU;(G'3-s.1Q?si.7o=*vM`nQq;c+HMcOsBb<k*DHm7Q]+e8,'&LXw>=695ar3*B9dTn`HaZ&b5%T^(&b?@p/v'L*TPL4J8A$`H'u6XvT9as^_IXvG9i4h1.TBE`C&:XA3vp,CsFfKL>7@_+:uq8v(J/Ke?jP'bYn53ux2/,d[qdL#ZRaw9$L(]j'/E[N`qTe3ZK(x^s-B:KK$qe]&jqFre8goU'4(gd5rOOCK&im/>4Zd2kJ8eVIeEQbC<Zt['laY0T'Ifl>93(Vx64d?8%1SqaU$:pV(VuLHQ^942Q`2JDfl#<fLRe-X-qc-%BkHBqA;0_XVZh#n$rQ-D+qlkIq@Y;=A<?*ub%Ant_$RKC=.WL7`L%sCrbo:(tjLTFVAPC0aOoAYp>3L(KXc)L`Ga3gRn;(l(7@777k4suR6s[NgQXfR,']K[0oWqU`SU8TS;x-0:Y:v,]i#WZ08rJpf6Aa=l#/D#nN%$VWls4'qqma<9v9@BMLDsd-3-/?#,==Q*Q;Lb0Zu/[3*[S9t(Yw8rQo>nu)^uF<IxQ-d5%N=K[UC'TLv0N)HvW[a+K1J:Os1Y$_Z=gtb/tt%lxl:uLt-Te-4qZ#BtQcu13QRuh;pF`x5w45D`xu#%R+`&5^4p&I@BFM36G_oLK`Qf]FEdu/pOuBEZ&$u<f&TKS^/*Kb3K;6qu?4vGE6E#w_^0m`*+7nN-ih1.xh.N7wL-uP3abh/>@[C/t's?f/s&QGF@4):<c*b7Sf9vMTm>6%GF1m/4*f&sK/^9pK9,tHt@D3J_m48X%GiW-2Nb#I1b6A$w0#R:kjM7gYRJu`//i/LcFb.Elk;VQvLslDFRin/]PVI&6I?[`X6>uFcb_#%b.d%7%WP@@I-waB.bq6#G)M/wFhe'xaXwk`S=+Ut'3v4:P*OOCMxvl-0[nn.sh/-OCQq<kb:=76IGxl+KD.um)W8vewvWPOwT0,@a&C6@g4TUJ(W(NeFn?Q=w[<-gtn$vIcV]3Wh<)o4b5`E1[VH9)$`kOC(&wm/56X[$'N2v0`Qs]p')_b<#=8KT'j[`QO4[k4*;O4GvrTeD`63kvFooZaUM_$l%@7=@-@Mqxg75p4x?fSq=PUJ@%^FJb9A<_^A[x#aC6l?:+>g<YUli<Vb]U2+wO;57?=trw44$u]oGPfP*U28MLT;CYCIAabS3r$F$2'bF]IZ*RqeH6R&d2?;Af1vB6u#/1u>:gB3#)(kW/Y$Jt^T?8[%G(xxRn*3,u1r5VYd7?#4Xu-o2v4E^3)q7'DVupClP%&7I0-Ad@0KGQEX`s06#s4O2[ged_=q@QB-<hkA8#Q)u^f6;Bx]e7W@aplHQAFdajp&/F$GR9C/)&*C<65J[Mi*2/E$MgKhFo],sf?Q`Bcgt%c#$nd9GakfgKLGjYg)R<Elv-=Xjk3xmISD=0unB+rF&dG;#/E#%llU[c7`ndY53dt+89]1XMB[nJP/[l(=-s%8t.EIx$,6f(%h2f8Q057C#]f9SfKWV>#8=*CP@`[CMYxB0#3aYN>DX&v3sjZ_NsD0&`Lik-XOR&#IeZ?;:VXS*q?an1(*k5l9,c+2Kdg8**<#M)0AOs:Q.L.A_Hdm]NY490vh,CsF['/$L@HAXu]KP:rt`jFVDEq]PEdQxcdd&iO3uMq.*5H0JBOE8&,>C,Q198[u,JSvJ21UFrm)nh97NZE+8#H$+Y36c_=kl<')HWuO&KRM%*pOZQQ`Siq.-YlJ5^WCWk/tIj?E?A2-F3ed;V>JMbfR>glI4aps]x_qQMujpjqt)80$TMk>JACLgO2P6LhIM-1[ZO0:uF2?6Oc0qtFW2[uId)th.Gl4x%Rpcsb$E.&x[18rDbFMG[LTL*.x=X0<EWl$g+&V4P]Bdp#9/#a3mb:,)HN<&UuVd)pRbu?XA[*nCM+#b;=vS*]X<uIM,YKapHrZ:D>)YCWL)(/D[NO&?FIRTg#up4K^[CrlT=l>((I7qad4]U@]X,hE'(Jh,r+r1wqlP0lgY$oN6WVtKDd_^`v<n&r-CrWmYXL1E64$'/,sAjo;((UnIB@_fi$r#M<<ulgNErjO3:/7J&.=B]X[ku;[5--Bw>0$sow^F3th1+nxRL_C[x+u:X$'[JZsJ983>Z:QR#rAa[gNJKQs2Ur.h*3_qKoKm0p8(J?J(RHYTBD;aJtfX=h:s7Cln9wk)#.,QY<5:B'#31L?@5Dd^+PI,10'>]:L45:4?2h^4fK+F-U[`f@S`ng1K0*c6#Z,ta`#^^DqfPWXP#t@EM@c,xBwR&;>>UN5@V).877<=`DI(Xwp#Qlaj2OI8-<?^Q*-vZG`SEpGaH5_$T`'6?,KG'>r5wu?'L7&$J74LS/DA:v?DHMj8Ka5r$0D;bsIa:LsJ:Q),MDEFk=c4^f5QjluEs]qrDoCEOg&(4?=8`6vci[ll5H>T-HCCbI;#C6e2I.(Lw1nl//DbXt/)ioa/a]&jWM%P:H;mN=)vNxX:AMtUVDi(<#YZ]3QFNLuk%2v4p,CsF)tBsb@G4:vaJYOe.gnrb.ZLJBfFGR7D&+-5/=]922DW4uOY>@Eu;TM-7T[%>`PicFFx>We+m%UeSe_>7t8mOn#mEnK1mX=PVjhKUWaC8BZR&(SKpQ`QZq8k*urnoAU0O@bx_H$vWR+.^F3t7['EA[a$9^HaS4qO-H%O38#(/3aS=uh1r-g/:Fc9JJ(X&VRFD/,)$v_=(_hjZR&%o/apoNJVj80r(Z0r;uE&K'#fV+b)7BS-su(AsFg6dmkn'u12BeIlu+uK%t=bed6C(3;24RgAA/RmjAPtAFro]O[PZ[)7q5EqdN%`]a>UGq1&[_]nJ_d.M1tCpS'2>bT1kRJwkMp$@B)7Ak_dG->kT+mJN,*1R%4XaZ#SnQ583OGFM:ApO.#Ufdq26.)NlSrIAfVin7TBK'_->o;&I;4t=vEpW(tL./%u`7k8vQ:kdA0[pl,m6tdR`)u40)^G<S1uw_0ZLWCM>;.b$'h6r-.?7nI%ewk7k<W7u.7Lsv.,]ddm%8Z0fd:2to?pISLALpF/e0>HA_Pmkq.`SS^.%AC'0Al_fFgA32X5QiiNL9UbekpIt/hL9Gk=ADT2>[RAHm#r2C.uaG,>s5e#iAqiVjAf3oL9<>C2('f%`s.8.7&JdjIi%^JG2b*qQltruEIu[[IuhYi`Wh3gK]<1Bl$hu6O,G7,5H-fSWnYcLRAC>0[]v-,R`5kb,CEN[H-k*<]tqN_.uPoh9t(Yw8r3(@U6Sl&WblfV1`W-'H_S6MxtBK#LFp]CZ_E-Ch(^e&Q,GinrPg[vFn]$Cop/XnJRHvu]i[g@bZT@g+)C>aQabF4hk)hiW#@wH-L]-dYrYwIp%5r(ub@pIFi5=^,u&AC*&[-Hp_A3#h1LvvILBGdsuWt/:Im7c-*CPGWf<;>bXCaiEJK'f(E1iwqd)(OY#&iv<ZuZL[n6VOV^un/Ct##/Gh>nJ=8LeW@OEOiYEm1BXu,7_$IW-.M-$L7$BkAER$Zc*/a/k9jpJ:&b7GOjd7k:<pKouSd*fuVQk5wCP7tMhgt1<---^O^L6QFYkbdAn)DC:dlRVrB?9m*gLdom,hSiTn`ZKY6DAxeL.<ViRJ@qa#:1d0S$Jf9(MFR/xNZT[k0I9#7/;qkxTt3R,-FZ1<)Z4L;QuJ#oHpcpH;]Yif=n71:g&@IB*:EHZRl0(FCi?Pljp[XRl@%-R]asdkXGD>Fo]t+rgf.haVICgW^ZETf`^RfSl+^pJ5rtaYZk:Uh'#_(w@F2?LU0>N,qkn?%TIwS$$*)TDmRB.0xFYx]-PZmWs^A4XGJ6))*s;vMRM0?qn>vp5*PH)2BpcsG?h.<Y9oeqi<(9htrJa$;Ckxpkd9_wQg->n9Yh`1Dh7eU'MTF<&vqg,nd9Y)8)?SG^X748;8*O<f47iNmaQPK)W,_Ad4-2[?F$)YYcrMlGT`Imf.+N]jhGH-q1%++]Y,tG(4d(O*o@*v%Wgnu7t,$<$g@J[B*1iVJ;K,N,<[Q@Om1hicJ*aRc0[x7sJsFeP5[O)02&e>[.vNL4Le9kI,OEKuTq2Xva2/g_h+v`WPubx#8)>CNvK,9xR=#X?SC>Fa:EZ>&(%uljRIF)-p7h<@RW+9+%'EV5=NIxD#G%=g[r.V'#umL5*.w$aEP%0DXa^V7`*1Tsng^TOk^e0M9vf0R,Wq2#kfTJoSIaFqN$m,1GDqbp'r+$gV.6(@&/50Z2rL<t[7ij2Dm$3bIiDe[M'+K4OMTr5&3$vuD6EdkpL1oLWYh_F:#47PHDF_Cj[v9JQDh:.J8_qBF9#kOM%iZ).&73;.PB-BM.s`fG2#,V&%.$?+7QnUTNWq(%M.D+0E.VwQJ#t;@?,$J@+'H>mo%*R_[o/?PTn3kq2>=0whcj8AZGS'&ad*NTMm0FF%+x@fNh4SP[ow,^+`C_lLw`&%qn?iJD%3aX(os4B9;(L9;AC<9(D;@9(C:]eCpGl_nhbI5c*v.'_,:%Z3Scr_jHQF/a_e7Iar^Lo_8Ear8;wQVjZ$rGA[?%Tj$+w'C$mYEAxA4hH:.%:u^bjqrg1n:LFH7$Bc.K>^JjKc2]1A2RgP*UfJ^2NI:-wRp.#mFVU1p0LB//D(YIXETE:J(-(PM_H@FIWK_]Gr?6tI0T2l$^*3*Xs6jZX:LgXeAD5R(W%N&39s?GG5vVD5`q/6[NOLs-#GqOE`9xc4-$k,TRod[Pfua52*bjs_DNIAx'(=f9.I2/<0LDDh&ldBHlDv1h3vPs3UCFZVIJC>]YooV,v6?ij3fU]b:d;xjZWK:,L#YV>cVdAb1dK:P:-k6b<(+K22m<5)_FAYpWB@Pdh+EMu?JY8po$77;j$OgYfu*?$TIfP007'uMXas:g:hw<BrMgJUPeL1$B4GNi>WJ6)uT&kYEF)qF_7kBwH[Z0d4-71TZT;AdR*1-M*bU@xtCTQ)S%6neAX6B+SKDlD,O'(K@VJ8%Uh=jMMauQ(R7mgH`:Fnog2c14((Y>^8Kh9u6[pjNY6alAd7Q.-e;Gi_7n+udlfNSktknaw66:kJlQJqY0HRFF0H=7QkkeU65(lr$Z1lDXBA3MSqX;GWxCgViDB<nf^qR,vgp&.->>a%7Z7:,%YnGXD0vH[WbtvnR2u^np3vt6&CsN+?hdv[aI)WfFnrT@EhufE$xI*fO7v188%o[BoatEO%B;P%+orT4(%v.uD;QF?ok7S:1SRoL]%O$l2G2'_YZ0FYV7vH>nbmP$9Kc5on3?u(nvkB.Px8d%DfmqIRR[mZ/lf1?f/J2P)rH$Z&Faw@lfA`8GHj&Xmu6m,:9`QkwVpY(6mt;^PjU[72`aTQd;u01dhfBf=msuaMgp2t',k,_)Io=#P:vqr*9Q$ug6O>k>BV-+H&si%9SAEo]sPSno7u@K(_s_G4Lon.YZatW^)ogjB-njQ6LgN&1@b36es;mrDN#as&4fYkC9v,x6/L-'w2f>k%EIZ<J48v*-hu=,,6s;ZEtr_L4M`sU0Q^Wc=wrtxG,(9sH_DX(JwUQA50B=6ZK<M?3_uIIh'W+V5SIl_Ls?&Op_lp8@jKO*2(W+S$/vII9;D%8Raj)c3Y`Ue/#(l?dORWQXvpH%Z5h>b0:uZp+EnHO<U*8Cn,m7e*xdKA7xbGZxa@9')suH$&<7('/>&hdWfLB*q'5C/kc3HQOwtfVq]Wob9@aAlb,K[c;E%coq@*9-ht;jo7NT#e]*qhX@,vgdlgO%-F=#6=jJ1eB3@u.O*RIJ*sD?,L.oi-lTTjBeOo[EX>[9OJ@l#Ra4_<FS.^pet/6_Rj_7uP,bjH&A)o$.8Dvk)sG/A_4mM0XfF`E?>R8h>_n>7-*Uf:&0Wb$%=3n;WlqEV8%Z9;$9tTuO^@U5cn>V#dB7;$)L1r1o9YT6a@P`3hD2>e1:V8vV[v5frr%%`U#bYuaTN=AG#enp[0P]8o&:7vX+q.(cd#n`U$hZ]TcdQ<?)`HoR:2.v8D8F@iPT:80GAok.xQ1v2h<[_;pC<jF-*U$*8:T'a'D`NTgXBA=r$@i_&<>I+g:PBsdq/Xwl?>^`Cu`@aa=rZ1#-A&[SW3iSubL'EoaaMR(pQm^nP]]tt_ku>'g<t3TWkoj<(k'E.Qe_iFtwt:0<Er/7v6gj`B@kq4K=u$]odq_*=h8l9m#/Qi^xF2bQ6A50]L7+2d7vhpgRQ(Fe$qMavE7<k%/nwJB>H*Ss,o_$NHZAD%pA/'KnGa4MCsft(9rFrG-C&11Y,0FIPF7[8unq^f$s6_*Pt35cuTAZ[<uR,4F8m$,UC'0609m4agogDB]F-dr,u30xC<kk=kRi=J@6<*$6I8gouKxA:jt'e>#%O=o8biuHqOr&;0v9N.6lg&HcaTWIuP:kOx'6du@sN-i9vEM$mq0,F_LefdbrhAo;n6B09%l-tQ#9J>7vRS9:uY%sAuq?,oQ`,daOq_9`oaKptmgEbhKm4&tuBb,+sES+9a%;8bruGv3IeEG:vEK-Bj7cEw5Xkmlqc<tuqqcYx4O9M%)1)Y$,S1*)#ou$+K&d9,_&M#/vgp#M5a>aYuC(=7t^dRg8uPx4/dR,Y]1_US*^j_B6JLb6vdqxLMuj&6vs[uIQ5c-oY_+Z<I`]$@i`n=lAN=K9=L+_%ajvkc<aRfA8.YN:vQ*Alu/UwD]1uwXu5DG4qw,Cfu0_Q:5NH79[tv1<B]@.4W;_7/lWqICQ7HSwT3)/FV@3t$M/LuLR,Vrb<b&G^MHDwuij`ZAl(_qDbTx^Eo8Q.47O0NL%Z``5:K`$/LW>w2LJTcNIGc/.vlxs^jb.&%v,NWUeO-eeo$NBeh7aU>+pA9U3eP4c$gnB$)xN@r?5.`*2[>8tuC0[hffg'c`5+XN.22Z2g^?1h,ae=kSawqM^<4u+_WMcrF)(,9`hp.RIxHNLmIBV2+V^H:vQ7<8rlpIXWL/74JqpOtk[?KOJ6r(L_D%,OF`F1q4iC3xK`F?;qq`:3PuEK6nbC'-U./Q2kkHP/N_W5Yd<qKHdR7<`sEe_g=+A.`ft'4S%)Q(e?W<H-7dnhL=7b$P8RLDPn.so9XwKr9k/278##V+mW*5J5hJtdTNb,Sd79+^+`Z6F?u:iQBEX:#;-hL1PJbrc8iGOr6pIL81(F)s6u&;q/#H_$ku*&^:fVg&iNQmO/t1grEMPd5JiK?o9kPXUoKH0d'X$sgZrkv.G)L'%WOVQApkf?J7Qt43(7&=8[b4qV_ULn][g&S*/((AYMr[DC@*eqtI0Nb`9F-6$.qSPE7v_D8,<k#03#hJ5CG_Dv9vwX8G%F%(`sU9+>dnh1n<:2T=$'9+vH_=PMrIVBvkvYNdpWqW%lJ<5[HuxYMuE;w8mQk092gn(DE1MM2vGMHo@Q^TQt[jp6rRGZ]7R'=*2q/DYdcY6Ia^(QwktWA/u*dVKibJ0uu$Lu7b/Xk:D`QCkflh:S7vuVPA#fN]N&x#K3e%^r?LrTB#u.=g9Ko6#gC6am&OLN2(%%$7=rS9squ`h3vX2seiZPQn-aXQ8^tqXYg$-Mssk8$Zo>NY-LwSoh;,mPYBLQ'fkS(hwadR2op7Qn-'jq&2vs_8-LPjT<V8`Uh-dbUh-XvMor-j7E<I>N_sG?8pt*@ZU%[SpK=)-GF,52<96$#fgSQB#If.(#H=[9Rot3k6B-pd(K7/s[S:&RQ]Fq%pNdGh#X>MY1_%q]kb`P@b?#.[ug`nL9N2<o*?(E#F`35MX,i_vMw)LE@G)4Mr@XUXB/vTjnu4Fs*e140.=kA%S:vmN$8[gO^Z*/LC7v%q?_qP$5Hnt<PSAZiK_C?c[uuJq4GD9WUp)X#F@k<^@J'YTtb_.@rr4<R6-?E-kZ=:;H4R4A3sq8bXH6EZt*vpIL]n3KjkQZ;kP;#JNdtjETVaTvoALsC:xknQf1vpKx7$W'i>7$A]G491vBQ8vRJkKYc.qYTI'L?GieudB)R.qIFRZ)Ig/vdsYGMtWd]0bcxEXp3sAbV2/M6jLY#oo_@JP2tKJ7NKi]F_:fWlsdkXu_TS(3hVIuPP]][4I)_l&65U?bAcJV$qle4U$Fnf'sNkfXSJ-$TlZTQt/+R[^/T*lJr8lp[Q&xP,4Fie8'&S1pRtwk-M]kJrZ/s-$'nEkPaxW[K#_)p^EIx$11V:>GG?bJq<A3,m-MxMDA,%5JTOC._%mC`Ecpe_nUW?utxR7XYd3$5/j1Ftn5JkFHe4uto=aP,vIaQZrj%n2vc09nq&ZM_KYXD^jWno?UfC6#u@lbl/qHeT6k^ias]3`FVXYMPuV;+Hnc7waC##pNd06lfau/8+X8GV&fDVb2q0L%8vg[WSp56mjuq/8vc(we(<=ID_V$phs)x+4Gs=C5q=+hkILa;$0u''k2EPY#)*CCtLu6fqR[%SQJbB#BNE^:LReEh*MTDs<cL>*<xF2Nx#-xcHtuZ'.92pmYPiO_NP8?reDJp8w*u+O/4U]Y[X<TOD#?;1hA)Lv&9;9O/mpvQvftZLNgL=4XG7s<^>-Rxf-[7E1suGW=O$[lfkN4NZRnQ;gLZag8_F+vXXuU+xMO<E'`sQP4t3BUS6bK7nZ%h2iLb22KtK:j=g>TGwouP0l[tqXh+tL&jLpUD`:teZj0Qn[A]f+#L=_iX&$#P-cWI(XS7Vp+UxlZ'Z@tj?[o@4krk6?H^Anm[@xpPb+/CiruK'b2uEIX6FRaU19-mnU80LW9f,(rbk#-;D56q2okqMO.RWUD>=5%F3oE%*I`D$Cr]-Qq.g(8aCg;pO7e:r%6$gY<#A--0Ok@>v]Mee''b5[dxaR7'6rC>2^.qcGh;5qkdbD95xvhCU[maaAHQ5>@^d]sI+iQ%)P]LE$-qJXT%?AL%.>Qs^B<kf<<>eo0)q1LZl+<_VBcC[d)uAV-$O@hPG[)lfipI9&EdY-`HS5_`9U((u8*E$L%t9Z3_h370C^*/r5M(q&2Oc*c4Y=c^5#52Ga9G<[h`,T;W33u-#cQgfk;lkN7WsqMgbl1`^LnU#rMr/r)F<_x,hQk*Rch=>6Z$r;;=0Y[esOsnrH=#jgwaLt(6H+nFCko.AI$8$e-fuFo1BVn8D4#3RPbu^b1lk4v/28E]YEKf^=fLX'%fLi$'Bt@x:=<7x[+vn'p4J'Z'OnNxfCMZl+UT$W;@=XGA7vf]SPAXn6x9_TnLp-.%vkoG3fbUjZ?9c(t.2aUahEZ>vS#/uMY,*>YP%J28e$ZEW<?7Qcj3O?<amvD@,:/E5buXO1H2nKE$_QCOlAA,];kfLaWg]?mDG&I-ouHAOlriv+C;l`VouVM^HRE4[iJdG9B@4@$BLV4'gt^mUh5P?]ZKWEO/p4nZ$;9M[>*%*iFVUheD#@Ux@O>(5.rruRcr$`r%G5d%D[in:`m&bq'>bHQI_X7IehJ'^KLBVq.(1j6JE6K?DoL2/.^akeUi'%Z6?F9s0s<M)GMxUDrd4_MT#0:5L[jV2]bdFm^a@pO;+ULM8V4CcgGsS-IDTO;gtp4@:LR,(OnGFfxtN(#<6]Xf(*c&cruT,(N)6v;-q#u18v(gp:#$o3ho^,`wXHGZ),v8g,(cQvxL8x@GuvOTUu3Vme/_6TxXM@/q2DW5]DDv1)lwmI-vd.Ml,F&=$-MFe6g1<,TIX34`fXp<-_0nof7DIT>#m1(K*lhVpdHogIqe.[77lp1wR'd:j_x'3)6?HV3YVqn8&xsS>t>SVlLF1Ncs5ft']NXM@8ogZ?nxda%G0+TepA/Cq6(,j-^N&-+qkd8)VxmnA[i-mpVrp0Y5BUF7vVkg?bZ<bI2W3SqdHPl#tjt>@qo_7JrM&uGJAHOPCJkrc`+Ea<$O8(f86ngkHJ@b%lC5XJ#Tf_qNvLhAkL_*.8xbaYn]3^Z40Iw%TN=;=+8[TtK8cBnr>ha9Owm48vOG8BpIaRfJ)fPT;)n1E#_aXYKRbh]d+H)ge[7:f-;8OXf`oRrkcB*GDOjLXA'eD[PY4ajNX:(xbU@PZt7L(d5UtnNn1OJ&$,h(b7twEucKK_G#=lb8j$Z&Wr3iN5viZ&*aV8M:L8cEng7b<(6TNK.LgmQdEn=6,8w6I?TV2Kka-&Khnedm.Q3s9lf,6Q_[3HckHIeGX3R-%uP_^^NlFva0hAW?gLFgpb$.ao3vD305a)A9TqAvxBdf_c'v>_S9;q99PA)BwaZ?kA8v3A83v_KxeQS:x&fY%#>CdRU5vvI8)dncN7v(2;s<U6xFV@d41k8<q+3c?Mj6T&(0vfp$a`M.Qa1#<hO[811r?`Z>rZC'+N-UA*>mJHhAskb6PA@$3:vZcUvuhSS*7^`Pdt2@xnkd+-c#B7S.qP:M4JW5L0vn/<:s=b?FnfEj%h56SffT-I$:>FDV$U?]?PH`ooQx?lEqwsFZf(qLIhJ8o-qg%WT`di^0p0K>>s*WE-?cL>srqN_Op9]VR./L1a[7`;eoT9(/?:9@5B2c+kJ7U+@X(^,ul(=kQkj&'>$M6*I)mw`[NF,Z:?%j1`)V7&i&x%6(FO,`jNID=u&CPn1-2X:>nA(/l%Mc64^xR:2-Q,Aa%4ir5vI^vELBwU.fo7N/I=J*xkh:p+a6xQl$@29=eVh-Or)L[-QjDRED;pr66hLCmJGt:xLnS.rK-5m]rdLM.uvuXJ2$O.vIOGwwshTs*uu,oC2PDHi`3FEMBl-1V3[[DE`i7HgA2dYT%heMkh`]1jJ6n<rHviECH/`O7vX&1qm>x7.L]0iYIMNs%Bpk[wteO__;w?bwGd7@d5i+ef6e9W+`<SjeaEKP_sFZO]Tu'SFV.YrHafiG9vY32Sj)0drnDD<GhmEJo@Lf%>G]9Y=LotSxFm96N+,+h`#)K+b'Gx_kubD0&v%S;f_)tN>A'F<S7?PgFTCEL1qa8Og*(E()r.T__r>x>S@Fdp)L^RU1v3>MLui*)YP'tuE:08P`<OVxR>9J)KL)G:3XeK]S7MYHCuw9W4qrH*PSiv4hT@k&>Xe;N7vd_wftX2NE%B3-w4mMe,e.X_$*8K.>SJe5tu0GG`r,nK5vwN6:BSL05mDmSR>uSJ2XkDpHHuE?[lk:c0em:jmu-->fF33[)5niispsYW7n6$K#v;Hw6vot>8vYmR9vUNnwurKJ@217q)qBmVIUF(ogkc[%(<uJlBT1_J%4phT?VOksEtcK*SLQ(C@r5&)Y,$wl>%@*<vP,ED:ZB@Sq,whCZK1sS7Lb<ipr<-9YS8oJ8v5/-:dw..@MJx9FTj?26vT*AeAgtp-acm22]?o:'aZU^EMHN2%]Z.IroeP67nEp95uE]V7(NHOn5r`a%tsJMl%O2unAJo7%s541b+eH4QEIx.2kj5.:uj7ebh96BPA+qIR@7hai>s0$@utITvbL.Plf6gr]<g1aZ)>1T0v-2gVG4hXjuFRL;?o<wWbrDi2a<;Ktk+T)]s&BlI2_>^@Wv8W4oC[k06`:&xK.sg>d]hw7(36$'7hDCEMq*r^*XAG<Viw?R*TYSZuNc0L6oOur#mu4[NrRbtuJ>[/*;:/`<7L^:Zk`_>L,'Vw+qufH^:X>utmlo]k_`X?6d4HCq0I3U=<dJ$nd:mZGu/4#DGSR1vvs6dm,$>[rYAJq2Su^n=LZ^4OJaQiB.VUJsJr$Q6t1Yb/<2b0v6['Jqcbp%F-Q[l/O_xF2OQ+h($q,AXg&i+:aSiGuDoaC%k?';QneN7ZXe54voTg(*([)Crj'%.;&LTa``tXXTdNa_E5&&6v#$nU3X&R/(%JaIIA5=)8_:Mnq?%#YN=o[VpP.Q?u[TqcdOtV/_9-gn(IiWLusA0oIVFo3vb?PRuf7Wu`A($HQ,t/`aeWF]NX@5_`]'H)$3av*eKk>:?AjLvoe&=#Dm<L3GsP+uT;'$aqbjJ@o^e'esVuSA`1>ojK2+HZrU#4p+8TunkN)vj>&ro)HW_hP%NH0]3Vb/9-oIb.UX*-iYhXbifp5Adq0B2mu&Rh^Ejh>?,x3d'jDn*<LZ<C*QGXR*2,bo<lE:Z^kc2)1aZ(nS%+<;(txh?w'f49Nfc4l#gp#c7LfHDOtFa'WLKi]#A(a7<UM#OV$1-[,53o0mt:;qOZ=N'*L$pqG#B(tYNHtM/(UW'b#2>EV[-Fv9vaB0sD4dmQ4gt(:2mOJDn1Yift/ah_rlR'$qiJ8ik<hG]]Vuwtdo=E/`4nd&,42DW&8.:&Nb7/Hfcw&6-Q%aL%Ixk_f6H9<Lwi*845OdrI9[4MsqBV(a)g$@:OAA,(MdLiobN@3g'-AWkI5v;Zwgb?UvW2va-YArm;pVHk`13JGfF0sY^BVOkxSo:be9[(sd;08#Kk%baAS?sJNX#.L$FmJ:D7B.[TmSn]E2r_*A^Ahmc75nDI+Z9pt_n7j00ck(9>fij_lTZrCYWWqe9/L%tC(X5K=n85MmSCpG;jCT#O<t$jagDG9*5#u&@LuN.o3LsWx%9ZnLva7v.J/9cdh-oL<ljXq[rR,mVC>ttK^*38J$m<hbJ=me:,v+?b.Mu=(t]:AAlUP076N0Y&nG=nK*IKQI3ZKi5TqQ'la><RAex8jI7AnRadh`ZJVPA*G)wt40x=WER'DqnEgXNFtNM_x=;.JV8K2vJZ;aG(#jj361v)tIR.T1;,0hcB)7S0(2?xLt6)']JSZBS?,,Z:b'm.C8L5IuE$128#PxQpbFm#rh;?#vj)/S*QZRHh.?@#U8aJRc#bnW_1mSUbY$nLL#8q2#Y:.)W@M+VVa+kqutNJsIp1'c+CAn#2NP%605d6mX:kW6X[m7m`6&Pc6I<P/>;1j(:8]tN?FULOnt[P1CE3K2v][B6kCi*'Eq.l,vXt>wkvPo,5#ZVF`'.QpK29I;o9*.GsFMM-Qe*J$lQ]%f/Pjr7v,$SsEhd'S[f]?ht.ltF(2X;1^:U8TI75>+L1=>&6#T0[a`Dso-HgF)7o5RhsUZv/r*b(BDKM(%b_5?C#(R23(qPciUX?nmus$dAXi_jJI`FM)vs1oxlEgCUQUie5v7VHgt=T6_84L<%n+S@YK:a&x;tRSE7:Im7u<iGY3NcJ3b?R5+v%`1[<Ii^>r[-G9V/f]jD$hLUuoVk6F)5hkCr=3'KF,a?Lo^:mAL]-)`07T.a2@6,t&?$eA/oYr=>;?xHC&4>nBCretBi*S[ZjK?[wipG'<dKE4$D%5j:#(;Q-)tmU9pBObPQu8Zl'kYenBD[aVk5I.]`:b/K+L7*TZ1F7J']:T@CWqi^?/RQ'%J=lf#N>6nUv2vOeR5gGYQ)NjUNvk&3%0^;dJnH?>,PEhE2iJeWYp#l3>aO9EhKl^4E<VLZq.;(YbY#32Nn.R+^ITN3`TNWXOOf1P9M+EibI(=/q]&4hfUa)Mjvuis-&r6ZdHF@AC/r`0#Ob%4Yx4aMZZg/e:ua&P0bW[oK.j'V[Jnbd5sK7$/Q7,Ck+kU@1sJE]<LIRYOA<282DlH&.fUPM-G%.XB?O*+;iKF,vhLmAx)$/NGvkDmJ;Mvq3H%U,<&LI(/73ce&<pFdx9Q4`h+Xb@d+eK%88d:0glT[F,g,h+X:b0:Aa@w=1du1UgVq[:cLS/q[[78Do@#7e_0:uuHI%ZkB/#MudN%)6c,23S9H-Cpu>oUc8Om#>%pd>,N/O=<IDn>,GKNfO+MGD4?7Qo(et,r8orG_*Q,BS:?8BkCHGukwCCug#k@U$1qO[,q3^SmBplkrDWXZR6pisJ-6%veZ3u)Y$g4ATTbuk3XSXuDLl$O6C)HiOQpYqFBjW<2[s+L@k=Aq9@k*r@iU<aH[q8mUk@s$JV_56K:@o,[JKJ'#kJeS)w/M[t91`f(>bJk`[xDn8L%fA*:vImtC[]+gm]lk<jx+he/MmofW[4##A6^uUf)AJS6O?K>[2<Ug`hfDdrvM-MH':QvL<Bt9Orh.Z-Nf_n_BG%kmTbqm9j4sxf#w=@L26voGXZ(k)X-L^/)HDVe9l]7>ZYa:F@B]IihVLDxck7TR7NuX&.=)P8SN=9fP]a/#:Ih&;DIJ9*I)aExBsr6E1oLwt>f;r/b#598'>7&Z2)ukkO1TBKOXGpkx1XHB_c^[,@PAr.)*,.ALeJc:Cqan+8(W=oY'Y6RG]lHb518cgD6t`1r.E>TN_a:M%WO];Tf(I&a&#pEfvUc/1k_Ja4dA:(iDUSVZ7fk9uIV`KB>H@:rHFYkMt$b%:Tp2;G2b0T`RNqvoWf<]7A1RUGlOvL^0sOl]+vb[gqH)/@?&f+:tJJPn?]nER8TJD;koFGlWNmC8ue)sg(eAAUUs0u@J<hJueB28[&@fd`,qEfY4`.oHWM[3]jKuNVR4%;Nbl:,[-qgI'dd:c'$-U&X[Y(uBRt7^[-qV<qPg6Ch]>5k@;np8Ft*[:.1``(Hu*bRC$PA?-0=v2Ut#AOjS#,GraruvdY#wtSD2>I.GR]a(HcRnR(5Mgw-kg*0=(X.L]lAY'F;#lpPQq+tUmwFD;Q+U@2tOM,]4G]/rqG>q4ba/3$(HR4n>jJHFD=)gqt$ZuEFP[9X`VSd)qp*kDdG0Xo@_Y*SoLj`%MLD'Na6>MQWjjjcUwglLBiUH4)(1>]Ou=jXX+<.tCkmpGd-_tUGuZw^Ag(.,V=2n4vedF_IDho*UM>o7JmaR3Z+=skmg`xdaIs+IkBt3.D<OX*u,CBHkDr]GF7OA=#G^PZkQLt6_9xKXWURV-J]eV@]%qCUundattTUp4JO?F'h*_'qdWhU@b*lpwg`'L7Q7AA/JC3@Ot)XpkuHf]`sDZj_saL[:Ln>6BL>9AJ1X8-$(1N%;k>72`a<d,YP]xkvGhP&:Qpv?'@s&VDqjpFg>$,-,DiDA-%,(FjfAPmr:$p47v+a18Qx8JoR`ALku<kEwo;hsuidl6':?np#9TN#0#bjtEn=)Fmm)])e/e4K,'u0-Vt(Rv@FeM.j'kUFxO5u8]7$r(CWBim4CQ%bJ0$82Qtf]V=gU.1$Yx+)9crn/^ivoXsb5D3YF*9YYsNce'hXJ:?.S/0,Kfuejc19Vh+eVw>Uf;xeu/Tj`pgIH>GGL=(uA),mN#S-Jl8cfDR&JB<.l1So7^R+#aBX0W@Jv9'kRaD4mX(/iVPYQG&E+Jx$$^]m$TkMl]%(Ucmf@5'K:oXPqk99,DkRZi_LAtjuL_(A`G&EUcA;Cvd.3t-hg8<GT/q;dGf<WOelJLg'D)l96hRhPn4imgAMGmqFEvFBWt'TZpTwA21>W1?43d6rdWXnxS+$'oZhGU#5=F_jHT#Z5l$&Sf:;;>+WVeUpdJ`Gc<o-^$0(MqLg/MIFLc`jlS21B.ZlctZ@X,Rq6j9fL'o1kk]7c:kOtG'YPg8%LK`.K:Yb-a+tk*v,BL*VH*lE1%XU@>gKGaZ:ZRdJaKm7pcdDCS/u#kY,_o1*7JXrsGm>=pukRSA&v<=3]sxf1-ql8+,L$Z/Wl)^rR77NPX5)MH0u6AB[2Ln67R=T=*tH[gbXPq3A5cNJ6Mh1ewFHW$JFtq[[rDm4M9gYdtP@.KS2+#]Wr`UUTK(9kWKCd`V-:2Siq[Em2gogetW7dS5t1CmIl6/<-L)HslKjJf.rN@7&*oH$,$8r'GV5'qSVd`205mCd[N6u%Ysh:P3_Z(J&#FlXgCnR,qd;s]UsAJeB%hm/dNh)`(**GfXl9tQ0Qc/n(Lqglg2Kcp3J/obO2$EfILVQg^:KmZtkBc_:82F?]FHn6/^F>W2GZS83/BB^&9kx'(OoJT+L3p(,v5R.oBvQ(wf,hs[VwnD#LG$FTmNWUZ8ni<FtliJkOv4Lv#_BJ_<n3,<c+/AIR^71&mr^TZ33/uKQCY?`]wF&KGPNxofibtWVUcU/pJRrH&EM9Elw;+/arbDH6/:E;l#BXrP$AXXobH>?(vGON1pW)Y&X0-Lg^u6J`,sV+N/>n4v4l%5$o0vq>Nv0w;s-0Bfa2TEF*Ui:L$nZE-$e:q2`enefV-LJN4Uqlc)@6.=.Ek>DlS$JbLT-qtTU5(qIQstknj3PaJ;9SnHVZ+4atPR]v)M1ci<mS+R+Pn_*$xG38)SUuuaT=H`Tdqk7e*C%cwn]<Jci@_nm*M=_6Ik()v&.#]AlUIl[B/-%X2*vPVK[g/q-bKJ4IGomS6:d*WM>X<n+pKD=R<lE8@x4Ls?&S<*A5&)lldu#:?uAVG8_ai4eNe;aPbVTm2akg1%wKP(G1KLw4=PGCOF):.jvoovqq=a/18v%;4+L$p#Bsdk<S.b(xwpOEOBu9NoE%Yvx+q[^Siu>4J9vCUG3uG&r?MD1'R@qM^&-W[WbDGn^>V`u)AlFK_L/cx16j&g`kXBV3/lVF%rqMUN%l8$N'_?1*/U9t^?9q.YPqDVZFD7A`pr,%52<t;DBN69lY#d`o+Kj0tp(Lqt#(JqXN)26+;6XN,<qeTNW4Xf$wK>lR4dF&w=dZ8p4S'Vs:IpW4_I=cPBpV37``gbEFpihCZ.s?o,(]#kDhZ5(uW^_m(88h.R.IE2mhh'I%ku'*8TP.HP8:XAKDSc#u:b$H9iYeK.qO^h%uIZJE@j$Nq_0>I_o#M0?`t&hC&?99Xs?ha$U91&Yl:Bf@ba^.W:/tD`NuVHx#OsqAhF*3:AD#M=gdK2WBZa;uJ13vWa)2Lg`UnVZbh4<>K5YF4$%/5Cjs>;s3lU)nhE5dr6nCUo'hGH9i;UXc_Oj*OGt:RlAgBSBI5KL3T_lc/4Wv:`qTk_vZ1GeL1L^k)o#?i-&gaB)R,;/C@g?2d4(P#2@S$>f8d`O@FAL1p_rua+Exp/Q_rA@S/ssF3V*2V:K9rPR/1&*vX0']9p7w`35I6l^j';?rYOrWX,dM:Q%N%vx_hbQM<N.0xh(.$)9#Vbeu&]/$oE:/-L-TH[sWJ0rqjNh9vpngFMp;;)*pA7n%P.J2=f*4$Bdhw#$ZT.FDE7As`o.h?`WVDJn^+@YUKgKHo@$(g<VQ:U`#U35E](Bio5cnloiN7@uhJIE[gL374d)H?JL',XF6BmMu0j)'K6O_n>@/Kkf8MY7I@$1Xbs>WGS_?5]4/JAiJL9VYnTq)6teik0(e*?9v/fb^tJOvMt1jJrQpEI^aLkVBa'5@Zs:hx`JsW:.Bx80gf8jJWpN/HvtKGHM[7,woMY$0'<TE?htfH/e=&m:PJ<KGpqp_B&j87qMq.+7VatPYNq^(V0k?q(hT(Df6v)7n?TOxF:#)jM%Lq9](_mjD4sVNWnB4@i?'q^Vg&l]-IgwsP+#HxI+DK=*$_:O/(inT0'JmuY92Ul&YqwD9L6#2;*1HJ8`NtaJaonD4kfIOYb]Unlr[GVnNK%gcw^pv&UtI]o%4ps;:QQqL=AV7V-_9QfD)HA$3UIo+fpStZl/5G5fas<V#K#A3R3++rmOgI=:-ZP>tk_?ecK]NA-V0i'vbKHv:-.YS/,]Xa/eGafbs.$'YlCL$FEfBXpe_=^%mJ`7xtoskH@B(XtVY],:-dpcx=)-jp^_XFxKu6mZ_%JaE'cp'V5[d.4)J=33&X'O5d0D-edC/w(4<f=1(87a,q,-VmJhusD@N9J)Io#0Fli(<F<Q<xIfJo2*L`;#rkIf<[nm^ik.36uC)=`dG@]k%dVXVk%Kh=SU+m9]RITg;XI(_oT`*#=kO.Hi-H`waFV4_`PZoq`@lGp4I6s*F3FLhNp>:`Tl?)pW4O6.LsZU%[&f].a-g6s2PkiOOrutt-3kl=obR,bnIiO3,E3PNaHuJ+3'a/Vdp`1-*^j[TmeGnVv?nf[fbP_-QKP`484nExLg4mFIWrogA6t^T8atQX5[H7%P-LUue8vgnpT@HbA=OxoA00+RKXunB+uu^kiitbh+YsfnSGkpq*ZK9/;8v+Fm@bgK@df*,::m.I)=*gJw+2Q2Srg?uk-f/%@Lpw?QX3U3]92&gwY4M'1fqE?Ik/3;@L@0SpflEt.AVuq(eDg##)Mumhrui7pj7=$Q's6_WOa_:^HHSv0NZf.LEo/vQcc?LQ$L6(^R70`)=a)TIqOS_gprjwFIqA&4:v?Y^fo59qPMF[PtHf@5shT]0@VU[_tudZEM+bWT)4s$+;6Ckp>D8c.'J]scNu3o3<FVP)TBhqG$'5HF+L?oapa%N<HtVpBn67YcPMg)#mu+uf85h_5]a^ESr2964tr1dNhI[iOUNU+0>#>^RSFqYX%Q(V[@iv>R6Zt6bj8432_sj$XF0qnB`B=8'^j6m%ip?UE+Gse4bA/v5UZe.L7vUKP;#%7ECnd+7)&I0(`:VLdF`+QZ(K>Mm;/CV?+:&:73*P.L:oEndZ=]rgW3D`$bk,WaXlL7HbGRHM,q&@Q+.=7t0v(TF)7FB_+R1sMjusnG_.0-Lu/fcNvk_LOZ?@p_9$j;RbTOi*R0PQO#p`Y491fDZxh)?CTdqHD`EftU%Fb9v_S.b.?qRXoq)1Y>><D:,qS]+CDRC3+HoA2L6u<^r6v-c9b1`>qk8NR.j1&v&.#.f'J$YpjhoWNu;eKrBS./']n_R(hw@nA'n$up&+2F3nP=g'F`tb3fIClK67nJtpM%])f2BuIfw]K8eBOoeQQ*%WbooKg2tCPBwsuhImB]mhG:YA.`(qh2AOnTOvBaD7]dVn*>$viY=it9,P1rHFpE<tADjffE`suCC00c'e]tX.tW9v.P(Tuk?SGj%bA=sV=s=(XmNne[7MVrEv8^Ap?v@brZ$FMK@;c?=AlKsgUADX)+YUXq2h.L)aGh`%UK0ElCnN4>D#9v8/d)eT`R'vd4,+DYVm%l@q[NuariotA$&Se_+EOnsnnr=@tb7TFY9@s)5NfUPD=u,-rO6vaZ(0&:AJV&c`.uGe3)R7D;6Pq;IvGFdl(j&[XRWUG7(j&2];VcYX#:t#l(+p?wm'2@uPD?+c#it,^??Od?'$uQSQSDZMl>-L3(VJFl[Ye9;>2l@T/J5,fi4SM4:GB?&$wnRlPrZXTF%76.s2pZtKqkrR>]g_4YjlYWH7GP^A8-.?Z/LO@+WOTw`(ERK%58qgV+`]@VwPtKaglia]bqmb(7VFtQoZ&Vra-]w@2'KMP]c&%UGEuVsd3UagE7'@-x'ZQlg+?Q(^f,C*J`q]8>#O:O)ln-(b'oBCM99x]OTsuP?N$oE4ZqnvFMsL*-)NKEA%DGkAIl5a`IRB:ZOu_V7/ogZ'5Ya8M%A`EQD+]&5;JfrO>;lFCS?Y#q;v7[l)8M*YlF3t`S:2pWQ&@@u)UDH/:KS`/[[AkX1q`[<ZLP-]*gfB><<PNvkj3w(Zh300`N?tGa*]/U^h0NnlFpgu;)=x1vs:*PL6Z9G2si:v>B.wY2n^#ippmKHE,[K+rq:u0-obo86``aC5.MIlAe@5Cn+fQA6lJ^o>+sM+:<wvou`XmlsoT1Fn0e+$KKu?_ku1T<-=mqv8a*N`<Zs[p[t'6?t@*nFIq%Eu,J)Ro78tj#G&EUNnWG8$aU#&,vkf26#+.hip9^Px^JCip,ISq<Rn0lxk3@d;+s#=TM]V=3)n;dQEQ?`1T<JvYsp[GtjV5N]NnM4q$qBqp18='a+tkOw5qV'_kDHTOJb23'J,*C;kT<?/r33-(`YU2p`<o/9rbPTxWKXp-5Xj>]4dBf3G%Iajodtm^fTLKtdh]eihAFM'nCe`*L_KSWJo9rxt1oTqsZisK#cS%pu:Y7I;w%C#`mD<^bd,#qrL3F*lP+2=.>gD12Y0V9dc[e:n@L$VG@CHA0q[il&(]2p^`Qir-^GV-&&fHgAP*AUb624n%6G5xtI0:3uZLH#QG8>QL3DJ21ojUC^aTc5p`.eWtLvl_Kw%g=;tkg6itQBArsw7PuaDKh$;X&Q(Xr$5q%p'R@GDuJfh&Yq-;a*<e5QG?kSX5Ng5ncqh?AV4%j<6a)Mxw)2@HoMDD>LkT,e(MTF=%-#@([d+Yswv6njo(GaR*2,A0<5o>0>aP*Xw-37oVa+]&K;cu+]3cUQ^eJMRL&W&&n0abS4GeGDnw'#aNS5m&cMMKN@+sTE-p:sKOlAhk0rq;'F-+9:N0/%w^cNIbV'/_I3D<)I:e'^$LS%KKtR:5bDJVir?gMT$ao8VrAS<urG-/<lB&#lk$S*ZcB/7jQP?Bq6g-SCaw8uwSox_A,tP%CvI(gI?hhd?a#pAA#-XuNWihFLSdYKr1lsuf#e)(HF&#(t[6l@d?3]s`loXugd,Xj%aJ2-hev]Knfb/v++m3vr,KKK)UO5jvOr=s4ebiK6$@6%)&g%q%/0uu#7IS5@E#NI38p6$7x`AbXNFBJE#3d//eTArch1Z&m3Q@b&BH([U:L<7hDsnm?W%3%k3UUuJ#ed6ZQNZA,/V>?7nNkmhgDW`6>R:vNj@cf[QNr[pm@##8Z6oJ]GwiJa+.5qbd_runj#@b*Fg,(+kkIYvJ9`Nn/M37Sm:SI:c+ck>Bg:-p00fqcT[(bY(kOm$*a7vjJXdQ9wHu?Nu=^X*I-2qgD0Bmb_q$DJZHu6<$+_JsF9xbgwl#9hEAts=1QM2mE-fE3hm@dBoAM%$w?.qWB<xVrMn-uK_&.LN=_JqBIMDoB[@QqgTRCO*Tdu%5wTFd%kH--l4xYI<0cw9/RW_sLIiaj4;>fd`&0&Vg/7/l45^-Lk`JI]:b5D`_RHnJo9'xXb8>5d(O>%'jrPm]D.4C>d)gGfL,PfsQ/IOWlZ)B47LU&L,@:mDt7%]7@C;;Ns&@95B_C3^_Edmu2[,%QRSdM'u<*h(pQ<OmW1kB]:wl1B@be(9I?.vhOU6QjY;0fq18KS%,s=Ygjux2fBmA,sXo:@TQm4lolh2TA<4[EI;tG4v(?n,8`]AfUeq_c:dg_uOEvmr`'k11dikN_/v4pWlEar8g'Zx.1;MUMsd`VS+nZw#gj*2j/vL43%IMY0?$6Yx6fsIcQa?_7[9WLVZGGuT(#]^9DOn37vWhGUupn=uL%X36ag;%KGNqp0Ii>r8vhHxwkmTB?b?XkauQ`easp.Dr5bkwYi>?W86l.g:%^T;c1M*sDk`[ut56R7c`puU##Ph1iSxN(nuMT>oRPhK:6dh-/QUMh853c@_om3*%a<]JH<Y2,6sbdUvu8_bCV*g&/vd#8S%OtcW%&=Y56NVhNTN2K&6Km@-(OcEQD)giGMH?#2p#0Ztt9%;FjVt(oOE/.A=q(`;iB8)=c6P,kX&$lUT[(:`fAh$:mh7.UIb%iXGsKb==,R7PA'CPVIf1gSKT.H%)DEB:uVGi2v-WlVI;PEgcU:GfC?f)pAJmV92^kh66LEM)Gke9mZ0-SD[<>?*Lm(p=uCjauadS(0u_:K6v+iDN*?Fd:,oST)c<SVW@C1?bQq0Xn)9g;<D>7Mojloq*vc:B00$loR7nEgZU'1H=qxL41onLnEl#6n(`-#_+q05at*cFaL7Vhh)+%)3bM]/1X4ihws`))nxS&YhK?.mt9$jc_KcE->rmMMCwTdE/*_HU_'ICjRuCu@o^2Pr;x'<[)Gqx6@t5or#)u)=;1'C.;IAqdi:QWX]5(eY:lt^&aN%cF,lO+:1)KU6Gu]ohC'o<l-BT0U0Rtl0CNsK(0?qUasSTM(SI[ad>%sQS:'qT0o*2STjoIn$:<6@/*0llTQG)nb/-L&P4`%1RtF`<)<f8gl_e3V2JsTEaj+A*EBIrjr9aZZ==-LMqpOc'GIhKD2Q;iPwg%MD`8Rsn[J$L03Y/YFa@tZ&q9kf,6'>7PSD%#3QeI,S/S5L$WhILF(Y:vA@7jM?fq1JSi@htRtk[WQ_EFV6Wvjk1;ere3<Gh@f&F7@DxCT%;<bE&fnfY`HKdMeZB&;IkYtp,@WG=n*a/gh,qA^'U#tV*RHFu;GCA[LdoH5v%S(7-mn@9u5oeq<gb?Z#q-8ku(S%PTkxV,&=jv.(;eB,#sG`QN4$e&L(X9S.L^40b-6cviF@8)qoM,CC1Ze+M,kb&v?+wgu=PSX6P4sGH0VxFlv>(LXP38NuCX:gC;4BAH9#u7e?G<MBRC:_].6tAc&ks72d^p^ToqQHnE0X_M5ut+2e:sJLYxa?-ILa#dbn]3;DKI+1nDCd]r7Bxb(XZ)7rr'/ZlhQlb0RVblj)a4mx]97*<8m/(#f/DsdZl^f%QS#)$J2`n#9u4v<Vk'^BLD58/K#@iVe<onZ(vX_G%*8vN;m5vFU1A#4=af(ST7Q/fFIT9g17xk>X&`MoxqKcf7v7g+`N$Qx#ke1*ecYQ_5#C)su'LM_R5.LUbB/j<3L@?HBquj0%WL8#rk-vu_LeHJ5D##I:510KeH>UG8&HSdPHUI9M2BdW(,G2A`rc^8I%l8Ccte90U+'IC0Dg&AI.R*Ml[=re+3mevZ2eOiq`a7F`P*a/V0S.;5CxIl(JS.^3qJu^T:Y6IZX/EhLMFtTxTPkA`.L#cxAMHffVq0_e^,qo%.NA7P:A+U>67[.9whJjk_BEAlXGlu5`nU[o9r$NhdG]^_F4v?o1pjq:n2(-*j1a_,522(rOeUhxm&vsw+N25'6Of':,OHH[m0-XRUY#Vgw=#4#wif59/G2vLARu&OI.NTe#+`)CgF#bY(GDtM]KWR4br635a1o.&uE%Q(*.bM(kIU&3c<K0elveK&_=&:]O.(h0n/ue:(7(8$JAPRm<Z7mdcwk;4?IA5Yr#ueJ^WcCMAF-'Ic+2v&/A4m2XFLK1%]E>o<hmG7:(_g`^.L6GTTeXxo*vn[mx3qLS?OPW;SABq^5c[I]eA*[.IlrXNLu5Mf$L%Bh%HEq']sYLT5NREnpavNKoKn*&2_U?r1K,9pGtJ)rfsdn_j9OJG_a-.ucr@nXP#Ebx]Z$G>eLd6>_ZKBML,nn+Yu]MP6$Mf>;HPpbokk=h9fA7v'I,8ApAaM%`D;&boKi=U)m6bej%?^f0G,G7_nV&3f&w(7v6da_gexfa?Ud4h$D:[6^gN5-F8^B#h_V8`URtO3=.1,)<^(+8O]=U,A(G^kpu8MPra]g7'J=dqU_d#*XsvHoTZ]YKjPkw`FXJ=.]C7kQrGDY]vYSq]Pq)-3%;hZ['77[(0UQaBh`0%+*l)OtuYc,vZaS5%o7Q%t>8JXhFi;c5FLT+x[kQL(7>aX:3O$CW<XIBo*/l0rT>.o3Pq:uM5Rn77OjK7N.J,$ENSL/fGn1''acXo7a'n>g8v-IH'Tk.Jb_-2`6ZBPi5G%3P4iAa4A4hRe9uN/-kVF2mFi<r_ose6ZZ?i]8Tf5'++it+&<9`Xr?b+87XDIlvwaXVr,Sl@?2:3IhNJP/)E/^65.X6f=i8)wgDKKmaRE=2@UaMdW&q@=7)SmI_ZAeD7ut@j;/a56GUtfG?FK2'HXPUd0usvoIe6+7dQL5mZ)UESm^fuxgpm:=N2`9[5q6iVefJ9$7jtO/2ae,oZuIx..EH1f(]#sQj>7qu;&s9jKP3V`TWnE(4,NvVxE^TnV+t?GDTi[(G,un-2d+MRrmt6(id1%HIC+DMw^N?u3[H12Qlt+.u(1^ihQP-KhDlF^hNK[YkOq`j(d)'u5uQh*6js#pwIG>jB;Bh=+g7VY;Ks3Z=TId_9p4Kg>]ucsbwfYAwG0q^b:-+pMP&^/7VQ_-919&dBaS#<sx2BkU93jG9/KM3$)EnuU'^5;/[tcP4meYiZ$ffEFcg^AFH@a#h8-9JdXAStQ_sPo9K*qvfw%@r]u$;?M0#kUtCKx6+oYOY3aN#<O7v%n4N%+*;qt]c-W]%K+S5tDdI+^helq-jKwuS.@HM8<YIgj,hFi2uClS+.KqJ_h7DJv(7Q=N%3Mc,qj[6.=apftT@U>jotL-Wi;Os$B2v4oWb4]8K43Mw+O?j'JREkx+euYu6xsfBc;dV9ukpu/o9bs(Z$e?cjKi%:VQ>oPe(t3VT(t/;tu%L^s4[1A(_ZtxCT38jtS<<VoEmr$;W_gi_sR@lT&ul8SL%h=OtNHG%JL3d'Boem-Rlr>w.%+P;3MqUa+ekde15I's7&=ln)HH_sP<,NY=@EsFtw]'Qq4GhE*+tG,+g1NCQGGR`BO](bHknLV:Ro:5)gE2p,ao/+rEf?60U$2K4oe5f6'ugxaJIucve&NdGiK@TD*I$^$+qIt_;AZ:+?$+lb8v(0C=kBT?2`&0qvOtS[uI1t,=L)o5(A3c;IA-1f4qUqe[O@O#bWI#(>VA,JFrC4b?OJHQDu0R<`sQl:(]b6u*r6[8%lW-DA;ncN7vePwEe$xg?mKA)#R4=x/#^jc.q.vApc[OS.h-kn<-7jnegl<2asOC20K(U.Fu$i')sXGAoe1*p.VMf=42^@)27R+p;e+3LA7>D5'FN:%MK6k9wkf@21)GG#-vZ6p1>bxln&0MJw70CaWUP3kNK6Vn:n0N^'q+uu22?gF^)$#d:U(#CH;pvN0J^J#Ht7G<)s3<6R78.Oe#,X6]s=m,-LMx^&RbD^>k#;8ip&nwa]3mY+V%le8uM,:I7Nu1`7Lf^:twC?`3p^hXqmMTwt6P#nf5']6*2b+N7<I8W#5D+5.oS>+vRLcK'mqKmJ'QCIn6&4rk'rc1vLsnE`4Rt.(rqEPf&fcfLVl[.9>KNv8HxXZ*hd>TF*1h*vov#6>Q^jt-Gvik+Z'gZuOZd#Y)?r=<:o4Z,I''Uc(NP2B%l+LI9cG(v5+r`FXqr[/;-:%O`7bD'6E6Fuo%#O1hqv[U*OG$G(5)9uNY2prT$ic<?9]0nw.k3joN/?KCHgI`C>@-vYSi,.X9qnYNu?#mFf,,_K*':vivVR[Qq^>>@k#S[2<?Q>$vKgij-fot&i$&_<&'8v.rgAcouw-LR[D2utn+kedooLpT'2>lOo#Yam7VloPFsFi_RBoepcTwil68opbMZ9vmril&#21Nth7c9vwo(Kb[p7xt&r2jNSfQw1P$-DE7oe'*4t#nJqeUbTllP*(8GU*Kg&(wp.nBQ%,KUsFpWEtXW1wAt*=:M'Gw0;$T;-[tRi__3P=G+v#10Eme*6lI#0V<`OiD7bq%uOo2kir-0eT$Zq&6S^=UKgLEfC%bj//5<nh,r'l#>L6jmP@2;.<v'XoG+hZRET7BGWn&P*$hIE:9n'Juf3(TVG.Lh:&>g>3jY#Qq;tJxNh4sqoUf]_,exr>raCDA)M-qS/QU8jkO0fqS77vBnvdhIpt?,iDv#s:&a51$I_._Z,;Gk+SnRnA3wguWst_uIt@ShvpV<uN4)J0s4+i#t_R2u:]B>H:2oTuLC9pp<Lo]PBHN=7^(Lf&QC<XR;aQkQlt6FmHAmSetO:nNhq5Q%atst%xP;xkW]jh[.AjPO9^J&<qG^6vmi/BltKF@^DV&O+,@rqI2j)br>wh%*+'q+r];)/s<Xo&]rV7i7Q]vrO9E`]*E794v(>*5#a,n@Fq/c.p@NFSNE+lQ<m37(42I;1v1'<)vtdLb7=>sD:ca_shcMhhF=8VQnr]GfL*.h@KBAlEO8S:xkko]NGtns5$XmP3u?vP7vq.<,EEHiFi4Yh7qB'+)8Pd`TuwamCMp0x:?Z8*h>AT5'qEE[S>)RE2*FA25#ZB,tL;]g=l_7v7Ijmr68_b3rq$T0X2CQ?0vWDwOF5V(7tY4i=cAp$CjLns&pm[%8UC<FL7^R`L^iN-`(n.@@s,p2TBtTe7-iP_V2)46`a_d.*D#>7SfCDi)LYG6ua<#F&9[JEop^[)MeS*9gLk=jwu0-0P#SOA05n-xT378bbqt:@uMZ$)kgkSA/u@H7W#Iq*'-?r&au-VJ%bJB@JnCcE<:^Tc#9<V?5f7)1cCkm[7^S?2,;X9-p-eJSJDj;qv,q@43b8PD/ni%'WlU4%`aSe2I7&r@l=#237r5PS.^,3`Z;Aj(;BQ3i4vr2Qg(?Q>(LXs<ErMq1'7ObEP01LSr5#Ur#lA7W-LUD^##7gQD',O/G2+TI,XW2^I)ihb2vt+-9ZS(N:#tNx:tdFu2vP4PC-X?:AE*h&Zf?=I(^%LDAb+p`fbr:imkg>IwtUm9GbL53U.-vRQar6lcU-ZIi'a6F?EZ]K:K9P$ErfH&>ocbq&Igd?Rcgu]>n3x=)>x&:$:*t#LicZsY-XNLt<2D&&[X#b%4^cUX<KAR]L91WvqtkQb(B?G;8/gs'E/%UZnWEfah]51iKxthI#EDJ^l@s(MKYv_m7)bdHFYgEr8#x1VrrjK0<t]-aFDhi#uS/>d*6A]mn7vnd?rJ0fAk6bI&k0dTV1ex;BC>f8'[S]3/X,0wQk<HZ>8f=lX)oYc[Q5.e-AwNuRvpDd<a:=4*FpNjdL2TK-hc=6v.Vq)K/9jsqa[NSE*ir]dQPg8v+(cB#lhjK57T44v5LcqMj76`90>)omthD/L/nD8XpvLttT$G/LD9UYra2>6W)^7'W]8([aCo=SA4q*Iq,njju.e7#Lr$J%tUvLY50EYdfUrfOmc*22&O_4>%PJ8(EdK2O,U:)0[Jkn_`(QfSftV%dko))ukkC=VH]UhmjZS;ca1CX*$Nw2es=_khpxfTD<'5Ym6Q>hku1cRtuY['94mrA6<$o)S%lvfuP7D)m,LikRG6x#@bwBOjf:T4:k/s.;mRL;efX6ZhIQX`]a:e`p-jTV._0dHxg0Y]l/jObW'/NIr4]0Kk>aN^'q0iE[9^Rt%#J7>4eNiJ=#F<6Pn:E@WZ7pin'+D+&'1qiTK^t2QVA?gOIFj=Ydw&*,8)lGp0fq/iKxjB>uIEGhJKb?7m?v<lA;&Ypu[QpT3P4uWQ7+#)(Z]ohJYQ:37rudgu/4,L[wC(V7dVc(L,vhulu4YW[o<%BL*gfN])0/tOfn[Jbcl?Z%Bl&K_#x:V%U7#)q7LR5DX4hBuMeXXjb.x=*':UIQYmvR[n@Tvm4)t_s5S:6n7Mw)Wmg5-LNXP.bd/)UDee@BJ>:0DN(#jEc1?#i'7kDD6u-F38'@-aAi3u5vjvNsZHf12-iOuHL&m>/;q,PZ*+4't*kZhNto^1<Bdh*._MB2L(E=i<>k]NPc;1ap7Pl4U7ip,_D#HN[Vj64-tZh&OQA+Q$u;uoMaMqHO#I94+RS?AlA,]B_k[iu<fgw5@bqe[.L4&Xh`:JR&cx>I-^mGCeo[ON3lFZgWL-5/;.>$+cm43mk+:FL2/Kp<^.F91SR`j7QspQ/]u?d$0c[[N'lYror$1V^xFWDc7QkxcWG2DY0-g=>9v%No:QbaEV>0^glA4[v,$UHv^cFhX(sH5xof%Gfc'FDdSa%>^-QSW;%](AN9#Lo$e-oE@Uf>6O(kquP)<E)Ii+c53nipVO]Fr28klG;lH$I%ibO2lLRKxOJ?WawMV%#Xfa[^Q#46^.E-_iAGOi$2<fL%/*)lt1JkAP-YQNs^VN8sIKiP/M-(vt[pY&@H:ruKuRA'MJfh$07<Rg,OY^fMpJ:$i..5Qt@o^K(CjKsKQV$<KI`lFdrixF5A=LFDXQYleRXZtjsZB_)YpSULZCaKN@>dD^N:##ZHE*kGh)Y#%s%k(2c.MoZU'2W,A#&6Y9hx&ikwQlOhf7H_Fq.8O:6I9'EIQs4VghSNJ;1^YwgM-u<(fM.JFKf:%^d&$oC2v]j]SoW<h'1wM(-&7(lpu0,ev5k],//BY=8;6$iYN@qr9Xf`B5t@7=5lm(JbE^_WQ1#?E^a>`&Lr19tQqbg>rpNclf$vkLlA69Jsf8p,+qPUGp*F6m=jXYEdd:W(f_TMh7p=,wQ6+cN`*i%(qYT=#<Z)+_9<0_(UeV314+L%;Jqv=k@o/i@=E<n=`<Mbaf<ZbY_a/ioB;?r`Kf>P5%9V?.581'TtS#M-d)1>Q5_,hZ:lr,4uu]8bY4PG$S[wC3Lp_AA_2,(c#%E[v-Zc*YnG#Ovsu=B4.%t,6NWm-#C'co/9uMiWLbl,2;-HB^q/8d);`QnvM%8MJAq&A$%DnQaC5Tf3]uW<L'hZqHOA)nxq-/Gb(3uuA-LE)kfe$JX_s=2j&AGx$bg%u7ISm4/6#@K-5io2'=NV^,+>DJ[C6A5:^6wp`AQ<N5_A[&irtPj=_Fgue=O)IS58QZ6VuT)hF<sV/?f2[#P#aWiN7t<jb*C5^F2xPl0Kv[S.atN1m5Md(`aKB?LK@oWS#Q-FGom.dk7Tl>xtVlj:7xMTs#Z'eL6.m)JLlR>>[Nosrsi(S9H9w=,VAs-fUX3jj7rHk/q'O%9v$#[WG0CCXcdIfKUbgJ4jOdCfLX'A%s1A4]u9?0;tfxK>rap-N6`8d=J*D'pHS;*q+^3T:-3R#QeFv*267pH%`*mc3Gk#Yfn#<?5.]B`+M80;$tQ/&U2l2kvK9mpM%P$*f,k='xcDw/Uqio*_8n3@LoI#K_<EID,2inXR7e(RWEXfeG&%6K4*sJL&kiv<oVl%%K<0Ii6vp1Y01;V2;L:e2_swhYm&@tPRBtBEKl0j#CY>Hi'_9@/I]c<BWjevSCjD.,6sbNoaPWU%*TNMiYjBT[M4Ca?..IrX&q#'V/-&i'F>&PU)fbx&.qaTwqN#v(TQ9s$MKI_V.eju-_srvP<id+lOg=StKkpdZ*JCwaVe5lXq*bGH>Qh5ju1RiNNba#PLKlo6h+>_=l8mSQ+i877ToKtQ2)Q3GItf$+/'&=G`a,kQC<wkeo=)%lgqQN<-Lp?/8uJoP9r9$9lA63Bn0kc]Jut:YHXhO0lf'L'FDO,JT$RZKlAx[j#fM1JP>O`ix'u<;Q?tP<fhmh(xu'i5=jEpjebda7]X+`iJ7ub$ChT@;<toa?=$7V]slZXQTsWI'RIg_ohr[k>Q.w2Z$tfeWbeAZVWPxv@`BbCX/q5OXWtE45R<k7,/#D9;>k-5-V<+)5rfAE5bstqZ>t%<,gSLncLu@tS+EZ^jUIFA3%mD3N+LC7_37EHqXOiWKifFM(^s8hY-)Re)[=,X%n3=duB=_['k+E$SWoQblfa,(7xZ2@5PfIWPjViu3e1&2fo7dGb+C(`Q+2gx1Js.K+A`*Q.RAN01SN]p%N4'&Rd$R0EG`=r8Q[t@Q,=T34*NZg4>[Dg/pT(Zl&jn)pTsUe-T$JdhmNP6>^tGN-*s3e5qcKqDqXM-dHU.JWn-Nfj>/L#W6v0$mtM6NmV]9a;S7R3s.k#<BC-Owh:%#SW,YC8rsW=r%K4:,/;-Zja[YL$LJuS)iRe?M`:dg&/7<DM;9Fl3Q-sPX>WUl*:%O'#48v8u.*@FapU@b;?&iFa*_JF&=@rod@=e=FwdUTrt&2@1I@2VhTd>.kT7GmkYafL-/Ei/tdml(#cXT'l:@&2b?G)YwG?%LbX_kpZ0ci(V2&S*[FO*DfKC*#`eR79nQ,C.,80q>'1bpxM/gh_*@C?HKt_#_cJsuaNB#ljJ9Y#Xn]juA]fY7OYR;7^HnG$D)A[u>Dsp`X?:S7p/_^f9PaWUXwA,(pup=al=>UYp)_UIH=vfoH$%=uiA/9rk2=f0$s9Jud7@<T=[-(vX*v#LVM9.;NP/4L8Vu2k##DP0a6l(<d&.YcLx4ern5:B]+xBRKjN3gf=A*^b.UJ=uJD6pIbOO,vQ_O,uh78$q92wgfavZg^:tI^fVB2nl[nZ]k>TZM5p5J;u?WfX#(IbvkZ<t$i;Ub5$APJV%*#A6vTH7LDWv:wR&c<H<>LV/uR67,:)T6[s=:<3(Kc^L9=1wk76tG&D<.Y2tJIO87ElR:mMLjADeU5)l+x$6LcvdkZ1_3O^0>o]`.TG.K28?+U:F9dF:T[hD;4UK,d1bIqZOuGFc]J-?KrxmI6n?YGf5vgJA4V(#Z&I'hnxVFkB?e,lmj1;-Tl8rg<UvRRt?-D?v;a;imkc/C-1@,8jwLWusX)so+%J-?WAIFMF4S1g$9_B8AZ9u'7qss8iZc[BJUuH27,s<uuMeE@+v1WuvO1ntv9v_`_u>#5/s3[apWMxFH#/D;ccKB%u]P-q]$BoM-G5hp]c]TMVew^1[]2DW9KdfNt,T.LAi^kr*8H`<$tECanLBQ.@Qu1v<vFrso:vGuqH5)Ll'h;n'4'3vs#K:b1-aKfx[AEoK)S`fw+YaR@E+%'5xTocN[.cm+#D)S$Wr5vIa)uSH0UNK_nC?u44@S7A4F^_@=2`LPrA/vb@^Ja_]7o_]9,):=?AQe/&5nbbwi0>dAH-d%3`]`[lI+#5ds`s,cEoB-WZ-L+wEY_](OE*_v2mCjK.Ss+E-rXgI*]%u'h7vwsFQnvs$KWOd)xu22nLApecMpqhv5v8`;Ls/mm/LY-m1K':^>BHQ/xkHX^E7v_.8U3$c<j,lrO7:68:vW5#w^bEL8gpBabaNWiBrB=gET5jC+Jh32asFwt_QNOPF#k?^3vYC^etx4k@b*8?nu;+lU>fh7<$=mB7m3))`sr;V5K;8W4Q1;WRd8YYE`Gl0$G=BH.K?;/bEN`ZFMUW5TLe.1g_fS>,(p<?2AWVgZ+bA(Y5Ep]IkaV_)dWmau'<16]u#vol%6DcFgcVNHq4,me8FgGV%8NhmaO2c2vJ002$%40?p$SdYKZ[TP1(Z8L';&NTu^oOL0iKiImSut[q6#=ZkDbTvpC+jP0^h.'J01K8^lSm'hpSNt^OnBaKGqteq9X.sfh[1`m?o+Xs7@?t&l<*uq66,?r1I[muR@vpuNpSk@4<-'Sx)r08eb1vusK,#skA6IL45gCI;2US</+V-Q21pL7<hG0vLQgn_bA['r[>,3%P]V63u7L=La/AH*O^'.(SW1MK^+H/vhfofMbP7X<^qA_0ubV5v&1wR[1'u:9VM1&[V0L]P8-O+:&PM1vGH6A3m-xR[7:2fh:F4E%x/)SM4*IuuT<X]*^&IG_``dm4?afTexOT8v5es?qYU`KN&V%4b$P-,v3h@b*CweZaKk^muj/EdY)]n-L^81O8V>(5AvT#cW=1X_['YrhaY(lb)>;f7vZRr/v8)'oeQC%7P.?.AtCxb4]oKl>pDEuktgFm0:u0?funl#5&x#lN7CO$ZSeURp,c5f7v[]qwXiok?M-Q$J7T)[&eCC1_L/7FY>0955J?XM>rW>dAU*^:6#<I0`N]1phblW>g<f+Qr#MtOD]k`ATep>]tuWtTMro=f-8G@kE#8>8sfCEo]ka&=,vJY`5cRoK4IY)A/u@kPRnfs,Lf,Zh%ir$S#.ipCK2So].qHb>(hC<9oq)YpoK0x4GGk$*,Nft9ZKZ2eJa>K^?tP:v(l[=6l,Ak*Kr;.^,JL9YdqL&k3GEt>6v;p=S@)(HxiAK2X5W(xrkpTY:mG-TR7CF#fVpY8au7J=efIP@sLatt]a<H^O2sHE`<3Ooak&Ws3TDeN)KW+oue?d/l8YQO,L9HCmu.2x;_h+7-?lgXg[p07Ab']63mD)7Hu4w1nsbX(_XfmEa(l.@9-bmTao:-QIn$N-HaUF`%(.>*lJr:dboQ<Bis6rhEKu2?[2<Hv5/lU<apT4@=4I]nk;nF)DW5Zd1=qf-h5i(8G`7*%kB]ftLgiS*'#`U8M&buW;3UFjr6?oAKDL$8[,.]8=IMl&;?hxEfn9p;A5p9%nem%IGIdjWOu0,9^P*V=:KPCCa,GxDSeEA,ER:eo&AbA_P0GWt>l;eTRaodmk?.>Dle8ex3$-UGFMI76<_P0O8u`4m05JCx@OZQ?tQpZ55u.wwkl$=H5Lf=,5*Z]HIBr,3jLe>KiKsoN_jN3RR7/=w],`KnLp%**:vPOJ+qvrxskfNi-LYR0%a;n'=2u)R.hVm62B_F%1q0c)R%iME8hSMF`j:Qe8v<r]:ffHWCCCA>Us#6Ows;I,aliJO*L2FlQs15IFM*d:h,:&koKfXIQt]p^qkv'R?r)T2+01X'>5/a8`5r&S`jUap/VavMe.*+^;G,B5aKJKfI(]V';$Xl>Nf^#L5fNxwxt8niWKhQsJfwE]:QLSYEIt0mG_pE'J:f-=+L6Pk0qvZ(2nJ$7qf@'+gAiWpoKkeJT;SIQJ[r)sAFcHXr-ESN,U;f%-u[Y[&mu_DL'd2l&(FS4#SlU7;$nERJ<BOZjS2W&5qodhF;:,88q/pcdL&Q:rY-[-4?vfZ7nRvMMlQ6`k:cB>[u'-Gjk+d2_P0b-`32G5I>%<#IpJNp2v9(THMp4[TaA9t(3ltvCWq-N5sul.ln-nRKT-Xj3Wm@^,2#N@^uj?ZEpefkFiB-6/qTQ:pVKhLBBNd^i'Wl):v,0NL%t&i9vRIXJax4)r+B>N6ka5q=udCK6dhZIk9GC-Ms7UDVeX&l(<'9Nd1_$45Ld;e'vSZ<Y,TrotCO]T-vAwuZ9OOQ>6utG2=?khA%:WW(t`UISVh1IDMSYf5Auk+<c48*vGxh5&Q3LM`sca2DlPkvx,P/XiAa&7^$w+WsOIV$8qY3fR7%(SL7S#eM1VC)xkB&mUmkr4er-U%;$OuJE7.<0SKe^rhu#7W/a[NmVuB#&mCwV&HDJm#;Q/,)3=^V&Zu<*FM7_H)6Hk`k^ss;,Of8/cwtoSU;@##cx2<mXQIi0lRavTnsK6t1rts:9.C)d+PS&9-^A^NBepDEiZ/*Xk1%fZNcsQ1=o/=l&1i;VeIq?[c+dFEeNlt)]Dl&Wxe&q`'1vMCm-K,GmR6kKY;Lo1QZKpo=N&+_(2oG?=&#oR#AOauqTF0v$T$d8h8vDg,puZl0to5(:WuK.J7um0:Hu]n;6vT>J+l]8/ohSmP-LU/x=CHXaNKR@G-jXi8--dY1R6#<j+$uZ,?bN/lFi8_4?IfJ?cMQHm87A#]G7m+^]t;H)2XK0NvlE*6o<c%L07g9#Fk`BkKL2.jD&_f'Wf=eBC#j&`FJY;UU%N8^Iu0o,-d8*K=e&o+Al_HqxUYcGgUV/,Aac/pgt]<3.,-$Uwf%_Q7;^f#(-^rF7,.SmFVh[ubH`j_&v#._R%V`lCZ?H'[bm=EOX<M'5jInd3Y=O5W6@]_v?rSY2vl;w8>0lUAoE[f$%sCKX,;'wXlme_Y?2VC4`$%=%KmE0S72IEJoutblKk@KG76eZCD-JB7vo`fp4xP5=Yg0J3b[l7&mts[>$)ZEY30=<sU1[BRR5%%8YuIP.CY_k]<e8[%OH/&ls$MV[&tBkR7'2?Vu@,5@MqP&7+p%Gtk?aBRIYVvq9Tx3YYP_?WaFN,5n(Oj-vdvgwgbbmI'*Fa.Ux%n4j)D0:Hk'#o<)5ACK-PVsK4Tg-(uFEWqv&uGi?RnmC2QmdGEZaI7TRr'LDO)`u,+J=brIJXN9cd]OpO6>7X9[pim6@=b+Ri;jnhw(8i*8*q.q35SD(-/*NWbRqp.5nIF&2e7'5b8gV@2rsb9'SYV$gtA[HevpT_,n7)X[.eRI?_*lP7[O7x`AD^fVruk2g3GFia5vJle,r._<bAGReT/'Dr[u8tp8a=t&M[%ZWs6rWUok(`m]dBA0a7*tixTg(r1B_@9#qq-LYP=-iQs1Xa)ImUE`q(86HuKlB;t36ijmerWO]N7$0G'0S?+-iCZ%ivHCsuK.YF2HE[av<I5#bGNWYe2b0-0&p9%+j:WFpTW,qIa]x>jnPW,:$gE.CDI+#6%]9OlSr6D/uaZc=/f@k]UY5v3Y%6.Ihj1v/i/YB_<39>4U8#YbdAU`nG?0M_,d8:Zj['L/'C7N)n=6u,Q2.=7,4<#0`hVeK0%[[Z1j-Lr>L1#IF'V#^br/5EwtItEK)fL+,^WGCE9aJ$gj]@Q0jguWgSgLcAW<6Ibox$(%7R%laDbL24#0+:h2u=>kTWt#JQiqV%[-1lEO.rC;t?kNSX6vPhC&J/+1<r=/@fLZ.0O7LKM&bjs?_q4udgYDc8MGBEE;24hF=`UI4xFr`QdaY?2K=:GnRrFa;v4g5#$DS@Q@kqxv4(`j+;-bM5>Zv88=uEA$`6Vi5`7j1==tq(:<V(00RuL@GYuV0Y*:Jv%xC9u):F+t<vKU3E?B_G&wtQ.0ceD`KwK9t2'LB:AZp3L$Y^idA]kpcTPK7a)R%uR[pYsE/iuE'KI(Ij^@QPuOnE.Mner5;n36iWAg4gS';$9lx=L/TKt5_O?7])GcLk+C(h'$&G`tf'n,f^k.A-V8px+r<vvK`>oVNZv(EKkDEjV_&jcUd(I4oS'K.Yfn5%S(;A`<F5R?buJo[l,VdUJ0LI(qNT^s'9ahO8=Fk9h75w'7[4px+P'sKR/[S$9mGJ8fmEJhp0rA*s'+EI&.0QWqY;RJa'i/lASd/Bq73mukM+:B<]gL1'YF/.Ab?MUslB[lpCtD9v?Ql@#^kv;J[w]ok[$;SIdmI3qGlUK<d>`eo'g[Q-F<Cu(noC$vf'0Z%[@=f_H61TDVTS*%D:cLkh+glEO$cmXlw^9s.?t/J)xS4n,Xv,vmU]&qCi%Fu.GX&/7c2DM)JSV;]7*0l&c=']O?ctWwb_bs1V*L<nGXoprrb/Tx9jbT13VRNI2c:QS;L`FUjVSdY`QY,llrhh/.L#KdYX6Q0)8at_.&8uQ3I*n*+P0Uq];Tuh01lK/`)=aOba1v*o<0Pkc[7[L-2FDs)vMhTgk&jaoj.Dh.KS[bI4xkoK6O5?(NINExP%^9I#-76En<t<H/Y>QpMmfF?.P[69UPf'def6Ef_IqCK?Fr2F[;aEo0Fa1/niKuYU$MF&+Vddc@c/sw['KVY6N7Tf3D'J:hmm2R>0d(Lf'WbDw^O;j$veTdm)_S^-`]u2n>A(lXdfTZ_.LE2.Z<%0ETrb-7hkuiqbfvAMHQ1P)ls$@jp#q1/B+dn#EnI/Tm]bn1a08]*4UZS5r4bv[ek(6ROQ34X+,kP&H.(hutArC<f_OPNUu/&qR<*P3^NO*;RUdCPH1s/3e[_KmXn0u`tucs5Udtu9eYxRq?rxr1Zrruh]s?P]Gj`t[4fW+d5LH3]7WYWehkgIh>Vm?7((RSA&f]a7QRL10MK]j1'v00te'Pjf;K%j&U<q[]<(H+YxnUZY9jPZP@$253&fdHR*dI#b_a6l)&<+X>xtg^X*#'8,1g3SGAaxNk>KV#gag$1VEC_vvH)#5(7j8ZX?1VBodYmt=.VT$R[ubh'cYlW`8c>lk#a3AZ--)IZYejtB?gdc;Y#`OWDI;a)S73S^m%@2sR2Sw:+m5ud(hbe?i]RUWiKZHuYXf9d3tX$eH$HYeFr4H>a)Q.+GD&e^M.'eR-v.3)]<w[_47Shtb'[1olMa%_ZFjp;Z.IAm0gKT0)s?*u^A-v#&vYXYm:U7qW#w;]&&kAZW_+F$fKG9/NVArc/vmvFZkjoVUa?]+I6dtg7t=h^FdG3Kh$.mwYsl6n5dn7&hfo_wB2+bA@O#A)]6;s_bc<+s5`Eq#XVQ6%;n,V1;uG)IR/L*K.os%LbRU@Gqk3dtPcbt]vJ3vFu4u<mm6h;9CQ)Gi2j%.<7#7(-=u8a6CtfkQ'llH:(-gJoL9'&>:vvB:rG@T4/qkPV2v'^3uOshmZt<%J92m+xt'0FsH?4Hd]sX-$jtE]frlFE%%mNW'-KT3[1Aq042iGp**@68p>_]-/cuhU5l[cLHuB0nm:QQ,=ibLHoImw_2+v3KcG`IbnquN3UVRkaK`s3'A-K-nKtCAW6T#pQA^`mRCDu#MvS%Ws,Jpi+LhJ>7='v(kiFVKcl/QN[a9vJs0R%f%aV]HNrNb0?%T*?>%csg6U(.m7)_@uYtAuxGLn3l8D@)+,Th&Z6:#5>@H;u<18fNq12SIsr_NTlGCMGx17%>l%VvN$UVMKKE=tbIWDq0rn`:dFnXSM]V#5r,%;00kv+F(g^mkUs&'M0%sUTV?KgBu$*&MbCF6SH`ve.Tqfm>lL(X',AIwFVW]QK+pp0$+YETHib>oJ=2+eb<Y,+=t%'4(?noOYucB?xYC'nSeOKvV4xNjrHqLVY,8Pgq+Mr1(#c2[af&Q`_N?rZP+)o+;6<XatK_ImEhQ1B19f5?/-UbZxF6TqV$k@nvpo@MNn.k6vO&Ltp@#mu+v.%F^D`[l]s&;K-7k#3I'LZSJDb=Jil&l*mJq.4guTx(NRM9#Xp:.goZJ5@kP#2nr6kDgssL(Rd4W8)TosHAV-k_U?$D064vj3k,4vJO%gVxS;%I=cT6-n+b#Q]wn5fuWMTjHvwDH`TFN$FScqt#[Zlr941v=0l)1c&V7?D:/9'x+iulh:2FTaNwa7>[HMamvOQUc(u7Efmdd0ZfXV7?4w.1T)`K#.Y>:uur8or,f>ju[v*.Q&3g2Q/>Rxp&o.xk0e^d6[E`370fX((S2t?+Lts:H]Ax9vw)bE@&p5fqoSjeYY83jj]5plFWe;5-%KK7EO-EL2^X=2#KE%wcH-xfNE9m3vx:WT)*:V.h6MbM7F;Xh$_q48f3kROn0T4H9(<[8vC)x?+#Klgc_&7R%;Q@1+X1c`FOa4riU.15v.Jenns,^SMj1$7umM4$<F3er-KqrtK%?6ldOi3gNvf%/(ifCs=-u0;n8&Y?G]OMN7dp_0lEb;Wu66G&5WRLY*Z5j?/B*gi$#iKrc_[naFuM$a4Jb62PvIHmXZJ2uuV+].V.',jKh=#C:wbV`]1S;`3'w`p`kcqjt9Iawkc.^u&X($uKsld?tJJ*p`Fi6xF'QW?P,j]H1mf14vr1la1P>ZX<o)SXu2JqW[8On/l<prJm?lG_/TG5,$Mwm7RpomQjEtX)UE0-sfi]3mmnOc_axA64`Q,#(<)Sd[aLUbp3xur+RIWW>jIqT6lZDlKg]op4J9RlTRRIBVQD*^ITB'Cj.W]*,kj#anfGXqi-IKX,2(<nR*KpV.sd<1J<g[uH7e-VtsX4U5kxjWFV8n@pgiYu^f4'RJhI7Tn%s;ngq^`MK50vAZ^.<]:dka2)m7#U:$C%;i?9h[e1SL9NPhGP#fv#0'vK,GWfdmo*6UAk6%6ik=rTJCa#</m<(ALKNtuGVbs9O=5LDd>fL<dP6qp206v_/MUA)@,9#Pw`MpM/KS%$QffNJ;ORG.1GT-F&V.P2[wN0xZ'AA:P3j;2Q0@D_W%H7'ap]=O]:w01^PKDn$6YbfFL'<027oVNfJ,(0HiG$:>;/aS+JNm[lt36hhDVk/Q-PAL#`)e8G9CtbRO$aRj`7v.3A;CHmRQa:g].L'V(l-j`F$G1JX6v(l_jkvLQVs3X9Y52n>YofR3$KQ`77U^R[JWLcYr62%U<-rJlu7Gc4b%Jh-lo:%Q,vhJ]oK6>fI4^M#;?Tpu)v'*PQuQ>R8-Xjp[gEM+MTfqhisB#m9mVR5`ftMB5).+x$;#2w37RwMO`(:n07to$e?Td5MnUH2U&K4(KK,H*G<Fl'iBlKwqlh7;[6k^hUZm`+AawQ-&GlTjt'@97+$wQFqHp#frt./B8Lh>hllR/m.J^,'#Gxjpq9kd_3858J&)]8OxXSWj'a>vnbE#=kE@$O$X`VMV[&9I-AIq`SEaZm1g6Ak]<:J;2SRc:kbb<S75-LjuFDVX0gW;itocf6?;-#;/9rsN'rY^E.C%P]j_o`@a5-tOXGJKYtuPF6Ve#qY*KPArFdu@SW([(vQ$ntqUIrfw`,q$*n3%2O.j&?Z1caWnuTI<%`4s(NDE2e:n>k8YSb6)JCGgI/q5rke=/vRWi1q5taEp5o.u5)^lV,ZZ.(5'suruPU6G$ZhQEB+<6G$wLLvYTg4Z*C+[psOOPlI@WarTHaQWS[+b4r*l).q=8SA&rC?3])<R8uoE#Ds>(pmN]xs;p&__?Y$[-M#V)cGEsir1v.)jBT=>Xv9r&M83wjjJqf3/]$s7S(a1;w9vb&J]=`pG(s(#gpr;cXl86P`mZ<,%YqwJpk7;WVwcqc]-1;$O*7#C5)lI5$Be>HQXgMmX:`;?TEi<Uh2v`gO^f3.qEi<VSWoM175l@/KY#HYl1AE>5s4&nMTs=CrF`^KY6uTwC;-Ec,GDx4=ou?LudpMX1#Px*W&?U)>`qoM)']ki1G2n:F6-:ZF^rru+'t2L<Ah,-T'`_LV_aZ#'Cs',#J_pApK4q[#ZjXn;a*[,l$7Bjqc]:iu*TH3g^aZ+Np@BLYYjrffSX5%`+qjK5j%s-2-vspUj+0N^6vkZl+qcpvR#$5vHuR_SBSZfRE70R-Kum3D9v=$S#.De,:r5OEefxj@Em_:=&v;c4Y0j3(tmC/qH2SxV5tZ%V9vL*xqdLj@V-,W0n%WN'93HtEEr.P)?$V*9KnUB`%jJ9t$M%0wBns4i9f+N*xab3-NqjiVk1p?xbaP3LH`Iswuej,;`1t[nIqL<ohnsFPLkO)B5Ic]d:5EC/vn^;p6MJ]d$vSTC=tSKO5C8H1JV[]l14$O<2vRj1U5B1XL8%NX:D1'(AF(7Ispjuc>QNVVvtHwWj0Hr1Yk)JUgU+:F:t:T?>OMw>dJnaD[t:$Edu<bjPoS&$Ek%Ei-L'0Eh-oN%/1haogALE7ZnGS<-k[m<.lVYNPL)/_N?jw&=aM[PP:OwlAW3mllhqBjYN#BZg`n_1e]2g2+l0v>Qgf<@(*aJ'6su45%aZt>NO*uU6*O9;]jROj6F+A9*;;tC`sL^T0,)h#9Zb/Q-L0BGKcEYIb^N73SSfpYZKvvv9$CYd]s'L.k@Q2LvpgXvrK^T8q+silsP(PYkSlq[jti(qnjxTsM2nqAs$5jk`Pa$e8Vdgv+qAEiFFnMa:,cA]'qoZ;SK.2%fq,]2QnO')du]uW'$4:MV[V4?[J&RbE@_5s/d81^%5bUSqQ0`4msrB6jqfREHt/du:#(e8D3T@xh(.GBe0N+Pi;l$;(2QRD-(%#lWNBc*5uw+q2?SvZca7Y']#7S*-=OvqWtOo@>Q*EhvC&=fxF,G/fq[;X<qxABUdoL1BSYO[+_;K41fj7R]K?S_#t*xjD-Sx$4rNe'[kgKLq`q%xq4c*GE8dv'$uNTjJKO/JuKkT&17S%Fwdf&X^Mr$0tL`R4M@99^5S`fXCdYV$Va'R>RrYR_R7TwrR%ew7h'%#ubBqK.5Ll9m:QY&KCiHBu.]1UVIQJO9qq_%4oeAq/Nbi'C<uu[pXoiE@s;:*LetFO'Ju'ruLkoFc]<kf$Pu88u9nxbHG00ZX+Leo4tR,UZ*`Jjl*v6o7I=#,8%f[Gv<jTEG_48[[,T;mQ4c9@]mu=.P8uCC0;ngUm=JHdx1hJ;06S+#T``MsD8vVi^J#WEPnT9qxpV880+ffA[RKq`/?f7sqL1Eb^Uuxj%`jPVb:l1UaIdcqa6vqOX*SVd*MBhZ_`Aet0S7$$Ti&Zc.:HCn1^OYHQ/#[wHuJRrOL*/%m@#/$rHINx=o<,UPlfVTawtC#g$HJUd1^DCaX;wK<lJB7a@>_$$K)k%TFrJrC61l(r=ur+P(q%,5&,*,/iBO5djA=Q0iu[++Oo*FFFaIej$,RW%xk>#V87DAnif/v'.6)&g(vbo>W&[dK28^1c?ds%#AFttv/2K09NZbZ'ZcMkH)>['&CKx&d<V;ss3eQVc^`#dIeoVk41(@ES`NMtr<rB7e(sR3xK%+6n'TwFVk*d&L%<60i,u0/O-$X5U)04A#^)Ep$58,0xF1I7IM'i&ISe$i4quibXru,G1vK<>;oZG1Joa/1U+vNkEi.-l)>mY@t7uJ*V?UL(/u'[H'S7+w1pVQ(X-L.<?*A(JdHut)Y5s=/t/P`[#`s>1*oqV288v^]V%vs8R)vHC?ItJ?e`Ne5-,qt-*-#k<H^/H'Il]n`3+Gn?e_aW@)xhWT2L^p=]gf8kF:$:]mMm-GkDXmK;7vt%(#e$H-kKDrJ9-[WpMD1*Zmur;A'J0h&K#atD1%BNx.&LAx8viX/YGmut)(1JS$r6kJHDZ(p*$5*SnlT>>HUgw:/v<t^HkUb;>b4>r(vuH4/aa6/cjLAp%LxToi5stfmKkSZh^&aAV-v[IE[O:8<PTTeTFtSIda1g&I$P26r$a8/wKs(fiajpu_a9=dsRBhE$7&J-v5a+I;dX'bT<2a<jS?;?cVX1V$t#kPJ@DRXi]#s^<Kpg/-#BhnUEBmI3oS?ptt3>PZuE28So*x2e#Y=[8#?$9xn&l5W`U(*R,6CJ/hhhlLn[=UR#TWJ/v<k8`7-9k-Vhib7t=$aB<Lmr;h6D4:?UkP?kvfq67K5Awd$ikVZi#,4v:Q(P54E_5CE8LspDx[RE=Nf8qJ;QSu&#BD%Fu:vsI<isah[V^&gCS2U7cQD)l&GZl?@0PuiGw:dVoraAF:#oDl*LAVjMtjf@apa(E2vk`VvL>nq>#&G=boervIbT68+dutPm:rdSR<:HCe'7vW/EF`;<(Qn7?s3dveURNQepm4/>#]II^chfXRFQ1D/?W&V8v7LSwv[X]?:x3D`wM[_N'0tiOnEdo=<7tX(f?`MKj?VM(`EY^i73R8Sg6#8DG'LrDf:%jl-EQbxRAC(xIpdGYRWt<#.,vXc`<@onN^[ioOOu^W`,Sr2JPrL:Rsu:#%N$$Le>IO)PHc)g53#7I[0:t.7?5cU3;sP.=)_%k_%vTK-_smi7Io;?LJs>nQrQ4MW2&2=2V;9pXFB&gQ2&l/e?r6dQ.k:WEUl1*q-q9rNtl]$jG;FV''<%h/*ndL_^VdqMFLq<HlSf(F/Jp*O.LdDNWUb0cFV=X6*%R8s:i3Gr:9M<n@F.sk]#L3thfJwZiJXr5)hujZ:*hA8_L(BTcIf+%a+XG`$bFE>8vZ8trKwmI^kv7#NY$bj/o#l/N;%)L0QMu7Q7^7S2aK.[IEUI7r'OOa3vHprR6F#b4uVJ8)`JJPomS*2M04`NRen[B(+p5'GMOBeR7kq`#$=P4C+v]*c*o/VDDghHvkZXb*v4Nu_sl8TJi=aaB?L]+]t9c]+qvGhJ0`BhP>&qdL9pLZVq,wH.h^/AL6SIMxuiT?Kua_?5q1'?F;q^vO)w5&pp.RuM$FA;O%OLBKIi&x%/@lvLRwRO#qT`l5QHgYW$^ml0f0MwiJE;[`1,2^JPG[O`U;6K^'6.>ELXNY^f>4CDVJ]HPq695Fic88tutK?Wu;$M9#M/>.:76mx++b?`<;ZBfubKUt?qS8&d0*Q8S?Z3;lV;/'%InY(spDrnUR90vgj?.[um;ioAH/mIn+m:YPdg^aa(%t5vF6Jn]Z)].vrC#8dxtV.Ujl>El1KOh6snRWVR0;O#WXx9ZX<T?Oxem0I7-N;Q2_/Dk>U^8v;wqaG;*+If-ov]Z9_^-YmW(;L2-GWK<gA>moC-UUcV^e,)Xp2v^NE>H/,gws']gctYe*/nCe]_`5rN+rf,[Csv7M'mqfwY,jeR6vF8sf^6XDvP/8&OME8kCjFP]ruh22tkb+E/2e((8EHDr(OFs,b%*o:S7tvAj@]lC+Ua^+[sG'cx9+$__$:RhR<.GW0Tp`A?HDUgZ(UOm3ZQ_C*L`>lp2`R(7veeH$rNXN9va^*Ru?'i%lYpj,P+2)QMqwT>[V7Ud'tTh0aEtAfai%R1EFo:xFD.eNuSwr>%_)v%+:?^[a2JgE`D%KUun@YLkWAB9vL3TVGO5x9vJ[xm(^qH+OroH(W#-GiANjQW&_iH'&;/v>7&@;3a)'t1?[@ox+)*Y0`LLQkS>#iS*af[xEO3`;r-8@gCYcwc3JN`(7u&Hau[5V_Wp-9.qb5>5l<FxpZA>HBr@1=%7K'#%L?%8]IN0/a<p2fPLRIE[P>p=YbSb>jSvWt4iwvjLJErw''j&Xv'GbmR7dA`*vSI#^0aH+eu%[judwiOYu`C/]I6;+r=UqNKPb@SGu-rOaH8xp/q-hvrq3lR&`#=X]F<G%VI.fW9MxQ8S7hWIm-x<39&.aV@]gAdhamsG1AZ+MbFhUdFfa7T[aREokuig<vKw?;'p.K(^oq*mVqlrooUU?o45Wl:*ROU]9v8cmWr/g7Ct=,QdLRM1ombTLc)>Omv$`[?,,Cb2G,o-j@F;&$j7b,p5n0efir<M=15*Nur7/W[gl95KhCEJF(n-]8tPs%QxX'8AsUhc2JB?6k%b'G`#aOw#_so*2mLWU6Q@t/9%oQi%s6S=n:-=4J<t6ML(_Qs*%ab0+ttCO$ooOGMlotobS5JX8)qMo%TV3;IaIH=26_n%3(v<'fqc@==sk2UJiA$en_So:g-oKoWTuOl_tK2AfAA]BpoMdldFrU@u.(Ii<NtTVXl%'C#lhSO$._-bAs+X&M_s3ZCHc6ZuZi`6J.vk0J%qYFB*vr]Tp2UT]G`QSuWq]7OQ^mngZ9M:fMaSD1:vbjRjgegd'LF05mU7)^vkGOTdm&#E7rni%j`QRNv[omDTd*K.+iN:YYn)0emK7)KcfZ##x44$g;s6K5m02q.DsnO]a-*n4nH[]m<uef<aN]W<U)w+$VtKEOQjrfE,om;N:q`iX1oYWW10nHErHvdR*%]ojd,EAJ.BeI]Is(LgJkhNJ*vYFpX:1$j5?&Wu0s,(vNl%WEHU-,HTM)tt-m1:<F)JZUisrLjBu9dO<#h'Y<sNWp-Lr'T3BOo'>Z/[:DV<Apx96U(_sW+]b$.xn:Q6ww33VR/i;r4c0JWV0JT-:aEokv3.1h:w&?_kia,tL._shcLb$dl8L[_*`/Krv>e*:G`-LcP7U^oJ`>j6WGAbts[H$hKhR7'Q%Du?'*3t@v/L8(5:g_T?'<L,D4dNltT(a,2p)RhbXqZ+FEQa-lFwmTDfwt0)9Gb,VkQ%BhmwFc'59i;auCu`-%SZY5]uuLX7DanD9;#?g[eJST,(jhNoFVqlO4%ctt6vAgL=clX%'f,L_M7ct)wk=ZFckaW<8?E:jOmrUiwken29cU?(4JuM(1K@'cMBhIa'7h?J:mdxB[CRYV3v7j4%hSEX5QOa?^Lc=L1J[H)gCl?xa<TjSvBLKleq3[H=#D5/M'5TqI`K1LiK`e3oq$q^n'gC*/vAm/esNxT6],CA/cjt,$9DSvDtHW7$nRcfFfY..eIR(HYaYBsLui/=8JoCsr'kj46u9UcdZjewE2)3YM'7&e/JXnv;VC*AFJYT6U3Y#*4v)/[tDT6/tCeg[h$5QF:[#*Z0gsjv#a-_b5vnI*3hSf_>Rm#UqFW*>NscUO`QdrY`*Va2qsWl@fuWAPHVv95RQv@)._CvN:m$R*PSCYm#MJLR]DhB'2&P8w$LTw)m<OU8a>9P/puW(x3/O3&-UceQAkA%905dkR9;u4&gLB5U;]udT.LIOe_sT;ALVUXX4vqs`jsY$-4m;CRho1IQT[2F2YGA@s^JPG,g7P1<M9ep1]b7+PZ*DX^:ZVI&-qgq524'e2T.]Q7Z4acbZT4-/w42vg3D1.M@kXgmE`@`gUuhJfdrYbbf(O.+Uk_9((vjSDpq>InlhKs1HaGW_*lJ>=jdf2T1&;D=F)Nf2nFD2R.Lu,,Y*[j%:Q@K997_.>5t1C/1BLFTHm;bbjeQj=p43;/Lfab'c<,n>mKYKiuk%v)s=??_?'GKk*pMC,xtUIUf:uXAq=gG+QV(J*k6N]L(Dhq<lJbgr4-h^nl_m5dsL9NP_`p4/hrp7#E2,Mr.iV8IutuhZhr1RLZn*C;uJx6xbC@c(nk/4PRn,+Mte==dg`tDJ]=k]GxA[;P1oB5eOR6B=Hbw?r[k'2TB'MQ+`j2VQ:tI)VOAa`Qn%wROis`6NX/O<f=4Kc#8oOpv+2%M%W9e5F'a3u;cU+mkrqD<HF`C41a(;mxPWSK)-L8^Dfi,<'eUK'xRem#k^dtpC1gZ>41pRVuIMF)lgfhUxg)gU9xugD)2BQ#x5L35SKmd31]3TI<M9)FIxbd.abq6/iLr2:08.Vnor$c4+2v,EKLgFMnimnb@L$kZvkf@p=AM';7`$_sD'L=J?[*34=,2b(9T7Xo6La^3f$vtR.8t(;0mte89Kc.9I'/#BT1fA]l&o^U5M'/UMWYH@^u$Qg2@V'gu0qh$;Tr]OkL%'3;FlIBg6t8[J.C2iGphDoe.2aA$oHq6t9W8?`_s:o+;B&5YDk@0-dpK]#/1nV)Hc/A%:#a;](OsPG:muQjmqO/sR6Y8O#&/3U+tPe-1a^$-&LeCKts*djb,dU9$b<@aXnsJ#JUNFgk+[W6vF=u%B76g>QI'`T8KE-/ouq%ZJjojU&`H+g[f:&Dh?jlt_fHwC#qq61DKV-IsLb9M^<&(-3lN&=*@uxrtts-vkuN<];$vY)AuYOMP+EAXF`JtVP_HCKgd(2?46)p_d-J1QOndxtA#4/4GjHluwMYne?U#fl9;`/ojIH<J-WKRCDEbfpgGu80iKkCs'TR;V+(bSM7Q2X?(<s3OeJ,V*SlvleqrRa#Alo(S%lAbOvGU&Ku5L>]7v$Mo`AsJqQbNXH4$bHDJ(us`wKHclRAjVVbl0^pqut;aki#@)uu$K(4B<HH$LE6UWIYcDFroaC+G]-v.(>A'hr*UGN<(Knt)]<olkeoB.S?Tl'vg+aM`HhK=uN(TUAH)P#c>o=tPYU:QnRnH=r/gsIa]g)8tkBaod0@xh<l]57$%B+6[/<<vXRpG$VprP6$Zk7iurP[gql.U.7J%v4Biv;WUkiV'qK$SGm06q3-Q%vko)g<<?U.vu$B[R#v$,l#Trw[+vJWGsa>(L)ho=.N#kE:#l?%POj#W37LI>(._QgO@)X7qW1/d&AFI&u;q12H17KtUE2F#tkJupIa(C*)dXGM9dM:J^5v3@X+qHn42t9+A,r-dc;8Dcn>gC=B(aiZPPiL0O3sK--OGo*<>tT19DA?J`B?mrlFo4IWu>pwfffP5q<sAhItABBDw?kA1Qnn`?mkbIbhaU,>M-9v+W['u1xW,tNFi>Da88cEqa_159Qss4`M[1fxD-@khO@-n*)vcM?mkj+R3vSf++@XW*s7lHo5v-iZ_tE*ThKhP8w6?w'?B^TZdu17uXuQO*lR31kj81jM<VbxnjXrk=L2:%YuBS>`wX4FHZtlZ86v7k@97'^xIBA)(87O8M_sbXT0V8x16qY[SJ<+J@T5&TEjk:45iT_E4XtE($V#+O6tJ&^@'-3S=v,mL#t5Y)`&K_:M_a^DJQmCF,VdPvEL<AO1[aHP$R@FFL68&u1=WU?e'hY)Mg5%GC5qhkrB4M^fVn9t3N4jQ<Bd+nDZk).Lx1TbObu_TK;R[Us)-iirDZ[re?n#](d$6SL+;LCjr-;O58HJSmpgTD3-LK575%@a?.LZ)4+p[T[xImO.F`89p>>1PO+rpUn,L>w*]:cG7v+HQ28v_cxA)m,RLf-gaJIg7;kYSq^8QFo3H6@t_XGk&qC?>E^ZUL=$pr@-')jl9/?uc$rH'.#caT3hQ6lj`>JuDO)wtq3A=jfU&?pc/cM_;-;p*@(;_N:dTn>?bg:QNjWIumtp_LB_'_/I'ugH5sjdT9xw-#LX?I$_kjju3E9Zfc+V:^8@n=q<bc^t-_6@n`dY8hf[/kA#KNvkO`S#L*)/[uP>[.fDH@'=%</:Q$E8[aQ<8`apAq3l5/<BJoBq2orV:.qo-13Z1>k[t%jmRe]qx^a($VHFPVVu_5h,QR02EK**IWT%QQW)WR,`BL3V6MBVdxbaK.jhf>i2S$oCabYMD$%4gaI[ax)'IVFH&+c>n+'5-E96)P0EODDpNKPAX)Pnn28tuTgL8`u*c8%Qp?J`Rj*eCj>$^*OKf6vp>Lbs.=KMuuNG*lXG;S7q2dmK/f,)vuS]K($]tOna1gF2R9:=gSVBX)AF^a*,mQ?r620,J5VuqH/[WX#&oUBpNXA)RvBOq&=6ex4Te.ba6=WJh<#FopVw>+U/#U^bN-Ppm=li8H'O$gkMPL@2K-*T;bv[^s^0B@&E&G'?9IXtj>SCa,didd[u$ghtHutl]vhH.vEPj4u0ggplPej(C'x^lkh@*uj_#stP`,Px45KXkhw3nH`uh<=tcKO--VnHCsjF'9-0Th6rZqHsZ5r?--7f-JrtW+8v_ib.LjbeiU92vXNc$?pD9.QpKbKlhJd>.eD.n=Za/7k(se9m4m$qP77RMmB:AqM]aig,2ue4n=785&S[Sg8?bG`)GMZe,go+e:BSHi)rHqj0sOSoV6nn,2GuELqDd-L3@rjq*+Lg]B^slJ]`Nx%Ov0s=[C(/_l<sYR8>54gtr,F[j-Lwqtas:^-h]tESQs=@2SR/&w*1g;lCa[AJvnRgBG)`36W_,Eb1Kn4hA6(^3VHbTCcul#d;bqDYv_w6MNk.3s@Fs'adeM:3ht*e,rO;A=;r_c&*sd8oXuamFdlbg3,mHD@h`S#;=<pKkwj&,'IW/lW_WeCw`3-hs+skSTJA4p+$6sS[Q.PiAw@4R$=##;W%uM[rNr#wiU0sZ-Nnpn*96q;:_qesjb]42IhpZ4P*5-2#;ADvsqH7gi8al%WR5C'I_gf:V;t:EmJuM<P=abdG=-u<1v-q=iVe_,Oapc^)Za8#OPL$ksGQCdf*q:^L4l+#sp`cGPhU_rf/+Rrl3vcudQ.v=^sJYHT0gSwb4vD=>jjRv.,Q^lFb&j_[+V/[a$lht5.ut#;Bfa(28tcirhua;Lw+]hrml0$[ct';0>kYW+CH/KhQuYPDotZm:S7^52fl$(M4S-Yp8-=m2o%ASSXu:9AneZ30akj(0B#-I2RmH#]R%-M,4A0v9=uNUq.:4dJu#8SdumfABYY,c8kfsK:1t^'kGlmlJef[R<+J&-Nvk4c(.qS*&rKeT'[Wb6KefCwjEAJ=#D<_JjWS4%cx4lp#S@=;$ok_nq-_cRrB/YxRIaMKf6vPuZ*:CDel]'Q/D`[n64J5]u2kH:*tLl[s*_r;hu,W(%:2tN.SO+@lc2-iRS8<?IY,]O[^?P.EDoC.)EVu9E7bClkB_%VtFg7/L6J-o*-q%7q#$S`o1;=0lR30.#R'l+Z)e0Rk@3#,PttPJIUk0`YGOE'&(Cw@`vk[=Q>:>40.pF0qjfYp1=joxEn`M1<wI.I2:v3e(F`CI_JuDvl^tlv%?^*vAlS6;99vl9/dNaQ'o,9I_JuLui0umGG+vY58JZ'oikJ84a^JRq`X4)a<tkM*Xtu1_R7H@QEeogV4PJLmO*<a88Le]4p&LHYw=VOx7_arus_34&)ck`6(Fr$65Ac+DIv7x&-hBn'J1vG_cgF>EtRn)15Rl=AtX79Tg8iLCVpmZfhN-,]eq5GR^0<^d6Au/s9R@'Tj@V4b)YK9;1;@?PVOo]Flru4NIfHiJxtudF-=H.p/%aPT;WH3exMa4[tV,OnUvk3U?0#CRM@)Lu2#0DgX#5isNurwb6P3N+mgG',XHp>vM#t^;+uA`P1%4<*wSlZhpdHI_0Tu(,7[se(mus6hDh'w$hRu99v^PFt7U+U2&[t[dR4TbEftudXralLv&SIPLLNJjf0)oFF4,vWoY@%*DP)_N>TH4EfPV>^rYPqY`D#qfI7NpcBo2*i=UxF=q6xtv0DttJfZ:GnSju-%X,-d]p49Q<$bi'W@(b7-xOMVH7Z2Q:>Goss6u77M:C`<]hU]+s7+C`(XUxO[f*GM&r25&nbaX,gBr=IRW1-O:evNUdI/6vD[:9V-@Ra2xJw[jQZWk7xtFYsOlR5vn,<,pfihN4/1=hQe#hi8D=jjJc[0I7;@MqMMCf'BX'+`k*'v77B$notIWlCaI0KMU;6`0a&U<f(HZ'R@TFpTFYR(/(2StN'`>%1%6n:m5LcXhspX#K*8e_'qKO38^HmFIs7v?1B#8#FtrqafLQSEEc4(<LR^uWPV+Wd&KKK8-L6G=df27Awi2oQ'Lmahfs>+7v7P0iS4Ip]l8=2AK'?gB:JVvvk49F7Rle%OckG=(/CD@+e8O*2V7l3:*ok3#RX?NaJh#QpIswR'_/`5`*Lv@eEej2iaG&Sv8upR,GEX/9dK]EW$61X+.f=fDxoKS0-K%p)gt)nD^3W(s*TdO.bmgobposPWjLF$nTcM89uu>9GtuQrjcaPMHbo5or.(ZjNEs*bLLID4V4kd;+TUk1$o%UjR^)/$87vkhsDD,07u,XQ:`NK*]:m%uHx,hj1[`gCx>]kaIvk5[:WupOCEip51eOD0Ket>[RDl.;N2qP2APOXKu.v1N[miZa-#_7>a6lbha_aT32s=5uv.28TL4o$=6&L^wtIq`oR)7B#,5J]7:3vh>9s]hsYK5cvc-AE.KP.bPHJT*&'VA*^u_a7[Kc@KZ)4m%jj+4>b_8v7gRWIWgI*vGcpI9,SU#_S:YWu'vb,vSTgM`=E-'a=YElA;1?Y),<g+vYlkXuwHnR71PDv7EhNT#hm@k2(hANG4Vx)v#`2VXMQwKps^hmnCU2_9>V(rt[v&;1;E''#VkP2G%Nco@kM_B/cAL`P5T3qa^*;r=Ookt@$+qwtVk0D)<,Ei&tJ2cu-jc6lZ<<atCAE^ah3rLI]<1$%r%@cm$sj)s#sNwLvvL]ab<<Ws.RGPp0r:'*?I1fU$9Gtu'kFk^92MU<k9017YxiL^4O%(r[l8hAsX=b`Ybf+qmsxQIo3sBKq0'jAYT.6rBJjR7&Io:-iqi_acE19B35VlQ$dOQupxj6uajr^A:v+QI>#TrA]i+^i3MNT@owxKu+,W^7M*k&q?U^8vR8%tuR7cHkCDb0p#jd6-c*&:v5[Jkd(U[CM:$J'u/4==tAw`tK3_9BsA4/@O4Y4X[0naR##m<+'QLEQad>kb<d'^Cu`qla$@m`h^%>P6<)?<EV)HFpqfgb,<@tno]d9Bxoe%G'?no8S7jK,(%Z^K6taNLbrBdB`a8^w8vF%:gE(jFG.LX?P/Pu+WK7e+)Olu**[e^$CsmS%9vRRDZcrERnlPiFZeBL5%j@Ke8vUSpDr9[U&?P'LIIaTBMi;Qe0(sl(^QZCR&j5@1S[$m[VWs+'FqQr<vgPR4PPp((2M(S:6b[w7=]JP<ru6x3f*7M7lJhq=DrUDTto,AWdn%#?)L$qpDr2kii*AL37vnS_&sR9iuKG1cdrZGdRuacR-Pp%A/0Johcuvdo[b.hemru1^LaEc^)Vp0GQ[TiBKGcOj)#"
	),
	Md = 7;
const Ed = {
	LATENT_SIZE: Md,
	lerp: od,
	lerpFloat: ud,
	lerpLinearFloat: ld,
	rgbToLatent: cd,
	latentToRgb: Uc,
	floatRgbToLatent: hd,
	latentToFloatRgb: El,
	linearFloatRgbToLatent: dd,
	latentToLinearFloatRgb: Bc,
	glsl: bd,
	lutTexture: yd
};
Number.EPSILON === void 0 && (Number.EPSILON = Math.pow(2, -52));
Number.isInteger === void 0 &&
	(Number.isInteger = function (e) {
		return typeof e == 'number' && isFinite(e) && Math.floor(e) === e;
	});
Math.sign === void 0 &&
	(Math.sign = function (e) {
		return e < 0 ? -1 : e > 0 ? 1 : +e;
	});
'name' in Function.prototype ||
	Object.defineProperty(Function.prototype, 'name', {
		get: function () {
			return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
		}
	});
Object.assign === void 0 &&
	(Object.assign = function (e) {
		if (e == null) throw new TypeError('Cannot convert undefined or null to object');
		for (var t = Object(e), n = 1; n < arguments.length; n++) {
			var r = arguments[n];
			if (r != null) for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
		}
		return t;
	});
var Sd = '109dev',
	Ld = 0,
	Kl = 1,
	Td = 2,
	Hc = 1,
	Ad = 2,
	ta = 3,
	Qa = 0,
	Tt = 1,
	Co = 2,
	Wc = 1,
	qc = 0,
	Rd = 1,
	$a = 2,
	ia = 0,
	aa = 1,
	Jl = 2,
	Xl = 3,
	Yl = 4,
	Cd = 5,
	gi = 100,
	Pd = 101,
	Id = 102,
	Go = 103,
	Vo = 104,
	Dd = 200,
	Nd = 201,
	Od = 202,
	Fd = 203,
	jc = 204,
	Kc = 205,
	kd = 206,
	Ud = 207,
	Bd = 208,
	Gd = 209,
	Vd = 210,
	Hd = 0,
	Wd = 1,
	qd = 2,
	Au = 3,
	jd = 4,
	Kd = 5,
	Jd = 6,
	Xd = 7,
	Po = 0,
	Yd = 1,
	Zd = 2,
	ks = 0,
	Jc = 1,
	Qd = 2,
	$d = 3,
	zd = 4,
	ep = 5,
	Ll = 300,
	Tl = 301,
	Al = 302,
	Xc = 303,
	Rl = 304,
	Yc = 305,
	Cl = 306,
	Pl = 307,
	Gs = 1e3,
	Kt = 1001,
	Vs = 1002,
	Dt = 1003,
	Il = 1004,
	Dl = 1005,
	It = 1006,
	Zc = 1007,
	Io = 1008,
	Nl = 1009,
	tp = 1010,
	np = 1011,
	Hs = 1012,
	rp = 1013,
	Qc = 1014,
	ha = 1015,
	Ol = 1016,
	ip = 1017,
	ap = 1018,
	sp = 1019,
	Ws = 1020,
	op = 1021,
	jr = 1022,
	tr = 1023,
	up = 1024,
	lp = 1025,
	Si = 1026,
	da = 1027,
	fp = 1028,
	Zl = 33776,
	Ql = 33777,
	$l = 33778,
	zl = 33779,
	ef = 35840,
	tf = 35841,
	nf = 35842,
	rf = 35843,
	cp = 36196,
	hp = 37808,
	dp = 37809,
	pp = 37810,
	vp = 37811,
	mp = 37812,
	gp = 37813,
	_p = 37814,
	xp = 37815,
	bp = 37816,
	yp = 37817,
	wp = 37818,
	Mp = 37819,
	Ep = 37820,
	Sp = 37821,
	Lp = 2200,
	Tp = 2201,
	Ap = 2202,
	qs = 2300,
	Us = 2301,
	Ho = 2302,
	Ti = 2400,
	_i = 2401,
	js = 2402,
	Fl = 0,
	Rp = 1,
	Cp = 2,
	Ks = 3e3,
	Pp = 3001,
	$c = 3007,
	Ip = 3002,
	Dp = 3003,
	Np = 3004,
	Op = 3005,
	Fp = 3006,
	kp = 3200,
	Up = 3201,
	za = 0,
	Bp = 1,
	Wo = 7680,
	Gp = 519;
function Vn() {}
Object.assign(Vn.prototype, {
	addEventListener: function (e, t) {
		this._listeners === void 0 && (this._listeners = {});
		var n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	},
	hasEventListener: function (e, t) {
		if (this._listeners === void 0) return !1;
		var n = this._listeners;
		return n[e] !== void 0 && n[e].indexOf(t) !== -1;
	},
	removeEventListener: function (e, t) {
		if (this._listeners !== void 0) {
			var n = this._listeners,
				r = n[e];
			if (r !== void 0) {
				var i = r.indexOf(t);
				i !== -1 && r.splice(i, 1);
			}
		}
	},
	dispatchEvent: function (e) {
		if (this._listeners !== void 0) {
			var t = this._listeners,
				n = t[e.type];
			if (n !== void 0) {
				e.target = this;
				for (var r = n.slice(0), i = 0, a = r.length; i < a; i++) r[i].call(this, e);
			}
		}
	}
});
var Lt = [];
for (var Xi = 0; Xi < 256; Xi++) Lt[Xi] = (Xi < 16 ? '0' : '') + Xi.toString(16);
var Ue = {
	DEG2RAD: Math.PI / 180,
	RAD2DEG: 180 / Math.PI,
	generateUUID: function () {
		var e = (Math.random() * 4294967295) | 0,
			t = (Math.random() * 4294967295) | 0,
			n = (Math.random() * 4294967295) | 0,
			r = (Math.random() * 4294967295) | 0,
			i =
				Lt[e & 255] +
				Lt[(e >> 8) & 255] +
				Lt[(e >> 16) & 255] +
				Lt[(e >> 24) & 255] +
				'-' +
				Lt[t & 255] +
				Lt[(t >> 8) & 255] +
				'-' +
				Lt[((t >> 16) & 15) | 64] +
				Lt[(t >> 24) & 255] +
				'-' +
				Lt[(n & 63) | 128] +
				Lt[(n >> 8) & 255] +
				'-' +
				Lt[(n >> 16) & 255] +
				Lt[(n >> 24) & 255] +
				Lt[r & 255] +
				Lt[(r >> 8) & 255] +
				Lt[(r >> 16) & 255] +
				Lt[(r >> 24) & 255];
		return i.toUpperCase();
	},
	clamp: function (e, t, n) {
		return Math.max(t, Math.min(n, e));
	},
	euclideanModulo: function (e, t) {
		return ((e % t) + t) % t;
	},
	mapLinear: function (e, t, n, r, i) {
		return r + ((e - t) * (i - r)) / (n - t);
	},
	lerp: function (e, t, n) {
		return (1 - n) * e + n * t;
	},
	smoothstep: function (e, t, n) {
		return e <= t ? 0 : e >= n ? 1 : ((e = (e - t) / (n - t)), e * e * (3 - 2 * e));
	},
	smootherstep: function (e, t, n) {
		return e <= t ? 0 : e >= n ? 1 : ((e = (e - t) / (n - t)), e * e * e * (e * (e * 6 - 15) + 10));
	},
	randInt: function (e, t) {
		return e + Math.floor(Math.random() * (t - e + 1));
	},
	randFloat: function (e, t) {
		return e + Math.random() * (t - e);
	},
	randFloatSpread: function (e) {
		return e * (0.5 - Math.random());
	},
	degToRad: function (e) {
		return e * Ue.DEG2RAD;
	},
	radToDeg: function (e) {
		return e * Ue.RAD2DEG;
	},
	isPowerOfTwo: function (e) {
		return (e & (e - 1)) === 0 && e !== 0;
	},
	ceilPowerOfTwo: function (e) {
		return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
	},
	floorPowerOfTwo: function (e) {
		return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
	}
};
function W(e, t) {
	(this.x = e || 0), (this.y = t || 0);
}
Object.defineProperties(W.prototype, {
	width: {
		get: function () {
			return this.x;
		},
		set: function (e) {
			this.x = e;
		}
	},
	height: {
		get: function () {
			return this.y;
		},
		set: function (e) {
			this.y = e;
		}
	}
});
Object.assign(W.prototype, {
	isVector2: !0,
	set: function (e, t) {
		return (this.x = e), (this.y = t), this;
	},
	setScalar: function (e) {
		return (this.x = e), (this.y = e), this;
	},
	setX: function (e) {
		return (this.x = e), this;
	},
	setY: function (e) {
		return (this.y = e), this;
	},
	setComponent: function (e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default:
				throw new Error('index is out of range: ' + e);
		}
		return this;
	},
	getComponent: function (e) {
		switch (e) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			default:
				throw new Error('index is out of range: ' + e);
		}
	},
	clone: function () {
		return new this.constructor(this.x, this.y);
	},
	copy: function (e) {
		return (this.x = e.x), (this.y = e.y), this;
	},
	add: function (e, t) {
		return t !== void 0
			? (console.warn(
					'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
				),
				this.addVectors(e, t))
			: ((this.x += e.x), (this.y += e.y), this);
	},
	addScalar: function (e) {
		return (this.x += e), (this.y += e), this;
	},
	addVectors: function (e, t) {
		return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
	},
	addScaledVector: function (e, t) {
		return (this.x += e.x * t), (this.y += e.y * t), this;
	},
	sub: function (e, t) {
		return t !== void 0
			? (console.warn(
					'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
				),
				this.subVectors(e, t))
			: ((this.x -= e.x), (this.y -= e.y), this);
	},
	subScalar: function (e) {
		return (this.x -= e), (this.y -= e), this;
	},
	subVectors: function (e, t) {
		return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
	},
	multiply: function (e) {
		return (this.x *= e.x), (this.y *= e.y), this;
	},
	multiplyScalar: function (e) {
		return (this.x *= e), (this.y *= e), this;
	},
	divide: function (e) {
		return (this.x /= e.x), (this.y /= e.y), this;
	},
	divideScalar: function (e) {
		return this.multiplyScalar(1 / e);
	},
	applyMatrix3: function (e) {
		var t = this.x,
			n = this.y,
			r = e.elements;
		return (this.x = r[0] * t + r[3] * n + r[6]), (this.y = r[1] * t + r[4] * n + r[7]), this;
	},
	min: function (e) {
		return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this;
	},
	max: function (e) {
		return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this;
	},
	clamp: function (e, t) {
		return (
			(this.x = Math.max(e.x, Math.min(t.x, this.x))),
			(this.y = Math.max(e.y, Math.min(t.y, this.y))),
			this
		);
	},
	clampScalar: function (e, t) {
		return (
			(this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), this
		);
	},
	clampLength: function (e, t) {
		var n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
	},
	floor: function () {
		return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
	},
	ceil: function () {
		return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
	},
	round: function () {
		return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
	},
	roundToZero: function () {
		return (
			(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
			(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
			this
		);
	},
	negate: function () {
		return (this.x = -this.x), (this.y = -this.y), this;
	},
	dot: function (e) {
		return this.x * e.x + this.y * e.y;
	},
	cross: function (e) {
		return this.x * e.y - this.y * e.x;
	},
	lengthSq: function () {
		return this.x * this.x + this.y * this.y;
	},
	length: function () {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},
	manhattanLength: function () {
		return Math.abs(this.x) + Math.abs(this.y);
	},
	normalize: function () {
		return this.divideScalar(this.length() || 1);
	},
	angle: function () {
		var e = Math.atan2(this.y, this.x);
		return e < 0 && (e += 2 * Math.PI), e;
	},
	distanceTo: function (e) {
		return Math.sqrt(this.distanceToSquared(e));
	},
	distanceToSquared: function (e) {
		var t = this.x - e.x,
			n = this.y - e.y;
		return t * t + n * n;
	},
	manhattanDistanceTo: function (e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	},
	setLength: function (e) {
		return this.normalize().multiplyScalar(e);
	},
	lerp: function (e, t) {
		return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
	},
	lerpVectors: function (e, t, n) {
		return this.subVectors(t, e).multiplyScalar(n).add(e);
	},
	equals: function (e) {
		return e.x === this.x && e.y === this.y;
	},
	fromArray: function (e, t) {
		return t === void 0 && (t = 0), (this.x = e[t]), (this.y = e[t + 1]), this;
	},
	toArray: function (e, t) {
		return (
			e === void 0 && (e = []), t === void 0 && (t = 0), (e[t] = this.x), (e[t + 1] = this.y), e
		);
	},
	fromBufferAttribute: function (e, t, n) {
		return (
			n !== void 0 &&
				console.warn('THREE.Vector2: offset has been removed from .fromBufferAttribute().'),
			(this.x = e.getX(t)),
			(this.y = e.getY(t)),
			this
		);
	},
	rotateAround: function (e, t) {
		var n = Math.cos(t),
			r = Math.sin(t),
			i = this.x - e.x,
			a = this.y - e.y;
		return (this.x = i * n - a * r + e.x), (this.y = i * r + a * n + e.y), this;
	}
});
function qt(e, t, n, r) {
	(this._x = e || 0), (this._y = t || 0), (this._z = n || 0), (this._w = r !== void 0 ? r : 1);
}
Object.assign(qt, {
	slerp: function (e, t, n, r) {
		return n.copy(e).slerp(t, r);
	},
	slerpFlat: function (e, t, n, r, i, a, s) {
		var o = n[r + 0],
			u = n[r + 1],
			l = n[r + 2],
			f = n[r + 3],
			c = i[a + 0],
			h = i[a + 1],
			p = i[a + 2],
			d = i[a + 3];
		if (f !== d || o !== c || u !== h || l !== p) {
			var m = 1 - s,
				v = o * c + u * h + l * p + f * d,
				g = v >= 0 ? 1 : -1,
				x = 1 - v * v;
			if (x > Number.EPSILON) {
				var M = Math.sqrt(x),
					_ = Math.atan2(M, v * g);
				(m = Math.sin(m * _) / M), (s = Math.sin(s * _) / M);
			}
			var y = s * g;
			if (
				((o = o * m + c * y),
				(u = u * m + h * y),
				(l = l * m + p * y),
				(f = f * m + d * y),
				m === 1 - s)
			) {
				var L = 1 / Math.sqrt(o * o + u * u + l * l + f * f);
				(o *= L), (u *= L), (l *= L), (f *= L);
			}
		}
		(e[t] = o), (e[t + 1] = u), (e[t + 2] = l), (e[t + 3] = f);
	}
});
Object.defineProperties(qt.prototype, {
	x: {
		get: function () {
			return this._x;
		},
		set: function (e) {
			(this._x = e), this._onChangeCallback();
		}
	},
	y: {
		get: function () {
			return this._y;
		},
		set: function (e) {
			(this._y = e), this._onChangeCallback();
		}
	},
	z: {
		get: function () {
			return this._z;
		},
		set: function (e) {
			(this._z = e), this._onChangeCallback();
		}
	},
	w: {
		get: function () {
			return this._w;
		},
		set: function (e) {
			(this._w = e), this._onChangeCallback();
		}
	}
});
Object.assign(qt.prototype, {
	isQuaternion: !0,
	set: function (e, t, n, r) {
		return (
			(this._x = e), (this._y = t), (this._z = n), (this._w = r), this._onChangeCallback(), this
		);
	},
	clone: function () {
		return new this.constructor(this._x, this._y, this._z, this._w);
	},
	copy: function (e) {
		return (
			(this._x = e.x),
			(this._y = e.y),
			(this._z = e.z),
			(this._w = e.w),
			this._onChangeCallback(),
			this
		);
	},
	setFromEuler: function (e, t) {
		if (!(e && e.isEuler))
			throw new Error(
				'THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.'
			);
		var n = e._x,
			r = e._y,
			i = e._z,
			a = e.order,
			s = Math.cos,
			o = Math.sin,
			u = s(n / 2),
			l = s(r / 2),
			f = s(i / 2),
			c = o(n / 2),
			h = o(r / 2),
			p = o(i / 2);
		return (
			a === 'XYZ'
				? ((this._x = c * l * f + u * h * p),
					(this._y = u * h * f - c * l * p),
					(this._z = u * l * p + c * h * f),
					(this._w = u * l * f - c * h * p))
				: a === 'YXZ'
					? ((this._x = c * l * f + u * h * p),
						(this._y = u * h * f - c * l * p),
						(this._z = u * l * p - c * h * f),
						(this._w = u * l * f + c * h * p))
					: a === 'ZXY'
						? ((this._x = c * l * f - u * h * p),
							(this._y = u * h * f + c * l * p),
							(this._z = u * l * p + c * h * f),
							(this._w = u * l * f - c * h * p))
						: a === 'ZYX'
							? ((this._x = c * l * f - u * h * p),
								(this._y = u * h * f + c * l * p),
								(this._z = u * l * p - c * h * f),
								(this._w = u * l * f + c * h * p))
							: a === 'YZX'
								? ((this._x = c * l * f + u * h * p),
									(this._y = u * h * f + c * l * p),
									(this._z = u * l * p - c * h * f),
									(this._w = u * l * f - c * h * p))
								: a === 'XZY' &&
									((this._x = c * l * f - u * h * p),
									(this._y = u * h * f - c * l * p),
									(this._z = u * l * p + c * h * f),
									(this._w = u * l * f + c * h * p)),
			t !== !1 && this._onChangeCallback(),
			this
		);
	},
	setFromAxisAngle: function (e, t) {
		var n = t / 2,
			r = Math.sin(n);
		return (
			(this._x = e.x * r),
			(this._y = e.y * r),
			(this._z = e.z * r),
			(this._w = Math.cos(n)),
			this._onChangeCallback(),
			this
		);
	},
	setFromRotationMatrix: function (e) {
		var t = e.elements,
			n = t[0],
			r = t[4],
			i = t[8],
			a = t[1],
			s = t[5],
			o = t[9],
			u = t[2],
			l = t[6],
			f = t[10],
			c = n + s + f,
			h;
		return (
			c > 0
				? ((h = 0.5 / Math.sqrt(c + 1)),
					(this._w = 0.25 / h),
					(this._x = (l - o) * h),
					(this._y = (i - u) * h),
					(this._z = (a - r) * h))
				: n > s && n > f
					? ((h = 2 * Math.sqrt(1 + n - s - f)),
						(this._w = (l - o) / h),
						(this._x = 0.25 * h),
						(this._y = (r + a) / h),
						(this._z = (i + u) / h))
					: s > f
						? ((h = 2 * Math.sqrt(1 + s - n - f)),
							(this._w = (i - u) / h),
							(this._x = (r + a) / h),
							(this._y = 0.25 * h),
							(this._z = (o + l) / h))
						: ((h = 2 * Math.sqrt(1 + f - n - s)),
							(this._w = (a - r) / h),
							(this._x = (i + u) / h),
							(this._y = (o + l) / h),
							(this._z = 0.25 * h)),
			this._onChangeCallback(),
			this
		);
	},
	setFromUnitVectors: function (e, t) {
		var n = 1e-6,
			r = e.dot(t) + 1;
		return (
			r < n
				? ((r = 0),
					Math.abs(e.x) > Math.abs(e.z)
						? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = r))
						: ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = r)))
				: ((this._x = e.y * t.z - e.z * t.y),
					(this._y = e.z * t.x - e.x * t.z),
					(this._z = e.x * t.y - e.y * t.x),
					(this._w = r)),
			this.normalize()
		);
	},
	angleTo: function (e) {
		return 2 * Math.acos(Math.abs(Ue.clamp(this.dot(e), -1, 1)));
	},
	rotateTowards: function (e, t) {
		var n = this.angleTo(e);
		if (n === 0) return this;
		var r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	},
	inverse: function () {
		return this.conjugate();
	},
	conjugate: function () {
		return (this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this;
	},
	dot: function (e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	},
	lengthSq: function () {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	},
	length: function () {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	},
	normalize: function () {
		var e = this.length();
		return (
			e === 0
				? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
				: ((e = 1 / e),
					(this._x = this._x * e),
					(this._y = this._y * e),
					(this._z = this._z * e),
					(this._w = this._w * e)),
			this._onChangeCallback(),
			this
		);
	},
	multiply: function (e, t) {
		return t !== void 0
			? (console.warn(
					'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.'
				),
				this.multiplyQuaternions(e, t))
			: this.multiplyQuaternions(this, e);
	},
	premultiply: function (e) {
		return this.multiplyQuaternions(e, this);
	},
	multiplyQuaternions: function (e, t) {
		var n = e._x,
			r = e._y,
			i = e._z,
			a = e._w,
			s = t._x,
			o = t._y,
			u = t._z,
			l = t._w;
		return (
			(this._x = n * l + a * s + r * u - i * o),
			(this._y = r * l + a * o + i * s - n * u),
			(this._z = i * l + a * u + n * o - r * s),
			(this._w = a * l - n * s - r * o - i * u),
			this._onChangeCallback(),
			this
		);
	},
	slerp: function (e, t) {
		if (t === 0) return this;
		if (t === 1) return this.copy(e);
		var n = this._x,
			r = this._y,
			i = this._z,
			a = this._w,
			s = a * e._w + n * e._x + r * e._y + i * e._z;
		if (
			(s < 0
				? ((this._w = -e._w), (this._x = -e._x), (this._y = -e._y), (this._z = -e._z), (s = -s))
				: this.copy(e),
			s >= 1)
		)
			return (this._w = a), (this._x = n), (this._y = r), (this._z = i), this;
		var o = 1 - s * s;
		if (o <= Number.EPSILON) {
			var u = 1 - t;
			return (
				(this._w = u * a + t * this._w),
				(this._x = u * n + t * this._x),
				(this._y = u * r + t * this._y),
				(this._z = u * i + t * this._z),
				this.normalize(),
				this._onChangeCallback(),
				this
			);
		}
		var l = Math.sqrt(o),
			f = Math.atan2(l, s),
			c = Math.sin((1 - t) * f) / l,
			h = Math.sin(t * f) / l;
		return (
			(this._w = a * c + this._w * h),
			(this._x = n * c + this._x * h),
			(this._y = r * c + this._y * h),
			(this._z = i * c + this._z * h),
			this._onChangeCallback(),
			this
		);
	},
	equals: function (e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	},
	fromArray: function (e, t) {
		return (
			t === void 0 && (t = 0),
			(this._x = e[t]),
			(this._y = e[t + 1]),
			(this._z = e[t + 2]),
			(this._w = e[t + 3]),
			this._onChangeCallback(),
			this
		);
	},
	toArray: function (e, t) {
		return (
			e === void 0 && (e = []),
			t === void 0 && (t = 0),
			(e[t] = this._x),
			(e[t + 1] = this._y),
			(e[t + 2] = this._z),
			(e[t + 3] = this._w),
			e
		);
	},
	_onChange: function (e) {
		return (this._onChangeCallback = e), this;
	},
	_onChangeCallback: function () {}
});
var qo = new R(),
	af = new qt();
function R(e, t, n) {
	(this.x = e || 0), (this.y = t || 0), (this.z = n || 0);
}
Object.assign(R.prototype, {
	isVector3: !0,
	set: function (e, t, n) {
		return (this.x = e), (this.y = t), (this.z = n), this;
	},
	setScalar: function (e) {
		return (this.x = e), (this.y = e), (this.z = e), this;
	},
	setX: function (e) {
		return (this.x = e), this;
	},
	setY: function (e) {
		return (this.y = e), this;
	},
	setZ: function (e) {
		return (this.z = e), this;
	},
	setComponent: function (e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default:
				throw new Error('index is out of range: ' + e);
		}
		return this;
	},
	getComponent: function (e) {
		switch (e) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			case 2:
				return this.z;
			default:
				throw new Error('index is out of range: ' + e);
		}
	},
	clone: function () {
		return new this.constructor(this.x, this.y, this.z);
	},
	copy: function (e) {
		return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
	},
	add: function (e, t) {
		return t !== void 0
			? (console.warn(
					'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
				),
				this.addVectors(e, t))
			: ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
	},
	addScalar: function (e) {
		return (this.x += e), (this.y += e), (this.z += e), this;
	},
	addVectors: function (e, t) {
		return (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this;
	},
	addScaledVector: function (e, t) {
		return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
	},
	sub: function (e, t) {
		return t !== void 0
			? (console.warn(
					'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
				),
				this.subVectors(e, t))
			: ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
	},
	subScalar: function (e) {
		return (this.x -= e), (this.y -= e), (this.z -= e), this;
	},
	subVectors: function (e, t) {
		return (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this;
	},
	multiply: function (e, t) {
		return t !== void 0
			? (console.warn(
					'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.'
				),
				this.multiplyVectors(e, t))
			: ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
	},
	multiplyScalar: function (e) {
		return (this.x *= e), (this.y *= e), (this.z *= e), this;
	},
	multiplyVectors: function (e, t) {
		return (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this;
	},
	applyEuler: function (e) {
		return (
			(e && e.isEuler) ||
				console.error(
					'THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.'
				),
			this.applyQuaternion(af.setFromEuler(e))
		);
	},
	applyAxisAngle: function (e, t) {
		return this.applyQuaternion(af.setFromAxisAngle(e, t));
	},
	applyMatrix3: function (e) {
		var t = this.x,
			n = this.y,
			r = this.z,
			i = e.elements;
		return (
			(this.x = i[0] * t + i[3] * n + i[6] * r),
			(this.y = i[1] * t + i[4] * n + i[7] * r),
			(this.z = i[2] * t + i[5] * n + i[8] * r),
			this
		);
	},
	applyMatrix4: function (e) {
		var t = this.x,
			n = this.y,
			r = this.z,
			i = e.elements,
			a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return (
			(this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a),
			(this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a),
			(this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a),
			this
		);
	},
	applyQuaternion: function (e) {
		var t = this.x,
			n = this.y,
			r = this.z,
			i = e.x,
			a = e.y,
			s = e.z,
			o = e.w,
			u = o * t + a * r - s * n,
			l = o * n + s * t - i * r,
			f = o * r + i * n - a * t,
			c = -i * t - a * n - s * r;
		return (
			(this.x = u * o + c * -i + l * -s - f * -a),
			(this.y = l * o + c * -a + f * -i - u * -s),
			(this.z = f * o + c * -s + u * -a - l * -i),
			this
		);
	},
	project: function (e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	},
	unproject: function (e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	},
	transformDirection: function (e) {
		var t = this.x,
			n = this.y,
			r = this.z,
			i = e.elements;
		return (
			(this.x = i[0] * t + i[4] * n + i[8] * r),
			(this.y = i[1] * t + i[5] * n + i[9] * r),
			(this.z = i[2] * t + i[6] * n + i[10] * r),
			this.normalize()
		);
	},
	divide: function (e) {
		return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
	},
	divideScalar: function (e) {
		return this.multiplyScalar(1 / e);
	},
	min: function (e) {
		return (
			(this.x = Math.min(this.x, e.x)),
			(this.y = Math.min(this.y, e.y)),
			(this.z = Math.min(this.z, e.z)),
			this
		);
	},
	max: function (e) {
		return (
			(this.x = Math.max(this.x, e.x)),
			(this.y = Math.max(this.y, e.y)),
			(this.z = Math.max(this.z, e.z)),
			this
		);
	},
	clamp: function (e, t) {
		return (
			(this.x = Math.max(e.x, Math.min(t.x, this.x))),
			(this.y = Math.max(e.y, Math.min(t.y, this.y))),
			(this.z = Math.max(e.z, Math.min(t.z, this.z))),
			this
		);
	},
	clampScalar: function (e, t) {
		return (
			(this.x = Math.max(e, Math.min(t, this.x))),
			(this.y = Math.max(e, Math.min(t, this.y))),
			(this.z = Math.max(e, Math.min(t, this.z))),
			this
		);
	},
	clampLength: function (e, t) {
		var n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
	},
	floor: function () {
		return (
			(this.x = Math.floor(this.x)),
			(this.y = Math.floor(this.y)),
			(this.z = Math.floor(this.z)),
			this
		);
	},
	ceil: function () {
		return (
			(this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), this
		);
	},
	round: function () {
		return (
			(this.x = Math.round(this.x)),
			(this.y = Math.round(this.y)),
			(this.z = Math.round(this.z)),
			this
		);
	},
	roundToZero: function () {
		return (
			(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
			(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
			(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
			this
		);
	},
	negate: function () {
		return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
	},
	dot: function (e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	},
	lengthSq: function () {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	},
	length: function () {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	},
	manhattanLength: function () {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	},
	normalize: function () {
		return this.divideScalar(this.length() || 1);
	},
	setLength: function (e) {
		return this.normalize().multiplyScalar(e);
	},
	lerp: function (e, t) {
		return (
			(this.x += (e.x - this.x) * t),
			(this.y += (e.y - this.y) * t),
			(this.z += (e.z - this.z) * t),
			this
		);
	},
	lerpVectors: function (e, t, n) {
		return this.subVectors(t, e).multiplyScalar(n).add(e);
	},
	cross: function (e, t) {
		return t !== void 0
			? (console.warn(
					'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.'
				),
				this.crossVectors(e, t))
			: this.crossVectors(this, e);
	},
	crossVectors: function (e, t) {
		var n = e.x,
			r = e.y,
			i = e.z,
			a = t.x,
			s = t.y,
			o = t.z;
		return (this.x = r * o - i * s), (this.y = i * a - n * o), (this.z = n * s - r * a), this;
	},
	projectOnVector: function (e) {
		var t = e.dot(this) / e.lengthSq();
		return this.copy(e).multiplyScalar(t);
	},
	projectOnPlane: function (e) {
		return qo.copy(this).projectOnVector(e), this.sub(qo);
	},
	reflect: function (e) {
		return this.sub(qo.copy(e).multiplyScalar(2 * this.dot(e)));
	},
	angleTo: function (e) {
		var t = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
		return Math.acos(Ue.clamp(t, -1, 1));
	},
	distanceTo: function (e) {
		return Math.sqrt(this.distanceToSquared(e));
	},
	distanceToSquared: function (e) {
		var t = this.x - e.x,
			n = this.y - e.y,
			r = this.z - e.z;
		return t * t + n * n + r * r;
	},
	manhattanDistanceTo: function (e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	},
	setFromSpherical: function (e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	},
	setFromSphericalCoords: function (e, t, n) {
		var r = Math.sin(t) * e;
		return (this.x = r * Math.sin(n)), (this.y = Math.cos(t) * e), (this.z = r * Math.cos(n)), this;
	},
	setFromCylindrical: function (e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	},
	setFromCylindricalCoords: function (e, t, n) {
		return (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this;
	},
	setFromMatrixPosition: function (e) {
		var t = e.elements;
		return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
	},
	setFromMatrixScale: function (e) {
		var t = this.setFromMatrixColumn(e, 0).length(),
			n = this.setFromMatrixColumn(e, 1).length(),
			r = this.setFromMatrixColumn(e, 2).length();
		return (this.x = t), (this.y = n), (this.z = r), this;
	},
	setFromMatrixColumn: function (e, t) {
		return this.fromArray(e.elements, t * 4);
	},
	equals: function (e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	},
	fromArray: function (e, t) {
		return t === void 0 && (t = 0), (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
	},
	toArray: function (e, t) {
		return (
			e === void 0 && (e = []),
			t === void 0 && (t = 0),
			(e[t] = this.x),
			(e[t + 1] = this.y),
			(e[t + 2] = this.z),
			e
		);
	},
	fromBufferAttribute: function (e, t, n) {
		return (
			n !== void 0 &&
				console.warn('THREE.Vector3: offset has been removed from .fromBufferAttribute().'),
			(this.x = e.getX(t)),
			(this.y = e.getY(t)),
			(this.z = e.getZ(t)),
			this
		);
	}
});
var Ar = new R();
function Et() {
	(this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
		arguments.length > 0 &&
			console.error(
				'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.'
			);
}
Object.assign(Et.prototype, {
	isMatrix3: !0,
	set: function (e, t, n, r, i, a, s, o, u) {
		var l = this.elements;
		return (
			(l[0] = e),
			(l[1] = r),
			(l[2] = s),
			(l[3] = t),
			(l[4] = i),
			(l[5] = o),
			(l[6] = n),
			(l[7] = a),
			(l[8] = u),
			this
		);
	},
	identity: function () {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	},
	clone: function () {
		return new this.constructor().fromArray(this.elements);
	},
	copy: function (e) {
		var t = this.elements,
			n = e.elements;
		return (
			(t[0] = n[0]),
			(t[1] = n[1]),
			(t[2] = n[2]),
			(t[3] = n[3]),
			(t[4] = n[4]),
			(t[5] = n[5]),
			(t[6] = n[6]),
			(t[7] = n[7]),
			(t[8] = n[8]),
			this
		);
	},
	setFromMatrix4: function (e) {
		var t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	},
	applyToBufferAttribute: function (e) {
		for (var t = 0, n = e.count; t < n; t++)
			(Ar.x = e.getX(t)),
				(Ar.y = e.getY(t)),
				(Ar.z = e.getZ(t)),
				Ar.applyMatrix3(this),
				e.setXYZ(t, Ar.x, Ar.y, Ar.z);
		return e;
	},
	multiply: function (e) {
		return this.multiplyMatrices(this, e);
	},
	premultiply: function (e) {
		return this.multiplyMatrices(e, this);
	},
	multiplyMatrices: function (e, t) {
		var n = e.elements,
			r = t.elements,
			i = this.elements,
			a = n[0],
			s = n[3],
			o = n[6],
			u = n[1],
			l = n[4],
			f = n[7],
			c = n[2],
			h = n[5],
			p = n[8],
			d = r[0],
			m = r[3],
			v = r[6],
			g = r[1],
			x = r[4],
			M = r[7],
			_ = r[2],
			y = r[5],
			L = r[8];
		return (
			(i[0] = a * d + s * g + o * _),
			(i[3] = a * m + s * x + o * y),
			(i[6] = a * v + s * M + o * L),
			(i[1] = u * d + l * g + f * _),
			(i[4] = u * m + l * x + f * y),
			(i[7] = u * v + l * M + f * L),
			(i[2] = c * d + h * g + p * _),
			(i[5] = c * m + h * x + p * y),
			(i[8] = c * v + h * M + p * L),
			this
		);
	},
	multiplyScalar: function (e) {
		var t = this.elements;
		return (
			(t[0] *= e),
			(t[3] *= e),
			(t[6] *= e),
			(t[1] *= e),
			(t[4] *= e),
			(t[7] *= e),
			(t[2] *= e),
			(t[5] *= e),
			(t[8] *= e),
			this
		);
	},
	determinant: function () {
		var e = this.elements,
			t = e[0],
			n = e[1],
			r = e[2],
			i = e[3],
			a = e[4],
			s = e[5],
			o = e[6],
			u = e[7],
			l = e[8];
		return t * a * l - t * s * u - n * i * l + n * s * o + r * i * u - r * a * o;
	},
	getInverse: function (e, t) {
		e &&
			e.isMatrix4 &&
			console.error('THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.');
		var n = e.elements,
			r = this.elements,
			i = n[0],
			a = n[1],
			s = n[2],
			o = n[3],
			u = n[4],
			l = n[5],
			f = n[6],
			c = n[7],
			h = n[8],
			p = h * u - l * c,
			d = l * f - h * o,
			m = c * o - u * f,
			v = i * p + a * d + s * m;
		if (v === 0) {
			var g = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
			if (t === !0) throw new Error(g);
			return console.warn(g), this.identity();
		}
		var x = 1 / v;
		return (
			(r[0] = p * x),
			(r[1] = (s * c - h * a) * x),
			(r[2] = (l * a - s * u) * x),
			(r[3] = d * x),
			(r[4] = (h * i - s * f) * x),
			(r[5] = (s * o - l * i) * x),
			(r[6] = m * x),
			(r[7] = (a * f - c * i) * x),
			(r[8] = (u * i - a * o) * x),
			this
		);
	},
	transpose: function () {
		var e,
			t = this.elements;
		return (
			(e = t[1]),
			(t[1] = t[3]),
			(t[3] = e),
			(e = t[2]),
			(t[2] = t[6]),
			(t[6] = e),
			(e = t[5]),
			(t[5] = t[7]),
			(t[7] = e),
			this
		);
	},
	getNormalMatrix: function (e) {
		return this.setFromMatrix4(e).getInverse(this).transpose();
	},
	transposeIntoArray: function (e) {
		var t = this.elements;
		return (
			(e[0] = t[0]),
			(e[1] = t[3]),
			(e[2] = t[6]),
			(e[3] = t[1]),
			(e[4] = t[4]),
			(e[5] = t[7]),
			(e[6] = t[2]),
			(e[7] = t[5]),
			(e[8] = t[8]),
			this
		);
	},
	setUvTransform: function (e, t, n, r, i, a, s) {
		var o = Math.cos(i),
			u = Math.sin(i);
		this.set(
			n * o,
			n * u,
			-n * (o * a + u * s) + a + e,
			-r * u,
			r * o,
			-r * (-u * a + o * s) + s + t,
			0,
			0,
			1
		);
	},
	scale: function (e, t) {
		var n = this.elements;
		return (n[0] *= e), (n[3] *= e), (n[6] *= e), (n[1] *= t), (n[4] *= t), (n[7] *= t), this;
	},
	rotate: function (e) {
		var t = Math.cos(e),
			n = Math.sin(e),
			r = this.elements,
			i = r[0],
			a = r[3],
			s = r[6],
			o = r[1],
			u = r[4],
			l = r[7];
		return (
			(r[0] = t * i + n * o),
			(r[3] = t * a + n * u),
			(r[6] = t * s + n * l),
			(r[1] = -n * i + t * o),
			(r[4] = -n * a + t * u),
			(r[7] = -n * s + t * l),
			this
		);
	},
	translate: function (e, t) {
		var n = this.elements;
		return (
			(n[0] += e * n[2]),
			(n[3] += e * n[5]),
			(n[6] += e * n[8]),
			(n[1] += t * n[2]),
			(n[4] += t * n[5]),
			(n[7] += t * n[8]),
			this
		);
	},
	equals: function (e) {
		for (var t = this.elements, n = e.elements, r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
		return !0;
	},
	fromArray: function (e, t) {
		t === void 0 && (t = 0);
		for (var n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	},
	toArray: function (e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0);
		var n = this.elements;
		return (
			(e[t] = n[0]),
			(e[t + 1] = n[1]),
			(e[t + 2] = n[2]),
			(e[t + 3] = n[3]),
			(e[t + 4] = n[4]),
			(e[t + 5] = n[5]),
			(e[t + 6] = n[6]),
			(e[t + 7] = n[7]),
			(e[t + 8] = n[8]),
			e
		);
	}
});
var ni,
	Kr = {
		getDataURL: function (e) {
			var t;
			if (typeof HTMLCanvasElement > 'u') return e.src;
			if (e instanceof HTMLCanvasElement) t = e;
			else {
				ni === void 0 && (ni = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas')),
					(ni.width = e.width),
					(ni.height = e.height);
				var n = ni.getContext('2d');
				e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height),
					(t = ni);
			}
			return t.width > 2048 || t.height > 2048
				? t.toDataURL('image/jpeg', 0.6)
				: t.toDataURL('image/png');
		}
	},
	Vp = 0;
function lt(e, t, n, r, i, a, s, o, u, l) {
	Object.defineProperty(this, 'id', { value: Vp++ }),
		(this.uuid = Ue.generateUUID()),
		(this.name = ''),
		(this.image = e !== void 0 ? e : lt.DEFAULT_IMAGE),
		(this.mipmaps = []),
		(this.mapping = t !== void 0 ? t : lt.DEFAULT_MAPPING),
		(this.wrapS = n !== void 0 ? n : Kt),
		(this.wrapT = r !== void 0 ? r : Kt),
		(this.magFilter = i !== void 0 ? i : It),
		(this.minFilter = a !== void 0 ? a : Io),
		(this.anisotropy = u !== void 0 ? u : 1),
		(this.format = s !== void 0 ? s : tr),
		(this.type = o !== void 0 ? o : Nl),
		(this.offset = new W(0, 0)),
		(this.repeat = new W(1, 1)),
		(this.center = new W(0, 0)),
		(this.rotation = 0),
		(this.matrixAutoUpdate = !0),
		(this.matrix = new Et()),
		(this.generateMipmaps = !0),
		(this.premultiplyAlpha = !1),
		(this.flipY = !0),
		(this.unpackAlignment = 4),
		(this.encoding = l !== void 0 ? l : Ks),
		(this.version = 0),
		(this.onUpdate = null);
}
lt.DEFAULT_IMAGE = void 0;
lt.DEFAULT_MAPPING = Ll;
lt.prototype = Object.assign(Object.create(Vn.prototype), {
	constructor: lt,
	isTexture: !0,
	updateMatrix: function () {
		this.matrix.setUvTransform(
			this.offset.x,
			this.offset.y,
			this.repeat.x,
			this.repeat.y,
			this.rotation,
			this.center.x,
			this.center.y
		);
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return (
			(this.name = e.name),
			(this.image = e.image),
			(this.mipmaps = e.mipmaps.slice(0)),
			(this.mapping = e.mapping),
			(this.wrapS = e.wrapS),
			(this.wrapT = e.wrapT),
			(this.magFilter = e.magFilter),
			(this.minFilter = e.minFilter),
			(this.anisotropy = e.anisotropy),
			(this.format = e.format),
			(this.type = e.type),
			this.offset.copy(e.offset),
			this.repeat.copy(e.repeat),
			this.center.copy(e.center),
			(this.rotation = e.rotation),
			(this.matrixAutoUpdate = e.matrixAutoUpdate),
			this.matrix.copy(e.matrix),
			(this.generateMipmaps = e.generateMipmaps),
			(this.premultiplyAlpha = e.premultiplyAlpha),
			(this.flipY = e.flipY),
			(this.unpackAlignment = e.unpackAlignment),
			(this.encoding = e.encoding),
			this
		);
	},
	toJSON: function (e) {
		var t = e === void 0 || typeof e == 'string';
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		var n = {
			metadata: { version: 4.5, type: 'Texture', generator: 'Texture.toJSON' },
			uuid: this.uuid,
			name: this.name,
			mapping: this.mapping,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			type: this.type,
			encoding: this.encoding,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		if (this.image !== void 0) {
			var r = this.image;
			if ((r.uuid === void 0 && (r.uuid = Ue.generateUUID()), !t && e.images[r.uuid] === void 0)) {
				var i;
				if (Array.isArray(r)) {
					i = [];
					for (var a = 0, s = r.length; a < s; a++) i.push(Kr.getDataURL(r[a]));
				} else i = Kr.getDataURL(r);
				e.images[r.uuid] = { uuid: r.uuid, url: i };
			}
			n.image = r.uuid;
		}
		return t || (e.textures[this.uuid] = n), n;
	},
	dispose: function () {
		this.dispatchEvent({ type: 'dispose' });
	},
	transformUv: function (e) {
		if (this.mapping !== Ll) return e;
		if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
			switch (this.wrapS) {
				case Gs:
					e.x = e.x - Math.floor(e.x);
					break;
				case Kt:
					e.x = e.x < 0 ? 0 : 1;
					break;
				case Vs:
					Math.abs(Math.floor(e.x) % 2) === 1
						? (e.x = Math.ceil(e.x) - e.x)
						: (e.x = e.x - Math.floor(e.x));
					break;
			}
		if (e.y < 0 || e.y > 1)
			switch (this.wrapT) {
				case Gs:
					e.y = e.y - Math.floor(e.y);
					break;
				case Kt:
					e.y = e.y < 0 ? 0 : 1;
					break;
				case Vs:
					Math.abs(Math.floor(e.y) % 2) === 1
						? (e.y = Math.ceil(e.y) - e.y)
						: (e.y = e.y - Math.floor(e.y));
					break;
			}
		return this.flipY && (e.y = 1 - e.y), e;
	}
});
Object.defineProperty(lt.prototype, 'needsUpdate', {
	set: function (e) {
		e === !0 && this.version++;
	}
});
function rt(e, t, n, r) {
	(this.x = e || 0), (this.y = t || 0), (this.z = n || 0), (this.w = r !== void 0 ? r : 1);
}
Object.defineProperties(rt.prototype, {
	width: {
		get: function () {
			return this.z;
		},
		set: function (e) {
			this.z = e;
		}
	},
	height: {
		get: function () {
			return this.w;
		},
		set: function (e) {
			this.w = e;
		}
	}
});
Object.assign(rt.prototype, {
	isVector4: !0,
	set: function (e, t, n, r) {
		return (this.x = e), (this.y = t), (this.z = n), (this.w = r), this;
	},
	setScalar: function (e) {
		return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
	},
	setX: function (e) {
		return (this.x = e), this;
	},
	setY: function (e) {
		return (this.y = e), this;
	},
	setZ: function (e) {
		return (this.z = e), this;
	},
	setW: function (e) {
		return (this.w = e), this;
	},
	setComponent: function (e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default:
				throw new Error('index is out of range: ' + e);
		}
		return this;
	},
	getComponent: function (e) {
		switch (e) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			case 2:
				return this.z;
			case 3:
				return this.w;
			default:
				throw new Error('index is out of range: ' + e);
		}
	},
	clone: function () {
		return new this.constructor(this.x, this.y, this.z, this.w);
	},
	copy: function (e) {
		return (
			(this.x = e.x), (this.y = e.y), (this.z = e.z), (this.w = e.w !== void 0 ? e.w : 1), this
		);
	},
	add: function (e, t) {
		return t !== void 0
			? (console.warn(
					'THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
				),
				this.addVectors(e, t))
			: ((this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this);
	},
	addScalar: function (e) {
		return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
	},
	addVectors: function (e, t) {
		return (
			(this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), (this.w = e.w + t.w), this
		);
	},
	addScaledVector: function (e, t) {
		return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), (this.w += e.w * t), this;
	},
	sub: function (e, t) {
		return t !== void 0
			? (console.warn(
					'THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
				),
				this.subVectors(e, t))
			: ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this);
	},
	subScalar: function (e) {
		return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
	},
	subVectors: function (e, t) {
		return (
			(this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), (this.w = e.w - t.w), this
		);
	},
	multiplyScalar: function (e) {
		return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
	},
	applyMatrix4: function (e) {
		var t = this.x,
			n = this.y,
			r = this.z,
			i = this.w,
			a = e.elements;
		return (
			(this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i),
			(this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i),
			(this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i),
			(this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i),
			this
		);
	},
	divideScalar: function (e) {
		return this.multiplyScalar(1 / e);
	},
	setAxisAngleFromQuaternion: function (e) {
		this.w = 2 * Math.acos(e.w);
		var t = Math.sqrt(1 - e.w * e.w);
		return (
			t < 1e-4
				? ((this.x = 1), (this.y = 0), (this.z = 0))
				: ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
			this
		);
	},
	setAxisAngleFromRotationMatrix: function (e) {
		var t,
			n,
			r,
			i,
			a = 0.01,
			s = 0.1,
			o = e.elements,
			u = o[0],
			l = o[4],
			f = o[8],
			c = o[1],
			h = o[5],
			p = o[9],
			d = o[2],
			m = o[6],
			v = o[10];
		if (Math.abs(l - c) < a && Math.abs(f - d) < a && Math.abs(p - m) < a) {
			if (
				Math.abs(l + c) < s &&
				Math.abs(f + d) < s &&
				Math.abs(p + m) < s &&
				Math.abs(u + h + v - 3) < s
			)
				return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			var g = (u + 1) / 2,
				x = (h + 1) / 2,
				M = (v + 1) / 2,
				_ = (l + c) / 4,
				y = (f + d) / 4,
				L = (p + m) / 4;
			return (
				g > x && g > M
					? g < a
						? ((n = 0), (r = 0.707106781), (i = 0.707106781))
						: ((n = Math.sqrt(g)), (r = _ / n), (i = y / n))
					: x > M
						? x < a
							? ((n = 0.707106781), (r = 0), (i = 0.707106781))
							: ((r = Math.sqrt(x)), (n = _ / r), (i = L / r))
						: M < a
							? ((n = 0.707106781), (r = 0.707106781), (i = 0))
							: ((i = Math.sqrt(M)), (n = y / i), (r = L / i)),
				this.set(n, r, i, t),
				this
			);
		}
		var C = Math.sqrt((m - p) * (m - p) + (f - d) * (f - d) + (c - l) * (c - l));
		return (
			Math.abs(C) < 0.001 && (C = 1),
			(this.x = (m - p) / C),
			(this.y = (f - d) / C),
			(this.z = (c - l) / C),
			(this.w = Math.acos((u + h + v - 1) / 2)),
			this
		);
	},
	min: function (e) {
		return (
			(this.x = Math.min(this.x, e.x)),
			(this.y = Math.min(this.y, e.y)),
			(this.z = Math.min(this.z, e.z)),
			(this.w = Math.min(this.w, e.w)),
			this
		);
	},
	max: function (e) {
		return (
			(this.x = Math.max(this.x, e.x)),
			(this.y = Math.max(this.y, e.y)),
			(this.z = Math.max(this.z, e.z)),
			(this.w = Math.max(this.w, e.w)),
			this
		);
	},
	clamp: function (e, t) {
		return (
			(this.x = Math.max(e.x, Math.min(t.x, this.x))),
			(this.y = Math.max(e.y, Math.min(t.y, this.y))),
			(this.z = Math.max(e.z, Math.min(t.z, this.z))),
			(this.w = Math.max(e.w, Math.min(t.w, this.w))),
			this
		);
	},
	clampScalar: function (e, t) {
		return (
			(this.x = Math.max(e, Math.min(t, this.x))),
			(this.y = Math.max(e, Math.min(t, this.y))),
			(this.z = Math.max(e, Math.min(t, this.z))),
			(this.w = Math.max(e, Math.min(t, this.w))),
			this
		);
	},
	clampLength: function (e, t) {
		var n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
	},
	floor: function () {
		return (
			(this.x = Math.floor(this.x)),
			(this.y = Math.floor(this.y)),
			(this.z = Math.floor(this.z)),
			(this.w = Math.floor(this.w)),
			this
		);
	},
	ceil: function () {
		return (
			(this.x = Math.ceil(this.x)),
			(this.y = Math.ceil(this.y)),
			(this.z = Math.ceil(this.z)),
			(this.w = Math.ceil(this.w)),
			this
		);
	},
	round: function () {
		return (
			(this.x = Math.round(this.x)),
			(this.y = Math.round(this.y)),
			(this.z = Math.round(this.z)),
			(this.w = Math.round(this.w)),
			this
		);
	},
	roundToZero: function () {
		return (
			(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
			(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
			(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
			(this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
			this
		);
	},
	negate: function () {
		return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this;
	},
	dot: function (e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	},
	lengthSq: function () {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	},
	length: function () {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	},
	manhattanLength: function () {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	},
	normalize: function () {
		return this.divideScalar(this.length() || 1);
	},
	setLength: function (e) {
		return this.normalize().multiplyScalar(e);
	},
	lerp: function (e, t) {
		return (
			(this.x += (e.x - this.x) * t),
			(this.y += (e.y - this.y) * t),
			(this.z += (e.z - this.z) * t),
			(this.w += (e.w - this.w) * t),
			this
		);
	},
	lerpVectors: function (e, t, n) {
		return this.subVectors(t, e).multiplyScalar(n).add(e);
	},
	equals: function (e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	},
	fromArray: function (e, t) {
		return (
			t === void 0 && (t = 0),
			(this.x = e[t]),
			(this.y = e[t + 1]),
			(this.z = e[t + 2]),
			(this.w = e[t + 3]),
			this
		);
	},
	toArray: function (e, t) {
		return (
			e === void 0 && (e = []),
			t === void 0 && (t = 0),
			(e[t] = this.x),
			(e[t + 1] = this.y),
			(e[t + 2] = this.z),
			(e[t + 3] = this.w),
			e
		);
	},
	fromBufferAttribute: function (e, t, n) {
		return (
			n !== void 0 &&
				console.warn('THREE.Vector4: offset has been removed from .fromBufferAttribute().'),
			(this.x = e.getX(t)),
			(this.y = e.getY(t)),
			(this.z = e.getZ(t)),
			(this.w = e.getW(t)),
			this
		);
	}
});
function Jt(e, t, n) {
	(this.width = e),
		(this.height = t),
		(this.scissor = new rt(0, 0, e, t)),
		(this.scissorTest = !1),
		(this.viewport = new rt(0, 0, e, t)),
		(n = n || {}),
		(this.texture = new lt(
			void 0,
			void 0,
			n.wrapS,
			n.wrapT,
			n.magFilter,
			n.minFilter,
			n.format,
			n.type,
			n.anisotropy,
			n.encoding
		)),
		(this.texture.image = {}),
		(this.texture.image.width = e),
		(this.texture.image.height = t),
		(this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
		(this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : It),
		(this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
		(this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !0),
		(this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null);
}
Jt.prototype = Object.assign(Object.create(Vn.prototype), {
	constructor: Jt,
	isWebGLRenderTarget: !0,
	setSize: function (e, t) {
		(this.width !== e || this.height !== t) &&
			((this.width = e),
			(this.height = t),
			(this.texture.image.width = e),
			(this.texture.image.height = t),
			this.dispose()),
			this.viewport.set(0, 0, e, t),
			this.scissor.set(0, 0, e, t);
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return (
			(this.width = e.width),
			(this.height = e.height),
			this.viewport.copy(e.viewport),
			(this.texture = e.texture.clone()),
			(this.depthBuffer = e.depthBuffer),
			(this.stencilBuffer = e.stencilBuffer),
			(this.depthTexture = e.depthTexture),
			this
		);
	},
	dispose: function () {
		this.dispatchEvent({ type: 'dispose' });
	}
});
function sf(e, t, n) {
	Jt.call(this, e, t, n), (this.samples = 4);
}
sf.prototype = Object.assign(Object.create(Jt.prototype), {
	constructor: sf,
	isWebGLMultisampleRenderTarget: !0,
	copy: function (e) {
		return Jt.prototype.copy.call(this, e), (this.samples = e.samples), this;
	}
});
var Yt = new R(),
	vn = new He(),
	Hp = new R(0, 0, 0),
	Wp = new R(1, 1, 1),
	fr = new R(),
	ts = new R(),
	Zt = new R();
function He() {
	(this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
		arguments.length > 0 &&
			console.error(
				'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.'
			);
}
Object.assign(He.prototype, {
	isMatrix4: !0,
	set: function (e, t, n, r, i, a, s, o, u, l, f, c, h, p, d, m) {
		var v = this.elements;
		return (
			(v[0] = e),
			(v[4] = t),
			(v[8] = n),
			(v[12] = r),
			(v[1] = i),
			(v[5] = a),
			(v[9] = s),
			(v[13] = o),
			(v[2] = u),
			(v[6] = l),
			(v[10] = f),
			(v[14] = c),
			(v[3] = h),
			(v[7] = p),
			(v[11] = d),
			(v[15] = m),
			this
		);
	},
	identity: function () {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	},
	clone: function () {
		return new He().fromArray(this.elements);
	},
	copy: function (e) {
		var t = this.elements,
			n = e.elements;
		return (
			(t[0] = n[0]),
			(t[1] = n[1]),
			(t[2] = n[2]),
			(t[3] = n[3]),
			(t[4] = n[4]),
			(t[5] = n[5]),
			(t[6] = n[6]),
			(t[7] = n[7]),
			(t[8] = n[8]),
			(t[9] = n[9]),
			(t[10] = n[10]),
			(t[11] = n[11]),
			(t[12] = n[12]),
			(t[13] = n[13]),
			(t[14] = n[14]),
			(t[15] = n[15]),
			this
		);
	},
	copyPosition: function (e) {
		var t = this.elements,
			n = e.elements;
		return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
	},
	extractBasis: function (e, t, n) {
		return (
			e.setFromMatrixColumn(this, 0),
			t.setFromMatrixColumn(this, 1),
			n.setFromMatrixColumn(this, 2),
			this
		);
	},
	makeBasis: function (e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	},
	extractRotation: function (e) {
		var t = this.elements,
			n = e.elements,
			r = 1 / Yt.setFromMatrixColumn(e, 0).length(),
			i = 1 / Yt.setFromMatrixColumn(e, 1).length(),
			a = 1 / Yt.setFromMatrixColumn(e, 2).length();
		return (
			(t[0] = n[0] * r),
			(t[1] = n[1] * r),
			(t[2] = n[2] * r),
			(t[3] = 0),
			(t[4] = n[4] * i),
			(t[5] = n[5] * i),
			(t[6] = n[6] * i),
			(t[7] = 0),
			(t[8] = n[8] * a),
			(t[9] = n[9] * a),
			(t[10] = n[10] * a),
			(t[11] = 0),
			(t[12] = 0),
			(t[13] = 0),
			(t[14] = 0),
			(t[15] = 1),
			this
		);
	},
	makeRotationFromEuler: function (e) {
		(e && e.isEuler) ||
			console.error(
				'THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.'
			);
		var t = this.elements,
			n = e.x,
			r = e.y,
			i = e.z,
			a = Math.cos(n),
			s = Math.sin(n),
			o = Math.cos(r),
			u = Math.sin(r),
			l = Math.cos(i),
			f = Math.sin(i);
		if (e.order === 'XYZ') {
			var c = a * l,
				h = a * f,
				p = s * l,
				d = s * f;
			(t[0] = o * l),
				(t[4] = -o * f),
				(t[8] = u),
				(t[1] = h + p * u),
				(t[5] = c - d * u),
				(t[9] = -s * o),
				(t[2] = d - c * u),
				(t[6] = p + h * u),
				(t[10] = a * o);
		} else if (e.order === 'YXZ') {
			var m = o * l,
				v = o * f,
				g = u * l,
				x = u * f;
			(t[0] = m + x * s),
				(t[4] = g * s - v),
				(t[8] = a * u),
				(t[1] = a * f),
				(t[5] = a * l),
				(t[9] = -s),
				(t[2] = v * s - g),
				(t[6] = x + m * s),
				(t[10] = a * o);
		} else if (e.order === 'ZXY') {
			var m = o * l,
				v = o * f,
				g = u * l,
				x = u * f;
			(t[0] = m - x * s),
				(t[4] = -a * f),
				(t[8] = g + v * s),
				(t[1] = v + g * s),
				(t[5] = a * l),
				(t[9] = x - m * s),
				(t[2] = -a * u),
				(t[6] = s),
				(t[10] = a * o);
		} else if (e.order === 'ZYX') {
			var c = a * l,
				h = a * f,
				p = s * l,
				d = s * f;
			(t[0] = o * l),
				(t[4] = p * u - h),
				(t[8] = c * u + d),
				(t[1] = o * f),
				(t[5] = d * u + c),
				(t[9] = h * u - p),
				(t[2] = -u),
				(t[6] = s * o),
				(t[10] = a * o);
		} else if (e.order === 'YZX') {
			var M = a * o,
				_ = a * u,
				y = s * o,
				L = s * u;
			(t[0] = o * l),
				(t[4] = L - M * f),
				(t[8] = y * f + _),
				(t[1] = f),
				(t[5] = a * l),
				(t[9] = -s * l),
				(t[2] = -u * l),
				(t[6] = _ * f + y),
				(t[10] = M - L * f);
		} else if (e.order === 'XZY') {
			var M = a * o,
				_ = a * u,
				y = s * o,
				L = s * u;
			(t[0] = o * l),
				(t[4] = -f),
				(t[8] = u * l),
				(t[1] = M * f + L),
				(t[5] = a * l),
				(t[9] = _ * f - y),
				(t[2] = y * f - _),
				(t[6] = s * l),
				(t[10] = L * f + M);
		}
		return (
			(t[3] = 0), (t[7] = 0), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), this
		);
	},
	makeRotationFromQuaternion: function (e) {
		return this.compose(Hp, e, Wp);
	},
	lookAt: function (e, t, n) {
		var r = this.elements;
		return (
			Zt.subVectors(e, t),
			Zt.lengthSq() === 0 && (Zt.z = 1),
			Zt.normalize(),
			fr.crossVectors(n, Zt),
			fr.lengthSq() === 0 &&
				(Math.abs(n.z) === 1 ? (Zt.x += 1e-4) : (Zt.z += 1e-4),
				Zt.normalize(),
				fr.crossVectors(n, Zt)),
			fr.normalize(),
			ts.crossVectors(Zt, fr),
			(r[0] = fr.x),
			(r[4] = ts.x),
			(r[8] = Zt.x),
			(r[1] = fr.y),
			(r[5] = ts.y),
			(r[9] = Zt.y),
			(r[2] = fr.z),
			(r[6] = ts.z),
			(r[10] = Zt.z),
			this
		);
	},
	multiply: function (e, t) {
		return t !== void 0
			? (console.warn(
					'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.'
				),
				this.multiplyMatrices(e, t))
			: this.multiplyMatrices(this, e);
	},
	premultiply: function (e) {
		return this.multiplyMatrices(e, this);
	},
	multiplyMatrices: function (e, t) {
		var n = e.elements,
			r = t.elements,
			i = this.elements,
			a = n[0],
			s = n[4],
			o = n[8],
			u = n[12],
			l = n[1],
			f = n[5],
			c = n[9],
			h = n[13],
			p = n[2],
			d = n[6],
			m = n[10],
			v = n[14],
			g = n[3],
			x = n[7],
			M = n[11],
			_ = n[15],
			y = r[0],
			L = r[4],
			C = r[8],
			T = r[12],
			P = r[1],
			k = r[5],
			I = r[9],
			w = r[13],
			U = r[2],
			N = r[6],
			D = r[10],
			B = r[14],
			q = r[3],
			H = r[7],
			j = r[11],
			K = r[15];
		return (
			(i[0] = a * y + s * P + o * U + u * q),
			(i[4] = a * L + s * k + o * N + u * H),
			(i[8] = a * C + s * I + o * D + u * j),
			(i[12] = a * T + s * w + o * B + u * K),
			(i[1] = l * y + f * P + c * U + h * q),
			(i[5] = l * L + f * k + c * N + h * H),
			(i[9] = l * C + f * I + c * D + h * j),
			(i[13] = l * T + f * w + c * B + h * K),
			(i[2] = p * y + d * P + m * U + v * q),
			(i[6] = p * L + d * k + m * N + v * H),
			(i[10] = p * C + d * I + m * D + v * j),
			(i[14] = p * T + d * w + m * B + v * K),
			(i[3] = g * y + x * P + M * U + _ * q),
			(i[7] = g * L + x * k + M * N + _ * H),
			(i[11] = g * C + x * I + M * D + _ * j),
			(i[15] = g * T + x * w + M * B + _ * K),
			this
		);
	},
	multiplyScalar: function (e) {
		var t = this.elements;
		return (
			(t[0] *= e),
			(t[4] *= e),
			(t[8] *= e),
			(t[12] *= e),
			(t[1] *= e),
			(t[5] *= e),
			(t[9] *= e),
			(t[13] *= e),
			(t[2] *= e),
			(t[6] *= e),
			(t[10] *= e),
			(t[14] *= e),
			(t[3] *= e),
			(t[7] *= e),
			(t[11] *= e),
			(t[15] *= e),
			this
		);
	},
	applyToBufferAttribute: function (e) {
		for (var t = 0, n = e.count; t < n; t++)
			(Yt.x = e.getX(t)),
				(Yt.y = e.getY(t)),
				(Yt.z = e.getZ(t)),
				Yt.applyMatrix4(this),
				e.setXYZ(t, Yt.x, Yt.y, Yt.z);
		return e;
	},
	determinant: function () {
		var e = this.elements,
			t = e[0],
			n = e[4],
			r = e[8],
			i = e[12],
			a = e[1],
			s = e[5],
			o = e[9],
			u = e[13],
			l = e[2],
			f = e[6],
			c = e[10],
			h = e[14],
			p = e[3],
			d = e[7],
			m = e[11],
			v = e[15];
		return (
			p * (+i * o * f - r * u * f - i * s * c + n * u * c + r * s * h - n * o * h) +
			d * (+t * o * h - t * u * c + i * a * c - r * a * h + r * u * l - i * o * l) +
			m * (+t * u * f - t * s * h - i * a * f + n * a * h + i * s * l - n * u * l) +
			v * (-r * s * l - t * o * f + t * s * c + r * a * f - n * a * c + n * o * l)
		);
	},
	transpose: function () {
		var e = this.elements,
			t;
		return (
			(t = e[1]),
			(e[1] = e[4]),
			(e[4] = t),
			(t = e[2]),
			(e[2] = e[8]),
			(e[8] = t),
			(t = e[6]),
			(e[6] = e[9]),
			(e[9] = t),
			(t = e[3]),
			(e[3] = e[12]),
			(e[12] = t),
			(t = e[7]),
			(e[7] = e[13]),
			(e[13] = t),
			(t = e[11]),
			(e[11] = e[14]),
			(e[14] = t),
			this
		);
	},
	setPosition: function (e, t, n) {
		var r = this.elements;
		return (
			e.isVector3
				? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
				: ((r[12] = e), (r[13] = t), (r[14] = n)),
			this
		);
	},
	getInverse: function (e, t) {
		var n = this.elements,
			r = e.elements,
			i = r[0],
			a = r[1],
			s = r[2],
			o = r[3],
			u = r[4],
			l = r[5],
			f = r[6],
			c = r[7],
			h = r[8],
			p = r[9],
			d = r[10],
			m = r[11],
			v = r[12],
			g = r[13],
			x = r[14],
			M = r[15],
			_ = p * x * c - g * d * c + g * f * m - l * x * m - p * f * M + l * d * M,
			y = v * d * c - h * x * c - v * f * m + u * x * m + h * f * M - u * d * M,
			L = h * g * c - v * p * c + v * l * m - u * g * m - h * l * M + u * p * M,
			C = v * p * f - h * g * f - v * l * d + u * g * d + h * l * x - u * p * x,
			T = i * _ + a * y + s * L + o * C;
		if (T === 0) {
			var P = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
			if (t === !0) throw new Error(P);
			return console.warn(P), this.identity();
		}
		var k = 1 / T;
		return (
			(n[0] = _ * k),
			(n[1] = (g * d * o - p * x * o - g * s * m + a * x * m + p * s * M - a * d * M) * k),
			(n[2] = (l * x * o - g * f * o + g * s * c - a * x * c - l * s * M + a * f * M) * k),
			(n[3] = (p * f * o - l * d * o - p * s * c + a * d * c + l * s * m - a * f * m) * k),
			(n[4] = y * k),
			(n[5] = (h * x * o - v * d * o + v * s * m - i * x * m - h * s * M + i * d * M) * k),
			(n[6] = (v * f * o - u * x * o - v * s * c + i * x * c + u * s * M - i * f * M) * k),
			(n[7] = (u * d * o - h * f * o + h * s * c - i * d * c - u * s * m + i * f * m) * k),
			(n[8] = L * k),
			(n[9] = (v * p * o - h * g * o - v * a * m + i * g * m + h * a * M - i * p * M) * k),
			(n[10] = (u * g * o - v * l * o + v * a * c - i * g * c - u * a * M + i * l * M) * k),
			(n[11] = (h * l * o - u * p * o - h * a * c + i * p * c + u * a * m - i * l * m) * k),
			(n[12] = C * k),
			(n[13] = (h * g * s - v * p * s + v * a * d - i * g * d - h * a * x + i * p * x) * k),
			(n[14] = (v * l * s - u * g * s - v * a * f + i * g * f + u * a * x - i * l * x) * k),
			(n[15] = (u * p * s - h * l * s + h * a * f - i * p * f - u * a * d + i * l * d) * k),
			this
		);
	},
	scale: function (e) {
		var t = this.elements,
			n = e.x,
			r = e.y,
			i = e.z;
		return (
			(t[0] *= n),
			(t[4] *= r),
			(t[8] *= i),
			(t[1] *= n),
			(t[5] *= r),
			(t[9] *= i),
			(t[2] *= n),
			(t[6] *= r),
			(t[10] *= i),
			(t[3] *= n),
			(t[7] *= r),
			(t[11] *= i),
			this
		);
	},
	getMaxScaleOnAxis: function () {
		var e = this.elements,
			t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
			n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
			r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	},
	makeTranslation: function (e, t, n) {
		return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	},
	makeRotationX: function (e) {
		var t = Math.cos(e),
			n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	},
	makeRotationY: function (e) {
		var t = Math.cos(e),
			n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	},
	makeRotationZ: function (e) {
		var t = Math.cos(e),
			n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	},
	makeRotationAxis: function (e, t) {
		var n = Math.cos(t),
			r = Math.sin(t),
			i = 1 - n,
			a = e.x,
			s = e.y,
			o = e.z,
			u = i * a,
			l = i * s;
		return (
			this.set(
				u * a + n,
				u * s - r * o,
				u * o + r * s,
				0,
				u * s + r * o,
				l * s + n,
				l * o - r * a,
				0,
				u * o - r * s,
				l * o + r * a,
				i * o * o + n,
				0,
				0,
				0,
				0,
				1
			),
			this
		);
	},
	makeScale: function (e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	},
	makeShear: function (e, t, n) {
		return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this;
	},
	compose: function (e, t, n) {
		var r = this.elements,
			i = t._x,
			a = t._y,
			s = t._z,
			o = t._w,
			u = i + i,
			l = a + a,
			f = s + s,
			c = i * u,
			h = i * l,
			p = i * f,
			d = a * l,
			m = a * f,
			v = s * f,
			g = o * u,
			x = o * l,
			M = o * f,
			_ = n.x,
			y = n.y,
			L = n.z;
		return (
			(r[0] = (1 - (d + v)) * _),
			(r[1] = (h + M) * _),
			(r[2] = (p - x) * _),
			(r[3] = 0),
			(r[4] = (h - M) * y),
			(r[5] = (1 - (c + v)) * y),
			(r[6] = (m + g) * y),
			(r[7] = 0),
			(r[8] = (p + x) * L),
			(r[9] = (m - g) * L),
			(r[10] = (1 - (c + d)) * L),
			(r[11] = 0),
			(r[12] = e.x),
			(r[13] = e.y),
			(r[14] = e.z),
			(r[15] = 1),
			this
		);
	},
	decompose: function (e, t, n) {
		var r = this.elements,
			i = Yt.set(r[0], r[1], r[2]).length(),
			a = Yt.set(r[4], r[5], r[6]).length(),
			s = Yt.set(r[8], r[9], r[10]).length(),
			o = this.determinant();
		o < 0 && (i = -i), (e.x = r[12]), (e.y = r[13]), (e.z = r[14]), vn.copy(this);
		var u = 1 / i,
			l = 1 / a,
			f = 1 / s;
		return (
			(vn.elements[0] *= u),
			(vn.elements[1] *= u),
			(vn.elements[2] *= u),
			(vn.elements[4] *= l),
			(vn.elements[5] *= l),
			(vn.elements[6] *= l),
			(vn.elements[8] *= f),
			(vn.elements[9] *= f),
			(vn.elements[10] *= f),
			t.setFromRotationMatrix(vn),
			(n.x = i),
			(n.y = a),
			(n.z = s),
			this
		);
	},
	makePerspective: function (e, t, n, r, i, a) {
		a === void 0 &&
			console.warn(
				'THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.'
			);
		var s = this.elements,
			o = (2 * i) / (t - e),
			u = (2 * i) / (n - r),
			l = (t + e) / (t - e),
			f = (n + r) / (n - r),
			c = -(a + i) / (a - i),
			h = (-2 * a * i) / (a - i);
		return (
			(s[0] = o),
			(s[4] = 0),
			(s[8] = l),
			(s[12] = 0),
			(s[1] = 0),
			(s[5] = u),
			(s[9] = f),
			(s[13] = 0),
			(s[2] = 0),
			(s[6] = 0),
			(s[10] = c),
			(s[14] = h),
			(s[3] = 0),
			(s[7] = 0),
			(s[11] = -1),
			(s[15] = 0),
			this
		);
	},
	makeOrthographic: function (e, t, n, r, i, a) {
		var s = this.elements,
			o = 1 / (t - e),
			u = 1 / (n - r),
			l = 1 / (a - i),
			f = (t + e) * o,
			c = (n + r) * u,
			h = (a + i) * l;
		return (
			(s[0] = 2 * o),
			(s[4] = 0),
			(s[8] = 0),
			(s[12] = -f),
			(s[1] = 0),
			(s[5] = 2 * u),
			(s[9] = 0),
			(s[13] = -c),
			(s[2] = 0),
			(s[6] = 0),
			(s[10] = -2 * l),
			(s[14] = -h),
			(s[3] = 0),
			(s[7] = 0),
			(s[11] = 0),
			(s[15] = 1),
			this
		);
	},
	equals: function (e) {
		for (var t = this.elements, n = e.elements, r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
		return !0;
	},
	fromArray: function (e, t) {
		t === void 0 && (t = 0);
		for (var n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	},
	toArray: function (e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0);
		var n = this.elements;
		return (
			(e[t] = n[0]),
			(e[t + 1] = n[1]),
			(e[t + 2] = n[2]),
			(e[t + 3] = n[3]),
			(e[t + 4] = n[4]),
			(e[t + 5] = n[5]),
			(e[t + 6] = n[6]),
			(e[t + 7] = n[7]),
			(e[t + 8] = n[8]),
			(e[t + 9] = n[9]),
			(e[t + 10] = n[10]),
			(e[t + 11] = n[11]),
			(e[t + 12] = n[12]),
			(e[t + 13] = n[13]),
			(e[t + 14] = n[14]),
			(e[t + 15] = n[15]),
			e
		);
	}
});
var of = new He(),
	uf = new qt();
function ji(e, t, n, r) {
	(this._x = e || 0), (this._y = t || 0), (this._z = n || 0), (this._order = r || ji.DefaultOrder);
}
ji.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
ji.DefaultOrder = 'XYZ';
Object.defineProperties(ji.prototype, {
	x: {
		get: function () {
			return this._x;
		},
		set: function (e) {
			(this._x = e), this._onChangeCallback();
		}
	},
	y: {
		get: function () {
			return this._y;
		},
		set: function (e) {
			(this._y = e), this._onChangeCallback();
		}
	},
	z: {
		get: function () {
			return this._z;
		},
		set: function (e) {
			(this._z = e), this._onChangeCallback();
		}
	},
	order: {
		get: function () {
			return this._order;
		},
		set: function (e) {
			(this._order = e), this._onChangeCallback();
		}
	}
});
Object.assign(ji.prototype, {
	isEuler: !0,
	set: function (e, t, n, r) {
		return (
			(this._x = e),
			(this._y = t),
			(this._z = n),
			(this._order = r || this._order),
			this._onChangeCallback(),
			this
		);
	},
	clone: function () {
		return new this.constructor(this._x, this._y, this._z, this._order);
	},
	copy: function (e) {
		return (
			(this._x = e._x),
			(this._y = e._y),
			(this._z = e._z),
			(this._order = e._order),
			this._onChangeCallback(),
			this
		);
	},
	setFromRotationMatrix: function (e, t, n) {
		var r = Ue.clamp,
			i = e.elements,
			a = i[0],
			s = i[4],
			o = i[8],
			u = i[1],
			l = i[5],
			f = i[9],
			c = i[2],
			h = i[6],
			p = i[10];
		return (
			(t = t || this._order),
			t === 'XYZ'
				? ((this._y = Math.asin(r(o, -1, 1))),
					Math.abs(o) < 0.9999999
						? ((this._x = Math.atan2(-f, p)), (this._z = Math.atan2(-s, a)))
						: ((this._x = Math.atan2(h, l)), (this._z = 0)))
				: t === 'YXZ'
					? ((this._x = Math.asin(-r(f, -1, 1))),
						Math.abs(f) < 0.9999999
							? ((this._y = Math.atan2(o, p)), (this._z = Math.atan2(u, l)))
							: ((this._y = Math.atan2(-c, a)), (this._z = 0)))
					: t === 'ZXY'
						? ((this._x = Math.asin(r(h, -1, 1))),
							Math.abs(h) < 0.9999999
								? ((this._y = Math.atan2(-c, p)), (this._z = Math.atan2(-s, l)))
								: ((this._y = 0), (this._z = Math.atan2(u, a))))
						: t === 'ZYX'
							? ((this._y = Math.asin(-r(c, -1, 1))),
								Math.abs(c) < 0.9999999
									? ((this._x = Math.atan2(h, p)), (this._z = Math.atan2(u, a)))
									: ((this._x = 0), (this._z = Math.atan2(-s, l))))
							: t === 'YZX'
								? ((this._z = Math.asin(r(u, -1, 1))),
									Math.abs(u) < 0.9999999
										? ((this._x = Math.atan2(-f, l)), (this._y = Math.atan2(-c, a)))
										: ((this._x = 0), (this._y = Math.atan2(o, p))))
								: t === 'XZY'
									? ((this._z = Math.asin(-r(s, -1, 1))),
										Math.abs(s) < 0.9999999
											? ((this._x = Math.atan2(h, l)), (this._y = Math.atan2(o, a)))
											: ((this._x = Math.atan2(-f, p)), (this._y = 0)))
									: console.warn(
											'THREE.Euler: .setFromRotationMatrix() given unsupported order: ' + t
										),
			(this._order = t),
			n !== !1 && this._onChangeCallback(),
			this
		);
	},
	setFromQuaternion: function (e, t, n) {
		return of.makeRotationFromQuaternion(e), this.setFromRotationMatrix(of, t, n);
	},
	setFromVector3: function (e, t) {
		return this.set(e.x, e.y, e.z, t || this._order);
	},
	reorder: function (e) {
		return uf.setFromEuler(this), this.setFromQuaternion(uf, e);
	},
	equals: function (e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	},
	fromArray: function (e) {
		return (
			(this._x = e[0]),
			(this._y = e[1]),
			(this._z = e[2]),
			e[3] !== void 0 && (this._order = e[3]),
			this._onChangeCallback(),
			this
		);
	},
	toArray: function (e, t) {
		return (
			e === void 0 && (e = []),
			t === void 0 && (t = 0),
			(e[t] = this._x),
			(e[t + 1] = this._y),
			(e[t + 2] = this._z),
			(e[t + 3] = this._order),
			e
		);
	},
	toVector3: function (e) {
		return e ? e.set(this._x, this._y, this._z) : new R(this._x, this._y, this._z);
	},
	_onChange: function (e) {
		return (this._onChangeCallback = e), this;
	},
	_onChangeCallback: function () {}
});
function zc() {
	this.mask = 1;
}
Object.assign(zc.prototype, {
	set: function (e) {
		this.mask = (1 << e) | 0;
	},
	enable: function (e) {
		this.mask |= (1 << e) | 0;
	},
	enableAll: function () {
		this.mask = -1;
	},
	toggle: function (e) {
		this.mask ^= (1 << e) | 0;
	},
	disable: function (e) {
		this.mask &= ~((1 << e) | 0);
	},
	disableAll: function () {
		this.mask = 0;
	},
	test: function (e) {
		return (this.mask & e.mask) !== 0;
	}
});
var qp = 0,
	lf = new R(),
	ri = new qt(),
	Wn = new He(),
	ns = new R(),
	Yi = new R(),
	jp = new R(),
	Kp = new qt(),
	ff = new R(1, 0, 0),
	cf = new R(0, 1, 0),
	hf = new R(0, 0, 1),
	Jp = { type: 'added' },
	Xp = { type: 'removed' };
function se() {
	Object.defineProperty(this, 'id', { value: qp++ }),
		(this.uuid = Ue.generateUUID()),
		(this.name = ''),
		(this.type = 'Object3D'),
		(this.parent = null),
		(this.children = []),
		(this.up = se.DefaultUp.clone());
	var e = new R(),
		t = new ji(),
		n = new qt(),
		r = new R(1, 1, 1);
	function i() {
		n.setFromEuler(t, !1);
	}
	function a() {
		t.setFromQuaternion(n, void 0, !1);
	}
	t._onChange(i),
		n._onChange(a),
		Object.defineProperties(this, {
			position: { configurable: !0, enumerable: !0, value: e },
			rotation: { configurable: !0, enumerable: !0, value: t },
			quaternion: { configurable: !0, enumerable: !0, value: n },
			scale: { configurable: !0, enumerable: !0, value: r },
			modelViewMatrix: { value: new He() },
			normalMatrix: { value: new Et() }
		}),
		(this.matrix = new He()),
		(this.matrixWorld = new He()),
		(this.matrixAutoUpdate = se.DefaultMatrixAutoUpdate),
		(this.matrixWorldNeedsUpdate = !1),
		(this.layers = new zc()),
		(this.visible = !0),
		(this.castShadow = !1),
		(this.receiveShadow = !1),
		(this.frustumCulled = !0),
		(this.renderOrder = 0),
		(this.userData = {});
}
se.DefaultUp = new R(0, 1, 0);
se.DefaultMatrixAutoUpdate = !0;
se.prototype = Object.assign(Object.create(Vn.prototype), {
	constructor: se,
	isObject3D: !0,
	onBeforeRender: function () {},
	onAfterRender: function () {},
	applyMatrix: function (e) {
		this.matrixAutoUpdate && this.updateMatrix(),
			this.matrix.premultiply(e),
			this.matrix.decompose(this.position, this.quaternion, this.scale);
	},
	applyQuaternion: function (e) {
		return this.quaternion.premultiply(e), this;
	},
	setRotationFromAxisAngle: function (e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	},
	setRotationFromEuler: function (e) {
		this.quaternion.setFromEuler(e, !0);
	},
	setRotationFromMatrix: function (e) {
		this.quaternion.setFromRotationMatrix(e);
	},
	setRotationFromQuaternion: function (e) {
		this.quaternion.copy(e);
	},
	rotateOnAxis: function (e, t) {
		return ri.setFromAxisAngle(e, t), this.quaternion.multiply(ri), this;
	},
	rotateOnWorldAxis: function (e, t) {
		return ri.setFromAxisAngle(e, t), this.quaternion.premultiply(ri), this;
	},
	rotateX: function (e) {
		return this.rotateOnAxis(ff, e);
	},
	rotateY: function (e) {
		return this.rotateOnAxis(cf, e);
	},
	rotateZ: function (e) {
		return this.rotateOnAxis(hf, e);
	},
	translateOnAxis: function (e, t) {
		return (
			lf.copy(e).applyQuaternion(this.quaternion), this.position.add(lf.multiplyScalar(t)), this
		);
	},
	translateX: function (e) {
		return this.translateOnAxis(ff, e);
	},
	translateY: function (e) {
		return this.translateOnAxis(cf, e);
	},
	translateZ: function (e) {
		return this.translateOnAxis(hf, e);
	},
	localToWorld: function (e) {
		return e.applyMatrix4(this.matrixWorld);
	},
	worldToLocal: function (e) {
		return e.applyMatrix4(Wn.getInverse(this.matrixWorld));
	},
	lookAt: function (e, t, n) {
		e.isVector3 ? ns.copy(e) : ns.set(e, t, n);
		var r = this.parent;
		this.updateWorldMatrix(!0, !1),
			Yi.setFromMatrixPosition(this.matrixWorld),
			this.isCamera || this.isLight ? Wn.lookAt(Yi, ns, this.up) : Wn.lookAt(ns, Yi, this.up),
			this.quaternion.setFromRotationMatrix(Wn),
			r &&
				(Wn.extractRotation(r.matrixWorld),
				ri.setFromRotationMatrix(Wn),
				this.quaternion.premultiply(ri.inverse()));
	},
	add: function (e) {
		if (arguments.length > 1) {
			for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
			return this;
		}
		return e === this
			? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this)
			: (e && e.isObject3D
					? (e.parent !== null && e.parent.remove(e),
						(e.parent = this),
						this.children.push(e),
						e.dispatchEvent(Jp))
					: console.error('THREE.Object3D.add: object not an instance of THREE.Object3D.', e),
				this);
	},
	remove: function (e) {
		if (arguments.length > 1) {
			for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
			return this;
		}
		var n = this.children.indexOf(e);
		return n !== -1 && ((e.parent = null), this.children.splice(n, 1), e.dispatchEvent(Xp)), this;
	},
	attach: function (e) {
		return (
			this.updateWorldMatrix(!0, !1),
			Wn.getInverse(this.matrixWorld),
			e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Wn.multiply(e.parent.matrixWorld)),
			e.applyMatrix(Wn),
			e.updateWorldMatrix(!1, !1),
			this.add(e),
			this
		);
	},
	getObjectById: function (e) {
		return this.getObjectByProperty('id', e);
	},
	getObjectByName: function (e) {
		return this.getObjectByProperty('name', e);
	},
	getObjectByProperty: function (e, t) {
		if (this[e] === t) return this;
		for (var n = 0, r = this.children.length; n < r; n++) {
			var i = this.children[n],
				a = i.getObjectByProperty(e, t);
			if (a !== void 0) return a;
		}
	},
	getWorldPosition: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Object3D: .getWorldPosition() target is now required'), (e = new R())),
			this.updateMatrixWorld(!0),
			e.setFromMatrixPosition(this.matrixWorld)
		);
	},
	getWorldQuaternion: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Object3D: .getWorldQuaternion() target is now required'),
				(e = new qt())),
			this.updateMatrixWorld(!0),
			this.matrixWorld.decompose(Yi, e, jp),
			e
		);
	},
	getWorldScale: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Object3D: .getWorldScale() target is now required'), (e = new R())),
			this.updateMatrixWorld(!0),
			this.matrixWorld.decompose(Yi, Kp, e),
			e
		);
	},
	getWorldDirection: function (e) {
		e === void 0 &&
			(console.warn('THREE.Object3D: .getWorldDirection() target is now required'), (e = new R())),
			this.updateMatrixWorld(!0);
		var t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	},
	raycast: function () {},
	traverse: function (e) {
		e(this);
		for (var t = this.children, n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	},
	traverseVisible: function (e) {
		if (this.visible !== !1) {
			e(this);
			for (var t = this.children, n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
		}
	},
	traverseAncestors: function (e) {
		var t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	},
	updateMatrix: function () {
		this.matrix.compose(this.position, this.quaternion, this.scale),
			(this.matrixWorldNeedsUpdate = !0);
	},
	updateMatrixWorld: function (e) {
		this.matrixAutoUpdate && this.updateMatrix(),
			(this.matrixWorldNeedsUpdate || e) &&
				(this.parent === null
					? this.matrixWorld.copy(this.matrix)
					: this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
				(this.matrixWorldNeedsUpdate = !1),
				(e = !0));
		for (var t = this.children, n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	},
	updateWorldMatrix: function (e, t) {
		var n = this.parent;
		if (
			(e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
			this.matrixAutoUpdate && this.updateMatrix(),
			this.parent === null
				? this.matrixWorld.copy(this.matrix)
				: this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
			t === !0)
		)
			for (var r = this.children, i = 0, a = r.length; i < a; i++) r[i].updateWorldMatrix(!1, !0);
	},
	toJSON: function (e) {
		var t = e === void 0 || typeof e == 'string',
			n = {};
		t &&
			((e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {} }),
			(n.metadata = { version: 4.5, type: 'Object', generator: 'Object3D.toJSON' }));
		var r = {};
		(r.uuid = this.uuid),
			(r.type = this.type),
			this.name !== '' && (r.name = this.name),
			this.castShadow === !0 && (r.castShadow = !0),
			this.receiveShadow === !0 && (r.receiveShadow = !0),
			this.visible === !1 && (r.visible = !1),
			this.frustumCulled === !1 && (r.frustumCulled = !1),
			this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
			JSON.stringify(this.userData) !== '{}' && (r.userData = this.userData),
			(r.layers = this.layers.mask),
			(r.matrix = this.matrix.toArray()),
			this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
			this.isMesh && this.drawMode !== Fl && (r.drawMode = this.drawMode);
		function i(v, g) {
			return v[g.uuid] === void 0 && (v[g.uuid] = g.toJSON(e)), g.uuid;
		}
		if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			var a = this.geometry.parameters;
			if (a !== void 0 && a.shapes !== void 0) {
				var s = a.shapes;
				if (Array.isArray(s))
					for (var o = 0, u = s.length; o < u; o++) {
						var l = s[o];
						i(e.shapes, l);
					}
				else i(e.shapes, s);
			}
		}
		if (this.material !== void 0)
			if (Array.isArray(this.material)) {
				for (var f = [], o = 0, u = this.material.length; o < u; o++)
					f.push(i(e.materials, this.material[o]));
				r.material = f;
			} else r.material = i(e.materials, this.material);
		if (this.children.length > 0) {
			r.children = [];
			for (var o = 0; o < this.children.length; o++)
				r.children.push(this.children[o].toJSON(e).object);
		}
		if (t) {
			var c = m(e.geometries),
				h = m(e.materials),
				p = m(e.textures),
				d = m(e.images),
				s = m(e.shapes);
			c.length > 0 && (n.geometries = c),
				h.length > 0 && (n.materials = h),
				p.length > 0 && (n.textures = p),
				d.length > 0 && (n.images = d),
				s.length > 0 && (n.shapes = s);
		}
		return (n.object = r), n;
		function m(v) {
			var g = [];
			for (var x in v) {
				var M = v[x];
				delete M.metadata, g.push(M);
			}
			return g;
		}
	},
	clone: function (e) {
		return new this.constructor().copy(this, e);
	},
	copy: function (e, t) {
		if (
			(t === void 0 && (t = !0),
			(this.name = e.name),
			this.up.copy(e.up),
			this.position.copy(e.position),
			this.quaternion.copy(e.quaternion),
			this.scale.copy(e.scale),
			this.matrix.copy(e.matrix),
			this.matrixWorld.copy(e.matrixWorld),
			(this.matrixAutoUpdate = e.matrixAutoUpdate),
			(this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
			(this.layers.mask = e.layers.mask),
			(this.visible = e.visible),
			(this.castShadow = e.castShadow),
			(this.receiveShadow = e.receiveShadow),
			(this.frustumCulled = e.frustumCulled),
			(this.renderOrder = e.renderOrder),
			(this.userData = JSON.parse(JSON.stringify(e.userData))),
			t === !0)
		)
			for (var n = 0; n < e.children.length; n++) {
				var r = e.children[n];
				this.add(r.clone());
			}
		return this;
	}
});
function Js() {
	se.call(this),
		(this.type = 'Scene'),
		(this.background = null),
		(this.fog = null),
		(this.overrideMaterial = null),
		(this.autoUpdate = !0),
		typeof __THREE_DEVTOOLS__ < 'u' &&
			__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
}
Js.prototype = Object.assign(Object.create(se.prototype), {
	constructor: Js,
	isScene: !0,
	copy: function (e, t) {
		return (
			se.prototype.copy.call(this, e, t),
			e.background !== null && (this.background = e.background.clone()),
			e.fog !== null && (this.fog = e.fog.clone()),
			e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
			(this.autoUpdate = e.autoUpdate),
			(this.matrixAutoUpdate = e.matrixAutoUpdate),
			this
		);
	},
	toJSON: function (e) {
		var t = se.prototype.toJSON.call(this, e);
		return (
			this.background !== null && (t.object.background = this.background.toJSON(e)),
			this.fog !== null && (t.object.fog = this.fog.toJSON()),
			t
		);
	},
	dispose: function () {
		this.dispatchEvent({ type: 'dispose' });
	}
});
var qn = [new R(), new R(), new R(), new R(), new R(), new R(), new R(), new R()],
	Rn = new R(),
	ii = new R(),
	ai = new R(),
	si = new R(),
	cr = new R(),
	hr = new R(),
	Rr = new R(),
	Zi = new R(),
	rs = new R(),
	is = new R(),
	Cr = new R();
function ur(e, t) {
	(this.min = e !== void 0 ? e : new R(1 / 0, 1 / 0, 1 / 0)),
		(this.max = t !== void 0 ? t : new R(-1 / 0, -1 / 0, -1 / 0));
}
Object.assign(ur.prototype, {
	isBox3: !0,
	set: function (e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	},
	setFromArray: function (e) {
		for (
			var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, s = -1 / 0, o = 0, u = e.length;
			o < u;
			o += 3
		) {
			var l = e[o],
				f = e[o + 1],
				c = e[o + 2];
			l < t && (t = l),
				f < n && (n = f),
				c < r && (r = c),
				l > i && (i = l),
				f > a && (a = f),
				c > s && (s = c);
		}
		return this.min.set(t, n, r), this.max.set(i, a, s), this;
	},
	setFromBufferAttribute: function (e) {
		for (
			var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, s = -1 / 0, o = 0, u = e.count;
			o < u;
			o++
		) {
			var l = e.getX(o),
				f = e.getY(o),
				c = e.getZ(o);
			l < t && (t = l),
				f < n && (n = f),
				c < r && (r = c),
				l > i && (i = l),
				f > a && (a = f),
				c > s && (s = c);
		}
		return this.min.set(t, n, r), this.max.set(i, a, s), this;
	},
	setFromPoints: function (e) {
		this.makeEmpty();
		for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	},
	setFromCenterAndSize: function (e, t) {
		var n = Rn.copy(t).multiplyScalar(0.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	},
	setFromObject: function (e) {
		return this.makeEmpty(), this.expandByObject(e);
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	},
	makeEmpty: function () {
		return (
			(this.min.x = this.min.y = this.min.z = 1 / 0),
			(this.max.x = this.max.y = this.max.z = -1 / 0),
			this
		);
	},
	isEmpty: function () {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	},
	getCenter: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Box3: .getCenter() target is now required'), (e = new R())),
			this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5)
		);
	},
	getSize: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Box3: .getSize() target is now required'), (e = new R())),
			this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
		);
	},
	expandByPoint: function (e) {
		return this.min.min(e), this.max.max(e), this;
	},
	expandByVector: function (e) {
		return this.min.sub(e), this.max.add(e), this;
	},
	expandByScalar: function (e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	},
	expandByObject: function (e) {
		var t, n;
		e.updateWorldMatrix(!1, !1);
		var r = e.geometry;
		if (r !== void 0) {
			if (r.isGeometry) {
				var i = r.vertices;
				for (t = 0, n = i.length; t < n; t++)
					Rn.copy(i[t]), Rn.applyMatrix4(e.matrixWorld), this.expandByPoint(Rn);
			} else if (r.isBufferGeometry) {
				var a = r.attributes.position;
				if (a !== void 0)
					for (t = 0, n = a.count; t < n; t++)
						Rn.fromBufferAttribute(a, t).applyMatrix4(e.matrixWorld), this.expandByPoint(Rn);
			}
		}
		var s = e.children;
		for (t = 0, n = s.length; t < n; t++) this.expandByObject(s[t]);
		return this;
	},
	containsPoint: function (e) {
		return !(
			e.x < this.min.x ||
			e.x > this.max.x ||
			e.y < this.min.y ||
			e.y > this.max.y ||
			e.z < this.min.z ||
			e.z > this.max.z
		);
	},
	containsBox: function (e) {
		return (
			this.min.x <= e.min.x &&
			e.max.x <= this.max.x &&
			this.min.y <= e.min.y &&
			e.max.y <= this.max.y &&
			this.min.z <= e.min.z &&
			e.max.z <= this.max.z
		);
	},
	getParameter: function (e, t) {
		return (
			t === void 0 &&
				(console.warn('THREE.Box3: .getParameter() target is now required'), (t = new R())),
			t.set(
				(e.x - this.min.x) / (this.max.x - this.min.x),
				(e.y - this.min.y) / (this.max.y - this.min.y),
				(e.z - this.min.z) / (this.max.z - this.min.z)
			)
		);
	},
	intersectsBox: function (e) {
		return !(
			e.max.x < this.min.x ||
			e.min.x > this.max.x ||
			e.max.y < this.min.y ||
			e.min.y > this.max.y ||
			e.max.z < this.min.z ||
			e.min.z > this.max.z
		);
	},
	intersectsSphere: function (e) {
		return this.clampPoint(e.center, Rn), Rn.distanceToSquared(e.center) <= e.radius * e.radius;
	},
	intersectsPlane: function (e) {
		var t, n;
		return (
			e.normal.x > 0
				? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
				: ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
			e.normal.y > 0
				? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
				: ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
			e.normal.z > 0
				? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
				: ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
			t <= -e.constant && n >= -e.constant
		);
	},
	intersectsTriangle: function (e) {
		if (this.isEmpty()) return !1;
		this.getCenter(Zi),
			rs.subVectors(this.max, Zi),
			ii.subVectors(e.a, Zi),
			ai.subVectors(e.b, Zi),
			si.subVectors(e.c, Zi),
			cr.subVectors(ai, ii),
			hr.subVectors(si, ai),
			Rr.subVectors(ii, si);
		var t = [
			0,
			-cr.z,
			cr.y,
			0,
			-hr.z,
			hr.y,
			0,
			-Rr.z,
			Rr.y,
			cr.z,
			0,
			-cr.x,
			hr.z,
			0,
			-hr.x,
			Rr.z,
			0,
			-Rr.x,
			-cr.y,
			cr.x,
			0,
			-hr.y,
			hr.x,
			0,
			-Rr.y,
			Rr.x,
			0
		];
		return !jo(t, ii, ai, si, rs) || ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !jo(t, ii, ai, si, rs))
			? !1
			: (is.crossVectors(cr, hr), (t = [is.x, is.y, is.z]), jo(t, ii, ai, si, rs));
	},
	clampPoint: function (e, t) {
		return (
			t === void 0 &&
				(console.warn('THREE.Box3: .clampPoint() target is now required'), (t = new R())),
			t.copy(e).clamp(this.min, this.max)
		);
	},
	distanceToPoint: function (e) {
		var t = Rn.copy(e).clamp(this.min, this.max);
		return t.sub(e).length();
	},
	getBoundingSphere: function (e) {
		return (
			e === void 0 && console.error('THREE.Box3: .getBoundingSphere() target is now required'),
			this.getCenter(e.center),
			(e.radius = this.getSize(Rn).length() * 0.5),
			e
		);
	},
	intersect: function (e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	},
	union: function (e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	},
	applyMatrix4: function (e) {
		return this.isEmpty()
			? this
			: (qn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
				qn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
				qn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
				qn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
				qn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
				qn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
				qn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
				qn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
				this.setFromPoints(qn),
				this);
	},
	translate: function (e) {
		return this.min.add(e), this.max.add(e), this;
	},
	equals: function (e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
});
function jo(e, t, n, r, i) {
	var a, s;
	for (a = 0, s = e.length - 3; a <= s; a += 3) {
		Cr.fromArray(e, a);
		var o = i.x * Math.abs(Cr.x) + i.y * Math.abs(Cr.y) + i.z * Math.abs(Cr.z),
			u = t.dot(Cr),
			l = n.dot(Cr),
			f = r.dot(Cr);
		if (Math.max(-Math.max(u, l, f), Math.min(u, l, f)) > o) return !1;
	}
	return !0;
}
var Yp = new ur();
function Mr(e, t) {
	(this.center = e !== void 0 ? e : new R()), (this.radius = t !== void 0 ? t : 0);
}
Object.assign(Mr.prototype, {
	set: function (e, t) {
		return this.center.copy(e), (this.radius = t), this;
	},
	setFromPoints: function (e, t) {
		var n = this.center;
		t !== void 0 ? n.copy(t) : Yp.setFromPoints(e).getCenter(n);
		for (var r = 0, i = 0, a = e.length; i < a; i++) r = Math.max(r, n.distanceToSquared(e[i]));
		return (this.radius = Math.sqrt(r)), this;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return this.center.copy(e.center), (this.radius = e.radius), this;
	},
	empty: function () {
		return this.radius <= 0;
	},
	containsPoint: function (e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	},
	distanceToPoint: function (e) {
		return e.distanceTo(this.center) - this.radius;
	},
	intersectsSphere: function (e) {
		var t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	},
	intersectsBox: function (e) {
		return e.intersectsSphere(this);
	},
	intersectsPlane: function (e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	},
	clampPoint: function (e, t) {
		var n = this.center.distanceToSquared(e);
		return (
			t === void 0 &&
				(console.warn('THREE.Sphere: .clampPoint() target is now required'), (t = new R())),
			t.copy(e),
			n > this.radius * this.radius &&
				(t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)),
			t
		);
	},
	getBoundingBox: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Sphere: .getBoundingBox() target is now required'), (e = new ur())),
			e.set(this.center, this.center),
			e.expandByScalar(this.radius),
			e
		);
	},
	applyMatrix4: function (e) {
		return this.center.applyMatrix4(e), (this.radius = this.radius * e.getMaxScaleOnAxis()), this;
	},
	translate: function (e) {
		return this.center.add(e), this;
	},
	equals: function (e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
});
var jn = new R(),
	Ko = new R(),
	as = new R(),
	dr = new R(),
	Jo = new R(),
	ss = new R(),
	Xo = new R();
function Ki(e, t) {
	(this.origin = e !== void 0 ? e : new R()), (this.direction = t !== void 0 ? t : new R());
}
Object.assign(Ki.prototype, {
	set: function (e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	},
	at: function (e, t) {
		return (
			t === void 0 && (console.warn('THREE.Ray: .at() target is now required'), (t = new R())),
			t.copy(this.direction).multiplyScalar(e).add(this.origin)
		);
	},
	lookAt: function (e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	},
	recast: function (e) {
		return this.origin.copy(this.at(e, jn)), this;
	},
	closestPointToPoint: function (e, t) {
		t === void 0 &&
			(console.warn('THREE.Ray: .closestPointToPoint() target is now required'), (t = new R())),
			t.subVectors(e, this.origin);
		var n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
	},
	distanceToPoint: function (e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	},
	distanceSqToPoint: function (e) {
		var t = jn.subVectors(e, this.origin).dot(this.direction);
		return t < 0
			? this.origin.distanceToSquared(e)
			: (jn.copy(this.direction).multiplyScalar(t).add(this.origin), jn.distanceToSquared(e));
	},
	distanceSqToSegment: function (e, t, n, r) {
		Ko.copy(e).add(t).multiplyScalar(0.5),
			as.copy(t).sub(e).normalize(),
			dr.copy(this.origin).sub(Ko);
		var i = e.distanceTo(t) * 0.5,
			a = -this.direction.dot(as),
			s = dr.dot(this.direction),
			o = -dr.dot(as),
			u = dr.lengthSq(),
			l = Math.abs(1 - a * a),
			f,
			c,
			h,
			p;
		if (l > 0)
			if (((f = a * o - s), (c = a * s - o), (p = i * l), f >= 0))
				if (c >= -p)
					if (c <= p) {
						var d = 1 / l;
						(f *= d), (c *= d), (h = f * (f + a * c + 2 * s) + c * (a * f + c + 2 * o) + u);
					} else (c = i), (f = Math.max(0, -(a * c + s))), (h = -f * f + c * (c + 2 * o) + u);
				else (c = -i), (f = Math.max(0, -(a * c + s))), (h = -f * f + c * (c + 2 * o) + u);
			else
				c <= -p
					? ((f = Math.max(0, -(-a * i + s))),
						(c = f > 0 ? -i : Math.min(Math.max(-i, -o), i)),
						(h = -f * f + c * (c + 2 * o) + u))
					: c <= p
						? ((f = 0), (c = Math.min(Math.max(-i, -o), i)), (h = c * (c + 2 * o) + u))
						: ((f = Math.max(0, -(a * i + s))),
							(c = f > 0 ? i : Math.min(Math.max(-i, -o), i)),
							(h = -f * f + c * (c + 2 * o) + u));
		else (c = a > 0 ? -i : i), (f = Math.max(0, -(a * c + s))), (h = -f * f + c * (c + 2 * o) + u);
		return (
			n && n.copy(this.direction).multiplyScalar(f).add(this.origin),
			r && r.copy(as).multiplyScalar(c).add(Ko),
			h
		);
	},
	intersectSphere: function (e, t) {
		jn.subVectors(e.center, this.origin);
		var n = jn.dot(this.direction),
			r = jn.dot(jn) - n * n,
			i = e.radius * e.radius;
		if (r > i) return null;
		var a = Math.sqrt(i - r),
			s = n - a,
			o = n + a;
		return s < 0 && o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t);
	},
	intersectsSphere: function (e) {
		return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	},
	distanceToPlane: function (e) {
		var t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		var n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	},
	intersectPlane: function (e, t) {
		var n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	},
	intersectsPlane: function (e) {
		var t = e.distanceToPoint(this.origin);
		if (t === 0) return !0;
		var n = e.normal.dot(this.direction);
		return n * t < 0;
	},
	intersectBox: function (e, t) {
		var n,
			r,
			i,
			a,
			s,
			o,
			u = 1 / this.direction.x,
			l = 1 / this.direction.y,
			f = 1 / this.direction.z,
			c = this.origin;
		return (
			u >= 0
				? ((n = (e.min.x - c.x) * u), (r = (e.max.x - c.x) * u))
				: ((n = (e.max.x - c.x) * u), (r = (e.min.x - c.x) * u)),
			l >= 0
				? ((i = (e.min.y - c.y) * l), (a = (e.max.y - c.y) * l))
				: ((i = (e.max.y - c.y) * l), (a = (e.min.y - c.y) * l)),
			n > a ||
			i > r ||
			((i > n || n !== n) && (n = i),
			(a < r || r !== r) && (r = a),
			f >= 0
				? ((s = (e.min.z - c.z) * f), (o = (e.max.z - c.z) * f))
				: ((s = (e.max.z - c.z) * f), (o = (e.min.z - c.z) * f)),
			n > o || s > r) ||
			((s > n || n !== n) && (n = s), (o < r || r !== r) && (r = o), r < 0)
				? null
				: this.at(n >= 0 ? n : r, t)
		);
	},
	intersectsBox: function (e) {
		return this.intersectBox(e, jn) !== null;
	},
	intersectTriangle: function (e, t, n, r, i) {
		Jo.subVectors(t, e), ss.subVectors(n, e), Xo.crossVectors(Jo, ss);
		var a = this.direction.dot(Xo),
			s;
		if (a > 0) {
			if (r) return null;
			s = 1;
		} else if (a < 0) (s = -1), (a = -a);
		else return null;
		dr.subVectors(this.origin, e);
		var o = s * this.direction.dot(ss.crossVectors(dr, ss));
		if (o < 0) return null;
		var u = s * this.direction.dot(Jo.cross(dr));
		if (u < 0 || o + u > a) return null;
		var l = -s * dr.dot(Xo);
		return l < 0 ? null : this.at(l / a, i);
	},
	applyMatrix4: function (e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	},
	equals: function (e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
});
var xn = new R(),
	Yn = new R(),
	Yo = new R(),
	Kn = new R(),
	oi = new R(),
	ui = new R(),
	df = new R(),
	Zo = new R(),
	Qo = new R(),
	$o = new R();
function Ct(e, t, n) {
	(this.a = e !== void 0 ? e : new R()),
		(this.b = t !== void 0 ? t : new R()),
		(this.c = n !== void 0 ? n : new R());
}
Object.assign(Ct, {
	getNormal: function (e, t, n, r) {
		r === void 0 &&
			(console.warn('THREE.Triangle: .getNormal() target is now required'), (r = new R())),
			r.subVectors(n, t),
			xn.subVectors(e, t),
			r.cross(xn);
		var i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	},
	getBarycoord: function (e, t, n, r, i) {
		xn.subVectors(r, t), Yn.subVectors(n, t), Yo.subVectors(e, t);
		var a = xn.dot(xn),
			s = xn.dot(Yn),
			o = xn.dot(Yo),
			u = Yn.dot(Yn),
			l = Yn.dot(Yo),
			f = a * u - s * s;
		if (
			(i === void 0 &&
				(console.warn('THREE.Triangle: .getBarycoord() target is now required'), (i = new R())),
			f === 0)
		)
			return i.set(-2, -1, -1);
		var c = 1 / f,
			h = (u * o - s * l) * c,
			p = (a * l - s * o) * c;
		return i.set(1 - h - p, p, h);
	},
	containsPoint: function (e, t, n, r) {
		return Ct.getBarycoord(e, t, n, r, Kn), Kn.x >= 0 && Kn.y >= 0 && Kn.x + Kn.y <= 1;
	},
	getUV: function (e, t, n, r, i, a, s, o) {
		return (
			this.getBarycoord(e, t, n, r, Kn),
			o.set(0, 0),
			o.addScaledVector(i, Kn.x),
			o.addScaledVector(a, Kn.y),
			o.addScaledVector(s, Kn.z),
			o
		);
	},
	isFrontFacing: function (e, t, n, r) {
		return xn.subVectors(n, t), Yn.subVectors(e, t), xn.cross(Yn).dot(r) < 0;
	}
});
Object.assign(Ct.prototype, {
	set: function (e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	},
	setFromPointsAndIndices: function (e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	},
	getArea: function () {
		return (
			xn.subVectors(this.c, this.b), Yn.subVectors(this.a, this.b), xn.cross(Yn).length() * 0.5
		);
	},
	getMidpoint: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Triangle: .getMidpoint() target is now required'), (e = new R())),
			e
				.addVectors(this.a, this.b)
				.add(this.c)
				.multiplyScalar(1 / 3)
		);
	},
	getNormal: function (e) {
		return Ct.getNormal(this.a, this.b, this.c, e);
	},
	getPlane: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Triangle: .getPlane() target is now required'), (e = new R())),
			e.setFromCoplanarPoints(this.a, this.b, this.c)
		);
	},
	getBarycoord: function (e, t) {
		return Ct.getBarycoord(e, this.a, this.b, this.c, t);
	},
	getUV: function (e, t, n, r, i) {
		return Ct.getUV(e, this.a, this.b, this.c, t, n, r, i);
	},
	containsPoint: function (e) {
		return Ct.containsPoint(e, this.a, this.b, this.c);
	},
	isFrontFacing: function (e) {
		return Ct.isFrontFacing(this.a, this.b, this.c, e);
	},
	intersectsBox: function (e) {
		return e.intersectsTriangle(this);
	},
	closestPointToPoint: function (e, t) {
		t === void 0 &&
			(console.warn('THREE.Triangle: .closestPointToPoint() target is now required'),
			(t = new R()));
		var n = this.a,
			r = this.b,
			i = this.c,
			a,
			s;
		oi.subVectors(r, n), ui.subVectors(i, n), Zo.subVectors(e, n);
		var o = oi.dot(Zo),
			u = ui.dot(Zo);
		if (o <= 0 && u <= 0) return t.copy(n);
		Qo.subVectors(e, r);
		var l = oi.dot(Qo),
			f = ui.dot(Qo);
		if (l >= 0 && f <= l) return t.copy(r);
		var c = o * f - l * u;
		if (c <= 0 && o >= 0 && l <= 0) return (a = o / (o - l)), t.copy(n).addScaledVector(oi, a);
		$o.subVectors(e, i);
		var h = oi.dot($o),
			p = ui.dot($o);
		if (p >= 0 && h <= p) return t.copy(i);
		var d = h * u - o * p;
		if (d <= 0 && u >= 0 && p <= 0) return (s = u / (u - p)), t.copy(n).addScaledVector(ui, s);
		var m = l * p - h * f;
		if (m <= 0 && f - l >= 0 && h - p >= 0)
			return (
				df.subVectors(i, r), (s = (f - l) / (f - l + (h - p))), t.copy(r).addScaledVector(df, s)
			);
		var v = 1 / (m + d + c);
		return (a = d * v), (s = c * v), t.copy(n).addScaledVector(oi, a).addScaledVector(ui, s);
	},
	equals: function (e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
});
var Zp = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	},
	mn = { h: 0, s: 0, l: 0 },
	os = { h: 0, s: 0, l: 0 };
function he(e, t, n) {
	return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
}
function zo(e, t, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e
	);
}
function eu(e) {
	return e < 0.04045 ? e * 0.0773993808 : Math.pow(e * 0.9478672986 + 0.0521327014, 2.4);
}
function tu(e) {
	return e < 0.0031308 ? e * 12.92 : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
Object.assign(he.prototype, {
	isColor: !0,
	r: 1,
	g: 1,
	b: 1,
	set: function (e) {
		return (
			e && e.isColor
				? this.copy(e)
				: typeof e == 'number'
					? this.setHex(e)
					: typeof e == 'string' && this.setStyle(e),
			this
		);
	},
	setScalar: function (e) {
		return (this.r = e), (this.g = e), (this.b = e), this;
	},
	setHex: function (e) {
		return (
			(e = Math.floor(e)),
			(this.r = ((e >> 16) & 255) / 255),
			(this.g = ((e >> 8) & 255) / 255),
			(this.b = (e & 255) / 255),
			this
		);
	},
	setRGB: function (e, t, n) {
		return (this.r = e), (this.g = t), (this.b = n), this;
	},
	setHSL: function (e, t, n) {
		if (((e = Ue.euclideanModulo(e, 1)), (t = Ue.clamp(t, 0, 1)), (n = Ue.clamp(n, 0, 1)), t === 0))
			this.r = this.g = this.b = n;
		else {
			var r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
				i = 2 * n - r;
			(this.r = zo(i, r, e + 1 / 3)), (this.g = zo(i, r, e)), (this.b = zo(i, r, e - 1 / 3));
		}
		return this;
	},
	setStyle: function (e) {
		function t(c) {
			c !== void 0 &&
				parseFloat(c) < 1 &&
				console.warn('THREE.Color: Alpha component of ' + e + ' will be ignored.');
		}
		var n;
		if ((n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e))) {
			var r,
				i = n[1],
				a = n[2];
			switch (i) {
				case 'rgb':
				case 'rgba':
					if ((r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)))
						return (
							(this.r = Math.min(255, parseInt(r[1], 10)) / 255),
							(this.g = Math.min(255, parseInt(r[2], 10)) / 255),
							(this.b = Math.min(255, parseInt(r[3], 10)) / 255),
							t(r[5]),
							this
						);
					if ((r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)))
						return (
							(this.r = Math.min(100, parseInt(r[1], 10)) / 100),
							(this.g = Math.min(100, parseInt(r[2], 10)) / 100),
							(this.b = Math.min(100, parseInt(r[3], 10)) / 100),
							t(r[5]),
							this
						);
					break;
				case 'hsl':
				case 'hsla':
					if (
						(r =
							/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
								a
							))
					) {
						var s = parseFloat(r[1]) / 360,
							o = parseInt(r[2], 10) / 100,
							u = parseInt(r[3], 10) / 100;
						return t(r[5]), this.setHSL(s, o, u);
					}
					break;
			}
		} else if ((n = /^\#([A-Fa-f0-9]+)$/.exec(e))) {
			var l = n[1],
				f = l.length;
			if (f === 3)
				return (
					(this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255),
					(this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255),
					(this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255),
					this
				);
			if (f === 6)
				return (
					(this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255),
					(this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255),
					(this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255),
					this
				);
		}
		if (e && e.length > 0) {
			var l = Zp[e];
			l !== void 0 ? this.setHex(l) : console.warn('THREE.Color: Unknown color ' + e);
		}
		return this;
	},
	clone: function () {
		return new this.constructor(this.r, this.g, this.b);
	},
	copy: function (e) {
		return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
	},
	copyGammaToLinear: function (e, t) {
		return (
			t === void 0 && (t = 2),
			(this.r = Math.pow(e.r, t)),
			(this.g = Math.pow(e.g, t)),
			(this.b = Math.pow(e.b, t)),
			this
		);
	},
	copyLinearToGamma: function (e, t) {
		t === void 0 && (t = 2);
		var n = t > 0 ? 1 / t : 1;
		return (
			(this.r = Math.pow(e.r, n)), (this.g = Math.pow(e.g, n)), (this.b = Math.pow(e.b, n)), this
		);
	},
	convertGammaToLinear: function (e) {
		return this.copyGammaToLinear(this, e), this;
	},
	convertLinearToGamma: function (e) {
		return this.copyLinearToGamma(this, e), this;
	},
	copySRGBToLinear: function (e) {
		return (this.r = eu(e.r)), (this.g = eu(e.g)), (this.b = eu(e.b)), this;
	},
	copyLinearToSRGB: function (e) {
		return (this.r = tu(e.r)), (this.g = tu(e.g)), (this.b = tu(e.b)), this;
	},
	convertSRGBToLinear: function () {
		return this.copySRGBToLinear(this), this;
	},
	convertLinearToSRGB: function () {
		return this.copyLinearToSRGB(this), this;
	},
	getHex: function () {
		return ((this.r * 255) << 16) ^ ((this.g * 255) << 8) ^ ((this.b * 255) << 0);
	},
	getHexString: function () {
		return ('000000' + this.getHex().toString(16)).slice(-6);
	},
	getHSL: function (e) {
		e === void 0 &&
			(console.warn('THREE.Color: .getHSL() target is now required'), (e = { h: 0, s: 0, l: 0 }));
		var t = this.r,
			n = this.g,
			r = this.b,
			i = Math.max(t, n, r),
			a = Math.min(t, n, r),
			s,
			o,
			u = (a + i) / 2;
		if (a === i) (s = 0), (o = 0);
		else {
			var l = i - a;
			switch (((o = u <= 0.5 ? l / (i + a) : l / (2 - i - a)), i)) {
				case t:
					s = (n - r) / l + (n < r ? 6 : 0);
					break;
				case n:
					s = (r - t) / l + 2;
					break;
				case r:
					s = (t - n) / l + 4;
					break;
			}
			s /= 6;
		}
		return (e.h = s), (e.s = o), (e.l = u), e;
	},
	getStyle: function () {
		return (
			'rgb(' + ((this.r * 255) | 0) + ',' + ((this.g * 255) | 0) + ',' + ((this.b * 255) | 0) + ')'
		);
	},
	offsetHSL: function (e, t, n) {
		return (
			this.getHSL(mn), (mn.h += e), (mn.s += t), (mn.l += n), this.setHSL(mn.h, mn.s, mn.l), this
		);
	},
	add: function (e) {
		return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
	},
	addColors: function (e, t) {
		return (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this;
	},
	addScalar: function (e) {
		return (this.r += e), (this.g += e), (this.b += e), this;
	},
	sub: function (e) {
		return (
			(this.r = Math.max(0, this.r - e.r)),
			(this.g = Math.max(0, this.g - e.g)),
			(this.b = Math.max(0, this.b - e.b)),
			this
		);
	},
	multiply: function (e) {
		return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
	},
	multiplyScalar: function (e) {
		return (this.r *= e), (this.g *= e), (this.b *= e), this;
	},
	lerp: function (e, t) {
		return (
			(this.r += (e.r - this.r) * t),
			(this.g += (e.g - this.g) * t),
			(this.b += (e.b - this.b) * t),
			this
		);
	},
	lerpHSL: function (e, t) {
		this.getHSL(mn), e.getHSL(os);
		var n = Ue.lerp(mn.h, os.h, t),
			r = Ue.lerp(mn.s, os.s, t),
			i = Ue.lerp(mn.l, os.l, t);
		return this.setHSL(n, r, i), this;
	},
	equals: function (e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	},
	fromArray: function (e, t) {
		return t === void 0 && (t = 0), (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
	},
	toArray: function (e, t) {
		return (
			e === void 0 && (e = []),
			t === void 0 && (t = 0),
			(e[t] = this.r),
			(e[t + 1] = this.g),
			(e[t + 2] = this.b),
			e
		);
	},
	toJSON: function () {
		return this.getHex();
	}
});
function Xs(e, t, n, r, i, a) {
	(this.a = e),
		(this.b = t),
		(this.c = n),
		(this.normal = r && r.isVector3 ? r : new R()),
		(this.vertexNormals = Array.isArray(r) ? r : []),
		(this.color = i && i.isColor ? i : new he()),
		(this.vertexColors = Array.isArray(i) ? i : []),
		(this.materialIndex = a !== void 0 ? a : 0);
}
Object.assign(Xs.prototype, {
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		(this.a = e.a),
			(this.b = e.b),
			(this.c = e.c),
			this.normal.copy(e.normal),
			this.color.copy(e.color),
			(this.materialIndex = e.materialIndex);
		for (var t = 0, n = e.vertexNormals.length; t < n; t++)
			this.vertexNormals[t] = e.vertexNormals[t].clone();
		for (var t = 0, n = e.vertexColors.length; t < n; t++)
			this.vertexColors[t] = e.vertexColors[t].clone();
		return this;
	}
});
var Qp = 0;
function De() {
	Object.defineProperty(this, 'id', { value: Qp++ }),
		(this.uuid = Ue.generateUUID()),
		(this.name = ''),
		(this.type = 'Material'),
		(this.fog = !0),
		(this.lights = !0),
		(this.blending = aa),
		(this.side = Qa),
		(this.flatShading = !1),
		(this.vertexTangents = !1),
		(this.vertexColors = qc),
		(this.opacity = 1),
		(this.transparent = !1),
		(this.blendSrc = jc),
		(this.blendDst = Kc),
		(this.blendEquation = gi),
		(this.blendSrcAlpha = null),
		(this.blendDstAlpha = null),
		(this.blendEquationAlpha = null),
		(this.depthFunc = Au),
		(this.depthTest = !0),
		(this.depthWrite = !0),
		(this.stencilWriteMask = 255),
		(this.stencilFunc = Gp),
		(this.stencilRef = 0),
		(this.stencilFuncMask = 255),
		(this.stencilFail = Wo),
		(this.stencilZFail = Wo),
		(this.stencilZPass = Wo),
		(this.stencilWrite = !1),
		(this.clippingPlanes = null),
		(this.clipIntersection = !1),
		(this.clipShadows = !1),
		(this.shadowSide = null),
		(this.colorWrite = !0),
		(this.precision = null),
		(this.polygonOffset = !1),
		(this.polygonOffsetFactor = 0),
		(this.polygonOffsetUnits = 0),
		(this.dithering = !1),
		(this.alphaTest = 0),
		(this.premultipliedAlpha = !1),
		(this.visible = !0),
		(this.toneMapped = !0),
		(this.userData = {}),
		(this.needsUpdate = !0);
}
De.prototype = Object.assign(Object.create(Vn.prototype), {
	constructor: De,
	isMaterial: !0,
	onBeforeCompile: function () {},
	setValues: function (e) {
		if (e !== void 0)
			for (var t in e) {
				var n = e[t];
				if (n === void 0) {
					console.warn("THREE.Material: '" + t + "' parameter is undefined.");
					continue;
				}
				if (t === 'shading') {
					console.warn(
						'THREE.' +
							this.type +
							': .shading has been removed. Use the boolean .flatShading instead.'
					),
						(this.flatShading = n === Wc);
					continue;
				}
				var r = this[t];
				if (r === void 0) {
					console.warn('THREE.' + this.type + ": '" + t + "' is not a property of this material.");
					continue;
				}
				r && r.isColor
					? r.set(n)
					: r && r.isVector3 && n && n.isVector3
						? r.copy(n)
						: (this[t] = n);
			}
	},
	toJSON: function (e) {
		var t = e === void 0 || typeof e == 'string';
		t && (e = { textures: {}, images: {} });
		var n = { metadata: { version: 4.5, type: 'Material', generator: 'Material.toJSON' } };
		(n.uuid = this.uuid),
			(n.type = this.type),
			this.name !== '' && (n.name = this.name),
			this.color && this.color.isColor && (n.color = this.color.getHex()),
			this.roughness !== void 0 && (n.roughness = this.roughness),
			this.metalness !== void 0 && (n.metalness = this.metalness),
			this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
			this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
			this.emissiveIntensity &&
				this.emissiveIntensity !== 1 &&
				(n.emissiveIntensity = this.emissiveIntensity),
			this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
			this.shininess !== void 0 && (n.shininess = this.shininess),
			this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
			this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
			this.clearcoatNormalMap &&
				this.clearcoatNormalMap.isTexture &&
				((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
				(n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
			this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
			this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
			this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
			this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid),
			this.aoMap &&
				this.aoMap.isTexture &&
				((n.aoMap = this.aoMap.toJSON(e).uuid), (n.aoMapIntensity = this.aoMapIntensity)),
			this.bumpMap &&
				this.bumpMap.isTexture &&
				((n.bumpMap = this.bumpMap.toJSON(e).uuid), (n.bumpScale = this.bumpScale)),
			this.normalMap &&
				this.normalMap.isTexture &&
				((n.normalMap = this.normalMap.toJSON(e).uuid),
				(n.normalMapType = this.normalMapType),
				(n.normalScale = this.normalScale.toArray())),
			this.displacementMap &&
				this.displacementMap.isTexture &&
				((n.displacementMap = this.displacementMap.toJSON(e).uuid),
				(n.displacementScale = this.displacementScale),
				(n.displacementBias = this.displacementBias)),
			this.roughnessMap &&
				this.roughnessMap.isTexture &&
				(n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
			this.metalnessMap &&
				this.metalnessMap.isTexture &&
				(n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
			this.emissiveMap &&
				this.emissiveMap.isTexture &&
				(n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
			this.specularMap &&
				this.specularMap.isTexture &&
				(n.specularMap = this.specularMap.toJSON(e).uuid),
			this.envMap &&
				this.envMap.isTexture &&
				((n.envMap = this.envMap.toJSON(e).uuid),
				(n.reflectivity = this.reflectivity),
				(n.refractionRatio = this.refractionRatio),
				this.combine !== void 0 && (n.combine = this.combine),
				this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity)),
			this.gradientMap &&
				this.gradientMap.isTexture &&
				(n.gradientMap = this.gradientMap.toJSON(e).uuid),
			this.size !== void 0 && (n.size = this.size),
			this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
			this.blending !== aa && (n.blending = this.blending),
			this.flatShading === !0 && (n.flatShading = this.flatShading),
			this.side !== Qa && (n.side = this.side),
			this.vertexColors !== qc && (n.vertexColors = this.vertexColors),
			this.opacity < 1 && (n.opacity = this.opacity),
			this.transparent === !0 && (n.transparent = this.transparent),
			(n.depthFunc = this.depthFunc),
			(n.depthTest = this.depthTest),
			(n.depthWrite = this.depthWrite),
			(n.stencilWrite = this.stencilWrite),
			(n.stencilWriteMask = this.stencilWriteMask),
			(n.stencilFunc = this.stencilFunc),
			(n.stencilRef = this.stencilRef),
			(n.stencilFuncMask = this.stencilFuncMask),
			(n.stencilFail = this.stencilFail),
			(n.stencilZFail = this.stencilZFail),
			(n.stencilZPass = this.stencilZPass),
			this.rotation && this.rotation !== 0 && (n.rotation = this.rotation),
			this.polygonOffset === !0 && (n.polygonOffset = !0),
			this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
			this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
			this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth),
			this.dashSize !== void 0 && (n.dashSize = this.dashSize),
			this.gapSize !== void 0 && (n.gapSize = this.gapSize),
			this.scale !== void 0 && (n.scale = this.scale),
			this.dithering === !0 && (n.dithering = !0),
			this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
			this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha),
			this.wireframe === !0 && (n.wireframe = this.wireframe),
			this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
			this.wireframeLinecap !== 'round' && (n.wireframeLinecap = this.wireframeLinecap),
			this.wireframeLinejoin !== 'round' && (n.wireframeLinejoin = this.wireframeLinejoin),
			this.morphTargets === !0 && (n.morphTargets = !0),
			this.morphNormals === !0 && (n.morphNormals = !0),
			this.skinning === !0 && (n.skinning = !0),
			this.visible === !1 && (n.visible = !1),
			this.toneMapped === !1 && (n.toneMapped = !1),
			JSON.stringify(this.userData) !== '{}' && (n.userData = this.userData);
		function r(s) {
			var o = [];
			for (var u in s) {
				var l = s[u];
				delete l.metadata, o.push(l);
			}
			return o;
		}
		if (t) {
			var i = r(e.textures),
				a = r(e.images);
			i.length > 0 && (n.textures = i), a.length > 0 && (n.images = a);
		}
		return n;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		(this.name = e.name),
			(this.fog = e.fog),
			(this.lights = e.lights),
			(this.blending = e.blending),
			(this.side = e.side),
			(this.flatShading = e.flatShading),
			(this.vertexColors = e.vertexColors),
			(this.opacity = e.opacity),
			(this.transparent = e.transparent),
			(this.blendSrc = e.blendSrc),
			(this.blendDst = e.blendDst),
			(this.blendEquation = e.blendEquation),
			(this.blendSrcAlpha = e.blendSrcAlpha),
			(this.blendDstAlpha = e.blendDstAlpha),
			(this.blendEquationAlpha = e.blendEquationAlpha),
			(this.depthFunc = e.depthFunc),
			(this.depthTest = e.depthTest),
			(this.depthWrite = e.depthWrite),
			(this.stencilWrite = e.stencilWrite),
			(this.stencilWriteMask = e.stencilWriteMask),
			(this.stencilFunc = e.stencilFunc),
			(this.stencilRef = e.stencilRef),
			(this.stencilFuncMask = e.stencilFuncMask),
			(this.stencilFail = e.stencilFail),
			(this.stencilZFail = e.stencilZFail),
			(this.stencilZPass = e.stencilZPass),
			(this.colorWrite = e.colorWrite),
			(this.precision = e.precision),
			(this.polygonOffset = e.polygonOffset),
			(this.polygonOffsetFactor = e.polygonOffsetFactor),
			(this.polygonOffsetUnits = e.polygonOffsetUnits),
			(this.dithering = e.dithering),
			(this.alphaTest = e.alphaTest),
			(this.premultipliedAlpha = e.premultipliedAlpha),
			(this.visible = e.visible),
			(this.toneMapped = e.toneMapped),
			(this.userData = JSON.parse(JSON.stringify(e.userData))),
			(this.clipShadows = e.clipShadows),
			(this.clipIntersection = e.clipIntersection);
		var t = e.clippingPlanes,
			n = null;
		if (t !== null) {
			var r = t.length;
			n = new Array(r);
			for (var i = 0; i !== r; ++i) n[i] = t[i].clone();
		}
		return (this.clippingPlanes = n), (this.shadowSide = e.shadowSide), this;
	},
	dispose: function () {
		this.dispatchEvent({ type: 'dispose' });
	}
});
function hn(e) {
	De.call(this),
		(this.type = 'MeshBasicMaterial'),
		(this.color = new he(16777215)),
		(this.map = null),
		(this.lightMap = null),
		(this.lightMapIntensity = 1),
		(this.aoMap = null),
		(this.aoMapIntensity = 1),
		(this.specularMap = null),
		(this.alphaMap = null),
		(this.envMap = null),
		(this.combine = Po),
		(this.reflectivity = 1),
		(this.refractionRatio = 0.98),
		(this.wireframe = !1),
		(this.wireframeLinewidth = 1),
		(this.wireframeLinecap = 'round'),
		(this.wireframeLinejoin = 'round'),
		(this.skinning = !1),
		(this.morphTargets = !1),
		(this.lights = !1),
		this.setValues(e);
}
hn.prototype = Object.create(De.prototype);
hn.prototype.constructor = hn;
hn.prototype.isMeshBasicMaterial = !0;
hn.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		this.color.copy(e.color),
		(this.map = e.map),
		(this.lightMap = e.lightMap),
		(this.lightMapIntensity = e.lightMapIntensity),
		(this.aoMap = e.aoMap),
		(this.aoMapIntensity = e.aoMapIntensity),
		(this.specularMap = e.specularMap),
		(this.alphaMap = e.alphaMap),
		(this.envMap = e.envMap),
		(this.combine = e.combine),
		(this.reflectivity = e.reflectivity),
		(this.refractionRatio = e.refractionRatio),
		(this.wireframe = e.wireframe),
		(this.wireframeLinewidth = e.wireframeLinewidth),
		(this.wireframeLinecap = e.wireframeLinecap),
		(this.wireframeLinejoin = e.wireframeLinejoin),
		(this.skinning = e.skinning),
		(this.morphTargets = e.morphTargets),
		this
	);
};
function Ie(e, t, n) {
	if (Array.isArray(e))
		throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.');
	(this.name = ''),
		(this.array = e),
		(this.itemSize = t),
		(this.count = e !== void 0 ? e.length / t : 0),
		(this.normalized = n === !0),
		(this.dynamic = !1),
		(this.updateRange = { offset: 0, count: -1 }),
		(this.version = 0);
}
Object.defineProperty(Ie.prototype, 'needsUpdate', {
	set: function (e) {
		e === !0 && this.version++;
	}
});
Object.assign(Ie.prototype, {
	isBufferAttribute: !0,
	onUploadCallback: function () {},
	setDynamic: function (e) {
		return (this.dynamic = e), this;
	},
	copy: function (e) {
		return (
			(this.name = e.name),
			(this.array = new e.array.constructor(e.array)),
			(this.itemSize = e.itemSize),
			(this.count = e.count),
			(this.normalized = e.normalized),
			(this.dynamic = e.dynamic),
			this
		);
	},
	copyAt: function (e, t, n) {
		(e *= this.itemSize), (n *= t.itemSize);
		for (var r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	},
	copyArray: function (e) {
		return this.array.set(e), this;
	},
	copyColorsArray: function (e) {
		for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
			var a = e[r];
			a === void 0 &&
				(console.warn('THREE.BufferAttribute.copyColorsArray(): color is undefined', r),
				(a = new he())),
				(t[n++] = a.r),
				(t[n++] = a.g),
				(t[n++] = a.b);
		}
		return this;
	},
	copyVector2sArray: function (e) {
		for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
			var a = e[r];
			a === void 0 &&
				(console.warn('THREE.BufferAttribute.copyVector2sArray(): vector is undefined', r),
				(a = new W())),
				(t[n++] = a.x),
				(t[n++] = a.y);
		}
		return this;
	},
	copyVector3sArray: function (e) {
		for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
			var a = e[r];
			a === void 0 &&
				(console.warn('THREE.BufferAttribute.copyVector3sArray(): vector is undefined', r),
				(a = new R())),
				(t[n++] = a.x),
				(t[n++] = a.y),
				(t[n++] = a.z);
		}
		return this;
	},
	copyVector4sArray: function (e) {
		for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
			var a = e[r];
			a === void 0 &&
				(console.warn('THREE.BufferAttribute.copyVector4sArray(): vector is undefined', r),
				(a = new rt())),
				(t[n++] = a.x),
				(t[n++] = a.y),
				(t[n++] = a.z),
				(t[n++] = a.w);
		}
		return this;
	},
	set: function (e, t) {
		return t === void 0 && (t = 0), this.array.set(e, t), this;
	},
	getX: function (e) {
		return this.array[e * this.itemSize];
	},
	setX: function (e, t) {
		return (this.array[e * this.itemSize] = t), this;
	},
	getY: function (e) {
		return this.array[e * this.itemSize + 1];
	},
	setY: function (e, t) {
		return (this.array[e * this.itemSize + 1] = t), this;
	},
	getZ: function (e) {
		return this.array[e * this.itemSize + 2];
	},
	setZ: function (e, t) {
		return (this.array[e * this.itemSize + 2] = t), this;
	},
	getW: function (e) {
		return this.array[e * this.itemSize + 3];
	},
	setW: function (e, t) {
		return (this.array[e * this.itemSize + 3] = t), this;
	},
	setXY: function (e, t, n) {
		return (e *= this.itemSize), (this.array[e + 0] = t), (this.array[e + 1] = n), this;
	},
	setXYZ: function (e, t, n, r) {
		return (
			(e *= this.itemSize),
			(this.array[e + 0] = t),
			(this.array[e + 1] = n),
			(this.array[e + 2] = r),
			this
		);
	},
	setXYZW: function (e, t, n, r, i) {
		return (
			(e *= this.itemSize),
			(this.array[e + 0] = t),
			(this.array[e + 1] = n),
			(this.array[e + 2] = r),
			(this.array[e + 3] = i),
			this
		);
	},
	onUpload: function (e) {
		return (this.onUploadCallback = e), this;
	},
	clone: function () {
		return new this.constructor(this.array, this.itemSize).copy(this);
	},
	toJSON: function () {
		return {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.prototype.slice.call(this.array),
			normalized: this.normalized
		};
	}
});
function Ru(e, t, n) {
	Ie.call(this, new Int8Array(e), t, n);
}
Ru.prototype = Object.create(Ie.prototype);
Ru.prototype.constructor = Ru;
function Cu(e, t, n) {
	Ie.call(this, new Uint8Array(e), t, n);
}
Cu.prototype = Object.create(Ie.prototype);
Cu.prototype.constructor = Cu;
function Pu(e, t, n) {
	Ie.call(this, new Uint8ClampedArray(e), t, n);
}
Pu.prototype = Object.create(Ie.prototype);
Pu.prototype.constructor = Pu;
function Iu(e, t, n) {
	Ie.call(this, new Int16Array(e), t, n);
}
Iu.prototype = Object.create(Ie.prototype);
Iu.prototype.constructor = Iu;
function pa(e, t, n) {
	Ie.call(this, new Uint16Array(e), t, n);
}
pa.prototype = Object.create(Ie.prototype);
pa.prototype.constructor = pa;
function Du(e, t, n) {
	Ie.call(this, new Int32Array(e), t, n);
}
Du.prototype = Object.create(Ie.prototype);
Du.prototype.constructor = Du;
function va(e, t, n) {
	Ie.call(this, new Uint32Array(e), t, n);
}
va.prototype = Object.create(Ie.prototype);
va.prototype.constructor = va;
function re(e, t, n) {
	Ie.call(this, new Float32Array(e), t, n);
}
re.prototype = Object.create(Ie.prototype);
re.prototype.constructor = re;
function Nu(e, t, n) {
	Ie.call(this, new Float64Array(e), t, n);
}
Nu.prototype = Object.create(Ie.prototype);
Nu.prototype.constructor = Nu;
function eh() {
	(this.vertices = []),
		(this.normals = []),
		(this.colors = []),
		(this.uvs = []),
		(this.uvs2 = []),
		(this.groups = []),
		(this.morphTargets = {}),
		(this.skinWeights = []),
		(this.skinIndices = []),
		(this.boundingBox = null),
		(this.boundingSphere = null),
		(this.verticesNeedUpdate = !1),
		(this.normalsNeedUpdate = !1),
		(this.colorsNeedUpdate = !1),
		(this.uvsNeedUpdate = !1),
		(this.groupsNeedUpdate = !1);
}
Object.assign(eh.prototype, {
	computeGroups: function (e) {
		for (var t, n = [], r = void 0, i = e.faces, a = 0; a < i.length; a++) {
			var s = i[a];
			s.materialIndex !== r &&
				((r = s.materialIndex),
				t !== void 0 && ((t.count = a * 3 - t.start), n.push(t)),
				(t = { start: a * 3, materialIndex: r }));
		}
		t !== void 0 && ((t.count = a * 3 - t.start), n.push(t)), (this.groups = n);
	},
	fromGeometry: function (e) {
		var t = e.faces,
			n = e.vertices,
			r = e.faceVertexUvs,
			i = r[0] && r[0].length > 0,
			a = r[1] && r[1].length > 0,
			s = e.morphTargets,
			o = s.length,
			u;
		if (o > 0) {
			u = [];
			for (var l = 0; l < o; l++) u[l] = { name: s[l].name, data: [] };
			this.morphTargets.position = u;
		}
		var f = e.morphNormals,
			c = f.length,
			h;
		if (c > 0) {
			h = [];
			for (var l = 0; l < c; l++) h[l] = { name: f[l].name, data: [] };
			this.morphTargets.normal = h;
		}
		var p = e.skinIndices,
			d = e.skinWeights,
			m = p.length === n.length,
			v = d.length === n.length;
		n.length > 0 &&
			t.length === 0 &&
			console.error('THREE.DirectGeometry: Faceless geometries are not supported.');
		for (var l = 0; l < t.length; l++) {
			var g = t[l];
			this.vertices.push(n[g.a], n[g.b], n[g.c]);
			var x = g.vertexNormals;
			if (x.length === 3) this.normals.push(x[0], x[1], x[2]);
			else {
				var M = g.normal;
				this.normals.push(M, M, M);
			}
			var _ = g.vertexColors;
			if (_.length === 3) this.colors.push(_[0], _[1], _[2]);
			else {
				var y = g.color;
				this.colors.push(y, y, y);
			}
			if (i === !0) {
				var L = r[0][l];
				L !== void 0
					? this.uvs.push(L[0], L[1], L[2])
					: (console.warn('THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ', l),
						this.uvs.push(new W(), new W(), new W()));
			}
			if (a === !0) {
				var L = r[1][l];
				L !== void 0
					? this.uvs2.push(L[0], L[1], L[2])
					: (console.warn('THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ', l),
						this.uvs2.push(new W(), new W(), new W()));
			}
			for (var C = 0; C < o; C++) {
				var T = s[C].vertices;
				u[C].data.push(T[g.a], T[g.b], T[g.c]);
			}
			for (var C = 0; C < c; C++) {
				var P = f[C].vertexNormals[l];
				h[C].data.push(P.a, P.b, P.c);
			}
			m && this.skinIndices.push(p[g.a], p[g.b], p[g.c]),
				v && this.skinWeights.push(d[g.a], d[g.b], d[g.c]);
		}
		return (
			this.computeGroups(e),
			(this.verticesNeedUpdate = e.verticesNeedUpdate),
			(this.normalsNeedUpdate = e.normalsNeedUpdate),
			(this.colorsNeedUpdate = e.colorsNeedUpdate),
			(this.uvsNeedUpdate = e.uvsNeedUpdate),
			(this.groupsNeedUpdate = e.groupsNeedUpdate),
			e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()),
			e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
			this
		);
	}
});
function th(e) {
	if (e.length === 0) return -1 / 0;
	for (var t = e[0], n = 1, r = e.length; n < r; ++n) e[n] > t && (t = e[n]);
	return t;
}
var $p = 1,
	Cn = new He(),
	nu = new se(),
	us = new R(),
	Pr = new ur(),
	ru = new ur(),
	gn = new R();
function ae() {
	Object.defineProperty(this, 'id', { value: ($p += 2) }),
		(this.uuid = Ue.generateUUID()),
		(this.name = ''),
		(this.type = 'BufferGeometry'),
		(this.index = null),
		(this.attributes = {}),
		(this.morphAttributes = {}),
		(this.groups = []),
		(this.boundingBox = null),
		(this.boundingSphere = null),
		(this.drawRange = { start: 0, count: 1 / 0 }),
		(this.userData = {});
}
ae.prototype = Object.assign(Object.create(Vn.prototype), {
	constructor: ae,
	isBufferGeometry: !0,
	getIndex: function () {
		return this.index;
	},
	setIndex: function (e) {
		Array.isArray(e) ? (this.index = new (th(e) > 65535 ? va : pa)(e, 1)) : (this.index = e);
	},
	addAttribute: function (e, t) {
		return !(t && t.isBufferAttribute) && !(t && t.isInterleavedBufferAttribute)
			? (console.warn('THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).'),
				this.addAttribute(e, new Ie(arguments[1], arguments[2])))
			: e === 'index'
				? (console.warn('THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.'),
					this.setIndex(t),
					this)
				: this.setAttribute(e, t);
	},
	getAttribute: function (e) {
		return this.attributes[e];
	},
	setAttribute: function (e, t) {
		return (this.attributes[e] = t), this;
	},
	removeAttribute: function (e) {
		return delete this.attributes[e], this;
	},
	addGroup: function (e, t, n) {
		this.groups.push({ start: e, count: t, materialIndex: n !== void 0 ? n : 0 });
	},
	clearGroups: function () {
		this.groups = [];
	},
	setDrawRange: function (e, t) {
		(this.drawRange.start = e), (this.drawRange.count = t);
	},
	applyMatrix: function (e) {
		var t = this.attributes.position;
		t !== void 0 && (e.applyToBufferAttribute(t), (t.needsUpdate = !0));
		var n = this.attributes.normal;
		if (n !== void 0) {
			var r = new Et().getNormalMatrix(e);
			r.applyToBufferAttribute(n), (n.needsUpdate = !0);
		}
		var i = this.attributes.tangent;
		if (i !== void 0) {
			var r = new Et().getNormalMatrix(e);
			r.applyToBufferAttribute(i), (i.needsUpdate = !0);
		}
		return (
			this.boundingBox !== null && this.computeBoundingBox(),
			this.boundingSphere !== null && this.computeBoundingSphere(),
			this
		);
	},
	rotateX: function (e) {
		return Cn.makeRotationX(e), this.applyMatrix(Cn), this;
	},
	rotateY: function (e) {
		return Cn.makeRotationY(e), this.applyMatrix(Cn), this;
	},
	rotateZ: function (e) {
		return Cn.makeRotationZ(e), this.applyMatrix(Cn), this;
	},
	translate: function (e, t, n) {
		return Cn.makeTranslation(e, t, n), this.applyMatrix(Cn), this;
	},
	scale: function (e, t, n) {
		return Cn.makeScale(e, t, n), this.applyMatrix(Cn), this;
	},
	lookAt: function (e) {
		return nu.lookAt(e), nu.updateMatrix(), this.applyMatrix(nu.matrix), this;
	},
	center: function () {
		return (
			this.computeBoundingBox(),
			this.boundingBox.getCenter(us).negate(),
			this.translate(us.x, us.y, us.z),
			this
		);
	},
	setFromObject: function (e) {
		var t = e.geometry;
		if (e.isPoints || e.isLine) {
			var n = new re(t.vertices.length * 3, 3),
				r = new re(t.colors.length * 3, 3);
			if (
				(this.addAttribute('position', n.copyVector3sArray(t.vertices)),
				this.addAttribute('color', r.copyColorsArray(t.colors)),
				t.lineDistances && t.lineDistances.length === t.vertices.length)
			) {
				var i = new re(t.lineDistances.length, 1);
				this.addAttribute('lineDistance', i.copyArray(t.lineDistances));
			}
			t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()),
				t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone());
		} else e.isMesh && t && t.isGeometry && this.fromGeometry(t);
		return this;
	},
	setFromPoints: function (e) {
		for (var t = [], n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			t.push(i.x, i.y, i.z || 0);
		}
		return this.addAttribute('position', new re(t, 3)), this;
	},
	updateFromObject: function (e) {
		var t = e.geometry;
		if (e.isMesh) {
			var n = t.__directGeometry;
			if (
				(t.elementsNeedUpdate === !0 && ((n = void 0), (t.elementsNeedUpdate = !1)), n === void 0)
			)
				return this.fromGeometry(t);
			(n.verticesNeedUpdate = t.verticesNeedUpdate),
				(n.normalsNeedUpdate = t.normalsNeedUpdate),
				(n.colorsNeedUpdate = t.colorsNeedUpdate),
				(n.uvsNeedUpdate = t.uvsNeedUpdate),
				(n.groupsNeedUpdate = t.groupsNeedUpdate),
				(t.verticesNeedUpdate = !1),
				(t.normalsNeedUpdate = !1),
				(t.colorsNeedUpdate = !1),
				(t.uvsNeedUpdate = !1),
				(t.groupsNeedUpdate = !1),
				(t = n);
		}
		var r;
		return (
			t.verticesNeedUpdate === !0 &&
				((r = this.attributes.position),
				r !== void 0 && (r.copyVector3sArray(t.vertices), (r.needsUpdate = !0)),
				(t.verticesNeedUpdate = !1)),
			t.normalsNeedUpdate === !0 &&
				((r = this.attributes.normal),
				r !== void 0 && (r.copyVector3sArray(t.normals), (r.needsUpdate = !0)),
				(t.normalsNeedUpdate = !1)),
			t.colorsNeedUpdate === !0 &&
				((r = this.attributes.color),
				r !== void 0 && (r.copyColorsArray(t.colors), (r.needsUpdate = !0)),
				(t.colorsNeedUpdate = !1)),
			t.uvsNeedUpdate &&
				((r = this.attributes.uv),
				r !== void 0 && (r.copyVector2sArray(t.uvs), (r.needsUpdate = !0)),
				(t.uvsNeedUpdate = !1)),
			t.lineDistancesNeedUpdate &&
				((r = this.attributes.lineDistance),
				r !== void 0 && (r.copyArray(t.lineDistances), (r.needsUpdate = !0)),
				(t.lineDistancesNeedUpdate = !1)),
			t.groupsNeedUpdate &&
				(t.computeGroups(e.geometry), (this.groups = t.groups), (t.groupsNeedUpdate = !1)),
			this
		);
	},
	fromGeometry: function (e) {
		return (
			(e.__directGeometry = new eh().fromGeometry(e)), this.fromDirectGeometry(e.__directGeometry)
		);
	},
	fromDirectGeometry: function (e) {
		var t = new Float32Array(e.vertices.length * 3);
		if (
			(this.addAttribute('position', new Ie(t, 3).copyVector3sArray(e.vertices)),
			e.normals.length > 0)
		) {
			var n = new Float32Array(e.normals.length * 3);
			this.addAttribute('normal', new Ie(n, 3).copyVector3sArray(e.normals));
		}
		if (e.colors.length > 0) {
			var r = new Float32Array(e.colors.length * 3);
			this.addAttribute('color', new Ie(r, 3).copyColorsArray(e.colors));
		}
		if (e.uvs.length > 0) {
			var i = new Float32Array(e.uvs.length * 2);
			this.addAttribute('uv', new Ie(i, 2).copyVector2sArray(e.uvs));
		}
		if (e.uvs2.length > 0) {
			var a = new Float32Array(e.uvs2.length * 2);
			this.addAttribute('uv2', new Ie(a, 2).copyVector2sArray(e.uvs2));
		}
		this.groups = e.groups;
		for (var s in e.morphTargets) {
			for (var o = [], u = e.morphTargets[s], l = 0, f = u.length; l < f; l++) {
				var c = u[l],
					h = new re(c.data.length * 3, 3);
				(h.name = c.name), o.push(h.copyVector3sArray(c.data));
			}
			this.morphAttributes[s] = o;
		}
		if (e.skinIndices.length > 0) {
			var p = new re(e.skinIndices.length * 4, 4);
			this.addAttribute('skinIndex', p.copyVector4sArray(e.skinIndices));
		}
		if (e.skinWeights.length > 0) {
			var d = new re(e.skinWeights.length * 4, 4);
			this.addAttribute('skinWeight', d.copyVector4sArray(e.skinWeights));
		}
		return (
			e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()),
			e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
			this
		);
	},
	computeBoundingBox: function () {
		this.boundingBox === null && (this.boundingBox = new ur());
		var e = this.attributes.position,
			t = this.morphAttributes.position;
		if (e !== void 0) {
			if ((this.boundingBox.setFromBufferAttribute(e), t))
				for (var n = 0, r = t.length; n < r; n++) {
					var i = t[n];
					Pr.setFromBufferAttribute(i),
						this.boundingBox.expandByPoint(Pr.min),
						this.boundingBox.expandByPoint(Pr.max);
				}
		} else this.boundingBox.makeEmpty();
		(isNaN(this.boundingBox.min.x) ||
			isNaN(this.boundingBox.min.y) ||
			isNaN(this.boundingBox.min.z)) &&
			console.error(
				'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
				this
			);
	},
	computeBoundingSphere: function () {
		this.boundingSphere === null && (this.boundingSphere = new Mr());
		var e = this.attributes.position,
			t = this.morphAttributes.position;
		if (e) {
			var n = this.boundingSphere.center;
			if ((Pr.setFromBufferAttribute(e), t))
				for (var r = 0, i = t.length; r < i; r++) {
					var a = t[r];
					ru.setFromBufferAttribute(a), Pr.expandByPoint(ru.min), Pr.expandByPoint(ru.max);
				}
			Pr.getCenter(n);
			for (var s = 0, r = 0, i = e.count; r < i; r++)
				gn.fromBufferAttribute(e, r), (s = Math.max(s, n.distanceToSquared(gn)));
			if (t)
				for (var r = 0, i = t.length; r < i; r++)
					for (var a = t[r], o = 0, u = a.count; o < u; o++)
						gn.fromBufferAttribute(a, o), (s = Math.max(s, n.distanceToSquared(gn)));
			(this.boundingSphere.radius = Math.sqrt(s)),
				isNaN(this.boundingSphere.radius) &&
					console.error(
						'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
						this
					);
		}
	},
	computeFaceNormals: function () {},
	computeVertexNormals: function () {
		var e = this.index,
			t = this.attributes;
		if (t.position) {
			var n = t.position.array;
			if (t.normal === void 0) this.addAttribute('normal', new Ie(new Float32Array(n.length), 3));
			else for (var r = t.normal.array, i = 0, a = r.length; i < a; i++) r[i] = 0;
			var s = t.normal.array,
				o,
				u,
				l,
				f = new R(),
				c = new R(),
				h = new R(),
				p = new R(),
				d = new R();
			if (e)
				for (var m = e.array, i = 0, a = e.count; i < a; i += 3)
					(o = m[i + 0] * 3),
						(u = m[i + 1] * 3),
						(l = m[i + 2] * 3),
						f.fromArray(n, o),
						c.fromArray(n, u),
						h.fromArray(n, l),
						p.subVectors(h, c),
						d.subVectors(f, c),
						p.cross(d),
						(s[o] += p.x),
						(s[o + 1] += p.y),
						(s[o + 2] += p.z),
						(s[u] += p.x),
						(s[u + 1] += p.y),
						(s[u + 2] += p.z),
						(s[l] += p.x),
						(s[l + 1] += p.y),
						(s[l + 2] += p.z);
			else
				for (var i = 0, a = n.length; i < a; i += 9)
					f.fromArray(n, i),
						c.fromArray(n, i + 3),
						h.fromArray(n, i + 6),
						p.subVectors(h, c),
						d.subVectors(f, c),
						p.cross(d),
						(s[i] = p.x),
						(s[i + 1] = p.y),
						(s[i + 2] = p.z),
						(s[i + 3] = p.x),
						(s[i + 4] = p.y),
						(s[i + 5] = p.z),
						(s[i + 6] = p.x),
						(s[i + 7] = p.y),
						(s[i + 8] = p.z);
			this.normalizeNormals(), (t.normal.needsUpdate = !0);
		}
	},
	merge: function (e, t) {
		if (!(e && e.isBufferGeometry)) {
			console.error(
				'THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.',
				e
			);
			return;
		}
		t === void 0 &&
			((t = 0),
			console.warn(
				'THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.'
			));
		var n = this.attributes;
		for (var r in n)
			if (e.attributes[r] !== void 0)
				for (
					var i = n[r],
						a = i.array,
						s = e.attributes[r],
						o = s.array,
						u = s.itemSize * t,
						l = Math.min(o.length, a.length - u),
						f = 0,
						c = u;
					f < l;
					f++, c++
				)
					a[c] = o[f];
		return this;
	},
	normalizeNormals: function () {
		for (var e = this.attributes.normal, t = 0, n = e.count; t < n; t++)
			(gn.x = e.getX(t)),
				(gn.y = e.getY(t)),
				(gn.z = e.getZ(t)),
				gn.normalize(),
				e.setXYZ(t, gn.x, gn.y, gn.z);
	},
	toNonIndexed: function () {
		function e(m, v) {
			for (
				var g = m.array,
					x = m.itemSize,
					M = new g.constructor(v.length * x),
					_ = 0,
					y = 0,
					L = 0,
					C = v.length;
				L < C;
				L++
			) {
				_ = v[L] * x;
				for (var T = 0; T < x; T++) M[y++] = g[_++];
			}
			return new Ie(M, x);
		}
		if (this.index === null)
			return (
				console.warn('THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.'), this
			);
		var t = new ae(),
			n = this.index.array,
			r = this.attributes;
		for (var i in r) {
			var a = r[i],
				s = e(a, n);
			t.addAttribute(i, s);
		}
		var o = this.morphAttributes;
		for (i in o) {
			for (var u = [], l = o[i], f = 0, c = l.length; f < c; f++) {
				var a = l[f],
					s = e(a, n);
				u.push(s);
			}
			t.morphAttributes[i] = u;
		}
		for (var h = this.groups, f = 0, p = h.length; f < p; f++) {
			var d = h[f];
			t.addGroup(d.start, d.count, d.materialIndex);
		}
		return t;
	},
	toJSON: function () {
		var e = {
			metadata: { version: 4.5, type: 'BufferGeometry', generator: 'BufferGeometry.toJSON' }
		};
		if (
			((e.uuid = this.uuid),
			(e.type = this.type),
			this.name !== '' && (e.name = this.name),
			Object.keys(this.userData).length > 0 && (e.userData = this.userData),
			this.parameters !== void 0)
		) {
			var t = this.parameters;
			for (var n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		var r = this.index;
		r !== null &&
			(e.data.index = {
				type: r.array.constructor.name,
				array: Array.prototype.slice.call(r.array)
			});
		var i = this.attributes;
		for (var n in i) {
			var a = i[n],
				s = a.toJSON();
			a.name !== '' && (s.name = a.name), (e.data.attributes[n] = s);
		}
		var o = {},
			u = !1;
		for (var n in this.morphAttributes) {
			for (var l = this.morphAttributes[n], f = [], c = 0, h = l.length; c < h; c++) {
				var a = l[c],
					s = a.toJSON();
				a.name !== '' && (s.name = a.name), f.push(s);
			}
			f.length > 0 && ((o[n] = f), (u = !0));
		}
		u && (e.data.morphAttributes = o);
		var p = this.groups;
		p.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(p)));
		var d = this.boundingSphere;
		return (
			d !== null && (e.data.boundingSphere = { center: d.center.toArray(), radius: d.radius }), e
		);
	},
	clone: function () {
		return new ae().copy(this);
	},
	copy: function (e) {
		var t, n, r;
		(this.index = null),
			(this.attributes = {}),
			(this.morphAttributes = {}),
			(this.groups = []),
			(this.boundingBox = null),
			(this.boundingSphere = null),
			(this.name = e.name);
		var i = e.index;
		i !== null && this.setIndex(i.clone());
		var a = e.attributes;
		for (t in a) {
			var s = a[t];
			this.addAttribute(t, s.clone());
		}
		var o = e.morphAttributes;
		for (t in o) {
			var u = [],
				l = o[t];
			for (n = 0, r = l.length; n < r; n++) u.push(l[n].clone());
			this.morphAttributes[t] = u;
		}
		var f = e.groups;
		for (n = 0, r = f.length; n < r; n++) {
			var c = f[n];
			this.addGroup(c.start, c.count, c.materialIndex);
		}
		var h = e.boundingBox;
		h !== null && (this.boundingBox = h.clone());
		var p = e.boundingSphere;
		return (
			p !== null && (this.boundingSphere = p.clone()),
			(this.drawRange.start = e.drawRange.start),
			(this.drawRange.count = e.drawRange.count),
			(this.userData = e.userData),
			this
		);
	},
	dispose: function () {
		this.dispatchEvent({ type: 'dispose' });
	}
});
var pf = new He(),
	Ir = new Ki(),
	iu = new Mr(),
	Dr = new R(),
	Nr = new R(),
	Or = new R(),
	vf = new R(),
	mf = new R(),
	gf = new R(),
	au = new R(),
	su = new R(),
	ou = new R(),
	xi = new W(),
	bi = new W(),
	yi = new W(),
	sa = new R(),
	ls = new R();
function wt(e, t) {
	se.call(this),
		(this.type = 'Mesh'),
		(this.geometry = e !== void 0 ? e : new ae()),
		(this.material = t !== void 0 ? t : new hn({ color: Math.random() * 16777215 })),
		(this.drawMode = Fl),
		this.updateMorphTargets();
}
wt.prototype = Object.assign(Object.create(se.prototype), {
	constructor: wt,
	isMesh: !0,
	setDrawMode: function (e) {
		this.drawMode = e;
	},
	copy: function (e) {
		return (
			se.prototype.copy.call(this, e),
			(this.drawMode = e.drawMode),
			e.morphTargetInfluences !== void 0 &&
				(this.morphTargetInfluences = e.morphTargetInfluences.slice()),
			e.morphTargetDictionary !== void 0 &&
				(this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
			this
		);
	},
	updateMorphTargets: function () {
		var e = this.geometry,
			t,
			n,
			r;
		if (e.isBufferGeometry) {
			var i = e.morphAttributes,
				a = Object.keys(i);
			if (a.length > 0) {
				var s = i[a[0]];
				if (s !== void 0)
					for (
						this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, n = s.length;
						t < n;
						t++
					)
						(r = s[t].name || String(t)),
							this.morphTargetInfluences.push(0),
							(this.morphTargetDictionary[r] = t);
			}
		} else {
			var o = e.morphTargets;
			o !== void 0 &&
				o.length > 0 &&
				console.error(
					'THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
				);
		}
	},
	raycast: function (e, t) {
		var n = this.geometry,
			r = this.material,
			i = this.matrixWorld;
		if (
			r !== void 0 &&
			(n.boundingSphere === null && n.computeBoundingSphere(),
			iu.copy(n.boundingSphere),
			iu.applyMatrix4(i),
			e.ray.intersectsSphere(iu) !== !1 &&
				(pf.getInverse(i),
				Ir.copy(e.ray).applyMatrix4(pf),
				!(n.boundingBox !== null && Ir.intersectsBox(n.boundingBox) === !1)))
		) {
			var a;
			if (n.isBufferGeometry) {
				var s,
					o,
					u,
					l = n.index,
					f = n.attributes.position,
					c = n.morphAttributes.position,
					h = n.attributes.uv,
					p = n.attributes.uv2,
					d = n.groups,
					m = n.drawRange,
					v,
					g,
					x,
					M,
					_,
					y,
					L,
					C;
				if (l !== null)
					if (Array.isArray(r))
						for (v = 0, x = d.length; v < x; v++)
							for (
								_ = d[v],
									y = r[_.materialIndex],
									L = Math.max(_.start, m.start),
									C = Math.min(_.start + _.count, m.start + m.count),
									g = L,
									M = C;
								g < M;
								g += 3
							)
								(s = l.getX(g)),
									(o = l.getX(g + 1)),
									(u = l.getX(g + 2)),
									(a = fs(this, y, e, Ir, f, c, h, p, s, o, u)),
									a &&
										((a.faceIndex = Math.floor(g / 3)),
										(a.face.materialIndex = _.materialIndex),
										t.push(a));
					else
						for (
							L = Math.max(0, m.start), C = Math.min(l.count, m.start + m.count), v = L, x = C;
							v < x;
							v += 3
						)
							(s = l.getX(v)),
								(o = l.getX(v + 1)),
								(u = l.getX(v + 2)),
								(a = fs(this, r, e, Ir, f, c, h, p, s, o, u)),
								a && ((a.faceIndex = Math.floor(v / 3)), t.push(a));
				else if (f !== void 0)
					if (Array.isArray(r))
						for (v = 0, x = d.length; v < x; v++)
							for (
								_ = d[v],
									y = r[_.materialIndex],
									L = Math.max(_.start, m.start),
									C = Math.min(_.start + _.count, m.start + m.count),
									g = L,
									M = C;
								g < M;
								g += 3
							)
								(s = g),
									(o = g + 1),
									(u = g + 2),
									(a = fs(this, y, e, Ir, f, c, h, p, s, o, u)),
									a &&
										((a.faceIndex = Math.floor(g / 3)),
										(a.face.materialIndex = _.materialIndex),
										t.push(a));
					else
						for (
							L = Math.max(0, m.start), C = Math.min(f.count, m.start + m.count), v = L, x = C;
							v < x;
							v += 3
						)
							(s = v),
								(o = v + 1),
								(u = v + 2),
								(a = fs(this, r, e, Ir, f, c, h, p, s, o, u)),
								a && ((a.faceIndex = Math.floor(v / 3)), t.push(a));
			} else if (n.isGeometry) {
				var T,
					P,
					k,
					I = Array.isArray(r),
					w = n.vertices,
					U = n.faces,
					N,
					D = n.faceVertexUvs[0];
				D.length > 0 && (N = D);
				for (var B = 0, q = U.length; B < q; B++) {
					var H = U[B],
						j = I ? r[H.materialIndex] : r;
					if (
						j !== void 0 &&
						((T = w[H.a]), (P = w[H.b]), (k = w[H.c]), (a = nh(this, j, e, Ir, T, P, k, sa)), a)
					) {
						if (N && N[B]) {
							var K = N[B];
							xi.copy(K[0]),
								bi.copy(K[1]),
								yi.copy(K[2]),
								(a.uv = Ct.getUV(sa, T, P, k, xi, bi, yi, new W()));
						}
						(a.face = H), (a.faceIndex = B), t.push(a);
					}
				}
			}
		}
	},
	clone: function () {
		return new this.constructor(this.geometry, this.material).copy(this);
	}
});
function nh(e, t, n, r, i, a, s, o) {
	var u;
	if (
		(t.side === Tt
			? (u = r.intersectTriangle(s, a, i, !0, o))
			: (u = r.intersectTriangle(i, a, s, t.side !== Co, o)),
		u === null)
	)
		return null;
	ls.copy(o), ls.applyMatrix4(e.matrixWorld);
	var l = n.ray.origin.distanceTo(ls);
	return l < n.near || l > n.far ? null : { distance: l, point: ls.clone(), object: e };
}
function fs(e, t, n, r, i, a, s, o, u, l, f) {
	Dr.fromBufferAttribute(i, u), Nr.fromBufferAttribute(i, l), Or.fromBufferAttribute(i, f);
	var c = e.morphTargetInfluences;
	if (t.morphTargets && a && c) {
		au.set(0, 0, 0), su.set(0, 0, 0), ou.set(0, 0, 0);
		for (var h = 0, p = a.length; h < p; h++) {
			var d = c[h],
				m = a[h];
			d !== 0 &&
				(vf.fromBufferAttribute(m, u),
				mf.fromBufferAttribute(m, l),
				gf.fromBufferAttribute(m, f),
				au.addScaledVector(vf.sub(Dr), d),
				su.addScaledVector(mf.sub(Nr), d),
				ou.addScaledVector(gf.sub(Or), d));
		}
		Dr.add(au), Nr.add(su), Or.add(ou);
	}
	var v = nh(e, t, n, r, Dr, Nr, Or, sa);
	if (v) {
		s &&
			(xi.fromBufferAttribute(s, u),
			bi.fromBufferAttribute(s, l),
			yi.fromBufferAttribute(s, f),
			(v.uv = Ct.getUV(sa, Dr, Nr, Or, xi, bi, yi, new W()))),
			o &&
				(xi.fromBufferAttribute(o, u),
				bi.fromBufferAttribute(o, l),
				yi.fromBufferAttribute(o, f),
				(v.uv2 = Ct.getUV(sa, Dr, Nr, Or, xi, bi, yi, new W())));
		var g = new Xs(u, l, f);
		Ct.getNormal(Dr, Nr, Or, g.normal), (v.face = g);
	}
	return v;
}
var zp = 0,
	Pn = new He(),
	uu = new se(),
	cs = new R();
function Re() {
	Object.defineProperty(this, 'id', { value: (zp += 2) }),
		(this.uuid = Ue.generateUUID()),
		(this.name = ''),
		(this.type = 'Geometry'),
		(this.vertices = []),
		(this.colors = []),
		(this.faces = []),
		(this.faceVertexUvs = [[]]),
		(this.morphTargets = []),
		(this.morphNormals = []),
		(this.skinWeights = []),
		(this.skinIndices = []),
		(this.lineDistances = []),
		(this.boundingBox = null),
		(this.boundingSphere = null),
		(this.elementsNeedUpdate = !1),
		(this.verticesNeedUpdate = !1),
		(this.uvsNeedUpdate = !1),
		(this.normalsNeedUpdate = !1),
		(this.colorsNeedUpdate = !1),
		(this.lineDistancesNeedUpdate = !1),
		(this.groupsNeedUpdate = !1);
}
Re.prototype = Object.assign(Object.create(Vn.prototype), {
	constructor: Re,
	isGeometry: !0,
	applyMatrix: function (e) {
		for (var t = new Et().getNormalMatrix(e), n = 0, r = this.vertices.length; n < r; n++) {
			var i = this.vertices[n];
			i.applyMatrix4(e);
		}
		for (var n = 0, r = this.faces.length; n < r; n++) {
			var a = this.faces[n];
			a.normal.applyMatrix3(t).normalize();
			for (var s = 0, o = a.vertexNormals.length; s < o; s++)
				a.vertexNormals[s].applyMatrix3(t).normalize();
		}
		return (
			this.boundingBox !== null && this.computeBoundingBox(),
			this.boundingSphere !== null && this.computeBoundingSphere(),
			(this.verticesNeedUpdate = !0),
			(this.normalsNeedUpdate = !0),
			this
		);
	},
	rotateX: function (e) {
		return Pn.makeRotationX(e), this.applyMatrix(Pn), this;
	},
	rotateY: function (e) {
		return Pn.makeRotationY(e), this.applyMatrix(Pn), this;
	},
	rotateZ: function (e) {
		return Pn.makeRotationZ(e), this.applyMatrix(Pn), this;
	},
	translate: function (e, t, n) {
		return Pn.makeTranslation(e, t, n), this.applyMatrix(Pn), this;
	},
	scale: function (e, t, n) {
		return Pn.makeScale(e, t, n), this.applyMatrix(Pn), this;
	},
	lookAt: function (e) {
		return uu.lookAt(e), uu.updateMatrix(), this.applyMatrix(uu.matrix), this;
	},
	fromBufferGeometry: function (e) {
		var t = this,
			n = e.index !== null ? e.index.array : void 0,
			r = e.attributes,
			i = r.position.array,
			a = r.normal !== void 0 ? r.normal.array : void 0,
			s = r.color !== void 0 ? r.color.array : void 0,
			o = r.uv !== void 0 ? r.uv.array : void 0,
			u = r.uv2 !== void 0 ? r.uv2.array : void 0;
		u !== void 0 && (this.faceVertexUvs[1] = []);
		for (var l = 0; l < i.length; l += 3)
			t.vertices.push(new R().fromArray(i, l)),
				s !== void 0 && t.colors.push(new he().fromArray(s, l));
		function f(g, x, M, _) {
			var y = s === void 0 ? [] : [t.colors[g].clone(), t.colors[x].clone(), t.colors[M].clone()],
				L =
					a === void 0
						? []
						: [
								new R().fromArray(a, g * 3),
								new R().fromArray(a, x * 3),
								new R().fromArray(a, M * 3)
							],
				C = new Xs(g, x, M, L, y, _);
			t.faces.push(C),
				o !== void 0 &&
					t.faceVertexUvs[0].push([
						new W().fromArray(o, g * 2),
						new W().fromArray(o, x * 2),
						new W().fromArray(o, M * 2)
					]),
				u !== void 0 &&
					t.faceVertexUvs[1].push([
						new W().fromArray(u, g * 2),
						new W().fromArray(u, x * 2),
						new W().fromArray(u, M * 2)
					]);
		}
		var c = e.groups;
		if (c.length > 0)
			for (var l = 0; l < c.length; l++)
				for (var h = c[l], p = h.start, d = h.count, m = p, v = p + d; m < v; m += 3)
					n !== void 0
						? f(n[m], n[m + 1], n[m + 2], h.materialIndex)
						: f(m, m + 1, m + 2, h.materialIndex);
		else if (n !== void 0) for (var l = 0; l < n.length; l += 3) f(n[l], n[l + 1], n[l + 2]);
		else for (var l = 0; l < i.length / 3; l += 3) f(l, l + 1, l + 2);
		return (
			this.computeFaceNormals(),
			e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
			e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()),
			this
		);
	},
	center: function () {
		return (
			this.computeBoundingBox(),
			this.boundingBox.getCenter(cs).negate(),
			this.translate(cs.x, cs.y, cs.z),
			this
		);
	},
	normalize: function () {
		this.computeBoundingSphere();
		var e = this.boundingSphere.center,
			t = this.boundingSphere.radius,
			n = t === 0 ? 1 : 1 / t,
			r = new He();
		return (
			r.set(n, 0, 0, -n * e.x, 0, n, 0, -n * e.y, 0, 0, n, -n * e.z, 0, 0, 0, 1),
			this.applyMatrix(r),
			this
		);
	},
	computeFaceNormals: function () {
		for (var e = new R(), t = new R(), n = 0, r = this.faces.length; n < r; n++) {
			var i = this.faces[n],
				a = this.vertices[i.a],
				s = this.vertices[i.b],
				o = this.vertices[i.c];
			e.subVectors(o, s), t.subVectors(a, s), e.cross(t), e.normalize(), i.normal.copy(e);
		}
	},
	computeVertexNormals: function (e) {
		e === void 0 && (e = !0);
		var t, n, r, i, a, s;
		for (s = new Array(this.vertices.length), t = 0, n = this.vertices.length; t < n; t++)
			s[t] = new R();
		if (e) {
			var o,
				u,
				l,
				f = new R(),
				c = new R();
			for (r = 0, i = this.faces.length; r < i; r++)
				(a = this.faces[r]),
					(o = this.vertices[a.a]),
					(u = this.vertices[a.b]),
					(l = this.vertices[a.c]),
					f.subVectors(l, u),
					c.subVectors(o, u),
					f.cross(c),
					s[a.a].add(f),
					s[a.b].add(f),
					s[a.c].add(f);
		} else
			for (this.computeFaceNormals(), r = 0, i = this.faces.length; r < i; r++)
				(a = this.faces[r]), s[a.a].add(a.normal), s[a.b].add(a.normal), s[a.c].add(a.normal);
		for (t = 0, n = this.vertices.length; t < n; t++) s[t].normalize();
		for (r = 0, i = this.faces.length; r < i; r++) {
			a = this.faces[r];
			var h = a.vertexNormals;
			h.length === 3
				? (h[0].copy(s[a.a]), h[1].copy(s[a.b]), h[2].copy(s[a.c]))
				: ((h[0] = s[a.a].clone()), (h[1] = s[a.b].clone()), (h[2] = s[a.c].clone()));
		}
		this.faces.length > 0 && (this.normalsNeedUpdate = !0);
	},
	computeFlatVertexNormals: function () {
		var e, t, n;
		for (this.computeFaceNormals(), e = 0, t = this.faces.length; e < t; e++) {
			n = this.faces[e];
			var r = n.vertexNormals;
			r.length === 3
				? (r[0].copy(n.normal), r[1].copy(n.normal), r[2].copy(n.normal))
				: ((r[0] = n.normal.clone()), (r[1] = n.normal.clone()), (r[2] = n.normal.clone()));
		}
		this.faces.length > 0 && (this.normalsNeedUpdate = !0);
	},
	computeMorphNormals: function () {
		var e, t, n, r, i;
		for (n = 0, r = this.faces.length; n < r; n++)
			for (
				i = this.faces[n],
					i.__originalFaceNormal
						? i.__originalFaceNormal.copy(i.normal)
						: (i.__originalFaceNormal = i.normal.clone()),
					i.__originalVertexNormals || (i.__originalVertexNormals = []),
					e = 0,
					t = i.vertexNormals.length;
				e < t;
				e++
			)
				i.__originalVertexNormals[e]
					? i.__originalVertexNormals[e].copy(i.vertexNormals[e])
					: (i.__originalVertexNormals[e] = i.vertexNormals[e].clone());
		var a = new Re();
		for (a.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
			if (!this.morphNormals[e]) {
				(this.morphNormals[e] = {}),
					(this.morphNormals[e].faceNormals = []),
					(this.morphNormals[e].vertexNormals = []);
				var s = this.morphNormals[e].faceNormals,
					o = this.morphNormals[e].vertexNormals,
					l,
					f;
				for (n = 0, r = this.faces.length; n < r; n++)
					(l = new R()), (f = { a: new R(), b: new R(), c: new R() }), s.push(l), o.push(f);
			}
			var u = this.morphNormals[e];
			(a.vertices = this.morphTargets[e].vertices),
				a.computeFaceNormals(),
				a.computeVertexNormals();
			var l, f;
			for (n = 0, r = this.faces.length; n < r; n++)
				(i = this.faces[n]),
					(l = u.faceNormals[n]),
					(f = u.vertexNormals[n]),
					l.copy(i.normal),
					f.a.copy(i.vertexNormals[0]),
					f.b.copy(i.vertexNormals[1]),
					f.c.copy(i.vertexNormals[2]);
		}
		for (n = 0, r = this.faces.length; n < r; n++)
			(i = this.faces[n]),
				(i.normal = i.__originalFaceNormal),
				(i.vertexNormals = i.__originalVertexNormals);
	},
	computeBoundingBox: function () {
		this.boundingBox === null && (this.boundingBox = new ur()),
			this.boundingBox.setFromPoints(this.vertices);
	},
	computeBoundingSphere: function () {
		this.boundingSphere === null && (this.boundingSphere = new Mr()),
			this.boundingSphere.setFromPoints(this.vertices);
	},
	merge: function (e, t, n) {
		if (!(e && e.isGeometry)) {
			console.error('THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.', e);
			return;
		}
		var r,
			i = this.vertices.length,
			a = this.vertices,
			s = e.vertices,
			o = this.faces,
			u = e.faces,
			l = this.colors,
			f = e.colors;
		n === void 0 && (n = 0), t !== void 0 && (r = new Et().getNormalMatrix(t));
		for (var c = 0, h = s.length; c < h; c++) {
			var p = s[c],
				d = p.clone();
			t !== void 0 && d.applyMatrix4(t), a.push(d);
		}
		for (var c = 0, h = f.length; c < h; c++) l.push(f[c].clone());
		for (c = 0, h = u.length; c < h; c++) {
			var m = u[c],
				v,
				g,
				x,
				M = m.vertexNormals,
				_ = m.vertexColors;
			(v = new Xs(m.a + i, m.b + i, m.c + i)),
				v.normal.copy(m.normal),
				r !== void 0 && v.normal.applyMatrix3(r).normalize();
			for (var y = 0, L = M.length; y < L; y++)
				(g = M[y].clone()), r !== void 0 && g.applyMatrix3(r).normalize(), v.vertexNormals.push(g);
			v.color.copy(m.color);
			for (var y = 0, L = _.length; y < L; y++) (x = _[y]), v.vertexColors.push(x.clone());
			(v.materialIndex = m.materialIndex + n), o.push(v);
		}
		for (var c = 0, h = e.faceVertexUvs.length; c < h; c++) {
			var C = e.faceVertexUvs[c];
			this.faceVertexUvs[c] === void 0 && (this.faceVertexUvs[c] = []);
			for (var y = 0, L = C.length; y < L; y++) {
				for (var T = C[y], P = [], k = 0, I = T.length; k < I; k++) P.push(T[k].clone());
				this.faceVertexUvs[c].push(P);
			}
		}
	},
	mergeMesh: function (e) {
		if (!(e && e.isMesh)) {
			console.error('THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.', e);
			return;
		}
		e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix);
	},
	mergeVertices: function () {
		var e = {},
			t = [],
			n = [],
			r,
			i,
			a = 4,
			s = Math.pow(10, a),
			o,
			u,
			l,
			f,
			c,
			h;
		for (o = 0, u = this.vertices.length; o < u; o++)
			(r = this.vertices[o]),
				(i = Math.round(r.x * s) + '_' + Math.round(r.y * s) + '_' + Math.round(r.z * s)),
				e[i] === void 0
					? ((e[i] = o), t.push(this.vertices[o]), (n[o] = t.length - 1))
					: (n[o] = n[e[i]]);
		var p = [];
		for (o = 0, u = this.faces.length; o < u; o++) {
			(l = this.faces[o]), (l.a = n[l.a]), (l.b = n[l.b]), (l.c = n[l.c]), (f = [l.a, l.b, l.c]);
			for (var d = 0; d < 3; d++)
				if (f[d] === f[(d + 1) % 3]) {
					p.push(o);
					break;
				}
		}
		for (o = p.length - 1; o >= 0; o--) {
			var m = p[o];
			for (this.faces.splice(m, 1), c = 0, h = this.faceVertexUvs.length; c < h; c++)
				this.faceVertexUvs[c].splice(m, 1);
		}
		var v = this.vertices.length - t.length;
		return (this.vertices = t), v;
	},
	setFromPoints: function (e) {
		this.vertices = [];
		for (var t = 0, n = e.length; t < n; t++) {
			var r = e[t];
			this.vertices.push(new R(r.x, r.y, r.z || 0));
		}
		return this;
	},
	sortFacesByMaterialIndex: function () {
		for (var e = this.faces, t = e.length, n = 0; n < t; n++) e[n]._id = n;
		function r(l, f) {
			return l.materialIndex - f.materialIndex;
		}
		e.sort(r);
		var i = this.faceVertexUvs[0],
			a = this.faceVertexUvs[1],
			s,
			o;
		i && i.length === t && (s = []), a && a.length === t && (o = []);
		for (var n = 0; n < t; n++) {
			var u = e[n]._id;
			s && s.push(i[u]), o && o.push(a[u]);
		}
		s && (this.faceVertexUvs[0] = s), o && (this.faceVertexUvs[1] = o);
	},
	toJSON: function () {
		var e = { metadata: { version: 4.5, type: 'Geometry', generator: 'Geometry.toJSON' } };
		if (
			((e.uuid = this.uuid),
			(e.type = this.type),
			this.name !== '' && (e.name = this.name),
			this.parameters !== void 0)
		) {
			var t = this.parameters;
			for (var n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		for (var r = [], i = 0; i < this.vertices.length; i++) {
			var a = this.vertices[i];
			r.push(a.x, a.y, a.z);
		}
		for (
			var s = [], o = [], u = {}, l = [], f = {}, c = [], h = {}, i = 0;
			i < this.faces.length;
			i++
		) {
			var p = this.faces[i],
				d = !0,
				m = !1,
				v = this.faceVertexUvs[0][i] !== void 0,
				g = p.normal.length() > 0,
				x = p.vertexNormals.length > 0,
				M = p.color.r !== 1 || p.color.g !== 1 || p.color.b !== 1,
				_ = p.vertexColors.length > 0,
				y = 0;
			if (
				((y = P(y, 0, 0)),
				(y = P(y, 1, d)),
				(y = P(y, 2, m)),
				(y = P(y, 3, v)),
				(y = P(y, 4, g)),
				(y = P(y, 5, x)),
				(y = P(y, 6, M)),
				(y = P(y, 7, _)),
				s.push(y),
				s.push(p.a, p.b, p.c),
				s.push(p.materialIndex),
				v)
			) {
				var L = this.faceVertexUvs[0][i];
				s.push(w(L[0]), w(L[1]), w(L[2]));
			}
			if ((g && s.push(k(p.normal)), x)) {
				var C = p.vertexNormals;
				s.push(k(C[0]), k(C[1]), k(C[2]));
			}
			if ((M && s.push(I(p.color)), _)) {
				var T = p.vertexColors;
				s.push(I(T[0]), I(T[1]), I(T[2]));
			}
		}
		function P(U, N, D) {
			return D ? U | (1 << N) : U & ~(1 << N);
		}
		function k(U) {
			var N = U.x.toString() + U.y.toString() + U.z.toString();
			return u[N] !== void 0 || ((u[N] = o.length / 3), o.push(U.x, U.y, U.z)), u[N];
		}
		function I(U) {
			var N = U.r.toString() + U.g.toString() + U.b.toString();
			return f[N] !== void 0 || ((f[N] = l.length), l.push(U.getHex())), f[N];
		}
		function w(U) {
			var N = U.x.toString() + U.y.toString();
			return h[N] !== void 0 || ((h[N] = c.length / 2), c.push(U.x, U.y)), h[N];
		}
		return (
			(e.data = {}),
			(e.data.vertices = r),
			(e.data.normals = o),
			l.length > 0 && (e.data.colors = l),
			c.length > 0 && (e.data.uvs = [c]),
			(e.data.faces = s),
			e
		);
	},
	clone: function () {
		return new Re().copy(this);
	},
	copy: function (e) {
		var t, n, r, i, a, s;
		(this.vertices = []),
			(this.colors = []),
			(this.faces = []),
			(this.faceVertexUvs = [[]]),
			(this.morphTargets = []),
			(this.morphNormals = []),
			(this.skinWeights = []),
			(this.skinIndices = []),
			(this.lineDistances = []),
			(this.boundingBox = null),
			(this.boundingSphere = null),
			(this.name = e.name);
		var o = e.vertices;
		for (t = 0, n = o.length; t < n; t++) this.vertices.push(o[t].clone());
		var u = e.colors;
		for (t = 0, n = u.length; t < n; t++) this.colors.push(u[t].clone());
		var l = e.faces;
		for (t = 0, n = l.length; t < n; t++) this.faces.push(l[t].clone());
		for (t = 0, n = e.faceVertexUvs.length; t < n; t++) {
			var f = e.faceVertexUvs[t];
			for (
				this.faceVertexUvs[t] === void 0 && (this.faceVertexUvs[t] = []), r = 0, i = f.length;
				r < i;
				r++
			) {
				var c = f[r],
					h = [];
				for (a = 0, s = c.length; a < s; a++) {
					var p = c[a];
					h.push(p.clone());
				}
				this.faceVertexUvs[t].push(h);
			}
		}
		var d = e.morphTargets;
		for (t = 0, n = d.length; t < n; t++) {
			var m = {};
			if (((m.name = d[t].name), d[t].vertices !== void 0))
				for (m.vertices = [], r = 0, i = d[t].vertices.length; r < i; r++)
					m.vertices.push(d[t].vertices[r].clone());
			if (d[t].normals !== void 0)
				for (m.normals = [], r = 0, i = d[t].normals.length; r < i; r++)
					m.normals.push(d[t].normals[r].clone());
			this.morphTargets.push(m);
		}
		var v = e.morphNormals;
		for (t = 0, n = v.length; t < n; t++) {
			var g = {};
			if (v[t].vertexNormals !== void 0)
				for (g.vertexNormals = [], r = 0, i = v[t].vertexNormals.length; r < i; r++) {
					var x = v[t].vertexNormals[r],
						M = {};
					(M.a = x.a.clone()), (M.b = x.b.clone()), (M.c = x.c.clone()), g.vertexNormals.push(M);
				}
			if (v[t].faceNormals !== void 0)
				for (g.faceNormals = [], r = 0, i = v[t].faceNormals.length; r < i; r++)
					g.faceNormals.push(v[t].faceNormals[r].clone());
			this.morphNormals.push(g);
		}
		var _ = e.skinWeights;
		for (t = 0, n = _.length; t < n; t++) this.skinWeights.push(_[t].clone());
		var y = e.skinIndices;
		for (t = 0, n = y.length; t < n; t++) this.skinIndices.push(y[t].clone());
		var L = e.lineDistances;
		for (t = 0, n = L.length; t < n; t++) this.lineDistances.push(L[t]);
		var C = e.boundingBox;
		C !== null && (this.boundingBox = C.clone());
		var T = e.boundingSphere;
		return (
			T !== null && (this.boundingSphere = T.clone()),
			(this.elementsNeedUpdate = e.elementsNeedUpdate),
			(this.verticesNeedUpdate = e.verticesNeedUpdate),
			(this.uvsNeedUpdate = e.uvsNeedUpdate),
			(this.normalsNeedUpdate = e.normalsNeedUpdate),
			(this.colorsNeedUpdate = e.colorsNeedUpdate),
			(this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate),
			(this.groupsNeedUpdate = e.groupsNeedUpdate),
			this
		);
	},
	dispose: function () {
		this.dispatchEvent({ type: 'dispose' });
	}
});
class ev extends Re {
	constructor(t, n, r, i, a, s) {
		super(),
			(this.type = 'BoxGeometry'),
			(this.parameters = {
				width: t,
				height: n,
				depth: r,
				widthSegments: i,
				heightSegments: a,
				depthSegments: s
			}),
			this.fromBufferGeometry(new Do(t, n, r, i, a, s)),
			this.mergeVertices();
	}
}
class Do extends ae {
	constructor(t, n, r, i, a, s) {
		super(),
			(this.type = 'BoxBufferGeometry'),
			(this.parameters = {
				width: t,
				height: n,
				depth: r,
				widthSegments: i,
				heightSegments: a,
				depthSegments: s
			});
		var o = this;
		(t = t || 1),
			(n = n || 1),
			(r = r || 1),
			(i = Math.floor(i) || 1),
			(a = Math.floor(a) || 1),
			(s = Math.floor(s) || 1);
		var u = [],
			l = [],
			f = [],
			c = [],
			h = 0,
			p = 0;
		d('z', 'y', 'x', -1, -1, r, n, t, s, a, 0),
			d('z', 'y', 'x', 1, -1, r, n, -t, s, a, 1),
			d('x', 'z', 'y', 1, 1, t, r, n, i, s, 2),
			d('x', 'z', 'y', 1, -1, t, r, -n, i, s, 3),
			d('x', 'y', 'z', 1, -1, t, n, r, i, a, 4),
			d('x', 'y', 'z', -1, -1, t, n, -r, i, a, 5),
			this.setIndex(u),
			this.addAttribute('position', new re(l, 3)),
			this.addAttribute('normal', new re(f, 3)),
			this.addAttribute('uv', new re(c, 2));
		function d(m, v, g, x, M, _, y, L, C, T, P) {
			var k = _ / C,
				I = y / T,
				w = _ / 2,
				U = y / 2,
				N = L / 2,
				D = C + 1,
				B = T + 1,
				q = 0,
				H = 0,
				j,
				K,
				Z = new R();
			for (K = 0; K < B; K++) {
				var ve = K * I - U;
				for (j = 0; j < D; j++) {
					var _e = j * k - w;
					(Z[m] = _e * x),
						(Z[v] = ve * M),
						(Z[g] = N),
						l.push(Z.x, Z.y, Z.z),
						(Z[m] = 0),
						(Z[v] = 0),
						(Z[g] = L > 0 ? 1 : -1),
						f.push(Z.x, Z.y, Z.z),
						c.push(j / C),
						c.push(1 - K / T),
						(q += 1);
				}
			}
			for (K = 0; K < T; K++)
				for (j = 0; j < C; j++) {
					var V = h + j + D * K,
						be = h + j + D * (K + 1),
						le = h + (j + 1) + D * (K + 1),
						pe = h + (j + 1) + D * K;
					u.push(V, be, pe), u.push(be, le, pe), (H += 6);
				}
			o.addGroup(p, H, P), (p += H), (h += q);
		}
	}
}
function Ai(e) {
	var t = {};
	for (var n in e) {
		t[n] = {};
		for (var r in e[n]) {
			var i = e[n][r];
			i &&
			(i.isColor ||
				i.isMatrix3 ||
				i.isMatrix4 ||
				i.isVector2 ||
				i.isVector3 ||
				i.isVector4 ||
				i.isTexture)
				? (t[n][r] = i.clone())
				: Array.isArray(i)
					? (t[n][r] = i.slice())
					: (t[n][r] = i);
		}
	}
	return t;
}
function $t(e) {
	for (var t = {}, n = 0; n < e.length; n++) {
		var r = Ai(e[n]);
		for (var i in r) t[i] = r[i];
	}
	return t;
}
var tv = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
	nv = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
function Ot(e) {
	De.call(this),
		(this.type = 'ShaderMaterial'),
		(this.defines = {}),
		(this.uniforms = {}),
		(this.vertexShader = tv),
		(this.fragmentShader = nv),
		(this.linewidth = 1),
		(this.wireframe = !1),
		(this.wireframeLinewidth = 1),
		(this.fog = !1),
		(this.lights = !1),
		(this.clipping = !1),
		(this.skinning = !1),
		(this.morphTargets = !1),
		(this.morphNormals = !1),
		(this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }),
		(this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }),
		(this.index0AttributeName = void 0),
		(this.uniformsNeedUpdate = !1),
		e !== void 0 &&
			(e.attributes !== void 0 &&
				console.error(
					'THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.'
				),
			this.setValues(e));
}
Ot.prototype = Object.create(De.prototype);
Ot.prototype.constructor = Ot;
Ot.prototype.isShaderMaterial = !0;
Ot.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		(this.fragmentShader = e.fragmentShader),
		(this.vertexShader = e.vertexShader),
		(this.uniforms = Ai(e.uniforms)),
		(this.defines = Object.assign({}, e.defines)),
		(this.wireframe = e.wireframe),
		(this.wireframeLinewidth = e.wireframeLinewidth),
		(this.lights = e.lights),
		(this.clipping = e.clipping),
		(this.skinning = e.skinning),
		(this.morphTargets = e.morphTargets),
		(this.morphNormals = e.morphNormals),
		(this.extensions = e.extensions),
		this
	);
};
Ot.prototype.toJSON = function (e) {
	var t = De.prototype.toJSON.call(this, e);
	t.uniforms = {};
	for (var n in this.uniforms) {
		var r = this.uniforms[n],
			i = r.value;
		i && i.isTexture
			? (t.uniforms[n] = { type: 't', value: i.toJSON(e).uuid })
			: i && i.isColor
				? (t.uniforms[n] = { type: 'c', value: i.getHex() })
				: i && i.isVector2
					? (t.uniforms[n] = { type: 'v2', value: i.toArray() })
					: i && i.isVector3
						? (t.uniforms[n] = { type: 'v3', value: i.toArray() })
						: i && i.isVector4
							? (t.uniforms[n] = { type: 'v4', value: i.toArray() })
							: i && i.isMatrix3
								? (t.uniforms[n] = { type: 'm3', value: i.toArray() })
								: i && i.isMatrix4
									? (t.uniforms[n] = { type: 'm4', value: i.toArray() })
									: (t.uniforms[n] = { value: i });
	}
	Object.keys(this.defines).length > 0 && (t.defines = this.defines),
		(t.vertexShader = this.vertexShader),
		(t.fragmentShader = this.fragmentShader);
	var a = {};
	for (var s in this.extensions) this.extensions[s] === !0 && (a[s] = !0);
	return Object.keys(a).length > 0 && (t.extensions = a), t;
};
function nr() {
	se.call(this),
		(this.type = 'Camera'),
		(this.matrixWorldInverse = new He()),
		(this.projectionMatrix = new He()),
		(this.projectionMatrixInverse = new He());
}
nr.prototype = Object.assign(Object.create(se.prototype), {
	constructor: nr,
	isCamera: !0,
	copy: function (e, t) {
		return (
			se.prototype.copy.call(this, e, t),
			this.matrixWorldInverse.copy(e.matrixWorldInverse),
			this.projectionMatrix.copy(e.projectionMatrix),
			this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
			this
		);
	},
	getWorldDirection: function (e) {
		e === void 0 &&
			(console.warn('THREE.Camera: .getWorldDirection() target is now required'), (e = new R())),
			this.updateMatrixWorld(!0);
		var t = this.matrixWorld.elements;
		return e.set(-t[8], -t[9], -t[10]).normalize();
	},
	updateMatrixWorld: function (e) {
		se.prototype.updateMatrixWorld.call(this, e),
			this.matrixWorldInverse.getInverse(this.matrixWorld);
	},
	clone: function () {
		return new this.constructor().copy(this);
	}
});
function bt(e, t, n, r) {
	nr.call(this),
		(this.type = 'PerspectiveCamera'),
		(this.fov = e !== void 0 ? e : 50),
		(this.zoom = 1),
		(this.near = n !== void 0 ? n : 0.1),
		(this.far = r !== void 0 ? r : 2e3),
		(this.focus = 10),
		(this.aspect = t !== void 0 ? t : 1),
		(this.view = null),
		(this.filmGauge = 35),
		(this.filmOffset = 0),
		this.updateProjectionMatrix();
}
bt.prototype = Object.assign(Object.create(nr.prototype), {
	constructor: bt,
	isPerspectiveCamera: !0,
	copy: function (e, t) {
		return (
			nr.prototype.copy.call(this, e, t),
			(this.fov = e.fov),
			(this.zoom = e.zoom),
			(this.near = e.near),
			(this.far = e.far),
			(this.focus = e.focus),
			(this.aspect = e.aspect),
			(this.view = e.view === null ? null : Object.assign({}, e.view)),
			(this.filmGauge = e.filmGauge),
			(this.filmOffset = e.filmOffset),
			this
		);
	},
	setFocalLength: function (e) {
		var t = (0.5 * this.getFilmHeight()) / e;
		(this.fov = Ue.RAD2DEG * 2 * Math.atan(t)), this.updateProjectionMatrix();
	},
	getFocalLength: function () {
		var e = Math.tan(Ue.DEG2RAD * 0.5 * this.fov);
		return (0.5 * this.getFilmHeight()) / e;
	},
	getEffectiveFOV: function () {
		return Ue.RAD2DEG * 2 * Math.atan(Math.tan(Ue.DEG2RAD * 0.5 * this.fov) / this.zoom);
	},
	getFilmWidth: function () {
		return this.filmGauge * Math.min(this.aspect, 1);
	},
	getFilmHeight: function () {
		return this.filmGauge / Math.max(this.aspect, 1);
	},
	setViewOffset: function (e, t, n, r, i, a) {
		(this.aspect = e / t),
			this.view === null &&
				(this.view = {
					enabled: !0,
					fullWidth: 1,
					fullHeight: 1,
					offsetX: 0,
					offsetY: 0,
					width: 1,
					height: 1
				}),
			(this.view.enabled = !0),
			(this.view.fullWidth = e),
			(this.view.fullHeight = t),
			(this.view.offsetX = n),
			(this.view.offsetY = r),
			(this.view.width = i),
			(this.view.height = a),
			this.updateProjectionMatrix();
	},
	clearViewOffset: function () {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	},
	updateProjectionMatrix: function () {
		var e = this.near,
			t = (e * Math.tan(Ue.DEG2RAD * 0.5 * this.fov)) / this.zoom,
			n = 2 * t,
			r = this.aspect * n,
			i = -0.5 * r,
			a = this.view;
		if (this.view !== null && this.view.enabled) {
			var s = a.fullWidth,
				o = a.fullHeight;
			(i += (a.offsetX * r) / s),
				(t -= (a.offsetY * n) / o),
				(r *= a.width / s),
				(n *= a.height / o);
		}
		var u = this.filmOffset;
		u !== 0 && (i += (e * u) / this.getFilmWidth()),
			this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far),
			this.projectionMatrixInverse.getInverse(this.projectionMatrix);
	},
	toJSON: function (e) {
		var t = se.prototype.toJSON.call(this, e);
		return (
			(t.object.fov = this.fov),
			(t.object.zoom = this.zoom),
			(t.object.near = this.near),
			(t.object.far = this.far),
			(t.object.focus = this.focus),
			(t.object.aspect = this.aspect),
			this.view !== null && (t.object.view = Object.assign({}, this.view)),
			(t.object.filmGauge = this.filmGauge),
			(t.object.filmOffset = this.filmOffset),
			t
		);
	}
});
var li = 90,
	fi = 1;
function ma(e, t, n, r) {
	se.call(this), (this.type = 'CubeCamera');
	var i = new bt(li, fi, e, t);
	i.up.set(0, -1, 0), i.lookAt(new R(1, 0, 0)), this.add(i);
	var a = new bt(li, fi, e, t);
	a.up.set(0, -1, 0), a.lookAt(new R(-1, 0, 0)), this.add(a);
	var s = new bt(li, fi, e, t);
	s.up.set(0, 0, 1), s.lookAt(new R(0, 1, 0)), this.add(s);
	var o = new bt(li, fi, e, t);
	o.up.set(0, 0, -1), o.lookAt(new R(0, -1, 0)), this.add(o);
	var u = new bt(li, fi, e, t);
	u.up.set(0, -1, 0), u.lookAt(new R(0, 0, 1)), this.add(u);
	var l = new bt(li, fi, e, t);
	l.up.set(0, -1, 0),
		l.lookAt(new R(0, 0, -1)),
		this.add(l),
		(r = r || { format: jr, magFilter: It, minFilter: It }),
		(this.renderTarget = new Jr(n, n, r)),
		(this.renderTarget.texture.name = 'CubeCamera'),
		(this.update = function (f, c) {
			this.parent === null && this.updateMatrixWorld();
			var h = f.getRenderTarget(),
				p = this.renderTarget,
				d = p.texture.generateMipmaps;
			(p.texture.generateMipmaps = !1),
				f.setRenderTarget(p, 0),
				f.render(c, i),
				f.setRenderTarget(p, 1),
				f.render(c, a),
				f.setRenderTarget(p, 2),
				f.render(c, s),
				f.setRenderTarget(p, 3),
				f.render(c, o),
				f.setRenderTarget(p, 4),
				f.render(c, u),
				(p.texture.generateMipmaps = d),
				f.setRenderTarget(p, 5),
				f.render(c, l),
				f.setRenderTarget(h);
		}),
		(this.clear = function (f, c, h, p) {
			for (var d = f.getRenderTarget(), m = this.renderTarget, v = 0; v < 6; v++)
				f.setRenderTarget(m, v), f.clear(c, h, p);
			f.setRenderTarget(d);
		});
}
ma.prototype = Object.create(se.prototype);
ma.prototype.constructor = ma;
function Jr(e, t, n) {
	Jt.call(this, e, t, n);
}
Jr.prototype = Object.create(Jt.prototype);
Jr.prototype.constructor = Jr;
Jr.prototype.isWebGLRenderTargetCube = !0;
Jr.prototype.fromEquirectangularTexture = function (e, t) {
	(this.texture.type = t.type),
		(this.texture.format = t.format),
		(this.texture.encoding = t.encoding);
	var n = new Js(),
		r = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: [
				'varying vec3 vWorldDirection;',
				'vec3 transformDirection( in vec3 dir, in mat4 matrix ) {',
				'	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );',
				'}',
				'void main() {',
				'	vWorldDirection = transformDirection( position, modelMatrix );',
				'	#include <begin_vertex>',
				'	#include <project_vertex>',
				'}'
			].join(`
`),
			fragmentShader: [
				'uniform sampler2D tEquirect;',
				'varying vec3 vWorldDirection;',
				'#define RECIPROCAL_PI 0.31830988618',
				'#define RECIPROCAL_PI2 0.15915494',
				'void main() {',
				'	vec3 direction = normalize( vWorldDirection );',
				'	vec2 sampleUV;',
				'	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;',
				'	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;',
				'	gl_FragColor = texture2D( tEquirect, sampleUV );',
				'}'
			].join(`
`)
		},
		i = new Ot({
			type: 'CubemapFromEquirect',
			uniforms: Ai(r.uniforms),
			vertexShader: r.vertexShader,
			fragmentShader: r.fragmentShader,
			side: Tt,
			blending: ia
		});
	i.uniforms.tEquirect.value = t;
	var a = new wt(new Do(5, 5, 5), i);
	n.add(a);
	var s = new ma(1, 10, 1);
	return (
		(s.renderTarget = this),
		(s.renderTarget.texture.name = 'CubeCameraTexture'),
		s.update(e, n),
		a.geometry.dispose(),
		a.material.dispose(),
		this
	);
};
function Ri(e, t, n, r, i, a, s, o, u, l, f, c) {
	lt.call(this, null, a, s, o, u, l, r, i, f, c),
		(this.image = { data: e || null, width: t || 1, height: n || 1 }),
		(this.magFilter = u !== void 0 ? u : Dt),
		(this.minFilter = l !== void 0 ? l : Dt),
		(this.generateMipmaps = !1),
		(this.flipY = !1),
		(this.unpackAlignment = 1),
		(this.needsUpdate = !0);
}
Ri.prototype = Object.create(lt.prototype);
Ri.prototype.constructor = Ri;
Ri.prototype.isDataTexture = !0;
var lu = new R(),
	rv = new R(),
	iv = new Et();
function Zn(e, t) {
	(this.normal = e !== void 0 ? e : new R(1, 0, 0)), (this.constant = t !== void 0 ? t : 0);
}
Object.assign(Zn.prototype, {
	isPlane: !0,
	set: function (e, t) {
		return this.normal.copy(e), (this.constant = t), this;
	},
	setComponents: function (e, t, n, r) {
		return this.normal.set(e, t, n), (this.constant = r), this;
	},
	setFromNormalAndCoplanarPoint: function (e, t) {
		return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
	},
	setFromCoplanarPoints: function (e, t, n) {
		var r = lu.subVectors(n, t).cross(rv.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return this.normal.copy(e.normal), (this.constant = e.constant), this;
	},
	normalize: function () {
		var e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), (this.constant *= e), this;
	},
	negate: function () {
		return (this.constant *= -1), this.normal.negate(), this;
	},
	distanceToPoint: function (e) {
		return this.normal.dot(e) + this.constant;
	},
	distanceToSphere: function (e) {
		return this.distanceToPoint(e.center) - e.radius;
	},
	projectPoint: function (e, t) {
		return (
			t === void 0 &&
				(console.warn('THREE.Plane: .projectPoint() target is now required'), (t = new R())),
			t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
		);
	},
	intersectLine: function (e, t) {
		t === void 0 &&
			(console.warn('THREE.Plane: .intersectLine() target is now required'), (t = new R()));
		var n = e.delta(lu),
			r = this.normal.dot(n);
		if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : void 0;
		var i = -(e.start.dot(this.normal) + this.constant) / r;
		if (!(i < 0 || i > 1)) return t.copy(n).multiplyScalar(i).add(e.start);
	},
	intersectsLine: function (e) {
		var t = this.distanceToPoint(e.start),
			n = this.distanceToPoint(e.end);
		return (t < 0 && n > 0) || (n < 0 && t > 0);
	},
	intersectsBox: function (e) {
		return e.intersectsPlane(this);
	},
	intersectsSphere: function (e) {
		return e.intersectsPlane(this);
	},
	coplanarPoint: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Plane: .coplanarPoint() target is now required'), (e = new R())),
			e.copy(this.normal).multiplyScalar(-this.constant)
		);
	},
	applyMatrix4: function (e, t) {
		var n = t || iv.getNormalMatrix(e),
			r = this.coplanarPoint(lu).applyMatrix4(e),
			i = this.normal.applyMatrix3(n).normalize();
		return (this.constant = -r.dot(i)), this;
	},
	translate: function (e) {
		return (this.constant -= e.dot(this.normal)), this;
	},
	equals: function (e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
});
var ci = new Mr(),
	hs = new R();
function No(e, t, n, r, i, a) {
	this.planes = [
		e !== void 0 ? e : new Zn(),
		t !== void 0 ? t : new Zn(),
		n !== void 0 ? n : new Zn(),
		r !== void 0 ? r : new Zn(),
		i !== void 0 ? i : new Zn(),
		a !== void 0 ? a : new Zn()
	];
}
Object.assign(No.prototype, {
	set: function (e, t, n, r, i, a) {
		var s = this.planes;
		return s[0].copy(e), s[1].copy(t), s[2].copy(n), s[3].copy(r), s[4].copy(i), s[5].copy(a), this;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		for (var t = this.planes, n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	},
	setFromMatrix: function (e) {
		var t = this.planes,
			n = e.elements,
			r = n[0],
			i = n[1],
			a = n[2],
			s = n[3],
			o = n[4],
			u = n[5],
			l = n[6],
			f = n[7],
			c = n[8],
			h = n[9],
			p = n[10],
			d = n[11],
			m = n[12],
			v = n[13],
			g = n[14],
			x = n[15];
		return (
			t[0].setComponents(s - r, f - o, d - c, x - m).normalize(),
			t[1].setComponents(s + r, f + o, d + c, x + m).normalize(),
			t[2].setComponents(s + i, f + u, d + h, x + v).normalize(),
			t[3].setComponents(s - i, f - u, d - h, x - v).normalize(),
			t[4].setComponents(s - a, f - l, d - p, x - g).normalize(),
			t[5].setComponents(s + a, f + l, d + p, x + g).normalize(),
			this
		);
	},
	intersectsObject: function (e) {
		var t = e.geometry;
		return (
			t.boundingSphere === null && t.computeBoundingSphere(),
			ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
			this.intersectsSphere(ci)
		);
	},
	intersectsSprite: function (e) {
		return (
			ci.center.set(0, 0, 0),
			(ci.radius = 0.7071067811865476),
			ci.applyMatrix4(e.matrixWorld),
			this.intersectsSphere(ci)
		);
	},
	intersectsSphere: function (e) {
		for (var t = this.planes, n = e.center, r = -e.radius, i = 0; i < 6; i++) {
			var a = t[i].distanceToPoint(n);
			if (a < r) return !1;
		}
		return !0;
	},
	intersectsBox: function (e) {
		for (var t = this.planes, n = 0; n < 6; n++) {
			var r = t[n];
			if (
				((hs.x = r.normal.x > 0 ? e.max.x : e.min.x),
				(hs.y = r.normal.y > 0 ? e.max.y : e.min.y),
				(hs.z = r.normal.z > 0 ? e.max.z : e.min.z),
				r.distanceToPoint(hs) < 0)
			)
				return !1;
		}
		return !0;
	},
	containsPoint: function (e) {
		for (var t = this.planes, n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
});
var av = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
	sv = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
	ov = `#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,
	uv = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,
	lv = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
	fv = 'vec3 transformed = vec3( position );',
	cv = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
	hv = `vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,
	dv = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
	pv = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;
	}
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;
		}
		if ( clipped ) discard;
	#endif
#endif`,
	vv = `#if NUM_CLIPPING_PLANES > 0
	#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
		varying vec3 vViewPosition;
	#endif
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
	mv = `#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
	varying vec3 vViewPosition;
#endif`,
	gv = `#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
	vViewPosition = - mvPosition.xyz;
#endif`,
	_v = `#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,
	xv = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,
	bv = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,
	yv = `#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`,
	wv = `#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6
#define saturate(a) clamp( a, 0.0, 1.0 )
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 projectionMatrix ) {
  return projectionMatrix[ 2 ][ 3 ] == - 1.0;
}`,
	Mv = `#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_textureSize (1024.0)
int getFaceFromDirection(vec3 direction) {
	vec3 absDirection = abs(direction);
	int face = -1;
	if( absDirection.x > absDirection.z ) {
		if(absDirection.x > absDirection.y )
			face = direction.x > 0.0 ? 0 : 3;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	else {
		if(absDirection.z > absDirection.y )
			face = direction.z > 0.0 ? 2 : 5;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	return face;
}
#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)
#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))
vec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {
	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);
	float dxRoughness = dFdx(roughness);
	float dyRoughness = dFdy(roughness);
	vec3 dx = dFdx( vec * scale * dxRoughness );
	vec3 dy = dFdy( vec * scale * dyRoughness );
	float d = max( dot( dx, dx ), dot( dy, dy ) );
	d = clamp(d, 1.0, cubeUV_rangeClamp);
	float mipLevel = 0.5 * log2(d);
	return vec2(floor(mipLevel), fract(mipLevel));
}
#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)
#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)
vec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {
	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;
	float a = 16.0 * cubeUV_rcpTextureSize;
	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );
	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;
	float powScale = exp2_packed.x * exp2_packed.y;
	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;
	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;
	bool bRes = mipLevel == 0.0;
	scale =  bRes && (scale < a) ? a : scale;
	vec3 r;
	vec2 offset;
	int face = getFaceFromDirection(direction);
	float rcpPowScale = 1.0 / powScale;
	if( face == 0) {
		r = vec3(direction.x, -direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 1) {
		r = vec3(direction.y, direction.x, direction.z);
		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 2) {
		r = vec3(direction.z, direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 3) {
		r = vec3(direction.x, direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	else if( face == 4) {
		r = vec3(direction.y, direction.x, -direction.z);
		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	else {
		r = vec3(direction.z, -direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	r = normalize(r);
	float texelOffset = 0.5 * cubeUV_rcpTextureSize;
	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;
	vec2 base = offset + vec2( texelOffset );
	return base + s * ( scale - 2.0 * texelOffset );
}
#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)
vec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {
	float roughnessVal = roughness* cubeUV_maxLods3;
	float r1 = floor(roughnessVal);
	float r2 = r1 + 1.0;
	float t = fract(roughnessVal);
	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);
	float s = mipInfo.y;
	float level0 = mipInfo.x;
	float level1 = level0 + 1.0;
	level1 = level1 > 5.0 ? 5.0 : level1;
	level0 += min( floor( s + 0.5 ), 5.0 );
	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);
	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));
	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);
	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));
	vec4 result = mix(color10, color20, t);
	return vec4(result.rgb, 1.0);
}
#endif`,
	Ev = `vec3 transformedNormal = normalMatrix * objectNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = normalMatrix * objectTangent;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
	Sv = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
	Lv = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
	Tv = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
	Av = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
	Rv = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
	Cv = `
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = min( floor( D ) / 255.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,
	Pv = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToVertex, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_EQUIREC )
		vec2 sampleUV;
		reflectVec = normalize( reflectVec );
		sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
		sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
		vec4 envColor = texture2D( envMap, sampleUV );
	#elif defined( ENVMAP_TYPE_SPHERE )
		reflectVec = normalize( reflectVec );
		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );
		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	envColor = envMapTexelToLinear( envColor );
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
	Iv = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
	Dv = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
	Nv = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
	Ov = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
	Fv = `#ifdef USE_FOG
	fogDepth = -mvPosition.z;
#endif`,
	kv = `#ifdef USE_FOG
	varying float fogDepth;
#endif`,
	Uv = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
	Bv = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
	Gv = `#ifdef TOON
	uniform sampler2D gradientMap;
	vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
		float dotNL = dot( normal, lightDirection );
		vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
		#ifdef USE_GRADIENTMAP
			return texture2D( gradientMap, coord ).rgb;
		#else
			return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
		#endif
	}
#endif`,
	Vv = `#ifdef USE_LIGHTMAP
	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
#endif`,
	Hv = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
	Wv = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
#endif`,
	qv = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
		float shadowCameraNear;
		float shadowCameraFar;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,
	jv = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
		  vec3 reflectVec = reflect( -viewDir, normal );
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );
		#elif defined( ENVMAP_TYPE_EQUIREC )
			vec2 sampleUV;
			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_SPHERE )
			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,
	Kv = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
	Jv = `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	#ifdef TOON
		vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#else
		float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
		vec3 irradiance = dotNL * directLight.color;
	#endif
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
	Xv = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = saturate( clearcoat );	material.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,
	Yv = `struct PhysicalMaterial {
	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
	Zv = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
	Qv = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,
	$v = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
	zv = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 1.0 ? log2( vFragDepth ) * logDepthBufFC * 0.5 : gl_FragCoord.z;
#endif`,
	em = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
	tm = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
	nm = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
	rm = `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,
	im = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
	am = `#ifdef USE_MAP
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif`,
	sm = `#ifdef USE_MAP
	uniform mat3 uvTransform;
	uniform sampler2D map;
#endif`,
	om = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
	um = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
	lm = `#ifdef USE_MORPHNORMALS
	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];
	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];
	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];
	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];
#endif`,
	fm = `#ifdef USE_MORPHTARGETS
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,
	cm = `#ifdef USE_MORPHTARGETS
	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];
	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];
	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];
	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];
	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];
	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];
	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];
	#endif
#endif`,
	hm = `#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
	dm = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	#ifdef USE_TANGENT
		mat3 vTBN = mat3( tangent, bitangent, normal );
		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
		mapN.xy = normalScale * mapN.xy;
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, normalScale, normalMap );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,
	pm = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 normalScale, in sampler2D normalMap ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
		mapN.xy *= normalScale;
		#ifdef DOUBLE_SIDED
			vec3 NfromST = cross( S, T );
			if( dot( NfromST, N ) > 0.0 ) {
				S *= -1.0;
				T *= -1.0;
			}
		#else
			mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		mat3 tsn = mat3( S, T, N );
		return normalize( tsn * mapN );
	}
#endif`,
	vm = `#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
	mm = `#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );
		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
		mapN.xy = clearcoatNormalScale * mapN.xy;
		clearcoatNormal = normalize( vTBN * mapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatNormalScale, clearcoatNormalMap );
	#endif
#endif`,
	gm = `#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
	_m = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 encodeHalfRGBA ( vec2 v ) {
	vec4 encoded = vec4( 0.0 );
	const vec2 offset = vec2( 1.0 / 255.0, 0.0 );
	encoded.xy = vec2( v.x, fract( v.x * 255.0 ) );
	encoded.xy = encoded.xy - ( encoded.yy * offset );
	encoded.zw = vec2( v.y, fract( v.y * 255.0 ) );
	encoded.zw = encoded.zw - ( encoded.ww * offset );
	return encoded;
}
vec2 decodeHalfRGBA( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
	xm = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
	bm = `vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
gl_Position = projectionMatrix * mvPosition;`,
	ym = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
	wm = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
	Mm = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
	Em = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
	Sm = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return decodeHalfRGBA( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {
		const vec2 offset = vec2( 0.0, 1.0 );
		vec2 texelSize = vec2( 1.0 ) / size;
		vec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;
		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );
		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );
		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );
		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );
		vec2 f = fract( uv * size + 0.5 );
		float a = mix( lb, lt, f.y );
		float b = mix( rb, rt, f.y );
		float c = mix( a, b, f.x );
		return c;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			shadow = (
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
	Lm = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
	Tm = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;
	}
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;
	}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;
	}
	#endif
#endif`,
	Am = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLight directionalLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLights[ i ];
		shadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLight spotLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLights[ i ];
		shadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLight pointLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLights[ i ];
		shadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#endif
	#endif
	return shadow;
}`,
	Rm = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
	Cm = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,
	Pm = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
	Im = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
	Dm = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
	Nm = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
	Om = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
	Fm = `#ifndef saturate
	#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );
}`,
	km = `#ifdef USE_UV
	varying vec2 vUv;
#endif`,
	Um = `#ifdef USE_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif`,
	Bm = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
	Gm = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
	Vm = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
#endif`,
	Hm = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = uv2;
#endif`,
	Wm = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );
#endif`,
	qm = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
	jm = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
	Km = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = mapTexelToLinear( texColor );
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
	Jm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
	Xm = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );
	#endif
}`,
	Ym = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
}`,
	Zm = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
	Qm = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
	$m = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV;
	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
	zm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
	eg = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
	tg = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	vLineDistance = scale * lineDistance;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
	ng = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
	rg = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
	ig = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	ag = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	sg = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
	og = `#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
	ug = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	lg = `#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	fg = `#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSPARENCY
	uniform float transparency;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	cg = `#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	hg = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,
	dg = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
	pg = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
	vg = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
	mg = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <fog_fragment>
}`,
	gg = `#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	_g = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
	xg = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
	Qe = {
		alphamap_fragment: av,
		alphamap_pars_fragment: sv,
		alphatest_fragment: ov,
		aomap_fragment: uv,
		aomap_pars_fragment: lv,
		begin_vertex: fv,
		beginnormal_vertex: cv,
		bsdfs: hv,
		bumpmap_pars_fragment: dv,
		clipping_planes_fragment: pv,
		clipping_planes_pars_fragment: vv,
		clipping_planes_pars_vertex: mv,
		clipping_planes_vertex: gv,
		color_fragment: _v,
		color_pars_fragment: xv,
		color_pars_vertex: bv,
		color_vertex: yv,
		common: wv,
		cube_uv_reflection_fragment: Mv,
		defaultnormal_vertex: Ev,
		displacementmap_pars_vertex: Sv,
		displacementmap_vertex: Lv,
		emissivemap_fragment: Tv,
		emissivemap_pars_fragment: Av,
		encodings_fragment: Rv,
		encodings_pars_fragment: Cv,
		envmap_fragment: Pv,
		envmap_common_pars_fragment: Iv,
		envmap_pars_fragment: Dv,
		envmap_pars_vertex: Nv,
		envmap_physical_pars_fragment: jv,
		envmap_vertex: Ov,
		fog_vertex: Fv,
		fog_pars_vertex: kv,
		fog_fragment: Uv,
		fog_pars_fragment: Bv,
		gradientmap_pars_fragment: Gv,
		lightmap_fragment: Vv,
		lightmap_pars_fragment: Hv,
		lights_lambert_vertex: Wv,
		lights_pars_begin: qv,
		lights_phong_fragment: Kv,
		lights_phong_pars_fragment: Jv,
		lights_physical_fragment: Xv,
		lights_physical_pars_fragment: Yv,
		lights_fragment_begin: Zv,
		lights_fragment_maps: Qv,
		lights_fragment_end: $v,
		logdepthbuf_fragment: zv,
		logdepthbuf_pars_fragment: em,
		logdepthbuf_pars_vertex: tm,
		logdepthbuf_vertex: nm,
		map_fragment: rm,
		map_pars_fragment: im,
		map_particle_fragment: am,
		map_particle_pars_fragment: sm,
		metalnessmap_fragment: om,
		metalnessmap_pars_fragment: um,
		morphnormal_vertex: lm,
		morphtarget_pars_vertex: fm,
		morphtarget_vertex: cm,
		normal_fragment_begin: hm,
		normal_fragment_maps: dm,
		normalmap_pars_fragment: pm,
		clearcoat_normal_fragment_begin: vm,
		clearcoat_normal_fragment_maps: mm,
		clearcoat_normalmap_pars_fragment: gm,
		packing: _m,
		premultiplied_alpha_fragment: xm,
		project_vertex: bm,
		dithering_fragment: ym,
		dithering_pars_fragment: wm,
		roughnessmap_fragment: Mm,
		roughnessmap_pars_fragment: Em,
		shadowmap_pars_fragment: Sm,
		shadowmap_pars_vertex: Lm,
		shadowmap_vertex: Tm,
		shadowmask_pars_fragment: Am,
		skinbase_vertex: Rm,
		skinning_pars_vertex: Cm,
		skinning_vertex: Pm,
		skinnormal_vertex: Im,
		specularmap_fragment: Dm,
		specularmap_pars_fragment: Nm,
		tonemapping_fragment: Om,
		tonemapping_pars_fragment: Fm,
		uv_pars_fragment: km,
		uv_pars_vertex: Um,
		uv_vertex: Bm,
		uv2_pars_fragment: Gm,
		uv2_pars_vertex: Vm,
		uv2_vertex: Hm,
		worldpos_vertex: Wm,
		background_frag: qm,
		background_vert: jm,
		cube_frag: Km,
		cube_vert: Jm,
		depth_frag: Xm,
		depth_vert: Ym,
		distanceRGBA_frag: Zm,
		distanceRGBA_vert: Qm,
		equirect_frag: $m,
		equirect_vert: zm,
		linedashed_frag: eg,
		linedashed_vert: tg,
		meshbasic_frag: ng,
		meshbasic_vert: rg,
		meshlambert_frag: ig,
		meshlambert_vert: ag,
		meshmatcap_frag: sg,
		meshmatcap_vert: og,
		meshphong_frag: ug,
		meshphong_vert: lg,
		meshphysical_frag: fg,
		meshphysical_vert: cg,
		normal_frag: hg,
		normal_vert: dg,
		points_frag: pg,
		points_vert: vg,
		shadow_frag: mg,
		shadow_vert: gg,
		sprite_frag: _g,
		sprite_vert: xg
	},
	ce = {
		common: {
			diffuse: { value: new he(15658734) },
			opacity: { value: 1 },
			map: { value: null },
			uvTransform: { value: new Et() },
			alphaMap: { value: null }
		},
		specularmap: { specularMap: { value: null } },
		envmap: {
			envMap: { value: null },
			flipEnvMap: { value: -1 },
			reflectivity: { value: 1 },
			refractionRatio: { value: 0.98 },
			maxMipLevel: { value: 0 }
		},
		aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
		lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
		emissivemap: { emissiveMap: { value: null } },
		bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
		normalmap: { normalMap: { value: null }, normalScale: { value: new W(1, 1) } },
		displacementmap: {
			displacementMap: { value: null },
			displacementScale: { value: 1 },
			displacementBias: { value: 0 }
		},
		roughnessmap: { roughnessMap: { value: null } },
		metalnessmap: { metalnessMap: { value: null } },
		gradientmap: { gradientMap: { value: null } },
		fog: {
			fogDensity: { value: 25e-5 },
			fogNear: { value: 1 },
			fogFar: { value: 2e3 },
			fogColor: { value: new he(16777215) }
		},
		lights: {
			ambientLightColor: { value: [] },
			lightProbe: { value: [] },
			directionalLights: {
				value: [],
				properties: {
					direction: {},
					color: {},
					shadow: {},
					shadowBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			directionalShadowMap: { value: [] },
			directionalShadowMatrix: { value: [] },
			spotLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					direction: {},
					distance: {},
					coneCos: {},
					penumbraCos: {},
					decay: {},
					shadow: {},
					shadowBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			spotShadowMap: { value: [] },
			spotShadowMatrix: { value: [] },
			pointLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					decay: {},
					distance: {},
					shadow: {},
					shadowBias: {},
					shadowRadius: {},
					shadowMapSize: {},
					shadowCameraNear: {},
					shadowCameraFar: {}
				}
			},
			pointShadowMap: { value: [] },
			pointShadowMatrix: { value: [] },
			hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
			rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }
		},
		points: {
			diffuse: { value: new he(15658734) },
			opacity: { value: 1 },
			size: { value: 1 },
			scale: { value: 1 },
			map: { value: null },
			uvTransform: { value: new Et() }
		},
		sprite: {
			diffuse: { value: new he(15658734) },
			opacity: { value: 1 },
			center: { value: new W(0.5, 0.5) },
			rotation: { value: 0 },
			map: { value: null },
			uvTransform: { value: new Et() }
		}
	},
	Qn = {
		basic: {
			uniforms: $t([ce.common, ce.specularmap, ce.envmap, ce.aomap, ce.lightmap, ce.fog]),
			vertexShader: Qe.meshbasic_vert,
			fragmentShader: Qe.meshbasic_frag
		},
		lambert: {
			uniforms: $t([
				ce.common,
				ce.specularmap,
				ce.envmap,
				ce.aomap,
				ce.lightmap,
				ce.emissivemap,
				ce.fog,
				ce.lights,
				{ emissive: { value: new he(0) } }
			]),
			vertexShader: Qe.meshlambert_vert,
			fragmentShader: Qe.meshlambert_frag
		},
		phong: {
			uniforms: $t([
				ce.common,
				ce.specularmap,
				ce.envmap,
				ce.aomap,
				ce.lightmap,
				ce.emissivemap,
				ce.bumpmap,
				ce.normalmap,
				ce.displacementmap,
				ce.gradientmap,
				ce.fog,
				ce.lights,
				{
					emissive: { value: new he(0) },
					specular: { value: new he(1118481) },
					shininess: { value: 30 }
				}
			]),
			vertexShader: Qe.meshphong_vert,
			fragmentShader: Qe.meshphong_frag
		},
		standard: {
			uniforms: $t([
				ce.common,
				ce.envmap,
				ce.aomap,
				ce.lightmap,
				ce.emissivemap,
				ce.bumpmap,
				ce.normalmap,
				ce.displacementmap,
				ce.roughnessmap,
				ce.metalnessmap,
				ce.fog,
				ce.lights,
				{
					emissive: { value: new he(0) },
					roughness: { value: 0.5 },
					metalness: { value: 0.5 },
					envMapIntensity: { value: 1 }
				}
			]),
			vertexShader: Qe.meshphysical_vert,
			fragmentShader: Qe.meshphysical_frag
		},
		matcap: {
			uniforms: $t([
				ce.common,
				ce.bumpmap,
				ce.normalmap,
				ce.displacementmap,
				ce.fog,
				{ matcap: { value: null } }
			]),
			vertexShader: Qe.meshmatcap_vert,
			fragmentShader: Qe.meshmatcap_frag
		},
		points: {
			uniforms: $t([ce.points, ce.fog]),
			vertexShader: Qe.points_vert,
			fragmentShader: Qe.points_frag
		},
		dashed: {
			uniforms: $t([
				ce.common,
				ce.fog,
				{ scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }
			]),
			vertexShader: Qe.linedashed_vert,
			fragmentShader: Qe.linedashed_frag
		},
		depth: {
			uniforms: $t([ce.common, ce.displacementmap]),
			vertexShader: Qe.depth_vert,
			fragmentShader: Qe.depth_frag
		},
		normal: {
			uniforms: $t([
				ce.common,
				ce.bumpmap,
				ce.normalmap,
				ce.displacementmap,
				{ opacity: { value: 1 } }
			]),
			vertexShader: Qe.normal_vert,
			fragmentShader: Qe.normal_frag
		},
		sprite: {
			uniforms: $t([ce.sprite, ce.fog]),
			vertexShader: Qe.sprite_vert,
			fragmentShader: Qe.sprite_frag
		},
		background: {
			uniforms: { uvTransform: { value: new Et() }, t2D: { value: null } },
			vertexShader: Qe.background_vert,
			fragmentShader: Qe.background_frag
		},
		cube: {
			uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } },
			vertexShader: Qe.cube_vert,
			fragmentShader: Qe.cube_frag
		},
		equirect: {
			uniforms: { tEquirect: { value: null } },
			vertexShader: Qe.equirect_vert,
			fragmentShader: Qe.equirect_frag
		},
		distanceRGBA: {
			uniforms: $t([
				ce.common,
				ce.displacementmap,
				{
					referencePosition: { value: new R() },
					nearDistance: { value: 1 },
					farDistance: { value: 1e3 }
				}
			]),
			vertexShader: Qe.distanceRGBA_vert,
			fragmentShader: Qe.distanceRGBA_frag
		},
		shadow: {
			uniforms: $t([ce.lights, ce.fog, { color: { value: new he(0) }, opacity: { value: 1 } }]),
			vertexShader: Qe.shadow_vert,
			fragmentShader: Qe.shadow_frag
		}
	};
Qn.physical = {
	uniforms: $t([
		Qn.standard.uniforms,
		{
			transparency: { value: 0 },
			clearcoat: { value: 0 },
			clearcoatRoughness: { value: 0 },
			sheen: { value: new he(0) },
			clearcoatNormalScale: { value: new W(1, 1) },
			clearcoatNormalMap: { value: null }
		}
	]),
	vertexShader: Qe.meshphysical_vert,
	fragmentShader: Qe.meshphysical_frag
};
function kl() {
	var e = null,
		t = !1,
		n = null;
	function r(i, a) {
		t !== !1 && (n(i, a), e.requestAnimationFrame(r));
	}
	return {
		start: function () {
			t !== !0 && n !== null && (e.requestAnimationFrame(r), (t = !0));
		},
		stop: function () {
			t = !1;
		},
		setAnimationLoop: function (i) {
			n = i;
		},
		setContext: function (i) {
			e = i;
		}
	};
}
function bg(e) {
	var t = new WeakMap();
	function n(o, u) {
		var l = o.array,
			f = o.dynamic ? 35048 : 35044,
			c = e.createBuffer();
		e.bindBuffer(u, c), e.bufferData(u, l, f), o.onUploadCallback();
		var h = 5126;
		return (
			l instanceof Float32Array
				? (h = 5126)
				: l instanceof Float64Array
					? console.warn('THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.')
					: l instanceof Uint16Array
						? (h = 5123)
						: l instanceof Int16Array
							? (h = 5122)
							: l instanceof Uint32Array
								? (h = 5125)
								: l instanceof Int32Array
									? (h = 5124)
									: l instanceof Int8Array
										? (h = 5120)
										: l instanceof Uint8Array && (h = 5121),
			{ buffer: c, type: h, bytesPerElement: l.BYTES_PER_ELEMENT, version: o.version }
		);
	}
	function r(o, u, l) {
		var f = u.array,
			c = u.updateRange;
		e.bindBuffer(l, o),
			u.dynamic === !1
				? e.bufferData(l, f, 35044)
				: c.count === -1
					? e.bufferSubData(l, 0, f)
					: c.count === 0
						? console.error(
								'THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.'
							)
						: (e.bufferSubData(
								l,
								c.offset * f.BYTES_PER_ELEMENT,
								f.subarray(c.offset, c.offset + c.count)
							),
							(c.count = -1));
	}
	function i(o) {
		return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
	}
	function a(o) {
		o.isInterleavedBufferAttribute && (o = o.data);
		var u = t.get(o);
		u && (e.deleteBuffer(u.buffer), t.delete(o));
	}
	function s(o, u) {
		o.isInterleavedBufferAttribute && (o = o.data);
		var l = t.get(o);
		l === void 0
			? t.set(o, n(o, u))
			: l.version < o.version && (r(l.buffer, o, u), (l.version = o.version));
	}
	return { get: i, remove: a, update: s };
}
function Ys(e, t, n, r) {
	Re.call(this),
		(this.type = 'PlaneGeometry'),
		(this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r }),
		this.fromBufferGeometry(new Ci(e, t, n, r)),
		this.mergeVertices();
}
Ys.prototype = Object.create(Re.prototype);
Ys.prototype.constructor = Ys;
function Ci(e, t, n, r) {
	ae.call(this),
		(this.type = 'PlaneBufferGeometry'),
		(this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r }),
		(e = e || 1),
		(t = t || 1);
	var i = e / 2,
		a = t / 2,
		s = Math.floor(n) || 1,
		o = Math.floor(r) || 1,
		u = s + 1,
		l = o + 1,
		f = e / s,
		c = t / o,
		h,
		p,
		d = [],
		m = [],
		v = [],
		g = [];
	for (p = 0; p < l; p++) {
		var x = p * c - a;
		for (h = 0; h < u; h++) {
			var M = h * f - i;
			m.push(M, -x, 0), v.push(0, 0, 1), g.push(h / s), g.push(1 - p / o);
		}
	}
	for (p = 0; p < o; p++)
		for (h = 0; h < s; h++) {
			var _ = h + u * p,
				y = h + u * (p + 1),
				L = h + 1 + u * (p + 1),
				C = h + 1 + u * p;
			d.push(_, y, C), d.push(y, L, C);
		}
	this.setIndex(d),
		this.addAttribute('position', new re(m, 3)),
		this.addAttribute('normal', new re(v, 3)),
		this.addAttribute('uv', new re(g, 2));
}
Ci.prototype = Object.create(ae.prototype);
Ci.prototype.constructor = Ci;
function yg(e, t, n, r) {
	var i = new he(0),
		a = 0,
		s,
		o,
		u = null,
		l = 0;
	function f(h, p, d, m) {
		var v = p.background,
			g = e.vr,
			x = g.getSession && g.getSession();
		if (
			(x && x.environmentBlendMode === 'additive' && (v = null),
			v === null
				? (c(i, a), (u = null), (l = 0))
				: v && v.isColor && (c(v, 1), (m = !0), (u = null), (l = 0)),
			(e.autoClear || m) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
			v && (v.isCubeTexture || v.isWebGLRenderTargetCube))
		) {
			o === void 0 &&
				((o = new wt(
					new Do(1, 1, 1),
					new Ot({
						type: 'BackgroundCubeMaterial',
						uniforms: Ai(Qn.cube.uniforms),
						vertexShader: Qn.cube.vertexShader,
						fragmentShader: Qn.cube.fragmentShader,
						side: Tt,
						depthTest: !1,
						depthWrite: !1,
						fog: !1
					})
				)),
				o.geometry.removeAttribute('normal'),
				o.geometry.removeAttribute('uv'),
				(o.onBeforeRender = function (_, y, L) {
					this.matrixWorld.copyPosition(L.matrixWorld);
				}),
				Object.defineProperty(o.material, 'map', {
					get: function () {
						return this.uniforms.tCube.value;
					}
				}),
				n.update(o));
			var M = v.isWebGLRenderTargetCube ? v.texture : v;
			(o.material.uniforms.tCube.value = M),
				(o.material.uniforms.tFlip.value = v.isWebGLRenderTargetCube ? 1 : -1),
				(u !== v || l !== M.version) && ((o.material.needsUpdate = !0), (u = v), (l = M.version)),
				h.unshift(o, o.geometry, o.material, 0, 0, null);
		} else
			v &&
				v.isTexture &&
				(s === void 0 &&
					((s = new wt(
						new Ci(2, 2),
						new Ot({
							type: 'BackgroundMaterial',
							uniforms: Ai(Qn.background.uniforms),
							vertexShader: Qn.background.vertexShader,
							fragmentShader: Qn.background.fragmentShader,
							side: Qa,
							depthTest: !1,
							depthWrite: !1,
							fog: !1
						})
					)),
					s.geometry.removeAttribute('normal'),
					Object.defineProperty(s.material, 'map', {
						get: function () {
							return this.uniforms.t2D.value;
						}
					}),
					n.update(s)),
				(s.material.uniforms.t2D.value = v),
				v.matrixAutoUpdate === !0 && v.updateMatrix(),
				s.material.uniforms.uvTransform.value.copy(v.matrix),
				(u !== v || l !== v.version) && ((s.material.needsUpdate = !0), (u = v), (l = v.version)),
				h.unshift(s, s.geometry, s.material, 0, 0, null));
	}
	function c(h, p) {
		t.buffers.color.setClear(h.r, h.g, h.b, p, r);
	}
	return {
		getClearColor: function () {
			return i;
		},
		setClearColor: function (h, p) {
			i.set(h), (a = p !== void 0 ? p : 1), c(i, a);
		},
		getClearAlpha: function () {
			return a;
		},
		setClearAlpha: function (h) {
			(a = h), c(i, a);
		},
		render: f
	};
}
function wg(e, t, n, r) {
	var i;
	function a(u) {
		i = u;
	}
	function s(u, l) {
		e.drawArrays(i, u, l), n.update(l, i);
	}
	function o(u, l, f) {
		var c, h;
		if (r.isWebGL2) (c = e), (h = 'drawArraysInstanced');
		else if (
			((c = t.get('ANGLE_instanced_arrays')), (h = 'drawArraysInstancedANGLE'), c === null)
		) {
			console.error(
				'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
			);
			return;
		}
		c[h](i, l, f, u.maxInstancedCount), n.update(f, i, u.maxInstancedCount);
	}
	(this.setMode = a), (this.render = s), (this.renderInstances = o);
}
function Mg(e, t, n) {
	var r;
	function i() {
		if (r !== void 0) return r;
		var P = t.get('EXT_texture_filter_anisotropic');
		return P !== null ? (r = e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) : (r = 0), r;
	}
	function a(P) {
		if (P === 'highp') {
			if (
				e.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
				e.getShaderPrecisionFormat(35632, 36338).precision > 0
			)
				return 'highp';
			P = 'mediump';
		}
		return P === 'mediump' &&
			e.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
			e.getShaderPrecisionFormat(35632, 36337).precision > 0
			? 'mediump'
			: 'lowp';
	}
	var s = typeof WebGL2RenderingContext < 'u' && e instanceof WebGL2RenderingContext,
		o = n.precision !== void 0 ? n.precision : 'highp',
		u = a(o);
	u !== o &&
		(console.warn('THREE.WebGLRenderer:', o, 'not supported, using', u, 'instead.'), (o = u));
	var l = n.logarithmicDepthBuffer === !0,
		f = e.getParameter(34930),
		c = e.getParameter(35660),
		h = e.getParameter(3379),
		p = e.getParameter(34076),
		d = e.getParameter(34921),
		m = e.getParameter(36347),
		v = e.getParameter(36348),
		g = e.getParameter(36349),
		x = c > 0,
		M = s || !!t.get('OES_texture_float'),
		_ = x && M,
		y = s ? e.getParameter(36183) : 0,
		L = t.get('OVR_multiview2'),
		C = s && !!L && !e.getContextAttributes().antialias,
		T = C ? e.getParameter(L.MAX_VIEWS_OVR) : 0;
	return {
		isWebGL2: s,
		getMaxAnisotropy: i,
		getMaxPrecision: a,
		precision: o,
		logarithmicDepthBuffer: l,
		maxTextures: f,
		maxVertexTextures: c,
		maxTextureSize: h,
		maxCubemapSize: p,
		maxAttributes: d,
		maxVertexUniforms: m,
		maxVaryings: v,
		maxFragmentUniforms: g,
		vertexTextures: x,
		floatFragmentTextures: M,
		floatVertexTextures: _,
		maxSamples: y,
		multiview: C,
		maxMultiviewViews: T
	};
}
function Eg() {
	var e = this,
		t = null,
		n = 0,
		r = !1,
		i = !1,
		a = new Zn(),
		s = new Et(),
		o = { value: null, needsUpdate: !1 };
	(this.uniform = o),
		(this.numPlanes = 0),
		(this.numIntersection = 0),
		(this.init = function (f, c, h) {
			var p = f.length !== 0 || c || n !== 0 || r;
			return (r = c), (t = l(f, h, 0)), (n = f.length), p;
		}),
		(this.beginShadows = function () {
			(i = !0), l(null);
		}),
		(this.endShadows = function () {
			(i = !1), u();
		}),
		(this.setState = function (f, c, h, p, d, m) {
			if (!r || f === null || f.length === 0 || (i && !h)) i ? l(null) : u();
			else {
				var v = i ? 0 : n,
					g = v * 4,
					x = d.clippingState || null;
				(o.value = x), (x = l(f, p, g, m));
				for (var M = 0; M !== g; ++M) x[M] = t[M];
				(d.clippingState = x),
					(this.numIntersection = c ? this.numPlanes : 0),
					(this.numPlanes += v);
			}
		});
	function u() {
		o.value !== t && ((o.value = t), (o.needsUpdate = n > 0)),
			(e.numPlanes = n),
			(e.numIntersection = 0);
	}
	function l(f, c, h, p) {
		var d = f !== null ? f.length : 0,
			m = null;
		if (d !== 0) {
			if (((m = o.value), p !== !0 || m === null)) {
				var v = h + d * 4,
					g = c.matrixWorldInverse;
				s.getNormalMatrix(g), (m === null || m.length < v) && (m = new Float32Array(v));
				for (var x = 0, M = h; x !== d; ++x, M += 4)
					a.copy(f[x]).applyMatrix4(g, s), a.normal.toArray(m, M), (m[M + 3] = a.constant);
			}
			(o.value = m), (o.needsUpdate = !0);
		}
		return (e.numPlanes = d), m;
	}
}
function Sg(e) {
	var t = {};
	return {
		get: function (n) {
			if (t[n] !== void 0) return t[n];
			var r;
			switch (n) {
				case 'WEBGL_depth_texture':
					r =
						e.getExtension('WEBGL_depth_texture') ||
						e.getExtension('MOZ_WEBGL_depth_texture') ||
						e.getExtension('WEBKIT_WEBGL_depth_texture');
					break;
				case 'EXT_texture_filter_anisotropic':
					r =
						e.getExtension('EXT_texture_filter_anisotropic') ||
						e.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
						e.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
					break;
				case 'WEBGL_compressed_texture_s3tc':
					r =
						e.getExtension('WEBGL_compressed_texture_s3tc') ||
						e.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
						e.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
					break;
				case 'WEBGL_compressed_texture_pvrtc':
					r =
						e.getExtension('WEBGL_compressed_texture_pvrtc') ||
						e.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
					break;
				default:
					r = e.getExtension(n);
			}
			return (
				r === null && console.warn('THREE.WebGLRenderer: ' + n + ' extension not supported.'),
				(t[n] = r),
				r
			);
		}
	};
}
function Lg(e, t, n) {
	var r = new WeakMap(),
		i = new WeakMap();
	function a(f) {
		var c = f.target,
			h = r.get(c);
		h.index !== null && t.remove(h.index);
		for (var p in h.attributes) t.remove(h.attributes[p]);
		c.removeEventListener('dispose', a), r.delete(c);
		var d = i.get(h);
		d && (t.remove(d), i.delete(h)), n.memory.geometries--;
	}
	function s(f, c) {
		var h = r.get(c);
		return (
			h ||
			(c.addEventListener('dispose', a),
			c.isBufferGeometry
				? (h = c)
				: c.isGeometry &&
					(c._bufferGeometry === void 0 && (c._bufferGeometry = new ae().setFromObject(f)),
					(h = c._bufferGeometry)),
			r.set(c, h),
			n.memory.geometries++,
			h)
		);
	}
	function o(f) {
		var c = f.index,
			h = f.attributes;
		c !== null && t.update(c, 34963);
		for (var p in h) t.update(h[p], 34962);
		var d = f.morphAttributes;
		for (var p in d) for (var m = d[p], v = 0, g = m.length; v < g; v++) t.update(m[v], 34962);
	}
	function u(f) {
		var c = [],
			h = f.index,
			p = f.attributes.position,
			d = 0;
		if (h !== null) {
			var m = h.array;
			d = h.version;
			for (var v = 0, g = m.length; v < g; v += 3) {
				var x = m[v + 0],
					M = m[v + 1],
					_ = m[v + 2];
				c.push(x, M, M, _, _, x);
			}
		} else {
			var m = p.array;
			d = p.version;
			for (var v = 0, g = m.length / 3 - 1; v < g; v += 3) {
				var x = v + 0,
					M = v + 1,
					_ = v + 2;
				c.push(x, M, M, _, _, x);
			}
		}
		var y = new (th(c) > 65535 ? va : pa)(c, 1);
		(y.version = d), t.update(y, 34963);
		var L = i.get(f);
		L && t.remove(L), i.set(f, y);
	}
	function l(f) {
		var c = i.get(f);
		if (c) {
			var h = f.index;
			h !== null && c.version < h.version && u(f);
		} else u(f);
		return i.get(f);
	}
	return { get: s, update: o, getWireframeAttribute: l };
}
function Tg(e, t, n, r) {
	var i;
	function a(c) {
		i = c;
	}
	var s, o;
	function u(c) {
		(s = c.type), (o = c.bytesPerElement);
	}
	function l(c, h) {
		e.drawElements(i, h, s, c * o), n.update(h, i);
	}
	function f(c, h, p) {
		var d, m;
		if (r.isWebGL2) (d = e), (m = 'drawElementsInstanced');
		else if (
			((d = t.get('ANGLE_instanced_arrays')), (m = 'drawElementsInstancedANGLE'), d === null)
		) {
			console.error(
				'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
			);
			return;
		}
		d[m](i, p, s, h * o, c.maxInstancedCount), n.update(p, i, c.maxInstancedCount);
	}
	(this.setMode = a), (this.setIndex = u), (this.render = l), (this.renderInstances = f);
}
function Ag(e) {
	var t = { geometries: 0, textures: 0 },
		n = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
	function r(a, s, o) {
		switch (((o = o || 1), n.calls++, s)) {
			case 4:
				n.triangles += o * (a / 3);
				break;
			case 5:
			case 6:
				n.triangles += o * (a - 2);
				break;
			case 1:
				n.lines += o * (a / 2);
				break;
			case 3:
				n.lines += o * (a - 1);
				break;
			case 2:
				n.lines += o * a;
				break;
			case 0:
				n.points += o * a;
				break;
			default:
				console.error('THREE.WebGLInfo: Unknown draw mode:', s);
				break;
		}
	}
	function i() {
		n.frame++, (n.calls = 0), (n.triangles = 0), (n.points = 0), (n.lines = 0);
	}
	return { memory: t, render: n, programs: null, autoReset: !0, reset: i, update: r };
}
function Rg(e, t) {
	return Math.abs(t[1]) - Math.abs(e[1]);
}
function Cg(e) {
	var t = {},
		n = new Float32Array(8);
	function r(i, a, s, o) {
		var u = i.morphTargetInfluences,
			l = u.length,
			f = t[a.id];
		if (f === void 0) {
			f = [];
			for (var c = 0; c < l; c++) f[c] = [c, 0];
			t[a.id] = f;
		}
		for (
			var h = s.morphTargets && a.morphAttributes.position,
				p = s.morphNormals && a.morphAttributes.normal,
				c = 0;
			c < l;
			c++
		) {
			var d = f[c];
			d[1] !== 0 &&
				(h && a.removeAttribute('morphTarget' + c), p && a.removeAttribute('morphNormal' + c));
		}
		for (var c = 0; c < l; c++) {
			var d = f[c];
			(d[0] = c), (d[1] = u[c]);
		}
		f.sort(Rg);
		for (var c = 0; c < 8; c++) {
			var d = f[c];
			if (d) {
				var m = d[0],
					v = d[1];
				if (v) {
					h && a.addAttribute('morphTarget' + c, h[m]),
						p && a.addAttribute('morphNormal' + c, p[m]),
						(n[c] = v);
					continue;
				}
			}
			n[c] = 0;
		}
		o.getUniforms().setValue(e, 'morphTargetInfluences', n);
	}
	return { update: r };
}
function Pg(e, t) {
	var n = {};
	function r(a) {
		var s = t.render.frame,
			o = a.geometry,
			u = e.get(a, o);
		return n[u.id] !== s && (o.isGeometry && u.updateFromObject(a), e.update(u), (n[u.id] = s)), u;
	}
	function i() {
		n = {};
	}
	return { update: r, dispose: i };
}
function xr(e, t, n, r, i, a, s, o, u, l) {
	(e = e !== void 0 ? e : []),
		(t = t !== void 0 ? t : Tl),
		(s = s !== void 0 ? s : jr),
		lt.call(this, e, t, n, r, i, a, s, o, u, l),
		(this.flipY = !1);
}
xr.prototype = Object.create(lt.prototype);
xr.prototype.constructor = xr;
xr.prototype.isCubeTexture = !0;
Object.defineProperty(xr.prototype, 'images', {
	get: function () {
		return this.image;
	},
	set: function (e) {
		this.image = e;
	}
});
function ga(e, t, n, r) {
	lt.call(this, null),
		(this.image = { data: e, width: t, height: n, depth: r }),
		(this.magFilter = Dt),
		(this.minFilter = Dt),
		(this.wrapR = Kt),
		(this.generateMipmaps = !1),
		(this.flipY = !1),
		(this.needsUpdate = !0);
}
ga.prototype = Object.create(lt.prototype);
ga.prototype.constructor = ga;
ga.prototype.isDataTexture2DArray = !0;
function _a(e, t, n, r) {
	lt.call(this, null),
		(this.image = { data: e, width: t, height: n, depth: r }),
		(this.magFilter = Dt),
		(this.minFilter = Dt),
		(this.wrapR = Kt),
		(this.generateMipmaps = !1),
		(this.flipY = !1),
		(this.needsUpdate = !0);
}
_a.prototype = Object.create(lt.prototype);
_a.prototype.constructor = _a;
_a.prototype.isDataTexture3D = !0;
var rh = new lt(),
	Ig = new ga(),
	Dg = new _a(),
	ih = new xr(),
	_f = [],
	xf = [],
	bf = new Float32Array(16),
	yf = new Float32Array(9),
	wf = new Float32Array(4);
function Ji(e, t, n) {
	var r = e[0];
	if (r <= 0 || r > 0) return e;
	var i = t * n,
		a = _f[i];
	if ((a === void 0 && ((a = new Float32Array(i)), (_f[i] = a)), t !== 0)) {
		r.toArray(a, 0);
		for (var s = 1, o = 0; s !== t; ++s) (o += n), e[s].toArray(a, o);
	}
	return a;
}
function dn(e, t) {
	if (e.length !== t.length) return !1;
	for (var n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function en(e, t) {
	for (var n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function ah(e, t) {
	var n = xf[t];
	n === void 0 && ((n = new Int32Array(t)), (xf[t] = n));
	for (var r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function Ng(e, t) {
	var n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), (n[0] = t));
}
function Og(e, t) {
	var n = this.cache;
	if (t.x !== void 0)
		(n[0] !== t.x || n[1] !== t.y) &&
			(e.uniform2f(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
	else {
		if (dn(n, t)) return;
		e.uniform2fv(this.addr, t), en(n, t);
	}
}
function Fg(e, t) {
	var n = this.cache;
	if (t.x !== void 0)
		(n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
			(e.uniform3f(this.addr, t.x, t.y, t.z), (n[0] = t.x), (n[1] = t.y), (n[2] = t.z));
	else if (t.r !== void 0)
		(n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) &&
			(e.uniform3f(this.addr, t.r, t.g, t.b), (n[0] = t.r), (n[1] = t.g), (n[2] = t.b));
	else {
		if (dn(n, t)) return;
		e.uniform3fv(this.addr, t), en(n, t);
	}
}
function kg(e, t) {
	var n = this.cache;
	if (t.x !== void 0)
		(n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
			(e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
			(n[0] = t.x),
			(n[1] = t.y),
			(n[2] = t.z),
			(n[3] = t.w));
	else {
		if (dn(n, t)) return;
		e.uniform4fv(this.addr, t), en(n, t);
	}
}
function Ug(e, t) {
	var n = this.cache,
		r = t.elements;
	if (r === void 0) {
		if (dn(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), en(n, t);
	} else {
		if (dn(n, r)) return;
		wf.set(r), e.uniformMatrix2fv(this.addr, !1, wf), en(n, r);
	}
}
function Bg(e, t) {
	var n = this.cache,
		r = t.elements;
	if (r === void 0) {
		if (dn(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), en(n, t);
	} else {
		if (dn(n, r)) return;
		yf.set(r), e.uniformMatrix3fv(this.addr, !1, yf), en(n, r);
	}
}
function Gg(e, t) {
	var n = this.cache,
		r = t.elements;
	if (r === void 0) {
		if (dn(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), en(n, t);
	} else {
		if (dn(n, r)) return;
		bf.set(r), e.uniformMatrix4fv(this.addr, !1, bf), en(n, r);
	}
}
function Vg(e, t, n) {
	var r = this.cache,
		i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)), n.safeSetTexture2D(t || rh, i);
}
function Hg(e, t, n) {
	var r = this.cache,
		i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)), n.setTexture2DArray(t || Ig, i);
}
function Wg(e, t, n) {
	var r = this.cache,
		i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)), n.setTexture3D(t || Dg, i);
}
function qg(e, t, n) {
	var r = this.cache,
		i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)), n.safeSetTextureCube(t || ih, i);
}
function jg(e, t) {
	var n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), (n[0] = t));
}
function Kg(e, t) {
	var n = this.cache;
	dn(n, t) || (e.uniform2iv(this.addr, t), en(n, t));
}
function Jg(e, t) {
	var n = this.cache;
	dn(n, t) || (e.uniform3iv(this.addr, t), en(n, t));
}
function Xg(e, t) {
	var n = this.cache;
	dn(n, t) || (e.uniform4iv(this.addr, t), en(n, t));
}
function Yg(e) {
	switch (e) {
		case 5126:
			return Ng;
		case 35664:
			return Og;
		case 35665:
			return Fg;
		case 35666:
			return kg;
		case 35674:
			return Ug;
		case 35675:
			return Bg;
		case 35676:
			return Gg;
		case 35678:
		case 36198:
			return Vg;
		case 35679:
			return Wg;
		case 35680:
			return qg;
		case 36289:
			return Hg;
		case 5124:
		case 35670:
			return jg;
		case 35667:
		case 35671:
			return Kg;
		case 35668:
		case 35672:
			return Jg;
		case 35669:
		case 35673:
			return Xg;
	}
}
function Zg(e, t) {
	e.uniform1fv(this.addr, t);
}
function Qg(e, t) {
	e.uniform1iv(this.addr, t);
}
function $g(e, t) {
	e.uniform2iv(this.addr, t);
}
function zg(e, t) {
	e.uniform3iv(this.addr, t);
}
function e0(e, t) {
	e.uniform4iv(this.addr, t);
}
function t0(e, t) {
	var n = Ji(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function n0(e, t) {
	var n = Ji(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function r0(e, t) {
	var n = Ji(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function i0(e, t) {
	var n = Ji(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function a0(e, t) {
	var n = Ji(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function s0(e, t) {
	var n = Ji(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function o0(e, t, n) {
	var r = t.length,
		i = ah(n, r);
	e.uniform1iv(this.addr, i);
	for (var a = 0; a !== r; ++a) n.safeSetTexture2D(t[a] || rh, i[a]);
}
function u0(e, t, n) {
	var r = t.length,
		i = ah(n, r);
	e.uniform1iv(this.addr, i);
	for (var a = 0; a !== r; ++a) n.safeSetTextureCube(t[a] || ih, i[a]);
}
function l0(e) {
	switch (e) {
		case 5126:
			return Zg;
		case 35664:
			return t0;
		case 35665:
			return n0;
		case 35666:
			return r0;
		case 35674:
			return i0;
		case 35675:
			return a0;
		case 35676:
			return s0;
		case 35678:
			return o0;
		case 35680:
			return u0;
		case 5124:
		case 35670:
			return Qg;
		case 35667:
		case 35671:
			return $g;
		case 35668:
		case 35672:
			return zg;
		case 35669:
		case 35673:
			return e0;
	}
}
function f0(e, t, n) {
	(this.id = e), (this.addr = n), (this.cache = []), (this.setValue = Yg(t.type));
}
function sh(e, t, n) {
	(this.id = e),
		(this.addr = n),
		(this.cache = []),
		(this.size = t.size),
		(this.setValue = l0(t.type));
}
sh.prototype.updateCache = function (e) {
	var t = this.cache;
	e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)),
		en(t, e);
};
function oh(e) {
	(this.id = e), (this.seq = []), (this.map = {});
}
oh.prototype.setValue = function (e, t, n) {
	for (var r = this.seq, i = 0, a = r.length; i !== a; ++i) {
		var s = r[i];
		s.setValue(e, t[s.id], n);
	}
};
var fu = /([\w\d_]+)(\])?(\[|\.)?/g;
function Mf(e, t) {
	e.seq.push(t), (e.map[t.id] = t);
}
function c0(e, t, n) {
	var r = e.name,
		i = r.length;
	for (fu.lastIndex = 0; ; ) {
		var a = fu.exec(r),
			s = fu.lastIndex,
			o = a[1],
			u = a[2] === ']',
			l = a[3];
		if ((u && (o = o | 0), l === void 0 || (l === '[' && s + 2 === i))) {
			Mf(n, l === void 0 ? new f0(o, e, t) : new sh(o, e, t));
			break;
		} else {
			var f = n.map,
				c = f[o];
			c === void 0 && ((c = new oh(o)), Mf(n, c)), (n = c);
		}
	}
}
function mr(e, t) {
	(this.seq = []), (this.map = {});
	for (var n = e.getProgramParameter(t, 35718), r = 0; r < n; ++r) {
		var i = e.getActiveUniform(t, r),
			a = e.getUniformLocation(t, i.name);
		c0(i, a, this);
	}
}
mr.prototype.setValue = function (e, t, n, r) {
	var i = this.map[t];
	i !== void 0 && i.setValue(e, n, r);
};
mr.prototype.setOptional = function (e, t, n) {
	var r = t[n];
	r !== void 0 && this.setValue(e, n, r);
};
mr.upload = function (e, t, n, r) {
	for (var i = 0, a = t.length; i !== a; ++i) {
		var s = t[i],
			o = n[s.id];
		o.needsUpdate !== !1 && s.setValue(e, o.value, r);
	}
};
mr.seqWithValue = function (e, t) {
	for (var n = [], r = 0, i = e.length; r !== i; ++r) {
		var a = e[r];
		a.id in t && n.push(a);
	}
	return n;
};
function Ef(e, t, n) {
	var r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var h0 = 0;
function d0(e) {
	for (
		var t = e.split(`
`),
			n = 0;
		n < t.length;
		n++
	)
		t[n] = n + 1 + ': ' + t[n];
	return t.join(`
`);
}
function uh(e) {
	switch (e) {
		case Ks:
			return ['Linear', '( value )'];
		case Pp:
			return ['sRGB', '( value )'];
		case Ip:
			return ['RGBE', '( value )'];
		case Np:
			return ['RGBM', '( value, 7.0 )'];
		case Op:
			return ['RGBM', '( value, 16.0 )'];
		case Fp:
			return ['RGBD', '( value, 256.0 )'];
		case $c:
			return ['Gamma', '( value, float( GAMMA_FACTOR ) )'];
		case Dp:
			return ['LogLuv', '( value )'];
		default:
			throw new Error('unsupported encoding: ' + e);
	}
}
function Sf(e, t, n) {
	var r = e.getShaderParameter(t, 35713),
		i = e.getShaderInfoLog(t).trim();
	if (r && i === '') return '';
	var a = e.getShaderSource(t);
	return (
		'THREE.WebGLShader: gl.getShaderInfoLog() ' +
		n +
		`
` +
		i +
		d0(a)
	);
}
function ds(e, t) {
	var n = uh(t);
	return 'vec4 ' + e + '( vec4 value ) { return ' + n[0] + 'ToLinear' + n[1] + '; }';
}
function p0(e, t) {
	var n = uh(t);
	return 'vec4 ' + e + '( vec4 value ) { return LinearTo' + n[0] + n[1] + '; }';
}
function v0(e, t) {
	var n;
	switch (t) {
		case Jc:
			n = 'Linear';
			break;
		case Qd:
			n = 'Reinhard';
			break;
		case $d:
			n = 'Uncharted2';
			break;
		case zd:
			n = 'OptimizedCineon';
			break;
		case ep:
			n = 'ACESFilmic';
			break;
		default:
			throw new Error('unsupported toneMapping: ' + t);
	}
	return 'vec3 ' + e + '( vec3 color ) { return ' + n + 'ToneMapping( color ); }';
}
function m0(e, t, n) {
	e = e || {};
	var r = [
		e.derivatives ||
		t.envMapCubeUV ||
		t.bumpMap ||
		t.tangentSpaceNormalMap ||
		t.clearcoatNormalMap ||
		t.flatShading
			? '#extension GL_OES_standard_derivatives : enable'
			: '',
		(e.fragDepth || t.logarithmicDepthBuffer) && n.get('EXT_frag_depth')
			? '#extension GL_EXT_frag_depth : enable'
			: '',
		e.drawBuffers && n.get('WEBGL_draw_buffers') ? '#extension GL_EXT_draw_buffers : require' : '',
		(e.shaderTextureLOD || t.envMap) && n.get('EXT_shader_texture_lod')
			? '#extension GL_EXT_shader_texture_lod : enable'
			: ''
	];
	return r.filter(na).join(`
`);
}
function g0(e) {
	var t = [];
	for (var n in e) {
		var r = e[n];
		r !== !1 && t.push('#define ' + n + ' ' + r);
	}
	return t.join(`
`);
}
function _0(e, t) {
	for (var n = {}, r = e.getProgramParameter(t, 35721), i = 0; i < r; i++) {
		var a = e.getActiveAttrib(t, i),
			s = a.name;
		n[s] = e.getAttribLocation(t, s);
	}
	return n;
}
function na(e) {
	return e !== '';
}
function Lf(e, t) {
	return e
		.replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
		.replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
		.replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
		.replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
		.replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
		.replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
		.replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
		.replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Tf(e, t) {
	return e
		.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
		.replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
function Ou(e) {
	var t = /^[ \t]*#include +<([\w\d./]+)>/gm;
	function n(r, i) {
		var a = Qe[i];
		if (a === void 0) throw new Error('Can not resolve #include <' + i + '>');
		return Ou(a);
	}
	return e.replace(t, n);
}
function Af(e) {
	var t =
		/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
	function n(r, i, a, s) {
		for (var o = '', u = parseInt(i); u < parseInt(a); u++)
			o += s.replace(/\[ i \]/g, '[ ' + u + ' ]').replace(/UNROLLED_LOOP_INDEX/g, u);
		return o;
	}
	return e.replace(t, n);
}
function Rf(e) {
	var t =
		'precision ' +
		e.precision +
		` float;
precision ` +
		e.precision +
		' int;';
	return (
		e.precision === 'highp'
			? (t += `
#define HIGH_PRECISION;`)
			: e.precision === 'mediump'
				? (t += `
#define MEDIUM_PRECISION;`)
				: e.precision === 'lowp' &&
					(t += `
#define LOW_PRECISION;`),
		t
	);
}
function x0(e) {
	var t = 'SHADOWMAP_TYPE_BASIC';
	return (
		e.shadowMapType === Hc
			? (t = 'SHADOWMAP_TYPE_PCF')
			: e.shadowMapType === Ad
				? (t = 'SHADOWMAP_TYPE_PCF_SOFT')
				: e.shadowMapType === ta && (t = 'SHADOWMAP_TYPE_VSM'),
		t
	);
}
function b0(e, t) {
	var n = 'ENVMAP_TYPE_CUBE';
	if (e.envMap)
		switch (t.envMap.mapping) {
			case Tl:
			case Al:
				n = 'ENVMAP_TYPE_CUBE';
				break;
			case Cl:
			case Pl:
				n = 'ENVMAP_TYPE_CUBE_UV';
				break;
			case Xc:
			case Rl:
				n = 'ENVMAP_TYPE_EQUIREC';
				break;
			case Yc:
				n = 'ENVMAP_TYPE_SPHERE';
				break;
		}
	return n;
}
function y0(e, t) {
	var n = 'ENVMAP_MODE_REFLECTION';
	if (e.envMap)
		switch (t.envMap.mapping) {
			case Al:
			case Rl:
				n = 'ENVMAP_MODE_REFRACTION';
				break;
		}
	return n;
}
function w0(e, t) {
	var n = 'ENVMAP_BLENDING_MULTIPLY';
	if (e.envMap)
		switch (t.combine) {
			case Po:
				n = 'ENVMAP_BLENDING_MULTIPLY';
				break;
			case Yd:
				n = 'ENVMAP_BLENDING_MIX';
				break;
			case Zd:
				n = 'ENVMAP_BLENDING_ADD';
				break;
		}
	return n;
}
function M0(e, t, n, r, i, a) {
	var s = e.getContext(),
		o = r.defines,
		u = i.vertexShader,
		l = i.fragmentShader,
		f = x0(a),
		c = b0(a, r),
		h = y0(a, r),
		p = w0(a, r),
		d = e.gammaFactor > 0 ? e.gammaFactor : 1,
		m = a.isWebGL2 ? '' : m0(r.extensions, a, t),
		v = g0(o),
		g = s.createProgram(),
		x,
		M,
		_ = e.getRenderTarget(),
		y = _ && _.isWebGLMultiviewRenderTarget ? _.numViews : 0;
	if (
		(r.isRawShaderMaterial
			? ((x = [v].filter(na).join(`
`)),
				x.length > 0 &&
					(x += `
`),
				(M = [m, v].filter(na).join(`
`)),
				M.length > 0 &&
					(M += `
`))
			: ((x = [
					Rf(a),
					'#define SHADER_NAME ' + i.name,
					v,
					a.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',
					'#define GAMMA_FACTOR ' + d,
					'#define MAX_BONES ' + a.maxBones,
					a.useFog && a.fog ? '#define USE_FOG' : '',
					a.useFog && a.fogExp2 ? '#define FOG_EXP2' : '',
					a.map ? '#define USE_MAP' : '',
					a.envMap ? '#define USE_ENVMAP' : '',
					a.envMap ? '#define ' + h : '',
					a.lightMap ? '#define USE_LIGHTMAP' : '',
					a.aoMap ? '#define USE_AOMAP' : '',
					a.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
					a.bumpMap ? '#define USE_BUMPMAP' : '',
					a.normalMap ? '#define USE_NORMALMAP' : '',
					a.normalMap && a.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '',
					a.normalMap && a.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '',
					a.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
					a.displacementMap && a.supportsVertexTextures ? '#define USE_DISPLACEMENTMAP' : '',
					a.specularMap ? '#define USE_SPECULARMAP' : '',
					a.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
					a.metalnessMap ? '#define USE_METALNESSMAP' : '',
					a.alphaMap ? '#define USE_ALPHAMAP' : '',
					a.vertexTangents ? '#define USE_TANGENT' : '',
					a.vertexColors ? '#define USE_COLOR' : '',
					a.vertexUvs ? '#define USE_UV' : '',
					a.flatShading ? '#define FLAT_SHADED' : '',
					a.skinning ? '#define USE_SKINNING' : '',
					a.useVertexTexture ? '#define BONE_TEXTURE' : '',
					a.morphTargets ? '#define USE_MORPHTARGETS' : '',
					a.morphNormals && a.flatShading === !1 ? '#define USE_MORPHNORMALS' : '',
					a.doubleSided ? '#define DOUBLE_SIDED' : '',
					a.flipSided ? '#define FLIP_SIDED' : '',
					a.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
					a.shadowMapEnabled ? '#define ' + f : '',
					a.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
					a.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
					a.logarithmicDepthBuffer && (a.isWebGL2 || t.get('EXT_frag_depth'))
						? '#define USE_LOGDEPTHBUF_EXT'
						: '',
					'uniform mat4 modelMatrix;',
					'uniform vec3 cameraPosition;',
					y > 0
						? [
								'uniform mat4 modelViewMatrices[' + y + '];',
								'uniform mat3 normalMatrices[' + y + '];',
								'uniform mat4 viewMatrices[' + y + '];',
								'uniform mat4 projectionMatrices[' + y + '];',
								'#define modelViewMatrix modelViewMatrices[VIEW_ID]',
								'#define normalMatrix normalMatrices[VIEW_ID]',
								'#define viewMatrix viewMatrices[VIEW_ID]',
								'#define projectionMatrix projectionMatrices[VIEW_ID]'
							].join(`
`)
						: [
								'uniform mat4 modelViewMatrix;',
								'uniform mat4 projectionMatrix;',
								'uniform mat4 viewMatrix;',
								'uniform mat3 normalMatrix;'
							].join(`
`),
					'attribute vec3 position;',
					'attribute vec3 normal;',
					'attribute vec2 uv;',
					'#ifdef USE_TANGENT',
					'	attribute vec4 tangent;',
					'#endif',
					'#ifdef USE_COLOR',
					'	attribute vec3 color;',
					'#endif',
					'#ifdef USE_MORPHTARGETS',
					'	attribute vec3 morphTarget0;',
					'	attribute vec3 morphTarget1;',
					'	attribute vec3 morphTarget2;',
					'	attribute vec3 morphTarget3;',
					'	#ifdef USE_MORPHNORMALS',
					'		attribute vec3 morphNormal0;',
					'		attribute vec3 morphNormal1;',
					'		attribute vec3 morphNormal2;',
					'		attribute vec3 morphNormal3;',
					'	#else',
					'		attribute vec3 morphTarget4;',
					'		attribute vec3 morphTarget5;',
					'		attribute vec3 morphTarget6;',
					'		attribute vec3 morphTarget7;',
					'	#endif',
					'#endif',
					'#ifdef USE_SKINNING',
					'	attribute vec4 skinIndex;',
					'	attribute vec4 skinWeight;',
					'#endif',
					`
`
				].filter(na).join(`
`)),
				(M = [
					m,
					Rf(a),
					'#define SHADER_NAME ' + i.name,
					v,
					a.alphaTest ? '#define ALPHATEST ' + a.alphaTest + (a.alphaTest % 1 ? '' : '.0') : '',
					'#define GAMMA_FACTOR ' + d,
					a.useFog && a.fog ? '#define USE_FOG' : '',
					a.useFog && a.fogExp2 ? '#define FOG_EXP2' : '',
					a.map ? '#define USE_MAP' : '',
					a.matcap ? '#define USE_MATCAP' : '',
					a.envMap ? '#define USE_ENVMAP' : '',
					a.envMap ? '#define ' + c : '',
					a.envMap ? '#define ' + h : '',
					a.envMap ? '#define ' + p : '',
					a.lightMap ? '#define USE_LIGHTMAP' : '',
					a.aoMap ? '#define USE_AOMAP' : '',
					a.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
					a.bumpMap ? '#define USE_BUMPMAP' : '',
					a.normalMap ? '#define USE_NORMALMAP' : '',
					a.normalMap && a.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '',
					a.normalMap && a.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '',
					a.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
					a.specularMap ? '#define USE_SPECULARMAP' : '',
					a.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
					a.metalnessMap ? '#define USE_METALNESSMAP' : '',
					a.alphaMap ? '#define USE_ALPHAMAP' : '',
					a.sheen ? '#define USE_SHEEN' : '',
					a.vertexTangents ? '#define USE_TANGENT' : '',
					a.vertexColors ? '#define USE_COLOR' : '',
					a.vertexUvs ? '#define USE_UV' : '',
					a.gradientMap ? '#define USE_GRADIENTMAP' : '',
					a.flatShading ? '#define FLAT_SHADED' : '',
					a.doubleSided ? '#define DOUBLE_SIDED' : '',
					a.flipSided ? '#define FLIP_SIDED' : '',
					a.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
					a.shadowMapEnabled ? '#define ' + f : '',
					a.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
					a.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '',
					a.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
					a.logarithmicDepthBuffer && (a.isWebGL2 || t.get('EXT_frag_depth'))
						? '#define USE_LOGDEPTHBUF_EXT'
						: '',
					((r.extensions && r.extensions.shaderTextureLOD) || a.envMap) &&
					(a.isWebGL2 || t.get('EXT_shader_texture_lod'))
						? '#define TEXTURE_LOD_EXT'
						: '',
					'uniform vec3 cameraPosition;',
					y > 0
						? ['uniform mat4 viewMatrices[' + y + '];', '#define viewMatrix viewMatrices[VIEW_ID]']
								.join(`
`)
						: 'uniform mat4 viewMatrix;',
					a.toneMapping !== ks ? '#define TONE_MAPPING' : '',
					a.toneMapping !== ks ? Qe.tonemapping_pars_fragment : '',
					a.toneMapping !== ks ? v0('toneMapping', a.toneMapping) : '',
					a.dithering ? '#define DITHERING' : '',
					a.outputEncoding ||
					a.mapEncoding ||
					a.matcapEncoding ||
					a.envMapEncoding ||
					a.emissiveMapEncoding
						? Qe.encodings_pars_fragment
						: '',
					a.mapEncoding ? ds('mapTexelToLinear', a.mapEncoding) : '',
					a.matcapEncoding ? ds('matcapTexelToLinear', a.matcapEncoding) : '',
					a.envMapEncoding ? ds('envMapTexelToLinear', a.envMapEncoding) : '',
					a.emissiveMapEncoding ? ds('emissiveMapTexelToLinear', a.emissiveMapEncoding) : '',
					a.outputEncoding ? p0('linearToOutputTexel', a.outputEncoding) : '',
					a.depthPacking ? '#define DEPTH_PACKING ' + r.depthPacking : '',
					`
`
				].filter(na).join(`
`))),
		(u = Ou(u)),
		(u = Lf(u, a)),
		(u = Tf(u, a)),
		(l = Ou(l)),
		(l = Lf(l, a)),
		(l = Tf(l, a)),
		(u = Af(u)),
		(l = Af(l)),
		a.isWebGL2 && !r.isRawShaderMaterial)
	) {
		var L = !1,
			C = /^\s*#version\s+300\s+es\s*\n/;
		r.isShaderMaterial &&
			u.match(C) !== null &&
			l.match(C) !== null &&
			((L = !0), (u = u.replace(C, '')), (l = l.replace(C, ''))),
			(x =
				[
					`#version 300 es
`,
					y > 0
						? [
								'#extension GL_OVR_multiview2 : require',
								'layout(num_views = ' + y + ') in;',
								'#define VIEW_ID gl_ViewID_OVR'
							].join(`
`)
						: '',
					'#define attribute in',
					'#define varying out',
					'#define texture2D texture'
				].join(`
`) +
				`
` +
				x),
			(M =
				[
					`#version 300 es
`,
					y > 0
						? ['#extension GL_OVR_multiview2 : require', '#define VIEW_ID gl_ViewID_OVR'].join(`
`)
						: '',
					'#define varying in',
					L ? '' : 'out highp vec4 pc_fragColor;',
					L ? '' : '#define gl_FragColor pc_fragColor',
					'#define gl_FragDepthEXT gl_FragDepth',
					'#define texture2D texture',
					'#define textureCube texture',
					'#define texture2DProj textureProj',
					'#define texture2DLodEXT textureLod',
					'#define texture2DProjLodEXT textureProjLod',
					'#define textureCubeLodEXT textureLod',
					'#define texture2DGradEXT textureGrad',
					'#define texture2DProjGradEXT textureProjGrad',
					'#define textureCubeGradEXT textureGrad'
				].join(`
`) +
				`
` +
				M);
	}
	var T = x + u,
		P = M + l,
		k = Ef(s, 35633, T),
		I = Ef(s, 35632, P);
	if (
		(s.attachShader(g, k),
		s.attachShader(g, I),
		r.index0AttributeName !== void 0
			? s.bindAttribLocation(g, 0, r.index0AttributeName)
			: a.morphTargets === !0 && s.bindAttribLocation(g, 0, 'position'),
		s.linkProgram(g),
		e.debug.checkShaderErrors)
	) {
		var w = s.getProgramInfoLog(g).trim(),
			U = s.getShaderInfoLog(k).trim(),
			N = s.getShaderInfoLog(I).trim(),
			D = !0,
			B = !0;
		if (s.getProgramParameter(g, 35714) === !1) {
			D = !1;
			var q = Sf(s, k, 'vertex'),
				H = Sf(s, I, 'fragment');
			console.error(
				'THREE.WebGLProgram: shader error: ',
				s.getError(),
				'35715',
				s.getProgramParameter(g, 35715),
				'gl.getProgramInfoLog',
				w,
				q,
				H
			);
		} else
			w !== ''
				? console.warn('THREE.WebGLProgram: gl.getProgramInfoLog()', w)
				: (U === '' || N === '') && (B = !1);
		B &&
			(this.diagnostics = {
				runnable: D,
				material: r,
				programLog: w,
				vertexShader: { log: U, prefix: x },
				fragmentShader: { log: N, prefix: M }
			});
	}
	s.deleteShader(k), s.deleteShader(I);
	var j;
	this.getUniforms = function () {
		return j === void 0 && (j = new mr(s, g)), j;
	};
	var K;
	return (
		(this.getAttributes = function () {
			return K === void 0 && (K = _0(s, g)), K;
		}),
		(this.destroy = function () {
			s.deleteProgram(g), (this.program = void 0);
		}),
		(this.name = i.name),
		(this.id = h0++),
		(this.code = n),
		(this.usedTimes = 1),
		(this.program = g),
		(this.vertexShader = k),
		(this.fragmentShader = I),
		(this.numMultiviewViews = y),
		this
	);
}
function E0(e, t, n) {
	var r = [],
		i = {
			MeshDepthMaterial: 'depth',
			MeshDistanceMaterial: 'distanceRGBA',
			MeshNormalMaterial: 'normal',
			MeshBasicMaterial: 'basic',
			MeshLambertMaterial: 'lambert',
			MeshPhongMaterial: 'phong',
			MeshToonMaterial: 'phong',
			MeshStandardMaterial: 'physical',
			MeshPhysicalMaterial: 'physical',
			MeshMatcapMaterial: 'matcap',
			LineBasicMaterial: 'basic',
			LineDashedMaterial: 'dashed',
			PointsMaterial: 'points',
			ShadowMaterial: 'shadow',
			SpriteMaterial: 'sprite'
		},
		a = [
			'precision',
			'supportsVertexTextures',
			'map',
			'mapEncoding',
			'matcap',
			'matcapEncoding',
			'envMap',
			'envMapMode',
			'envMapEncoding',
			'lightMap',
			'aoMap',
			'emissiveMap',
			'emissiveMapEncoding',
			'bumpMap',
			'normalMap',
			'objectSpaceNormalMap',
			'tangentSpaceNormalMap',
			'clearcoatNormalMap',
			'displacementMap',
			'specularMap',
			'roughnessMap',
			'metalnessMap',
			'gradientMap',
			'alphaMap',
			'combine',
			'vertexColors',
			'vertexTangents',
			'fog',
			'useFog',
			'fogExp2',
			'flatShading',
			'sizeAttenuation',
			'logarithmicDepthBuffer',
			'skinning',
			'maxBones',
			'useVertexTexture',
			'morphTargets',
			'morphNormals',
			'maxMorphTargets',
			'maxMorphNormals',
			'premultipliedAlpha',
			'numDirLights',
			'numPointLights',
			'numSpotLights',
			'numHemiLights',
			'numRectAreaLights',
			'shadowMapEnabled',
			'shadowMapType',
			'toneMapping',
			'physicallyCorrectLights',
			'alphaTest',
			'doubleSided',
			'flipSided',
			'numClippingPlanes',
			'numClipIntersection',
			'depthPacking',
			'dithering',
			'sheen'
		];
	function s(u) {
		var l = u.skeleton,
			f = l.bones;
		if (n.floatVertexTextures) return 1024;
		var c = n.maxVertexUniforms,
			h = Math.floor((c - 20) / 4),
			p = Math.min(h, f.length);
		return p < f.length
			? (console.warn(
					'THREE.WebGLRenderer: Skeleton has ' + f.length + ' bones. This GPU supports ' + p + '.'
				),
				0)
			: p;
	}
	function o(u, l) {
		var f;
		return (
			u
				? u.isTexture
					? (f = u.encoding)
					: u.isWebGLRenderTarget &&
						(console.warn(
							"THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
						),
						(f = u.texture.encoding))
				: (f = Ks),
			f === Ks && l && (f = $c),
			f
		);
	}
	(this.getParameters = function (u, l, f, c, h, p, d) {
		var m = i[u.type],
			v = d.isSkinnedMesh ? s(d) : 0,
			g = n.precision;
		u.precision !== null &&
			((g = n.getMaxPrecision(u.precision)),
			g !== u.precision &&
				console.warn(
					'THREE.WebGLProgram.getParameters:',
					u.precision,
					'not supported, using',
					g,
					'instead.'
				));
		var x = e.getRenderTarget(),
			M = {
				shaderID: m,
				precision: g,
				isWebGL2: n.isWebGL2,
				supportsVertexTextures: n.vertexTextures,
				outputEncoding: o(x ? x.texture : null, e.gammaOutput),
				map: !!u.map,
				mapEncoding: o(u.map, e.gammaInput),
				matcap: !!u.matcap,
				matcapEncoding: o(u.matcap, e.gammaInput),
				envMap: !!u.envMap,
				envMapMode: u.envMap && u.envMap.mapping,
				envMapEncoding: o(u.envMap, e.gammaInput),
				envMapCubeUV: !!u.envMap && (u.envMap.mapping === Cl || u.envMap.mapping === Pl),
				lightMap: !!u.lightMap,
				aoMap: !!u.aoMap,
				emissiveMap: !!u.emissiveMap,
				emissiveMapEncoding: o(u.emissiveMap, e.gammaInput),
				bumpMap: !!u.bumpMap,
				normalMap: !!u.normalMap,
				objectSpaceNormalMap: u.normalMapType === Bp,
				tangentSpaceNormalMap: u.normalMapType === za,
				clearcoatNormalMap: !!u.clearcoatNormalMap,
				displacementMap: !!u.displacementMap,
				roughnessMap: !!u.roughnessMap,
				metalnessMap: !!u.metalnessMap,
				specularMap: !!u.specularMap,
				alphaMap: !!u.alphaMap,
				gradientMap: !!u.gradientMap,
				sheen: !!u.sheen,
				combine: u.combine,
				vertexTangents: u.normalMap && u.vertexTangents,
				vertexColors: u.vertexColors,
				vertexUvs:
					!!u.map ||
					!!u.bumpMap ||
					!!u.normalMap ||
					!!u.specularMap ||
					!!u.alphaMap ||
					!!u.emissiveMap ||
					!!u.roughnessMap ||
					!!u.metalnessMap ||
					!!u.clearcoatNormalMap,
				fog: !!c,
				useFog: u.fog,
				fogExp2: c && c.isFogExp2,
				flatShading: u.flatShading,
				sizeAttenuation: u.sizeAttenuation,
				logarithmicDepthBuffer: n.logarithmicDepthBuffer,
				skinning: u.skinning && v > 0,
				maxBones: v,
				useVertexTexture: n.floatVertexTextures,
				morphTargets: u.morphTargets,
				morphNormals: u.morphNormals,
				maxMorphTargets: e.maxMorphTargets,
				maxMorphNormals: e.maxMorphNormals,
				numDirLights: l.directional.length,
				numPointLights: l.point.length,
				numSpotLights: l.spot.length,
				numRectAreaLights: l.rectArea.length,
				numHemiLights: l.hemi.length,
				numDirLightShadows: l.directionalShadowMap.length,
				numPointLightShadows: l.pointShadowMap.length,
				numSpotLightShadows: l.spotShadowMap.length,
				numClippingPlanes: h,
				numClipIntersection: p,
				dithering: u.dithering,
				shadowMapEnabled: e.shadowMap.enabled && f.length > 0,
				shadowMapType: e.shadowMap.type,
				toneMapping: u.toneMapped ? e.toneMapping : ks,
				physicallyCorrectLights: e.physicallyCorrectLights,
				premultipliedAlpha: u.premultipliedAlpha,
				alphaTest: u.alphaTest,
				doubleSided: u.side === Co,
				flipSided: u.side === Tt,
				depthPacking: u.depthPacking !== void 0 ? u.depthPacking : !1
			};
		return M;
	}),
		(this.getProgramCode = function (u, l) {
			var f = [];
			if (
				(l.shaderID ? f.push(l.shaderID) : (f.push(u.fragmentShader), f.push(u.vertexShader)),
				u.defines !== void 0)
			)
				for (var c in u.defines) f.push(c), f.push(u.defines[c]);
			for (var h = 0; h < a.length; h++) f.push(l[a[h]]);
			return (
				f.push(u.onBeforeCompile.toString()), f.push(e.gammaOutput), f.push(e.gammaFactor), f.join()
			);
		}),
		(this.acquireProgram = function (u, l, f, c) {
			for (var h, p = 0, d = r.length; p < d; p++) {
				var m = r[p];
				if (m.code === c) {
					(h = m), ++h.usedTimes;
					break;
				}
			}
			return h === void 0 && ((h = new M0(e, t, c, u, l, f)), r.push(h)), h;
		}),
		(this.releaseProgram = function (u) {
			if (--u.usedTimes === 0) {
				var l = r.indexOf(u);
				(r[l] = r[r.length - 1]), r.pop(), u.destroy();
			}
		}),
		(this.programs = r);
}
function S0() {
	var e = new WeakMap();
	function t(a) {
		var s = e.get(a);
		return s === void 0 && ((s = {}), e.set(a, s)), s;
	}
	function n(a) {
		e.delete(a);
	}
	function r(a, s, o) {
		e.get(a)[s] = o;
	}
	function i() {
		e = new WeakMap();
	}
	return { get: t, remove: n, update: r, dispose: i };
}
function L0(e, t) {
	return e.groupOrder !== t.groupOrder
		? e.groupOrder - t.groupOrder
		: e.renderOrder !== t.renderOrder
			? e.renderOrder - t.renderOrder
			: e.program !== t.program
				? e.program.id - t.program.id
				: e.material.id !== t.material.id
					? e.material.id - t.material.id
					: e.z !== t.z
						? e.z - t.z
						: e.id - t.id;
}
function T0(e, t) {
	return e.groupOrder !== t.groupOrder
		? e.groupOrder - t.groupOrder
		: e.renderOrder !== t.renderOrder
			? e.renderOrder - t.renderOrder
			: e.z !== t.z
				? t.z - e.z
				: e.id - t.id;
}
function Cf() {
	var e = [],
		t = 0,
		n = [],
		r = [],
		i = { id: -1 };
	function a() {
		(t = 0), (n.length = 0), (r.length = 0);
	}
	function s(f, c, h, p, d, m) {
		var v = e[t];
		return (
			v === void 0
				? ((v = {
						id: f.id,
						object: f,
						geometry: c,
						material: h,
						program: h.program || i,
						groupOrder: p,
						renderOrder: f.renderOrder,
						z: d,
						group: m
					}),
					(e[t] = v))
				: ((v.id = f.id),
					(v.object = f),
					(v.geometry = c),
					(v.material = h),
					(v.program = h.program || i),
					(v.groupOrder = p),
					(v.renderOrder = f.renderOrder),
					(v.z = d),
					(v.group = m)),
			t++,
			v
		);
	}
	function o(f, c, h, p, d, m) {
		var v = s(f, c, h, p, d, m);
		(h.transparent === !0 ? r : n).push(v);
	}
	function u(f, c, h, p, d, m) {
		var v = s(f, c, h, p, d, m);
		(h.transparent === !0 ? r : n).unshift(v);
	}
	function l() {
		n.length > 1 && n.sort(L0), r.length > 1 && r.sort(T0);
	}
	return { opaque: n, transparent: r, init: a, push: o, unshift: u, sort: l };
}
function A0() {
	var e = new WeakMap();
	function t(i) {
		var a = i.target;
		a.removeEventListener('dispose', t), e.delete(a);
	}
	function n(i, a) {
		var s = e.get(i),
			o;
		return (
			s === void 0
				? ((o = new Cf()),
					e.set(i, new WeakMap()),
					e.get(i).set(a, o),
					i.addEventListener('dispose', t))
				: ((o = s.get(a)), o === void 0 && ((o = new Cf()), s.set(a, o))),
			o
		);
	}
	function r() {
		e = new WeakMap();
	}
	return { get: n, dispose: r };
}
function R0() {
	var e = {};
	return {
		get: function (t) {
			if (e[t.id] !== void 0) return e[t.id];
			var n;
			switch (t.type) {
				case 'DirectionalLight':
					n = {
						direction: new R(),
						color: new he(),
						shadow: !1,
						shadowBias: 0,
						shadowRadius: 1,
						shadowMapSize: new W()
					};
					break;
				case 'SpotLight':
					n = {
						position: new R(),
						direction: new R(),
						color: new he(),
						distance: 0,
						coneCos: 0,
						penumbraCos: 0,
						decay: 0,
						shadow: !1,
						shadowBias: 0,
						shadowRadius: 1,
						shadowMapSize: new W()
					};
					break;
				case 'PointLight':
					n = {
						position: new R(),
						color: new he(),
						distance: 0,
						decay: 0,
						shadow: !1,
						shadowBias: 0,
						shadowRadius: 1,
						shadowMapSize: new W(),
						shadowCameraNear: 1,
						shadowCameraFar: 1e3
					};
					break;
				case 'HemisphereLight':
					n = { direction: new R(), skyColor: new he(), groundColor: new he() };
					break;
				case 'RectAreaLight':
					n = { color: new he(), position: new R(), halfWidth: new R(), halfHeight: new R() };
					break;
			}
			return (e[t.id] = n), n;
		}
	};
}
var C0 = 0;
function P0(e, t) {
	return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
}
function I0() {
	for (
		var e = new R0(),
			t = {
				version: 0,
				hash: {
					directionalLength: -1,
					pointLength: -1,
					spotLength: -1,
					rectAreaLength: -1,
					hemiLength: -1,
					numDirectionalShadows: -1,
					numPointShadows: -1,
					numSpotShadows: -1
				},
				ambient: [0, 0, 0],
				probe: [],
				directional: [],
				directionalShadowMap: [],
				directionalShadowMatrix: [],
				spot: [],
				spotShadowMap: [],
				spotShadowMatrix: [],
				rectArea: [],
				point: [],
				pointShadowMap: [],
				pointShadowMatrix: [],
				hemi: [],
				numDirectionalShadows: -1,
				numPointShadows: -1,
				numSpotShadows: -1
			},
			n = 0;
		n < 9;
		n++
	)
		t.probe.push(new R());
	var r = new R(),
		i = new He(),
		a = new He();
	function s(o, u, l) {
		for (var f = 0, c = 0, h = 0, p = 0; p < 9; p++) t.probe[p].set(0, 0, 0);
		var d = 0,
			m = 0,
			v = 0,
			g = 0,
			x = 0,
			M = 0,
			_ = 0,
			y = 0,
			L = l.matrixWorldInverse;
		o.sort(P0);
		for (var p = 0, C = o.length; p < C; p++) {
			var T = o[p],
				P = T.color,
				k = T.intensity,
				I = T.distance,
				w = T.shadow && T.shadow.map ? T.shadow.map.texture : null;
			if (T.isAmbientLight) (f += P.r * k), (c += P.g * k), (h += P.b * k);
			else if (T.isLightProbe)
				for (var U = 0; U < 9; U++) t.probe[U].addScaledVector(T.sh.coefficients[U], k);
			else if (T.isDirectionalLight) {
				var N = e.get(T);
				if (
					(N.color.copy(T.color).multiplyScalar(T.intensity),
					N.direction.setFromMatrixPosition(T.matrixWorld),
					r.setFromMatrixPosition(T.target.matrixWorld),
					N.direction.sub(r),
					N.direction.transformDirection(L),
					(N.shadow = T.castShadow),
					T.castShadow)
				) {
					var D = T.shadow;
					(N.shadowBias = D.bias),
						(N.shadowRadius = D.radius),
						(N.shadowMapSize = D.mapSize),
						(t.directionalShadowMap[d] = w),
						(t.directionalShadowMatrix[d] = T.shadow.matrix),
						M++;
				}
				(t.directional[d] = N), d++;
			} else if (T.isSpotLight) {
				var N = e.get(T);
				if (
					(N.position.setFromMatrixPosition(T.matrixWorld),
					N.position.applyMatrix4(L),
					N.color.copy(P).multiplyScalar(k),
					(N.distance = I),
					N.direction.setFromMatrixPosition(T.matrixWorld),
					r.setFromMatrixPosition(T.target.matrixWorld),
					N.direction.sub(r),
					N.direction.transformDirection(L),
					(N.coneCos = Math.cos(T.angle)),
					(N.penumbraCos = Math.cos(T.angle * (1 - T.penumbra))),
					(N.decay = T.decay),
					(N.shadow = T.castShadow),
					T.castShadow)
				) {
					var D = T.shadow;
					(N.shadowBias = D.bias),
						(N.shadowRadius = D.radius),
						(N.shadowMapSize = D.mapSize),
						(t.spotShadowMap[v] = w),
						(t.spotShadowMatrix[v] = T.shadow.matrix),
						y++;
				}
				(t.spot[v] = N), v++;
			} else if (T.isRectAreaLight) {
				var N = e.get(T);
				N.color.copy(P).multiplyScalar(k),
					N.position.setFromMatrixPosition(T.matrixWorld),
					N.position.applyMatrix4(L),
					a.identity(),
					i.copy(T.matrixWorld),
					i.premultiply(L),
					a.extractRotation(i),
					N.halfWidth.set(T.width * 0.5, 0, 0),
					N.halfHeight.set(0, T.height * 0.5, 0),
					N.halfWidth.applyMatrix4(a),
					N.halfHeight.applyMatrix4(a),
					(t.rectArea[g] = N),
					g++;
			} else if (T.isPointLight) {
				var N = e.get(T);
				if (
					(N.position.setFromMatrixPosition(T.matrixWorld),
					N.position.applyMatrix4(L),
					N.color.copy(T.color).multiplyScalar(T.intensity),
					(N.distance = T.distance),
					(N.decay = T.decay),
					(N.shadow = T.castShadow),
					T.castShadow)
				) {
					var D = T.shadow;
					(N.shadowBias = D.bias),
						(N.shadowRadius = D.radius),
						(N.shadowMapSize = D.mapSize),
						(N.shadowCameraNear = D.camera.near),
						(N.shadowCameraFar = D.camera.far),
						(t.pointShadowMap[m] = w),
						(t.pointShadowMatrix[m] = T.shadow.matrix),
						_++;
				}
				(t.point[m] = N), m++;
			} else if (T.isHemisphereLight) {
				var N = e.get(T);
				N.direction.setFromMatrixPosition(T.matrixWorld),
					N.direction.transformDirection(L),
					N.direction.normalize(),
					N.skyColor.copy(T.color).multiplyScalar(k),
					N.groundColor.copy(T.groundColor).multiplyScalar(k),
					(t.hemi[x] = N),
					x++;
			}
		}
		(t.ambient[0] = f), (t.ambient[1] = c), (t.ambient[2] = h);
		var B = t.hash;
		(B.directionalLength !== d ||
			B.pointLength !== m ||
			B.spotLength !== v ||
			B.rectAreaLength !== g ||
			B.hemiLength !== x ||
			B.numDirectionalShadows !== M ||
			B.numPointShadows !== _ ||
			B.numSpotShadows !== y) &&
			((t.directional.length = d),
			(t.spot.length = v),
			(t.rectArea.length = g),
			(t.point.length = m),
			(t.hemi.length = x),
			(t.directionalShadowMap.length = M),
			(t.pointShadowMap.length = _),
			(t.spotShadowMap.length = y),
			(t.directionalShadowMatrix.length = M),
			(t.pointShadowMatrix.length = _),
			(t.spotShadowMatrix.length = y),
			(B.directionalLength = d),
			(B.pointLength = m),
			(B.spotLength = v),
			(B.rectAreaLength = g),
			(B.hemiLength = x),
			(B.numDirectionalShadows = M),
			(B.numPointShadows = _),
			(B.numSpotShadows = y),
			(t.version = C0++));
	}
	return { setup: s, state: t };
}
function Pf() {
	var e = new I0(),
		t = [],
		n = [];
	function r() {
		(t.length = 0), (n.length = 0);
	}
	function i(u) {
		t.push(u);
	}
	function a(u) {
		n.push(u);
	}
	function s(u) {
		e.setup(t, n, u);
	}
	var o = { lightsArray: t, shadowsArray: n, lights: e };
	return { init: r, state: o, setupLights: s, pushLight: i, pushShadow: a };
}
function D0() {
	var e = new WeakMap();
	function t(i) {
		var a = i.target;
		a.removeEventListener('dispose', t), e.delete(a);
	}
	function n(i, a) {
		var s;
		return (
			e.has(i) === !1
				? ((s = new Pf()),
					e.set(i, new WeakMap()),
					e.get(i).set(a, s),
					i.addEventListener('dispose', t))
				: e.get(i).has(a) === !1
					? ((s = new Pf()), e.get(i).set(a, s))
					: (s = e.get(i).get(a)),
			s
		);
	}
	function r() {
		e = new WeakMap();
	}
	return { get: n, dispose: r };
}
function Xr(e) {
	De.call(this),
		(this.type = 'MeshDepthMaterial'),
		(this.depthPacking = kp),
		(this.skinning = !1),
		(this.morphTargets = !1),
		(this.map = null),
		(this.alphaMap = null),
		(this.displacementMap = null),
		(this.displacementScale = 1),
		(this.displacementBias = 0),
		(this.wireframe = !1),
		(this.wireframeLinewidth = 1),
		(this.fog = !1),
		(this.lights = !1),
		this.setValues(e);
}
Xr.prototype = Object.create(De.prototype);
Xr.prototype.constructor = Xr;
Xr.prototype.isMeshDepthMaterial = !0;
Xr.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		(this.depthPacking = e.depthPacking),
		(this.skinning = e.skinning),
		(this.morphTargets = e.morphTargets),
		(this.map = e.map),
		(this.alphaMap = e.alphaMap),
		(this.displacementMap = e.displacementMap),
		(this.displacementScale = e.displacementScale),
		(this.displacementBias = e.displacementBias),
		(this.wireframe = e.wireframe),
		(this.wireframeLinewidth = e.wireframeLinewidth),
		this
	);
};
function Yr(e) {
	De.call(this),
		(this.type = 'MeshDistanceMaterial'),
		(this.referencePosition = new R()),
		(this.nearDistance = 1),
		(this.farDistance = 1e3),
		(this.skinning = !1),
		(this.morphTargets = !1),
		(this.map = null),
		(this.alphaMap = null),
		(this.displacementMap = null),
		(this.displacementScale = 1),
		(this.displacementBias = 0),
		(this.fog = !1),
		(this.lights = !1),
		this.setValues(e);
}
Yr.prototype = Object.create(De.prototype);
Yr.prototype.constructor = Yr;
Yr.prototype.isMeshDistanceMaterial = !0;
Yr.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		this.referencePosition.copy(e.referencePosition),
		(this.nearDistance = e.nearDistance),
		(this.farDistance = e.farDistance),
		(this.skinning = e.skinning),
		(this.morphTargets = e.morphTargets),
		(this.map = e.map),
		(this.alphaMap = e.alphaMap),
		(this.displacementMap = e.displacementMap),
		(this.displacementScale = e.displacementScale),
		(this.displacementBias = e.displacementBias),
		this
	);
};
var N0 = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
  float mean = 0.0;
  float squared_mean = 0.0;
  
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );
  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
    #ifdef HORIZONAL_PASS
      vec2 distribution = decodeHalfRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
    #else
      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;
    #endif
  }
  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;
  float std_dev = pow( squared_mean - mean * mean, 0.5 );
  gl_FragColor = encodeHalfRGBA( vec2( mean, std_dev ) );
}`,
	O0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
function lh(e, t, n) {
	var r = new No(),
		i = new W(),
		a = new W(),
		s = new rt(),
		o = 1,
		u = 2,
		l = (o | u) + 1,
		f = new Array(l),
		c = new Array(l),
		h = {},
		p = { 0: Tt, 1: Qa, 2: Co },
		d = new Ot({
			defines: { SAMPLE_RATE: 2 / 8, HALF_SAMPLE_RATE: 1 / 8 },
			uniforms: {
				shadow_pass: { value: null },
				resolution: { value: new W() },
				radius: { value: 4 }
			},
			vertexShader: O0,
			fragmentShader: N0
		}),
		m = d.clone();
	m.defines.HORIZONAL_PASS = 1;
	var v = new ae();
	v.addAttribute('position', new Ie(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
	for (var g = new wt(v, d), x = 0; x !== l; ++x) {
		var M = (x & o) !== 0,
			_ = (x & u) !== 0,
			y = new Xr({ depthPacking: Up, morphTargets: M, skinning: _ });
		f[x] = y;
		var L = new Yr({ morphTargets: M, skinning: _ });
		c[x] = L;
	}
	var C = this;
	(this.enabled = !1),
		(this.autoUpdate = !0),
		(this.needsUpdate = !1),
		(this.type = Hc),
		(this.render = function (I, w, U) {
			if (C.enabled !== !1 && !(C.autoUpdate === !1 && C.needsUpdate === !1) && I.length !== 0) {
				var N = e.getRenderTarget(),
					D = e.getActiveCubeFace(),
					B = e.getActiveMipmapLevel(),
					q = e.state;
				q.setBlending(ia),
					q.buffers.color.setClear(1, 1, 1, 1),
					q.buffers.depth.setTest(!0),
					q.setScissorTest(!1);
				for (var H = 0, j = I.length; H < j; H++) {
					var K = I[H],
						Z = K.shadow;
					if (Z === void 0) {
						console.warn('THREE.WebGLShadowMap:', K, 'has no shadow.');
						continue;
					}
					i.copy(Z.mapSize);
					var ve = Z.getFrameExtents();
					if (
						(i.multiply(ve),
						a.copy(Z.mapSize),
						(i.x > n || i.y > n) &&
							(console.warn(
								'THREE.WebGLShadowMap:',
								K,
								'has shadow exceeding max texture size, reducing'
							),
							i.x > n && ((a.x = Math.floor(n / ve.x)), (i.x = a.x * ve.x), (Z.mapSize.x = a.x)),
							i.y > n && ((a.y = Math.floor(n / ve.y)), (i.y = a.y * ve.y), (Z.mapSize.y = a.y))),
						Z.map === null && !Z.isPointLightShadow && this.type === ta)
					) {
						var _e = { minFilter: It, magFilter: It, format: tr };
						(Z.map = new Jt(i.x, i.y, _e)),
							(Z.map.texture.name = K.name + '.shadowMap'),
							(Z.mapPass = new Jt(i.x, i.y, _e)),
							Z.camera.updateProjectionMatrix();
					}
					if (Z.map === null) {
						var _e = { minFilter: Dt, magFilter: Dt, format: tr };
						(Z.map = new Jt(i.x, i.y, _e)),
							(Z.map.texture.name = K.name + '.shadowMap'),
							Z.camera.updateProjectionMatrix();
					}
					e.setRenderTarget(Z.map), e.clear();
					for (var V = Z.getViewportCount(), be = 0; be < V; be++) {
						var le = Z.getViewport(be);
						s.set(a.x * le.x, a.y * le.y, a.x * le.z, a.y * le.w),
							q.viewport(s),
							Z.updateMatrices(K, U, be),
							(r = Z.getFrustum()),
							k(w, U, Z.camera, K, this.type);
					}
					!Z.isPointLightShadow && this.type === ta && T(Z, U);
				}
				(C.needsUpdate = !1), e.setRenderTarget(N, D, B);
			}
		});
	function T(I, w) {
		var U = t.update(g);
		(d.uniforms.shadow_pass.value = I.map.texture),
			(d.uniforms.resolution.value = I.mapSize),
			(d.uniforms.radius.value = I.radius),
			e.setRenderTarget(I.mapPass),
			e.clear(),
			e.renderBufferDirect(w, null, U, d, g, null),
			(m.uniforms.shadow_pass.value = I.mapPass.texture),
			(m.uniforms.resolution.value = I.mapSize),
			(m.uniforms.radius.value = I.radius),
			e.setRenderTarget(I.map),
			e.clear(),
			e.renderBufferDirect(w, null, U, m, g, null);
	}
	function P(I, w, U, N, D, B) {
		var q = I.geometry,
			H = null,
			j = f,
			K = I.customDepthMaterial;
		if ((U.isPointLight && ((j = c), (K = I.customDistanceMaterial)), K)) H = K;
		else {
			var Z = !1;
			w.morphTargets &&
				(q && q.isBufferGeometry
					? (Z =
							q.morphAttributes &&
							q.morphAttributes.position &&
							q.morphAttributes.position.length > 0)
					: q && q.isGeometry && (Z = q.morphTargets && q.morphTargets.length > 0)),
				I.isSkinnedMesh &&
					w.skinning === !1 &&
					console.warn(
						'THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:',
						I
					);
			var ve = I.isSkinnedMesh && w.skinning,
				_e = 0;
			Z && (_e |= o), ve && (_e |= u), (H = j[_e]);
		}
		if (e.localClippingEnabled && w.clipShadows === !0 && w.clippingPlanes.length !== 0) {
			var V = H.uuid,
				be = w.uuid,
				le = h[V];
			le === void 0 && ((le = {}), (h[V] = le));
			var pe = le[be];
			pe === void 0 && ((pe = H.clone()), (le[be] = pe)), (H = pe);
		}
		return (
			(H.visible = w.visible),
			(H.wireframe = w.wireframe),
			B === ta
				? (H.side = w.shadowSide != null ? w.shadowSide : w.side)
				: (H.side = w.shadowSide != null ? w.shadowSide : p[w.side]),
			(H.clipShadows = w.clipShadows),
			(H.clippingPlanes = w.clippingPlanes),
			(H.clipIntersection = w.clipIntersection),
			(H.wireframeLinewidth = w.wireframeLinewidth),
			(H.linewidth = w.linewidth),
			U.isPointLight &&
				H.isMeshDistanceMaterial &&
				(H.referencePosition.setFromMatrixPosition(U.matrixWorld),
				(H.nearDistance = N),
				(H.farDistance = D)),
			H
		);
	}
	function k(I, w, U, N, D) {
		if (I.visible !== !1) {
			var B = I.layers.test(w.layers);
			if (
				B &&
				(I.isMesh || I.isLine || I.isPoints) &&
				(I.castShadow || (I.receiveShadow && D === ta)) &&
				(!I.frustumCulled || r.intersectsObject(I))
			) {
				I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, I.matrixWorld);
				var q = t.update(I),
					H = I.material;
				if (Array.isArray(H))
					for (var j = q.groups, K = 0, Z = j.length; K < Z; K++) {
						var ve = j[K],
							_e = H[ve.materialIndex];
						if (_e && _e.visible) {
							var V = P(I, _e, N, U.near, U.far, D);
							e.renderBufferDirect(U, null, q, V, I, ve);
						}
					}
				else if (H.visible) {
					var V = P(I, H, N, U.near, U.far, D);
					e.renderBufferDirect(U, null, q, V, I, null);
				}
			}
			for (var be = I.children, le = 0, pe = be.length; le < pe; le++) k(be[le], w, U, N, D);
		}
	}
}
function F0(e, t, n, r) {
	function i() {
		var F = !1,
			X = new rt(),
			fe = null,
			ue = new rt(0, 0, 0, 0);
		return {
			setMask: function ($) {
				fe !== $ && !F && (e.colorMask($, $, $, $), (fe = $));
			},
			setLocked: function ($) {
				F = $;
			},
			setClear: function ($, de, Pe, Ee, at) {
				at === !0 && (($ *= Ee), (de *= Ee), (Pe *= Ee)),
					X.set($, de, Pe, Ee),
					ue.equals(X) === !1 && (e.clearColor($, de, Pe, Ee), ue.copy(X));
			},
			reset: function () {
				(F = !1), (fe = null), ue.set(-1, 0, 0, 0);
			}
		};
	}
	function a() {
		var F = !1,
			X = null,
			fe = null,
			ue = null;
		return {
			setTest: function ($) {
				$ ? Ye(2929) : E(2929);
			},
			setMask: function ($) {
				X !== $ && !F && (e.depthMask($), (X = $));
			},
			setFunc: function ($) {
				if (fe !== $) {
					if ($)
						switch ($) {
							case Hd:
								e.depthFunc(512);
								break;
							case Wd:
								e.depthFunc(519);
								break;
							case qd:
								e.depthFunc(513);
								break;
							case Au:
								e.depthFunc(515);
								break;
							case jd:
								e.depthFunc(514);
								break;
							case Kd:
								e.depthFunc(518);
								break;
							case Jd:
								e.depthFunc(516);
								break;
							case Xd:
								e.depthFunc(517);
								break;
							default:
								e.depthFunc(515);
						}
					else e.depthFunc(515);
					fe = $;
				}
			},
			setLocked: function ($) {
				F = $;
			},
			setClear: function ($) {
				ue !== $ && (e.clearDepth($), (ue = $));
			},
			reset: function () {
				(F = !1), (X = null), (fe = null), (ue = null);
			}
		};
	}
	function s() {
		var F = !1,
			X = null,
			fe = null,
			ue = null,
			$ = null,
			de = null,
			Pe = null,
			Ee = null,
			at = null;
		return {
			setTest: function (Se) {
				F || (Se ? Ye(2960) : E(2960));
			},
			setMask: function (Se) {
				X !== Se && !F && (e.stencilMask(Se), (X = Se));
			},
			setFunc: function (Se, yt, St) {
				(fe !== Se || ue !== yt || $ !== St) &&
					(e.stencilFunc(Se, yt, St), (fe = Se), (ue = yt), ($ = St));
			},
			setOp: function (Se, yt, St) {
				(de !== Se || Pe !== yt || Ee !== St) &&
					(e.stencilOp(Se, yt, St), (de = Se), (Pe = yt), (Ee = St));
			},
			setLocked: function (Se) {
				F = Se;
			},
			setClear: function (Se) {
				at !== Se && (e.clearStencil(Se), (at = Se));
			},
			reset: function () {
				(F = !1),
					(X = null),
					(fe = null),
					(ue = null),
					($ = null),
					(de = null),
					(Pe = null),
					(Ee = null),
					(at = null);
			}
		};
	}
	var o = new i(),
		u = new a(),
		l = new s(),
		f = e.getParameter(34921),
		c = new Uint8Array(f),
		h = new Uint8Array(f),
		p = new Uint8Array(f),
		d = {},
		m = null,
		v = null,
		g = null,
		x = null,
		M = null,
		_ = null,
		y = null,
		L = null,
		C = null,
		T = null,
		P = !1,
		k = null,
		I = null,
		w = null,
		U = null,
		N = null,
		D = e.getParameter(35661),
		B = !1,
		q = 0,
		H = e.getParameter(7938);
	H.indexOf('WebGL') !== -1
		? ((q = parseFloat(/^WebGL\ ([0-9])/.exec(H)[1])), (B = q >= 1))
		: H.indexOf('OpenGL ES') !== -1 &&
			((q = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(H)[1])), (B = q >= 2));
	var j = null,
		K = {},
		Z = new rt(),
		ve = new rt();
	function _e(F, X, fe) {
		var ue = new Uint8Array(4),
			$ = e.createTexture();
		e.bindTexture(F, $), e.texParameteri(F, 10241, 9728), e.texParameteri(F, 10240, 9728);
		for (var de = 0; de < fe; de++) e.texImage2D(X + de, 0, 6408, 1, 1, 0, 6408, 5121, ue);
		return $;
	}
	var V = {};
	(V[3553] = _e(3553, 3553, 1)),
		(V[34067] = _e(34067, 34069, 6)),
		o.setClear(0, 0, 0, 1),
		u.setClear(1),
		l.setClear(0),
		Ye(2929),
		u.setFunc(Au),
		me(!1),
		ie(Kl),
		Ye(2884),
		z(ia);
	function be() {
		for (var F = 0, X = c.length; F < X; F++) c[F] = 0;
	}
	function le(F) {
		pe(F, 0);
	}
	function pe(F, X) {
		if (((c[F] = 1), h[F] === 0 && (e.enableVertexAttribArray(F), (h[F] = 1)), p[F] !== X)) {
			var fe = r.isWebGL2 ? e : t.get('ANGLE_instanced_arrays');
			fe[r.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'](F, X), (p[F] = X);
		}
	}
	function Me() {
		for (var F = 0, X = h.length; F !== X; ++F)
			h[F] !== c[F] && (e.disableVertexAttribArray(F), (h[F] = 0));
	}
	function Ye(F) {
		d[F] !== !0 && (e.enable(F), (d[F] = !0));
	}
	function E(F) {
		d[F] !== !1 && (e.disable(F), (d[F] = !1));
	}
	function S() {
		if (
			m === null &&
			((m = []),
			t.get('WEBGL_compressed_texture_pvrtc') ||
				t.get('WEBGL_compressed_texture_s3tc') ||
				t.get('WEBGL_compressed_texture_etc1') ||
				t.get('WEBGL_compressed_texture_astc'))
		)
			for (var F = e.getParameter(34467), X = 0; X < F.length; X++) m.push(F[X]);
		return m;
	}
	function J(F) {
		return v !== F ? (e.useProgram(F), (v = F), !0) : !1;
	}
	function z(F, X, fe, ue, $, de, Pe, Ee) {
		if (F === ia) {
			g && (E(3042), (g = !1));
			return;
		}
		if ((g || (Ye(3042), (g = !0)), F !== Cd)) {
			if (F !== x || Ee !== P) {
				if (((M !== gi || L !== gi) && (e.blendEquation(32774), (M = gi), (L = gi)), Ee))
					switch (F) {
						case aa:
							e.blendFuncSeparate(1, 771, 1, 771);
							break;
						case Jl:
							e.blendFunc(1, 1);
							break;
						case Xl:
							e.blendFuncSeparate(0, 0, 769, 771);
							break;
						case Yl:
							e.blendFuncSeparate(0, 768, 0, 770);
							break;
						default:
							console.error('THREE.WebGLState: Invalid blending: ', F);
							break;
					}
				else
					switch (F) {
						case aa:
							e.blendFuncSeparate(770, 771, 1, 771);
							break;
						case Jl:
							e.blendFunc(770, 1);
							break;
						case Xl:
							e.blendFunc(0, 769);
							break;
						case Yl:
							e.blendFunc(0, 768);
							break;
						default:
							console.error('THREE.WebGLState: Invalid blending: ', F);
							break;
					}
				(_ = null), (y = null), (C = null), (T = null), (x = F), (P = Ee);
			}
			return;
		}
		($ = $ || X),
			(de = de || fe),
			(Pe = Pe || ue),
			(X !== M || $ !== L) &&
				(e.blendEquationSeparate(n.convert(X), n.convert($)), (M = X), (L = $)),
			(fe !== _ || ue !== y || de !== C || Pe !== T) &&
				(e.blendFuncSeparate(n.convert(fe), n.convert(ue), n.convert(de), n.convert(Pe)),
				(_ = fe),
				(y = ue),
				(C = de),
				(T = Pe)),
			(x = F),
			(P = null);
	}
	function ye(F, X) {
		F.side === Co ? E(2884) : Ye(2884);
		var fe = F.side === Tt;
		X && (fe = !fe),
			me(fe),
			F.blending === aa && F.transparent === !1
				? z(ia)
				: z(
						F.blending,
						F.blendEquation,
						F.blendSrc,
						F.blendDst,
						F.blendEquationAlpha,
						F.blendSrcAlpha,
						F.blendDstAlpha,
						F.premultipliedAlpha
					),
			u.setFunc(F.depthFunc),
			u.setTest(F.depthTest),
			u.setMask(F.depthWrite),
			o.setMask(F.colorWrite);
		var ue = F.stencilWrite;
		l.setTest(ue),
			ue &&
				(l.setMask(F.stencilWriteMask),
				l.setFunc(F.stencilFunc, F.stencilRef, F.stencilFuncMask),
				l.setOp(F.stencilFail, F.stencilZFail, F.stencilZPass)),
			Te(F.polygonOffset, F.polygonOffsetFactor, F.polygonOffsetUnits);
	}
	function me(F) {
		k !== F && (F ? e.frontFace(2304) : e.frontFace(2305), (k = F));
	}
	function ie(F) {
		F !== Ld
			? (Ye(2884),
				F !== I && (F === Kl ? e.cullFace(1029) : F === Td ? e.cullFace(1028) : e.cullFace(1032)))
			: E(2884),
			(I = F);
	}
	function we(F) {
		F !== w && (B && e.lineWidth(F), (w = F));
	}
	function Te(F, X, fe) {
		F
			? (Ye(32823), (U !== X || N !== fe) && (e.polygonOffset(X, fe), (U = X), (N = fe)))
			: E(32823);
	}
	function Ne(F) {
		F ? Ye(3089) : E(3089);
	}
	function ze(F) {
		F === void 0 && (F = 33984 + D - 1), j !== F && (e.activeTexture(F), (j = F));
	}
	function et(F, X) {
		j === null && ze();
		var fe = K[j];
		fe === void 0 && ((fe = { type: void 0, texture: void 0 }), (K[j] = fe)),
			(fe.type !== F || fe.texture !== X) &&
				(e.bindTexture(F, X || V[F]), (fe.type = F), (fe.texture = X));
	}
	function ge() {
		try {
			e.compressedTexImage2D.apply(e, arguments);
		} catch (F) {
			console.error('THREE.WebGLState:', F);
		}
	}
	function Be() {
		try {
			e.texImage2D.apply(e, arguments);
		} catch (F) {
			console.error('THREE.WebGLState:', F);
		}
	}
	function Ze() {
		try {
			e.texImage3D.apply(e, arguments);
		} catch (F) {
			console.error('THREE.WebGLState:', F);
		}
	}
	function st(F) {
		Z.equals(F) === !1 && (e.scissor(F.x, F.y, F.z, F.w), Z.copy(F));
	}
	function vt(F) {
		ve.equals(F) === !1 && (e.viewport(F.x, F.y, F.z, F.w), ve.copy(F));
	}
	function Oe() {
		for (var F = 0; F < h.length; F++) h[F] === 1 && (e.disableVertexAttribArray(F), (h[F] = 0));
		(d = {}),
			(m = null),
			(j = null),
			(K = {}),
			(v = null),
			(x = null),
			(k = null),
			(I = null),
			o.reset(),
			u.reset(),
			l.reset();
	}
	return {
		buffers: { color: o, depth: u, stencil: l },
		initAttributes: be,
		enableAttribute: le,
		enableAttributeAndDivisor: pe,
		disableUnusedAttributes: Me,
		enable: Ye,
		disable: E,
		getCompressedTextureFormats: S,
		useProgram: J,
		setBlending: z,
		setMaterial: ye,
		setFlipSided: me,
		setCullFace: ie,
		setLineWidth: we,
		setPolygonOffset: Te,
		setScissorTest: Ne,
		activeTexture: ze,
		bindTexture: et,
		compressedTexImage2D: ge,
		texImage2D: Be,
		texImage3D: Ze,
		scissor: st,
		viewport: vt,
		reset: Oe
	};
}
function k0(e, t, n, r, i, a, s) {
	var o = new WeakMap(),
		u,
		l = typeof OffscreenCanvas < 'u' && new OffscreenCanvas(1, 1).getContext('2d') !== null;
	function f(E, S) {
		return l
			? new OffscreenCanvas(E, S)
			: document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
	}
	function c(E, S, J, z) {
		var ye = 1;
		if (
			((E.width > z || E.height > z) && (ye = z / Math.max(E.width, E.height)), ye < 1 || S === !0)
		)
			if (
				(typeof HTMLImageElement < 'u' && E instanceof HTMLImageElement) ||
				(typeof HTMLCanvasElement < 'u' && E instanceof HTMLCanvasElement) ||
				(typeof ImageBitmap < 'u' && E instanceof ImageBitmap)
			) {
				var me = S ? Ue.floorPowerOfTwo : Math.floor,
					ie = me(ye * E.width),
					we = me(ye * E.height);
				u === void 0 && (u = f(ie, we));
				var Te = J ? f(ie, we) : u;
				(Te.width = ie), (Te.height = we);
				var Ne = Te.getContext('2d');
				return (
					Ne.drawImage(E, 0, 0, ie, we),
					console.warn(
						'THREE.WebGLRenderer: Texture has been resized from (' +
							E.width +
							'x' +
							E.height +
							') to (' +
							ie +
							'x' +
							we +
							').'
					),
					Te
				);
			} else
				return (
					'data' in E &&
						console.warn(
							'THREE.WebGLRenderer: Image in DataTexture is too big (' +
								E.width +
								'x' +
								E.height +
								').'
						),
					E
				);
		return E;
	}
	function h(E) {
		return Ue.isPowerOfTwo(E.width) && Ue.isPowerOfTwo(E.height);
	}
	function p(E) {
		return i.isWebGL2
			? !1
			: E.wrapS !== Kt || E.wrapT !== Kt || (E.minFilter !== Dt && E.minFilter !== It);
	}
	function d(E, S) {
		return E.generateMipmaps && S && E.minFilter !== Dt && E.minFilter !== It;
	}
	function m(E, S, J, z) {
		e.generateMipmap(E);
		var ye = r.get(S);
		ye.__maxMipLevel = Math.log(Math.max(J, z)) * Math.LOG2E;
	}
	function v(E, S) {
		if (!i.isWebGL2) return E;
		var J = E;
		return (
			E === 6403 &&
				(S === 5126 && (J = 33326), S === 5131 && (J = 33325), S === 5121 && (J = 33321)),
			E === 6407 &&
				(S === 5126 && (J = 34837), S === 5131 && (J = 34843), S === 5121 && (J = 32849)),
			E === 6408 &&
				(S === 5126 && (J = 34836), S === 5131 && (J = 34842), S === 5121 && (J = 32856)),
			J === 33325 || J === 33326 || J === 34842 || J === 34836
				? t.get('EXT_color_buffer_float')
				: (J === 34843 || J === 34837) &&
					console.warn(
						'THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.'
					),
			J
		);
	}
	function g(E) {
		return E === Dt || E === Il || E === Dl ? 9728 : 9729;
	}
	function x(E) {
		var S = E.target;
		S.removeEventListener('dispose', x), _(S), S.isVideoTexture && o.delete(S), s.memory.textures--;
	}
	function M(E) {
		var S = E.target;
		S.removeEventListener('dispose', M), y(S), s.memory.textures--;
	}
	function _(E) {
		var S = r.get(E);
		S.__webglInit !== void 0 && (e.deleteTexture(S.__webglTexture), r.remove(E));
	}
	function y(E) {
		var S = r.get(E),
			J = r.get(E.texture);
		if (E) {
			if (
				(J.__webglTexture !== void 0 && e.deleteTexture(J.__webglTexture),
				E.depthTexture && E.depthTexture.dispose(),
				E.isWebGLRenderTargetCube)
			)
				for (var z = 0; z < 6; z++)
					e.deleteFramebuffer(S.__webglFramebuffer[z]),
						S.__webglDepthbuffer && e.deleteRenderbuffer(S.__webglDepthbuffer[z]);
			else
				e.deleteFramebuffer(S.__webglFramebuffer),
					S.__webglDepthbuffer && e.deleteRenderbuffer(S.__webglDepthbuffer);
			if (E.isWebGLMultiviewRenderTarget) {
				e.deleteTexture(S.__webglColorTexture),
					e.deleteTexture(S.__webglDepthStencilTexture),
					(s.memory.textures -= 2);
				for (var z = 0, ye = S.__webglViewFramebuffers.length; z < ye; z++)
					e.deleteFramebuffer(S.__webglViewFramebuffers[z]);
			}
			r.remove(E.texture), r.remove(E);
		}
	}
	var L = 0;
	function C() {
		L = 0;
	}
	function T() {
		var E = L;
		return (
			E >= i.maxTextures &&
				console.warn(
					'THREE.WebGLTextures: Trying to use ' +
						E +
						' texture units while this GPU supports only ' +
						i.maxTextures
				),
			(L += 1),
			E
		);
	}
	function P(E, S) {
		var J = r.get(E);
		if ((E.isVideoTexture && be(E), E.version > 0 && J.__version !== E.version)) {
			var z = E.image;
			if (z === void 0)
				console.warn('THREE.WebGLRenderer: Texture marked for update but image is undefined');
			else if (z.complete === !1)
				console.warn('THREE.WebGLRenderer: Texture marked for update but image is incomplete');
			else {
				B(J, E, S);
				return;
			}
		}
		n.activeTexture(33984 + S), n.bindTexture(3553, J.__webglTexture);
	}
	function k(E, S) {
		var J = r.get(E);
		if (E.version > 0 && J.__version !== E.version) {
			B(J, E, S);
			return;
		}
		n.activeTexture(33984 + S), n.bindTexture(35866, J.__webglTexture);
	}
	function I(E, S) {
		var J = r.get(E);
		if (E.version > 0 && J.__version !== E.version) {
			B(J, E, S);
			return;
		}
		n.activeTexture(33984 + S), n.bindTexture(32879, J.__webglTexture);
	}
	function w(E, S) {
		if (E.image.length === 6) {
			var J = r.get(E);
			if (E.version > 0 && J.__version !== E.version) {
				D(J, E),
					n.activeTexture(33984 + S),
					n.bindTexture(34067, J.__webglTexture),
					e.pixelStorei(37440, E.flipY);
				for (
					var z = E && E.isCompressedTexture,
						ye = E.image[0] && E.image[0].isDataTexture,
						me = [],
						ie = 0;
					ie < 6;
					ie++
				)
					!z && !ye
						? (me[ie] = c(E.image[ie], !1, !0, i.maxCubemapSize))
						: (me[ie] = ye ? E.image[ie].image : E.image[ie]);
				var we = me[0],
					Te = h(we) || i.isWebGL2,
					Ne = a.convert(E.format),
					ze = a.convert(E.type),
					et = v(Ne, ze);
				N(34067, E, Te);
				var ge;
				if (z) {
					for (var ie = 0; ie < 6; ie++) {
						ge = me[ie].mipmaps;
						for (var Be = 0; Be < ge.length; Be++) {
							var Ze = ge[Be];
							E.format !== tr && E.format !== jr
								? n.getCompressedTextureFormats().indexOf(Ne) > -1
									? n.compressedTexImage2D(34069 + ie, Be, et, Ze.width, Ze.height, 0, Ze.data)
									: console.warn(
											'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()'
										)
								: n.texImage2D(34069 + ie, Be, et, Ze.width, Ze.height, 0, Ne, ze, Ze.data);
						}
					}
					J.__maxMipLevel = ge.length - 1;
				} else {
					ge = E.mipmaps;
					for (var ie = 0; ie < 6; ie++)
						if (ye) {
							n.texImage2D(34069 + ie, 0, et, me[ie].width, me[ie].height, 0, Ne, ze, me[ie].data);
							for (var Be = 0; Be < ge.length; Be++) {
								var Ze = ge[Be],
									st = Ze.image[ie].image;
								n.texImage2D(34069 + ie, Be + 1, et, st.width, st.height, 0, Ne, ze, st.data);
							}
						} else {
							n.texImage2D(34069 + ie, 0, et, Ne, ze, me[ie]);
							for (var Be = 0; Be < ge.length; Be++) {
								var Ze = ge[Be];
								n.texImage2D(34069 + ie, Be + 1, et, Ne, ze, Ze.image[ie]);
							}
						}
					J.__maxMipLevel = ge.length;
				}
				d(E, Te) && m(34067, E, we.width, we.height),
					(J.__version = E.version),
					E.onUpdate && E.onUpdate(E);
			} else n.activeTexture(33984 + S), n.bindTexture(34067, J.__webglTexture);
		}
	}
	function U(E, S) {
		n.activeTexture(33984 + S), n.bindTexture(34067, r.get(E).__webglTexture);
	}
	function N(E, S, J) {
		var z;
		if (
			(J
				? (e.texParameteri(E, 10242, a.convert(S.wrapS)),
					e.texParameteri(E, 10243, a.convert(S.wrapT)),
					(E === 32879 || E === 35866) && e.texParameteri(E, 32882, a.convert(S.wrapR)),
					e.texParameteri(E, 10240, a.convert(S.magFilter)),
					e.texParameteri(E, 10241, a.convert(S.minFilter)))
				: (e.texParameteri(E, 10242, 33071),
					e.texParameteri(E, 10243, 33071),
					(E === 32879 || E === 35866) && e.texParameteri(E, 32882, 33071),
					(S.wrapS !== Kt || S.wrapT !== Kt) &&
						console.warn(
							'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'
						),
					e.texParameteri(E, 10240, g(S.magFilter)),
					e.texParameteri(E, 10241, g(S.minFilter)),
					S.minFilter !== Dt &&
						S.minFilter !== It &&
						console.warn(
							'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'
						)),
			(z = t.get('EXT_texture_filter_anisotropic')),
			z)
		) {
			if (
				(S.type === ha && t.get('OES_texture_float_linear') === null) ||
				(S.type === Ol && (i.isWebGL2 || t.get('OES_texture_half_float_linear')) === null)
			)
				return;
			(S.anisotropy > 1 || r.get(S).__currentAnisotropy) &&
				(e.texParameterf(
					E,
					z.TEXTURE_MAX_ANISOTROPY_EXT,
					Math.min(S.anisotropy, i.getMaxAnisotropy())
				),
				(r.get(S).__currentAnisotropy = S.anisotropy));
		}
	}
	function D(E, S) {
		E.__webglInit === void 0 &&
			((E.__webglInit = !0),
			S.addEventListener('dispose', x),
			(E.__webglTexture = e.createTexture()),
			s.memory.textures++);
	}
	function B(E, S, J) {
		var z = 3553;
		S.isDataTexture2DArray && (z = 35866),
			S.isDataTexture3D && (z = 32879),
			D(E, S),
			n.activeTexture(33984 + J),
			n.bindTexture(z, E.__webglTexture),
			e.pixelStorei(37440, S.flipY),
			e.pixelStorei(37441, S.premultiplyAlpha),
			e.pixelStorei(3317, S.unpackAlignment);
		var ye = p(S) && h(S.image) === !1,
			me = c(S.image, ye, !1, i.maxTextureSize),
			ie = h(me) || i.isWebGL2,
			we = a.convert(S.format),
			Te = a.convert(S.type),
			Ne = v(we, Te);
		N(z, S, ie);
		var ze,
			et = S.mipmaps;
		if (S.isDepthTexture) {
			if (((Ne = 6402), S.type === ha)) {
				if (!i.isWebGL2) throw new Error('Float Depth Texture only supported in WebGL2.0');
				Ne = 36012;
			} else i.isWebGL2 && (Ne = 33189);
			S.format === Si &&
				Ne === 6402 &&
				S.type !== Hs &&
				S.type !== Qc &&
				(console.warn(
					'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'
				),
				(S.type = Hs),
				(Te = a.convert(S.type))),
				S.format === da &&
					((Ne = 34041),
					S.type !== Ws &&
						(console.warn(
							'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'
						),
						(S.type = Ws),
						(Te = a.convert(S.type)))),
				n.texImage2D(3553, 0, Ne, me.width, me.height, 0, we, Te, null);
		} else if (S.isDataTexture)
			if (et.length > 0 && ie) {
				for (var ge = 0, Be = et.length; ge < Be; ge++)
					(ze = et[ge]), n.texImage2D(3553, ge, Ne, ze.width, ze.height, 0, we, Te, ze.data);
				(S.generateMipmaps = !1), (E.__maxMipLevel = et.length - 1);
			} else
				n.texImage2D(3553, 0, Ne, me.width, me.height, 0, we, Te, me.data), (E.__maxMipLevel = 0);
		else if (S.isCompressedTexture) {
			for (var ge = 0, Be = et.length; ge < Be; ge++)
				(ze = et[ge]),
					S.format !== tr && S.format !== jr
						? n.getCompressedTextureFormats().indexOf(we) > -1
							? n.compressedTexImage2D(3553, ge, Ne, ze.width, ze.height, 0, ze.data)
							: console.warn(
									'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
								)
						: n.texImage2D(3553, ge, Ne, ze.width, ze.height, 0, we, Te, ze.data);
			E.__maxMipLevel = et.length - 1;
		} else if (S.isDataTexture2DArray)
			n.texImage3D(35866, 0, Ne, me.width, me.height, me.depth, 0, we, Te, me.data),
				(E.__maxMipLevel = 0);
		else if (S.isDataTexture3D)
			n.texImage3D(32879, 0, Ne, me.width, me.height, me.depth, 0, we, Te, me.data),
				(E.__maxMipLevel = 0);
		else if (et.length > 0 && ie) {
			for (var ge = 0, Be = et.length; ge < Be; ge++)
				(ze = et[ge]), n.texImage2D(3553, ge, Ne, we, Te, ze);
			(S.generateMipmaps = !1), (E.__maxMipLevel = et.length - 1);
		} else n.texImage2D(3553, 0, Ne, we, Te, me), (E.__maxMipLevel = 0);
		d(S, ie) && m(3553, S, me.width, me.height),
			(E.__version = S.version),
			S.onUpdate && S.onUpdate(S);
	}
	function q(E, S, J, z) {
		var ye = a.convert(S.texture.format),
			me = a.convert(S.texture.type),
			ie = v(ye, me);
		n.texImage2D(z, 0, ie, S.width, S.height, 0, ye, me, null),
			e.bindFramebuffer(36160, E),
			e.framebufferTexture2D(36160, J, z, r.get(S.texture).__webglTexture, 0),
			e.bindFramebuffer(36160, null);
	}
	function H(E, S, J) {
		if ((e.bindRenderbuffer(36161, E), S.depthBuffer && !S.stencilBuffer)) {
			if (J) {
				var z = V(S);
				e.renderbufferStorageMultisample(36161, z, 33189, S.width, S.height);
			} else e.renderbufferStorage(36161, 33189, S.width, S.height);
			e.framebufferRenderbuffer(36160, 36096, 36161, E);
		} else if (S.depthBuffer && S.stencilBuffer) {
			if (J) {
				var z = V(S);
				e.renderbufferStorageMultisample(36161, z, 35056, S.width, S.height);
			} else e.renderbufferStorage(36161, 34041, S.width, S.height);
			e.framebufferRenderbuffer(36160, 33306, 36161, E);
		} else {
			var ye = a.convert(S.texture.format),
				me = a.convert(S.texture.type),
				ie = v(ye, me);
			if (J) {
				var z = V(S);
				e.renderbufferStorageMultisample(36161, z, ie, S.width, S.height);
			} else e.renderbufferStorage(36161, ie, S.width, S.height);
		}
		e.bindRenderbuffer(36161, null);
	}
	function j(E, S) {
		var J = S && S.isWebGLRenderTargetCube;
		if (J) throw new Error('Depth Texture with cube render targets is not supported');
		if ((e.bindFramebuffer(36160, E), !(S.depthTexture && S.depthTexture.isDepthTexture)))
			throw new Error('renderTarget.depthTexture must be an instance of THREE.DepthTexture');
		(!r.get(S.depthTexture).__webglTexture ||
			S.depthTexture.image.width !== S.width ||
			S.depthTexture.image.height !== S.height) &&
			((S.depthTexture.image.width = S.width),
			(S.depthTexture.image.height = S.height),
			(S.depthTexture.needsUpdate = !0)),
			P(S.depthTexture, 0);
		var z = r.get(S.depthTexture).__webglTexture;
		if (S.depthTexture.format === Si) e.framebufferTexture2D(36160, 36096, 3553, z, 0);
		else if (S.depthTexture.format === da) e.framebufferTexture2D(36160, 33306, 3553, z, 0);
		else throw new Error('Unknown depthTexture format');
	}
	function K(E) {
		var S = r.get(E),
			J = E.isWebGLRenderTargetCube === !0;
		if (E.depthTexture) {
			if (J) throw new Error('target.depthTexture not supported in Cube render targets');
			j(S.__webglFramebuffer, E);
		} else if (J) {
			S.__webglDepthbuffer = [];
			for (var z = 0; z < 6; z++)
				e.bindFramebuffer(36160, S.__webglFramebuffer[z]),
					(S.__webglDepthbuffer[z] = e.createRenderbuffer()),
					H(S.__webglDepthbuffer[z], E);
		} else
			e.bindFramebuffer(36160, S.__webglFramebuffer),
				(S.__webglDepthbuffer = e.createRenderbuffer()),
				H(S.__webglDepthbuffer, E);
		e.bindFramebuffer(36160, null);
	}
	function Z(E) {
		var S = r.get(E),
			J = r.get(E.texture);
		E.addEventListener('dispose', M), (J.__webglTexture = e.createTexture()), s.memory.textures++;
		var z = E.isWebGLRenderTargetCube === !0,
			ye = E.isWebGLMultisampleRenderTarget === !0,
			me = E.isWebGLMultiviewRenderTarget === !0,
			ie = h(E) || i.isWebGL2;
		if (z) {
			S.__webglFramebuffer = [];
			for (var we = 0; we < 6; we++) S.__webglFramebuffer[we] = e.createFramebuffer();
		} else if (((S.__webglFramebuffer = e.createFramebuffer()), ye))
			if (i.isWebGL2) {
				(S.__webglMultisampledFramebuffer = e.createFramebuffer()),
					(S.__webglColorRenderbuffer = e.createRenderbuffer()),
					e.bindRenderbuffer(36161, S.__webglColorRenderbuffer);
				var Te = a.convert(E.texture.format),
					Ne = a.convert(E.texture.type),
					ze = v(Te, Ne),
					et = V(E);
				e.renderbufferStorageMultisample(36161, et, ze, E.width, E.height),
					e.bindFramebuffer(36160, S.__webglMultisampledFramebuffer),
					e.framebufferRenderbuffer(36160, 36064, 36161, S.__webglColorRenderbuffer),
					e.bindRenderbuffer(36161, null),
					E.depthBuffer &&
						((S.__webglDepthRenderbuffer = e.createRenderbuffer()),
						H(S.__webglDepthRenderbuffer, E, !0)),
					e.bindFramebuffer(36160, null);
			} else
				console.warn(
					'THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.'
				);
		else if (me)
			if (i.multiview) {
				var ge = E.width,
					Be = E.height,
					Ze = E.numViews;
				e.bindFramebuffer(36160, S.__webglFramebuffer);
				var st = t.get('OVR_multiview2');
				s.memory.textures += 2;
				var vt = e.createTexture();
				e.bindTexture(35866, vt),
					e.texParameteri(35866, 10240, 9728),
					e.texParameteri(35866, 10241, 9728),
					e.texImage3D(35866, 0, 32856, ge, Be, Ze, 0, 6408, 5121, null),
					st.framebufferTextureMultiviewOVR(36160, 36064, vt, 0, 0, Ze);
				var Oe = e.createTexture();
				e.bindTexture(35866, Oe),
					e.texParameteri(35866, 10240, 9728),
					e.texParameteri(35866, 10241, 9728),
					e.texImage3D(35866, 0, 35056, ge, Be, Ze, 0, 34041, 34042, null),
					st.framebufferTextureMultiviewOVR(36160, 33306, Oe, 0, 0, Ze);
				for (var F = new Array(Ze), we = 0; we < Ze; ++we)
					(F[we] = e.createFramebuffer()),
						e.bindFramebuffer(36160, F[we]),
						e.framebufferTextureLayer(36160, 36064, vt, 0, we);
				(S.__webglColorTexture = vt),
					(S.__webglDepthStencilTexture = Oe),
					(S.__webglViewFramebuffers = F),
					e.bindFramebuffer(36160, null),
					e.bindTexture(35866, null);
			} else
				console.warn(
					'THREE.WebGLRenderer: WebGLMultiviewRenderTarget can only be used with WebGL2 and Multiview extension support.'
				);
		if (z) {
			n.bindTexture(34067, J.__webglTexture), N(34067, E.texture, ie);
			for (var we = 0; we < 6; we++) q(S.__webglFramebuffer[we], E, 36064, 34069 + we);
			d(E.texture, ie) && m(34067, E.texture, E.width, E.height), n.bindTexture(34067, null);
		} else
			me ||
				(n.bindTexture(3553, J.__webglTexture),
				N(3553, E.texture, ie),
				q(S.__webglFramebuffer, E, 36064, 3553),
				d(E.texture, ie) && m(3553, E.texture, E.width, E.height),
				n.bindTexture(3553, null));
		E.depthBuffer && K(E);
	}
	function ve(E) {
		var S = E.texture,
			J = h(E) || i.isWebGL2;
		if (d(S, J)) {
			var z = E.isWebGLRenderTargetCube ? 34067 : 3553,
				ye = r.get(S).__webglTexture;
			n.bindTexture(z, ye), m(z, S, E.width, E.height), n.bindTexture(z, null);
		}
	}
	function _e(E) {
		if (E.isWebGLMultisampleRenderTarget)
			if (i.isWebGL2) {
				var S = r.get(E);
				e.bindFramebuffer(36008, S.__webglMultisampledFramebuffer),
					e.bindFramebuffer(36009, S.__webglFramebuffer);
				var J = E.width,
					z = E.height,
					ye = 16384;
				E.depthBuffer && (ye |= 256),
					E.stencilBuffer && (ye |= 1024),
					e.blitFramebuffer(0, 0, J, z, 0, 0, J, z, ye, 9728);
			} else
				console.warn(
					'THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.'
				);
	}
	function V(E) {
		return i.isWebGL2 && E.isWebGLMultisampleRenderTarget ? Math.min(i.maxSamples, E.samples) : 0;
	}
	function be(E) {
		var S = s.render.frame;
		o.get(E) !== S && (o.set(E, S), E.update());
	}
	var le = !1,
		pe = !1;
	function Me(E, S) {
		E &&
			E.isWebGLRenderTarget &&
			(le === !1 &&
				(console.warn(
					"THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."
				),
				(le = !0)),
			(E = E.texture)),
			P(E, S);
	}
	function Ye(E, S) {
		E &&
			E.isWebGLRenderTargetCube &&
			(pe === !1 &&
				(console.warn(
					"THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."
				),
				(pe = !0)),
			(E = E.texture)),
			(E && E.isCubeTexture) || (Array.isArray(E.image) && E.image.length === 6)
				? w(E, S)
				: U(E, S);
	}
	(this.allocateTextureUnit = T),
		(this.resetTextureUnits = C),
		(this.setTexture2D = P),
		(this.setTexture2DArray = k),
		(this.setTexture3D = I),
		(this.setTextureCube = w),
		(this.setTextureCubeDynamic = U),
		(this.setupRenderTarget = Z),
		(this.updateRenderTargetMipmap = ve),
		(this.updateMultisampleRenderTarget = _e),
		(this.safeSetTexture2D = Me),
		(this.safeSetTextureCube = Ye);
}
function U0(e, t, n) {
	function r(i) {
		var a;
		if (i === Gs) return 10497;
		if (i === Kt) return 33071;
		if (i === Vs) return 33648;
		if (i === Dt) return 9728;
		if (i === Il) return 9984;
		if (i === Dl) return 9986;
		if (i === It) return 9729;
		if (i === Zc) return 9985;
		if (i === Io) return 9987;
		if (i === Nl) return 5121;
		if (i === ip) return 32819;
		if (i === ap) return 32820;
		if (i === sp) return 33635;
		if (i === tp) return 5120;
		if (i === np) return 5122;
		if (i === Hs) return 5123;
		if (i === rp) return 5124;
		if (i === Qc) return 5125;
		if (i === ha) return 5126;
		if (i === Ol) {
			if (n.isWebGL2) return 5131;
			if (((a = t.get('OES_texture_half_float')), a !== null)) return a.HALF_FLOAT_OES;
		}
		if (i === op) return 6406;
		if (i === jr) return 6407;
		if (i === tr) return 6408;
		if (i === up) return 6409;
		if (i === lp) return 6410;
		if (i === Si) return 6402;
		if (i === da) return 34041;
		if (i === fp) return 6403;
		if (i === gi) return 32774;
		if (i === Pd) return 32778;
		if (i === Id) return 32779;
		if (i === Dd) return 0;
		if (i === Nd) return 1;
		if (i === Od) return 768;
		if (i === Fd) return 769;
		if (i === jc) return 770;
		if (i === Kc) return 771;
		if (i === kd) return 772;
		if (i === Ud) return 773;
		if (i === Bd) return 774;
		if (i === Gd) return 775;
		if (i === Vd) return 776;
		if (
			(i === Zl || i === Ql || i === $l || i === zl) &&
			((a = t.get('WEBGL_compressed_texture_s3tc')), a !== null)
		) {
			if (i === Zl) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
			if (i === Ql) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
			if (i === $l) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
			if (i === zl) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
		}
		if (
			(i === ef || i === tf || i === nf || i === rf) &&
			((a = t.get('WEBGL_compressed_texture_pvrtc')), a !== null)
		) {
			if (i === ef) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
			if (i === tf) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
			if (i === nf) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
			if (i === rf) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
		}
		if (i === cp && ((a = t.get('WEBGL_compressed_texture_etc1')), a !== null))
			return a.COMPRESSED_RGB_ETC1_WEBGL;
		if (
			(i === hp ||
				i === dp ||
				i === pp ||
				i === vp ||
				i === mp ||
				i === gp ||
				i === _p ||
				i === xp ||
				i === bp ||
				i === yp ||
				i === wp ||
				i === Mp ||
				i === Ep ||
				i === Sp) &&
			((a = t.get('WEBGL_compressed_texture_astc')), a !== null)
		)
			return i;
		if (i === Go || i === Vo) {
			if (n.isWebGL2) {
				if (i === Go) return 32775;
				if (i === Vo) return 32776;
			}
			if (((a = t.get('EXT_blend_minmax')), a !== null)) {
				if (i === Go) return a.MIN_EXT;
				if (i === Vo) return a.MAX_EXT;
			}
		}
		if (i === Ws) {
			if (n.isWebGL2) return 34042;
			if (((a = t.get('WEBGL_depth_texture')), a !== null)) return a.UNSIGNED_INT_24_8_WEBGL;
		}
		return 0;
	}
	return { convert: r };
}
function Fu(e, t, n, r) {
	Jt.call(this, e, t, r), (this.depthBuffer = !1), (this.stencilBuffer = !1), (this.numViews = n);
}
Fu.prototype = Object.assign(Object.create(Jt.prototype), {
	constructor: Fu,
	isWebGLMultiviewRenderTarget: !0,
	copy: function (e) {
		return Jt.prototype.copy.call(this, e), (this.numViews = e.numViews), this;
	},
	setNumViews: function (e) {
		return this.numViews !== e && ((this.numViews = e), this.dispose()), this;
	}
});
function B0(e, t) {
	var n = 2,
		r = e.capabilities,
		i = e.properties,
		a = r.maxMultiviewViews,
		s,
		o,
		u,
		l,
		f,
		c;
	function h(C) {
		return C.isArrayCamera ? C.cameras : ((f[0] = C), f);
	}
	function p(C, T) {
		for (var P = h(C), k = 0; k < P.length; k++) l[k].copy(P[k].projectionMatrix);
		T.setValue(t, 'projectionMatrices', l);
	}
	function d(C, T) {
		for (var P = h(C), k = 0; k < P.length; k++) l[k].copy(P[k].matrixWorldInverse);
		T.setValue(t, 'viewMatrices', l);
	}
	function m(C, T, P) {
		for (var k = h(T), I = 0; I < k.length; I++)
			l[I].multiplyMatrices(k[I].matrixWorldInverse, C.matrixWorld), u[I].getNormalMatrix(l[I]);
		P.setValue(t, 'modelViewMatrices', l), P.setValue(t, 'normalMatrices', u);
	}
	function v(C) {
		if (!C.isArrayCamera) return !0;
		var T = C.cameras;
		if (T.length > a) return !1;
		for (var P = 1, k = T.length; P < k; P++)
			if (T[0].viewport.z !== T[P].viewport.z || T[0].viewport.w !== T[P].viewport.w) return !1;
		return !0;
	}
	function g(C) {
		if ((o ? c.set(o.width, o.height) : e.getDrawingBufferSize(c), C.isArrayCamera)) {
			var T = C.cameras[0].viewport;
			s.setSize(T.z, T.w), s.setNumViews(C.cameras.length);
		} else s.setSize(c.x, c.y), s.setNumViews(n);
	}
	function x(C) {
		v(C) && ((o = e.getRenderTarget()), g(C), e.setRenderTarget(s));
	}
	function M(C) {
		s === e.getRenderTarget() && (e.setRenderTarget(o), _(C));
	}
	function _(C) {
		var T = s,
			P = T.numViews,
			k = i.get(T).__webglViewFramebuffers,
			I = T.width,
			w = T.height;
		if (C.isArrayCamera)
			for (var U = 0; U < P; U++) {
				var N = C.cameras[U].viewport,
					D = N.x,
					B = N.y,
					q = D + N.z,
					H = B + N.w;
				t.bindFramebuffer(36008, k[U]), t.blitFramebuffer(0, 0, I, w, D, B, q, H, 16384, 9728);
			}
		else t.bindFramebuffer(36008, k[0]), t.blitFramebuffer(0, 0, I, w, 0, 0, c.x, c.y, 16384, 9728);
	}
	if (e.capabilities.multiview) {
		(s = new Fu(0, 0, n)), (c = new W()), (l = []), (u = []), (f = []);
		for (var y = r.maxMultiviewViews, L = 0; L < y; L++) (l[L] = new He()), (u[L] = new Et());
	}
	(this.attachCamera = x),
		(this.detachCamera = M),
		(this.updateCameraProjectionMatricesUniform = p),
		(this.updateCameraViewMatricesUniform = d),
		(this.updateObjectMatricesUniforms = m);
}
function xa() {
	se.call(this), (this.type = 'Group');
}
xa.prototype = Object.assign(Object.create(se.prototype), { constructor: xa, isGroup: !0 });
function Zs(e) {
	bt.call(this), (this.cameras = e || []);
}
Zs.prototype = Object.assign(Object.create(bt.prototype), { constructor: Zs, isArrayCamera: !0 });
var If = new R(),
	Df = new R();
function fh(e, t, n) {
	If.setFromMatrixPosition(t.matrixWorld), Df.setFromMatrixPosition(n.matrixWorld);
	var r = If.distanceTo(Df),
		i = t.projectionMatrix.elements,
		a = n.projectionMatrix.elements,
		s = i[14] / (i[10] - 1),
		o = i[14] / (i[10] + 1),
		u = (i[9] + 1) / i[5],
		l = (i[9] - 1) / i[5],
		f = (i[8] - 1) / i[0],
		c = (a[8] + 1) / a[0],
		h = s * f,
		p = s * c,
		d = r / (-f + c),
		m = d * -f;
	t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
		e.translateX(m),
		e.translateZ(d),
		e.matrixWorld.compose(e.position, e.quaternion, e.scale),
		e.matrixWorldInverse.getInverse(e.matrixWorld);
	var v = s + d,
		g = o + d,
		x = h - m,
		M = p + (r - m),
		_ = ((u * o) / g) * v,
		y = ((l * o) / g) * v;
	e.projectionMatrix.makePerspective(x, M, _, y, v, g);
}
function Ul(e) {
	var t,
		n,
		r = this,
		i = null,
		a = null,
		s = null,
		o = [],
		u = new He(),
		l = new He(),
		f = 1,
		c = 'local-floor';
	typeof window < 'u' &&
		'VRFrameData' in window &&
		((a = new window.VRFrameData()), window.addEventListener('vrdisplaypresentchange', y, !1));
	var h = new He(),
		p = new qt(),
		d = new R(),
		m = new bt();
	(m.viewport = new rt()), m.layers.enable(1);
	var v = new bt();
	(v.viewport = new rt()), v.layers.enable(2);
	var g = new Zs([m, v]);
	g.layers.enable(1), g.layers.enable(2);
	function x() {
		return i !== null && i.isPresenting === !0;
	}
	var M = new W(),
		_;
	function y() {
		if (x()) {
			var I = i.getEyeParameters('left');
			(t = 2 * I.renderWidth * f),
				(n = I.renderHeight * f),
				(_ = e.getPixelRatio()),
				e.getSize(M),
				e.setDrawingBufferSize(t, n, 1),
				m.viewport.set(0, 0, t / 2, n),
				v.viewport.set(t / 2, 0, t / 2, n),
				k.start(),
				r.dispatchEvent({ type: 'sessionstart' });
		} else
			r.enabled && e.setDrawingBufferSize(M.width, M.height, _),
				k.stop(),
				r.dispatchEvent({ type: 'sessionend' });
	}
	var L = [];
	function C(I) {
		for (
			var w = navigator.getGamepads && navigator.getGamepads(), U = 0, N = 0, D = w.length;
			U < D;
			U++
		) {
			var B = w[U];
			if (
				B &&
				(B.id === 'Daydream Controller' ||
					B.id === 'Gear VR Controller' ||
					B.id === 'Oculus Go Controller' ||
					B.id === 'OpenVR Gamepad' ||
					B.id.startsWith('Oculus Touch') ||
					B.id.startsWith('HTC Vive Focus') ||
					B.id.startsWith('Spatial Controller'))
			) {
				if (N === I) return B;
				N++;
			}
		}
	}
	function T() {
		for (var I = 0; I < o.length; I++) {
			var w = o[I],
				U = C(I);
			if (U !== void 0 && U.pose !== void 0) {
				if (U.pose === null) return;
				var N = U.pose;
				N.hasPosition === !1 && w.position.set(0.2, -0.6, -0.05),
					N.position !== null && w.position.fromArray(N.position),
					N.orientation !== null && w.quaternion.fromArray(N.orientation),
					w.matrix.compose(w.position, w.quaternion, w.scale),
					w.matrix.premultiply(u),
					w.matrix.decompose(w.position, w.quaternion, w.scale),
					(w.matrixWorldNeedsUpdate = !0),
					(w.visible = !0);
				var D = U.id === 'Daydream Controller' ? 0 : 1;
				L[I] === void 0 && (L[I] = !1),
					L[I] !== U.buttons[D].pressed &&
						((L[I] = U.buttons[D].pressed),
						L[I] === !0
							? w.dispatchEvent({ type: 'selectstart' })
							: (w.dispatchEvent({ type: 'selectend' }), w.dispatchEvent({ type: 'select' })));
			} else w.visible = !1;
		}
	}
	function P(I, w) {
		w !== null && w.length === 4 && I.set(w[0] * t, w[1] * n, w[2] * t, w[3] * n);
	}
	(this.enabled = !1),
		(this.getController = function (I) {
			var w = o[I];
			return (
				w === void 0 && ((w = new xa()), (w.matrixAutoUpdate = !1), (w.visible = !1), (o[I] = w)), w
			);
		}),
		(this.getDevice = function () {
			return i;
		}),
		(this.setDevice = function (I) {
			I !== void 0 && (i = I), k.setContext(I);
		}),
		(this.setFramebufferScaleFactor = function (I) {
			f = I;
		}),
		(this.setReferenceSpaceType = function (I) {
			c = I;
		}),
		(this.setPoseTarget = function (I) {
			I !== void 0 && (s = I);
		}),
		(this.getCamera = function (I) {
			var w = c === 'local-floor' ? 1.6 : 0;
			if (x() === !1) return I.position.set(0, w, 0), I.rotation.set(0, 0, 0), I;
			if (((i.depthNear = I.near), (i.depthFar = I.far), i.getFrameData(a), c === 'local-floor')) {
				var U = i.stageParameters;
				U ? u.fromArray(U.sittingToStandingTransform) : u.makeTranslation(0, w, 0);
			}
			var N = a.pose,
				D = s !== null ? s : I;
			D.matrix.copy(u),
				D.matrix.decompose(D.position, D.quaternion, D.scale),
				N.orientation !== null && (p.fromArray(N.orientation), D.quaternion.multiply(p)),
				N.position !== null &&
					(p.setFromRotationMatrix(u),
					d.fromArray(N.position),
					d.applyQuaternion(p),
					D.position.add(d)),
				D.updateMatrixWorld(),
				(m.near = I.near),
				(v.near = I.near),
				(m.far = I.far),
				(v.far = I.far),
				m.matrixWorldInverse.fromArray(a.leftViewMatrix),
				v.matrixWorldInverse.fromArray(a.rightViewMatrix),
				l.getInverse(u),
				c === 'local-floor' && (m.matrixWorldInverse.multiply(l), v.matrixWorldInverse.multiply(l));
			var B = D.parent;
			B !== null &&
				(h.getInverse(B.matrixWorld),
				m.matrixWorldInverse.multiply(h),
				v.matrixWorldInverse.multiply(h)),
				m.matrixWorld.getInverse(m.matrixWorldInverse),
				v.matrixWorld.getInverse(v.matrixWorldInverse),
				m.projectionMatrix.fromArray(a.leftProjectionMatrix),
				v.projectionMatrix.fromArray(a.rightProjectionMatrix),
				fh(g, m, v);
			var q = i.getLayers();
			if (q.length) {
				var H = q[0];
				P(m.viewport, H.leftBounds), P(v.viewport, H.rightBounds);
			}
			return T(), g;
		}),
		(this.getStandingMatrix = function () {
			return u;
		}),
		(this.isPresenting = x);
	var k = new kl();
	(this.setAnimationLoop = function (I) {
		k.setAnimationLoop(I), x() && k.start();
	}),
		(this.submitFrame = function () {
			x() && i.submitFrame();
		}),
		(this.dispose = function () {
			typeof window < 'u' && window.removeEventListener('vrdisplaypresentchange', y);
		}),
		(this.setFrameOfReferenceType = function () {
			console.warn('THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.');
		});
}
Object.assign(Ul.prototype, Vn.prototype);
function ch(e, t) {
	var n = this,
		r = null,
		i = null,
		a = 'local-floor',
		s = null,
		o = [],
		u = [];
	function l() {
		return r !== null && i !== null;
	}
	var f = new bt();
	f.layers.enable(1), (f.viewport = new rt());
	var c = new bt();
	c.layers.enable(2), (c.viewport = new rt());
	var h = new Zs([f, c]);
	h.layers.enable(1),
		h.layers.enable(2),
		(this.enabled = !1),
		(this.getController = function (_) {
			var y = o[_];
			return (
				y === void 0 && ((y = new xa()), (y.matrixAutoUpdate = !1), (y.visible = !1), (o[_] = y)), y
			);
		});
	function p(_) {
		for (var y = 0; y < o.length; y++)
			u[y] === _.inputSource && o[y].dispatchEvent({ type: _.type });
	}
	function d() {
		e.setFramebuffer(null),
			e.setRenderTarget(e.getRenderTarget()),
			M.stop(),
			n.dispatchEvent({ type: 'sessionend' });
	}
	function m(_) {
		(i = _), M.setContext(r), M.start(), n.dispatchEvent({ type: 'sessionstart' });
	}
	(this.setFramebufferScaleFactor = function (_) {}),
		(this.setReferenceSpaceType = function (_) {
			a = _;
		}),
		(this.getSession = function () {
			return r;
		}),
		(this.setSession = function (_) {
			(r = _),
				r !== null &&
					(r.addEventListener('select', p),
					r.addEventListener('selectstart', p),
					r.addEventListener('selectend', p),
					r.addEventListener('end', d),
					r.updateRenderState({ baseLayer: new XRWebGLLayer(r, t) }),
					r.requestReferenceSpace(a).then(m),
					(u = r.inputSources),
					r.addEventListener('inputsourceschange', function () {
						(u = r.inputSources), console.log(u);
						for (var y = 0; y < o.length; y++) {
							var L = o[y];
							L.userData.inputSource = u[y];
						}
					}));
		});
	function v(_, y) {
		y === null
			? _.matrixWorld.copy(_.matrix)
			: _.matrixWorld.multiplyMatrices(y.matrixWorld, _.matrix),
			_.matrixWorldInverse.getInverse(_.matrixWorld);
	}
	(this.getCamera = function (_) {
		if (l()) {
			var y = _.parent,
				L = h.cameras;
			v(h, y);
			for (var C = 0; C < L.length; C++) v(L[C], y);
			_.matrixWorld.copy(h.matrixWorld);
			for (var T = _.children, C = 0, P = T.length; C < P; C++) T[C].updateMatrixWorld(!0);
			return fh(h, f, c), h;
		}
		return _;
	}),
		(this.isPresenting = l);
	var g = null;
	function x(_, y) {
		if (((s = y.getViewerPose(i)), s !== null)) {
			var L = s.views,
				C = r.renderState.baseLayer;
			e.setFramebuffer(C.framebuffer);
			for (var T = 0; T < L.length; T++) {
				var P = L[T],
					k = C.getViewport(P),
					I = P.transform.inverse.matrix,
					w = h.cameras[T];
				w.matrix.fromArray(I).getInverse(w.matrix),
					w.projectionMatrix.fromArray(P.projectionMatrix),
					w.viewport.set(k.x, k.y, k.width, k.height),
					T === 0 && h.matrix.copy(w.matrix);
			}
		}
		for (var T = 0; T < o.length; T++) {
			var U = o[T],
				N = u[T];
			if (N) {
				var D = y.getPose(N.targetRaySpace, i);
				if (D !== null) {
					U.matrix.fromArray(D.transform.matrix),
						U.matrix.decompose(U.position, U.rotation, U.scale),
						(U.visible = !0);
					continue;
				}
			}
			U.visible = !1;
		}
		g && g(_);
	}
	var M = new kl();
	M.setAnimationLoop(x),
		(this.setAnimationLoop = function (_) {
			g = _;
		}),
		(this.dispose = function () {}),
		(this.getStandingMatrix = function () {
			return console.warn('THREE.WebXRManager: getStandingMatrix() is no longer needed.'), new He();
		}),
		(this.getDevice = function () {
			console.warn('THREE.WebXRManager: getDevice() has been deprecated.');
		}),
		(this.setDevice = function () {
			console.warn('THREE.WebXRManager: setDevice() has been deprecated.');
		}),
		(this.setFrameOfReferenceType = function () {
			console.warn('THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.');
		}),
		(this.submitFrame = function () {});
}
Object.assign(ch.prototype, Vn.prototype);
function hh(e) {
	e = e || {};
	var t =
			e.canvas !== void 0
				? e.canvas
				: document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas'),
		n = e.context !== void 0 ? e.context : null,
		r = e.alpha !== void 0 ? e.alpha : !1,
		i = e.depth !== void 0 ? e.depth : !0,
		a = e.stencil !== void 0 ? e.stencil : !0,
		s = e.antialias !== void 0 ? e.antialias : !1,
		o = e.premultipliedAlpha !== void 0 ? e.premultipliedAlpha : !0,
		u = e.preserveDrawingBuffer !== void 0 ? e.preserveDrawingBuffer : !1,
		l = e.powerPreference !== void 0 ? e.powerPreference : 'default',
		f = e.failIfMajorPerformanceCaveat !== void 0 ? e.failIfMajorPerformanceCaveat : !1,
		c = null,
		h = null;
	(this.domElement = t),
		(this.debug = { checkShaderErrors: !0 }),
		(this.autoClear = !0),
		(this.autoClearColor = !0),
		(this.autoClearDepth = !0),
		(this.autoClearStencil = !0),
		(this.sortObjects = !0),
		(this.clippingPlanes = []),
		(this.localClippingEnabled = !1),
		(this.gammaFactor = 2),
		(this.gammaInput = !1),
		(this.gammaOutput = !1),
		(this.physicallyCorrectLights = !1),
		(this.toneMapping = Jc),
		(this.toneMappingExposure = 1),
		(this.toneMappingWhitePoint = 1),
		(this.maxMorphTargets = 8),
		(this.maxMorphNormals = 4);
	var p = this,
		d = !1,
		m = null,
		v = 0,
		g = 0,
		x = null,
		M = null,
		_ = -1,
		y = { geometry: null, program: null, wireframe: !1 },
		L = null,
		C = null,
		T = new rt(),
		P = new rt(),
		k = null,
		I = t.width,
		w = t.height,
		U = 1,
		N = new rt(0, 0, I, w),
		D = new rt(0, 0, I, w),
		B = !1,
		q = new No(),
		H = new Eg(),
		j = !1,
		K = !1,
		Z = new He(),
		ve = new R();
	function _e() {
		return x === null ? U : 1;
	}
	var V;
	try {
		var be = {
			alpha: r,
			depth: i,
			stencil: a,
			antialias: s,
			premultipliedAlpha: o,
			preserveDrawingBuffer: u,
			powerPreference: l,
			failIfMajorPerformanceCaveat: f,
			xrCompatible: !0
		};
		if (
			(t.addEventListener('webglcontextlost', Oe, !1),
			t.addEventListener('webglcontextrestored', F, !1),
			(V = n || t.getContext('webgl', be) || t.getContext('experimental-webgl', be)),
			V === null)
		)
			throw t.getContext('webgl') !== null
				? new Error('Error creating WebGL context with your selected attributes.')
				: new Error('Error creating WebGL context.');
		V.getShaderPrecisionFormat === void 0 &&
			(V.getShaderPrecisionFormat = function () {
				return { rangeMin: 1, rangeMax: 1, precision: 1 };
			});
	} catch (b) {
		throw (console.error('THREE.WebGLRenderer: ' + b.message), b);
	}
	var le, pe, Me, Ye, E, S, J, z, ye, me, ie, we, Te, Ne, ze, et, ge;
	function Be() {
		(le = new Sg(V)),
			(pe = new Mg(V, le, e)),
			pe.isWebGL2 ||
				(le.get('WEBGL_depth_texture'),
				le.get('OES_texture_float'),
				le.get('OES_texture_half_float'),
				le.get('OES_texture_half_float_linear'),
				le.get('OES_standard_derivatives'),
				le.get('OES_element_index_uint'),
				le.get('ANGLE_instanced_arrays')),
			le.get('OES_texture_float_linear'),
			(ge = new U0(V, le, pe)),
			(Me = new F0(V, le, ge, pe)),
			Me.scissor(P.copy(D).multiplyScalar(U).floor()),
			Me.viewport(T.copy(N).multiplyScalar(U).floor()),
			(Ye = new Ag()),
			(E = new S0()),
			(S = new k0(V, le, Me, E, pe, ge, Ye)),
			(J = new bg(V)),
			(z = new Lg(V, J, Ye)),
			(ye = new Pg(z, Ye)),
			(Ne = new Cg(V)),
			(me = new E0(p, le, pe)),
			(ie = new A0()),
			(we = new D0()),
			(Te = new yg(p, Me, ye, o)),
			(ze = new wg(V, le, Ye, pe)),
			(et = new Tg(V, le, Ye, pe)),
			(Ye.programs = me.programs),
			(p.capabilities = pe),
			(p.extensions = le),
			(p.properties = E),
			(p.renderLists = ie),
			(p.state = Me),
			(p.info = Ye);
	}
	Be();
	var Ze =
		typeof navigator < 'u' && 'xr' in navigator && 'supportsSession' in navigator.xr
			? new ch(p, V)
			: new Ul(p);
	this.vr = Ze;
	var st = new B0(p, V),
		vt = new lh(p, ye, pe.maxTextureSize);
	(this.shadowMap = vt),
		(this.getContext = function () {
			return V;
		}),
		(this.getContextAttributes = function () {
			return V.getContextAttributes();
		}),
		(this.forceContextLoss = function () {
			var b = le.get('WEBGL_lose_context');
			b && b.loseContext();
		}),
		(this.forceContextRestore = function () {
			var b = le.get('WEBGL_lose_context');
			b && b.restoreContext();
		}),
		(this.getPixelRatio = function () {
			return U;
		}),
		(this.setPixelRatio = function (b) {
			b !== void 0 && ((U = b), this.setSize(I, w, !1));
		}),
		(this.getSize = function (b) {
			return (
				b === void 0 &&
					(console.warn('WebGLRenderer: .getsize() now requires a Vector2 as an argument'),
					(b = new W())),
				b.set(I, w)
			);
		}),
		(this.setSize = function (b, A, O) {
			if (Ze.isPresenting()) {
				console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
				return;
			}
			(I = b),
				(w = A),
				(t.width = Math.floor(b * U)),
				(t.height = Math.floor(A * U)),
				O !== !1 && ((t.style.width = b + 'px'), (t.style.height = A + 'px')),
				this.setViewport(0, 0, b, A);
		}),
		(this.getDrawingBufferSize = function (b) {
			return (
				b === void 0 &&
					(console.warn(
						'WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument'
					),
					(b = new W())),
				b.set(I * U, w * U).floor()
			);
		}),
		(this.setDrawingBufferSize = function (b, A, O) {
			(I = b),
				(w = A),
				(U = O),
				(t.width = Math.floor(b * O)),
				(t.height = Math.floor(A * O)),
				this.setViewport(0, 0, b, A);
		}),
		(this.getCurrentViewport = function (b) {
			return (
				b === void 0 &&
					(console.warn(
						'WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument'
					),
					(b = new rt())),
				b.copy(T)
			);
		}),
		(this.getViewport = function (b) {
			return b.copy(N);
		}),
		(this.setViewport = function (b, A, O, Y) {
			b.isVector4 ? N.set(b.x, b.y, b.z, b.w) : N.set(b, A, O, Y),
				Me.viewport(T.copy(N).multiplyScalar(U).floor());
		}),
		(this.getScissor = function (b) {
			return b.copy(D);
		}),
		(this.setScissor = function (b, A, O, Y) {
			b.isVector4 ? D.set(b.x, b.y, b.z, b.w) : D.set(b, A, O, Y),
				Me.scissor(P.copy(D).multiplyScalar(U).floor());
		}),
		(this.getScissorTest = function () {
			return B;
		}),
		(this.setScissorTest = function (b) {
			Me.setScissorTest((B = b));
		}),
		(this.getClearColor = function () {
			return Te.getClearColor();
		}),
		(this.setClearColor = function () {
			Te.setClearColor.apply(Te, arguments);
		}),
		(this.getClearAlpha = function () {
			return Te.getClearAlpha();
		}),
		(this.setClearAlpha = function () {
			Te.setClearAlpha.apply(Te, arguments);
		}),
		(this.clear = function (b, A, O) {
			var Y = 0;
			(b === void 0 || b) && (Y |= 16384),
				(A === void 0 || A) && (Y |= 256),
				(O === void 0 || O) && (Y |= 1024),
				V.clear(Y);
		}),
		(this.clearColor = function () {
			this.clear(!0, !1, !1);
		}),
		(this.clearDepth = function () {
			this.clear(!1, !0, !1);
		}),
		(this.clearStencil = function () {
			this.clear(!1, !1, !0);
		}),
		(this.dispose = function () {
			t.removeEventListener('webglcontextlost', Oe, !1),
				t.removeEventListener('webglcontextrestored', F, !1),
				ie.dispose(),
				we.dispose(),
				E.dispose(),
				ye.dispose(),
				Ze.dispose(),
				at.stop();
		});
	function Oe(b) {
		b.preventDefault(), console.log('THREE.WebGLRenderer: Context Lost.'), (d = !0);
	}
	function F() {
		console.log('THREE.WebGLRenderer: Context Restored.'), (d = !1), Be();
	}
	function X(b) {
		var A = b.target;
		A.removeEventListener('dispose', X), fe(A);
	}
	function fe(b) {
		ue(b), E.remove(b);
	}
	function ue(b) {
		var A = E.get(b).program;
		(b.program = void 0), A !== void 0 && me.releaseProgram(A);
	}
	function $(b, A) {
		b.render(function (O) {
			p.renderBufferImmediate(O, A);
		});
	}
	(this.renderBufferImmediate = function (b, A) {
		Me.initAttributes();
		var O = E.get(b);
		b.hasPositions && !O.position && (O.position = V.createBuffer()),
			b.hasNormals && !O.normal && (O.normal = V.createBuffer()),
			b.hasUvs && !O.uv && (O.uv = V.createBuffer()),
			b.hasColors && !O.color && (O.color = V.createBuffer());
		var Y = A.getAttributes();
		b.hasPositions &&
			(V.bindBuffer(34962, O.position),
			V.bufferData(34962, b.positionArray, 35048),
			Me.enableAttribute(Y.position),
			V.vertexAttribPointer(Y.position, 3, 5126, !1, 0, 0)),
			b.hasNormals &&
				(V.bindBuffer(34962, O.normal),
				V.bufferData(34962, b.normalArray, 35048),
				Me.enableAttribute(Y.normal),
				V.vertexAttribPointer(Y.normal, 3, 5126, !1, 0, 0)),
			b.hasUvs &&
				(V.bindBuffer(34962, O.uv),
				V.bufferData(34962, b.uvArray, 35048),
				Me.enableAttribute(Y.uv),
				V.vertexAttribPointer(Y.uv, 2, 5126, !1, 0, 0)),
			b.hasColors &&
				(V.bindBuffer(34962, O.color),
				V.bufferData(34962, b.colorArray, 35048),
				Me.enableAttribute(Y.color),
				V.vertexAttribPointer(Y.color, 3, 5126, !1, 0, 0)),
			Me.disableUnusedAttributes(),
			V.drawArrays(4, 0, b.count),
			(b.count = 0);
	}),
		(this.renderBufferDirect = function (b, A, O, Y, oe, Xe) {
			var je = oe.isMesh && oe.matrixWorld.determinant() < 0;
			Me.setMaterial(Y, je);
			var Ce = Hn(b, A, Y, oe),
				We = !1;
			(y.geometry !== O.id || y.program !== Ce.id || y.wireframe !== (Y.wireframe === !0)) &&
				((y.geometry = O.id), (y.program = Ce.id), (y.wireframe = Y.wireframe === !0), (We = !0)),
				oe.morphTargetInfluences && (Ne.update(oe, O, Y, Ce), (We = !0));
			var tt = O.index,
				ot = O.attributes.position,
				Ae = 1;
			Y.wireframe === !0 && ((tt = z.getWireframeAttribute(O)), (Ae = 2));
			var Le,
				nt = ze;
			tt !== null && ((Le = J.get(tt)), (nt = et), nt.setIndex(Le)),
				We && (de(Y, Ce, O), tt !== null && V.bindBuffer(34963, Le.buffer));
			var Je = 1 / 0;
			tt !== null ? (Je = tt.count) : ot !== void 0 && (Je = ot.count);
			var Xt = O.drawRange.start * Ae,
				Bt = O.drawRange.count * Ae,
				lr = Xe !== null ? Xe.start * Ae : 0,
				An = Xe !== null ? Xe.count * Ae : 1 / 0,
				Oo = Math.max(Xt, lr),
				Jh = Math.min(Je, Xt + Bt, lr + An) - 1,
				Fo = Math.max(0, Jh - Oo + 1);
			if (Fo !== 0) {
				if (oe.isMesh)
					if (Y.wireframe === !0) Me.setLineWidth(Y.wireframeLinewidth * _e()), nt.setMode(1);
					else
						switch (oe.drawMode) {
							case Fl:
								nt.setMode(4);
								break;
							case Rp:
								nt.setMode(5);
								break;
							case Cp:
								nt.setMode(6);
								break;
						}
				else if (oe.isLine) {
					var ko = Y.linewidth;
					ko === void 0 && (ko = 1),
						Me.setLineWidth(ko * _e()),
						oe.isLineSegments ? nt.setMode(1) : oe.isLineLoop ? nt.setMode(2) : nt.setMode(3);
				} else oe.isPoints ? nt.setMode(0) : oe.isSprite && nt.setMode(4);
				O && O.isInstancedBufferGeometry
					? O.maxInstancedCount > 0 && nt.renderInstances(O, Oo, Fo)
					: nt.render(Oo, Fo);
			}
		});
	function de(b, A, O) {
		if (
			O &&
			O.isInstancedBufferGeometry &&
			!pe.isWebGL2 &&
			le.get('ANGLE_instanced_arrays') === null
		) {
			console.error(
				'THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
			);
			return;
		}
		Me.initAttributes();
		var Y = O.attributes,
			oe = A.getAttributes(),
			Xe = b.defaultAttributeValues;
		for (var je in oe) {
			var Ce = oe[je];
			if (Ce >= 0) {
				var We = Y[je];
				if (We !== void 0) {
					var tt = We.normalized,
						ot = We.itemSize,
						Ae = J.get(We);
					if (Ae === void 0) continue;
					var Le = Ae.buffer,
						nt = Ae.type,
						Je = Ae.bytesPerElement;
					if (We.isInterleavedBufferAttribute) {
						var Xt = We.data,
							Bt = Xt.stride,
							lr = We.offset;
						Xt && Xt.isInstancedInterleavedBuffer
							? (Me.enableAttributeAndDivisor(Ce, Xt.meshPerAttribute),
								O.maxInstancedCount === void 0 &&
									(O.maxInstancedCount = Xt.meshPerAttribute * Xt.count))
							: Me.enableAttribute(Ce),
							V.bindBuffer(34962, Le),
							V.vertexAttribPointer(Ce, ot, nt, tt, Bt * Je, lr * Je);
					} else
						We.isInstancedBufferAttribute
							? (Me.enableAttributeAndDivisor(Ce, We.meshPerAttribute),
								O.maxInstancedCount === void 0 &&
									(O.maxInstancedCount = We.meshPerAttribute * We.count))
							: Me.enableAttribute(Ce),
							V.bindBuffer(34962, Le),
							V.vertexAttribPointer(Ce, ot, nt, tt, 0, 0);
				} else if (Xe !== void 0) {
					var An = Xe[je];
					if (An !== void 0)
						switch (An.length) {
							case 2:
								V.vertexAttrib2fv(Ce, An);
								break;
							case 3:
								V.vertexAttrib3fv(Ce, An);
								break;
							case 4:
								V.vertexAttrib4fv(Ce, An);
								break;
							default:
								V.vertexAttrib1fv(Ce, An);
						}
				}
			}
		}
		Me.disableUnusedAttributes();
	}
	this.compile = function (b, A) {
		(h = we.get(b, A)),
			h.init(),
			b.traverse(function (O) {
				O.isLight && (h.pushLight(O), O.castShadow && h.pushShadow(O));
			}),
			h.setupLights(A),
			b.traverse(function (O) {
				if (O.material)
					if (Array.isArray(O.material))
						for (var Y = 0; Y < O.material.length; Y++) Ln(O.material[Y], b.fog, O);
					else Ln(O.material, b.fog, O);
			});
	};
	var Pe = null;
	function Ee(b) {
		Ze.isPresenting() || (Pe && Pe(b));
	}
	var at = new kl();
	at.setAnimationLoop(Ee),
		typeof window < 'u' && at.setContext(window),
		(this.setAnimationLoop = function (b) {
			(Pe = b), Ze.setAnimationLoop(b), at.start();
		}),
		(this.render = function (b, A) {
			var O, Y;
			if (
				(arguments[2] !== void 0 &&
					(console.warn(
						'THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.'
					),
					(O = arguments[2])),
				arguments[3] !== void 0 &&
					(console.warn(
						'THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.'
					),
					(Y = arguments[3])),
				!(A && A.isCamera))
			) {
				console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');
				return;
			}
			if (!d) {
				(y.geometry = null),
					(y.program = null),
					(y.wireframe = !1),
					(_ = -1),
					(L = null),
					b.autoUpdate === !0 && b.updateMatrixWorld(),
					A.parent === null && A.updateMatrixWorld(),
					Ze.enabled && (A = Ze.getCamera(A)),
					(h = we.get(b, A)),
					h.init(),
					b.onBeforeRender(p, b, A, O || x),
					Z.multiplyMatrices(A.projectionMatrix, A.matrixWorldInverse),
					q.setFromMatrix(Z),
					(K = this.localClippingEnabled),
					(j = H.init(this.clippingPlanes, K, A)),
					(c = ie.get(b, A)),
					c.init(),
					Se(b, A, 0, p.sortObjects),
					p.sortObjects === !0 && c.sort(),
					j && H.beginShadows();
				var oe = h.state.shadowsArray;
				vt.render(oe, b, A),
					h.setupLights(A),
					j && H.endShadows(),
					this.info.autoReset && this.info.reset(),
					O !== void 0 && this.setRenderTarget(O),
					pe.multiview && st.attachCamera(A),
					Te.render(c, b, A, Y);
				var Xe = c.opaque,
					je = c.transparent;
				if (b.overrideMaterial) {
					var Ce = b.overrideMaterial;
					Xe.length && yt(Xe, b, A, Ce), je.length && yt(je, b, A, Ce);
				} else Xe.length && yt(Xe, b, A), je.length && yt(je, b, A);
				b.onAfterRender(p, b, A),
					x !== null && (S.updateRenderTargetMipmap(x), S.updateMultisampleRenderTarget(x)),
					Me.buffers.depth.setTest(!0),
					Me.buffers.depth.setMask(!0),
					Me.buffers.color.setMask(!0),
					Me.setPolygonOffset(!1),
					pe.multiview && st.detachCamera(A),
					Ze.enabled && Ze.submitFrame(),
					(c = null),
					(h = null);
			}
		});
	function Se(b, A, O, Y) {
		if (b.visible !== !1) {
			var oe = b.layers.test(A.layers);
			if (oe) {
				if (b.isGroup) O = b.renderOrder;
				else if (b.isLOD) b.autoUpdate === !0 && b.update(A);
				else if (b.isLight) h.pushLight(b), b.castShadow && h.pushShadow(b);
				else if (b.isSprite) {
					if (!b.frustumCulled || q.intersectsSprite(b)) {
						Y && ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);
						var Xe = ye.update(b),
							je = b.material;
						je.visible && c.push(b, Xe, je, O, ve.z, null);
					}
				} else if (b.isImmediateRenderObject)
					Y && ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z),
						c.push(b, null, b.material, O, ve.z, null);
				else if (
					(b.isMesh || b.isLine || b.isPoints) &&
					(b.isSkinnedMesh &&
						b.skeleton.frame !== Ye.render.frame &&
						(b.skeleton.update(), (b.skeleton.frame = Ye.render.frame)),
					!b.frustumCulled || q.intersectsObject(b))
				) {
					Y && ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);
					var Xe = ye.update(b),
						je = b.material;
					if (Array.isArray(je))
						for (var Ce = Xe.groups, We = 0, tt = Ce.length; We < tt; We++) {
							var ot = Ce[We],
								Ae = je[ot.materialIndex];
							Ae && Ae.visible && c.push(b, Xe, Ae, O, ve.z, ot);
						}
					else je.visible && c.push(b, Xe, je, O, ve.z, null);
				}
			}
			for (var Le = b.children, We = 0, tt = Le.length; We < tt; We++) Se(Le[We], A, O, Y);
		}
	}
	function yt(b, A, O, Y) {
		for (var oe = 0, Xe = b.length; oe < Xe; oe++) {
			var je = b[oe],
				Ce = je.object,
				We = je.geometry,
				tt = Y === void 0 ? je.material : Y,
				ot = je.group;
			if (O.isArrayCamera)
				if (((C = O), pe.multiview)) St(Ce, A, O, We, tt, ot);
				else
					for (var Ae = O.cameras, Le = 0, nt = Ae.length; Le < nt; Le++) {
						var Je = Ae[Le];
						Ce.layers.test(Je.layers) &&
							(Me.viewport(T.copy(Je.viewport)), h.setupLights(Je), St(Ce, A, Je, We, tt, ot));
					}
			else (C = null), St(Ce, A, O, We, tt, ot);
		}
	}
	function St(b, A, O, Y, oe, Xe) {
		if (
			(b.onBeforeRender(p, A, O, Y, oe, Xe),
			(h = we.get(A, C || O)),
			b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, b.matrixWorld),
			b.normalMatrix.getNormalMatrix(b.modelViewMatrix),
			b.isImmediateRenderObject)
		) {
			Me.setMaterial(oe);
			var je = Hn(O, A.fog, oe, b);
			(y.geometry = null), (y.program = null), (y.wireframe = !1), $(b, je);
		} else p.renderBufferDirect(O, A.fog, Y, oe, b, Xe);
		b.onAfterRender(p, A, O, Y, oe, Xe), (h = we.get(A, C || O));
	}
	function Ln(b, A, O) {
		var Y = E.get(b),
			oe = h.state.lights,
			Xe = h.state.shadowsArray,
			je = oe.state.version,
			Ce = me.getParameters(b, oe.state, Xe, A, H.numPlanes, H.numIntersection, O),
			We = me.getProgramCode(b, Ce),
			tt = Y.program,
			ot = !0;
		if (tt === void 0) b.addEventListener('dispose', X);
		else if (tt.code !== We) ue(b);
		else if (Y.lightsStateVersion !== je) (Y.lightsStateVersion = je), (ot = !1);
		else {
			if (Ce.shaderID !== void 0) return;
			ot = !1;
		}
		if (ot) {
			if (Ce.shaderID) {
				var Ae = Qn[Ce.shaderID];
				Y.shader = {
					name: b.type,
					uniforms: Ai(Ae.uniforms),
					vertexShader: Ae.vertexShader,
					fragmentShader: Ae.fragmentShader
				};
			} else
				Y.shader = {
					name: b.type,
					uniforms: b.uniforms,
					vertexShader: b.vertexShader,
					fragmentShader: b.fragmentShader
				};
			b.onBeforeCompile(Y.shader, p),
				(We = me.getProgramCode(b, Ce)),
				(tt = me.acquireProgram(b, Y.shader, Ce, We)),
				(Y.program = tt),
				(b.program = tt);
		}
		var Le = tt.getAttributes();
		if (b.morphTargets) {
			b.numSupportedMorphTargets = 0;
			for (var nt = 0; nt < p.maxMorphTargets; nt++)
				Le['morphTarget' + nt] >= 0 && b.numSupportedMorphTargets++;
		}
		if (b.morphNormals) {
			b.numSupportedMorphNormals = 0;
			for (var nt = 0; nt < p.maxMorphNormals; nt++)
				Le['morphNormal' + nt] >= 0 && b.numSupportedMorphNormals++;
		}
		var Je = Y.shader.uniforms;
		((!b.isShaderMaterial && !b.isRawShaderMaterial) || b.clipping === !0) &&
			((Y.numClippingPlanes = H.numPlanes),
			(Y.numIntersection = H.numIntersection),
			(Je.clippingPlanes = H.uniform)),
			(Y.fog = A),
			(Y.lightsStateVersion = je),
			b.lights &&
				((Je.ambientLightColor.value = oe.state.ambient),
				(Je.lightProbe.value = oe.state.probe),
				(Je.directionalLights.value = oe.state.directional),
				(Je.spotLights.value = oe.state.spot),
				(Je.rectAreaLights.value = oe.state.rectArea),
				(Je.pointLights.value = oe.state.point),
				(Je.hemisphereLights.value = oe.state.hemi),
				(Je.directionalShadowMap.value = oe.state.directionalShadowMap),
				(Je.directionalShadowMatrix.value = oe.state.directionalShadowMatrix),
				(Je.spotShadowMap.value = oe.state.spotShadowMap),
				(Je.spotShadowMatrix.value = oe.state.spotShadowMatrix),
				(Je.pointShadowMap.value = oe.state.pointShadowMap),
				(Je.pointShadowMatrix.value = oe.state.pointShadowMatrix));
		var Xt = Y.program.getUniforms(),
			Bt = mr.seqWithValue(Xt.seq, Je);
		Y.uniformsList = Bt;
	}
	function Hn(b, A, O, Y) {
		S.resetTextureUnits();
		var oe = E.get(O),
			Xe = h.state.lights;
		if (j && (K || b !== L)) {
			var je = b === L && O.id === _;
			H.setState(O.clippingPlanes, O.clipIntersection, O.clipShadows, b, oe, je);
		}
		O.needsUpdate === !1 &&
			(oe.program === void 0 ||
				(O.fog && oe.fog !== A) ||
				(O.lights && oe.lightsStateVersion !== Xe.state.version) ||
				(oe.numClippingPlanes !== void 0 &&
					(oe.numClippingPlanes !== H.numPlanes || oe.numIntersection !== H.numIntersection))) &&
			(O.needsUpdate = !0),
			O.needsUpdate && (Ln(O, A, Y), (O.needsUpdate = !1));
		var Ce = !1,
			We = !1,
			tt = !1,
			ot = oe.program,
			Ae = ot.getUniforms(),
			Le = oe.shader.uniforms;
		if (
			(Me.useProgram(ot.program) && ((Ce = !0), (We = !0), (tt = !0)),
			O.id !== _ && ((_ = O.id), (We = !0)),
			Ce || L !== b)
		) {
			if (
				(ot.numMultiviewViews > 0
					? st.updateCameraProjectionMatricesUniform(b, Ae)
					: Ae.setValue(V, 'projectionMatrix', b.projectionMatrix),
				pe.logarithmicDepthBuffer &&
					Ae.setValue(V, 'logDepthBufFC', 2 / (Math.log(b.far + 1) / Math.LN2)),
				L !== b && ((L = b), (We = !0), (tt = !0)),
				O.isShaderMaterial || O.isMeshPhongMaterial || O.isMeshStandardMaterial || O.envMap)
			) {
				var nt = Ae.map.cameraPosition;
				nt !== void 0 && nt.setValue(V, ve.setFromMatrixPosition(b.matrixWorld));
			}
			(O.isMeshPhongMaterial ||
				O.isMeshLambertMaterial ||
				O.isMeshBasicMaterial ||
				O.isMeshStandardMaterial ||
				O.isShaderMaterial ||
				O.skinning) &&
				(ot.numMultiviewViews > 0
					? st.updateCameraViewMatricesUniform(b, Ae)
					: Ae.setValue(V, 'viewMatrix', b.matrixWorldInverse));
		}
		if (O.skinning) {
			Ae.setOptional(V, Y, 'bindMatrix'), Ae.setOptional(V, Y, 'bindMatrixInverse');
			var Je = Y.skeleton;
			if (Je) {
				var Xt = Je.bones;
				if (pe.floatVertexTextures) {
					if (Je.boneTexture === void 0) {
						var Bt = Math.sqrt(Xt.length * 4);
						(Bt = Ue.ceilPowerOfTwo(Bt)), (Bt = Math.max(Bt, 4));
						var lr = new Float32Array(Bt * Bt * 4);
						lr.set(Je.boneMatrices);
						var An = new Ri(lr, Bt, Bt, tr, ha);
						(Je.boneMatrices = lr), (Je.boneTexture = An), (Je.boneTextureSize = Bt);
					}
					Ae.setValue(V, 'boneTexture', Je.boneTexture, S),
						Ae.setValue(V, 'boneTextureSize', Je.boneTextureSize);
				} else Ae.setOptional(V, Je, 'boneMatrices');
			}
		}
		return (
			(We || oe.receiveShadow !== Y.receiveShadow) &&
				((oe.receiveShadow = Y.receiveShadow), Ae.setValue(V, 'receiveShadow', Y.receiveShadow)),
			We &&
				(Ae.setValue(V, 'toneMappingExposure', p.toneMappingExposure),
				Ae.setValue(V, 'toneMappingWhitePoint', p.toneMappingWhitePoint),
				O.lights && Kh(Le, tt),
				A && O.fog && Tn(Le, A),
				O.isMeshBasicMaterial
					? Ut(Le, O)
					: O.isMeshLambertMaterial
						? (Ut(Le, O), Bh(Le, O))
						: O.isMeshPhongMaterial
							? (Ut(Le, O), O.isMeshToonMaterial ? Gh(Le, O) : Wl(Le, O))
							: O.isMeshStandardMaterial
								? (Ut(Le, O), O.isMeshPhysicalMaterial ? Vh(Le, O) : ql(Le, O))
								: O.isMeshMatcapMaterial
									? (Ut(Le, O), Hh(Le, O))
									: O.isMeshDepthMaterial
										? (Ut(Le, O), Wh(Le, O))
										: O.isMeshDistanceMaterial
											? (Ut(Le, O), qh(Le, O))
											: O.isMeshNormalMaterial
												? (Ut(Le, O), jh(Le, O))
												: O.isLineBasicMaterial
													? (Er(Le, O), O.isLineDashedMaterial && Sr(Le, O))
													: O.isPointsMaterial
														? Lr(Le, O)
														: O.isSpriteMaterial
															? Tr(Le, O)
															: O.isShadowMaterial &&
																(Le.color.value.copy(O.color), (Le.opacity.value = O.opacity)),
				Le.ltc_1 !== void 0 && (Le.ltc_1.value = ce.LTC_1),
				Le.ltc_2 !== void 0 && (Le.ltc_2.value = ce.LTC_2),
				mr.upload(V, oe.uniformsList, Le, S)),
			O.isShaderMaterial &&
				O.uniformsNeedUpdate === !0 &&
				(mr.upload(V, oe.uniformsList, Le, S), (O.uniformsNeedUpdate = !1)),
			O.isSpriteMaterial && Ae.setValue(V, 'center', Y.center),
			ot.numMultiviewViews > 0
				? st.updateObjectMatricesUniforms(Y, b, Ae)
				: (Ae.setValue(V, 'modelViewMatrix', Y.modelViewMatrix),
					Ae.setValue(V, 'normalMatrix', Y.normalMatrix)),
			Ae.setValue(V, 'modelMatrix', Y.matrixWorld),
			ot
		);
	}
	function Ut(b, A) {
		(b.opacity.value = A.opacity),
			A.color && b.diffuse.value.copy(A.color),
			A.emissive && b.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),
			A.map && (b.map.value = A.map),
			A.alphaMap && (b.alphaMap.value = A.alphaMap),
			A.specularMap && (b.specularMap.value = A.specularMap),
			A.envMap &&
				((b.envMap.value = A.envMap),
				(b.flipEnvMap.value = A.envMap.isCubeTexture ? -1 : 1),
				(b.reflectivity.value = A.reflectivity),
				(b.refractionRatio.value = A.refractionRatio),
				(b.maxMipLevel.value = E.get(A.envMap).__maxMipLevel)),
			A.lightMap &&
				((b.lightMap.value = A.lightMap), (b.lightMapIntensity.value = A.lightMapIntensity)),
			A.aoMap && ((b.aoMap.value = A.aoMap), (b.aoMapIntensity.value = A.aoMapIntensity));
		var O;
		A.map
			? (O = A.map)
			: A.specularMap
				? (O = A.specularMap)
				: A.displacementMap
					? (O = A.displacementMap)
					: A.normalMap
						? (O = A.normalMap)
						: A.bumpMap
							? (O = A.bumpMap)
							: A.roughnessMap
								? (O = A.roughnessMap)
								: A.metalnessMap
									? (O = A.metalnessMap)
									: A.alphaMap
										? (O = A.alphaMap)
										: A.emissiveMap && (O = A.emissiveMap),
			O !== void 0 &&
				(O.isWebGLRenderTarget && (O = O.texture),
				O.matrixAutoUpdate === !0 && O.updateMatrix(),
				b.uvTransform.value.copy(O.matrix));
	}
	function Er(b, A) {
		b.diffuse.value.copy(A.color), (b.opacity.value = A.opacity);
	}
	function Sr(b, A) {
		(b.dashSize.value = A.dashSize),
			(b.totalSize.value = A.dashSize + A.gapSize),
			(b.scale.value = A.scale);
	}
	function Lr(b, A) {
		b.diffuse.value.copy(A.color),
			(b.opacity.value = A.opacity),
			(b.size.value = A.size * U),
			(b.scale.value = w * 0.5),
			(b.map.value = A.map),
			A.map !== null &&
				(A.map.matrixAutoUpdate === !0 && A.map.updateMatrix(),
				b.uvTransform.value.copy(A.map.matrix));
	}
	function Tr(b, A) {
		b.diffuse.value.copy(A.color),
			(b.opacity.value = A.opacity),
			(b.rotation.value = A.rotation),
			(b.map.value = A.map),
			A.map !== null &&
				(A.map.matrixAutoUpdate === !0 && A.map.updateMatrix(),
				b.uvTransform.value.copy(A.map.matrix));
	}
	function Tn(b, A) {
		b.fogColor.value.copy(A.color),
			A.isFog
				? ((b.fogNear.value = A.near), (b.fogFar.value = A.far))
				: A.isFogExp2 && (b.fogDensity.value = A.density);
	}
	function Bh(b, A) {
		A.emissiveMap && (b.emissiveMap.value = A.emissiveMap);
	}
	function Wl(b, A) {
		b.specular.value.copy(A.specular),
			(b.shininess.value = Math.max(A.shininess, 1e-4)),
			A.emissiveMap && (b.emissiveMap.value = A.emissiveMap),
			A.bumpMap &&
				((b.bumpMap.value = A.bumpMap),
				(b.bumpScale.value = A.bumpScale),
				A.side === Tt && (b.bumpScale.value *= -1)),
			A.normalMap &&
				((b.normalMap.value = A.normalMap),
				b.normalScale.value.copy(A.normalScale),
				A.side === Tt && b.normalScale.value.negate()),
			A.displacementMap &&
				((b.displacementMap.value = A.displacementMap),
				(b.displacementScale.value = A.displacementScale),
				(b.displacementBias.value = A.displacementBias));
	}
	function Gh(b, A) {
		Wl(b, A), A.gradientMap && (b.gradientMap.value = A.gradientMap);
	}
	function ql(b, A) {
		(b.roughness.value = A.roughness),
			(b.metalness.value = A.metalness),
			A.roughnessMap && (b.roughnessMap.value = A.roughnessMap),
			A.metalnessMap && (b.metalnessMap.value = A.metalnessMap),
			A.emissiveMap && (b.emissiveMap.value = A.emissiveMap),
			A.bumpMap &&
				((b.bumpMap.value = A.bumpMap),
				(b.bumpScale.value = A.bumpScale),
				A.side === Tt && (b.bumpScale.value *= -1)),
			A.normalMap &&
				((b.normalMap.value = A.normalMap),
				b.normalScale.value.copy(A.normalScale),
				A.side === Tt && b.normalScale.value.negate()),
			A.displacementMap &&
				((b.displacementMap.value = A.displacementMap),
				(b.displacementScale.value = A.displacementScale),
				(b.displacementBias.value = A.displacementBias)),
			A.envMap && (b.envMapIntensity.value = A.envMapIntensity);
	}
	function Vh(b, A) {
		ql(b, A),
			(b.reflectivity.value = A.reflectivity),
			(b.clearcoat.value = A.clearcoat),
			(b.clearcoatRoughness.value = A.clearcoatRoughness),
			A.sheen && b.sheen.value.copy(A.sheen),
			A.clearcoatNormalMap &&
				(b.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),
				(b.clearcoatNormalMap.value = A.clearcoatNormalMap),
				A.side === Tt && b.clearcoatNormalScale.value.negate()),
			(b.transparency.value = A.transparency);
	}
	function Hh(b, A) {
		A.matcap && (b.matcap.value = A.matcap),
			A.bumpMap &&
				((b.bumpMap.value = A.bumpMap),
				(b.bumpScale.value = A.bumpScale),
				A.side === Tt && (b.bumpScale.value *= -1)),
			A.normalMap &&
				((b.normalMap.value = A.normalMap),
				b.normalScale.value.copy(A.normalScale),
				A.side === Tt && b.normalScale.value.negate()),
			A.displacementMap &&
				((b.displacementMap.value = A.displacementMap),
				(b.displacementScale.value = A.displacementScale),
				(b.displacementBias.value = A.displacementBias));
	}
	function Wh(b, A) {
		A.displacementMap &&
			((b.displacementMap.value = A.displacementMap),
			(b.displacementScale.value = A.displacementScale),
			(b.displacementBias.value = A.displacementBias));
	}
	function qh(b, A) {
		A.displacementMap &&
			((b.displacementMap.value = A.displacementMap),
			(b.displacementScale.value = A.displacementScale),
			(b.displacementBias.value = A.displacementBias)),
			b.referencePosition.value.copy(A.referencePosition),
			(b.nearDistance.value = A.nearDistance),
			(b.farDistance.value = A.farDistance);
	}
	function jh(b, A) {
		A.bumpMap &&
			((b.bumpMap.value = A.bumpMap),
			(b.bumpScale.value = A.bumpScale),
			A.side === Tt && (b.bumpScale.value *= -1)),
			A.normalMap &&
				((b.normalMap.value = A.normalMap),
				b.normalScale.value.copy(A.normalScale),
				A.side === Tt && b.normalScale.value.negate()),
			A.displacementMap &&
				((b.displacementMap.value = A.displacementMap),
				(b.displacementScale.value = A.displacementScale),
				(b.displacementBias.value = A.displacementBias));
	}
	function Kh(b, A) {
		(b.ambientLightColor.needsUpdate = A),
			(b.lightProbe.needsUpdate = A),
			(b.directionalLights.needsUpdate = A),
			(b.pointLights.needsUpdate = A),
			(b.spotLights.needsUpdate = A),
			(b.rectAreaLights.needsUpdate = A),
			(b.hemisphereLights.needsUpdate = A);
	}
	(this.setFramebuffer = function (b) {
		m !== b && V.bindFramebuffer(36160, b), (m = b);
	}),
		(this.getActiveCubeFace = function () {
			return v;
		}),
		(this.getActiveMipmapLevel = function () {
			return g;
		}),
		(this.getRenderTarget = function () {
			return x;
		}),
		(this.setRenderTarget = function (b, A, O) {
			(x = b),
				(v = A),
				(g = O),
				b && E.get(b).__webglFramebuffer === void 0 && S.setupRenderTarget(b);
			var Y = m,
				oe = !1;
			if (b) {
				var Xe = E.get(b).__webglFramebuffer;
				b.isWebGLRenderTargetCube
					? ((Y = Xe[A || 0]), (oe = !0))
					: b.isWebGLMultisampleRenderTarget
						? (Y = E.get(b).__webglMultisampledFramebuffer)
						: (Y = Xe),
					T.copy(b.viewport),
					P.copy(b.scissor),
					(k = b.scissorTest);
			} else T.copy(N).multiplyScalar(U).floor(), P.copy(D).multiplyScalar(U).floor(), (k = B);
			if (
				(M !== Y && (V.bindFramebuffer(36160, Y), (M = Y)),
				Me.viewport(T),
				Me.scissor(P),
				Me.setScissorTest(k),
				oe)
			) {
				var je = E.get(b.texture);
				V.framebufferTexture2D(36160, 36064, 34069 + (A || 0), je.__webglTexture, O || 0);
			}
		}),
		(this.readRenderTargetPixels = function (b, A, O, Y, oe, Xe, je) {
			if (!(b && b.isWebGLRenderTarget)) {
				console.error(
					'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.'
				);
				return;
			}
			var Ce = E.get(b).__webglFramebuffer;
			if ((b.isWebGLRenderTargetCube && je !== void 0 && (Ce = Ce[je]), Ce)) {
				var We = !1;
				Ce !== M && (V.bindFramebuffer(36160, Ce), (We = !0));
				try {
					var tt = b.texture,
						ot = tt.format,
						Ae = tt.type;
					if (ot !== tr && ge.convert(ot) !== V.getParameter(35739)) {
						console.error(
							'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.'
						);
						return;
					}
					if (
						Ae !== Nl &&
						ge.convert(Ae) !== V.getParameter(35738) &&
						!(
							Ae === ha &&
							(pe.isWebGL2 || le.get('OES_texture_float') || le.get('WEBGL_color_buffer_float'))
						) &&
						!(
							Ae === Ol &&
							(pe.isWebGL2
								? le.get('EXT_color_buffer_float')
								: le.get('EXT_color_buffer_half_float'))
						)
					) {
						console.error(
							'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.'
						);
						return;
					}
					V.checkFramebufferStatus(36160) === 36053
						? A >= 0 &&
							A <= b.width - Y &&
							O >= 0 &&
							O <= b.height - oe &&
							V.readPixels(A, O, Y, oe, ge.convert(ot), ge.convert(Ae), Xe)
						: console.error(
								'THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.'
							);
				} finally {
					We && V.bindFramebuffer(36160, M);
				}
			}
		}),
		(this.copyFramebufferToTexture = function (b, A, O) {
			var Y = A.image.width,
				oe = A.image.height,
				Xe = ge.convert(A.format);
			S.setTexture2D(A, 0), V.copyTexImage2D(3553, O || 0, Xe, b.x, b.y, Y, oe, 0);
		}),
		(this.copyTextureToTexture = function (b, A, O, Y) {
			var oe = A.image.width,
				Xe = A.image.height,
				je = ge.convert(O.format),
				Ce = ge.convert(O.type);
			S.setTexture2D(O, 0),
				A.isDataTexture
					? V.texSubImage2D(3553, Y || 0, b.x, b.y, oe, Xe, je, Ce, A.image.data)
					: V.texSubImage2D(3553, Y || 0, b.x, b.y, je, Ce, A.image);
		}),
		typeof __THREE_DEVTOOLS__ < 'u' &&
			__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
}
function ku(e, t) {
	(this.name = ''), (this.color = new he(e)), (this.density = t !== void 0 ? t : 25e-5);
}
Object.assign(ku.prototype, {
	isFogExp2: !0,
	clone: function () {
		return new ku(this.color, this.density);
	},
	toJSON: function () {
		return { type: 'FogExp2', color: this.color.getHex(), density: this.density };
	}
});
function Uu(e, t, n) {
	(this.name = ''),
		(this.color = new he(e)),
		(this.near = t !== void 0 ? t : 1),
		(this.far = n !== void 0 ? n : 1e3);
}
Object.assign(Uu.prototype, {
	isFog: !0,
	clone: function () {
		return new Uu(this.color, this.near, this.far);
	},
	toJSON: function () {
		return { type: 'Fog', color: this.color.getHex(), near: this.near, far: this.far };
	}
});
function Zr(e, t) {
	(this.array = e),
		(this.stride = t),
		(this.count = e !== void 0 ? e.length / t : 0),
		(this.dynamic = !1),
		(this.updateRange = { offset: 0, count: -1 }),
		(this.version = 0);
}
Object.defineProperty(Zr.prototype, 'needsUpdate', {
	set: function (e) {
		e === !0 && this.version++;
	}
});
Object.assign(Zr.prototype, {
	isInterleavedBuffer: !0,
	onUploadCallback: function () {},
	setDynamic: function (e) {
		return (this.dynamic = e), this;
	},
	copy: function (e) {
		return (
			(this.array = new e.array.constructor(e.array)),
			(this.count = e.count),
			(this.stride = e.stride),
			(this.dynamic = e.dynamic),
			this
		);
	},
	copyAt: function (e, t, n) {
		(e *= this.stride), (n *= t.stride);
		for (var r = 0, i = this.stride; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	},
	set: function (e, t) {
		return t === void 0 && (t = 0), this.array.set(e, t), this;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	onUpload: function (e) {
		return (this.onUploadCallback = e), this;
	}
});
function Qs(e, t, n, r) {
	(this.data = e), (this.itemSize = t), (this.offset = n), (this.normalized = r === !0);
}
Object.defineProperties(Qs.prototype, {
	count: {
		get: function () {
			return this.data.count;
		}
	},
	array: {
		get: function () {
			return this.data.array;
		}
	}
});
Object.assign(Qs.prototype, {
	isInterleavedBufferAttribute: !0,
	setX: function (e, t) {
		return (this.data.array[e * this.data.stride + this.offset] = t), this;
	},
	setY: function (e, t) {
		return (this.data.array[e * this.data.stride + this.offset + 1] = t), this;
	},
	setZ: function (e, t) {
		return (this.data.array[e * this.data.stride + this.offset + 2] = t), this;
	},
	setW: function (e, t) {
		return (this.data.array[e * this.data.stride + this.offset + 3] = t), this;
	},
	getX: function (e) {
		return this.data.array[e * this.data.stride + this.offset];
	},
	getY: function (e) {
		return this.data.array[e * this.data.stride + this.offset + 1];
	},
	getZ: function (e) {
		return this.data.array[e * this.data.stride + this.offset + 2];
	},
	getW: function (e) {
		return this.data.array[e * this.data.stride + this.offset + 3];
	},
	setXY: function (e, t, n) {
		return (
			(e = e * this.data.stride + this.offset),
			(this.data.array[e + 0] = t),
			(this.data.array[e + 1] = n),
			this
		);
	},
	setXYZ: function (e, t, n, r) {
		return (
			(e = e * this.data.stride + this.offset),
			(this.data.array[e + 0] = t),
			(this.data.array[e + 1] = n),
			(this.data.array[e + 2] = r),
			this
		);
	},
	setXYZW: function (e, t, n, r, i) {
		return (
			(e = e * this.data.stride + this.offset),
			(this.data.array[e + 0] = t),
			(this.data.array[e + 1] = n),
			(this.data.array[e + 2] = r),
			(this.data.array[e + 3] = i),
			this
		);
	}
});
function Qr(e) {
	De.call(this),
		(this.type = 'SpriteMaterial'),
		(this.color = new he(16777215)),
		(this.map = null),
		(this.rotation = 0),
		(this.sizeAttenuation = !0),
		(this.lights = !1),
		(this.transparent = !0),
		this.setValues(e);
}
Qr.prototype = Object.create(De.prototype);
Qr.prototype.constructor = Qr;
Qr.prototype.isSpriteMaterial = !0;
Qr.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		this.color.copy(e.color),
		(this.map = e.map),
		(this.rotation = e.rotation),
		(this.sizeAttenuation = e.sizeAttenuation),
		this
	);
};
var hi,
	Qi = new R(),
	di = new R(),
	pi = new R(),
	vi = new W(),
	$i = new W(),
	dh = new He(),
	ps = new R(),
	zi = new R(),
	vs = new R(),
	Nf = new W(),
	cu = new W(),
	Of = new W();
function Bu(e) {
	if ((se.call(this), (this.type = 'Sprite'), hi === void 0)) {
		hi = new ae();
		var t = new Float32Array([
				-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1
			]),
			n = new Zr(t, 5);
		hi.setIndex([0, 1, 2, 0, 2, 3]),
			hi.addAttribute('position', new Qs(n, 3, 0, !1)),
			hi.addAttribute('uv', new Qs(n, 2, 3, !1));
	}
	(this.geometry = hi),
		(this.material = e !== void 0 ? e : new Qr()),
		(this.center = new W(0.5, 0.5));
}
Bu.prototype = Object.assign(Object.create(se.prototype), {
	constructor: Bu,
	isSprite: !0,
	raycast: function (e, t) {
		e.camera === null &&
			console.error(
				'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
			),
			di.setFromMatrixScale(this.matrixWorld),
			dh.copy(e.camera.matrixWorld),
			this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld),
			pi.setFromMatrixPosition(this.modelViewMatrix),
			e.camera.isPerspectiveCamera &&
				this.material.sizeAttenuation === !1 &&
				di.multiplyScalar(-pi.z);
		var n = this.material.rotation,
			r,
			i;
		n !== 0 && ((i = Math.cos(n)), (r = Math.sin(n)));
		var a = this.center;
		ms(ps.set(-0.5, -0.5, 0), pi, a, di, r, i),
			ms(zi.set(0.5, -0.5, 0), pi, a, di, r, i),
			ms(vs.set(0.5, 0.5, 0), pi, a, di, r, i),
			Nf.set(0, 0),
			cu.set(1, 0),
			Of.set(1, 1);
		var s = e.ray.intersectTriangle(ps, zi, vs, !1, Qi);
		if (
			!(
				s === null &&
				(ms(zi.set(-0.5, 0.5, 0), pi, a, di, r, i),
				cu.set(0, 1),
				(s = e.ray.intersectTriangle(ps, vs, zi, !1, Qi)),
				s === null)
			)
		) {
			var o = e.ray.origin.distanceTo(Qi);
			o < e.near ||
				o > e.far ||
				t.push({
					distance: o,
					point: Qi.clone(),
					uv: Ct.getUV(Qi, ps, zi, vs, Nf, cu, Of, new W()),
					face: null,
					object: this
				});
		}
	},
	clone: function () {
		return new this.constructor(this.material).copy(this);
	},
	copy: function (e) {
		return se.prototype.copy.call(this, e), e.center !== void 0 && this.center.copy(e.center), this;
	}
});
function ms(e, t, n, r, i, a) {
	vi.subVectors(e, n).addScalar(0.5).multiply(r),
		i !== void 0 ? (($i.x = a * vi.x - i * vi.y), ($i.y = i * vi.x + a * vi.y)) : $i.copy(vi),
		e.copy(t),
		(e.x += $i.x),
		(e.y += $i.y),
		e.applyMatrix4(dh);
}
var gs = new R(),
	Ff = new R();
function $s() {
	se.call(this),
		(this.type = 'LOD'),
		Object.defineProperties(this, { levels: { enumerable: !0, value: [] } }),
		(this.autoUpdate = !0);
}
$s.prototype = Object.assign(Object.create(se.prototype), {
	constructor: $s,
	isLOD: !0,
	copy: function (e) {
		se.prototype.copy.call(this, e, !1);
		for (var t = e.levels, n = 0, r = t.length; n < r; n++) {
			var i = t[n];
			this.addLevel(i.object.clone(), i.distance);
		}
		return this;
	},
	addLevel: function (e, t) {
		t === void 0 && (t = 0), (t = Math.abs(t));
		for (var n = this.levels, r = 0; r < n.length && !(t < n[r].distance); r++);
		return n.splice(r, 0, { distance: t, object: e }), this.add(e), this;
	},
	getObjectForDistance: function (e) {
		for (var t = this.levels, n = 1, r = t.length; n < r && !(e < t[n].distance); n++);
		return t[n - 1].object;
	},
	raycast: function (e, t) {
		gs.setFromMatrixPosition(this.matrixWorld);
		var n = e.ray.origin.distanceTo(gs);
		this.getObjectForDistance(n).raycast(e, t);
	},
	update: function (e) {
		var t = this.levels;
		if (t.length > 1) {
			gs.setFromMatrixPosition(e.matrixWorld), Ff.setFromMatrixPosition(this.matrixWorld);
			var n = gs.distanceTo(Ff);
			t[0].object.visible = !0;
			for (var r = 1, i = t.length; r < i && n >= t[r].distance; r++)
				(t[r - 1].object.visible = !1), (t[r].object.visible = !0);
			for (; r < i; r++) t[r].object.visible = !1;
		}
	},
	toJSON: function (e) {
		var t = se.prototype.toJSON.call(this, e);
		t.object.levels = [];
		for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
			var a = n[r];
			t.object.levels.push({ object: a.object.uuid, distance: a.distance });
		}
		return t;
	}
});
function zs(e, t) {
	e &&
		e.isGeometry &&
		console.error(
			'THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
		),
		wt.call(this, e, t),
		(this.type = 'SkinnedMesh'),
		(this.bindMode = 'attached'),
		(this.bindMatrix = new He()),
		(this.bindMatrixInverse = new He());
}
zs.prototype = Object.assign(Object.create(wt.prototype), {
	constructor: zs,
	isSkinnedMesh: !0,
	bind: function (e, t) {
		(this.skeleton = e),
			t === void 0 &&
				(this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), (t = this.matrixWorld)),
			this.bindMatrix.copy(t),
			this.bindMatrixInverse.getInverse(t);
	},
	pose: function () {
		this.skeleton.pose();
	},
	normalizeSkinWeights: function () {
		for (
			var e = new rt(), t = this.geometry.attributes.skinWeight, n = 0, r = t.count;
			n < r;
			n++
		) {
			(e.x = t.getX(n)), (e.y = t.getY(n)), (e.z = t.getZ(n)), (e.w = t.getW(n));
			var i = 1 / e.manhattanLength();
			i !== 1 / 0 ? e.multiplyScalar(i) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
		}
	},
	updateMatrixWorld: function (e) {
		wt.prototype.updateMatrixWorld.call(this, e),
			this.bindMode === 'attached'
				? this.bindMatrixInverse.getInverse(this.matrixWorld)
				: this.bindMode === 'detached'
					? this.bindMatrixInverse.getInverse(this.bindMatrix)
					: console.warn('THREE.SkinnedMesh: Unrecognized bindMode: ' + this.bindMode);
	},
	clone: function () {
		return new this.constructor(this.geometry, this.material).copy(this);
	}
});
var kf = new He(),
	G0 = new He();
function Gu(e, t) {
	if (
		((e = e || []),
		(this.bones = e.slice(0)),
		(this.boneMatrices = new Float32Array(this.bones.length * 16)),
		(this.frame = -1),
		t === void 0)
	)
		this.calculateInverses();
	else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
	else {
		console.warn('THREE.Skeleton boneInverses is the wrong length.'), (this.boneInverses = []);
		for (var n = 0, r = this.bones.length; n < r; n++) this.boneInverses.push(new He());
	}
}
Object.assign(Gu.prototype, {
	calculateInverses: function () {
		this.boneInverses = [];
		for (var e = 0, t = this.bones.length; e < t; e++) {
			var n = new He();
			this.bones[e] && n.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(n);
		}
	},
	pose: function () {
		var e, t, n;
		for (t = 0, n = this.bones.length; t < n; t++)
			(e = this.bones[t]), e && e.matrixWorld.getInverse(this.boneInverses[t]);
		for (t = 0, n = this.bones.length; t < n; t++)
			(e = this.bones[t]),
				e &&
					(e.parent && e.parent.isBone
						? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld))
						: e.matrix.copy(e.matrixWorld),
					e.matrix.decompose(e.position, e.quaternion, e.scale));
	},
	update: function () {
		for (
			var e = this.bones,
				t = this.boneInverses,
				n = this.boneMatrices,
				r = this.boneTexture,
				i = 0,
				a = e.length;
			i < a;
			i++
		) {
			var s = e[i] ? e[i].matrixWorld : G0;
			kf.multiplyMatrices(s, t[i]), kf.toArray(n, i * 16);
		}
		r !== void 0 && (r.needsUpdate = !0);
	},
	clone: function () {
		return new Gu(this.bones, this.boneInverses);
	},
	getBoneByName: function (e) {
		for (var t = 0, n = this.bones.length; t < n; t++) {
			var r = this.bones[t];
			if (r.name === e) return r;
		}
	}
});
function Uf() {
	se.call(this), (this.type = 'Bone');
}
Uf.prototype = Object.assign(Object.create(se.prototype), { constructor: Uf, isBone: !0 });
function ft(e) {
	De.call(this),
		(this.type = 'LineBasicMaterial'),
		(this.color = new he(16777215)),
		(this.linewidth = 1),
		(this.linecap = 'round'),
		(this.linejoin = 'round'),
		(this.lights = !1),
		this.setValues(e);
}
ft.prototype = Object.create(De.prototype);
ft.prototype.constructor = ft;
ft.prototype.isLineBasicMaterial = !0;
ft.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		this.color.copy(e.color),
		(this.linewidth = e.linewidth),
		(this.linecap = e.linecap),
		(this.linejoin = e.linejoin),
		this
	);
};
var Bf = new R(),
	Gf = new R(),
	Vf = new He(),
	_s = new Ki(),
	xs = new Mr();
function Ft(e, t, n) {
	n === 1 &&
		console.error(
			'THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.'
		),
		se.call(this),
		(this.type = 'Line'),
		(this.geometry = e !== void 0 ? e : new ae()),
		(this.material = t !== void 0 ? t : new ft({ color: Math.random() * 16777215 }));
}
Ft.prototype = Object.assign(Object.create(se.prototype), {
	constructor: Ft,
	isLine: !0,
	computeLineDistances: function () {
		var e = this.geometry;
		if (e.isBufferGeometry)
			if (e.index === null) {
				for (var t = e.attributes.position, n = [0], r = 1, i = t.count; r < i; r++)
					Bf.fromBufferAttribute(t, r - 1),
						Gf.fromBufferAttribute(t, r),
						(n[r] = n[r - 1]),
						(n[r] += Bf.distanceTo(Gf));
				e.addAttribute('lineDistance', new re(n, 1));
			} else
				console.warn(
					'THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
				);
		else if (e.isGeometry) {
			var a = e.vertices,
				n = e.lineDistances;
			n[0] = 0;
			for (var r = 1, i = a.length; r < i; r++)
				(n[r] = n[r - 1]), (n[r] += a[r - 1].distanceTo(a[r]));
		}
		return this;
	},
	raycast: function (e, t) {
		var n = e.linePrecision,
			r = this.geometry,
			i = this.matrixWorld;
		if (
			(r.boundingSphere === null && r.computeBoundingSphere(),
			xs.copy(r.boundingSphere),
			xs.applyMatrix4(i),
			(xs.radius += n),
			e.ray.intersectsSphere(xs) !== !1)
		) {
			Vf.getInverse(i), _s.copy(e.ray).applyMatrix4(Vf);
			var a = n / ((this.scale.x + this.scale.y + this.scale.z) / 3),
				s = a * a,
				o = new R(),
				u = new R(),
				l = new R(),
				f = new R(),
				c = this && this.isLineSegments ? 2 : 1;
			if (r.isBufferGeometry) {
				var h = r.index,
					p = r.attributes,
					d = p.position.array;
				if (h !== null)
					for (var m = h.array, v = 0, g = m.length - 1; v < g; v += c) {
						var x = m[v],
							M = m[v + 1];
						o.fromArray(d, x * 3), u.fromArray(d, M * 3);
						var _ = _s.distanceSqToSegment(o, u, f, l);
						if (!(_ > s)) {
							f.applyMatrix4(this.matrixWorld);
							var y = e.ray.origin.distanceTo(f);
							y < e.near ||
								y > e.far ||
								t.push({
									distance: y,
									point: l.clone().applyMatrix4(this.matrixWorld),
									index: v,
									face: null,
									faceIndex: null,
									object: this
								});
						}
					}
				else
					for (var v = 0, g = d.length / 3 - 1; v < g; v += c) {
						o.fromArray(d, 3 * v), u.fromArray(d, 3 * v + 3);
						var _ = _s.distanceSqToSegment(o, u, f, l);
						if (!(_ > s)) {
							f.applyMatrix4(this.matrixWorld);
							var y = e.ray.origin.distanceTo(f);
							y < e.near ||
								y > e.far ||
								t.push({
									distance: y,
									point: l.clone().applyMatrix4(this.matrixWorld),
									index: v,
									face: null,
									faceIndex: null,
									object: this
								});
						}
					}
			} else if (r.isGeometry)
				for (var L = r.vertices, C = L.length, v = 0; v < C - 1; v += c) {
					var _ = _s.distanceSqToSegment(L[v], L[v + 1], f, l);
					if (!(_ > s)) {
						f.applyMatrix4(this.matrixWorld);
						var y = e.ray.origin.distanceTo(f);
						y < e.near ||
							y > e.far ||
							t.push({
								distance: y,
								point: l.clone().applyMatrix4(this.matrixWorld),
								index: v,
								face: null,
								faceIndex: null,
								object: this
							});
					}
				}
		}
	},
	clone: function () {
		return new this.constructor(this.geometry, this.material).copy(this);
	}
});
var bs = new R(),
	ys = new R();
function dt(e, t) {
	Ft.call(this, e, t), (this.type = 'LineSegments');
}
dt.prototype = Object.assign(Object.create(Ft.prototype), {
	constructor: dt,
	isLineSegments: !0,
	computeLineDistances: function () {
		var e = this.geometry;
		if (e.isBufferGeometry)
			if (e.index === null) {
				for (var t = e.attributes.position, n = [], r = 0, i = t.count; r < i; r += 2)
					bs.fromBufferAttribute(t, r),
						ys.fromBufferAttribute(t, r + 1),
						(n[r] = r === 0 ? 0 : n[r - 1]),
						(n[r + 1] = n[r] + bs.distanceTo(ys));
				e.addAttribute('lineDistance', new re(n, 1));
			} else
				console.warn(
					'THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
				);
		else if (e.isGeometry)
			for (var a = e.vertices, n = e.lineDistances, r = 0, i = a.length; r < i; r += 2)
				bs.copy(a[r]),
					ys.copy(a[r + 1]),
					(n[r] = r === 0 ? 0 : n[r - 1]),
					(n[r + 1] = n[r] + bs.distanceTo(ys));
		return this;
	}
});
function Vu(e, t) {
	Ft.call(this, e, t), (this.type = 'LineLoop');
}
Vu.prototype = Object.assign(Object.create(Ft.prototype), { constructor: Vu, isLineLoop: !0 });
function $r(e) {
	De.call(this),
		(this.type = 'PointsMaterial'),
		(this.color = new he(16777215)),
		(this.map = null),
		(this.size = 1),
		(this.sizeAttenuation = !0),
		(this.morphTargets = !1),
		(this.lights = !1),
		this.setValues(e);
}
$r.prototype = Object.create(De.prototype);
$r.prototype.constructor = $r;
$r.prototype.isPointsMaterial = !0;
$r.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		this.color.copy(e.color),
		(this.map = e.map),
		(this.size = e.size),
		(this.sizeAttenuation = e.sizeAttenuation),
		(this.morphTargets = e.morphTargets),
		this
	);
};
var Hf = new He(),
	Hu = new Ki(),
	ws = new Mr(),
	Ms = new R();
function Wu(e, t) {
	se.call(this),
		(this.type = 'Points'),
		(this.geometry = e !== void 0 ? e : new ae()),
		(this.material = t !== void 0 ? t : new $r({ color: Math.random() * 16777215 })),
		this.updateMorphTargets();
}
Wu.prototype = Object.assign(Object.create(se.prototype), {
	constructor: Wu,
	isPoints: !0,
	raycast: function (e, t) {
		var n = this.geometry,
			r = this.matrixWorld,
			i = e.params.Points.threshold;
		if (
			(n.boundingSphere === null && n.computeBoundingSphere(),
			ws.copy(n.boundingSphere),
			ws.applyMatrix4(r),
			(ws.radius += i),
			e.ray.intersectsSphere(ws) !== !1)
		) {
			Hf.getInverse(r), Hu.copy(e.ray).applyMatrix4(Hf);
			var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
				s = a * a;
			if (n.isBufferGeometry) {
				var o = n.index,
					u = n.attributes,
					l = u.position.array;
				if (o !== null)
					for (var f = o.array, c = 0, h = f.length; c < h; c++) {
						var p = f[c];
						Ms.fromArray(l, p * 3), hu(Ms, p, s, r, e, t, this);
					}
				else
					for (var c = 0, d = l.length / 3; c < d; c++)
						Ms.fromArray(l, c * 3), hu(Ms, c, s, r, e, t, this);
			} else
				for (var m = n.vertices, c = 0, d = m.length; c < d; c++) hu(m[c], c, s, r, e, t, this);
		}
	},
	updateMorphTargets: function () {
		var e = this.geometry,
			t,
			n,
			r;
		if (e.isBufferGeometry) {
			var i = e.morphAttributes,
				a = Object.keys(i);
			if (a.length > 0) {
				var s = i[a[0]];
				if (s !== void 0)
					for (
						this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, n = s.length;
						t < n;
						t++
					)
						(r = s[t].name || String(t)),
							this.morphTargetInfluences.push(0),
							(this.morphTargetDictionary[r] = t);
			}
		} else {
			var o = e.morphTargets;
			o !== void 0 &&
				o.length > 0 &&
				console.error(
					'THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.'
				);
		}
	},
	clone: function () {
		return new this.constructor(this.geometry, this.material).copy(this);
	}
});
function hu(e, t, n, r, i, a, s) {
	var o = Hu.distanceSqToPoint(e);
	if (o < n) {
		var u = new R();
		Hu.closestPointToPoint(e, u), u.applyMatrix4(r);
		var l = i.ray.origin.distanceTo(u);
		if (l < i.near || l > i.far) return;
		a.push({ distance: l, distanceToRay: Math.sqrt(o), point: u, index: t, face: null, object: s });
	}
}
function Wf(e, t, n, r, i, a, s, o, u) {
	lt.call(this, e, t, n, r, i, a, s, o, u),
		(this.format = s !== void 0 ? s : jr),
		(this.minFilter = a !== void 0 ? a : It),
		(this.magFilter = i !== void 0 ? i : It),
		(this.generateMipmaps = !1);
}
Wf.prototype = Object.assign(Object.create(lt.prototype), {
	constructor: Wf,
	isVideoTexture: !0,
	update: function () {
		var e = this.image;
		e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
	}
});
function ba(e, t, n, r, i, a, s, o, u, l, f, c) {
	lt.call(this, null, a, s, o, u, l, r, i, f, c),
		(this.image = { width: t, height: n }),
		(this.mipmaps = e),
		(this.flipY = !1),
		(this.generateMipmaps = !1);
}
ba.prototype = Object.create(lt.prototype);
ba.prototype.constructor = ba;
ba.prototype.isCompressedTexture = !0;
function ya(e, t, n, r, i, a, s, o, u) {
	lt.call(this, e, t, n, r, i, a, s, o, u), (this.needsUpdate = !0);
}
ya.prototype = Object.create(lt.prototype);
ya.prototype.constructor = ya;
ya.prototype.isCanvasTexture = !0;
function eo(e, t, n, r, i, a, s, o, u, l) {
	if (((l = l !== void 0 ? l : Si), l !== Si && l !== da))
		throw new Error(
			'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat'
		);
	n === void 0 && l === Si && (n = Hs),
		n === void 0 && l === da && (n = Ws),
		lt.call(this, null, r, i, a, s, o, l, n, u),
		(this.image = { width: e, height: t }),
		(this.magFilter = s !== void 0 ? s : Dt),
		(this.minFilter = o !== void 0 ? o : Dt),
		(this.flipY = !1),
		(this.generateMipmaps = !1);
}
eo.prototype = Object.create(lt.prototype);
eo.prototype.constructor = eo;
eo.prototype.isDepthTexture = !0;
function to(e) {
	ae.call(this), (this.type = 'WireframeGeometry');
	var t = [],
		n,
		r,
		i,
		a,
		s,
		o = [0, 0],
		u = {},
		l,
		f,
		c,
		h,
		p = ['a', 'b', 'c'],
		d;
	if (e && e.isGeometry) {
		var m = e.faces;
		for (n = 0, i = m.length; n < i; n++) {
			var v = m[n];
			for (r = 0; r < 3; r++)
				(f = v[p[r]]),
					(c = v[p[(r + 1) % 3]]),
					(o[0] = Math.min(f, c)),
					(o[1] = Math.max(f, c)),
					(h = o[0] + ',' + o[1]),
					u[h] === void 0 && (u[h] = { index1: o[0], index2: o[1] });
		}
		for (h in u)
			(l = u[h]),
				(d = e.vertices[l.index1]),
				t.push(d.x, d.y, d.z),
				(d = e.vertices[l.index2]),
				t.push(d.x, d.y, d.z);
	} else if (e && e.isBufferGeometry) {
		var g, x, M, _, y, L, C, T;
		if (((d = new R()), e.index !== null)) {
			for (
				g = e.attributes.position,
					x = e.index,
					M = e.groups,
					M.length === 0 && (M = [{ start: 0, count: x.count, materialIndex: 0 }]),
					a = 0,
					s = M.length;
				a < s;
				++a
			)
				for (_ = M[a], y = _.start, L = _.count, n = y, i = y + L; n < i; n += 3)
					for (r = 0; r < 3; r++)
						(f = x.getX(n + r)),
							(c = x.getX(n + ((r + 1) % 3))),
							(o[0] = Math.min(f, c)),
							(o[1] = Math.max(f, c)),
							(h = o[0] + ',' + o[1]),
							u[h] === void 0 && (u[h] = { index1: o[0], index2: o[1] });
			for (h in u)
				(l = u[h]),
					d.fromBufferAttribute(g, l.index1),
					t.push(d.x, d.y, d.z),
					d.fromBufferAttribute(g, l.index2),
					t.push(d.x, d.y, d.z);
		} else
			for (g = e.attributes.position, n = 0, i = g.count / 3; n < i; n++)
				for (r = 0; r < 3; r++)
					(C = 3 * n + r),
						d.fromBufferAttribute(g, C),
						t.push(d.x, d.y, d.z),
						(T = 3 * n + ((r + 1) % 3)),
						d.fromBufferAttribute(g, T),
						t.push(d.x, d.y, d.z);
	}
	this.addAttribute('position', new re(t, 3));
}
to.prototype = Object.create(ae.prototype);
to.prototype.constructor = to;
function no(e, t, n) {
	Re.call(this),
		(this.type = 'ParametricGeometry'),
		(this.parameters = { func: e, slices: t, stacks: n }),
		this.fromBufferGeometry(new wa(e, t, n)),
		this.mergeVertices();
}
no.prototype = Object.create(Re.prototype);
no.prototype.constructor = no;
function wa(e, t, n) {
	ae.call(this),
		(this.type = 'ParametricBufferGeometry'),
		(this.parameters = { func: e, slices: t, stacks: n });
	var r = [],
		i = [],
		a = [],
		s = [],
		o = 1e-5,
		u = new R(),
		l = new R(),
		f = new R(),
		c = new R(),
		h = new R(),
		p,
		d;
	e.length < 3 &&
		console.error(
			'THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.'
		);
	var m = t + 1;
	for (p = 0; p <= n; p++) {
		var v = p / n;
		for (d = 0; d <= t; d++) {
			var g = d / t;
			e(g, v, l),
				i.push(l.x, l.y, l.z),
				g - o >= 0 ? (e(g - o, v, f), c.subVectors(l, f)) : (e(g + o, v, f), c.subVectors(f, l)),
				v - o >= 0 ? (e(g, v - o, f), h.subVectors(l, f)) : (e(g, v + o, f), h.subVectors(f, l)),
				u.crossVectors(c, h).normalize(),
				a.push(u.x, u.y, u.z),
				s.push(g, v);
		}
	}
	for (p = 0; p < n; p++)
		for (d = 0; d < t; d++) {
			var x = p * m + d,
				M = p * m + d + 1,
				_ = (p + 1) * m + d + 1,
				y = (p + 1) * m + d;
			r.push(x, M, y), r.push(M, _, y);
		}
	this.setIndex(r),
		this.addAttribute('position', new re(i, 3)),
		this.addAttribute('normal', new re(a, 3)),
		this.addAttribute('uv', new re(s, 2));
}
wa.prototype = Object.create(ae.prototype);
wa.prototype.constructor = wa;
function ro(e, t, n, r) {
	Re.call(this),
		(this.type = 'PolyhedronGeometry'),
		(this.parameters = { vertices: e, indices: t, radius: n, detail: r }),
		this.fromBufferGeometry(new tn(e, t, n, r)),
		this.mergeVertices();
}
ro.prototype = Object.create(Re.prototype);
ro.prototype.constructor = ro;
function tn(e, t, n, r) {
	ae.call(this),
		(this.type = 'PolyhedronBufferGeometry'),
		(this.parameters = { vertices: e, indices: t, radius: n, detail: r }),
		(n = n || 1),
		(r = r || 0);
	var i = [],
		a = [];
	s(r),
		u(n),
		l(),
		this.addAttribute('position', new re(i, 3)),
		this.addAttribute('normal', new re(i.slice(), 3)),
		this.addAttribute('uv', new re(a, 2)),
		r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
	function s(g) {
		for (var x = new R(), M = new R(), _ = new R(), y = 0; y < t.length; y += 3)
			h(t[y + 0], x), h(t[y + 1], M), h(t[y + 2], _), o(x, M, _, g);
	}
	function o(g, x, M, _) {
		var y = Math.pow(2, _),
			L = [],
			C,
			T;
		for (C = 0; C <= y; C++) {
			L[C] = [];
			var P = g.clone().lerp(M, C / y),
				k = x.clone().lerp(M, C / y),
				I = y - C;
			for (T = 0; T <= I; T++)
				T === 0 && C === y ? (L[C][T] = P) : (L[C][T] = P.clone().lerp(k, T / I));
		}
		for (C = 0; C < y; C++)
			for (T = 0; T < 2 * (y - C) - 1; T++) {
				var w = Math.floor(T / 2);
				T % 2 === 0
					? (c(L[C][w + 1]), c(L[C + 1][w]), c(L[C][w]))
					: (c(L[C][w + 1]), c(L[C + 1][w + 1]), c(L[C + 1][w]));
			}
	}
	function u(g) {
		for (var x = new R(), M = 0; M < i.length; M += 3)
			(x.x = i[M + 0]),
				(x.y = i[M + 1]),
				(x.z = i[M + 2]),
				x.normalize().multiplyScalar(g),
				(i[M + 0] = x.x),
				(i[M + 1] = x.y),
				(i[M + 2] = x.z);
	}
	function l() {
		for (var g = new R(), x = 0; x < i.length; x += 3) {
			(g.x = i[x + 0]), (g.y = i[x + 1]), (g.z = i[x + 2]);
			var M = m(g) / 2 / Math.PI + 0.5,
				_ = v(g) / Math.PI + 0.5;
			a.push(M, 1 - _);
		}
		p(), f();
	}
	function f() {
		for (var g = 0; g < a.length; g += 6) {
			var x = a[g + 0],
				M = a[g + 2],
				_ = a[g + 4],
				y = Math.max(x, M, _),
				L = Math.min(x, M, _);
			y > 0.9 &&
				L < 0.1 &&
				(x < 0.2 && (a[g + 0] += 1), M < 0.2 && (a[g + 2] += 1), _ < 0.2 && (a[g + 4] += 1));
		}
	}
	function c(g) {
		i.push(g.x, g.y, g.z);
	}
	function h(g, x) {
		var M = g * 3;
		(x.x = e[M + 0]), (x.y = e[M + 1]), (x.z = e[M + 2]);
	}
	function p() {
		for (
			var g = new R(),
				x = new R(),
				M = new R(),
				_ = new R(),
				y = new W(),
				L = new W(),
				C = new W(),
				T = 0,
				P = 0;
			T < i.length;
			T += 9, P += 6
		) {
			g.set(i[T + 0], i[T + 1], i[T + 2]),
				x.set(i[T + 3], i[T + 4], i[T + 5]),
				M.set(i[T + 6], i[T + 7], i[T + 8]),
				y.set(a[P + 0], a[P + 1]),
				L.set(a[P + 2], a[P + 3]),
				C.set(a[P + 4], a[P + 5]),
				_.copy(g).add(x).add(M).divideScalar(3);
			var k = m(_);
			d(y, P + 0, g, k), d(L, P + 2, x, k), d(C, P + 4, M, k);
		}
	}
	function d(g, x, M, _) {
		_ < 0 && g.x === 1 && (a[x] = g.x - 1),
			M.x === 0 && M.z === 0 && (a[x] = _ / 2 / Math.PI + 0.5);
	}
	function m(g) {
		return Math.atan2(g.z, -g.x);
	}
	function v(g) {
		return Math.atan2(-g.y, Math.sqrt(g.x * g.x + g.z * g.z));
	}
}
tn.prototype = Object.create(ae.prototype);
tn.prototype.constructor = tn;
function io(e, t) {
	Re.call(this),
		(this.type = 'TetrahedronGeometry'),
		(this.parameters = { radius: e, detail: t }),
		this.fromBufferGeometry(new Ma(e, t)),
		this.mergeVertices();
}
io.prototype = Object.create(Re.prototype);
io.prototype.constructor = io;
function Ma(e, t) {
	var n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
		r = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
	tn.call(this, n, r, e, t),
		(this.type = 'TetrahedronBufferGeometry'),
		(this.parameters = { radius: e, detail: t });
}
Ma.prototype = Object.create(tn.prototype);
Ma.prototype.constructor = Ma;
function ao(e, t) {
	Re.call(this),
		(this.type = 'OctahedronGeometry'),
		(this.parameters = { radius: e, detail: t }),
		this.fromBufferGeometry(new Pi(e, t)),
		this.mergeVertices();
}
ao.prototype = Object.create(Re.prototype);
ao.prototype.constructor = ao;
function Pi(e, t) {
	var n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
		r = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
	tn.call(this, n, r, e, t),
		(this.type = 'OctahedronBufferGeometry'),
		(this.parameters = { radius: e, detail: t });
}
Pi.prototype = Object.create(tn.prototype);
Pi.prototype.constructor = Pi;
function so(e, t) {
	Re.call(this),
		(this.type = 'IcosahedronGeometry'),
		(this.parameters = { radius: e, detail: t }),
		this.fromBufferGeometry(new Ea(e, t)),
		this.mergeVertices();
}
so.prototype = Object.create(Re.prototype);
so.prototype.constructor = so;
function Ea(e, t) {
	var n = (1 + Math.sqrt(5)) / 2,
		r = [
			-1,
			n,
			0,
			1,
			n,
			0,
			-1,
			-n,
			0,
			1,
			-n,
			0,
			0,
			-1,
			n,
			0,
			1,
			n,
			0,
			-1,
			-n,
			0,
			1,
			-n,
			n,
			0,
			-1,
			n,
			0,
			1,
			-n,
			0,
			-1,
			-n,
			0,
			1
		],
		i = [
			0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1,
			8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1
		];
	tn.call(this, r, i, e, t),
		(this.type = 'IcosahedronBufferGeometry'),
		(this.parameters = { radius: e, detail: t });
}
Ea.prototype = Object.create(tn.prototype);
Ea.prototype.constructor = Ea;
function oo(e, t) {
	Re.call(this),
		(this.type = 'DodecahedronGeometry'),
		(this.parameters = { radius: e, detail: t }),
		this.fromBufferGeometry(new Sa(e, t)),
		this.mergeVertices();
}
oo.prototype = Object.create(Re.prototype);
oo.prototype.constructor = oo;
function Sa(e, t) {
	var n = (1 + Math.sqrt(5)) / 2,
		r = 1 / n,
		i = [
			-1,
			-1,
			-1,
			-1,
			-1,
			1,
			-1,
			1,
			-1,
			-1,
			1,
			1,
			1,
			-1,
			-1,
			1,
			-1,
			1,
			1,
			1,
			-1,
			1,
			1,
			1,
			0,
			-r,
			-n,
			0,
			-r,
			n,
			0,
			r,
			-n,
			0,
			r,
			n,
			-r,
			-n,
			0,
			-r,
			n,
			0,
			r,
			-n,
			0,
			r,
			n,
			0,
			-n,
			0,
			-r,
			n,
			0,
			-r,
			-n,
			0,
			r,
			n,
			0,
			r
		],
		a = [
			3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6,
			8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2,
			16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11,
			9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9
		];
	tn.call(this, i, a, e, t),
		(this.type = 'DodecahedronBufferGeometry'),
		(this.parameters = { radius: e, detail: t });
}
Sa.prototype = Object.create(tn.prototype);
Sa.prototype.constructor = Sa;
function uo(e, t, n, r, i, a) {
	Re.call(this),
		(this.type = 'TubeGeometry'),
		(this.parameters = { path: e, tubularSegments: t, radius: n, radialSegments: r, closed: i }),
		a !== void 0 && console.warn('THREE.TubeGeometry: taper has been removed.');
	var s = new Ii(e, t, n, r, i);
	(this.tangents = s.tangents),
		(this.normals = s.normals),
		(this.binormals = s.binormals),
		this.fromBufferGeometry(s),
		this.mergeVertices();
}
uo.prototype = Object.create(Re.prototype);
uo.prototype.constructor = uo;
function Ii(e, t, n, r, i) {
	ae.call(this),
		(this.type = 'TubeBufferGeometry'),
		(this.parameters = { path: e, tubularSegments: t, radius: n, radialSegments: r, closed: i }),
		(t = t || 64),
		(n = n || 1),
		(r = r || 8),
		(i = i || !1);
	var a = e.computeFrenetFrames(t, i);
	(this.tangents = a.tangents), (this.normals = a.normals), (this.binormals = a.binormals);
	var s = new R(),
		o = new R(),
		u = new W(),
		l = new R(),
		f,
		c,
		h = [],
		p = [],
		d = [],
		m = [];
	v(),
		this.setIndex(m),
		this.addAttribute('position', new re(h, 3)),
		this.addAttribute('normal', new re(p, 3)),
		this.addAttribute('uv', new re(d, 2));
	function v() {
		for (f = 0; f < t; f++) g(f);
		g(i === !1 ? t : 0), M(), x();
	}
	function g(_) {
		l = e.getPointAt(_ / t, l);
		var y = a.normals[_],
			L = a.binormals[_];
		for (c = 0; c <= r; c++) {
			var C = (c / r) * Math.PI * 2,
				T = Math.sin(C),
				P = -Math.cos(C);
			(o.x = P * y.x + T * L.x),
				(o.y = P * y.y + T * L.y),
				(o.z = P * y.z + T * L.z),
				o.normalize(),
				p.push(o.x, o.y, o.z),
				(s.x = l.x + n * o.x),
				(s.y = l.y + n * o.y),
				(s.z = l.z + n * o.z),
				h.push(s.x, s.y, s.z);
		}
	}
	function x() {
		for (c = 1; c <= t; c++)
			for (f = 1; f <= r; f++) {
				var _ = (r + 1) * (c - 1) + (f - 1),
					y = (r + 1) * c + (f - 1),
					L = (r + 1) * c + f,
					C = (r + 1) * (c - 1) + f;
				m.push(_, y, C), m.push(y, L, C);
			}
	}
	function M() {
		for (f = 0; f <= t; f++)
			for (c = 0; c <= r; c++) (u.x = f / t), (u.y = c / r), d.push(u.x, u.y);
	}
}
Ii.prototype = Object.create(ae.prototype);
Ii.prototype.constructor = Ii;
Ii.prototype.toJSON = function () {
	var e = ae.prototype.toJSON.call(this);
	return (e.path = this.parameters.path.toJSON()), e;
};
function lo(e, t, n, r, i, a, s) {
	Re.call(this),
		(this.type = 'TorusKnotGeometry'),
		(this.parameters = { radius: e, tube: t, tubularSegments: n, radialSegments: r, p: i, q: a }),
		s !== void 0 &&
			console.warn(
				'THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.'
			),
		this.fromBufferGeometry(new La(e, t, n, r, i, a)),
		this.mergeVertices();
}
lo.prototype = Object.create(Re.prototype);
lo.prototype.constructor = lo;
function La(e, t, n, r, i, a) {
	ae.call(this),
		(this.type = 'TorusKnotBufferGeometry'),
		(this.parameters = { radius: e, tube: t, tubularSegments: n, radialSegments: r, p: i, q: a }),
		(e = e || 1),
		(t = t || 0.4),
		(n = Math.floor(n) || 64),
		(r = Math.floor(r) || 8),
		(i = i || 2),
		(a = a || 3);
	var s = [],
		o = [],
		u = [],
		l = [],
		f,
		c,
		h = new R(),
		p = new R(),
		d = new R(),
		m = new R(),
		v = new R(),
		g = new R(),
		x = new R();
	for (f = 0; f <= n; ++f) {
		var M = (f / n) * i * Math.PI * 2;
		for (
			I(M, i, a, e, d),
				I(M + 0.01, i, a, e, m),
				g.subVectors(m, d),
				x.addVectors(m, d),
				v.crossVectors(g, x),
				x.crossVectors(v, g),
				v.normalize(),
				x.normalize(),
				c = 0;
			c <= r;
			++c
		) {
			var _ = (c / r) * Math.PI * 2,
				y = -t * Math.cos(_),
				L = t * Math.sin(_);
			(h.x = d.x + (y * x.x + L * v.x)),
				(h.y = d.y + (y * x.y + L * v.y)),
				(h.z = d.z + (y * x.z + L * v.z)),
				o.push(h.x, h.y, h.z),
				p.subVectors(h, d).normalize(),
				u.push(p.x, p.y, p.z),
				l.push(f / n),
				l.push(c / r);
		}
	}
	for (c = 1; c <= n; c++)
		for (f = 1; f <= r; f++) {
			var C = (r + 1) * (c - 1) + (f - 1),
				T = (r + 1) * c + (f - 1),
				P = (r + 1) * c + f,
				k = (r + 1) * (c - 1) + f;
			s.push(C, T, k), s.push(T, P, k);
		}
	this.setIndex(s),
		this.addAttribute('position', new re(o, 3)),
		this.addAttribute('normal', new re(u, 3)),
		this.addAttribute('uv', new re(l, 2));
	function I(w, U, N, D, B) {
		var q = Math.cos(w),
			H = Math.sin(w),
			j = (N / U) * w,
			K = Math.cos(j);
		(B.x = D * (2 + K) * 0.5 * q), (B.y = D * (2 + K) * H * 0.5), (B.z = D * Math.sin(j) * 0.5);
	}
}
La.prototype = Object.create(ae.prototype);
La.prototype.constructor = La;
function fo(e, t, n, r, i) {
	Re.call(this),
		(this.type = 'TorusGeometry'),
		(this.parameters = { radius: e, tube: t, radialSegments: n, tubularSegments: r, arc: i }),
		this.fromBufferGeometry(new Ta(e, t, n, r, i)),
		this.mergeVertices();
}
fo.prototype = Object.create(Re.prototype);
fo.prototype.constructor = fo;
function Ta(e, t, n, r, i) {
	ae.call(this),
		(this.type = 'TorusBufferGeometry'),
		(this.parameters = { radius: e, tube: t, radialSegments: n, tubularSegments: r, arc: i }),
		(e = e || 1),
		(t = t || 0.4),
		(n = Math.floor(n) || 8),
		(r = Math.floor(r) || 6),
		(i = i || Math.PI * 2);
	var a = [],
		s = [],
		o = [],
		u = [],
		l = new R(),
		f = new R(),
		c = new R(),
		h,
		p;
	for (h = 0; h <= n; h++)
		for (p = 0; p <= r; p++) {
			var d = (p / r) * i,
				m = (h / n) * Math.PI * 2;
			(f.x = (e + t * Math.cos(m)) * Math.cos(d)),
				(f.y = (e + t * Math.cos(m)) * Math.sin(d)),
				(f.z = t * Math.sin(m)),
				s.push(f.x, f.y, f.z),
				(l.x = e * Math.cos(d)),
				(l.y = e * Math.sin(d)),
				c.subVectors(f, l).normalize(),
				o.push(c.x, c.y, c.z),
				u.push(p / r),
				u.push(h / n);
		}
	for (h = 1; h <= n; h++)
		for (p = 1; p <= r; p++) {
			var v = (r + 1) * h + p - 1,
				g = (r + 1) * (h - 1) + p - 1,
				x = (r + 1) * (h - 1) + p,
				M = (r + 1) * h + p;
			a.push(v, g, M), a.push(g, x, M);
		}
	this.setIndex(a),
		this.addAttribute('position', new re(s, 3)),
		this.addAttribute('normal', new re(o, 3)),
		this.addAttribute('uv', new re(u, 2));
}
Ta.prototype = Object.create(ae.prototype);
Ta.prototype.constructor = Ta;
var V0 = {
	triangulate: function (e, t, n) {
		n = n || 2;
		var r = t && t.length,
			i = r ? t[0] * n : e.length,
			a = ph(e, 0, i, n, !0),
			s = [];
		if (!a || a.next === a.prev) return s;
		var o, u, l, f, c, h, p;
		if ((r && (a = K0(e, t, a, n)), e.length > 80 * n)) {
			(o = l = e[0]), (u = f = e[1]);
			for (var d = n; d < i; d += n)
				(c = e[d]),
					(h = e[d + 1]),
					c < o && (o = c),
					h < u && (u = h),
					c > l && (l = c),
					h > f && (f = h);
			(p = Math.max(l - o, f - u)), (p = p !== 0 ? 1 / p : 0);
		}
		return Ra(a, s, n, o, u, p), s;
	}
};
function ph(e, t, n, r, i) {
	var a, s;
	if (i === n_(e, t, n, r) > 0) for (a = t; a < n; a += r) s = qf(a, e[a], e[a + 1], s);
	else for (a = n - r; a >= t; a -= r) s = qf(a, e[a], e[a + 1], s);
	return s && Wr(s, s.next) && (Pa(s), (s = s.next)), s;
}
function Aa(e, t) {
	if (!e) return e;
	t || (t = e);
	var n = e,
		r;
	do
		if (((r = !1), !n.steiner && (Wr(n, n.next) || Pt(n.prev, n, n.next) === 0))) {
			if ((Pa(n), (n = t = n.prev), n === n.next)) break;
			r = !0;
		} else n = n.next;
	while (r || n !== t);
	return t;
}
function Ra(e, t, n, r, i, a, s) {
	if (e) {
		!s && a && Z0(e, r, i, a);
		for (var o = e, u, l; e.prev !== e.next; ) {
			if (((u = e.prev), (l = e.next), a ? W0(e, r, i, a) : H0(e))) {
				t.push(u.i / n), t.push(e.i / n), t.push(l.i / n), Pa(e), (e = l.next), (o = l.next);
				continue;
			}
			if (((e = l), e === o)) {
				s
					? s === 1
						? ((e = q0(e, t, n)), Ra(e, t, n, r, i, a, 2))
						: s === 2 && j0(e, t, n, r, i, a)
					: Ra(Aa(e), t, n, r, i, a, 1);
				break;
			}
		}
	}
}
function H0(e) {
	var t = e.prev,
		n = e,
		r = e.next;
	if (Pt(t, n, r) >= 0) return !1;
	for (var i = e.next.next; i !== e.prev; ) {
		if (wi(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && Pt(i.prev, i, i.next) >= 0) return !1;
		i = i.next;
	}
	return !0;
}
function W0(e, t, n, r) {
	var i = e.prev,
		a = e,
		s = e.next;
	if (Pt(i, a, s) >= 0) return !1;
	for (
		var o = i.x < a.x ? (i.x < s.x ? i.x : s.x) : a.x < s.x ? a.x : s.x,
			u = i.y < a.y ? (i.y < s.y ? i.y : s.y) : a.y < s.y ? a.y : s.y,
			l = i.x > a.x ? (i.x > s.x ? i.x : s.x) : a.x > s.x ? a.x : s.x,
			f = i.y > a.y ? (i.y > s.y ? i.y : s.y) : a.y > s.y ? a.y : s.y,
			c = qu(o, u, t, n, r),
			h = qu(l, f, t, n, r),
			p = e.prevZ,
			d = e.nextZ;
		p && p.z >= c && d && d.z <= h;

	) {
		if (
			(p !== e.prev &&
				p !== e.next &&
				wi(i.x, i.y, a.x, a.y, s.x, s.y, p.x, p.y) &&
				Pt(p.prev, p, p.next) >= 0) ||
			((p = p.prevZ),
			d !== e.prev &&
				d !== e.next &&
				wi(i.x, i.y, a.x, a.y, s.x, s.y, d.x, d.y) &&
				Pt(d.prev, d, d.next) >= 0)
		)
			return !1;
		d = d.nextZ;
	}
	for (; p && p.z >= c; ) {
		if (
			p !== e.prev &&
			p !== e.next &&
			wi(i.x, i.y, a.x, a.y, s.x, s.y, p.x, p.y) &&
			Pt(p.prev, p, p.next) >= 0
		)
			return !1;
		p = p.prevZ;
	}
	for (; d && d.z <= h; ) {
		if (
			d !== e.prev &&
			d !== e.next &&
			wi(i.x, i.y, a.x, a.y, s.x, s.y, d.x, d.y) &&
			Pt(d.prev, d, d.next) >= 0
		)
			return !1;
		d = d.nextZ;
	}
	return !0;
}
function q0(e, t, n) {
	var r = e;
	do {
		var i = r.prev,
			a = r.next.next;
		!Wr(i, a) &&
			vh(i, r, r.next, a) &&
			Ca(i, a) &&
			Ca(a, i) &&
			(t.push(i.i / n), t.push(r.i / n), t.push(a.i / n), Pa(r), Pa(r.next), (r = e = a)),
			(r = r.next);
	} while (r !== e);
	return r;
}
function j0(e, t, n, r, i, a) {
	var s = e;
	do {
		for (var o = s.next.next; o !== s.prev; ) {
			if (s.i !== o.i && z0(s, o)) {
				var u = mh(s, o);
				(s = Aa(s, s.next)), (u = Aa(u, u.next)), Ra(s, t, n, r, i, a), Ra(u, t, n, r, i, a);
				return;
			}
			o = o.next;
		}
		s = s.next;
	} while (s !== e);
}
function K0(e, t, n, r) {
	var i = [],
		a,
		s,
		o,
		u,
		l;
	for (a = 0, s = t.length; a < s; a++)
		(o = t[a] * r),
			(u = a < s - 1 ? t[a + 1] * r : e.length),
			(l = ph(e, o, u, r, !1)),
			l === l.next && (l.steiner = !0),
			i.push($0(l));
	for (i.sort(J0), a = 0; a < i.length; a++) X0(i[a], n), (n = Aa(n, n.next));
	return n;
}
function J0(e, t) {
	return e.x - t.x;
}
function X0(e, t) {
	if (((t = Y0(e, t)), t)) {
		var n = mh(t, e);
		Aa(n, n.next);
	}
}
function Y0(e, t) {
	var n = t,
		r = e.x,
		i = e.y,
		a = -1 / 0,
		s;
	do {
		if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
			var o = n.x + ((i - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
			if (o <= r && o > a) {
				if (((a = o), o === r)) {
					if (i === n.y) return n;
					if (i === n.next.y) return n.next;
				}
				s = n.x < n.next.x ? n : n.next;
			}
		}
		n = n.next;
	} while (n !== t);
	if (!s) return null;
	if (r === a) return s.prev;
	var u = s,
		l = s.x,
		f = s.y,
		c = 1 / 0,
		h;
	for (n = s.next; n !== u; )
		r >= n.x &&
			n.x >= l &&
			r !== n.x &&
			wi(i < f ? r : a, i, l, f, i < f ? a : r, i, n.x, n.y) &&
			((h = Math.abs(i - n.y) / (r - n.x)),
			(h < c || (h === c && n.x > s.x)) && Ca(n, e) && ((s = n), (c = h))),
			(n = n.next);
	return s;
}
function Z0(e, t, n, r) {
	var i = e;
	do
		i.z === null && (i.z = qu(i.x, i.y, t, n, r)),
			(i.prevZ = i.prev),
			(i.nextZ = i.next),
			(i = i.next);
	while (i !== e);
	(i.prevZ.nextZ = null), (i.prevZ = null), Q0(i);
}
function Q0(e) {
	var t,
		n,
		r,
		i,
		a,
		s,
		o,
		u,
		l = 1;
	do {
		for (n = e, e = null, a = null, s = 0; n; ) {
			for (s++, r = n, o = 0, t = 0; t < l && (o++, (r = r.nextZ), !!r); t++);
			for (u = l; o > 0 || (u > 0 && r); )
				o !== 0 && (u === 0 || !r || n.z <= r.z)
					? ((i = n), (n = n.nextZ), o--)
					: ((i = r), (r = r.nextZ), u--),
					a ? (a.nextZ = i) : (e = i),
					(i.prevZ = a),
					(a = i);
			n = r;
		}
		(a.nextZ = null), (l *= 2);
	} while (s > 1);
	return e;
}
function qu(e, t, n, r, i) {
	return (
		(e = 32767 * (e - n) * i),
		(t = 32767 * (t - r) * i),
		(e = (e | (e << 8)) & 16711935),
		(e = (e | (e << 4)) & 252645135),
		(e = (e | (e << 2)) & 858993459),
		(e = (e | (e << 1)) & 1431655765),
		(t = (t | (t << 8)) & 16711935),
		(t = (t | (t << 4)) & 252645135),
		(t = (t | (t << 2)) & 858993459),
		(t = (t | (t << 1)) & 1431655765),
		e | (t << 1)
	);
}
function $0(e) {
	var t = e,
		n = e;
	do (t.x < n.x || (t.x === n.x && t.y < n.y)) && (n = t), (t = t.next);
	while (t !== e);
	return n;
}
function wi(e, t, n, r, i, a, s, o) {
	return (
		(i - s) * (t - o) - (e - s) * (a - o) >= 0 &&
		(e - s) * (r - o) - (n - s) * (t - o) >= 0 &&
		(n - s) * (a - o) - (i - s) * (r - o) >= 0
	);
}
function z0(e, t) {
	return e.next.i !== t.i && e.prev.i !== t.i && !e_(e, t) && Ca(e, t) && Ca(t, e) && t_(e, t);
}
function Pt(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function Wr(e, t) {
	return e.x === t.x && e.y === t.y;
}
function vh(e, t, n, r) {
	return (Wr(e, n) && Wr(t, r)) || (Wr(e, r) && Wr(n, t))
		? !0
		: Pt(e, t, n) > 0 != Pt(e, t, r) > 0 && Pt(n, r, e) > 0 != Pt(n, r, t) > 0;
}
function e_(e, t) {
	var n = e;
	do {
		if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && vh(n, n.next, e, t))
			return !0;
		n = n.next;
	} while (n !== e);
	return !1;
}
function Ca(e, t) {
	return Pt(e.prev, e, e.next) < 0
		? Pt(e, t, e.next) >= 0 && Pt(e, e.prev, t) >= 0
		: Pt(e, t, e.prev) < 0 || Pt(e, e.next, t) < 0;
}
function t_(e, t) {
	var n = e,
		r = !1,
		i = (e.x + t.x) / 2,
		a = (e.y + t.y) / 2;
	do
		n.y > a != n.next.y > a &&
			n.next.y !== n.y &&
			i < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x &&
			(r = !r),
			(n = n.next);
	while (n !== e);
	return r;
}
function mh(e, t) {
	var n = new ju(e.i, e.x, e.y),
		r = new ju(t.i, t.x, t.y),
		i = e.next,
		a = t.prev;
	return (
		(e.next = t),
		(t.prev = e),
		(n.next = i),
		(i.prev = n),
		(r.next = n),
		(n.prev = r),
		(a.next = r),
		(r.prev = a),
		r
	);
}
function qf(e, t, n, r) {
	var i = new ju(e, t, n);
	return (
		r
			? ((i.next = r.next), (i.prev = r), (r.next.prev = i), (r.next = i))
			: ((i.prev = i), (i.next = i)),
		i
	);
}
function Pa(e) {
	(e.next.prev = e.prev),
		(e.prev.next = e.next),
		e.prevZ && (e.prevZ.nextZ = e.nextZ),
		e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function ju(e, t, n) {
	(this.i = e),
		(this.x = t),
		(this.y = n),
		(this.prev = null),
		(this.next = null),
		(this.z = null),
		(this.prevZ = null),
		(this.nextZ = null),
		(this.steiner = !1);
}
function n_(e, t, n, r) {
	for (var i = 0, a = t, s = n - r; a < n; a += r)
		(i += (e[s] - e[a]) * (e[a + 1] + e[s + 1])), (s = a);
	return i;
}
var gr = {
	area: function (e) {
		for (var t = e.length, n = 0, r = t - 1, i = 0; i < t; r = i++)
			n += e[r].x * e[i].y - e[i].x * e[r].y;
		return n * 0.5;
	},
	isClockWise: function (e) {
		return gr.area(e) < 0;
	},
	triangulateShape: function (e, t) {
		var n = [],
			r = [],
			i = [];
		jf(e), Kf(n, e);
		var a = e.length;
		t.forEach(jf);
		for (var s = 0; s < t.length; s++) r.push(a), (a += t[s].length), Kf(n, t[s]);
		for (var o = V0.triangulate(n, r), s = 0; s < o.length; s += 3) i.push(o.slice(s, s + 3));
		return i;
	}
};
function jf(e) {
	var t = e.length;
	t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function Kf(e, t) {
	for (var n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y);
}
function Di(e, t) {
	Re.call(this),
		(this.type = 'ExtrudeGeometry'),
		(this.parameters = { shapes: e, options: t }),
		this.fromBufferGeometry(new rr(e, t)),
		this.mergeVertices();
}
Di.prototype = Object.create(Re.prototype);
Di.prototype.constructor = Di;
Di.prototype.toJSON = function () {
	var e = Re.prototype.toJSON.call(this),
		t = this.parameters.shapes,
		n = this.parameters.options;
	return gh(t, n, e);
};
function rr(e, t) {
	ae.call(this),
		(this.type = 'ExtrudeBufferGeometry'),
		(this.parameters = { shapes: e, options: t }),
		(e = Array.isArray(e) ? e : [e]);
	for (var n = this, r = [], i = [], a = 0, s = e.length; a < s; a++) {
		var o = e[a];
		u(o);
	}
	this.addAttribute('position', new re(r, 3)),
		this.addAttribute('uv', new re(i, 2)),
		this.computeVertexNormals();
	function u(l) {
		var f = [],
			c = t.curveSegments !== void 0 ? t.curveSegments : 12,
			h = t.steps !== void 0 ? t.steps : 1,
			p = t.depth !== void 0 ? t.depth : 100,
			d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0,
			m = t.bevelThickness !== void 0 ? t.bevelThickness : 6,
			v = t.bevelSize !== void 0 ? t.bevelSize : m - 2,
			g = t.bevelOffset !== void 0 ? t.bevelOffset : 0,
			x = t.bevelSegments !== void 0 ? t.bevelSegments : 3,
			M = t.extrudePath,
			_ = t.UVGenerator !== void 0 ? t.UVGenerator : r_;
		t.amount !== void 0 &&
			(console.warn('THREE.ExtrudeBufferGeometry: amount has been renamed to depth.'),
			(p = t.amount));
		var y,
			L = !1,
			C,
			T,
			P,
			k;
		M &&
			((y = M.getSpacedPoints(h)),
			(L = !0),
			(d = !1),
			(C = M.computeFrenetFrames(h, !1)),
			(T = new R()),
			(P = new R()),
			(k = new R())),
			d || ((x = 0), (m = 0), (v = 0), (g = 0));
		var I,
			w,
			U,
			N = l.extractPoints(c),
			D = N.shape,
			B = N.holes,
			q = !gr.isClockWise(D);
		if (q)
			for (D = D.reverse(), w = 0, U = B.length; w < U; w++)
				(I = B[w]), gr.isClockWise(I) && (B[w] = I.reverse());
		var H = gr.triangulateShape(D, B),
			j = D;
		for (w = 0, U = B.length; w < U; w++) (I = B[w]), (D = D.concat(I));
		function K(Oe, F, X) {
			return (
				F || console.error('THREE.ExtrudeGeometry: vec does not exist'),
				F.clone().multiplyScalar(X).add(Oe)
			);
		}
		var Z,
			ve,
			_e,
			V,
			be,
			le = D.length,
			pe,
			Me = H.length;
		function Ye(Oe, F, X) {
			var fe,
				ue,
				$,
				de = Oe.x - F.x,
				Pe = Oe.y - F.y,
				Ee = X.x - Oe.x,
				at = X.y - Oe.y,
				Se = de * de + Pe * Pe,
				yt = de * at - Pe * Ee;
			if (Math.abs(yt) > Number.EPSILON) {
				var St = Math.sqrt(Se),
					Ln = Math.sqrt(Ee * Ee + at * at),
					Hn = F.x - Pe / St,
					Ut = F.y + de / St,
					Er = X.x - at / Ln,
					Sr = X.y + Ee / Ln,
					Lr = ((Er - Hn) * at - (Sr - Ut) * Ee) / (de * at - Pe * Ee);
				(fe = Hn + de * Lr - Oe.x), (ue = Ut + Pe * Lr - Oe.y);
				var Tr = fe * fe + ue * ue;
				if (Tr <= 2) return new W(fe, ue);
				$ = Math.sqrt(Tr / 2);
			} else {
				var Tn = !1;
				de > Number.EPSILON
					? Ee > Number.EPSILON && (Tn = !0)
					: de < -Number.EPSILON
						? Ee < -Number.EPSILON && (Tn = !0)
						: Math.sign(Pe) === Math.sign(at) && (Tn = !0),
					Tn
						? ((fe = -Pe), (ue = de), ($ = Math.sqrt(Se)))
						: ((fe = de), (ue = Pe), ($ = Math.sqrt(Se / 2)));
			}
			return new W(fe / $, ue / $);
		}
		for (var E = [], S = 0, J = j.length, z = J - 1, ye = S + 1; S < J; S++, z++, ye++)
			z === J && (z = 0), ye === J && (ye = 0), (E[S] = Ye(j[S], j[z], j[ye]));
		var me = [],
			ie,
			we = E.concat();
		for (w = 0, U = B.length; w < U; w++) {
			for (I = B[w], ie = [], S = 0, J = I.length, z = J - 1, ye = S + 1; S < J; S++, z++, ye++)
				z === J && (z = 0), ye === J && (ye = 0), (ie[S] = Ye(I[S], I[z], I[ye]));
			me.push(ie), (we = we.concat(ie));
		}
		for (Z = 0; Z < x; Z++) {
			for (
				_e = Z / x,
					V = m * Math.cos((_e * Math.PI) / 2),
					ve = v * Math.sin((_e * Math.PI) / 2) + g,
					S = 0,
					J = j.length;
				S < J;
				S++
			)
				(be = K(j[S], E[S], ve)), ge(be.x, be.y, -V);
			for (w = 0, U = B.length; w < U; w++)
				for (I = B[w], ie = me[w], S = 0, J = I.length; S < J; S++)
					(be = K(I[S], ie[S], ve)), ge(be.x, be.y, -V);
		}
		for (ve = v + g, S = 0; S < le; S++)
			(be = d ? K(D[S], we[S], ve) : D[S]),
				L
					? (P.copy(C.normals[0]).multiplyScalar(be.x),
						T.copy(C.binormals[0]).multiplyScalar(be.y),
						k.copy(y[0]).add(P).add(T),
						ge(k.x, k.y, k.z))
					: ge(be.x, be.y, 0);
		var Te;
		for (Te = 1; Te <= h; Te++)
			for (S = 0; S < le; S++)
				(be = d ? K(D[S], we[S], ve) : D[S]),
					L
						? (P.copy(C.normals[Te]).multiplyScalar(be.x),
							T.copy(C.binormals[Te]).multiplyScalar(be.y),
							k.copy(y[Te]).add(P).add(T),
							ge(k.x, k.y, k.z))
						: ge(be.x, be.y, (p / h) * Te);
		for (Z = x - 1; Z >= 0; Z--) {
			for (
				_e = Z / x,
					V = m * Math.cos((_e * Math.PI) / 2),
					ve = v * Math.sin((_e * Math.PI) / 2) + g,
					S = 0,
					J = j.length;
				S < J;
				S++
			)
				(be = K(j[S], E[S], ve)), ge(be.x, be.y, p + V);
			for (w = 0, U = B.length; w < U; w++)
				for (I = B[w], ie = me[w], S = 0, J = I.length; S < J; S++)
					(be = K(I[S], ie[S], ve)),
						L ? ge(be.x, be.y + y[h - 1].y, y[h - 1].x + V) : ge(be.x, be.y, p + V);
		}
		Ne(), ze();
		function Ne() {
			var Oe = r.length / 3;
			if (d) {
				var F = 0,
					X = le * F;
				for (S = 0; S < Me; S++) (pe = H[S]), Be(pe[2] + X, pe[1] + X, pe[0] + X);
				for (F = h + x * 2, X = le * F, S = 0; S < Me; S++)
					(pe = H[S]), Be(pe[0] + X, pe[1] + X, pe[2] + X);
			} else {
				for (S = 0; S < Me; S++) (pe = H[S]), Be(pe[2], pe[1], pe[0]);
				for (S = 0; S < Me; S++) (pe = H[S]), Be(pe[0] + le * h, pe[1] + le * h, pe[2] + le * h);
			}
			n.addGroup(Oe, r.length / 3 - Oe, 0);
		}
		function ze() {
			var Oe = r.length / 3,
				F = 0;
			for (et(j, F), F += j.length, w = 0, U = B.length; w < U; w++)
				(I = B[w]), et(I, F), (F += I.length);
			n.addGroup(Oe, r.length / 3 - Oe, 1);
		}
		function et(Oe, F) {
			var X, fe;
			for (S = Oe.length; --S >= 0; ) {
				(X = S), (fe = S - 1), fe < 0 && (fe = Oe.length - 1);
				var ue = 0,
					$ = h + x * 2;
				for (ue = 0; ue < $; ue++) {
					var de = le * ue,
						Pe = le * (ue + 1),
						Ee = F + X + de,
						at = F + fe + de,
						Se = F + fe + Pe,
						yt = F + X + Pe;
					Ze(Ee, at, Se, yt);
				}
			}
		}
		function ge(Oe, F, X) {
			f.push(Oe), f.push(F), f.push(X);
		}
		function Be(Oe, F, X) {
			st(Oe), st(F), st(X);
			var fe = r.length / 3,
				ue = _.generateTopUV(n, r, fe - 3, fe - 2, fe - 1);
			vt(ue[0]), vt(ue[1]), vt(ue[2]);
		}
		function Ze(Oe, F, X, fe) {
			st(Oe), st(F), st(fe), st(F), st(X), st(fe);
			var ue = r.length / 3,
				$ = _.generateSideWallUV(n, r, ue - 6, ue - 3, ue - 2, ue - 1);
			vt($[0]), vt($[1]), vt($[3]), vt($[1]), vt($[2]), vt($[3]);
		}
		function st(Oe) {
			r.push(f[Oe * 3 + 0]), r.push(f[Oe * 3 + 1]), r.push(f[Oe * 3 + 2]);
		}
		function vt(Oe) {
			i.push(Oe.x), i.push(Oe.y);
		}
	}
}
rr.prototype = Object.create(ae.prototype);
rr.prototype.constructor = rr;
rr.prototype.toJSON = function () {
	var e = ae.prototype.toJSON.call(this),
		t = this.parameters.shapes,
		n = this.parameters.options;
	return gh(t, n, e);
};
var r_ = {
	generateTopUV: function (e, t, n, r, i) {
		var a = t[n * 3],
			s = t[n * 3 + 1],
			o = t[r * 3],
			u = t[r * 3 + 1],
			l = t[i * 3],
			f = t[i * 3 + 1];
		return [new W(a, s), new W(o, u), new W(l, f)];
	},
	generateSideWallUV: function (e, t, n, r, i, a) {
		var s = t[n * 3],
			o = t[n * 3 + 1],
			u = t[n * 3 + 2],
			l = t[r * 3],
			f = t[r * 3 + 1],
			c = t[r * 3 + 2],
			h = t[i * 3],
			p = t[i * 3 + 1],
			d = t[i * 3 + 2],
			m = t[a * 3],
			v = t[a * 3 + 1],
			g = t[a * 3 + 2];
		return Math.abs(o - f) < 0.01
			? [new W(s, 1 - u), new W(l, 1 - c), new W(h, 1 - d), new W(m, 1 - g)]
			: [new W(o, 1 - u), new W(f, 1 - c), new W(p, 1 - d), new W(v, 1 - g)];
	}
};
function gh(e, t, n) {
	if (((n.shapes = []), Array.isArray(e)))
		for (var r = 0, i = e.length; r < i; r++) {
			var a = e[r];
			n.shapes.push(a.uuid);
		}
	else n.shapes.push(e.uuid);
	return t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n;
}
function co(e, t) {
	Re.call(this),
		(this.type = 'TextGeometry'),
		(this.parameters = { text: e, parameters: t }),
		this.fromBufferGeometry(new Ia(e, t)),
		this.mergeVertices();
}
co.prototype = Object.create(Re.prototype);
co.prototype.constructor = co;
function Ia(e, t) {
	t = t || {};
	var n = t.font;
	if (!(n && n.isFont))
		return (
			console.error('THREE.TextGeometry: font parameter is not an instance of THREE.Font.'),
			new Re()
		);
	var r = n.generateShapes(e, t.size);
	(t.depth = t.height !== void 0 ? t.height : 50),
		t.bevelThickness === void 0 && (t.bevelThickness = 10),
		t.bevelSize === void 0 && (t.bevelSize = 8),
		t.bevelEnabled === void 0 && (t.bevelEnabled = !1),
		rr.call(this, r, t),
		(this.type = 'TextBufferGeometry');
}
Ia.prototype = Object.create(rr.prototype);
Ia.prototype.constructor = Ia;
function ho(e, t, n, r, i, a, s) {
	Re.call(this),
		(this.type = 'SphereGeometry'),
		(this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: s
		}),
		this.fromBufferGeometry(new zr(e, t, n, r, i, a, s)),
		this.mergeVertices();
}
ho.prototype = Object.create(Re.prototype);
ho.prototype.constructor = ho;
function zr(e, t, n, r, i, a, s) {
	ae.call(this),
		(this.type = 'SphereBufferGeometry'),
		(this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: s
		}),
		(e = e || 1),
		(t = Math.max(3, Math.floor(t) || 8)),
		(n = Math.max(2, Math.floor(n) || 6)),
		(r = r !== void 0 ? r : 0),
		(i = i !== void 0 ? i : Math.PI * 2),
		(a = a !== void 0 ? a : 0),
		(s = s !== void 0 ? s : Math.PI);
	var o = Math.min(a + s, Math.PI),
		u,
		l,
		f = 0,
		c = [],
		h = new R(),
		p = new R(),
		d = [],
		m = [],
		v = [],
		g = [];
	for (l = 0; l <= n; l++) {
		var x = [],
			M = l / n,
			_ = 0;
		for (
			l == 0 && a == 0 ? (_ = 0.5 / t) : l == n && o == Math.PI && (_ = -0.5 / t), u = 0;
			u <= t;
			u++
		) {
			var y = u / t;
			(h.x = -e * Math.cos(r + y * i) * Math.sin(a + M * s)),
				(h.y = e * Math.cos(a + M * s)),
				(h.z = e * Math.sin(r + y * i) * Math.sin(a + M * s)),
				m.push(h.x, h.y, h.z),
				p.copy(h).normalize(),
				v.push(p.x, p.y, p.z),
				g.push(y + _, 1 - M),
				x.push(f++);
		}
		c.push(x);
	}
	for (l = 0; l < n; l++)
		for (u = 0; u < t; u++) {
			var L = c[l][u + 1],
				C = c[l][u],
				T = c[l + 1][u],
				P = c[l + 1][u + 1];
			(l !== 0 || a > 0) && d.push(L, C, P), (l !== n - 1 || o < Math.PI) && d.push(C, T, P);
		}
	this.setIndex(d),
		this.addAttribute('position', new re(m, 3)),
		this.addAttribute('normal', new re(v, 3)),
		this.addAttribute('uv', new re(g, 2));
}
zr.prototype = Object.create(ae.prototype);
zr.prototype.constructor = zr;
function po(e, t, n, r, i, a) {
	Re.call(this),
		(this.type = 'RingGeometry'),
		(this.parameters = {
			innerRadius: e,
			outerRadius: t,
			thetaSegments: n,
			phiSegments: r,
			thetaStart: i,
			thetaLength: a
		}),
		this.fromBufferGeometry(new Da(e, t, n, r, i, a)),
		this.mergeVertices();
}
po.prototype = Object.create(Re.prototype);
po.prototype.constructor = po;
function Da(e, t, n, r, i, a) {
	ae.call(this),
		(this.type = 'RingBufferGeometry'),
		(this.parameters = {
			innerRadius: e,
			outerRadius: t,
			thetaSegments: n,
			phiSegments: r,
			thetaStart: i,
			thetaLength: a
		}),
		(e = e || 0.5),
		(t = t || 1),
		(i = i !== void 0 ? i : 0),
		(a = a !== void 0 ? a : Math.PI * 2),
		(n = n !== void 0 ? Math.max(3, n) : 8),
		(r = r !== void 0 ? Math.max(1, r) : 1);
	var s = [],
		o = [],
		u = [],
		l = [],
		f,
		c = e,
		h = (t - e) / r,
		p = new R(),
		d = new W(),
		m,
		v;
	for (m = 0; m <= r; m++) {
		for (v = 0; v <= n; v++)
			(f = i + (v / n) * a),
				(p.x = c * Math.cos(f)),
				(p.y = c * Math.sin(f)),
				o.push(p.x, p.y, p.z),
				u.push(0, 0, 1),
				(d.x = (p.x / t + 1) / 2),
				(d.y = (p.y / t + 1) / 2),
				l.push(d.x, d.y);
		c += h;
	}
	for (m = 0; m < r; m++) {
		var g = m * (n + 1);
		for (v = 0; v < n; v++) {
			f = v + g;
			var x = f,
				M = f + n + 1,
				_ = f + n + 2,
				y = f + 1;
			s.push(x, M, y), s.push(M, _, y);
		}
	}
	this.setIndex(s),
		this.addAttribute('position', new re(o, 3)),
		this.addAttribute('normal', new re(u, 3)),
		this.addAttribute('uv', new re(l, 2));
}
Da.prototype = Object.create(ae.prototype);
Da.prototype.constructor = Da;
function vo(e, t, n, r) {
	Re.call(this),
		(this.type = 'LatheGeometry'),
		(this.parameters = { points: e, segments: t, phiStart: n, phiLength: r }),
		this.fromBufferGeometry(new Na(e, t, n, r)),
		this.mergeVertices();
}
vo.prototype = Object.create(Re.prototype);
vo.prototype.constructor = vo;
function Na(e, t, n, r) {
	ae.call(this),
		(this.type = 'LatheBufferGeometry'),
		(this.parameters = { points: e, segments: t, phiStart: n, phiLength: r }),
		(t = Math.floor(t) || 12),
		(n = n || 0),
		(r = r || Math.PI * 2),
		(r = Ue.clamp(r, 0, Math.PI * 2));
	var i = [],
		a = [],
		s = [],
		o,
		u = 1 / t,
		l = new R(),
		f = new W(),
		c,
		h;
	for (c = 0; c <= t; c++) {
		var p = n + c * u * r,
			d = Math.sin(p),
			m = Math.cos(p);
		for (h = 0; h <= e.length - 1; h++)
			(l.x = e[h].x * d),
				(l.y = e[h].y),
				(l.z = e[h].x * m),
				a.push(l.x, l.y, l.z),
				(f.x = c / t),
				(f.y = h / (e.length - 1)),
				s.push(f.x, f.y);
	}
	for (c = 0; c < t; c++)
		for (h = 0; h < e.length - 1; h++) {
			o = h + c * e.length;
			var v = o,
				g = o + e.length,
				x = o + e.length + 1,
				M = o + 1;
			i.push(v, g, M), i.push(g, x, M);
		}
	if (
		(this.setIndex(i),
		this.addAttribute('position', new re(a, 3)),
		this.addAttribute('uv', new re(s, 2)),
		this.computeVertexNormals(),
		r === Math.PI * 2)
	) {
		var _ = this.attributes.normal.array,
			y = new R(),
			L = new R(),
			C = new R();
		for (o = t * e.length * 3, c = 0, h = 0; c < e.length; c++, h += 3)
			(y.x = _[h + 0]),
				(y.y = _[h + 1]),
				(y.z = _[h + 2]),
				(L.x = _[o + h + 0]),
				(L.y = _[o + h + 1]),
				(L.z = _[o + h + 2]),
				C.addVectors(y, L).normalize(),
				(_[h + 0] = _[o + h + 0] = C.x),
				(_[h + 1] = _[o + h + 1] = C.y),
				(_[h + 2] = _[o + h + 2] = C.z);
	}
}
Na.prototype = Object.create(ae.prototype);
Na.prototype.constructor = Na;
function Ni(e, t) {
	Re.call(this),
		(this.type = 'ShapeGeometry'),
		typeof t == 'object' &&
			(console.warn('THREE.ShapeGeometry: Options parameter has been removed.'),
			(t = t.curveSegments)),
		(this.parameters = { shapes: e, curveSegments: t }),
		this.fromBufferGeometry(new Oi(e, t)),
		this.mergeVertices();
}
Ni.prototype = Object.create(Re.prototype);
Ni.prototype.constructor = Ni;
Ni.prototype.toJSON = function () {
	var e = Re.prototype.toJSON.call(this),
		t = this.parameters.shapes;
	return _h(t, e);
};
function Oi(e, t) {
	ae.call(this),
		(this.type = 'ShapeBufferGeometry'),
		(this.parameters = { shapes: e, curveSegments: t }),
		(t = t || 12);
	var n = [],
		r = [],
		i = [],
		a = [],
		s = 0,
		o = 0;
	if (Array.isArray(e) === !1) l(e);
	else for (var u = 0; u < e.length; u++) l(e[u]), this.addGroup(s, o, u), (s += o), (o = 0);
	this.setIndex(n),
		this.addAttribute('position', new re(r, 3)),
		this.addAttribute('normal', new re(i, 3)),
		this.addAttribute('uv', new re(a, 2));
	function l(f) {
		var c,
			h,
			p,
			d = r.length / 3,
			m = f.extractPoints(t),
			v = m.shape,
			g = m.holes;
		for (gr.isClockWise(v) === !1 && (v = v.reverse()), c = 0, h = g.length; c < h; c++)
			(p = g[c]), gr.isClockWise(p) === !0 && (g[c] = p.reverse());
		var x = gr.triangulateShape(v, g);
		for (c = 0, h = g.length; c < h; c++) (p = g[c]), (v = v.concat(p));
		for (c = 0, h = v.length; c < h; c++) {
			var M = v[c];
			r.push(M.x, M.y, 0), i.push(0, 0, 1), a.push(M.x, M.y);
		}
		for (c = 0, h = x.length; c < h; c++) {
			var _ = x[c],
				y = _[0] + d,
				L = _[1] + d,
				C = _[2] + d;
			n.push(y, L, C), (o += 3);
		}
	}
}
Oi.prototype = Object.create(ae.prototype);
Oi.prototype.constructor = Oi;
Oi.prototype.toJSON = function () {
	var e = ae.prototype.toJSON.call(this),
		t = this.parameters.shapes;
	return _h(t, e);
};
function _h(e, t) {
	if (((t.shapes = []), Array.isArray(e)))
		for (var n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			t.shapes.push(i.uuid);
		}
	else t.shapes.push(e.uuid);
	return t;
}
function mo(e, t) {
	ae.call(this),
		(this.type = 'EdgesGeometry'),
		(this.parameters = { thresholdAngle: t }),
		(t = t !== void 0 ? t : 1);
	var n = [],
		r = Math.cos(Ue.DEG2RAD * t),
		i = [0, 0],
		a = {},
		s,
		o,
		u,
		l = ['a', 'b', 'c'],
		f;
	e.isBufferGeometry ? ((f = new Re()), f.fromBufferGeometry(e)) : (f = e.clone()),
		f.mergeVertices(),
		f.computeFaceNormals();
	for (var c = f.vertices, h = f.faces, p = 0, d = h.length; p < d; p++)
		for (var m = h[p], v = 0; v < 3; v++)
			(s = m[l[v]]),
				(o = m[l[(v + 1) % 3]]),
				(i[0] = Math.min(s, o)),
				(i[1] = Math.max(s, o)),
				(u = i[0] + ',' + i[1]),
				a[u] === void 0
					? (a[u] = { index1: i[0], index2: i[1], face1: p, face2: void 0 })
					: (a[u].face2 = p);
	for (u in a) {
		var g = a[u];
		if (g.face2 === void 0 || h[g.face1].normal.dot(h[g.face2].normal) <= r) {
			var x = c[g.index1];
			n.push(x.x, x.y, x.z), (x = c[g.index2]), n.push(x.x, x.y, x.z);
		}
	}
	this.addAttribute('position', new re(n, 3));
}
mo.prototype = Object.create(ae.prototype);
mo.prototype.constructor = mo;
function Fi(e, t, n, r, i, a, s, o) {
	Re.call(this),
		(this.type = 'CylinderGeometry'),
		(this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: a,
			thetaStart: s,
			thetaLength: o
		}),
		this.fromBufferGeometry(new br(e, t, n, r, i, a, s, o)),
		this.mergeVertices();
}
Fi.prototype = Object.create(Re.prototype);
Fi.prototype.constructor = Fi;
function br(e, t, n, r, i, a, s, o) {
	ae.call(this),
		(this.type = 'CylinderBufferGeometry'),
		(this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: a,
			thetaStart: s,
			thetaLength: o
		});
	var u = this;
	(e = e !== void 0 ? e : 1),
		(t = t !== void 0 ? t : 1),
		(n = n || 1),
		(r = Math.floor(r) || 8),
		(i = Math.floor(i) || 1),
		(a = a !== void 0 ? a : !1),
		(s = s !== void 0 ? s : 0),
		(o = o !== void 0 ? o : Math.PI * 2);
	var l = [],
		f = [],
		c = [],
		h = [],
		p = 0,
		d = [],
		m = n / 2,
		v = 0;
	g(),
		a === !1 && (e > 0 && x(!0), t > 0 && x(!1)),
		this.setIndex(l),
		this.addAttribute('position', new re(f, 3)),
		this.addAttribute('normal', new re(c, 3)),
		this.addAttribute('uv', new re(h, 2));
	function g() {
		var M,
			_,
			y = new R(),
			L = new R(),
			C = 0,
			T = (t - e) / n;
		for (_ = 0; _ <= i; _++) {
			var P = [],
				k = _ / i,
				I = k * (t - e) + e;
			for (M = 0; M <= r; M++) {
				var w = M / r,
					U = w * o + s,
					N = Math.sin(U),
					D = Math.cos(U);
				(L.x = I * N),
					(L.y = -k * n + m),
					(L.z = I * D),
					f.push(L.x, L.y, L.z),
					y.set(N, T, D).normalize(),
					c.push(y.x, y.y, y.z),
					h.push(w, 1 - k),
					P.push(p++);
			}
			d.push(P);
		}
		for (M = 0; M < r; M++)
			for (_ = 0; _ < i; _++) {
				var B = d[_][M],
					q = d[_ + 1][M],
					H = d[_ + 1][M + 1],
					j = d[_][M + 1];
				l.push(B, q, j), l.push(q, H, j), (C += 6);
			}
		u.addGroup(v, C, 0), (v += C);
	}
	function x(M) {
		var _,
			y,
			L,
			C = new W(),
			T = new R(),
			P = 0,
			k = M === !0 ? e : t,
			I = M === !0 ? 1 : -1;
		for (y = p, _ = 1; _ <= r; _++) f.push(0, m * I, 0), c.push(0, I, 0), h.push(0.5, 0.5), p++;
		for (L = p, _ = 0; _ <= r; _++) {
			var w = _ / r,
				U = w * o + s,
				N = Math.cos(U),
				D = Math.sin(U);
			(T.x = k * D),
				(T.y = m * I),
				(T.z = k * N),
				f.push(T.x, T.y, T.z),
				c.push(0, I, 0),
				(C.x = N * 0.5 + 0.5),
				(C.y = D * 0.5 * I + 0.5),
				h.push(C.x, C.y),
				p++;
		}
		for (_ = 0; _ < r; _++) {
			var B = y + _,
				q = L + _;
			M === !0 ? l.push(q, q + 1, B) : l.push(q + 1, q, B), (P += 3);
		}
		u.addGroup(v, P, M === !0 ? 1 : 2), (v += P);
	}
}
br.prototype = Object.create(ae.prototype);
br.prototype.constructor = br;
function go(e, t, n, r, i, a, s) {
	Fi.call(this, 0, e, t, n, r, i, a, s),
		(this.type = 'ConeGeometry'),
		(this.parameters = {
			radius: e,
			height: t,
			radialSegments: n,
			heightSegments: r,
			openEnded: i,
			thetaStart: a,
			thetaLength: s
		});
}
go.prototype = Object.create(Fi.prototype);
go.prototype.constructor = go;
function _o(e, t, n, r, i, a, s) {
	br.call(this, 0, e, t, n, r, i, a, s),
		(this.type = 'ConeBufferGeometry'),
		(this.parameters = {
			radius: e,
			height: t,
			radialSegments: n,
			heightSegments: r,
			openEnded: i,
			thetaStart: a,
			thetaLength: s
		});
}
_o.prototype = Object.create(br.prototype);
_o.prototype.constructor = _o;
function xo(e, t, n, r) {
	Re.call(this),
		(this.type = 'CircleGeometry'),
		(this.parameters = { radius: e, segments: t, thetaStart: n, thetaLength: r }),
		this.fromBufferGeometry(new Oa(e, t, n, r)),
		this.mergeVertices();
}
xo.prototype = Object.create(Re.prototype);
xo.prototype.constructor = xo;
function Oa(e, t, n, r) {
	ae.call(this),
		(this.type = 'CircleBufferGeometry'),
		(this.parameters = { radius: e, segments: t, thetaStart: n, thetaLength: r }),
		(e = e || 1),
		(t = t !== void 0 ? Math.max(3, t) : 8),
		(n = n !== void 0 ? n : 0),
		(r = r !== void 0 ? r : Math.PI * 2);
	var i = [],
		a = [],
		s = [],
		o = [],
		u,
		l,
		f = new R(),
		c = new W();
	for (a.push(0, 0, 0), s.push(0, 0, 1), o.push(0.5, 0.5), l = 0, u = 3; l <= t; l++, u += 3) {
		var h = n + (l / t) * r;
		(f.x = e * Math.cos(h)),
			(f.y = e * Math.sin(h)),
			a.push(f.x, f.y, f.z),
			s.push(0, 0, 1),
			(c.x = (a[u] / e + 1) / 2),
			(c.y = (a[u + 1] / e + 1) / 2),
			o.push(c.x, c.y);
	}
	for (u = 1; u <= t; u++) i.push(u, u + 1, 0);
	this.setIndex(i),
		this.addAttribute('position', new re(a, 3)),
		this.addAttribute('normal', new re(s, 3)),
		this.addAttribute('uv', new re(o, 2));
}
Oa.prototype = Object.create(ae.prototype);
Oa.prototype.constructor = Oa;
var Gt = Object.freeze({
	WireframeGeometry: to,
	ParametricGeometry: no,
	ParametricBufferGeometry: wa,
	TetrahedronGeometry: io,
	TetrahedronBufferGeometry: Ma,
	OctahedronGeometry: ao,
	OctahedronBufferGeometry: Pi,
	IcosahedronGeometry: so,
	IcosahedronBufferGeometry: Ea,
	DodecahedronGeometry: oo,
	DodecahedronBufferGeometry: Sa,
	PolyhedronGeometry: ro,
	PolyhedronBufferGeometry: tn,
	TubeGeometry: uo,
	TubeBufferGeometry: Ii,
	TorusKnotGeometry: lo,
	TorusKnotBufferGeometry: La,
	TorusGeometry: fo,
	TorusBufferGeometry: Ta,
	TextGeometry: co,
	TextBufferGeometry: Ia,
	SphereGeometry: ho,
	SphereBufferGeometry: zr,
	RingGeometry: po,
	RingBufferGeometry: Da,
	PlaneGeometry: Ys,
	PlaneBufferGeometry: Ci,
	LatheGeometry: vo,
	LatheBufferGeometry: Na,
	ShapeGeometry: Ni,
	ShapeBufferGeometry: Oi,
	ExtrudeGeometry: Di,
	ExtrudeBufferGeometry: rr,
	EdgesGeometry: mo,
	ConeGeometry: go,
	ConeBufferGeometry: _o,
	CylinderGeometry: Fi,
	CylinderBufferGeometry: br,
	CircleGeometry: xo,
	CircleBufferGeometry: Oa,
	BoxGeometry: ev,
	BoxBufferGeometry: Do
});
function ki(e) {
	De.call(this),
		(this.type = 'ShadowMaterial'),
		(this.color = new he(0)),
		(this.transparent = !0),
		this.setValues(e);
}
ki.prototype = Object.create(De.prototype);
ki.prototype.constructor = ki;
ki.prototype.isShadowMaterial = !0;
ki.prototype.copy = function (e) {
	return De.prototype.copy.call(this, e), this.color.copy(e.color), this;
};
function Fa(e) {
	Ot.call(this, e), (this.type = 'RawShaderMaterial');
}
Fa.prototype = Object.create(Ot.prototype);
Fa.prototype.constructor = Fa;
Fa.prototype.isRawShaderMaterial = !0;
function ir(e) {
	De.call(this),
		(this.defines = { STANDARD: '' }),
		(this.type = 'MeshStandardMaterial'),
		(this.color = new he(16777215)),
		(this.roughness = 0.5),
		(this.metalness = 0.5),
		(this.map = null),
		(this.lightMap = null),
		(this.lightMapIntensity = 1),
		(this.aoMap = null),
		(this.aoMapIntensity = 1),
		(this.emissive = new he(0)),
		(this.emissiveIntensity = 1),
		(this.emissiveMap = null),
		(this.bumpMap = null),
		(this.bumpScale = 1),
		(this.normalMap = null),
		(this.normalMapType = za),
		(this.normalScale = new W(1, 1)),
		(this.displacementMap = null),
		(this.displacementScale = 1),
		(this.displacementBias = 0),
		(this.roughnessMap = null),
		(this.metalnessMap = null),
		(this.alphaMap = null),
		(this.envMap = null),
		(this.envMapIntensity = 1),
		(this.refractionRatio = 0.98),
		(this.wireframe = !1),
		(this.wireframeLinewidth = 1),
		(this.wireframeLinecap = 'round'),
		(this.wireframeLinejoin = 'round'),
		(this.skinning = !1),
		(this.morphTargets = !1),
		(this.morphNormals = !1),
		this.setValues(e);
}
ir.prototype = Object.create(De.prototype);
ir.prototype.constructor = ir;
ir.prototype.isMeshStandardMaterial = !0;
ir.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		(this.defines = { STANDARD: '' }),
		this.color.copy(e.color),
		(this.roughness = e.roughness),
		(this.metalness = e.metalness),
		(this.map = e.map),
		(this.lightMap = e.lightMap),
		(this.lightMapIntensity = e.lightMapIntensity),
		(this.aoMap = e.aoMap),
		(this.aoMapIntensity = e.aoMapIntensity),
		this.emissive.copy(e.emissive),
		(this.emissiveMap = e.emissiveMap),
		(this.emissiveIntensity = e.emissiveIntensity),
		(this.bumpMap = e.bumpMap),
		(this.bumpScale = e.bumpScale),
		(this.normalMap = e.normalMap),
		(this.normalMapType = e.normalMapType),
		this.normalScale.copy(e.normalScale),
		(this.displacementMap = e.displacementMap),
		(this.displacementScale = e.displacementScale),
		(this.displacementBias = e.displacementBias),
		(this.roughnessMap = e.roughnessMap),
		(this.metalnessMap = e.metalnessMap),
		(this.alphaMap = e.alphaMap),
		(this.envMap = e.envMap),
		(this.envMapIntensity = e.envMapIntensity),
		(this.refractionRatio = e.refractionRatio),
		(this.wireframe = e.wireframe),
		(this.wireframeLinewidth = e.wireframeLinewidth),
		(this.wireframeLinecap = e.wireframeLinecap),
		(this.wireframeLinejoin = e.wireframeLinejoin),
		(this.skinning = e.skinning),
		(this.morphTargets = e.morphTargets),
		(this.morphNormals = e.morphNormals),
		this
	);
};
function Ui(e) {
	ir.call(this),
		(this.defines = { STANDARD: '', PHYSICAL: '' }),
		(this.type = 'MeshPhysicalMaterial'),
		(this.reflectivity = 0.5),
		(this.clearcoat = 0),
		(this.clearcoatRoughness = 0),
		(this.sheen = null),
		(this.clearcoatNormalScale = new W(1, 1)),
		(this.clearcoatNormalMap = null),
		(this.transparency = 0),
		this.setValues(e);
}
Ui.prototype = Object.create(ir.prototype);
Ui.prototype.constructor = Ui;
Ui.prototype.isMeshPhysicalMaterial = !0;
Ui.prototype.copy = function (e) {
	return (
		ir.prototype.copy.call(this, e),
		(this.defines = { STANDARD: '', PHYSICAL: '' }),
		(this.reflectivity = e.reflectivity),
		(this.clearcoat = e.clearcoat),
		(this.clearcoatRoughness = e.clearcoatRoughness),
		e.sheen ? (this.sheen = (this.sheen || new he()).copy(e.sheen)) : (this.sheen = null),
		(this.clearcoatNormalMap = e.clearcoatNormalMap),
		this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
		(this.transparency = e.transparency),
		this
	);
};
function wn(e) {
	De.call(this),
		(this.type = 'MeshPhongMaterial'),
		(this.color = new he(16777215)),
		(this.specular = new he(1118481)),
		(this.shininess = 30),
		(this.map = null),
		(this.lightMap = null),
		(this.lightMapIntensity = 1),
		(this.aoMap = null),
		(this.aoMapIntensity = 1),
		(this.emissive = new he(0)),
		(this.emissiveIntensity = 1),
		(this.emissiveMap = null),
		(this.bumpMap = null),
		(this.bumpScale = 1),
		(this.normalMap = null),
		(this.normalMapType = za),
		(this.normalScale = new W(1, 1)),
		(this.displacementMap = null),
		(this.displacementScale = 1),
		(this.displacementBias = 0),
		(this.specularMap = null),
		(this.alphaMap = null),
		(this.envMap = null),
		(this.combine = Po),
		(this.reflectivity = 1),
		(this.refractionRatio = 0.98),
		(this.wireframe = !1),
		(this.wireframeLinewidth = 1),
		(this.wireframeLinecap = 'round'),
		(this.wireframeLinejoin = 'round'),
		(this.skinning = !1),
		(this.morphTargets = !1),
		(this.morphNormals = !1),
		this.setValues(e);
}
wn.prototype = Object.create(De.prototype);
wn.prototype.constructor = wn;
wn.prototype.isMeshPhongMaterial = !0;
wn.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		this.color.copy(e.color),
		this.specular.copy(e.specular),
		(this.shininess = e.shininess),
		(this.map = e.map),
		(this.lightMap = e.lightMap),
		(this.lightMapIntensity = e.lightMapIntensity),
		(this.aoMap = e.aoMap),
		(this.aoMapIntensity = e.aoMapIntensity),
		this.emissive.copy(e.emissive),
		(this.emissiveMap = e.emissiveMap),
		(this.emissiveIntensity = e.emissiveIntensity),
		(this.bumpMap = e.bumpMap),
		(this.bumpScale = e.bumpScale),
		(this.normalMap = e.normalMap),
		(this.normalMapType = e.normalMapType),
		this.normalScale.copy(e.normalScale),
		(this.displacementMap = e.displacementMap),
		(this.displacementScale = e.displacementScale),
		(this.displacementBias = e.displacementBias),
		(this.specularMap = e.specularMap),
		(this.alphaMap = e.alphaMap),
		(this.envMap = e.envMap),
		(this.combine = e.combine),
		(this.reflectivity = e.reflectivity),
		(this.refractionRatio = e.refractionRatio),
		(this.wireframe = e.wireframe),
		(this.wireframeLinewidth = e.wireframeLinewidth),
		(this.wireframeLinecap = e.wireframeLinecap),
		(this.wireframeLinejoin = e.wireframeLinejoin),
		(this.skinning = e.skinning),
		(this.morphTargets = e.morphTargets),
		(this.morphNormals = e.morphNormals),
		this
	);
};
function Bi(e) {
	wn.call(this),
		(this.defines = { TOON: '' }),
		(this.type = 'MeshToonMaterial'),
		(this.gradientMap = null),
		this.setValues(e);
}
Bi.prototype = Object.create(wn.prototype);
Bi.prototype.constructor = Bi;
Bi.prototype.isMeshToonMaterial = !0;
Bi.prototype.copy = function (e) {
	return wn.prototype.copy.call(this, e), (this.gradientMap = e.gradientMap), this;
};
function Gi(e) {
	De.call(this),
		(this.type = 'MeshNormalMaterial'),
		(this.bumpMap = null),
		(this.bumpScale = 1),
		(this.normalMap = null),
		(this.normalMapType = za),
		(this.normalScale = new W(1, 1)),
		(this.displacementMap = null),
		(this.displacementScale = 1),
		(this.displacementBias = 0),
		(this.wireframe = !1),
		(this.wireframeLinewidth = 1),
		(this.fog = !1),
		(this.lights = !1),
		(this.skinning = !1),
		(this.morphTargets = !1),
		(this.morphNormals = !1),
		this.setValues(e);
}
Gi.prototype = Object.create(De.prototype);
Gi.prototype.constructor = Gi;
Gi.prototype.isMeshNormalMaterial = !0;
Gi.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		(this.bumpMap = e.bumpMap),
		(this.bumpScale = e.bumpScale),
		(this.normalMap = e.normalMap),
		(this.normalMapType = e.normalMapType),
		this.normalScale.copy(e.normalScale),
		(this.displacementMap = e.displacementMap),
		(this.displacementScale = e.displacementScale),
		(this.displacementBias = e.displacementBias),
		(this.wireframe = e.wireframe),
		(this.wireframeLinewidth = e.wireframeLinewidth),
		(this.skinning = e.skinning),
		(this.morphTargets = e.morphTargets),
		(this.morphNormals = e.morphNormals),
		this
	);
};
function Vi(e) {
	De.call(this),
		(this.type = 'MeshLambertMaterial'),
		(this.color = new he(16777215)),
		(this.map = null),
		(this.lightMap = null),
		(this.lightMapIntensity = 1),
		(this.aoMap = null),
		(this.aoMapIntensity = 1),
		(this.emissive = new he(0)),
		(this.emissiveIntensity = 1),
		(this.emissiveMap = null),
		(this.specularMap = null),
		(this.alphaMap = null),
		(this.envMap = null),
		(this.combine = Po),
		(this.reflectivity = 1),
		(this.refractionRatio = 0.98),
		(this.wireframe = !1),
		(this.wireframeLinewidth = 1),
		(this.wireframeLinecap = 'round'),
		(this.wireframeLinejoin = 'round'),
		(this.skinning = !1),
		(this.morphTargets = !1),
		(this.morphNormals = !1),
		this.setValues(e);
}
Vi.prototype = Object.create(De.prototype);
Vi.prototype.constructor = Vi;
Vi.prototype.isMeshLambertMaterial = !0;
Vi.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		this.color.copy(e.color),
		(this.map = e.map),
		(this.lightMap = e.lightMap),
		(this.lightMapIntensity = e.lightMapIntensity),
		(this.aoMap = e.aoMap),
		(this.aoMapIntensity = e.aoMapIntensity),
		this.emissive.copy(e.emissive),
		(this.emissiveMap = e.emissiveMap),
		(this.emissiveIntensity = e.emissiveIntensity),
		(this.specularMap = e.specularMap),
		(this.alphaMap = e.alphaMap),
		(this.envMap = e.envMap),
		(this.combine = e.combine),
		(this.reflectivity = e.reflectivity),
		(this.refractionRatio = e.refractionRatio),
		(this.wireframe = e.wireframe),
		(this.wireframeLinewidth = e.wireframeLinewidth),
		(this.wireframeLinecap = e.wireframeLinecap),
		(this.wireframeLinejoin = e.wireframeLinejoin),
		(this.skinning = e.skinning),
		(this.morphTargets = e.morphTargets),
		(this.morphNormals = e.morphNormals),
		this
	);
};
function Hi(e) {
	De.call(this),
		(this.defines = { MATCAP: '' }),
		(this.type = 'MeshMatcapMaterial'),
		(this.color = new he(16777215)),
		(this.matcap = null),
		(this.map = null),
		(this.bumpMap = null),
		(this.bumpScale = 1),
		(this.normalMap = null),
		(this.normalMapType = za),
		(this.normalScale = new W(1, 1)),
		(this.displacementMap = null),
		(this.displacementScale = 1),
		(this.displacementBias = 0),
		(this.alphaMap = null),
		(this.skinning = !1),
		(this.morphTargets = !1),
		(this.morphNormals = !1),
		(this.lights = !1),
		this.setValues(e);
}
Hi.prototype = Object.create(De.prototype);
Hi.prototype.constructor = Hi;
Hi.prototype.isMeshMatcapMaterial = !0;
Hi.prototype.copy = function (e) {
	return (
		De.prototype.copy.call(this, e),
		(this.defines = { MATCAP: '' }),
		this.color.copy(e.color),
		(this.matcap = e.matcap),
		(this.map = e.map),
		(this.bumpMap = e.bumpMap),
		(this.bumpScale = e.bumpScale),
		(this.normalMap = e.normalMap),
		(this.normalMapType = e.normalMapType),
		this.normalScale.copy(e.normalScale),
		(this.displacementMap = e.displacementMap),
		(this.displacementScale = e.displacementScale),
		(this.displacementBias = e.displacementBias),
		(this.alphaMap = e.alphaMap),
		(this.skinning = e.skinning),
		(this.morphTargets = e.morphTargets),
		(this.morphNormals = e.morphNormals),
		this
	);
};
function Wi(e) {
	ft.call(this),
		(this.type = 'LineDashedMaterial'),
		(this.scale = 1),
		(this.dashSize = 3),
		(this.gapSize = 1),
		this.setValues(e);
}
Wi.prototype = Object.create(ft.prototype);
Wi.prototype.constructor = Wi;
Wi.prototype.isLineDashedMaterial = !0;
Wi.prototype.copy = function (e) {
	return (
		ft.prototype.copy.call(this, e),
		(this.scale = e.scale),
		(this.dashSize = e.dashSize),
		(this.gapSize = e.gapSize),
		this
	);
};
var i_ = Object.freeze({
		ShadowMaterial: ki,
		SpriteMaterial: Qr,
		RawShaderMaterial: Fa,
		ShaderMaterial: Ot,
		PointsMaterial: $r,
		MeshPhysicalMaterial: Ui,
		MeshStandardMaterial: ir,
		MeshPhongMaterial: wn,
		MeshToonMaterial: Bi,
		MeshNormalMaterial: Gi,
		MeshLambertMaterial: Vi,
		MeshDepthMaterial: Xr,
		MeshDistanceMaterial: Yr,
		MeshBasicMaterial: hn,
		MeshMatcapMaterial: Hi,
		LineDashedMaterial: Wi,
		LineBasicMaterial: ft,
		Material: De
	}),
	At = {
		arraySlice: function (e, t, n) {
			return At.isTypedArray(e)
				? new e.constructor(e.subarray(t, n !== void 0 ? n : e.length))
				: e.slice(t, n);
		},
		convertArray: function (e, t, n) {
			return !e || (!n && e.constructor === t)
				? e
				: typeof t.BYTES_PER_ELEMENT == 'number'
					? new t(e)
					: Array.prototype.slice.call(e);
		},
		isTypedArray: function (e) {
			return ArrayBuffer.isView(e) && !(e instanceof DataView);
		},
		getKeyframeOrder: function (e) {
			function t(a, s) {
				return e[a] - e[s];
			}
			for (var n = e.length, r = new Array(n), i = 0; i !== n; ++i) r[i] = i;
			return r.sort(t), r;
		},
		sortedArray: function (e, t, n) {
			for (var r = e.length, i = new e.constructor(r), a = 0, s = 0; s !== r; ++a)
				for (var o = n[a] * t, u = 0; u !== t; ++u) i[s++] = e[o + u];
			return i;
		},
		flattenJSON: function (e, t, n, r) {
			for (var i = 1, a = e[0]; a !== void 0 && a[r] === void 0; ) a = e[i++];
			if (a !== void 0) {
				var s = a[r];
				if (s !== void 0)
					if (Array.isArray(s))
						do (s = a[r]), s !== void 0 && (t.push(a.time), n.push.apply(n, s)), (a = e[i++]);
						while (a !== void 0);
					else if (s.toArray !== void 0)
						do (s = a[r]), s !== void 0 && (t.push(a.time), s.toArray(n, n.length)), (a = e[i++]);
						while (a !== void 0);
					else
						do (s = a[r]), s !== void 0 && (t.push(a.time), n.push(s)), (a = e[i++]);
						while (a !== void 0);
			}
		}
	};
function ln(e, t, n, r) {
	(this.parameterPositions = e),
		(this._cachedIndex = 0),
		(this.resultBuffer = r !== void 0 ? r : new t.constructor(n)),
		(this.sampleValues = t),
		(this.valueSize = n);
}
Object.assign(ln.prototype, {
	evaluate: function (e) {
		var t = this.parameterPositions,
			n = this._cachedIndex,
			r = t[n],
			i = t[n - 1];
		e: {
			t: {
				var a;
				n: {
					r: if (!(e < r)) {
						for (var s = n + 2; ; ) {
							if (r === void 0) {
								if (e < i) break r;
								return (n = t.length), (this._cachedIndex = n), this.afterEnd_(n - 1, e, i);
							}
							if (n === s) break;
							if (((i = r), (r = t[++n]), e < r)) break t;
						}
						a = t.length;
						break n;
					}
					if (!(e >= i)) {
						var o = t[1];
						e < o && ((n = 2), (i = o));
						for (var s = n - 2; ; ) {
							if (i === void 0) return (this._cachedIndex = 0), this.beforeStart_(0, e, r);
							if (n === s) break;
							if (((r = i), (i = t[--n - 1]), e >= i)) break t;
						}
						(a = n), (n = 0);
						break n;
					}
					break e;
				}
				for (; n < a; ) {
					var u = (n + a) >>> 1;
					e < t[u] ? (a = u) : (n = u + 1);
				}
				if (((r = t[n]), (i = t[n - 1]), i === void 0))
					return (this._cachedIndex = 0), this.beforeStart_(0, e, r);
				if (r === void 0)
					return (n = t.length), (this._cachedIndex = n), this.afterEnd_(n - 1, i, e);
			}
			(this._cachedIndex = n), this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	},
	settings: null,
	DefaultSettings_: {},
	getSettings_: function () {
		return this.settings || this.DefaultSettings_;
	},
	copySampleValue_: function (e) {
		for (
			var t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r, a = 0;
			a !== r;
			++a
		)
			t[a] = n[i + a];
		return t;
	},
	interpolate_: function () {
		throw new Error('call to abstract method');
	},
	intervalChanged_: function () {}
}); //!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(ln.prototype, {
	beforeStart_: ln.prototype.copySampleValue_,
	afterEnd_: ln.prototype.copySampleValue_
});
function Ku(e, t, n, r) {
	ln.call(this, e, t, n, r),
		(this._weightPrev = -0),
		(this._offsetPrev = -0),
		(this._weightNext = -0),
		(this._offsetNext = -0);
}
Ku.prototype = Object.assign(Object.create(ln.prototype), {
	constructor: Ku,
	DefaultSettings_: { endingStart: Ti, endingEnd: Ti },
	intervalChanged_: function (e, t, n) {
		var r = this.parameterPositions,
			i = e - 2,
			a = e + 1,
			s = r[i],
			o = r[a];
		if (s === void 0)
			switch (this.getSettings_().endingStart) {
				case _i:
					(i = e), (s = 2 * t - n);
					break;
				case js:
					(i = r.length - 2), (s = t + r[i] - r[i + 1]);
					break;
				default:
					(i = e), (s = n);
			}
		if (o === void 0)
			switch (this.getSettings_().endingEnd) {
				case _i:
					(a = e), (o = 2 * n - t);
					break;
				case js:
					(a = 1), (o = n + r[1] - r[0]);
					break;
				default:
					(a = e - 1), (o = t);
			}
		var u = (n - t) * 0.5,
			l = this.valueSize;
		(this._weightPrev = u / (t - s)),
			(this._weightNext = u / (o - n)),
			(this._offsetPrev = i * l),
			(this._offsetNext = a * l);
	},
	interpolate_: function (e, t, n, r) {
		for (
			var i = this.resultBuffer,
				a = this.sampleValues,
				s = this.valueSize,
				o = e * s,
				u = o - s,
				l = this._offsetPrev,
				f = this._offsetNext,
				c = this._weightPrev,
				h = this._weightNext,
				p = (n - t) / (r - t),
				d = p * p,
				m = d * p,
				v = -c * m + 2 * c * d - c * p,
				g = (1 + c) * m + (-1.5 - 2 * c) * d + (-0.5 + c) * p + 1,
				x = (-1 - h) * m + (1.5 + h) * d + 0.5 * p,
				M = h * m - h * d,
				_ = 0;
			_ !== s;
			++_
		)
			i[_] = v * a[l + _] + g * a[u + _] + x * a[o + _] + M * a[f + _];
		return i;
	}
});
function bo(e, t, n, r) {
	ln.call(this, e, t, n, r);
}
bo.prototype = Object.assign(Object.create(ln.prototype), {
	constructor: bo,
	interpolate_: function (e, t, n, r) {
		for (
			var i = this.resultBuffer,
				a = this.sampleValues,
				s = this.valueSize,
				o = e * s,
				u = o - s,
				l = (n - t) / (r - t),
				f = 1 - l,
				c = 0;
			c !== s;
			++c
		)
			i[c] = a[u + c] * f + a[o + c] * l;
		return i;
	}
});
function Ju(e, t, n, r) {
	ln.call(this, e, t, n, r);
}
Ju.prototype = Object.assign(Object.create(ln.prototype), {
	constructor: Ju,
	interpolate_: function (e) {
		return this.copySampleValue_(e - 1);
	}
});
function kt(e, t, n, r) {
	if (e === void 0) throw new Error('THREE.KeyframeTrack: track name is undefined');
	if (t === void 0 || t.length === 0)
		throw new Error('THREE.KeyframeTrack: no keyframes in track named ' + e);
	(this.name = e),
		(this.times = At.convertArray(t, this.TimeBufferType)),
		(this.values = At.convertArray(n, this.ValueBufferType)),
		this.setInterpolation(r || this.DefaultInterpolation);
}
Object.assign(kt, {
	toJSON: function (e) {
		var t = e.constructor,
			n;
		if (t.toJSON !== void 0) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: At.convertArray(e.times, Array),
				values: At.convertArray(e.values, Array)
			};
			var r = e.getInterpolation();
			r !== e.DefaultInterpolation && (n.interpolation = r);
		}
		return (n.type = e.ValueTypeName), n;
	}
});
Object.assign(kt.prototype, {
	constructor: kt,
	TimeBufferType: Float32Array,
	ValueBufferType: Float32Array,
	DefaultInterpolation: Us,
	InterpolantFactoryMethodDiscrete: function (e) {
		return new Ju(this.times, this.values, this.getValueSize(), e);
	},
	InterpolantFactoryMethodLinear: function (e) {
		return new bo(this.times, this.values, this.getValueSize(), e);
	},
	InterpolantFactoryMethodSmooth: function (e) {
		return new Ku(this.times, this.values, this.getValueSize(), e);
	},
	setInterpolation: function (e) {
		var t;
		switch (e) {
			case qs:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case Us:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case Ho:
				t = this.InterpolantFactoryMethodSmooth;
				break;
		}
		if (t === void 0) {
			var n =
				'unsupported interpolation for ' +
				this.ValueTypeName +
				' keyframe track named ' +
				this.name;
			if (this.createInterpolant === void 0)
				if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
				else throw new Error(n);
			return console.warn('THREE.KeyframeTrack:', n), this;
		}
		return (this.createInterpolant = t), this;
	},
	getInterpolation: function () {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete:
				return qs;
			case this.InterpolantFactoryMethodLinear:
				return Us;
			case this.InterpolantFactoryMethodSmooth:
				return Ho;
		}
	},
	getValueSize: function () {
		return this.values.length / this.times.length;
	},
	shift: function (e) {
		if (e !== 0) for (var t = this.times, n = 0, r = t.length; n !== r; ++n) t[n] += e;
		return this;
	},
	scale: function (e) {
		if (e !== 1) for (var t = this.times, n = 0, r = t.length; n !== r; ++n) t[n] *= e;
		return this;
	},
	trim: function (e, t) {
		for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < e; ) ++i;
		for (; a !== -1 && n[a] > t; ) --a;
		if ((++a, i !== 0 || a !== r)) {
			i >= a && ((a = Math.max(a, 1)), (i = a - 1));
			var s = this.getValueSize();
			(this.times = At.arraySlice(n, i, a)),
				(this.values = At.arraySlice(this.values, i * s, a * s));
		}
		return this;
	},
	validate: function () {
		var e = !0,
			t = this.getValueSize();
		t - Math.floor(t) !== 0 &&
			(console.error('THREE.KeyframeTrack: Invalid value size in track.', this), (e = !1));
		var n = this.times,
			r = this.values,
			i = n.length;
		i === 0 && (console.error('THREE.KeyframeTrack: Track is empty.', this), (e = !1));
		for (var a = null, s = 0; s !== i; s++) {
			var o = n[s];
			if (typeof o == 'number' && isNaN(o)) {
				console.error('THREE.KeyframeTrack: Time is not a valid number.', this, s, o), (e = !1);
				break;
			}
			if (a !== null && a > o) {
				console.error('THREE.KeyframeTrack: Out of order keys.', this, s, o, a), (e = !1);
				break;
			}
			a = o;
		}
		if (r !== void 0 && At.isTypedArray(r))
			for (var s = 0, u = r.length; s !== u; ++s) {
				var l = r[s];
				if (isNaN(l)) {
					console.error('THREE.KeyframeTrack: Value is not a valid number.', this, s, l), (e = !1);
					break;
				}
			}
		return e;
	},
	optimize: function () {
		for (
			var e = this.times,
				t = this.values,
				n = this.getValueSize(),
				r = this.getInterpolation() === Ho,
				i = 1,
				a = e.length - 1,
				s = 1;
			s < a;
			++s
		) {
			var o = !1,
				u = e[s],
				l = e[s + 1];
			if (u !== l && (s !== 1 || u !== u[0]))
				if (r) o = !0;
				else
					for (var f = s * n, c = f - n, h = f + n, p = 0; p !== n; ++p) {
						var d = t[f + p];
						if (d !== t[c + p] || d !== t[h + p]) {
							o = !0;
							break;
						}
					}
			if (o) {
				if (s !== i) {
					e[i] = e[s];
					for (var m = s * n, v = i * n, p = 0; p !== n; ++p) t[v + p] = t[m + p];
				}
				++i;
			}
		}
		if (a > 0) {
			e[i] = e[a];
			for (var m = a * n, v = i * n, p = 0; p !== n; ++p) t[v + p] = t[m + p];
			++i;
		}
		return (
			i !== e.length &&
				((this.times = At.arraySlice(e, 0, i)), (this.values = At.arraySlice(t, 0, i * n))),
			this
		);
	},
	clone: function () {
		var e = At.arraySlice(this.times, 0),
			t = At.arraySlice(this.values, 0),
			n = this.constructor,
			r = new n(this.name, e, t);
		return (r.createInterpolant = this.createInterpolant), r;
	}
});
function Xu(e, t, n) {
	kt.call(this, e, t, n);
}
Xu.prototype = Object.assign(Object.create(kt.prototype), {
	constructor: Xu,
	ValueTypeName: 'bool',
	ValueBufferType: Array,
	DefaultInterpolation: qs,
	InterpolantFactoryMethodLinear: void 0,
	InterpolantFactoryMethodSmooth: void 0
});
function Yu(e, t, n, r) {
	kt.call(this, e, t, n, r);
}
Yu.prototype = Object.assign(Object.create(kt.prototype), {
	constructor: Yu,
	ValueTypeName: 'color'
});
function ka(e, t, n, r) {
	kt.call(this, e, t, n, r);
}
ka.prototype = Object.assign(Object.create(kt.prototype), {
	constructor: ka,
	ValueTypeName: 'number'
});
function Zu(e, t, n, r) {
	ln.call(this, e, t, n, r);
}
Zu.prototype = Object.assign(Object.create(ln.prototype), {
	constructor: Zu,
	interpolate_: function (e, t, n, r) {
		for (
			var i = this.resultBuffer,
				a = this.sampleValues,
				s = this.valueSize,
				o = e * s,
				u = (n - t) / (r - t),
				l = o + s;
			o !== l;
			o += 4
		)
			qt.slerpFlat(i, 0, a, o - s, a, o, u);
		return i;
	}
});
function yo(e, t, n, r) {
	kt.call(this, e, t, n, r);
}
yo.prototype = Object.assign(Object.create(kt.prototype), {
	constructor: yo,
	ValueTypeName: 'quaternion',
	DefaultInterpolation: Us,
	InterpolantFactoryMethodLinear: function (e) {
		return new Zu(this.times, this.values, this.getValueSize(), e);
	},
	InterpolantFactoryMethodSmooth: void 0
});
function Qu(e, t, n, r) {
	kt.call(this, e, t, n, r);
}
Qu.prototype = Object.assign(Object.create(kt.prototype), {
	constructor: Qu,
	ValueTypeName: 'string',
	ValueBufferType: Array,
	DefaultInterpolation: qs,
	InterpolantFactoryMethodLinear: void 0,
	InterpolantFactoryMethodSmooth: void 0
});
function Ua(e, t, n, r) {
	kt.call(this, e, t, n, r);
}
Ua.prototype = Object.assign(Object.create(kt.prototype), {
	constructor: Ua,
	ValueTypeName: 'vector'
});
function bn(e, t, n) {
	(this.name = e),
		(this.tracks = n),
		(this.duration = t !== void 0 ? t : -1),
		(this.uuid = Ue.generateUUID()),
		this.duration < 0 && this.resetDuration();
}
function a_(e) {
	switch (e.toLowerCase()) {
		case 'scalar':
		case 'double':
		case 'float':
		case 'number':
		case 'integer':
			return ka;
		case 'vector':
		case 'vector2':
		case 'vector3':
		case 'vector4':
			return Ua;
		case 'color':
			return Yu;
		case 'quaternion':
			return yo;
		case 'bool':
		case 'boolean':
			return Xu;
		case 'string':
			return Qu;
	}
	throw new Error('THREE.KeyframeTrack: Unsupported typeName: ' + e);
}
function s_(e) {
	if (e.type === void 0)
		throw new Error('THREE.KeyframeTrack: track type undefined, can not parse');
	var t = a_(e.type);
	if (e.times === void 0) {
		var n = [],
			r = [];
		At.flattenJSON(e.keys, n, r, 'value'), (e.times = n), (e.values = r);
	}
	return t.parse !== void 0 ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation);
}
Object.assign(bn, {
	parse: function (e) {
		for (var t = [], n = e.tracks, r = 1 / (e.fps || 1), i = 0, a = n.length; i !== a; ++i)
			t.push(s_(n[i]).scale(r));
		return new bn(e.name, e.duration, t);
	},
	toJSON: function (e) {
		for (
			var t = [],
				n = e.tracks,
				r = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid },
				i = 0,
				a = n.length;
			i !== a;
			++i
		)
			t.push(kt.toJSON(n[i]));
		return r;
	},
	CreateFromMorphTargetSequence: function (e, t, n, r) {
		for (var i = t.length, a = [], s = 0; s < i; s++) {
			var o = [],
				u = [];
			o.push((s + i - 1) % i, s, (s + 1) % i), u.push(0, 1, 0);
			var l = At.getKeyframeOrder(o);
			(o = At.sortedArray(o, 1, l)),
				(u = At.sortedArray(u, 1, l)),
				!r && o[0] === 0 && (o.push(i), u.push(u[0])),
				a.push(new ka('.morphTargetInfluences[' + t[s].name + ']', o, u).scale(1 / n));
		}
		return new bn(e, -1, a);
	},
	findByName: function (e, t) {
		var n = e;
		if (!Array.isArray(e)) {
			var r = e;
			n = (r.geometry && r.geometry.animations) || r.animations;
		}
		for (var i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
		return null;
	},
	CreateClipsFromMorphTargetSequences: function (e, t, n) {
		for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, s = e.length; a < s; a++) {
			var o = e[a],
				u = o.name.match(i);
			if (u && u.length > 1) {
				var l = u[1],
					f = r[l];
				f || (r[l] = f = []), f.push(o);
			}
		}
		var c = [];
		for (var l in r) c.push(bn.CreateFromMorphTargetSequence(l, r[l], t, n));
		return c;
	},
	parseAnimation: function (e, t) {
		if (!e) return console.error('THREE.AnimationClip: No animation in JSONLoader data.'), null;
		for (
			var n = function (M, _, y, L, C) {
					if (y.length !== 0) {
						var T = [],
							P = [];
						At.flattenJSON(y, T, P, L), T.length !== 0 && C.push(new M(_, T, P));
					}
				},
				r = [],
				i = e.name || 'default',
				a = e.length || -1,
				s = e.fps || 30,
				o = e.hierarchy || [],
				u = 0;
			u < o.length;
			u++
		) {
			var l = o[u].keys;
			if (!(!l || l.length === 0))
				if (l[0].morphTargets) {
					for (var f = {}, c = 0; c < l.length; c++)
						if (l[c].morphTargets)
							for (var h = 0; h < l[c].morphTargets.length; h++) f[l[c].morphTargets[h]] = -1;
					for (var p in f) {
						for (var d = [], m = [], h = 0; h !== l[c].morphTargets.length; ++h) {
							var v = l[c];
							d.push(v.time), m.push(v.morphTarget === p ? 1 : 0);
						}
						r.push(new ka('.morphTargetInfluence[' + p + ']', d, m));
					}
					a = f.length * (s || 1);
				} else {
					var g = '.bones[' + t[u].name + ']';
					n(Ua, g + '.position', l, 'pos', r),
						n(yo, g + '.quaternion', l, 'rot', r),
						n(Ua, g + '.scale', l, 'scl', r);
				}
		}
		if (r.length === 0) return null;
		var x = new bn(i, a, r);
		return x;
	}
});
Object.assign(bn.prototype, {
	resetDuration: function () {
		for (var e = this.tracks, t = 0, n = 0, r = e.length; n !== r; ++n) {
			var i = this.tracks[n];
			t = Math.max(t, i.times[i.times.length - 1]);
		}
		return (this.duration = t), this;
	},
	trim: function () {
		for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
		return this;
	},
	validate: function () {
		for (var e = !0, t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
		return e;
	},
	optimize: function () {
		for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
		return this;
	},
	clone: function () {
		for (var e = [], t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
		return new bn(this.name, this.duration, e);
	}
});
var qi = {
	enabled: !1,
	files: {},
	add: function (e, t) {
		this.enabled !== !1 && (this.files[e] = t);
	},
	get: function (e) {
		if (this.enabled !== !1) return this.files[e];
	},
	remove: function (e) {
		delete this.files[e];
	},
	clear: function () {
		this.files = {};
	}
};
function xh(e, t, n) {
	var r = this,
		i = !1,
		a = 0,
		s = 0,
		o = void 0,
		u = [];
	(this.onStart = void 0),
		(this.onLoad = e),
		(this.onProgress = t),
		(this.onError = n),
		(this.itemStart = function (l) {
			s++, i === !1 && r.onStart !== void 0 && r.onStart(l, a, s), (i = !0);
		}),
		(this.itemEnd = function (l) {
			a++,
				r.onProgress !== void 0 && r.onProgress(l, a, s),
				a === s && ((i = !1), r.onLoad !== void 0 && r.onLoad());
		}),
		(this.itemError = function (l) {
			r.onError !== void 0 && r.onError(l);
		}),
		(this.resolveURL = function (l) {
			return o ? o(l) : l;
		}),
		(this.setURLModifier = function (l) {
			return (o = l), this;
		}),
		(this.addHandler = function (l, f) {
			return u.push(l, f), this;
		}),
		(this.removeHandler = function (l) {
			var f = u.indexOf(l);
			return f !== -1 && u.splice(f, 2), this;
		}),
		(this.getHandler = function (l) {
			for (var f = 0, c = u.length; f < c; f += 2) {
				var h = u[f],
					p = u[f + 1];
				if (h.test(l)) return p;
			}
			return null;
		});
}
var o_ = new xh();
function it(e) {
	(this.manager = e !== void 0 ? e : o_),
		(this.crossOrigin = 'anonymous'),
		(this.path = ''),
		(this.resourcePath = '');
}
Object.assign(it.prototype, {
	load: function () {},
	parse: function () {},
	setCrossOrigin: function (e) {
		return (this.crossOrigin = e), this;
	},
	setPath: function (e) {
		return (this.path = e), this;
	},
	setResourcePath: function (e) {
		return (this.resourcePath = e), this;
	}
});
var _n = {};
function Fn(e) {
	it.call(this, e);
}
Fn.prototype = Object.assign(Object.create(it.prototype), {
	constructor: Fn,
	load: function (e, t, n, r) {
		e === void 0 && (e = ''),
			this.path !== void 0 && (e = this.path + e),
			(e = this.manager.resolveURL(e));
		var i = this,
			a = qi.get(e);
		if (a !== void 0)
			return (
				i.manager.itemStart(e),
				setTimeout(function () {
					t && t(a), i.manager.itemEnd(e);
				}, 0),
				a
			);
		if (_n[e] !== void 0) {
			_n[e].push({ onLoad: t, onProgress: n, onError: r });
			return;
		}
		var s = /^data:(.*?)(;base64)?,(.*)$/,
			o = e.match(s);
		if (o) {
			var u = o[1],
				l = !!o[2],
				f = o[3];
			(f = decodeURIComponent(f)), l && (f = atob(f));
			try {
				var c,
					h = (this.responseType || '').toLowerCase();
				switch (h) {
					case 'arraybuffer':
					case 'blob':
						for (var p = new Uint8Array(f.length), d = 0; d < f.length; d++) p[d] = f.charCodeAt(d);
						h === 'blob' ? (c = new Blob([p.buffer], { type: u })) : (c = p.buffer);
						break;
					case 'document':
						var m = new DOMParser();
						c = m.parseFromString(f, u);
						break;
					case 'json':
						c = JSON.parse(f);
						break;
					default:
						c = f;
						break;
				}
				setTimeout(function () {
					t && t(c), i.manager.itemEnd(e);
				}, 0);
			} catch (x) {
				setTimeout(function () {
					r && r(x), i.manager.itemError(e), i.manager.itemEnd(e);
				}, 0);
			}
		} else {
			(_n[e] = []), _n[e].push({ onLoad: t, onProgress: n, onError: r });
			var v = new XMLHttpRequest();
			v.open('GET', e, !0),
				v.addEventListener(
					'load',
					function (x) {
						var M = this.response;
						qi.add(e, M);
						var _ = _n[e];
						if ((delete _n[e], this.status === 200 || this.status === 0)) {
							this.status === 0 && console.warn('THREE.FileLoader: HTTP Status 0 received.');
							for (var y = 0, L = _.length; y < L; y++) {
								var C = _[y];
								C.onLoad && C.onLoad(M);
							}
							i.manager.itemEnd(e);
						} else {
							for (var y = 0, L = _.length; y < L; y++) {
								var C = _[y];
								C.onError && C.onError(x);
							}
							i.manager.itemError(e), i.manager.itemEnd(e);
						}
					},
					!1
				),
				v.addEventListener(
					'progress',
					function (x) {
						for (var M = _n[e], _ = 0, y = M.length; _ < y; _++) {
							var L = M[_];
							L.onProgress && L.onProgress(x);
						}
					},
					!1
				),
				v.addEventListener(
					'error',
					function (x) {
						var M = _n[e];
						delete _n[e];
						for (var _ = 0, y = M.length; _ < y; _++) {
							var L = M[_];
							L.onError && L.onError(x);
						}
						i.manager.itemError(e), i.manager.itemEnd(e);
					},
					!1
				),
				v.addEventListener(
					'abort',
					function (x) {
						var M = _n[e];
						delete _n[e];
						for (var _ = 0, y = M.length; _ < y; _++) {
							var L = M[_];
							L.onError && L.onError(x);
						}
						i.manager.itemError(e), i.manager.itemEnd(e);
					},
					!1
				),
				this.responseType !== void 0 && (v.responseType = this.responseType),
				this.withCredentials !== void 0 && (v.withCredentials = this.withCredentials),
				v.overrideMimeType &&
					v.overrideMimeType(this.mimeType !== void 0 ? this.mimeType : 'text/plain');
			for (var g in this.requestHeader) v.setRequestHeader(g, this.requestHeader[g]);
			v.send(null);
		}
		return i.manager.itemStart(e), v;
	},
	setResponseType: function (e) {
		return (this.responseType = e), this;
	},
	setWithCredentials: function (e) {
		return (this.withCredentials = e), this;
	},
	setMimeType: function (e) {
		return (this.mimeType = e), this;
	},
	setRequestHeader: function (e) {
		return (this.requestHeader = e), this;
	}
});
function Jf(e) {
	it.call(this, e);
}
Jf.prototype = Object.assign(Object.create(it.prototype), {
	constructor: Jf,
	load: function (e, t, n, r) {
		var i = this,
			a = new Fn(i.manager);
		a.setPath(i.path),
			a.load(
				e,
				function (s) {
					t(i.parse(JSON.parse(s)));
				},
				n,
				r
			);
	},
	parse: function (e) {
		for (var t = [], n = 0; n < e.length; n++) {
			var r = bn.parse(e[n]);
			t.push(r);
		}
		return t;
	}
});
function Xf(e) {
	it.call(this, e);
}
Xf.prototype = Object.assign(Object.create(it.prototype), {
	constructor: Xf,
	load: function (e, t, n, r) {
		var i = this,
			a = [],
			s = new ba();
		s.image = a;
		var o = new Fn(this.manager);
		o.setPath(this.path), o.setResponseType('arraybuffer');
		function u(h) {
			o.load(
				e[h],
				function (p) {
					var d = i.parse(p, !0);
					(a[h] = { width: d.width, height: d.height, format: d.format, mipmaps: d.mipmaps }),
						(l += 1),
						l === 6 &&
							(d.mipmapCount === 1 && (s.minFilter = It),
							(s.format = d.format),
							(s.needsUpdate = !0),
							t && t(s));
				},
				n,
				r
			);
		}
		if (Array.isArray(e)) for (var l = 0, f = 0, c = e.length; f < c; ++f) u(f);
		else
			o.load(
				e,
				function (h) {
					var p = i.parse(h, !0);
					if (p.isCubemap)
						for (var d = p.mipmaps.length / p.mipmapCount, m = 0; m < d; m++) {
							a[m] = { mipmaps: [] };
							for (var v = 0; v < p.mipmapCount; v++)
								a[m].mipmaps.push(p.mipmaps[m * p.mipmapCount + v]),
									(a[m].format = p.format),
									(a[m].width = p.width),
									(a[m].height = p.height);
						}
					else (s.image.width = p.width), (s.image.height = p.height), (s.mipmaps = p.mipmaps);
					p.mipmapCount === 1 && (s.minFilter = It),
						(s.format = p.format),
						(s.needsUpdate = !0),
						t && t(s);
				},
				n,
				r
			);
		return s;
	}
});
function Yf(e) {
	it.call(this, e);
}
Yf.prototype = Object.assign(Object.create(it.prototype), {
	constructor: Yf,
	load: function (e, t, n, r) {
		var i = this,
			a = new Ri(),
			s = new Fn(this.manager);
		return (
			s.setResponseType('arraybuffer'),
			s.setPath(this.path),
			s.load(
				e,
				function (o) {
					var u = i.parse(o);
					u &&
						(u.image !== void 0
							? (a.image = u.image)
							: u.data !== void 0 &&
								((a.image.width = u.width), (a.image.height = u.height), (a.image.data = u.data)),
						(a.wrapS = u.wrapS !== void 0 ? u.wrapS : Kt),
						(a.wrapT = u.wrapT !== void 0 ? u.wrapT : Kt),
						(a.magFilter = u.magFilter !== void 0 ? u.magFilter : It),
						(a.minFilter = u.minFilter !== void 0 ? u.minFilter : Io),
						(a.anisotropy = u.anisotropy !== void 0 ? u.anisotropy : 1),
						u.format !== void 0 && (a.format = u.format),
						u.type !== void 0 && (a.type = u.type),
						u.mipmaps !== void 0 && (a.mipmaps = u.mipmaps),
						u.mipmapCount === 1 && (a.minFilter = It),
						(a.needsUpdate = !0),
						t && t(a, u));
				},
				n,
				r
			),
			a
		);
	}
});
function Ba(e) {
	it.call(this, e);
}
Ba.prototype = Object.assign(Object.create(it.prototype), {
	constructor: Ba,
	load: function (e, t, n, r) {
		this.path !== void 0 && (e = this.path + e), (e = this.manager.resolveURL(e));
		var i = this,
			a = qi.get(e);
		if (a !== void 0)
			return (
				i.manager.itemStart(e),
				setTimeout(function () {
					t && t(a), i.manager.itemEnd(e);
				}, 0),
				a
			);
		var s = document.createElementNS('http://www.w3.org/1999/xhtml', 'img');
		function o() {
			s.removeEventListener('load', o, !1),
				s.removeEventListener('error', u, !1),
				qi.add(e, this),
				t && t(this),
				i.manager.itemEnd(e);
		}
		function u(l) {
			s.removeEventListener('load', o, !1),
				s.removeEventListener('error', u, !1),
				r && r(l),
				i.manager.itemError(e),
				i.manager.itemEnd(e);
		}
		return (
			s.addEventListener('load', o, !1),
			s.addEventListener('error', u, !1),
			e.substr(0, 5) !== 'data:' &&
				this.crossOrigin !== void 0 &&
				(s.crossOrigin = this.crossOrigin),
			i.manager.itemStart(e),
			(s.src = e),
			s
		);
	}
});
function $u(e) {
	it.call(this, e);
}
$u.prototype = Object.assign(Object.create(it.prototype), {
	constructor: $u,
	load: function (e, t, n, r) {
		var i = new xr(),
			a = new Ba(this.manager);
		a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
		var s = 0;
		function o(l) {
			a.load(
				e[l],
				function (f) {
					(i.images[l] = f), s++, s === 6 && ((i.needsUpdate = !0), t && t(i));
				},
				void 0,
				r
			);
		}
		for (var u = 0; u < e.length; ++u) o(u);
		return i;
	}
});
function zu(e) {
	it.call(this, e);
}
zu.prototype = Object.assign(Object.create(it.prototype), {
	constructor: zu,
	load: function (e, t, n, r) {
		var i = new lt(),
			a = new Ba(this.manager);
		return (
			a.setCrossOrigin(this.crossOrigin),
			a.setPath(this.path),
			a.load(
				e,
				function (s) {
					i.image = s;
					var o = e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0;
					(i.format = o ? jr : tr), (i.needsUpdate = !0), t !== void 0 && t(i);
				},
				n,
				r
			),
			i
		);
	}
});
function xe() {
	(this.type = 'Curve'), (this.arcLengthDivisions = 200);
}
Object.assign(xe.prototype, {
	getPoint: function () {
		return console.warn('THREE.Curve: .getPoint() not implemented.'), null;
	},
	getPointAt: function (e, t) {
		var n = this.getUtoTmapping(e);
		return this.getPoint(n, t);
	},
	getPoints: function (e) {
		e === void 0 && (e = 5);
		for (var t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return t;
	},
	getSpacedPoints: function (e) {
		e === void 0 && (e = 5);
		for (var t = [], n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
		return t;
	},
	getLength: function () {
		var e = this.getLengths();
		return e[e.length - 1];
	},
	getLengths: function (e) {
		if (
			(e === void 0 && (e = this.arcLengthDivisions),
			this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
		)
			return this.cacheArcLengths;
		this.needsUpdate = !1;
		var t = [],
			n,
			r = this.getPoint(0),
			i,
			a = 0;
		for (t.push(0), i = 1; i <= e; i++)
			(n = this.getPoint(i / e)), (a += n.distanceTo(r)), t.push(a), (r = n);
		return (this.cacheArcLengths = t), t;
	},
	updateArcLengths: function () {
		(this.needsUpdate = !0), this.getLengths();
	},
	getUtoTmapping: function (e, t) {
		var n = this.getLengths(),
			r = 0,
			i = n.length,
			a;
		t ? (a = t) : (a = e * n[i - 1]);
		for (var s = 0, o = i - 1, u; s <= o; )
			if (((r = Math.floor(s + (o - s) / 2)), (u = n[r] - a), u < 0)) s = r + 1;
			else if (u > 0) o = r - 1;
			else {
				o = r;
				break;
			}
		if (((r = o), n[r] === a)) return r / (i - 1);
		var l = n[r],
			f = n[r + 1],
			c = f - l,
			h = (a - l) / c,
			p = (r + h) / (i - 1);
		return p;
	},
	getTangent: function (e) {
		var t = 1e-4,
			n = e - t,
			r = e + t;
		n < 0 && (n = 0), r > 1 && (r = 1);
		var i = this.getPoint(n),
			a = this.getPoint(r),
			s = a.clone().sub(i);
		return s.normalize();
	},
	getTangentAt: function (e) {
		var t = this.getUtoTmapping(e);
		return this.getTangent(t);
	},
	computeFrenetFrames: function (e, t) {
		var n = new R(),
			r = [],
			i = [],
			a = [],
			s = new R(),
			o = new He(),
			u,
			l,
			f;
		for (u = 0; u <= e; u++) (l = u / e), (r[u] = this.getTangentAt(l)), r[u].normalize();
		(i[0] = new R()), (a[0] = new R());
		var c = Number.MAX_VALUE,
			h = Math.abs(r[0].x),
			p = Math.abs(r[0].y),
			d = Math.abs(r[0].z);
		for (
			h <= c && ((c = h), n.set(1, 0, 0)),
				p <= c && ((c = p), n.set(0, 1, 0)),
				d <= c && n.set(0, 0, 1),
				s.crossVectors(r[0], n).normalize(),
				i[0].crossVectors(r[0], s),
				a[0].crossVectors(r[0], i[0]),
				u = 1;
			u <= e;
			u++
		)
			(i[u] = i[u - 1].clone()),
				(a[u] = a[u - 1].clone()),
				s.crossVectors(r[u - 1], r[u]),
				s.length() > Number.EPSILON &&
					(s.normalize(),
					(f = Math.acos(Ue.clamp(r[u - 1].dot(r[u]), -1, 1))),
					i[u].applyMatrix4(o.makeRotationAxis(s, f))),
				a[u].crossVectors(r[u], i[u]);
		if (t === !0)
			for (
				f = Math.acos(Ue.clamp(i[0].dot(i[e]), -1, 1)),
					f /= e,
					r[0].dot(s.crossVectors(i[0], i[e])) > 0 && (f = -f),
					u = 1;
				u <= e;
				u++
			)
				i[u].applyMatrix4(o.makeRotationAxis(r[u], f * u)), a[u].crossVectors(r[u], i[u]);
		return { tangents: r, normals: i, binormals: a };
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return (this.arcLengthDivisions = e.arcLengthDivisions), this;
	},
	toJSON: function () {
		var e = { metadata: { version: 4.5, type: 'Curve', generator: 'Curve.toJSON' } };
		return (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e;
	},
	fromJSON: function (e) {
		return (this.arcLengthDivisions = e.arcLengthDivisions), this;
	}
});
function pn(e, t, n, r, i, a, s, o) {
	xe.call(this),
		(this.type = 'EllipseCurve'),
		(this.aX = e || 0),
		(this.aY = t || 0),
		(this.xRadius = n || 1),
		(this.yRadius = r || 1),
		(this.aStartAngle = i || 0),
		(this.aEndAngle = a || 2 * Math.PI),
		(this.aClockwise = s || !1),
		(this.aRotation = o || 0);
}
pn.prototype = Object.create(xe.prototype);
pn.prototype.constructor = pn;
pn.prototype.isEllipseCurve = !0;
pn.prototype.getPoint = function (e, t) {
	for (
		var n = t || new W(),
			r = Math.PI * 2,
			i = this.aEndAngle - this.aStartAngle,
			a = Math.abs(i) < Number.EPSILON;
		i < 0;

	)
		i += r;
	for (; i > r; ) i -= r;
	i < Number.EPSILON && (a ? (i = 0) : (i = r)),
		this.aClockwise === !0 && !a && (i === r ? (i = -r) : (i = i - r));
	var s = this.aStartAngle + e * i,
		o = this.aX + this.xRadius * Math.cos(s),
		u = this.aY + this.yRadius * Math.sin(s);
	if (this.aRotation !== 0) {
		var l = Math.cos(this.aRotation),
			f = Math.sin(this.aRotation),
			c = o - this.aX,
			h = u - this.aY;
		(o = c * l - h * f + this.aX), (u = c * f + h * l + this.aY);
	}
	return n.set(o, u);
};
pn.prototype.copy = function (e) {
	return (
		xe.prototype.copy.call(this, e),
		(this.aX = e.aX),
		(this.aY = e.aY),
		(this.xRadius = e.xRadius),
		(this.yRadius = e.yRadius),
		(this.aStartAngle = e.aStartAngle),
		(this.aEndAngle = e.aEndAngle),
		(this.aClockwise = e.aClockwise),
		(this.aRotation = e.aRotation),
		this
	);
};
pn.prototype.toJSON = function () {
	var e = xe.prototype.toJSON.call(this);
	return (
		(e.aX = this.aX),
		(e.aY = this.aY),
		(e.xRadius = this.xRadius),
		(e.yRadius = this.yRadius),
		(e.aStartAngle = this.aStartAngle),
		(e.aEndAngle = this.aEndAngle),
		(e.aClockwise = this.aClockwise),
		(e.aRotation = this.aRotation),
		e
	);
};
pn.prototype.fromJSON = function (e) {
	return (
		xe.prototype.fromJSON.call(this, e),
		(this.aX = e.aX),
		(this.aY = e.aY),
		(this.xRadius = e.xRadius),
		(this.yRadius = e.yRadius),
		(this.aStartAngle = e.aStartAngle),
		(this.aEndAngle = e.aEndAngle),
		(this.aClockwise = e.aClockwise),
		(this.aRotation = e.aRotation),
		this
	);
};
function Ga(e, t, n, r, i, a) {
	pn.call(this, e, t, n, n, r, i, a), (this.type = 'ArcCurve');
}
Ga.prototype = Object.create(pn.prototype);
Ga.prototype.constructor = Ga;
Ga.prototype.isArcCurve = !0;
function Bl() {
	var e = 0,
		t = 0,
		n = 0,
		r = 0;
	function i(a, s, o, u) {
		(e = a), (t = o), (n = -3 * a + 3 * s - 2 * o - u), (r = 2 * a - 2 * s + o + u);
	}
	return {
		initCatmullRom: function (a, s, o, u, l) {
			i(s, o, l * (o - a), l * (u - s));
		},
		initNonuniformCatmullRom: function (a, s, o, u, l, f, c) {
			var h = (s - a) / l - (o - a) / (l + f) + (o - s) / f,
				p = (o - s) / f - (u - s) / (f + c) + (u - o) / c;
			(h *= f), (p *= f), i(s, o, h, p);
		},
		calc: function (a) {
			var s = a * a,
				o = s * a;
			return e + t * a + n * s + r * o;
		}
	};
}
var Es = new R(),
	du = new Bl(),
	pu = new Bl(),
	vu = new Bl();
function nn(e, t, n, r) {
	xe.call(this),
		(this.type = 'CatmullRomCurve3'),
		(this.points = e || []),
		(this.closed = t || !1),
		(this.curveType = n || 'centripetal'),
		(this.tension = r || 0.5);
}
nn.prototype = Object.create(xe.prototype);
nn.prototype.constructor = nn;
nn.prototype.isCatmullRomCurve3 = !0;
nn.prototype.getPoint = function (e, t) {
	var n = t || new R(),
		r = this.points,
		i = r.length,
		a = (i - (this.closed ? 0 : 1)) * e,
		s = Math.floor(a),
		o = a - s;
	this.closed
		? (s += s > 0 ? 0 : (Math.floor(Math.abs(s) / i) + 1) * i)
		: o === 0 && s === i - 1 && ((s = i - 2), (o = 1));
	var u, l, f, c;
	if (
		(this.closed || s > 0 ? (u = r[(s - 1) % i]) : (Es.subVectors(r[0], r[1]).add(r[0]), (u = Es)),
		(l = r[s % i]),
		(f = r[(s + 1) % i]),
		this.closed || s + 2 < i
			? (c = r[(s + 2) % i])
			: (Es.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), (c = Es)),
		this.curveType === 'centripetal' || this.curveType === 'chordal')
	) {
		var h = this.curveType === 'chordal' ? 0.5 : 0.25,
			p = Math.pow(u.distanceToSquared(l), h),
			d = Math.pow(l.distanceToSquared(f), h),
			m = Math.pow(f.distanceToSquared(c), h);
		d < 1e-4 && (d = 1),
			p < 1e-4 && (p = d),
			m < 1e-4 && (m = d),
			du.initNonuniformCatmullRom(u.x, l.x, f.x, c.x, p, d, m),
			pu.initNonuniformCatmullRom(u.y, l.y, f.y, c.y, p, d, m),
			vu.initNonuniformCatmullRom(u.z, l.z, f.z, c.z, p, d, m);
	} else
		this.curveType === 'catmullrom' &&
			(du.initCatmullRom(u.x, l.x, f.x, c.x, this.tension),
			pu.initCatmullRom(u.y, l.y, f.y, c.y, this.tension),
			vu.initCatmullRom(u.z, l.z, f.z, c.z, this.tension));
	return n.set(du.calc(o), pu.calc(o), vu.calc(o)), n;
};
nn.prototype.copy = function (e) {
	xe.prototype.copy.call(this, e), (this.points = []);
	for (var t = 0, n = e.points.length; t < n; t++) {
		var r = e.points[t];
		this.points.push(r.clone());
	}
	return (this.closed = e.closed), (this.curveType = e.curveType), (this.tension = e.tension), this;
};
nn.prototype.toJSON = function () {
	var e = xe.prototype.toJSON.call(this);
	e.points = [];
	for (var t = 0, n = this.points.length; t < n; t++) {
		var r = this.points[t];
		e.points.push(r.toArray());
	}
	return (e.closed = this.closed), (e.curveType = this.curveType), (e.tension = this.tension), e;
};
nn.prototype.fromJSON = function (e) {
	xe.prototype.fromJSON.call(this, e), (this.points = []);
	for (var t = 0, n = e.points.length; t < n; t++) {
		var r = e.points[t];
		this.points.push(new R().fromArray(r));
	}
	return (this.closed = e.closed), (this.curveType = e.curveType), (this.tension = e.tension), this;
};
function Zf(e, t, n, r, i) {
	var a = (r - t) * 0.5,
		s = (i - n) * 0.5,
		o = e * e,
		u = e * o;
	return (2 * n - 2 * r + a + s) * u + (-3 * n + 3 * r - 2 * a - s) * o + a * e + n;
}
function u_(e, t) {
	var n = 1 - e;
	return n * n * t;
}
function l_(e, t) {
	return 2 * (1 - e) * e * t;
}
function f_(e, t) {
	return e * e * t;
}
function oa(e, t, n, r) {
	return u_(e, t) + l_(e, n) + f_(e, r);
}
function c_(e, t) {
	var n = 1 - e;
	return n * n * n * t;
}
function h_(e, t) {
	var n = 1 - e;
	return 3 * n * n * e * t;
}
function d_(e, t) {
	return 3 * (1 - e) * e * e * t;
}
function p_(e, t) {
	return e * e * e * t;
}
function ua(e, t, n, r, i) {
	return c_(e, t) + h_(e, n) + d_(e, r) + p_(e, i);
}
function kn(e, t, n, r) {
	xe.call(this),
		(this.type = 'CubicBezierCurve'),
		(this.v0 = e || new W()),
		(this.v1 = t || new W()),
		(this.v2 = n || new W()),
		(this.v3 = r || new W());
}
kn.prototype = Object.create(xe.prototype);
kn.prototype.constructor = kn;
kn.prototype.isCubicBezierCurve = !0;
kn.prototype.getPoint = function (e, t) {
	var n = t || new W(),
		r = this.v0,
		i = this.v1,
		a = this.v2,
		s = this.v3;
	return n.set(ua(e, r.x, i.x, a.x, s.x), ua(e, r.y, i.y, a.y, s.y)), n;
};
kn.prototype.copy = function (e) {
	return (
		xe.prototype.copy.call(this, e),
		this.v0.copy(e.v0),
		this.v1.copy(e.v1),
		this.v2.copy(e.v2),
		this.v3.copy(e.v3),
		this
	);
};
kn.prototype.toJSON = function () {
	var e = xe.prototype.toJSON.call(this);
	return (
		(e.v0 = this.v0.toArray()),
		(e.v1 = this.v1.toArray()),
		(e.v2 = this.v2.toArray()),
		(e.v3 = this.v3.toArray()),
		e
	);
};
kn.prototype.fromJSON = function (e) {
	return (
		xe.prototype.fromJSON.call(this, e),
		this.v0.fromArray(e.v0),
		this.v1.fromArray(e.v1),
		this.v2.fromArray(e.v2),
		this.v3.fromArray(e.v3),
		this
	);
};
function ar(e, t, n, r) {
	xe.call(this),
		(this.type = 'CubicBezierCurve3'),
		(this.v0 = e || new R()),
		(this.v1 = t || new R()),
		(this.v2 = n || new R()),
		(this.v3 = r || new R());
}
ar.prototype = Object.create(xe.prototype);
ar.prototype.constructor = ar;
ar.prototype.isCubicBezierCurve3 = !0;
ar.prototype.getPoint = function (e, t) {
	var n = t || new R(),
		r = this.v0,
		i = this.v1,
		a = this.v2,
		s = this.v3;
	return n.set(ua(e, r.x, i.x, a.x, s.x), ua(e, r.y, i.y, a.y, s.y), ua(e, r.z, i.z, a.z, s.z)), n;
};
ar.prototype.copy = function (e) {
	return (
		xe.prototype.copy.call(this, e),
		this.v0.copy(e.v0),
		this.v1.copy(e.v1),
		this.v2.copy(e.v2),
		this.v3.copy(e.v3),
		this
	);
};
ar.prototype.toJSON = function () {
	var e = xe.prototype.toJSON.call(this);
	return (
		(e.v0 = this.v0.toArray()),
		(e.v1 = this.v1.toArray()),
		(e.v2 = this.v2.toArray()),
		(e.v3 = this.v3.toArray()),
		e
	);
};
ar.prototype.fromJSON = function (e) {
	return (
		xe.prototype.fromJSON.call(this, e),
		this.v0.fromArray(e.v0),
		this.v1.fromArray(e.v1),
		this.v2.fromArray(e.v2),
		this.v3.fromArray(e.v3),
		this
	);
};
function rn(e, t) {
	xe.call(this), (this.type = 'LineCurve'), (this.v1 = e || new W()), (this.v2 = t || new W());
}
rn.prototype = Object.create(xe.prototype);
rn.prototype.constructor = rn;
rn.prototype.isLineCurve = !0;
rn.prototype.getPoint = function (e, t) {
	var n = t || new W();
	return (
		e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
	);
};
rn.prototype.getPointAt = function (e, t) {
	return this.getPoint(e, t);
};
rn.prototype.getTangent = function () {
	var e = this.v2.clone().sub(this.v1);
	return e.normalize();
};
rn.prototype.copy = function (e) {
	return xe.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
rn.prototype.toJSON = function () {
	var e = xe.prototype.toJSON.call(this);
	return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
};
rn.prototype.fromJSON = function (e) {
	return (
		xe.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
	);
};
function Un(e, t) {
	xe.call(this), (this.type = 'LineCurve3'), (this.v1 = e || new R()), (this.v2 = t || new R());
}
Un.prototype = Object.create(xe.prototype);
Un.prototype.constructor = Un;
Un.prototype.isLineCurve3 = !0;
Un.prototype.getPoint = function (e, t) {
	var n = t || new R();
	return (
		e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
	);
};
Un.prototype.getPointAt = function (e, t) {
	return this.getPoint(e, t);
};
Un.prototype.copy = function (e) {
	return xe.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
Un.prototype.toJSON = function () {
	var e = xe.prototype.toJSON.call(this);
	return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
};
Un.prototype.fromJSON = function (e) {
	return (
		xe.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
	);
};
function Bn(e, t, n) {
	xe.call(this),
		(this.type = 'QuadraticBezierCurve'),
		(this.v0 = e || new W()),
		(this.v1 = t || new W()),
		(this.v2 = n || new W());
}
Bn.prototype = Object.create(xe.prototype);
Bn.prototype.constructor = Bn;
Bn.prototype.isQuadraticBezierCurve = !0;
Bn.prototype.getPoint = function (e, t) {
	var n = t || new W(),
		r = this.v0,
		i = this.v1,
		a = this.v2;
	return n.set(oa(e, r.x, i.x, a.x), oa(e, r.y, i.y, a.y)), n;
};
Bn.prototype.copy = function (e) {
	return (
		xe.prototype.copy.call(this, e),
		this.v0.copy(e.v0),
		this.v1.copy(e.v1),
		this.v2.copy(e.v2),
		this
	);
};
Bn.prototype.toJSON = function () {
	var e = xe.prototype.toJSON.call(this);
	return (e.v0 = this.v0.toArray()), (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
};
Bn.prototype.fromJSON = function (e) {
	return (
		xe.prototype.fromJSON.call(this, e),
		this.v0.fromArray(e.v0),
		this.v1.fromArray(e.v1),
		this.v2.fromArray(e.v2),
		this
	);
};
function sr(e, t, n) {
	xe.call(this),
		(this.type = 'QuadraticBezierCurve3'),
		(this.v0 = e || new R()),
		(this.v1 = t || new R()),
		(this.v2 = n || new R());
}
sr.prototype = Object.create(xe.prototype);
sr.prototype.constructor = sr;
sr.prototype.isQuadraticBezierCurve3 = !0;
sr.prototype.getPoint = function (e, t) {
	var n = t || new R(),
		r = this.v0,
		i = this.v1,
		a = this.v2;
	return n.set(oa(e, r.x, i.x, a.x), oa(e, r.y, i.y, a.y), oa(e, r.z, i.z, a.z)), n;
};
sr.prototype.copy = function (e) {
	return (
		xe.prototype.copy.call(this, e),
		this.v0.copy(e.v0),
		this.v1.copy(e.v1),
		this.v2.copy(e.v2),
		this
	);
};
sr.prototype.toJSON = function () {
	var e = xe.prototype.toJSON.call(this);
	return (e.v0 = this.v0.toArray()), (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
};
sr.prototype.fromJSON = function (e) {
	return (
		xe.prototype.fromJSON.call(this, e),
		this.v0.fromArray(e.v0),
		this.v1.fromArray(e.v1),
		this.v2.fromArray(e.v2),
		this
	);
};
function Gn(e) {
	xe.call(this), (this.type = 'SplineCurve'), (this.points = e || []);
}
Gn.prototype = Object.create(xe.prototype);
Gn.prototype.constructor = Gn;
Gn.prototype.isSplineCurve = !0;
Gn.prototype.getPoint = function (e, t) {
	var n = t || new W(),
		r = this.points,
		i = (r.length - 1) * e,
		a = Math.floor(i),
		s = i - a,
		o = r[a === 0 ? a : a - 1],
		u = r[a],
		l = r[a > r.length - 2 ? r.length - 1 : a + 1],
		f = r[a > r.length - 3 ? r.length - 1 : a + 2];
	return n.set(Zf(s, o.x, u.x, l.x, f.x), Zf(s, o.y, u.y, l.y, f.y)), n;
};
Gn.prototype.copy = function (e) {
	xe.prototype.copy.call(this, e), (this.points = []);
	for (var t = 0, n = e.points.length; t < n; t++) {
		var r = e.points[t];
		this.points.push(r.clone());
	}
	return this;
};
Gn.prototype.toJSON = function () {
	var e = xe.prototype.toJSON.call(this);
	e.points = [];
	for (var t = 0, n = this.points.length; t < n; t++) {
		var r = this.points[t];
		e.points.push(r.toArray());
	}
	return e;
};
Gn.prototype.fromJSON = function (e) {
	xe.prototype.fromJSON.call(this, e), (this.points = []);
	for (var t = 0, n = e.points.length; t < n; t++) {
		var r = e.points[t];
		this.points.push(new W().fromArray(r));
	}
	return this;
};
var el = Object.freeze({
	ArcCurve: Ga,
	CatmullRomCurve3: nn,
	CubicBezierCurve: kn,
	CubicBezierCurve3: ar,
	EllipseCurve: pn,
	LineCurve: rn,
	LineCurve3: Un,
	QuadraticBezierCurve: Bn,
	QuadraticBezierCurve3: sr,
	SplineCurve: Gn
});
function vr() {
	xe.call(this), (this.type = 'CurvePath'), (this.curves = []), (this.autoClose = !1);
}
vr.prototype = Object.assign(Object.create(xe.prototype), {
	constructor: vr,
	add: function (e) {
		this.curves.push(e);
	},
	closePath: function () {
		var e = this.curves[0].getPoint(0),
			t = this.curves[this.curves.length - 1].getPoint(1);
		e.equals(t) || this.curves.push(new rn(t, e));
	},
	getPoint: function (e) {
		for (var t = e * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length; ) {
			if (n[r] >= t) {
				var i = n[r] - t,
					a = this.curves[r],
					s = a.getLength(),
					o = s === 0 ? 0 : 1 - i / s;
				return a.getPointAt(o);
			}
			r++;
		}
		return null;
	},
	getLength: function () {
		var e = this.getCurveLengths();
		return e[e.length - 1];
	},
	updateArcLengths: function () {
		(this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
	},
	getCurveLengths: function () {
		if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
			return this.cacheLengths;
		for (var e = [], t = 0, n = 0, r = this.curves.length; n < r; n++)
			(t += this.curves[n].getLength()), e.push(t);
		return (this.cacheLengths = e), e;
	},
	getSpacedPoints: function (e) {
		e === void 0 && (e = 40);
		for (var t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return this.autoClose && t.push(t[0]), t;
	},
	getPoints: function (e) {
		e = e || 12;
		for (var t = [], n, r = 0, i = this.curves; r < i.length; r++)
			for (
				var a = i[r],
					s =
						a && a.isEllipseCurve
							? e * 2
							: a && (a.isLineCurve || a.isLineCurve3)
								? 1
								: a && a.isSplineCurve
									? e * a.points.length
									: e,
					o = a.getPoints(s),
					u = 0;
				u < o.length;
				u++
			) {
				var l = o[u];
				(n && n.equals(l)) || (t.push(l), (n = l));
			}
		return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
	},
	copy: function (e) {
		xe.prototype.copy.call(this, e), (this.curves = []);
		for (var t = 0, n = e.curves.length; t < n; t++) {
			var r = e.curves[t];
			this.curves.push(r.clone());
		}
		return (this.autoClose = e.autoClose), this;
	},
	toJSON: function () {
		var e = xe.prototype.toJSON.call(this);
		(e.autoClose = this.autoClose), (e.curves = []);
		for (var t = 0, n = this.curves.length; t < n; t++) {
			var r = this.curves[t];
			e.curves.push(r.toJSON());
		}
		return e;
	},
	fromJSON: function (e) {
		xe.prototype.fromJSON.call(this, e), (this.autoClose = e.autoClose), (this.curves = []);
		for (var t = 0, n = e.curves.length; t < n; t++) {
			var r = e.curves[t];
			this.curves.push(new el[r.type]().fromJSON(r));
		}
		return this;
	}
});
function Nn(e) {
	vr.call(this), (this.type = 'Path'), (this.currentPoint = new W()), e && this.setFromPoints(e);
}
Nn.prototype = Object.assign(Object.create(vr.prototype), {
	constructor: Nn,
	setFromPoints: function (e) {
		this.moveTo(e[0].x, e[0].y);
		for (var t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
	},
	moveTo: function (e, t) {
		this.currentPoint.set(e, t);
	},
	lineTo: function (e, t) {
		var n = new rn(this.currentPoint.clone(), new W(e, t));
		this.curves.push(n), this.currentPoint.set(e, t);
	},
	quadraticCurveTo: function (e, t, n, r) {
		var i = new Bn(this.currentPoint.clone(), new W(e, t), new W(n, r));
		this.curves.push(i), this.currentPoint.set(n, r);
	},
	bezierCurveTo: function (e, t, n, r, i, a) {
		var s = new kn(this.currentPoint.clone(), new W(e, t), new W(n, r), new W(i, a));
		this.curves.push(s), this.currentPoint.set(i, a);
	},
	splineThru: function (e) {
		var t = [this.currentPoint.clone()].concat(e),
			n = new Gn(t);
		this.curves.push(n), this.currentPoint.copy(e[e.length - 1]);
	},
	arc: function (e, t, n, r, i, a) {
		var s = this.currentPoint.x,
			o = this.currentPoint.y;
		this.absarc(e + s, t + o, n, r, i, a);
	},
	absarc: function (e, t, n, r, i, a) {
		this.absellipse(e, t, n, n, r, i, a);
	},
	ellipse: function (e, t, n, r, i, a, s, o) {
		var u = this.currentPoint.x,
			l = this.currentPoint.y;
		this.absellipse(e + u, t + l, n, r, i, a, s, o);
	},
	absellipse: function (e, t, n, r, i, a, s, o) {
		var u = new pn(e, t, n, r, i, a, s, o);
		if (this.curves.length > 0) {
			var l = u.getPoint(0);
			l.equals(this.currentPoint) || this.lineTo(l.x, l.y);
		}
		this.curves.push(u);
		var f = u.getPoint(1);
		this.currentPoint.copy(f);
	},
	copy: function (e) {
		return vr.prototype.copy.call(this, e), this.currentPoint.copy(e.currentPoint), this;
	},
	toJSON: function () {
		var e = vr.prototype.toJSON.call(this);
		return (e.currentPoint = this.currentPoint.toArray()), e;
	},
	fromJSON: function (e) {
		return vr.prototype.fromJSON.call(this, e), this.currentPoint.fromArray(e.currentPoint), this;
	}
});
function qr(e) {
	Nn.call(this, e), (this.uuid = Ue.generateUUID()), (this.type = 'Shape'), (this.holes = []);
}
qr.prototype = Object.assign(Object.create(Nn.prototype), {
	constructor: qr,
	getPointsHoles: function (e) {
		for (var t = [], n = 0, r = this.holes.length; n < r; n++) t[n] = this.holes[n].getPoints(e);
		return t;
	},
	extractPoints: function (e) {
		return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
	},
	copy: function (e) {
		Nn.prototype.copy.call(this, e), (this.holes = []);
		for (var t = 0, n = e.holes.length; t < n; t++) {
			var r = e.holes[t];
			this.holes.push(r.clone());
		}
		return this;
	},
	toJSON: function () {
		var e = Nn.prototype.toJSON.call(this);
		(e.uuid = this.uuid), (e.holes = []);
		for (var t = 0, n = this.holes.length; t < n; t++) {
			var r = this.holes[t];
			e.holes.push(r.toJSON());
		}
		return e;
	},
	fromJSON: function (e) {
		Nn.prototype.fromJSON.call(this, e), (this.uuid = e.uuid), (this.holes = []);
		for (var t = 0, n = e.holes.length; t < n; t++) {
			var r = e.holes[t];
			this.holes.push(new Nn().fromJSON(r));
		}
		return this;
	}
});
function ct(e, t) {
	se.call(this),
		(this.type = 'Light'),
		(this.color = new he(e)),
		(this.intensity = t !== void 0 ? t : 1),
		(this.receiveShadow = void 0);
}
ct.prototype = Object.assign(Object.create(se.prototype), {
	constructor: ct,
	isLight: !0,
	copy: function (e) {
		return (
			se.prototype.copy.call(this, e),
			this.color.copy(e.color),
			(this.intensity = e.intensity),
			this
		);
	},
	toJSON: function (e) {
		var t = se.prototype.toJSON.call(this, e);
		return (
			(t.object.color = this.color.getHex()),
			(t.object.intensity = this.intensity),
			this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()),
			this.distance !== void 0 && (t.object.distance = this.distance),
			this.angle !== void 0 && (t.object.angle = this.angle),
			this.decay !== void 0 && (t.object.decay = this.decay),
			this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
			this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
			t
		);
	}
});
function tl(e, t, n) {
	ct.call(this, e, n),
		(this.type = 'HemisphereLight'),
		(this.castShadow = void 0),
		this.position.copy(se.DefaultUp),
		this.updateMatrix(),
		(this.groundColor = new he(t));
}
tl.prototype = Object.assign(Object.create(ct.prototype), {
	constructor: tl,
	isHemisphereLight: !0,
	copy: function (e) {
		return ct.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this;
	}
});
function or(e) {
	(this.camera = e),
		(this.bias = 0),
		(this.radius = 1),
		(this.mapSize = new W(512, 512)),
		(this.map = null),
		(this.mapPass = null),
		(this.matrix = new He()),
		(this._frustum = new No()),
		(this._frameExtents = new W(1, 1)),
		(this._viewportCount = 1),
		(this._viewports = [new rt(0, 0, 1, 1)]);
}
Object.assign(or.prototype, {
	_projScreenMatrix: new He(),
	_lightPositionWorld: new R(),
	_lookTarget: new R(),
	getViewportCount: function () {
		return this._viewportCount;
	},
	getFrustum: function () {
		return this._frustum;
	},
	updateMatrices: function (e) {
		var t = this.camera,
			n = this.matrix,
			r = this._projScreenMatrix,
			i = this._lookTarget,
			a = this._lightPositionWorld;
		a.setFromMatrixPosition(e.matrixWorld),
			t.position.copy(a),
			i.setFromMatrixPosition(e.target.matrixWorld),
			t.lookAt(i),
			t.updateMatrixWorld(),
			r.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
			this._frustum.setFromMatrix(r),
			n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
			n.multiply(t.projectionMatrix),
			n.multiply(t.matrixWorldInverse);
	},
	getViewport: function (e) {
		return this._viewports[e];
	},
	getFrameExtents: function () {
		return this._frameExtents;
	},
	copy: function (e) {
		return (
			(this.camera = e.camera.clone()),
			(this.bias = e.bias),
			(this.radius = e.radius),
			this.mapSize.copy(e.mapSize),
			this
		);
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	toJSON: function () {
		var e = {};
		return (
			this.bias !== 0 && (e.bias = this.bias),
			this.radius !== 1 && (e.radius = this.radius),
			(this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()),
			(e.camera = this.camera.toJSON(!1).object),
			delete e.camera.matrix,
			e
		);
	}
});
function nl() {
	or.call(this, new bt(50, 1, 0.5, 500));
}
nl.prototype = Object.assign(Object.create(or.prototype), {
	constructor: nl,
	isSpotLightShadow: !0,
	updateMatrices: function (e, t, n) {
		var r = this.camera,
			i = Ue.RAD2DEG * 2 * e.angle,
			a = this.mapSize.width / this.mapSize.height,
			s = e.distance || r.far;
		(i !== r.fov || a !== r.aspect || s !== r.far) &&
			((r.fov = i), (r.aspect = a), (r.far = s), r.updateProjectionMatrix()),
			or.prototype.updateMatrices.call(this, e, t, n);
	}
});
function rl(e, t, n, r, i, a) {
	ct.call(this, e, t),
		(this.type = 'SpotLight'),
		this.position.copy(se.DefaultUp),
		this.updateMatrix(),
		(this.target = new se()),
		Object.defineProperty(this, 'power', {
			get: function () {
				return this.intensity * Math.PI;
			},
			set: function (s) {
				this.intensity = s / Math.PI;
			}
		}),
		(this.distance = n !== void 0 ? n : 0),
		(this.angle = r !== void 0 ? r : Math.PI / 3),
		(this.penumbra = i !== void 0 ? i : 0),
		(this.decay = a !== void 0 ? a : 1),
		(this.shadow = new nl());
}
rl.prototype = Object.assign(Object.create(ct.prototype), {
	constructor: rl,
	isSpotLight: !0,
	copy: function (e) {
		return (
			ct.prototype.copy.call(this, e),
			(this.distance = e.distance),
			(this.angle = e.angle),
			(this.penumbra = e.penumbra),
			(this.decay = e.decay),
			(this.target = e.target.clone()),
			(this.shadow = e.shadow.clone()),
			this
		);
	}
});
function il() {
	or.call(this, new bt(90, 1, 0.5, 500)),
		(this._frameExtents = new W(4, 2)),
		(this._viewportCount = 6),
		(this._viewports = [
			new rt(2, 1, 1, 1),
			new rt(0, 1, 1, 1),
			new rt(3, 1, 1, 1),
			new rt(1, 1, 1, 1),
			new rt(3, 0, 1, 1),
			new rt(1, 0, 1, 1)
		]),
		(this._cubeDirections = [
			new R(1, 0, 0),
			new R(-1, 0, 0),
			new R(0, 0, 1),
			new R(0, 0, -1),
			new R(0, 1, 0),
			new R(0, -1, 0)
		]),
		(this._cubeUps = [
			new R(0, 1, 0),
			new R(0, 1, 0),
			new R(0, 1, 0),
			new R(0, 1, 0),
			new R(0, 0, 1),
			new R(0, 0, -1)
		]);
}
il.prototype = Object.assign(Object.create(or.prototype), {
	constructor: il,
	isPointLightShadow: !0,
	updateMatrices: function (e, t, n) {
		var r = this.camera,
			i = this.matrix,
			a = this._lightPositionWorld,
			s = this._lookTarget,
			o = this._projScreenMatrix;
		a.setFromMatrixPosition(e.matrixWorld),
			r.position.copy(a),
			s.copy(r.position),
			s.add(this._cubeDirections[n]),
			r.up.copy(this._cubeUps[n]),
			r.lookAt(s),
			r.updateMatrixWorld(),
			i.makeTranslation(-a.x, -a.y, -a.z),
			o.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse),
			this._frustum.setFromMatrix(o);
	}
});
function al(e, t, n, r) {
	ct.call(this, e, t),
		(this.type = 'PointLight'),
		Object.defineProperty(this, 'power', {
			get: function () {
				return this.intensity * 4 * Math.PI;
			},
			set: function (i) {
				this.intensity = i / (4 * Math.PI);
			}
		}),
		(this.distance = n !== void 0 ? n : 0),
		(this.decay = r !== void 0 ? r : 1),
		(this.shadow = new il());
}
al.prototype = Object.assign(Object.create(ct.prototype), {
	constructor: al,
	isPointLight: !0,
	copy: function (e) {
		return (
			ct.prototype.copy.call(this, e),
			(this.distance = e.distance),
			(this.decay = e.decay),
			(this.shadow = e.shadow.clone()),
			this
		);
	}
});
function wo(e, t, n, r, i, a) {
	nr.call(this),
		(this.type = 'OrthographicCamera'),
		(this.zoom = 1),
		(this.view = null),
		(this.left = e !== void 0 ? e : -1),
		(this.right = t !== void 0 ? t : 1),
		(this.top = n !== void 0 ? n : 1),
		(this.bottom = r !== void 0 ? r : -1),
		(this.near = i !== void 0 ? i : 0.1),
		(this.far = a !== void 0 ? a : 2e3),
		this.updateProjectionMatrix();
}
wo.prototype = Object.assign(Object.create(nr.prototype), {
	constructor: wo,
	isOrthographicCamera: !0,
	copy: function (e, t) {
		return (
			nr.prototype.copy.call(this, e, t),
			(this.left = e.left),
			(this.right = e.right),
			(this.top = e.top),
			(this.bottom = e.bottom),
			(this.near = e.near),
			(this.far = e.far),
			(this.zoom = e.zoom),
			(this.view = e.view === null ? null : Object.assign({}, e.view)),
			this
		);
	},
	setViewOffset: function (e, t, n, r, i, a) {
		this.view === null &&
			(this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			}),
			(this.view.enabled = !0),
			(this.view.fullWidth = e),
			(this.view.fullHeight = t),
			(this.view.offsetX = n),
			(this.view.offsetY = r),
			(this.view.width = i),
			(this.view.height = a),
			this.updateProjectionMatrix();
	},
	clearViewOffset: function () {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	},
	updateProjectionMatrix: function () {
		var e = (this.right - this.left) / (2 * this.zoom),
			t = (this.top - this.bottom) / (2 * this.zoom),
			n = (this.right + this.left) / 2,
			r = (this.top + this.bottom) / 2,
			i = n - e,
			a = n + e,
			s = r + t,
			o = r - t;
		if (this.view !== null && this.view.enabled) {
			var u = this.zoom / (this.view.width / this.view.fullWidth),
				l = this.zoom / (this.view.height / this.view.fullHeight),
				f = (this.right - this.left) / this.view.width,
				c = (this.top - this.bottom) / this.view.height;
			(i += f * (this.view.offsetX / u)),
				(a = i + f * (this.view.width / u)),
				(s -= c * (this.view.offsetY / l)),
				(o = s - c * (this.view.height / l));
		}
		this.projectionMatrix.makeOrthographic(i, a, s, o, this.near, this.far),
			this.projectionMatrixInverse.getInverse(this.projectionMatrix);
	},
	toJSON: function (e) {
		var t = se.prototype.toJSON.call(this, e);
		return (
			(t.object.zoom = this.zoom),
			(t.object.left = this.left),
			(t.object.right = this.right),
			(t.object.top = this.top),
			(t.object.bottom = this.bottom),
			(t.object.near = this.near),
			(t.object.far = this.far),
			this.view !== null && (t.object.view = Object.assign({}, this.view)),
			t
		);
	}
});
function sl() {
	or.call(this, new wo(-5, 5, 5, -5, 0.5, 500));
}
sl.prototype = Object.assign(Object.create(or.prototype), {
	constructor: sl,
	isDirectionalLightShadow: !0,
	updateMatrices: function (e, t, n) {
		or.prototype.updateMatrices.call(this, e, t, n);
	}
});
function ol(e, t) {
	ct.call(this, e, t),
		(this.type = 'DirectionalLight'),
		this.position.copy(se.DefaultUp),
		this.updateMatrix(),
		(this.target = new se()),
		(this.shadow = new sl());
}
ol.prototype = Object.assign(Object.create(ct.prototype), {
	constructor: ol,
	isDirectionalLight: !0,
	copy: function (e) {
		return (
			ct.prototype.copy.call(this, e),
			(this.target = e.target.clone()),
			(this.shadow = e.shadow.clone()),
			this
		);
	}
});
function ul(e, t) {
	ct.call(this, e, t), (this.type = 'AmbientLight'), (this.castShadow = void 0);
}
ul.prototype = Object.assign(Object.create(ct.prototype), { constructor: ul, isAmbientLight: !0 });
function ll(e, t, n, r) {
	ct.call(this, e, t),
		(this.type = 'RectAreaLight'),
		(this.width = n !== void 0 ? n : 10),
		(this.height = r !== void 0 ? r : 10);
}
ll.prototype = Object.assign(Object.create(ct.prototype), {
	constructor: ll,
	isRectAreaLight: !0,
	copy: function (e) {
		return ct.prototype.copy.call(this, e), (this.width = e.width), (this.height = e.height), this;
	},
	toJSON: function (e) {
		var t = ct.prototype.toJSON.call(this, e);
		return (t.object.width = this.width), (t.object.height = this.height), t;
	}
});
function fl(e) {
	it.call(this, e), (this.textures = {});
}
fl.prototype = Object.assign(Object.create(it.prototype), {
	constructor: fl,
	load: function (e, t, n, r) {
		var i = this,
			a = new Fn(i.manager);
		a.setPath(i.path),
			a.load(
				e,
				function (s) {
					t(i.parse(JSON.parse(s)));
				},
				n,
				r
			);
	},
	parse: function (e) {
		var t = this.textures;
		function n(u) {
			return t[u] === void 0 && console.warn('THREE.MaterialLoader: Undefined texture', u), t[u];
		}
		var r = new i_[e.type]();
		if (
			(e.uuid !== void 0 && (r.uuid = e.uuid),
			e.name !== void 0 && (r.name = e.name),
			e.color !== void 0 && r.color.setHex(e.color),
			e.roughness !== void 0 && (r.roughness = e.roughness),
			e.metalness !== void 0 && (r.metalness = e.metalness),
			e.sheen !== void 0 && (r.sheen = new he().setHex(e.sheen)),
			e.emissive !== void 0 && r.emissive.setHex(e.emissive),
			e.specular !== void 0 && r.specular.setHex(e.specular),
			e.shininess !== void 0 && (r.shininess = e.shininess),
			e.clearcoat !== void 0 && (r.clearcoat = e.clearcoat),
			e.clearcoatRoughness !== void 0 && (r.clearcoatRoughness = e.clearcoatRoughness),
			e.vertexColors !== void 0 && (r.vertexColors = e.vertexColors),
			e.fog !== void 0 && (r.fog = e.fog),
			e.flatShading !== void 0 && (r.flatShading = e.flatShading),
			e.blending !== void 0 && (r.blending = e.blending),
			e.combine !== void 0 && (r.combine = e.combine),
			e.side !== void 0 && (r.side = e.side),
			e.opacity !== void 0 && (r.opacity = e.opacity),
			e.transparent !== void 0 && (r.transparent = e.transparent),
			e.alphaTest !== void 0 && (r.alphaTest = e.alphaTest),
			e.depthTest !== void 0 && (r.depthTest = e.depthTest),
			e.depthWrite !== void 0 && (r.depthWrite = e.depthWrite),
			e.colorWrite !== void 0 && (r.colorWrite = e.colorWrite),
			e.stencilWrite !== void 0 && (r.stencilWrite = e.stencilWrite),
			e.stencilWriteMask !== void 0 && (r.stencilWriteMask = e.stencilWriteMask),
			e.stencilFunc !== void 0 && (r.stencilFunc = e.stencilFunc),
			e.stencilRef !== void 0 && (r.stencilRef = e.stencilRef),
			e.stencilFuncMask !== void 0 && (r.stencilFuncMask = e.stencilFuncMask),
			e.stencilFail !== void 0 && (r.stencilFail = e.stencilFail),
			e.stencilZFail !== void 0 && (r.stencilZFail = e.stencilZFail),
			e.stencilZPass !== void 0 && (r.stencilZPass = e.stencilZPass),
			e.wireframe !== void 0 && (r.wireframe = e.wireframe),
			e.wireframeLinewidth !== void 0 && (r.wireframeLinewidth = e.wireframeLinewidth),
			e.wireframeLinecap !== void 0 && (r.wireframeLinecap = e.wireframeLinecap),
			e.wireframeLinejoin !== void 0 && (r.wireframeLinejoin = e.wireframeLinejoin),
			e.rotation !== void 0 && (r.rotation = e.rotation),
			e.linewidth !== 1 && (r.linewidth = e.linewidth),
			e.dashSize !== void 0 && (r.dashSize = e.dashSize),
			e.gapSize !== void 0 && (r.gapSize = e.gapSize),
			e.scale !== void 0 && (r.scale = e.scale),
			e.polygonOffset !== void 0 && (r.polygonOffset = e.polygonOffset),
			e.polygonOffsetFactor !== void 0 && (r.polygonOffsetFactor = e.polygonOffsetFactor),
			e.polygonOffsetUnits !== void 0 && (r.polygonOffsetUnits = e.polygonOffsetUnits),
			e.skinning !== void 0 && (r.skinning = e.skinning),
			e.morphTargets !== void 0 && (r.morphTargets = e.morphTargets),
			e.morphNormals !== void 0 && (r.morphNormals = e.morphNormals),
			e.dithering !== void 0 && (r.dithering = e.dithering),
			e.visible !== void 0 && (r.visible = e.visible),
			e.toneMapped !== void 0 && (r.toneMapped = e.toneMapped),
			e.userData !== void 0 && (r.userData = e.userData),
			e.uniforms !== void 0)
		)
			for (var i in e.uniforms) {
				var a = e.uniforms[i];
				switch (((r.uniforms[i] = {}), a.type)) {
					case 't':
						r.uniforms[i].value = n(a.value);
						break;
					case 'c':
						r.uniforms[i].value = new he().setHex(a.value);
						break;
					case 'v2':
						r.uniforms[i].value = new W().fromArray(a.value);
						break;
					case 'v3':
						r.uniforms[i].value = new R().fromArray(a.value);
						break;
					case 'v4':
						r.uniforms[i].value = new rt().fromArray(a.value);
						break;
					case 'm3':
						r.uniforms[i].value = new Et().fromArray(a.value);
					case 'm4':
						r.uniforms[i].value = new He().fromArray(a.value);
						break;
					default:
						r.uniforms[i].value = a.value;
				}
			}
		if (
			(e.defines !== void 0 && (r.defines = e.defines),
			e.vertexShader !== void 0 && (r.vertexShader = e.vertexShader),
			e.fragmentShader !== void 0 && (r.fragmentShader = e.fragmentShader),
			e.extensions !== void 0)
		)
			for (var s in e.extensions) r.extensions[s] = e.extensions[s];
		if (
			(e.shading !== void 0 && (r.flatShading = e.shading === 1),
			e.size !== void 0 && (r.size = e.size),
			e.sizeAttenuation !== void 0 && (r.sizeAttenuation = e.sizeAttenuation),
			e.map !== void 0 && (r.map = n(e.map)),
			e.matcap !== void 0 && (r.matcap = n(e.matcap)),
			e.alphaMap !== void 0 && ((r.alphaMap = n(e.alphaMap)), (r.transparent = !0)),
			e.bumpMap !== void 0 && (r.bumpMap = n(e.bumpMap)),
			e.bumpScale !== void 0 && (r.bumpScale = e.bumpScale),
			e.normalMap !== void 0 && (r.normalMap = n(e.normalMap)),
			e.normalMapType !== void 0 && (r.normalMapType = e.normalMapType),
			e.normalScale !== void 0)
		) {
			var o = e.normalScale;
			Array.isArray(o) === !1 && (o = [o, o]), (r.normalScale = new W().fromArray(o));
		}
		return (
			e.displacementMap !== void 0 && (r.displacementMap = n(e.displacementMap)),
			e.displacementScale !== void 0 && (r.displacementScale = e.displacementScale),
			e.displacementBias !== void 0 && (r.displacementBias = e.displacementBias),
			e.roughnessMap !== void 0 && (r.roughnessMap = n(e.roughnessMap)),
			e.metalnessMap !== void 0 && (r.metalnessMap = n(e.metalnessMap)),
			e.emissiveMap !== void 0 && (r.emissiveMap = n(e.emissiveMap)),
			e.emissiveIntensity !== void 0 && (r.emissiveIntensity = e.emissiveIntensity),
			e.specularMap !== void 0 && (r.specularMap = n(e.specularMap)),
			e.envMap !== void 0 && (r.envMap = n(e.envMap)),
			e.envMapIntensity !== void 0 && (r.envMapIntensity = e.envMapIntensity),
			e.reflectivity !== void 0 && (r.reflectivity = e.reflectivity),
			e.refractionRatio !== void 0 && (r.refractionRatio = e.refractionRatio),
			e.lightMap !== void 0 && (r.lightMap = n(e.lightMap)),
			e.lightMapIntensity !== void 0 && (r.lightMapIntensity = e.lightMapIntensity),
			e.aoMap !== void 0 && (r.aoMap = n(e.aoMap)),
			e.aoMapIntensity !== void 0 && (r.aoMapIntensity = e.aoMapIntensity),
			e.gradientMap !== void 0 && (r.gradientMap = n(e.gradientMap)),
			e.clearcoatNormalMap !== void 0 && (r.clearcoatNormalMap = n(e.clearcoatNormalMap)),
			e.clearcoatNormalScale !== void 0 &&
				(r.clearcoatNormalScale = new W().fromArray(e.clearcoatNormalScale)),
			r
		);
	},
	setTextures: function (e) {
		return (this.textures = e), this;
	}
});
var bh = {
	decodeText: function (e) {
		if (typeof TextDecoder < 'u') return new TextDecoder().decode(e);
		for (var t = '', n = 0, r = e.length; n < r; n++) t += String.fromCharCode(e[n]);
		try {
			return decodeURIComponent(escape(t));
		} catch {
			return t;
		}
	},
	extractUrlBase: function (e) {
		var t = e.lastIndexOf('/');
		return t === -1 ? './' : e.substr(0, t + 1);
	}
};
function cl() {
	ae.call(this), (this.type = 'InstancedBufferGeometry'), (this.maxInstancedCount = void 0);
}
cl.prototype = Object.assign(Object.create(ae.prototype), {
	constructor: cl,
	isInstancedBufferGeometry: !0,
	copy: function (e) {
		return ae.prototype.copy.call(this, e), (this.maxInstancedCount = e.maxInstancedCount), this;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	toJSON: function () {
		var e = ae.prototype.toJSON.call(this);
		return (e.maxInstancedCount = this.maxInstancedCount), (e.isInstancedBufferGeometry = !0), e;
	}
});
function hl(e, t, n, r) {
	typeof n == 'number' &&
		((r = n),
		(n = !1),
		console.error(
			'THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.'
		)),
		Ie.call(this, e, t, n),
		(this.meshPerAttribute = r || 1);
}
hl.prototype = Object.assign(Object.create(Ie.prototype), {
	constructor: hl,
	isInstancedBufferAttribute: !0,
	copy: function (e) {
		return Ie.prototype.copy.call(this, e), (this.meshPerAttribute = e.meshPerAttribute), this;
	},
	toJSON: function () {
		var e = Ie.prototype.toJSON.call(this);
		return (e.meshPerAttribute = this.meshPerAttribute), (e.isInstancedBufferAttribute = !0), e;
	}
});
function dl(e) {
	it.call(this, e);
}
dl.prototype = Object.assign(Object.create(it.prototype), {
	constructor: dl,
	load: function (e, t, n, r) {
		var i = this,
			a = new Fn(i.manager);
		a.setPath(i.path),
			a.load(
				e,
				function (s) {
					t(i.parse(JSON.parse(s)));
				},
				n,
				r
			);
	},
	parse: function (e) {
		var t = e.isInstancedBufferGeometry ? new cl() : new ae(),
			n = e.data.index;
		if (n !== void 0) {
			var r = new mu[n.type](n.array);
			t.setIndex(new Ie(r, 1));
		}
		var i = e.data.attributes;
		for (var a in i) {
			var s = i[a],
				r = new mu[s.type](s.array),
				o = s.isInstancedBufferAttribute ? hl : Ie,
				u = new o(r, s.itemSize, s.normalized);
			s.name !== void 0 && (u.name = s.name), t.addAttribute(a, u);
		}
		var l = e.data.morphAttributes;
		if (l)
			for (var a in l) {
				for (var f = l[a], c = [], h = 0, p = f.length; h < p; h++) {
					var s = f[h],
						r = new mu[s.type](s.array),
						u = new Ie(r, s.itemSize, s.normalized);
					s.name !== void 0 && (u.name = s.name), c.push(u);
				}
				t.morphAttributes[a] = c;
			}
		var d = e.data.groups || e.data.drawcalls || e.data.offsets;
		if (d !== void 0)
			for (var h = 0, m = d.length; h !== m; ++h) {
				var v = d[h];
				t.addGroup(v.start, v.count, v.materialIndex);
			}
		var g = e.data.boundingSphere;
		if (g !== void 0) {
			var x = new R();
			g.center !== void 0 && x.fromArray(g.center), (t.boundingSphere = new Mr(x, g.radius));
		}
		return e.name && (t.name = e.name), e.userData && (t.userData = e.userData), t;
	}
});
var mu = {
	Int8Array,
	Uint8Array,
	Uint8ClampedArray: typeof Uint8ClampedArray < 'u' ? Uint8ClampedArray : Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array
};
function pl(e) {
	it.call(this, e);
}
pl.prototype = Object.assign(Object.create(it.prototype), {
	constructor: pl,
	load: function (e, t, n, r) {
		var i = this,
			a = this.path === '' ? bh.extractUrlBase(e) : this.path;
		this.resourcePath = this.resourcePath || a;
		var s = new Fn(i.manager);
		s.setPath(this.path),
			s.load(
				e,
				function (o) {
					var u = null;
					try {
						u = JSON.parse(o);
					} catch (f) {
						r !== void 0 && r(f),
							console.error("THREE:ObjectLoader: Can't parse " + e + '.', f.message);
						return;
					}
					var l = u.metadata;
					if (l === void 0 || l.type === void 0 || l.type.toLowerCase() === 'geometry') {
						console.error("THREE.ObjectLoader: Can't load " + e);
						return;
					}
					i.parse(u, t);
				},
				n,
				r
			);
	},
	parse: function (e, t) {
		var n = this.parseShape(e.shapes),
			r = this.parseGeometries(e.geometries, n),
			i = this.parseImages(e.images, function () {
				t !== void 0 && t(o);
			}),
			a = this.parseTextures(e.textures, i),
			s = this.parseMaterials(e.materials, a),
			o = this.parseObject(e.object, r, s);
		return (
			e.animations && (o.animations = this.parseAnimations(e.animations)),
			(e.images === void 0 || e.images.length === 0) && t !== void 0 && t(o),
			o
		);
	},
	parseShape: function (e) {
		var t = {};
		if (e !== void 0)
			for (var n = 0, r = e.length; n < r; n++) {
				var i = new qr().fromJSON(e[n]);
				t[i.uuid] = i;
			}
		return t;
	},
	parseGeometries: function (e, t) {
		var n = {};
		if (e !== void 0)
			for (var r = new dl(), i = 0, a = e.length; i < a; i++) {
				var s,
					o = e[i];
				switch (o.type) {
					case 'PlaneGeometry':
					case 'PlaneBufferGeometry':
						s = new Gt[o.type](o.width, o.height, o.widthSegments, o.heightSegments);
						break;
					case 'BoxGeometry':
					case 'BoxBufferGeometry':
					case 'CubeGeometry':
						s = new Gt[o.type](
							o.width,
							o.height,
							o.depth,
							o.widthSegments,
							o.heightSegments,
							o.depthSegments
						);
						break;
					case 'CircleGeometry':
					case 'CircleBufferGeometry':
						s = new Gt[o.type](o.radius, o.segments, o.thetaStart, o.thetaLength);
						break;
					case 'CylinderGeometry':
					case 'CylinderBufferGeometry':
						s = new Gt[o.type](
							o.radiusTop,
							o.radiusBottom,
							o.height,
							o.radialSegments,
							o.heightSegments,
							o.openEnded,
							o.thetaStart,
							o.thetaLength
						);
						break;
					case 'ConeGeometry':
					case 'ConeBufferGeometry':
						s = new Gt[o.type](
							o.radius,
							o.height,
							o.radialSegments,
							o.heightSegments,
							o.openEnded,
							o.thetaStart,
							o.thetaLength
						);
						break;
					case 'SphereGeometry':
					case 'SphereBufferGeometry':
						s = new Gt[o.type](
							o.radius,
							o.widthSegments,
							o.heightSegments,
							o.phiStart,
							o.phiLength,
							o.thetaStart,
							o.thetaLength
						);
						break;
					case 'DodecahedronGeometry':
					case 'DodecahedronBufferGeometry':
					case 'IcosahedronGeometry':
					case 'IcosahedronBufferGeometry':
					case 'OctahedronGeometry':
					case 'OctahedronBufferGeometry':
					case 'TetrahedronGeometry':
					case 'TetrahedronBufferGeometry':
						s = new Gt[o.type](o.radius, o.detail);
						break;
					case 'RingGeometry':
					case 'RingBufferGeometry':
						s = new Gt[o.type](
							o.innerRadius,
							o.outerRadius,
							o.thetaSegments,
							o.phiSegments,
							o.thetaStart,
							o.thetaLength
						);
						break;
					case 'TorusGeometry':
					case 'TorusBufferGeometry':
						s = new Gt[o.type](o.radius, o.tube, o.radialSegments, o.tubularSegments, o.arc);
						break;
					case 'TorusKnotGeometry':
					case 'TorusKnotBufferGeometry':
						s = new Gt[o.type](o.radius, o.tube, o.tubularSegments, o.radialSegments, o.p, o.q);
						break;
					case 'TubeGeometry':
					case 'TubeBufferGeometry':
						s = new Gt[o.type](
							new el[o.path.type]().fromJSON(o.path),
							o.tubularSegments,
							o.radius,
							o.radialSegments,
							o.closed
						);
						break;
					case 'LatheGeometry':
					case 'LatheBufferGeometry':
						s = new Gt[o.type](o.points, o.segments, o.phiStart, o.phiLength);
						break;
					case 'PolyhedronGeometry':
					case 'PolyhedronBufferGeometry':
						s = new Gt[o.type](o.vertices, o.indices, o.radius, o.details);
						break;
					case 'ShapeGeometry':
					case 'ShapeBufferGeometry':
						for (var c = [], u = 0, l = o.shapes.length; u < l; u++) {
							var f = t[o.shapes[u]];
							c.push(f);
						}
						s = new Gt[o.type](c, o.curveSegments);
						break;
					case 'ExtrudeGeometry':
					case 'ExtrudeBufferGeometry':
						for (var c = [], u = 0, l = o.shapes.length; u < l; u++) {
							var f = t[o.shapes[u]];
							c.push(f);
						}
						var h = o.options.extrudePath;
						h !== void 0 && (o.options.extrudePath = new el[h.type]().fromJSON(h)),
							(s = new Gt[o.type](c, o.options));
						break;
					case 'BufferGeometry':
					case 'InstancedBufferGeometry':
						s = r.parse(o);
						break;
					case 'Geometry':
						if ('THREE' in window && 'LegacyJSONLoader' in THREE) {
							var p = new THREE.LegacyJSONLoader();
							s = p.parse(o, this.resourcePath).geometry;
						} else
							console.error(
								'THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".'
							);
						break;
					default:
						console.warn('THREE.ObjectLoader: Unsupported geometry type "' + o.type + '"');
						continue;
				}
				(s.uuid = o.uuid),
					o.name !== void 0 && (s.name = o.name),
					s.isBufferGeometry === !0 && o.userData !== void 0 && (s.userData = o.userData),
					(n[o.uuid] = s);
			}
		return n;
	},
	parseMaterials: function (e, t) {
		var n = {},
			r = {};
		if (e !== void 0) {
			var i = new fl();
			i.setTextures(t);
			for (var a = 0, s = e.length; a < s; a++) {
				var o = e[a];
				if (o.type === 'MultiMaterial') {
					for (var u = [], l = 0; l < o.materials.length; l++) {
						var f = o.materials[l];
						n[f.uuid] === void 0 && (n[f.uuid] = i.parse(f)), u.push(n[f.uuid]);
					}
					r[o.uuid] = u;
				} else n[o.uuid] === void 0 && (n[o.uuid] = i.parse(o)), (r[o.uuid] = n[o.uuid]);
			}
		}
		return r;
	},
	parseAnimations: function (e) {
		for (var t = [], n = 0; n < e.length; n++) {
			var r = e[n],
				i = bn.parse(r);
			r.uuid !== void 0 && (i.uuid = r.uuid), t.push(i);
		}
		return t;
	},
	parseImages: function (e, t) {
		var n = this,
			r = {};
		function i(m) {
			return (
				n.manager.itemStart(m),
				s.load(
					m,
					function () {
						n.manager.itemEnd(m);
					},
					void 0,
					function () {
						n.manager.itemError(m), n.manager.itemEnd(m);
					}
				)
			);
		}
		if (e !== void 0 && e.length > 0) {
			var a = new xh(t),
				s = new Ba(a);
			s.setCrossOrigin(this.crossOrigin);
			for (var o = 0, u = e.length; o < u; o++) {
				var l = e[o],
					f = l.url;
				if (Array.isArray(f)) {
					r[l.uuid] = [];
					for (var c = 0, h = f.length; c < h; c++) {
						var p = f[c],
							d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : n.resourcePath + p;
						r[l.uuid].push(i(d));
					}
				} else {
					var d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url) ? l.url : n.resourcePath + l.url;
					r[l.uuid] = i(d);
				}
			}
		}
		return r;
	},
	parseTextures: function (e, t) {
		function n(u, l) {
			return typeof u == 'number'
				? u
				: (console.warn('THREE.ObjectLoader.parseTexture: Constant should be in numeric form.', u),
					l[u]);
		}
		var r = {};
		if (e !== void 0)
			for (var i = 0, a = e.length; i < a; i++) {
				var s = e[i];
				s.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid),
					t[s.image] === void 0 && console.warn('THREE.ObjectLoader: Undefined image', s.image);
				var o;
				Array.isArray(t[s.image]) ? (o = new xr(t[s.image])) : (o = new lt(t[s.image])),
					(o.needsUpdate = !0),
					(o.uuid = s.uuid),
					s.name !== void 0 && (o.name = s.name),
					s.mapping !== void 0 && (o.mapping = n(s.mapping, v_)),
					s.offset !== void 0 && o.offset.fromArray(s.offset),
					s.repeat !== void 0 && o.repeat.fromArray(s.repeat),
					s.center !== void 0 && o.center.fromArray(s.center),
					s.rotation !== void 0 && (o.rotation = s.rotation),
					s.wrap !== void 0 && ((o.wrapS = n(s.wrap[0], Qf)), (o.wrapT = n(s.wrap[1], Qf))),
					s.format !== void 0 && (o.format = s.format),
					s.type !== void 0 && (o.type = s.type),
					s.encoding !== void 0 && (o.encoding = s.encoding),
					s.minFilter !== void 0 && (o.minFilter = n(s.minFilter, $f)),
					s.magFilter !== void 0 && (o.magFilter = n(s.magFilter, $f)),
					s.anisotropy !== void 0 && (o.anisotropy = s.anisotropy),
					s.flipY !== void 0 && (o.flipY = s.flipY),
					s.premultiplyAlpha !== void 0 && (o.premultiplyAlpha = s.premultiplyAlpha),
					s.unpackAlignment !== void 0 && (o.unpackAlignment = s.unpackAlignment),
					(r[s.uuid] = o);
			}
		return r;
	},
	parseObject: function (e, t, n) {
		var r;
		function i(d) {
			return t[d] === void 0 && console.warn('THREE.ObjectLoader: Undefined geometry', d), t[d];
		}
		function a(d) {
			if (d !== void 0) {
				if (Array.isArray(d)) {
					for (var m = [], v = 0, g = d.length; v < g; v++) {
						var x = d[v];
						n[x] === void 0 && console.warn('THREE.ObjectLoader: Undefined material', x),
							m.push(n[x]);
					}
					return m;
				}
				return n[d] === void 0 && console.warn('THREE.ObjectLoader: Undefined material', d), n[d];
			}
		}
		switch (e.type) {
			case 'Scene':
				(r = new Js()),
					e.background !== void 0 &&
						Number.isInteger(e.background) &&
						(r.background = new he(e.background)),
					e.fog !== void 0 &&
						(e.fog.type === 'Fog'
							? (r.fog = new Uu(e.fog.color, e.fog.near, e.fog.far))
							: e.fog.type === 'FogExp2' && (r.fog = new ku(e.fog.color, e.fog.density)));
				break;
			case 'PerspectiveCamera':
				(r = new bt(e.fov, e.aspect, e.near, e.far)),
					e.focus !== void 0 && (r.focus = e.focus),
					e.zoom !== void 0 && (r.zoom = e.zoom),
					e.filmGauge !== void 0 && (r.filmGauge = e.filmGauge),
					e.filmOffset !== void 0 && (r.filmOffset = e.filmOffset),
					e.view !== void 0 && (r.view = Object.assign({}, e.view));
				break;
			case 'OrthographicCamera':
				(r = new wo(e.left, e.right, e.top, e.bottom, e.near, e.far)),
					e.zoom !== void 0 && (r.zoom = e.zoom),
					e.view !== void 0 && (r.view = Object.assign({}, e.view));
				break;
			case 'AmbientLight':
				r = new ul(e.color, e.intensity);
				break;
			case 'DirectionalLight':
				r = new ol(e.color, e.intensity);
				break;
			case 'PointLight':
				r = new al(e.color, e.intensity, e.distance, e.decay);
				break;
			case 'RectAreaLight':
				r = new ll(e.color, e.intensity, e.width, e.height);
				break;
			case 'SpotLight':
				r = new rl(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
				break;
			case 'HemisphereLight':
				r = new tl(e.color, e.groundColor, e.intensity);
				break;
			case 'SkinnedMesh':
				console.warn('THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.');
			case 'Mesh':
				var s = i(e.geometry),
					o = a(e.material);
				s.bones && s.bones.length > 0 ? (r = new zs(s, o)) : (r = new wt(s, o)),
					e.drawMode !== void 0 && r.setDrawMode(e.drawMode);
				break;
			case 'LOD':
				r = new $s();
				break;
			case 'Line':
				r = new Ft(i(e.geometry), a(e.material), e.mode);
				break;
			case 'LineLoop':
				r = new Vu(i(e.geometry), a(e.material));
				break;
			case 'LineSegments':
				r = new dt(i(e.geometry), a(e.material));
				break;
			case 'PointCloud':
			case 'Points':
				r = new Wu(i(e.geometry), a(e.material));
				break;
			case 'Sprite':
				r = new Bu(a(e.material));
				break;
			case 'Group':
				r = new xa();
				break;
			default:
				r = new se();
		}
		if (
			((r.uuid = e.uuid),
			e.name !== void 0 && (r.name = e.name),
			e.matrix !== void 0
				? (r.matrix.fromArray(e.matrix),
					e.matrixAutoUpdate !== void 0 && (r.matrixAutoUpdate = e.matrixAutoUpdate),
					r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale))
				: (e.position !== void 0 && r.position.fromArray(e.position),
					e.rotation !== void 0 && r.rotation.fromArray(e.rotation),
					e.quaternion !== void 0 && r.quaternion.fromArray(e.quaternion),
					e.scale !== void 0 && r.scale.fromArray(e.scale)),
			e.castShadow !== void 0 && (r.castShadow = e.castShadow),
			e.receiveShadow !== void 0 && (r.receiveShadow = e.receiveShadow),
			e.shadow &&
				(e.shadow.bias !== void 0 && (r.shadow.bias = e.shadow.bias),
				e.shadow.radius !== void 0 && (r.shadow.radius = e.shadow.radius),
				e.shadow.mapSize !== void 0 && r.shadow.mapSize.fromArray(e.shadow.mapSize),
				e.shadow.camera !== void 0 && (r.shadow.camera = this.parseObject(e.shadow.camera))),
			e.visible !== void 0 && (r.visible = e.visible),
			e.frustumCulled !== void 0 && (r.frustumCulled = e.frustumCulled),
			e.renderOrder !== void 0 && (r.renderOrder = e.renderOrder),
			e.userData !== void 0 && (r.userData = e.userData),
			e.layers !== void 0 && (r.layers.mask = e.layers),
			e.children !== void 0)
		)
			for (var u = e.children, l = 0; l < u.length; l++) r.add(this.parseObject(u[l], t, n));
		if (e.type === 'LOD')
			for (var f = e.levels, c = 0; c < f.length; c++) {
				var h = f[c],
					p = r.getObjectByProperty('uuid', h.object);
				p !== void 0 && r.addLevel(p, h.distance);
			}
		return r;
	}
});
var v_ = {
		UVMapping: Ll,
		CubeReflectionMapping: Tl,
		CubeRefractionMapping: Al,
		EquirectangularReflectionMapping: Xc,
		EquirectangularRefractionMapping: Rl,
		SphericalReflectionMapping: Yc,
		CubeUVReflectionMapping: Cl,
		CubeUVRefractionMapping: Pl
	},
	Qf = { RepeatWrapping: Gs, ClampToEdgeWrapping: Kt, MirroredRepeatWrapping: Vs },
	$f = {
		NearestFilter: Dt,
		NearestMipmapNearestFilter: Il,
		NearestMipmapLinearFilter: Dl,
		LinearFilter: It,
		LinearMipmapNearestFilter: Zc,
		LinearMipmapLinearFilter: Io
	};
function zf(e) {
	typeof createImageBitmap > 'u' &&
		console.warn('THREE.ImageBitmapLoader: createImageBitmap() not supported.'),
		typeof fetch > 'u' && console.warn('THREE.ImageBitmapLoader: fetch() not supported.'),
		it.call(this, e),
		(this.options = void 0);
}
zf.prototype = Object.assign(Object.create(it.prototype), {
	constructor: zf,
	setOptions: function (t) {
		return (this.options = t), this;
	},
	load: function (e, t, n, r) {
		e === void 0 && (e = ''),
			this.path !== void 0 && (e = this.path + e),
			(e = this.manager.resolveURL(e));
		var i = this,
			a = qi.get(e);
		if (a !== void 0)
			return (
				i.manager.itemStart(e),
				setTimeout(function () {
					t && t(a), i.manager.itemEnd(e);
				}, 0),
				a
			);
		fetch(e)
			.then(function (s) {
				return s.blob();
			})
			.then(function (s) {
				return i.options === void 0 ? createImageBitmap(s) : createImageBitmap(s, i.options);
			})
			.then(function (s) {
				qi.add(e, s), t && t(s), i.manager.itemEnd(e);
			})
			.catch(function (s) {
				r && r(s), i.manager.itemError(e), i.manager.itemEnd(e);
			}),
			i.manager.itemStart(e);
	}
});
function yh() {
	(this.type = 'ShapePath'),
		(this.color = new he()),
		(this.subPaths = []),
		(this.currentPath = null);
}
Object.assign(yh.prototype, {
	moveTo: function (e, t) {
		(this.currentPath = new Nn()),
			this.subPaths.push(this.currentPath),
			this.currentPath.moveTo(e, t);
	},
	lineTo: function (e, t) {
		this.currentPath.lineTo(e, t);
	},
	quadraticCurveTo: function (e, t, n, r) {
		this.currentPath.quadraticCurveTo(e, t, n, r);
	},
	bezierCurveTo: function (e, t, n, r, i, a) {
		this.currentPath.bezierCurveTo(e, t, n, r, i, a);
	},
	splineThru: function (e) {
		this.currentPath.splineThru(e);
	},
	toShapes: function (e, t) {
		function n(D) {
			for (var B = [], q = 0, H = D.length; q < H; q++) {
				var j = D[q],
					K = new qr();
				(K.curves = j.curves), B.push(K);
			}
			return B;
		}
		function r(D, B) {
			for (var q = B.length, H = !1, j = q - 1, K = 0; K < q; j = K++) {
				var Z = B[j],
					ve = B[K],
					_e = ve.x - Z.x,
					V = ve.y - Z.y;
				if (Math.abs(V) > Number.EPSILON) {
					if ((V < 0 && ((Z = B[K]), (_e = -_e), (ve = B[j]), (V = -V)), D.y < Z.y || D.y > ve.y))
						continue;
					if (D.y === Z.y) {
						if (D.x === Z.x) return !0;
					} else {
						var be = V * (D.x - Z.x) - _e * (D.y - Z.y);
						if (be === 0) return !0;
						if (be < 0) continue;
						H = !H;
					}
				} else {
					if (D.y !== Z.y) continue;
					if ((ve.x <= D.x && D.x <= Z.x) || (Z.x <= D.x && D.x <= ve.x)) return !0;
				}
			}
			return H;
		}
		var i = gr.isClockWise,
			a = this.subPaths;
		if (a.length === 0) return [];
		if (t === !0) return n(a);
		var s,
			o,
			u,
			l = [];
		if (a.length === 1) return (o = a[0]), (u = new qr()), (u.curves = o.curves), l.push(u), l;
		var f = !i(a[0].getPoints());
		f = e ? !f : f;
		var c = [],
			h = [],
			p = [],
			d = 0,
			m;
		(h[d] = void 0), (p[d] = []);
		for (var v = 0, g = a.length; v < g; v++)
			(o = a[v]),
				(m = o.getPoints()),
				(s = i(m)),
				(s = e ? !s : s),
				s
					? (!f && h[d] && d++,
						(h[d] = { s: new qr(), p: m }),
						(h[d].s.curves = o.curves),
						f && d++,
						(p[d] = []))
					: p[d].push({ h: o, p: m[0] });
		if (!h[0]) return n(a);
		if (h.length > 1) {
			for (var x = !1, M = [], _ = 0, y = h.length; _ < y; _++) c[_] = [];
			for (var _ = 0, y = h.length; _ < y; _++)
				for (var L = p[_], C = 0; C < L.length; C++) {
					for (var T = L[C], P = !0, k = 0; k < h.length; k++)
						r(T.p, h[k].p) &&
							(_ !== k && M.push({ froms: _, tos: k, hole: C }),
							P ? ((P = !1), c[k].push(T)) : (x = !0));
					P && c[_].push(T);
				}
			M.length > 0 && (x || (p = c));
		}
		for (var I, v = 0, w = h.length; v < w; v++) {
			(u = h[v].s), l.push(u), (I = p[v]);
			for (var U = 0, N = I.length; U < N; U++) u.holes.push(I[U].h);
		}
		return l;
	}
});
function wh(e) {
	(this.type = 'Font'), (this.data = e);
}
Object.assign(wh.prototype, {
	isFont: !0,
	generateShapes: function (e, t) {
		t === void 0 && (t = 100);
		for (var n = [], r = m_(e, t, this.data), i = 0, a = r.length; i < a; i++)
			Array.prototype.push.apply(n, r[i].toShapes());
		return n;
	}
});
function m_(e, t, n) {
	for (
		var r = Array.from ? Array.from(e) : String(e).split(''),
			i = t / n.resolution,
			a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * i,
			s = [],
			o = 0,
			u = 0,
			l = 0;
		l < r.length;
		l++
	) {
		var f = r[l];
		if (
			f ===
			`
`
		)
			(o = 0), (u -= a);
		else {
			var c = g_(f, i, o, u, n);
			(o += c.offsetX), s.push(c.path);
		}
	}
	return s;
}
function g_(e, t, n, r, i) {
	var a = i.glyphs[e] || i.glyphs['?'];
	if (!a) {
		console.error(
			'THREE.Font: character "' + e + '" does not exists in font family ' + i.familyName + '.'
		);
		return;
	}
	var s = new yh(),
		o,
		u,
		l,
		f,
		c,
		h,
		p,
		d;
	if (a.o)
		for (
			var m = a._cachedOutline || (a._cachedOutline = a.o.split(' ')), v = 0, g = m.length;
			v < g;

		) {
			var x = m[v++];
			switch (x) {
				case 'm':
					(o = m[v++] * t + n), (u = m[v++] * t + r), s.moveTo(o, u);
					break;
				case 'l':
					(o = m[v++] * t + n), (u = m[v++] * t + r), s.lineTo(o, u);
					break;
				case 'q':
					(l = m[v++] * t + n),
						(f = m[v++] * t + r),
						(c = m[v++] * t + n),
						(h = m[v++] * t + r),
						s.quadraticCurveTo(c, h, l, f);
					break;
				case 'b':
					(l = m[v++] * t + n),
						(f = m[v++] * t + r),
						(c = m[v++] * t + n),
						(h = m[v++] * t + r),
						(p = m[v++] * t + n),
						(d = m[v++] * t + r),
						s.bezierCurveTo(c, h, p, d, l, f);
					break;
			}
		}
	return { offsetX: a.ha * t, path: s };
}
function ec(e) {
	it.call(this, e);
}
ec.prototype = Object.assign(Object.create(it.prototype), {
	constructor: ec,
	load: function (e, t, n, r) {
		var i = this,
			a = new Fn(this.manager);
		a.setPath(this.path),
			a.load(
				e,
				function (s) {
					var o;
					try {
						o = JSON.parse(s);
					} catch {
						console.warn(
							'THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.'
						),
							(o = JSON.parse(s.substring(65, s.length - 2)));
					}
					var u = i.parse(o);
					t && t(u);
				},
				n,
				r
			);
	},
	parse: function (e) {
		return new wh(e);
	}
});
var Ss,
	Mh = {
		getContext: function () {
			return Ss === void 0 && (Ss = new (window.AudioContext || window.webkitAudioContext)()), Ss;
		},
		setContext: function (e) {
			Ss = e;
		}
	};
function vl(e) {
	it.call(this, e);
}
vl.prototype = Object.assign(Object.create(it.prototype), {
	constructor: vl,
	load: function (e, t, n, r) {
		var i = new Fn(this.manager);
		i.setResponseType('arraybuffer'),
			i.setPath(this.path),
			i.load(
				e,
				function (a) {
					var s = a.slice(0),
						o = Mh.getContext();
					o.decodeAudioData(s, function (u) {
						t(u);
					});
				},
				n,
				r
			);
	}
});
function Gl() {
	this.coefficients = [];
	for (var e = 0; e < 9; e++) this.coefficients.push(new R());
}
Object.assign(Gl.prototype, {
	isSphericalHarmonics3: !0,
	set: function (e) {
		for (var t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
		return this;
	},
	zero: function () {
		for (var e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
		return this;
	},
	getAt: function (e, t) {
		var n = e.x,
			r = e.y,
			i = e.z,
			a = this.coefficients;
		return (
			t.copy(a[0]).multiplyScalar(0.282095),
			t.addScale(a[1], 0.488603 * r),
			t.addScale(a[2], 0.488603 * i),
			t.addScale(a[3], 0.488603 * n),
			t.addScale(a[4], 1.092548 * (n * r)),
			t.addScale(a[5], 1.092548 * (r * i)),
			t.addScale(a[6], 0.315392 * (3 * i * i - 1)),
			t.addScale(a[7], 1.092548 * (n * i)),
			t.addScale(a[8], 0.546274 * (n * n - r * r)),
			t
		);
	},
	getIrradianceAt: function (e, t) {
		var n = e.x,
			r = e.y,
			i = e.z,
			a = this.coefficients;
		return (
			t.copy(a[0]).multiplyScalar(0.886227),
			t.addScale(a[1], 2 * 0.511664 * r),
			t.addScale(a[2], 2 * 0.511664 * i),
			t.addScale(a[3], 2 * 0.511664 * n),
			t.addScale(a[4], 2 * 0.429043 * n * r),
			t.addScale(a[5], 2 * 0.429043 * r * i),
			t.addScale(a[6], 0.743125 * i * i - 0.247708),
			t.addScale(a[7], 2 * 0.429043 * n * i),
			t.addScale(a[8], 0.429043 * (n * n - r * r)),
			t
		);
	},
	add: function (e) {
		for (var t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
		return this;
	},
	scale: function (e) {
		for (var t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
		return this;
	},
	lerp: function (e, t) {
		for (var n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
		return this;
	},
	equals: function (e) {
		for (var t = 0; t < 9; t++) if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
		return !0;
	},
	copy: function (e) {
		return this.set(e.coefficients);
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	fromArray: function (e, t) {
		t === void 0 && (t = 0);
		for (var n = this.coefficients, r = 0; r < 9; r++) n[r].fromArray(e, t + r * 3);
		return this;
	},
	toArray: function (e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0);
		for (var n = this.coefficients, r = 0; r < 9; r++) n[r].toArray(e, t + r * 3);
		return e;
	}
});
Object.assign(Gl, {
	getBasisAt: function (e, t) {
		var n = e.x,
			r = e.y,
			i = e.z;
		(t[0] = 0.282095),
			(t[1] = 0.488603 * r),
			(t[2] = 0.488603 * i),
			(t[3] = 0.488603 * n),
			(t[4] = 1.092548 * n * r),
			(t[5] = 1.092548 * r * i),
			(t[6] = 0.315392 * (3 * i * i - 1)),
			(t[7] = 1.092548 * n * i),
			(t[8] = 0.546274 * (n * n - r * r));
	}
});
function On(e, t) {
	ct.call(this, void 0, t), (this.sh = e !== void 0 ? e : new Gl());
}
On.prototype = Object.assign(Object.create(ct.prototype), {
	constructor: On,
	isLightProbe: !0,
	copy: function (e) {
		return (
			ct.prototype.copy.call(this, e), this.sh.copy(e.sh), (this.intensity = e.intensity), this
		);
	},
	toJSON: function (e) {
		var t = ct.prototype.toJSON.call(this, e);
		return t;
	}
});
function tc(e, t, n) {
	On.call(this, void 0, n);
	var r = new he().set(e),
		i = new he().set(t),
		a = new R(r.r, r.g, r.b),
		s = new R(i.r, i.g, i.b),
		o = Math.sqrt(Math.PI),
		u = o * Math.sqrt(0.75);
	this.sh.coefficients[0].copy(a).add(s).multiplyScalar(o),
		this.sh.coefficients[1].copy(a).sub(s).multiplyScalar(u);
}
tc.prototype = Object.assign(Object.create(On.prototype), {
	constructor: tc,
	isHemisphereLightProbe: !0,
	copy: function (e) {
		return On.prototype.copy.call(this, e), this;
	},
	toJSON: function (e) {
		var t = On.prototype.toJSON.call(this, e);
		return t;
	}
});
function nc(e, t) {
	On.call(this, void 0, t);
	var n = new he().set(e);
	this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
}
nc.prototype = Object.assign(Object.create(On.prototype), {
	constructor: nc,
	isAmbientLightProbe: !0,
	copy: function (e) {
		return On.prototype.copy.call(this, e), this;
	},
	toJSON: function (e) {
		var t = On.prototype.toJSON.call(this, e);
		return t;
	}
});
var rc = new He(),
	ic = new He();
function __() {
	(this.type = 'StereoCamera'),
		(this.aspect = 1),
		(this.eyeSep = 0.064),
		(this.cameraL = new bt()),
		this.cameraL.layers.enable(1),
		(this.cameraL.matrixAutoUpdate = !1),
		(this.cameraR = new bt()),
		this.cameraR.layers.enable(2),
		(this.cameraR.matrixAutoUpdate = !1),
		(this._cache = {
			focus: null,
			fov: null,
			aspect: null,
			near: null,
			far: null,
			zoom: null,
			eyeSep: null
		});
}
Object.assign(__.prototype, {
	update: function (e) {
		var t = this._cache,
			n =
				t.focus !== e.focus ||
				t.fov !== e.fov ||
				t.aspect !== e.aspect * this.aspect ||
				t.near !== e.near ||
				t.far !== e.far ||
				t.zoom !== e.zoom ||
				t.eyeSep !== this.eyeSep;
		if (n) {
			(t.focus = e.focus),
				(t.fov = e.fov),
				(t.aspect = e.aspect * this.aspect),
				(t.near = e.near),
				(t.far = e.far),
				(t.zoom = e.zoom),
				(t.eyeSep = this.eyeSep);
			var r = e.projectionMatrix.clone(),
				i = t.eyeSep / 2,
				a = (i * t.near) / t.focus,
				s = (t.near * Math.tan(Ue.DEG2RAD * t.fov * 0.5)) / t.zoom,
				o,
				u;
			(ic.elements[12] = -i),
				(rc.elements[12] = i),
				(o = -s * t.aspect + a),
				(u = s * t.aspect + a),
				(r.elements[0] = (2 * t.near) / (u - o)),
				(r.elements[8] = (u + o) / (u - o)),
				this.cameraL.projectionMatrix.copy(r),
				(o = -s * t.aspect - a),
				(u = s * t.aspect - a),
				(r.elements[0] = (2 * t.near) / (u - o)),
				(r.elements[8] = (u + o) / (u - o)),
				this.cameraR.projectionMatrix.copy(r);
		}
		this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(ic),
			this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(rc);
	}
});
function Eh(e) {
	(this.autoStart = e !== void 0 ? e : !0),
		(this.startTime = 0),
		(this.oldTime = 0),
		(this.elapsedTime = 0),
		(this.running = !1);
}
Object.assign(Eh.prototype, {
	start: function () {
		(this.startTime = (typeof performance > 'u' ? Date : performance).now()),
			(this.oldTime = this.startTime),
			(this.elapsedTime = 0),
			(this.running = !0);
	},
	stop: function () {
		this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
	},
	getElapsedTime: function () {
		return this.getDelta(), this.elapsedTime;
	},
	getDelta: function () {
		var e = 0;
		if (this.autoStart && !this.running) return this.start(), 0;
		if (this.running) {
			var t = (typeof performance > 'u' ? Date : performance).now();
			(e = (t - this.oldTime) / 1e3), (this.oldTime = t), (this.elapsedTime += e);
		}
		return e;
	}
});
var Fr = new R(),
	ac = new qt(),
	x_ = new R(),
	kr = new R();
function sc() {
	se.call(this),
		(this.type = 'AudioListener'),
		(this.context = Mh.getContext()),
		(this.gain = this.context.createGain()),
		this.gain.connect(this.context.destination),
		(this.filter = null),
		(this.timeDelta = 0),
		(this._clock = new Eh());
}
sc.prototype = Object.assign(Object.create(se.prototype), {
	constructor: sc,
	getInput: function () {
		return this.gain;
	},
	removeFilter: function () {
		return (
			this.filter !== null &&
				(this.gain.disconnect(this.filter),
				this.filter.disconnect(this.context.destination),
				this.gain.connect(this.context.destination),
				(this.filter = null)),
			this
		);
	},
	getFilter: function () {
		return this.filter;
	},
	setFilter: function (e) {
		return (
			this.filter !== null
				? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination))
				: this.gain.disconnect(this.context.destination),
			(this.filter = e),
			this.gain.connect(this.filter),
			this.filter.connect(this.context.destination),
			this
		);
	},
	getMasterVolume: function () {
		return this.gain.gain.value;
	},
	setMasterVolume: function (e) {
		return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
	},
	updateMatrixWorld: function (e) {
		se.prototype.updateMatrixWorld.call(this, e);
		var t = this.context.listener,
			n = this.up;
		if (
			((this.timeDelta = this._clock.getDelta()),
			this.matrixWorld.decompose(Fr, ac, x_),
			kr.set(0, 0, -1).applyQuaternion(ac),
			t.positionX)
		) {
			var r = this.context.currentTime + this.timeDelta;
			t.positionX.linearRampToValueAtTime(Fr.x, r),
				t.positionY.linearRampToValueAtTime(Fr.y, r),
				t.positionZ.linearRampToValueAtTime(Fr.z, r),
				t.forwardX.linearRampToValueAtTime(kr.x, r),
				t.forwardY.linearRampToValueAtTime(kr.y, r),
				t.forwardZ.linearRampToValueAtTime(kr.z, r),
				t.upX.linearRampToValueAtTime(n.x, r),
				t.upY.linearRampToValueAtTime(n.y, r),
				t.upZ.linearRampToValueAtTime(n.z, r);
		} else t.setPosition(Fr.x, Fr.y, Fr.z), t.setOrientation(kr.x, kr.y, kr.z, n.x, n.y, n.z);
	}
});
function Va(e) {
	se.call(this),
		(this.type = 'Audio'),
		(this.listener = e),
		(this.context = e.context),
		(this.gain = this.context.createGain()),
		this.gain.connect(e.getInput()),
		(this.autoplay = !1),
		(this.buffer = null),
		(this.detune = 0),
		(this.loop = !1),
		(this.startTime = 0),
		(this.offset = 0),
		(this.duration = void 0),
		(this.playbackRate = 1),
		(this.isPlaying = !1),
		(this.hasPlaybackControl = !0),
		(this.sourceType = 'empty'),
		(this.filters = []);
}
Va.prototype = Object.assign(Object.create(se.prototype), {
	constructor: Va,
	getOutput: function () {
		return this.gain;
	},
	setNodeSource: function (e) {
		return (
			(this.hasPlaybackControl = !1),
			(this.sourceType = 'audioNode'),
			(this.source = e),
			this.connect(),
			this
		);
	},
	setMediaElementSource: function (e) {
		return (
			(this.hasPlaybackControl = !1),
			(this.sourceType = 'mediaNode'),
			(this.source = this.context.createMediaElementSource(e)),
			this.connect(),
			this
		);
	},
	setMediaStreamSource: function (e) {
		return (
			(this.hasPlaybackControl = !1),
			(this.sourceType = 'mediaStreamNode'),
			(this.source = this.context.createMediaStreamSource(e)),
			this.connect(),
			this
		);
	},
	setBuffer: function (e) {
		return (this.buffer = e), (this.sourceType = 'buffer'), this.autoplay && this.play(), this;
	},
	play: function () {
		if (this.isPlaying === !0) {
			console.warn('THREE.Audio: Audio is already playing.');
			return;
		}
		if (this.hasPlaybackControl === !1) {
			console.warn('THREE.Audio: this Audio has no playback control.');
			return;
		}
		var e = this.context.createBufferSource();
		return (
			(e.buffer = this.buffer),
			(e.loop = this.loop),
			(e.onended = this.onEnded.bind(this)),
			(this.startTime = this.context.currentTime),
			e.start(this.startTime, this.offset, this.duration),
			(this.isPlaying = !0),
			(this.source = e),
			this.setDetune(this.detune),
			this.setPlaybackRate(this.playbackRate),
			this.connect()
		);
	},
	pause: function () {
		if (this.hasPlaybackControl === !1) {
			console.warn('THREE.Audio: this Audio has no playback control.');
			return;
		}
		return (
			this.isPlaying === !0 &&
				(this.source.stop(),
				(this.source.onended = null),
				(this.offset += (this.context.currentTime - this.startTime) * this.playbackRate),
				(this.isPlaying = !1)),
			this
		);
	},
	stop: function () {
		if (this.hasPlaybackControl === !1) {
			console.warn('THREE.Audio: this Audio has no playback control.');
			return;
		}
		return (
			this.source.stop(),
			(this.source.onended = null),
			(this.offset = 0),
			(this.isPlaying = !1),
			this
		);
	},
	connect: function () {
		if (this.filters.length > 0) {
			this.source.connect(this.filters[0]);
			for (var e = 1, t = this.filters.length; e < t; e++)
				this.filters[e - 1].connect(this.filters[e]);
			this.filters[this.filters.length - 1].connect(this.getOutput());
		} else this.source.connect(this.getOutput());
		return this;
	},
	disconnect: function () {
		if (this.filters.length > 0) {
			this.source.disconnect(this.filters[0]);
			for (var e = 1, t = this.filters.length; e < t; e++)
				this.filters[e - 1].disconnect(this.filters[e]);
			this.filters[this.filters.length - 1].disconnect(this.getOutput());
		} else this.source.disconnect(this.getOutput());
		return this;
	},
	getFilters: function () {
		return this.filters;
	},
	setFilters: function (e) {
		return (
			e || (e = []),
			this.isPlaying === !0
				? (this.disconnect(), (this.filters = e), this.connect())
				: (this.filters = e),
			this
		);
	},
	setDetune: function (e) {
		if (((this.detune = e), this.source.detune !== void 0))
			return (
				this.isPlaying === !0 &&
					this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01),
				this
			);
	},
	getDetune: function () {
		return this.detune;
	},
	getFilter: function () {
		return this.getFilters()[0];
	},
	setFilter: function (e) {
		return this.setFilters(e ? [e] : []);
	},
	setPlaybackRate: function (e) {
		if (this.hasPlaybackControl === !1) {
			console.warn('THREE.Audio: this Audio has no playback control.');
			return;
		}
		return (
			(this.playbackRate = e),
			this.isPlaying === !0 &&
				this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01),
			this
		);
	},
	getPlaybackRate: function () {
		return this.playbackRate;
	},
	onEnded: function () {
		this.isPlaying = !1;
	},
	getLoop: function () {
		return this.hasPlaybackControl === !1
			? (console.warn('THREE.Audio: this Audio has no playback control.'), !1)
			: this.loop;
	},
	setLoop: function (e) {
		if (this.hasPlaybackControl === !1) {
			console.warn('THREE.Audio: this Audio has no playback control.');
			return;
		}
		return (this.loop = e), this.isPlaying === !0 && (this.source.loop = this.loop), this;
	},
	getVolume: function () {
		return this.gain.gain.value;
	},
	setVolume: function (e) {
		return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
	}
});
var Ur = new R(),
	oc = new qt(),
	b_ = new R(),
	Br = new R();
function uc(e) {
	Va.call(this, e),
		(this.panner = this.context.createPanner()),
		(this.panner.panningModel = 'HRTF'),
		this.panner.connect(this.gain);
}
uc.prototype = Object.assign(Object.create(Va.prototype), {
	constructor: uc,
	getOutput: function () {
		return this.panner;
	},
	getRefDistance: function () {
		return this.panner.refDistance;
	},
	setRefDistance: function (e) {
		return (this.panner.refDistance = e), this;
	},
	getRolloffFactor: function () {
		return this.panner.rolloffFactor;
	},
	setRolloffFactor: function (e) {
		return (this.panner.rolloffFactor = e), this;
	},
	getDistanceModel: function () {
		return this.panner.distanceModel;
	},
	setDistanceModel: function (e) {
		return (this.panner.distanceModel = e), this;
	},
	getMaxDistance: function () {
		return this.panner.maxDistance;
	},
	setMaxDistance: function (e) {
		return (this.panner.maxDistance = e), this;
	},
	setDirectionalCone: function (e, t, n) {
		return (
			(this.panner.coneInnerAngle = e),
			(this.panner.coneOuterAngle = t),
			(this.panner.coneOuterGain = n),
			this
		);
	},
	updateMatrixWorld: function (e) {
		if (
			(se.prototype.updateMatrixWorld.call(this, e),
			!(this.hasPlaybackControl === !0 && this.isPlaying === !1))
		) {
			this.matrixWorld.decompose(Ur, oc, b_), Br.set(0, 0, 1).applyQuaternion(oc);
			var t = this.panner;
			if (t.positionX) {
				var n = this.context.currentTime + this.listener.timeDelta;
				t.positionX.linearRampToValueAtTime(Ur.x, n),
					t.positionY.linearRampToValueAtTime(Ur.y, n),
					t.positionZ.linearRampToValueAtTime(Ur.z, n),
					t.orientationX.linearRampToValueAtTime(Br.x, n),
					t.orientationY.linearRampToValueAtTime(Br.y, n),
					t.orientationZ.linearRampToValueAtTime(Br.z, n);
			} else t.setPosition(Ur.x, Ur.y, Ur.z), t.setOrientation(Br.x, Br.y, Br.z);
		}
	}
});
function Sh(e, t) {
	(this.analyser = e.context.createAnalyser()),
		(this.analyser.fftSize = t !== void 0 ? t : 2048),
		(this.data = new Uint8Array(this.analyser.frequencyBinCount)),
		e.getOutput().connect(this.analyser);
}
Object.assign(Sh.prototype, {
	getFrequencyData: function () {
		return this.analyser.getByteFrequencyData(this.data), this.data;
	},
	getAverageFrequency: function () {
		for (var e = 0, t = this.getFrequencyData(), n = 0; n < t.length; n++) e += t[n];
		return e / t.length;
	}
});
function Lh(e, t, n) {
	(this.binding = e), (this.valueSize = n);
	var r = Float64Array,
		i;
	switch (t) {
		case 'quaternion':
			i = this._slerp;
			break;
		case 'string':
		case 'bool':
			(r = Array), (i = this._select);
			break;
		default:
			i = this._lerp;
	}
	(this.buffer = new r(n * 4)),
		(this._mixBufferRegion = i),
		(this.cumulativeWeight = 0),
		(this.useCount = 0),
		(this.referenceCount = 0);
}
Object.assign(Lh.prototype, {
	accumulate: function (e, t) {
		var n = this.buffer,
			r = this.valueSize,
			i = e * r + r,
			a = this.cumulativeWeight;
		if (a === 0) {
			for (var s = 0; s !== r; ++s) n[i + s] = n[s];
			a = t;
		} else {
			a += t;
			var o = t / a;
			this._mixBufferRegion(n, i, 0, o, r);
		}
		this.cumulativeWeight = a;
	},
	apply: function (e) {
		var t = this.valueSize,
			n = this.buffer,
			r = e * t + t,
			i = this.cumulativeWeight,
			a = this.binding;
		if (((this.cumulativeWeight = 0), i < 1)) {
			var s = t * 3;
			this._mixBufferRegion(n, r, s, 1 - i, t);
		}
		for (var o = t, u = t + t; o !== u; ++o)
			if (n[o] !== n[o + t]) {
				a.setValue(n, r);
				break;
			}
	},
	saveOriginalState: function () {
		var e = this.binding,
			t = this.buffer,
			n = this.valueSize,
			r = n * 3;
		e.getValue(t, r);
		for (var i = n, a = r; i !== a; ++i) t[i] = t[r + (i % n)];
		this.cumulativeWeight = 0;
	},
	restoreOriginalState: function () {
		var e = this.valueSize * 3;
		this.binding.setValue(this.buffer, e);
	},
	_select: function (e, t, n, r, i) {
		if (r >= 0.5) for (var a = 0; a !== i; ++a) e[t + a] = e[n + a];
	},
	_slerp: function (e, t, n, r) {
		qt.slerpFlat(e, t, e, t, e, n, r);
	},
	_lerp: function (e, t, n, r, i) {
		for (var a = 1 - r, s = 0; s !== i; ++s) {
			var o = t + s;
			e[o] = e[o] * a + e[n + s] * r;
		}
	}
});
var Vl = '\\[\\]\\.:\\/',
	y_ = new RegExp('[' + Vl + ']', 'g'),
	Hl = '[^' + Vl + ']',
	w_ = '[^' + Vl.replace('\\.', '') + ']',
	M_ = /((?:WC+[\/:])*)/.source.replace('WC', Hl),
	E_ = /(WCOD+)?/.source.replace('WCOD', w_),
	S_ = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace('WC', Hl),
	L_ = /\.(WC+)(?:\[(.+)\])?/.source.replace('WC', Hl),
	T_ = new RegExp('^' + M_ + E_ + S_ + L_ + '$'),
	A_ = ['material', 'materials', 'bones'];
function Th(e, t, n) {
	var r = n || Ht.parseTrackName(t);
	(this._targetGroup = e), (this._bindings = e.subscribe_(t, r));
}
Object.assign(Th.prototype, {
	getValue: function (e, t) {
		this.bind();
		var n = this._targetGroup.nCachedObjects_,
			r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	},
	setValue: function (e, t) {
		for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)
			n[r].setValue(e, t);
	},
	bind: function () {
		for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
			e[t].bind();
	},
	unbind: function () {
		for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
			e[t].unbind();
	}
});
function Ht(e, t, n) {
	(this.path = t),
		(this.parsedPath = n || Ht.parseTrackName(t)),
		(this.node = Ht.findNode(e, this.parsedPath.nodeName) || e),
		(this.rootNode = e);
}
Object.assign(Ht, {
	Composite: Th,
	create: function (e, t, n) {
		return e && e.isAnimationObjectGroup ? new Ht.Composite(e, t, n) : new Ht(e, t, n);
	},
	sanitizeNodeName: function (e) {
		return e.replace(/\s/g, '_').replace(y_, '');
	},
	parseTrackName: function (e) {
		var t = T_.exec(e);
		if (!t) throw new Error('PropertyBinding: Cannot parse trackName: ' + e);
		var n = {
				nodeName: t[2],
				objectName: t[3],
				objectIndex: t[4],
				propertyName: t[5],
				propertyIndex: t[6]
			},
			r = n.nodeName && n.nodeName.lastIndexOf('.');
		if (r !== void 0 && r !== -1) {
			var i = n.nodeName.substring(r + 1);
			A_.indexOf(i) !== -1 && ((n.nodeName = n.nodeName.substring(0, r)), (n.objectName = i));
		}
		if (n.propertyName === null || n.propertyName.length === 0)
			throw new Error('PropertyBinding: can not parse propertyName from trackName: ' + e);
		return n;
	},
	findNode: function (e, t) {
		if (!t || t === '' || t === 'root' || t === '.' || t === -1 || t === e.name || t === e.uuid)
			return e;
		if (e.skeleton) {
			var n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			var r = function (a) {
					for (var s = 0; s < a.length; s++) {
						var o = a[s];
						if (o.name === t || o.uuid === t) return o;
						var u = r(o.children);
						if (u) return u;
					}
					return null;
				},
				i = r(e.children);
			if (i) return i;
		}
		return null;
	}
});
Object.assign(Ht.prototype, {
	_getValue_unavailable: function () {},
	_setValue_unavailable: function () {},
	BindingType: { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 },
	Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
	GetterByBindingType: [
		function (t, n) {
			t[n] = this.node[this.propertyName];
		},
		function (t, n) {
			for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i) t[n++] = r[i];
		},
		function (t, n) {
			t[n] = this.resolvedProperty[this.propertyIndex];
		},
		function (t, n) {
			this.resolvedProperty.toArray(t, n);
		}
	],
	SetterByBindingTypeAndVersioning: [
		[
			function (t, n) {
				this.targetObject[this.propertyName] = t[n];
			},
			function (t, n) {
				(this.targetObject[this.propertyName] = t[n]), (this.targetObject.needsUpdate = !0);
			},
			function (t, n) {
				(this.targetObject[this.propertyName] = t[n]),
					(this.targetObject.matrixWorldNeedsUpdate = !0);
			}
		],
		[
			function (t, n) {
				for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i) r[i] = t[n++];
			},
			function (t, n) {
				for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i) r[i] = t[n++];
				this.targetObject.needsUpdate = !0;
			},
			function (t, n) {
				for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i) r[i] = t[n++];
				this.targetObject.matrixWorldNeedsUpdate = !0;
			}
		],
		[
			function (t, n) {
				this.resolvedProperty[this.propertyIndex] = t[n];
			},
			function (t, n) {
				(this.resolvedProperty[this.propertyIndex] = t[n]), (this.targetObject.needsUpdate = !0);
			},
			function (t, n) {
				(this.resolvedProperty[this.propertyIndex] = t[n]),
					(this.targetObject.matrixWorldNeedsUpdate = !0);
			}
		],
		[
			function (t, n) {
				this.resolvedProperty.fromArray(t, n);
			},
			function (t, n) {
				this.resolvedProperty.fromArray(t, n), (this.targetObject.needsUpdate = !0);
			},
			function (t, n) {
				this.resolvedProperty.fromArray(t, n), (this.targetObject.matrixWorldNeedsUpdate = !0);
			}
		]
	],
	getValue: function (t, n) {
		this.bind(), this.getValue(t, n);
	},
	setValue: function (t, n) {
		this.bind(), this.setValue(t, n);
	},
	bind: function () {
		var e = this.node,
			t = this.parsedPath,
			n = t.objectName,
			r = t.propertyName,
			i = t.propertyIndex;
		if (
			(e || ((e = Ht.findNode(this.rootNode, t.nodeName) || this.rootNode), (this.node = e)),
			(this.getValue = this._getValue_unavailable),
			(this.setValue = this._setValue_unavailable),
			!e)
		) {
			console.error(
				'THREE.PropertyBinding: Trying to update node for track: ' +
					this.path +
					" but it wasn't found."
			);
			return;
		}
		if (n) {
			var a = t.objectIndex;
			switch (n) {
				case 'materials':
					if (!e.material) {
						console.error(
							'THREE.PropertyBinding: Can not bind to material as node does not have a material.',
							this
						);
						return;
					}
					if (!e.material.materials) {
						console.error(
							'THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.',
							this
						);
						return;
					}
					e = e.material.materials;
					break;
				case 'bones':
					if (!e.skeleton) {
						console.error(
							'THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.',
							this
						);
						return;
					}
					e = e.skeleton.bones;
					for (var s = 0; s < e.length; s++)
						if (e[s].name === a) {
							a = s;
							break;
						}
					break;
				default:
					if (e[n] === void 0) {
						console.error(
							'THREE.PropertyBinding: Can not bind to objectName of node undefined.',
							this
						);
						return;
					}
					e = e[n];
			}
			if (a !== void 0) {
				if (e[a] === void 0) {
					console.error(
						'THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.',
						this,
						e
					);
					return;
				}
				e = e[a];
			}
		}
		var o = e[r];
		if (o === void 0) {
			var u = t.nodeName;
			console.error(
				'THREE.PropertyBinding: Trying to update property for track: ' +
					u +
					'.' +
					r +
					" but it wasn't found.",
				e
			);
			return;
		}
		var l = this.Versioning.None;
		(this.targetObject = e),
			e.needsUpdate !== void 0
				? (l = this.Versioning.NeedsUpdate)
				: e.matrixWorldNeedsUpdate !== void 0 && (l = this.Versioning.MatrixWorldNeedsUpdate);
		var f = this.BindingType.Direct;
		if (i !== void 0) {
			if (r === 'morphTargetInfluences') {
				if (!e.geometry) {
					console.error(
						'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.',
						this
					);
					return;
				}
				if (e.geometry.isBufferGeometry) {
					if (!e.geometry.morphAttributes) {
						console.error(
							'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.',
							this
						);
						return;
					}
					for (var s = 0; s < this.node.geometry.morphAttributes.position.length; s++)
						if (e.geometry.morphAttributes.position[s].name === i) {
							i = s;
							break;
						}
				} else {
					if (!e.geometry.morphTargets) {
						console.error(
							'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.',
							this
						);
						return;
					}
					for (var s = 0; s < this.node.geometry.morphTargets.length; s++)
						if (e.geometry.morphTargets[s].name === i) {
							i = s;
							break;
						}
				}
			}
			(f = this.BindingType.ArrayElement), (this.resolvedProperty = o), (this.propertyIndex = i);
		} else
			o.fromArray !== void 0 && o.toArray !== void 0
				? ((f = this.BindingType.HasFromToArray), (this.resolvedProperty = o))
				: Array.isArray(o)
					? ((f = this.BindingType.EntireArray), (this.resolvedProperty = o))
					: (this.propertyName = r);
		(this.getValue = this.GetterByBindingType[f]),
			(this.setValue = this.SetterByBindingTypeAndVersioning[f][l]);
	},
	unbind: function () {
		(this.node = null),
			(this.getValue = this._getValue_unbound),
			(this.setValue = this._setValue_unbound);
	}
}); //!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(Ht.prototype, {
	_getValue_unbound: Ht.prototype.getValue,
	_setValue_unbound: Ht.prototype.setValue
});
function R_() {
	(this.uuid = Ue.generateUUID()),
		(this._objects = Array.prototype.slice.call(arguments)),
		(this.nCachedObjects_ = 0);
	var e = {};
	this._indicesByUUID = e;
	for (var t = 0, n = arguments.length; t !== n; ++t) e[arguments[t].uuid] = t;
	(this._paths = []),
		(this._parsedPaths = []),
		(this._bindings = []),
		(this._bindingsIndicesByPath = {});
	var r = this;
	this.stats = {
		objects: {
			get total() {
				return r._objects.length;
			},
			get inUse() {
				return this.total - r.nCachedObjects_;
			}
		},
		get bindingsPerObject() {
			return r._bindings.length;
		}
	};
}
Object.assign(R_.prototype, {
	isAnimationObjectGroup: !0,
	add: function () {
		for (
			var e = this._objects,
				t = e.length,
				n = this.nCachedObjects_,
				r = this._indicesByUUID,
				i = this._paths,
				a = this._parsedPaths,
				s = this._bindings,
				o = s.length,
				u = void 0,
				l = 0,
				f = arguments.length;
			l !== f;
			++l
		) {
			var c = arguments[l],
				h = c.uuid,
				p = r[h];
			if (p === void 0) {
				(p = t++), (r[h] = p), e.push(c);
				for (var d = 0, m = o; d !== m; ++d) s[d].push(new Ht(c, i[d], a[d]));
			} else if (p < n) {
				u = e[p];
				var v = --n,
					g = e[v];
				(r[g.uuid] = p), (e[p] = g), (r[h] = v), (e[v] = c);
				for (var d = 0, m = o; d !== m; ++d) {
					var x = s[d],
						M = x[v],
						_ = x[p];
					(x[p] = M), _ === void 0 && (_ = new Ht(c, i[d], a[d])), (x[v] = _);
				}
			} else
				e[p] !== u &&
					console.error(
						'THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.'
					);
		}
		this.nCachedObjects_ = n;
	},
	remove: function () {
		for (
			var e = this._objects,
				t = this.nCachedObjects_,
				n = this._indicesByUUID,
				r = this._bindings,
				i = r.length,
				a = 0,
				s = arguments.length;
			a !== s;
			++a
		) {
			var o = arguments[a],
				u = o.uuid,
				l = n[u];
			if (l !== void 0 && l >= t) {
				var f = t++,
					c = e[f];
				(n[c.uuid] = l), (e[l] = c), (n[u] = f), (e[f] = o);
				for (var h = 0, p = i; h !== p; ++h) {
					var d = r[h],
						m = d[f],
						v = d[l];
					(d[l] = m), (d[f] = v);
				}
			}
		}
		this.nCachedObjects_ = t;
	},
	uncache: function () {
		for (
			var e = this._objects,
				t = e.length,
				n = this.nCachedObjects_,
				r = this._indicesByUUID,
				i = this._bindings,
				a = i.length,
				s = 0,
				o = arguments.length;
			s !== o;
			++s
		) {
			var u = arguments[s],
				l = u.uuid,
				f = r[l];
			if (f !== void 0)
				if ((delete r[l], f < n)) {
					var c = --n,
						h = e[c],
						p = --t,
						d = e[p];
					(r[h.uuid] = f), (e[f] = h), (r[d.uuid] = c), (e[c] = d), e.pop();
					for (var m = 0, v = a; m !== v; ++m) {
						var g = i[m],
							x = g[c],
							M = g[p];
						(g[f] = x), (g[c] = M), g.pop();
					}
				} else {
					var p = --t,
						d = e[p];
					(r[d.uuid] = f), (e[f] = d), e.pop();
					for (var m = 0, v = a; m !== v; ++m) {
						var g = i[m];
						(g[f] = g[p]), g.pop();
					}
				}
		}
		this.nCachedObjects_ = n;
	},
	subscribe_: function (e, t) {
		var n = this._bindingsIndicesByPath,
			r = n[e],
			i = this._bindings;
		if (r !== void 0) return i[r];
		var a = this._paths,
			s = this._parsedPaths,
			o = this._objects,
			u = o.length,
			l = this.nCachedObjects_,
			f = new Array(u);
		(r = i.length), (n[e] = r), a.push(e), s.push(t), i.push(f);
		for (var c = l, h = o.length; c !== h; ++c) {
			var p = o[c];
			f[c] = new Ht(p, e, t);
		}
		return f;
	},
	unsubscribe_: function (e) {
		var t = this._bindingsIndicesByPath,
			n = t[e];
		if (n !== void 0) {
			var r = this._paths,
				i = this._parsedPaths,
				a = this._bindings,
				s = a.length - 1,
				o = a[s],
				u = e[s];
			(t[u] = n), (a[n] = o), a.pop(), (i[n] = i[s]), i.pop(), (r[n] = r[s]), r.pop();
		}
	}
});
function Ah(e, t, n) {
	(this._mixer = e), (this._clip = t), (this._localRoot = n || null);
	for (
		var r = t.tracks, i = r.length, a = new Array(i), s = { endingStart: Ti, endingEnd: Ti }, o = 0;
		o !== i;
		++o
	) {
		var u = r[o].createInterpolant(null);
		(a[o] = u), (u.settings = s);
	}
	(this._interpolantSettings = s),
		(this._interpolants = a),
		(this._propertyBindings = new Array(i)),
		(this._cacheIndex = null),
		(this._byClipCacheIndex = null),
		(this._timeScaleInterpolant = null),
		(this._weightInterpolant = null),
		(this.loop = Tp),
		(this._loopCount = -1),
		(this._startTime = null),
		(this.time = 0),
		(this.timeScale = 1),
		(this._effectiveTimeScale = 1),
		(this.weight = 1),
		(this._effectiveWeight = 1),
		(this.repetitions = 1 / 0),
		(this.paused = !1),
		(this.enabled = !0),
		(this.clampWhenFinished = !1),
		(this.zeroSlopeAtStart = !0),
		(this.zeroSlopeAtEnd = !0);
}
Object.assign(Ah.prototype, {
	play: function () {
		return this._mixer._activateAction(this), this;
	},
	stop: function () {
		return this._mixer._deactivateAction(this), this.reset();
	},
	reset: function () {
		return (
			(this.paused = !1),
			(this.enabled = !0),
			(this.time = 0),
			(this._loopCount = -1),
			(this._startTime = null),
			this.stopFading().stopWarping()
		);
	},
	isRunning: function () {
		return (
			this.enabled &&
			!this.paused &&
			this.timeScale !== 0 &&
			this._startTime === null &&
			this._mixer._isActiveAction(this)
		);
	},
	isScheduled: function () {
		return this._mixer._isActiveAction(this);
	},
	startAt: function (e) {
		return (this._startTime = e), this;
	},
	setLoop: function (e, t) {
		return (this.loop = e), (this.repetitions = t), this;
	},
	setEffectiveWeight: function (e) {
		return (this.weight = e), (this._effectiveWeight = this.enabled ? e : 0), this.stopFading();
	},
	getEffectiveWeight: function () {
		return this._effectiveWeight;
	},
	fadeIn: function (e) {
		return this._scheduleFading(e, 0, 1);
	},
	fadeOut: function (e) {
		return this._scheduleFading(e, 1, 0);
	},
	crossFadeFrom: function (e, t, n) {
		if ((e.fadeOut(t), this.fadeIn(t), n)) {
			var r = this._clip.duration,
				i = e._clip.duration,
				a = i / r,
				s = r / i;
			e.warp(1, a, t), this.warp(s, 1, t);
		}
		return this;
	},
	crossFadeTo: function (e, t, n) {
		return e.crossFadeFrom(this, t, n);
	},
	stopFading: function () {
		var e = this._weightInterpolant;
		return (
			e !== null && ((this._weightInterpolant = null), this._mixer._takeBackControlInterpolant(e)),
			this
		);
	},
	setEffectiveTimeScale: function (e) {
		return (
			(this.timeScale = e), (this._effectiveTimeScale = this.paused ? 0 : e), this.stopWarping()
		);
	},
	getEffectiveTimeScale: function () {
		return this._effectiveTimeScale;
	},
	setDuration: function (e) {
		return (this.timeScale = this._clip.duration / e), this.stopWarping();
	},
	syncWith: function (e) {
		return (this.time = e.time), (this.timeScale = e.timeScale), this.stopWarping();
	},
	halt: function (e) {
		return this.warp(this._effectiveTimeScale, 0, e);
	},
	warp: function (e, t, n) {
		var r = this._mixer,
			i = r.time,
			a = this._timeScaleInterpolant,
			s = this.timeScale;
		a === null && ((a = r._lendControlInterpolant()), (this._timeScaleInterpolant = a));
		var o = a.parameterPositions,
			u = a.sampleValues;
		return (o[0] = i), (o[1] = i + n), (u[0] = e / s), (u[1] = t / s), this;
	},
	stopWarping: function () {
		var e = this._timeScaleInterpolant;
		return (
			e !== null &&
				((this._timeScaleInterpolant = null), this._mixer._takeBackControlInterpolant(e)),
			this
		);
	},
	getMixer: function () {
		return this._mixer;
	},
	getClip: function () {
		return this._clip;
	},
	getRoot: function () {
		return this._localRoot || this._mixer._root;
	},
	_update: function (e, t, n, r) {
		if (!this.enabled) {
			this._updateWeight(e);
			return;
		}
		var i = this._startTime;
		if (i !== null) {
			var a = (e - i) * n;
			if (a < 0 || n === 0) return;
			(this._startTime = null), (t = n * a);
		}
		t *= this._updateTimeScale(e);
		var s = this._updateTime(t),
			o = this._updateWeight(e);
		if (o > 0)
			for (
				var u = this._interpolants, l = this._propertyBindings, f = 0, c = u.length;
				f !== c;
				++f
			)
				u[f].evaluate(s), l[f].accumulate(r, o);
	},
	_updateWeight: function (e) {
		var t = 0;
		if (this.enabled) {
			t = this.weight;
			var n = this._weightInterpolant;
			if (n !== null) {
				var r = n.evaluate(e)[0];
				(t *= r),
					e > n.parameterPositions[1] && (this.stopFading(), r === 0 && (this.enabled = !1));
			}
		}
		return (this._effectiveWeight = t), t;
	},
	_updateTimeScale: function (e) {
		var t = 0;
		if (!this.paused) {
			t = this.timeScale;
			var n = this._timeScaleInterpolant;
			if (n !== null) {
				var r = n.evaluate(e)[0];
				(t *= r),
					e > n.parameterPositions[1] &&
						(this.stopWarping(), t === 0 ? (this.paused = !0) : (this.timeScale = t));
			}
		}
		return (this._effectiveTimeScale = t), t;
	},
	_updateTime: function (e) {
		var t = this.time + e,
			n = this._clip.duration,
			r = this.loop,
			i = this._loopCount,
			a = r === Ap;
		if (e === 0) return i === -1 ? t : a && (i & 1) === 1 ? n - t : t;
		if (r === Lp) {
			i === -1 && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
			e: {
				if (t >= n) t = n;
				else if (t < 0) t = 0;
				else {
					this.time = t;
					break e;
				}
				this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
					(this.time = t),
					this._mixer.dispatchEvent({ type: 'finished', action: this, direction: e < 0 ? -1 : 1 });
			}
		} else {
			if (
				(i === -1 &&
					(e >= 0
						? ((i = 0), this._setEndings(!0, this.repetitions === 0, a))
						: this._setEndings(this.repetitions === 0, !0, a)),
				t >= n || t < 0)
			) {
				var s = Math.floor(t / n);
				(t -= n * s), (i += Math.abs(s));
				var o = this.repetitions - i;
				if (o <= 0)
					this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
						(t = e > 0 ? n : 0),
						(this.time = t),
						this._mixer.dispatchEvent({
							type: 'finished',
							action: this,
							direction: e > 0 ? 1 : -1
						});
				else {
					if (o === 1) {
						var u = e < 0;
						this._setEndings(u, !u, a);
					} else this._setEndings(!1, !1, a);
					(this._loopCount = i),
						(this.time = t),
						this._mixer.dispatchEvent({ type: 'loop', action: this, loopDelta: s });
				}
			} else this.time = t;
			if (a && (i & 1) === 1) return n - t;
		}
		return t;
	},
	_setEndings: function (e, t, n) {
		var r = this._interpolantSettings;
		n
			? ((r.endingStart = _i), (r.endingEnd = _i))
			: (e ? (r.endingStart = this.zeroSlopeAtStart ? _i : Ti) : (r.endingStart = js),
				t ? (r.endingEnd = this.zeroSlopeAtEnd ? _i : Ti) : (r.endingEnd = js));
	},
	_scheduleFading: function (e, t, n) {
		var r = this._mixer,
			i = r.time,
			a = this._weightInterpolant;
		a === null && ((a = r._lendControlInterpolant()), (this._weightInterpolant = a));
		var s = a.parameterPositions,
			o = a.sampleValues;
		return (s[0] = i), (o[0] = t), (s[1] = i + e), (o[1] = n), this;
	}
});
function lc(e) {
	(this._root = e),
		this._initMemoryManager(),
		(this._accuIndex = 0),
		(this.time = 0),
		(this.timeScale = 1);
}
lc.prototype = Object.assign(Object.create(Vn.prototype), {
	constructor: lc,
	_bindAction: function (e, t) {
		var n = e._localRoot || this._root,
			r = e._clip.tracks,
			i = r.length,
			a = e._propertyBindings,
			s = e._interpolants,
			o = n.uuid,
			u = this._bindingsByRootAndName,
			l = u[o];
		l === void 0 && ((l = {}), (u[o] = l));
		for (var f = 0; f !== i; ++f) {
			var c = r[f],
				h = c.name,
				p = l[h];
			if (p !== void 0) a[f] = p;
			else {
				if (((p = a[f]), p !== void 0)) {
					p._cacheIndex === null && (++p.referenceCount, this._addInactiveBinding(p, o, h));
					continue;
				}
				var d = t && t._propertyBindings[f].binding.parsedPath;
				(p = new Lh(Ht.create(n, h, d), c.ValueTypeName, c.getValueSize())),
					++p.referenceCount,
					this._addInactiveBinding(p, o, h),
					(a[f] = p);
			}
			s[f].resultBuffer = p.buffer;
		}
	},
	_activateAction: function (e) {
		if (!this._isActiveAction(e)) {
			if (e._cacheIndex === null) {
				var t = (e._localRoot || this._root).uuid,
					n = e._clip.uuid,
					r = this._actionsByClip[n];
				this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, n, t);
			}
			for (var i = e._propertyBindings, a = 0, s = i.length; a !== s; ++a) {
				var o = i[a];
				o.useCount++ === 0 && (this._lendBinding(o), o.saveOriginalState());
			}
			this._lendAction(e);
		}
	},
	_deactivateAction: function (e) {
		if (this._isActiveAction(e)) {
			for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
				var i = t[n];
				--i.useCount === 0 && (i.restoreOriginalState(), this._takeBackBinding(i));
			}
			this._takeBackAction(e);
		}
	},
	_initMemoryManager: function () {
		(this._actions = []),
			(this._nActiveActions = 0),
			(this._actionsByClip = {}),
			(this._bindings = []),
			(this._nActiveBindings = 0),
			(this._bindingsByRootAndName = {}),
			(this._controlInterpolants = []),
			(this._nActiveControlInterpolants = 0);
		var e = this;
		this.stats = {
			actions: {
				get total() {
					return e._actions.length;
				},
				get inUse() {
					return e._nActiveActions;
				}
			},
			bindings: {
				get total() {
					return e._bindings.length;
				},
				get inUse() {
					return e._nActiveBindings;
				}
			},
			controlInterpolants: {
				get total() {
					return e._controlInterpolants.length;
				},
				get inUse() {
					return e._nActiveControlInterpolants;
				}
			}
		};
	},
	_isActiveAction: function (e) {
		var t = e._cacheIndex;
		return t !== null && t < this._nActiveActions;
	},
	_addInactiveAction: function (e, t, n) {
		var r = this._actions,
			i = this._actionsByClip,
			a = i[t];
		if (a === void 0)
			(a = { knownActions: [e], actionByRoot: {} }), (e._byClipCacheIndex = 0), (i[t] = a);
		else {
			var s = a.knownActions;
			(e._byClipCacheIndex = s.length), s.push(e);
		}
		(e._cacheIndex = r.length), r.push(e), (a.actionByRoot[n] = e);
	},
	_removeInactiveAction: function (e) {
		var t = this._actions,
			n = t[t.length - 1],
			r = e._cacheIndex;
		(n._cacheIndex = r), (t[r] = n), t.pop(), (e._cacheIndex = null);
		var i = e._clip.uuid,
			a = this._actionsByClip,
			s = a[i],
			o = s.knownActions,
			u = o[o.length - 1],
			l = e._byClipCacheIndex;
		(u._byClipCacheIndex = l), (o[l] = u), o.pop(), (e._byClipCacheIndex = null);
		var f = s.actionByRoot,
			c = (e._localRoot || this._root).uuid;
		delete f[c], o.length === 0 && delete a[i], this._removeInactiveBindingsForAction(e);
	},
	_removeInactiveBindingsForAction: function (e) {
		for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
			var i = t[n];
			--i.referenceCount === 0 && this._removeInactiveBinding(i);
		}
	},
	_lendAction: function (e) {
		var t = this._actions,
			n = e._cacheIndex,
			r = this._nActiveActions++,
			i = t[r];
		(e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i);
	},
	_takeBackAction: function (e) {
		var t = this._actions,
			n = e._cacheIndex,
			r = --this._nActiveActions,
			i = t[r];
		(e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i);
	},
	_addInactiveBinding: function (e, t, n) {
		var r = this._bindingsByRootAndName,
			i = r[t],
			a = this._bindings;
		i === void 0 && ((i = {}), (r[t] = i)), (i[n] = e), (e._cacheIndex = a.length), a.push(e);
	},
	_removeInactiveBinding: function (e) {
		var t = this._bindings,
			n = e.binding,
			r = n.rootNode.uuid,
			i = n.path,
			a = this._bindingsByRootAndName,
			s = a[r],
			o = t[t.length - 1],
			u = e._cacheIndex;
		(o._cacheIndex = u),
			(t[u] = o),
			t.pop(),
			delete s[i],
			Object.keys(s).length === 0 && delete a[r];
	},
	_lendBinding: function (e) {
		var t = this._bindings,
			n = e._cacheIndex,
			r = this._nActiveBindings++,
			i = t[r];
		(e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i);
	},
	_takeBackBinding: function (e) {
		var t = this._bindings,
			n = e._cacheIndex,
			r = --this._nActiveBindings,
			i = t[r];
		(e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i);
	},
	_lendControlInterpolant: function () {
		var e = this._controlInterpolants,
			t = this._nActiveControlInterpolants++,
			n = e[t];
		return (
			n === void 0 &&
				((n = new bo(
					new Float32Array(2),
					new Float32Array(2),
					1,
					this._controlInterpolantsResultBuffer
				)),
				(n.__cacheIndex = t),
				(e[t] = n)),
			n
		);
	},
	_takeBackControlInterpolant: function (e) {
		var t = this._controlInterpolants,
			n = e.__cacheIndex,
			r = --this._nActiveControlInterpolants,
			i = t[r];
		(e.__cacheIndex = r), (t[r] = e), (i.__cacheIndex = n), (t[n] = i);
	},
	_controlInterpolantsResultBuffer: new Float32Array(1),
	clipAction: function (e, t) {
		var n = t || this._root,
			r = n.uuid,
			i = typeof e == 'string' ? bn.findByName(n, e) : e,
			a = i !== null ? i.uuid : e,
			s = this._actionsByClip[a],
			o = null;
		if (s !== void 0) {
			var u = s.actionByRoot[r];
			if (u !== void 0) return u;
			(o = s.knownActions[0]), i === null && (i = o._clip);
		}
		if (i === null) return null;
		var l = new Ah(this, i, t);
		return this._bindAction(l, o), this._addInactiveAction(l, a, r), l;
	},
	existingAction: function (e, t) {
		var n = t || this._root,
			r = n.uuid,
			i = typeof e == 'string' ? bn.findByName(n, e) : e,
			a = i ? i.uuid : e,
			s = this._actionsByClip[a];
		return (s !== void 0 && s.actionByRoot[r]) || null;
	},
	stopAllAction: function () {
		var e = this._actions,
			t = this._nActiveActions,
			n = this._bindings,
			r = this._nActiveBindings;
		(this._nActiveActions = 0), (this._nActiveBindings = 0);
		for (var i = 0; i !== t; ++i) e[i].reset();
		for (var i = 0; i !== r; ++i) n[i].useCount = 0;
		return this;
	},
	update: function (e) {
		e *= this.timeScale;
		for (
			var t = this._actions,
				n = this._nActiveActions,
				r = (this.time += e),
				i = Math.sign(e),
				a = (this._accuIndex ^= 1),
				s = 0;
			s !== n;
			++s
		) {
			var o = t[s];
			o._update(r, e, i, a);
		}
		for (var u = this._bindings, l = this._nActiveBindings, s = 0; s !== l; ++s) u[s].apply(a);
		return this;
	},
	setTime: function (e) {
		this.time = 0;
		for (var t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
		return this.update(e);
	},
	getRoot: function () {
		return this._root;
	},
	uncacheClip: function (e) {
		var t = this._actions,
			n = e.uuid,
			r = this._actionsByClip,
			i = r[n];
		if (i !== void 0) {
			for (var a = i.knownActions, s = 0, o = a.length; s !== o; ++s) {
				var u = a[s];
				this._deactivateAction(u);
				var l = u._cacheIndex,
					f = t[t.length - 1];
				(u._cacheIndex = null),
					(u._byClipCacheIndex = null),
					(f._cacheIndex = l),
					(t[l] = f),
					t.pop(),
					this._removeInactiveBindingsForAction(u);
			}
			delete r[n];
		}
	},
	uncacheRoot: function (e) {
		var t = e.uuid,
			n = this._actionsByClip;
		for (var r in n) {
			var i = n[r].actionByRoot,
				a = i[t];
			a !== void 0 && (this._deactivateAction(a), this._removeInactiveAction(a));
		}
		var s = this._bindingsByRootAndName,
			o = s[t];
		if (o !== void 0)
			for (var u in o) {
				var l = o[u];
				l.restoreOriginalState(), this._removeInactiveBinding(l);
			}
	},
	uncacheAction: function (e, t) {
		var n = this.existingAction(e, t);
		n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
	}
});
function ml(e) {
	typeof e == 'string' &&
		(console.warn('THREE.Uniform: Type parameter is no longer needed.'), (e = arguments[1])),
		(this.value = e);
}
ml.prototype.clone = function () {
	return new ml(this.value.clone === void 0 ? this.value : this.value.clone());
};
function fc(e, t, n) {
	Zr.call(this, e, t), (this.meshPerAttribute = n || 1);
}
fc.prototype = Object.assign(Object.create(Zr.prototype), {
	constructor: fc,
	isInstancedInterleavedBuffer: !0,
	copy: function (e) {
		return Zr.prototype.copy.call(this, e), (this.meshPerAttribute = e.meshPerAttribute), this;
	}
});
function C_(e, t, n, r) {
	(this.ray = new Ki(e, t)),
		(this.near = n || 0),
		(this.far = r || 1 / 0),
		(this.camera = null),
		(this.params = { Mesh: {}, Line: {}, LOD: {}, Points: { threshold: 1 }, Sprite: {} }),
		Object.defineProperties(this.params, {
			PointCloud: {
				get: function () {
					return (
						console.warn('THREE.Raycaster: params.PointCloud has been renamed to params.Points.'),
						this.Points
					);
				}
			}
		});
}
function cc(e, t) {
	return e.distance - t.distance;
}
function gl(e, t, n, r) {
	if (e.visible !== !1 && (e.raycast(t, n), r === !0))
		for (var i = e.children, a = 0, s = i.length; a < s; a++) gl(i[a], t, n, !0);
}
Object.assign(C_.prototype, {
	linePrecision: 1,
	set: function (e, t) {
		this.ray.set(e, t);
	},
	setFromCamera: function (e, t) {
		t && t.isPerspectiveCamera
			? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
				this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(),
				(this.camera = t))
			: t && t.isOrthographicCamera
				? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t),
					this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
					(this.camera = t))
				: console.error('THREE.Raycaster: Unsupported camera type.');
	},
	intersectObject: function (e, t, n) {
		var r = n || [];
		return gl(e, this, r, t), r.sort(cc), r;
	},
	intersectObjects: function (e, t, n) {
		var r = n || [];
		if (Array.isArray(e) === !1)
			return console.warn('THREE.Raycaster.intersectObjects: objects is not an Array.'), r;
		for (var i = 0, a = e.length; i < a; i++) gl(e[i], this, r, t);
		return r.sort(cc), r;
	}
});
function P_(e, t, n) {
	return (
		(this.radius = e !== void 0 ? e : 1),
		(this.phi = t !== void 0 ? t : 0),
		(this.theta = n !== void 0 ? n : 0),
		this
	);
}
Object.assign(P_.prototype, {
	set: function (e, t, n) {
		return (this.radius = e), (this.phi = t), (this.theta = n), this;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this;
	},
	makeSafe: function () {
		var e = 1e-6;
		return (this.phi = Math.max(e, Math.min(Math.PI - e, this.phi))), this;
	},
	setFromVector3: function (e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	},
	setFromCartesianCoords: function (e, t, n) {
		return (
			(this.radius = Math.sqrt(e * e + t * t + n * n)),
			this.radius === 0
				? ((this.theta = 0), (this.phi = 0))
				: ((this.theta = Math.atan2(e, n)),
					(this.phi = Math.acos(Ue.clamp(t / this.radius, -1, 1)))),
			this
		);
	}
});
function I_(e, t, n) {
	return (
		(this.radius = e !== void 0 ? e : 1),
		(this.theta = t !== void 0 ? t : 0),
		(this.y = n !== void 0 ? n : 0),
		this
	);
}
Object.assign(I_.prototype, {
	set: function (e, t, n) {
		return (this.radius = e), (this.theta = t), (this.y = n), this;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return (this.radius = e.radius), (this.theta = e.theta), (this.y = e.y), this;
	},
	setFromVector3: function (e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	},
	setFromCartesianCoords: function (e, t, n) {
		return (
			(this.radius = Math.sqrt(e * e + n * n)), (this.theta = Math.atan2(e, n)), (this.y = t), this
		);
	}
});
var hc = new W();
function Rh(e, t) {
	(this.min = e !== void 0 ? e : new W(1 / 0, 1 / 0)),
		(this.max = t !== void 0 ? t : new W(-1 / 0, -1 / 0));
}
Object.assign(Rh.prototype, {
	set: function (e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	},
	setFromPoints: function (e) {
		this.makeEmpty();
		for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	},
	setFromCenterAndSize: function (e, t) {
		var n = hc.copy(t).multiplyScalar(0.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	},
	makeEmpty: function () {
		return (this.min.x = this.min.y = 1 / 0), (this.max.x = this.max.y = -1 / 0), this;
	},
	isEmpty: function () {
		return this.max.x < this.min.x || this.max.y < this.min.y;
	},
	getCenter: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Box2: .getCenter() target is now required'), (e = new W())),
			this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5)
		);
	},
	getSize: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Box2: .getSize() target is now required'), (e = new W())),
			this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
		);
	},
	expandByPoint: function (e) {
		return this.min.min(e), this.max.max(e), this;
	},
	expandByVector: function (e) {
		return this.min.sub(e), this.max.add(e), this;
	},
	expandByScalar: function (e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	},
	containsPoint: function (e) {
		return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
	},
	containsBox: function (e) {
		return (
			this.min.x <= e.min.x &&
			e.max.x <= this.max.x &&
			this.min.y <= e.min.y &&
			e.max.y <= this.max.y
		);
	},
	getParameter: function (e, t) {
		return (
			t === void 0 &&
				(console.warn('THREE.Box2: .getParameter() target is now required'), (t = new W())),
			t.set(
				(e.x - this.min.x) / (this.max.x - this.min.x),
				(e.y - this.min.y) / (this.max.y - this.min.y)
			)
		);
	},
	intersectsBox: function (e) {
		return !(
			e.max.x < this.min.x ||
			e.min.x > this.max.x ||
			e.max.y < this.min.y ||
			e.min.y > this.max.y
		);
	},
	clampPoint: function (e, t) {
		return (
			t === void 0 &&
				(console.warn('THREE.Box2: .clampPoint() target is now required'), (t = new W())),
			t.copy(e).clamp(this.min, this.max)
		);
	},
	distanceToPoint: function (e) {
		var t = hc.copy(e).clamp(this.min, this.max);
		return t.sub(e).length();
	},
	intersect: function (e) {
		return this.min.max(e.min), this.max.min(e.max), this;
	},
	union: function (e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	},
	translate: function (e) {
		return this.min.add(e), this.max.add(e), this;
	},
	equals: function (e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
});
var dc = new R(),
	Ls = new R();
function Ch(e, t) {
	(this.start = e !== void 0 ? e : new R()), (this.end = t !== void 0 ? t : new R());
}
Object.assign(Ch.prototype, {
	set: function (e, t) {
		return this.start.copy(e), this.end.copy(t), this;
	},
	clone: function () {
		return new this.constructor().copy(this);
	},
	copy: function (e) {
		return this.start.copy(e.start), this.end.copy(e.end), this;
	},
	getCenter: function (e) {
		return (
			e === void 0 &&
				(console.warn('THREE.Line3: .getCenter() target is now required'), (e = new R())),
			e.addVectors(this.start, this.end).multiplyScalar(0.5)
		);
	},
	delta: function (e) {
		return (
			e === void 0 && (console.warn('THREE.Line3: .delta() target is now required'), (e = new R())),
			e.subVectors(this.end, this.start)
		);
	},
	distanceSq: function () {
		return this.start.distanceToSquared(this.end);
	},
	distance: function () {
		return this.start.distanceTo(this.end);
	},
	at: function (e, t) {
		return (
			t === void 0 && (console.warn('THREE.Line3: .at() target is now required'), (t = new R())),
			this.delta(t).multiplyScalar(e).add(this.start)
		);
	},
	closestPointToPointParameter: function (e, t) {
		dc.subVectors(e, this.start), Ls.subVectors(this.end, this.start);
		var n = Ls.dot(Ls),
			r = Ls.dot(dc),
			i = r / n;
		return t && (i = Ue.clamp(i, 0, 1)), i;
	},
	closestPointToPoint: function (e, t, n) {
		var r = this.closestPointToPointParameter(e, t);
		return (
			n === void 0 &&
				(console.warn('THREE.Line3: .closestPointToPoint() target is now required'), (n = new R())),
			this.delta(n).multiplyScalar(r).add(this.start)
		);
	},
	applyMatrix4: function (e) {
		return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
	},
	equals: function (e) {
		return e.start.equals(this.start) && e.end.equals(this.end);
	}
});
function Mo(e) {
	se.call(this), (this.material = e), (this.render = function () {});
}
Mo.prototype = Object.create(se.prototype);
Mo.prototype.constructor = Mo;
Mo.prototype.isImmediateRenderObject = !0;
var In = new R(),
	Jn = new R(),
	gu = new Et(),
	D_ = ['a', 'b', 'c'];
function Eo(e, t, n, r) {
	(this.object = e), (this.size = t !== void 0 ? t : 1);
	var i = n !== void 0 ? n : 16711680,
		a = r !== void 0 ? r : 1,
		s = 0,
		o = this.object.geometry;
	o && o.isGeometry
		? (s = o.faces.length * 3)
		: o && o.isBufferGeometry && (s = o.attributes.normal.count);
	var u = new ae(),
		l = new re(s * 2 * 3, 3);
	u.addAttribute('position', l),
		dt.call(this, u, new ft({ color: i, linewidth: a })),
		(this.matrixAutoUpdate = !1),
		this.update();
}
Eo.prototype = Object.create(dt.prototype);
Eo.prototype.constructor = Eo;
Eo.prototype.update = function () {
	this.object.updateMatrixWorld(!0), gu.getNormalMatrix(this.object.matrixWorld);
	var e = this.object.matrixWorld,
		t = this.geometry.attributes.position,
		n = this.object.geometry;
	if (n && n.isGeometry)
		for (var r = n.vertices, i = n.faces, a = 0, s = 0, o = i.length; s < o; s++)
			for (var u = i[s], l = 0, f = u.vertexNormals.length; l < f; l++) {
				var c = r[u[D_[l]]],
					h = u.vertexNormals[l];
				In.copy(c).applyMatrix4(e),
					Jn.copy(h).applyMatrix3(gu).normalize().multiplyScalar(this.size).add(In),
					t.setXYZ(a, In.x, In.y, In.z),
					(a = a + 1),
					t.setXYZ(a, Jn.x, Jn.y, Jn.z),
					(a = a + 1);
			}
	else if (n && n.isBufferGeometry)
		for (
			var p = n.attributes.position, d = n.attributes.normal, a = 0, l = 0, f = p.count;
			l < f;
			l++
		)
			In.set(p.getX(l), p.getY(l), p.getZ(l)).applyMatrix4(e),
				Jn.set(d.getX(l), d.getY(l), d.getZ(l)),
				Jn.applyMatrix3(gu).normalize().multiplyScalar(this.size).add(In),
				t.setXYZ(a, In.x, In.y, In.z),
				(a = a + 1),
				t.setXYZ(a, Jn.x, Jn.y, Jn.z),
				(a = a + 1);
	t.needsUpdate = !0;
};
var pc = new R();
function Ha(e, t) {
	se.call(this),
		(this.light = e),
		this.light.updateMatrixWorld(),
		(this.matrix = e.matrixWorld),
		(this.matrixAutoUpdate = !1),
		(this.color = t);
	for (
		var n = new ae(),
			r = [
				0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1
			],
			i = 0,
			a = 1,
			s = 32;
		i < s;
		i++, a++
	) {
		var o = (i / s) * Math.PI * 2,
			u = (a / s) * Math.PI * 2;
		r.push(Math.cos(o), Math.sin(o), 1, Math.cos(u), Math.sin(u), 1);
	}
	n.addAttribute('position', new re(r, 3));
	var l = new ft({ fog: !1 });
	(this.cone = new dt(n, l)), this.add(this.cone), this.update();
}
Ha.prototype = Object.create(se.prototype);
Ha.prototype.constructor = Ha;
Ha.prototype.dispose = function () {
	this.cone.geometry.dispose(), this.cone.material.dispose();
};
Ha.prototype.update = function () {
	this.light.updateMatrixWorld();
	var e = this.light.distance ? this.light.distance : 1e3,
		t = e * Math.tan(this.light.angle);
	this.cone.scale.set(t, t, e),
		pc.setFromMatrixPosition(this.light.target.matrixWorld),
		this.cone.lookAt(pc),
		this.color !== void 0
			? this.cone.material.color.set(this.color)
			: this.cone.material.color.copy(this.light.color);
};
var pr = new R(),
	Ts = new He(),
	_u = new He();
function Ph(e) {
	var t = [];
	e && e.isBone && t.push(e);
	for (var n = 0; n < e.children.length; n++) t.push.apply(t, Ph(e.children[n]));
	return t;
}
function Wa(e) {
	for (
		var t = Ph(e), n = new ae(), r = [], i = [], a = new he(0, 0, 1), s = new he(0, 1, 0), o = 0;
		o < t.length;
		o++
	) {
		var u = t[o];
		u.parent &&
			u.parent.isBone &&
			(r.push(0, 0, 0), r.push(0, 0, 0), i.push(a.r, a.g, a.b), i.push(s.r, s.g, s.b));
	}
	n.addAttribute('position', new re(r, 3)), n.addAttribute('color', new re(i, 3));
	var l = new ft({ vertexColors: $a, depthTest: !1, depthWrite: !1, transparent: !0 });
	dt.call(this, n, l),
		(this.root = e),
		(this.bones = t),
		(this.matrix = e.matrixWorld),
		(this.matrixAutoUpdate = !1);
}
Wa.prototype = Object.create(dt.prototype);
Wa.prototype.constructor = Wa;
Wa.prototype.updateMatrixWorld = function (e) {
	var t = this.bones,
		n = this.geometry,
		r = n.getAttribute('position');
	_u.getInverse(this.root.matrixWorld);
	for (var i = 0, a = 0; i < t.length; i++) {
		var s = t[i];
		s.parent &&
			s.parent.isBone &&
			(Ts.multiplyMatrices(_u, s.matrixWorld),
			pr.setFromMatrixPosition(Ts),
			r.setXYZ(a, pr.x, pr.y, pr.z),
			Ts.multiplyMatrices(_u, s.parent.matrixWorld),
			pr.setFromMatrixPosition(Ts),
			r.setXYZ(a + 1, pr.x, pr.y, pr.z),
			(a += 2));
	}
	(n.getAttribute('position').needsUpdate = !0), se.prototype.updateMatrixWorld.call(this, e);
};
function qa(e, t, n) {
	(this.light = e), this.light.updateMatrixWorld(), (this.color = n);
	var r = new zr(t, 4, 2),
		i = new hn({ wireframe: !0, fog: !1 });
	wt.call(this, r, i),
		(this.matrix = this.light.matrixWorld),
		(this.matrixAutoUpdate = !1),
		this.update();
}
qa.prototype = Object.create(wt.prototype);
qa.prototype.constructor = qa;
qa.prototype.dispose = function () {
	this.geometry.dispose(), this.material.dispose();
};
qa.prototype.update = function () {
	this.color !== void 0
		? this.material.color.set(this.color)
		: this.material.color.copy(this.light.color);
};
function ja(e, t) {
	(this.type = 'RectAreaLightHelper'), (this.light = e), (this.color = t);
	var n = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0],
		r = new ae();
	r.addAttribute('position', new re(n, 3)), r.computeBoundingSphere();
	var i = new ft({ fog: !1 });
	Ft.call(this, r, i);
	var a = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0],
		s = new ae();
	s.addAttribute('position', new re(a, 3)),
		s.computeBoundingSphere(),
		this.add(new wt(s, new hn({ side: Tt, fog: !1 }))),
		this.update();
}
ja.prototype = Object.create(Ft.prototype);
ja.prototype.constructor = ja;
ja.prototype.update = function () {
	if ((this.scale.set(0.5 * this.light.width, 0.5 * this.light.height, 1), this.color !== void 0))
		this.material.color.set(this.color), this.children[0].material.color.set(this.color);
	else {
		this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
		var e = this.material.color,
			t = Math.max(e.r, e.g, e.b);
		t > 1 && e.multiplyScalar(1 / t), this.children[0].material.color.copy(this.material.color);
	}
};
ja.prototype.dispose = function () {
	this.geometry.dispose(),
		this.material.dispose(),
		this.children[0].geometry.dispose(),
		this.children[0].material.dispose();
};
var N_ = new R(),
	vc = new he(),
	mc = new he();
function Ka(e, t, n) {
	se.call(this),
		(this.light = e),
		this.light.updateMatrixWorld(),
		(this.matrix = e.matrixWorld),
		(this.matrixAutoUpdate = !1),
		(this.color = n);
	var r = new Pi(t);
	r.rotateY(Math.PI * 0.5),
		(this.material = new hn({ wireframe: !0, fog: !1 })),
		this.color === void 0 && (this.material.vertexColors = $a);
	var i = r.getAttribute('position'),
		a = new Float32Array(i.count * 3);
	r.addAttribute('color', new Ie(a, 3)), this.add(new wt(r, this.material)), this.update();
}
Ka.prototype = Object.create(se.prototype);
Ka.prototype.constructor = Ka;
Ka.prototype.dispose = function () {
	this.children[0].geometry.dispose(), this.children[0].material.dispose();
};
Ka.prototype.update = function () {
	var e = this.children[0];
	if (this.color !== void 0) this.material.color.set(this.color);
	else {
		var t = e.geometry.getAttribute('color');
		vc.copy(this.light.color), mc.copy(this.light.groundColor);
		for (var n = 0, r = t.count; n < r; n++) {
			var i = n < r / 2 ? vc : mc;
			t.setXYZ(n, i.r, i.g, i.b);
		}
		t.needsUpdate = !0;
	}
	e.lookAt(N_.setFromMatrixPosition(this.light.matrixWorld).negate());
};
function Ja(e, t) {
	(this.lightProbe = e), (this.size = t);
	var n = {};
	n.GAMMA_OUTPUT = '';
	var r = new Ot({
			defines: n,
			uniforms: {
				sh: { value: this.lightProbe.sh.coefficients },
				intensity: { value: this.lightProbe.intensity }
			},
			vertexShader: [
				'varying vec3 vNormal;',
				'void main() {',
				'	vNormal = normalize( normalMatrix * normal );',
				'	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
				'}'
			].join(`
`),
			fragmentShader: [
				'#define RECIPROCAL_PI 0.318309886',
				'vec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {',
				'	// matrix is assumed to be orthogonal',
				'	return normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );',
				'}',
				'vec3 linearToOutput( in vec3 a ) {',
				'	#ifdef GAMMA_OUTPUT',
				'		return pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );',
				'	#else',
				'		return a;',
				'	#endif',
				'}',
				'// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf',
				'vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {',
				'	// normal is assumed to have unit length',
				'	float x = normal.x, y = normal.y, z = normal.z;',
				'	// band 0',
				'	vec3 result = shCoefficients[ 0 ] * 0.886227;',
				'	// band 1',
				'	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;',
				'	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;',
				'	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;',
				'	// band 2',
				'	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;',
				'	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;',
				'	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );',
				'	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;',
				'	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );',
				'	return result;',
				'}',
				'uniform vec3 sh[ 9 ]; // sh coefficients',
				'uniform float intensity; // light probe intensity',
				'varying vec3 vNormal;',
				'void main() {',
				'	vec3 normal = normalize( vNormal );',
				'	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );',
				'	vec3 irradiance = shGetIrradianceAt( worldNormal, sh );',
				'	vec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;',
				'	outgoingLight = linearToOutput( outgoingLight );',
				'	gl_FragColor = vec4( outgoingLight, 1.0 );',
				'}'
			].join(`
`)
		}),
		i = new zr(1, 32, 16);
	wt.call(this, i, r), this.onBeforeRender();
}
Ja.prototype = Object.create(wt.prototype);
Ja.prototype.constructor = Ja;
Ja.prototype.dispose = function () {
	this.geometry.dispose(), this.material.dispose();
};
Ja.prototype.onBeforeRender = function () {
	this.position.copy(this.lightProbe.position),
		this.scale.set(1, 1, 1).multiplyScalar(this.size),
		(this.material.uniforms.intensity.value = this.lightProbe.intensity);
};
function _l(e, t, n, r) {
	(e = e || 10),
		(t = t || 10),
		(n = new he(n !== void 0 ? n : 4473924)),
		(r = new he(r !== void 0 ? r : 8947848));
	for (
		var i = t / 2, a = e / t, s = e / 2, o = [], u = [], l = 0, f = 0, c = -s;
		l <= t;
		l++, c += a
	) {
		o.push(-s, 0, c, s, 0, c), o.push(c, 0, -s, c, 0, s);
		var h = l === i ? n : r;
		h.toArray(u, f),
			(f += 3),
			h.toArray(u, f),
			(f += 3),
			h.toArray(u, f),
			(f += 3),
			h.toArray(u, f),
			(f += 3);
	}
	var p = new ae();
	p.addAttribute('position', new re(o, 3)), p.addAttribute('color', new re(u, 3));
	var d = new ft({ vertexColors: $a });
	dt.call(this, p, d);
}
_l.prototype = Object.assign(Object.create(dt.prototype), {
	constructor: _l,
	copy: function (e) {
		return (
			dt.prototype.copy.call(this, e),
			this.geometry.copy(e.geometry),
			this.material.copy(e.material),
			this
		);
	},
	clone: function () {
		return new this.constructor().copy(this);
	}
});
function xl(e, t, n, r, i, a) {
	(e = e || 10),
		(t = t || 16),
		(n = n || 8),
		(r = r || 64),
		(i = new he(i !== void 0 ? i : 4473924)),
		(a = new he(a !== void 0 ? a : 8947848));
	var s = [],
		o = [],
		u,
		l,
		f,
		c,
		h,
		p,
		d;
	for (c = 0; c <= t; c++)
		(f = (c / t) * (Math.PI * 2)),
			(u = Math.sin(f) * e),
			(l = Math.cos(f) * e),
			s.push(0, 0, 0),
			s.push(u, 0, l),
			(d = c & 1 ? i : a),
			o.push(d.r, d.g, d.b),
			o.push(d.r, d.g, d.b);
	for (c = 0; c <= n; c++)
		for (d = c & 1 ? i : a, p = e - (e / n) * c, h = 0; h < r; h++)
			(f = (h / r) * (Math.PI * 2)),
				(u = Math.sin(f) * p),
				(l = Math.cos(f) * p),
				s.push(u, 0, l),
				o.push(d.r, d.g, d.b),
				(f = ((h + 1) / r) * (Math.PI * 2)),
				(u = Math.sin(f) * p),
				(l = Math.cos(f) * p),
				s.push(u, 0, l),
				o.push(d.r, d.g, d.b);
	var m = new ae();
	m.addAttribute('position', new re(s, 3)), m.addAttribute('color', new re(o, 3));
	var v = new ft({ vertexColors: $a });
	dt.call(this, m, v);
}
xl.prototype = Object.create(dt.prototype);
xl.prototype.constructor = xl;
function Xa(e, t, n, r) {
	(this.audio = e),
		(this.range = t || 1),
		(this.divisionsInnerAngle = n || 16),
		(this.divisionsOuterAngle = r || 2);
	var i = new ae(),
		a = this.divisionsInnerAngle + this.divisionsOuterAngle * 2,
		s = new Float32Array((a * 3 + 3) * 3);
	i.addAttribute('position', new Ie(s, 3));
	var o = new ft({ color: 65280 }),
		u = new ft({ color: 16776960 });
	Ft.call(this, i, [u, o]), this.update();
}
Xa.prototype = Object.create(Ft.prototype);
Xa.prototype.constructor = Xa;
Xa.prototype.update = function () {
	var e = this.audio,
		t = this.range,
		n = this.divisionsInnerAngle,
		r = this.divisionsOuterAngle,
		i = Ue.degToRad(e.panner.coneInnerAngle),
		a = Ue.degToRad(e.panner.coneOuterAngle),
		s = i / 2,
		o = a / 2,
		u = 0,
		l = 0,
		f,
		c,
		h = this.geometry,
		p = h.attributes.position;
	h.clearGroups();
	function d(m, v, g, x) {
		var M = (v - m) / g;
		for (p.setXYZ(u, 0, 0, 0), l++, f = m; f < v; f += M)
			(c = u + l),
				p.setXYZ(c, Math.sin(f) * t, 0, Math.cos(f) * t),
				p.setXYZ(c + 1, Math.sin(Math.min(f + M, v)) * t, 0, Math.cos(Math.min(f + M, v)) * t),
				p.setXYZ(c + 2, 0, 0, 0),
				(l += 3);
		h.addGroup(u, l, x), (u += l), (l = 0);
	}
	d(-o, -s, r, 0),
		d(-s, s, n, 1),
		d(s, o, r, 0),
		(p.needsUpdate = !0),
		i === a && (this.material[0].visible = !1);
};
Xa.prototype.dispose = function () {
	this.geometry.dispose(), this.material[0].dispose(), this.material[1].dispose();
};
var ea = new R(),
	As = new R(),
	gc = new Et();
function So(e, t, n, r) {
	(this.object = e), (this.size = t !== void 0 ? t : 1);
	var i = n !== void 0 ? n : 16776960,
		a = r !== void 0 ? r : 1,
		s = 0,
		o = this.object.geometry;
	o && o.isGeometry
		? (s = o.faces.length)
		: console.warn(
				'THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.'
			);
	var u = new ae(),
		l = new re(s * 2 * 3, 3);
	u.addAttribute('position', l),
		dt.call(this, u, new ft({ color: i, linewidth: a })),
		(this.matrixAutoUpdate = !1),
		this.update();
}
So.prototype = Object.create(dt.prototype);
So.prototype.constructor = So;
So.prototype.update = function () {
	this.object.updateMatrixWorld(!0), gc.getNormalMatrix(this.object.matrixWorld);
	for (
		var e = this.object.matrixWorld,
			t = this.geometry.attributes.position,
			n = this.object.geometry,
			r = n.vertices,
			i = n.faces,
			a = 0,
			s = 0,
			o = i.length;
		s < o;
		s++
	) {
		var u = i[s],
			l = u.normal;
		ea.copy(r[u.a]).add(r[u.b]).add(r[u.c]).divideScalar(3).applyMatrix4(e),
			As.copy(l).applyMatrix3(gc).normalize().multiplyScalar(this.size).add(ea),
			t.setXYZ(a, ea.x, ea.y, ea.z),
			(a = a + 1),
			t.setXYZ(a, As.x, As.y, As.z),
			(a = a + 1);
	}
	t.needsUpdate = !0;
};
var _c = new R(),
	Rs = new R(),
	xc = new R();
function Ya(e, t, n) {
	se.call(this),
		(this.light = e),
		this.light.updateMatrixWorld(),
		(this.matrix = e.matrixWorld),
		(this.matrixAutoUpdate = !1),
		(this.color = n),
		t === void 0 && (t = 1);
	var r = new ae();
	r.addAttribute('position', new re([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
	var i = new ft({ fog: !1 });
	(this.lightPlane = new Ft(r, i)),
		this.add(this.lightPlane),
		(r = new ae()),
		r.addAttribute('position', new re([0, 0, 0, 0, 0, 1], 3)),
		(this.targetLine = new Ft(r, i)),
		this.add(this.targetLine),
		this.update();
}
Ya.prototype = Object.create(se.prototype);
Ya.prototype.constructor = Ya;
Ya.prototype.dispose = function () {
	this.lightPlane.geometry.dispose(),
		this.lightPlane.material.dispose(),
		this.targetLine.geometry.dispose(),
		this.targetLine.material.dispose();
};
Ya.prototype.update = function () {
	_c.setFromMatrixPosition(this.light.matrixWorld),
		Rs.setFromMatrixPosition(this.light.target.matrixWorld),
		xc.subVectors(Rs, _c),
		this.lightPlane.lookAt(Rs),
		this.color !== void 0
			? (this.lightPlane.material.color.set(this.color),
				this.targetLine.material.color.set(this.color))
			: (this.lightPlane.material.color.copy(this.light.color),
				this.targetLine.material.color.copy(this.light.color)),
		this.targetLine.lookAt(Rs),
		(this.targetLine.scale.z = xc.length());
};
var Cs = new R(),
	pt = new nr();
function Lo(e) {
	var t = new ae(),
		n = new ft({ color: 16777215, vertexColors: Rd }),
		r = [],
		i = [],
		a = {},
		s = new he(16755200),
		o = new he(16711680),
		u = new he(43775),
		l = new he(16777215),
		f = new he(3355443);
	c('n1', 'n2', s),
		c('n2', 'n4', s),
		c('n4', 'n3', s),
		c('n3', 'n1', s),
		c('f1', 'f2', s),
		c('f2', 'f4', s),
		c('f4', 'f3', s),
		c('f3', 'f1', s),
		c('n1', 'f1', s),
		c('n2', 'f2', s),
		c('n3', 'f3', s),
		c('n4', 'f4', s),
		c('p', 'n1', o),
		c('p', 'n2', o),
		c('p', 'n3', o),
		c('p', 'n4', o),
		c('u1', 'u2', u),
		c('u2', 'u3', u),
		c('u3', 'u1', u),
		c('c', 't', l),
		c('p', 'c', f),
		c('cn1', 'cn2', f),
		c('cn3', 'cn4', f),
		c('cf1', 'cf2', f),
		c('cf3', 'cf4', f);
	function c(p, d, m) {
		h(p, m), h(d, m);
	}
	function h(p, d) {
		r.push(0, 0, 0),
			i.push(d.r, d.g, d.b),
			a[p] === void 0 && (a[p] = []),
			a[p].push(r.length / 3 - 1);
	}
	t.addAttribute('position', new re(r, 3)),
		t.addAttribute('color', new re(i, 3)),
		dt.call(this, t, n),
		(this.camera = e),
		this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
		(this.matrix = e.matrixWorld),
		(this.matrixAutoUpdate = !1),
		(this.pointMap = a),
		this.update();
}
Lo.prototype = Object.create(dt.prototype);
Lo.prototype.constructor = Lo;
Lo.prototype.update = function () {
	var e = this.geometry,
		t = this.pointMap,
		n = 1,
		r = 1;
	pt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
		mt('c', t, e, pt, 0, 0, -1),
		mt('t', t, e, pt, 0, 0, 1),
		mt('n1', t, e, pt, -n, -r, -1),
		mt('n2', t, e, pt, n, -r, -1),
		mt('n3', t, e, pt, -n, r, -1),
		mt('n4', t, e, pt, n, r, -1),
		mt('f1', t, e, pt, -n, -r, 1),
		mt('f2', t, e, pt, n, -r, 1),
		mt('f3', t, e, pt, -n, r, 1),
		mt('f4', t, e, pt, n, r, 1),
		mt('u1', t, e, pt, n * 0.7, r * 1.1, -1),
		mt('u2', t, e, pt, -n * 0.7, r * 1.1, -1),
		mt('u3', t, e, pt, 0, r * 2, -1),
		mt('cf1', t, e, pt, -n, 0, 1),
		mt('cf2', t, e, pt, n, 0, 1),
		mt('cf3', t, e, pt, 0, -r, 1),
		mt('cf4', t, e, pt, 0, r, 1),
		mt('cn1', t, e, pt, -n, 0, -1),
		mt('cn2', t, e, pt, n, 0, -1),
		mt('cn3', t, e, pt, 0, -r, -1),
		mt('cn4', t, e, pt, 0, r, -1),
		(e.getAttribute('position').needsUpdate = !0);
};
function mt(e, t, n, r, i, a, s) {
	Cs.set(i, a, s).unproject(r);
	var o = t[e];
	if (o !== void 0)
		for (var u = n.getAttribute('position'), l = 0, f = o.length; l < f; l++)
			u.setXYZ(o[l], Cs.x, Cs.y, Cs.z);
}
var Ps = new ur();
function ei(e, t) {
	(this.object = e), t === void 0 && (t = 16776960);
	var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
		r = new Float32Array(8 * 3),
		i = new ae();
	i.setIndex(new Ie(n, 1)),
		i.addAttribute('position', new Ie(r, 3)),
		dt.call(this, i, new ft({ color: t })),
		(this.matrixAutoUpdate = !1),
		this.update();
}
ei.prototype = Object.create(dt.prototype);
ei.prototype.constructor = ei;
ei.prototype.update = function (e) {
	if (
		(e !== void 0 && console.warn('THREE.BoxHelper: .update() has no longer arguments.'),
		this.object !== void 0 && Ps.setFromObject(this.object),
		!Ps.isEmpty())
	) {
		var t = Ps.min,
			n = Ps.max,
			r = this.geometry.attributes.position,
			i = r.array;
		(i[0] = n.x),
			(i[1] = n.y),
			(i[2] = n.z),
			(i[3] = t.x),
			(i[4] = n.y),
			(i[5] = n.z),
			(i[6] = t.x),
			(i[7] = t.y),
			(i[8] = n.z),
			(i[9] = n.x),
			(i[10] = t.y),
			(i[11] = n.z),
			(i[12] = n.x),
			(i[13] = n.y),
			(i[14] = t.z),
			(i[15] = t.x),
			(i[16] = n.y),
			(i[17] = t.z),
			(i[18] = t.x),
			(i[19] = t.y),
			(i[20] = t.z),
			(i[21] = n.x),
			(i[22] = t.y),
			(i[23] = t.z),
			(r.needsUpdate = !0),
			this.geometry.computeBoundingSphere();
	}
};
ei.prototype.setFromObject = function (e) {
	return (this.object = e), this.update(), this;
};
ei.prototype.copy = function (e) {
	return dt.prototype.copy.call(this, e), (this.object = e.object), this;
};
ei.prototype.clone = function () {
	return new this.constructor().copy(this);
};
function To(e, t) {
	(this.type = 'Box3Helper'), (this.box = e), (t = t || 16776960);
	var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
		r = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1],
		i = new ae();
	i.setIndex(new Ie(n, 1)),
		i.addAttribute('position', new re(r, 3)),
		dt.call(this, i, new ft({ color: t })),
		this.geometry.computeBoundingSphere();
}
To.prototype = Object.create(dt.prototype);
To.prototype.constructor = To;
To.prototype.updateMatrixWorld = function (e) {
	var t = this.box;
	t.isEmpty() ||
		(t.getCenter(this.position),
		t.getSize(this.scale),
		this.scale.multiplyScalar(0.5),
		se.prototype.updateMatrixWorld.call(this, e));
};
function Ao(e, t, n) {
	(this.type = 'PlaneHelper'), (this.plane = e), (this.size = t === void 0 ? 1 : t);
	var r = n !== void 0 ? n : 16776960,
		i = [
			1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0,
			0
		],
		a = new ae();
	a.addAttribute('position', new re(i, 3)),
		a.computeBoundingSphere(),
		Ft.call(this, a, new ft({ color: r }));
	var s = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
		o = new ae();
	o.addAttribute('position', new re(s, 3)),
		o.computeBoundingSphere(),
		this.add(new wt(o, new hn({ color: r, opacity: 0.2, transparent: !0, depthWrite: !1 })));
}
Ao.prototype = Object.create(Ft.prototype);
Ao.prototype.constructor = Ao;
Ao.prototype.updateMatrixWorld = function (e) {
	var t = -this.plane.constant;
	Math.abs(t) < 1e-8 && (t = 1e-8),
		this.scale.set(0.5 * this.size, 0.5 * this.size, t),
		(this.children[0].material.side = t < 0 ? Tt : Qa),
		this.lookAt(this.plane.normal),
		se.prototype.updateMatrixWorld.call(this, e);
};
var bc = new R(),
	Is,
	xu;
function yr(e, t, n, r, i, a) {
	se.call(this),
		e === void 0 && (e = new R(0, 0, 1)),
		t === void 0 && (t = new R(0, 0, 0)),
		n === void 0 && (n = 1),
		r === void 0 && (r = 16776960),
		i === void 0 && (i = 0.2 * n),
		a === void 0 && (a = 0.2 * i),
		Is === void 0 &&
			((Is = new ae()),
			Is.addAttribute('position', new re([0, 0, 0, 0, 1, 0], 3)),
			(xu = new br(0, 0.5, 1, 5, 1)),
			xu.translate(0, -0.5, 0)),
		this.position.copy(t),
		(this.line = new Ft(Is, new ft({ color: r }))),
		(this.line.matrixAutoUpdate = !1),
		this.add(this.line),
		(this.cone = new wt(xu, new hn({ color: r }))),
		(this.cone.matrixAutoUpdate = !1),
		this.add(this.cone),
		this.setDirection(e),
		this.setLength(n, i, a);
}
yr.prototype = Object.create(se.prototype);
yr.prototype.constructor = yr;
yr.prototype.setDirection = function (e) {
	if (e.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
	else if (e.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
	else {
		bc.set(e.z, 0, -e.x).normalize();
		var t = Math.acos(e.y);
		this.quaternion.setFromAxisAngle(bc, t);
	}
};
yr.prototype.setLength = function (e, t, n) {
	t === void 0 && (t = 0.2 * e),
		n === void 0 && (n = 0.2 * t),
		this.line.scale.set(1, Math.max(1e-4, e - t), 1),
		this.line.updateMatrix(),
		this.cone.scale.set(n, t, n),
		(this.cone.position.y = e),
		this.cone.updateMatrix();
};
yr.prototype.setColor = function (e) {
	this.line.material.color.set(e), this.cone.material.color.set(e);
};
yr.prototype.copy = function (e) {
	return se.prototype.copy.call(this, e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
};
yr.prototype.clone = function () {
	return new this.constructor().copy(this);
};
function bl(e) {
	e = e || 1;
	var t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
		n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
		r = new ae();
	r.addAttribute('position', new re(t, 3)), r.addAttribute('color', new re(n, 3));
	var i = new ft({ vertexColors: $a });
	dt.call(this, r, i);
}
bl.prototype = Object.create(dt.prototype);
bl.prototype.constructor = bl;
xe.create = function (e, t) {
	return (
		console.log('THREE.Curve.create() has been deprecated'),
		(e.prototype = Object.create(xe.prototype)),
		(e.prototype.constructor = e),
		(e.prototype.getPoint = t),
		e
	);
};
Object.assign(vr.prototype, {
	createPointsGeometry: function (e) {
		console.warn(
			'THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.'
		);
		var t = this.getPoints(e);
		return this.createGeometry(t);
	},
	createSpacedPointsGeometry: function (e) {
		console.warn(
			'THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.'
		);
		var t = this.getSpacedPoints(e);
		return this.createGeometry(t);
	},
	createGeometry: function (e) {
		console.warn(
			'THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.'
		);
		for (var t = new Re(), n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			t.vertices.push(new R(i.x, i.y, i.z || 0));
		}
		return t;
	}
});
Object.assign(Nn.prototype, {
	fromPoints: function (e) {
		console.warn('THREE.Path: .fromPoints() has been renamed to .setFromPoints().'),
			this.setFromPoints(e);
	}
});
Object.create(nn.prototype);
Object.create(nn.prototype);
function Ih(e) {
	console.warn('THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.'),
		nn.call(this, e),
		(this.type = 'catmullrom');
}
Ih.prototype = Object.create(nn.prototype);
Object.assign(Ih.prototype, {
	initFromArray: function () {
		console.error('THREE.Spline: .initFromArray() has been removed.');
	},
	getControlPointsArray: function () {
		console.error('THREE.Spline: .getControlPointsArray() has been removed.');
	},
	reparametrizeByArcLength: function () {
		console.error('THREE.Spline: .reparametrizeByArcLength() has been removed.');
	}
});
_l.prototype.setColors = function () {
	console.error(
		'THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.'
	);
};
Wa.prototype.update = function () {
	console.error('THREE.SkeletonHelper: update() no longer needs to be called.');
};
Object.assign(it.prototype, {
	extractUrlBase: function (e) {
		return (
			console.warn(
				'THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.'
			),
			bh.extractUrlBase(e)
		);
	}
});
it.Handlers = {
	add: function () {
		console.error(
			'THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.'
		);
	},
	get: function () {
		console.error(
			'THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.'
		);
	}
};
Object.assign(pl.prototype, {
	setTexturePath: function (e) {
		return (
			console.warn('THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().'),
			this.setResourcePath(e)
		);
	}
});
Object.assign(Rh.prototype, {
	center: function (e) {
		return (
			console.warn('THREE.Box2: .center() has been renamed to .getCenter().'), this.getCenter(e)
		);
	},
	empty: function () {
		return console.warn('THREE.Box2: .empty() has been renamed to .isEmpty().'), this.isEmpty();
	},
	isIntersectionBox: function (e) {
		return (
			console.warn('THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().'),
			this.intersectsBox(e)
		);
	},
	size: function (e) {
		return console.warn('THREE.Box2: .size() has been renamed to .getSize().'), this.getSize(e);
	}
});
Object.assign(ur.prototype, {
	center: function (e) {
		return (
			console.warn('THREE.Box3: .center() has been renamed to .getCenter().'), this.getCenter(e)
		);
	},
	empty: function () {
		return console.warn('THREE.Box3: .empty() has been renamed to .isEmpty().'), this.isEmpty();
	},
	isIntersectionBox: function (e) {
		return (
			console.warn('THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().'),
			this.intersectsBox(e)
		);
	},
	isIntersectionSphere: function (e) {
		return (
			console.warn('THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().'),
			this.intersectsSphere(e)
		);
	},
	size: function (e) {
		return console.warn('THREE.Box3: .size() has been renamed to .getSize().'), this.getSize(e);
	}
});
Ch.prototype.center = function (e) {
	return (
		console.warn('THREE.Line3: .center() has been renamed to .getCenter().'), this.getCenter(e)
	);
};
Object.assign(Ue, {
	random16: function () {
		return (
			console.warn('THREE.Math: .random16() has been deprecated. Use Math.random() instead.'),
			Math.random()
		);
	},
	nearestPowerOfTwo: function (e) {
		return (
			console.warn('THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().'),
			Ue.floorPowerOfTwo(e)
		);
	},
	nextPowerOfTwo: function (e) {
		return (
			console.warn('THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().'),
			Ue.ceilPowerOfTwo(e)
		);
	}
});
Object.assign(Et.prototype, {
	flattenToArrayOffset: function (e, t) {
		return (
			console.warn(
				'THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'
			),
			this.toArray(e, t)
		);
	},
	multiplyVector3: function (e) {
		return (
			console.warn(
				'THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.'
			),
			e.applyMatrix3(this)
		);
	},
	multiplyVector3Array: function () {
		console.error('THREE.Matrix3: .multiplyVector3Array() has been removed.');
	},
	applyToBuffer: function (e) {
		return (
			console.warn(
				'THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.'
			),
			this.applyToBufferAttribute(e)
		);
	},
	applyToVector3Array: function () {
		console.error('THREE.Matrix3: .applyToVector3Array() has been removed.');
	}
});
Object.assign(He.prototype, {
	extractPosition: function (e) {
		return (
			console.warn('THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().'),
			this.copyPosition(e)
		);
	},
	flattenToArrayOffset: function (e, t) {
		return (
			console.warn(
				'THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'
			),
			this.toArray(e, t)
		);
	},
	getPosition: function () {
		return (
			console.warn(
				'THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.'
			),
			new R().setFromMatrixColumn(this, 3)
		);
	},
	setRotationFromQuaternion: function (e) {
		return (
			console.warn(
				'THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().'
			),
			this.makeRotationFromQuaternion(e)
		);
	},
	multiplyToArray: function () {
		console.warn('THREE.Matrix4: .multiplyToArray() has been removed.');
	},
	multiplyVector3: function (e) {
		return (
			console.warn(
				'THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.'
			),
			e.applyMatrix4(this)
		);
	},
	multiplyVector4: function (e) {
		return (
			console.warn(
				'THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.'
			),
			e.applyMatrix4(this)
		);
	},
	multiplyVector3Array: function () {
		console.error('THREE.Matrix4: .multiplyVector3Array() has been removed.');
	},
	rotateAxis: function (e) {
		console.warn(
			'THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.'
		),
			e.transformDirection(this);
	},
	crossVector: function (e) {
		return (
			console.warn(
				'THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.'
			),
			e.applyMatrix4(this)
		);
	},
	translate: function () {
		console.error('THREE.Matrix4: .translate() has been removed.');
	},
	rotateX: function () {
		console.error('THREE.Matrix4: .rotateX() has been removed.');
	},
	rotateY: function () {
		console.error('THREE.Matrix4: .rotateY() has been removed.');
	},
	rotateZ: function () {
		console.error('THREE.Matrix4: .rotateZ() has been removed.');
	},
	rotateByAxis: function () {
		console.error('THREE.Matrix4: .rotateByAxis() has been removed.');
	},
	applyToBuffer: function (e) {
		return (
			console.warn(
				'THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.'
			),
			this.applyToBufferAttribute(e)
		);
	},
	applyToVector3Array: function () {
		console.error('THREE.Matrix4: .applyToVector3Array() has been removed.');
	},
	makeFrustum: function (e, t, n, r, i, a) {
		return (
			console.warn(
				'THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.'
			),
			this.makePerspective(e, t, r, n, i, a)
		);
	}
});
Zn.prototype.isIntersectionLine = function (e) {
	return (
		console.warn('THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().'),
		this.intersectsLine(e)
	);
};
qt.prototype.multiplyVector3 = function (e) {
	return (
		console.warn(
			'THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.'
		),
		e.applyQuaternion(this)
	);
};
Object.assign(Ki.prototype, {
	isIntersectionBox: function (e) {
		return (
			console.warn('THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().'),
			this.intersectsBox(e)
		);
	},
	isIntersectionPlane: function (e) {
		return (
			console.warn('THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().'),
			this.intersectsPlane(e)
		);
	},
	isIntersectionSphere: function (e) {
		return (
			console.warn('THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().'),
			this.intersectsSphere(e)
		);
	}
});
Object.assign(Ct.prototype, {
	area: function () {
		return console.warn('THREE.Triangle: .area() has been renamed to .getArea().'), this.getArea();
	},
	barycoordFromPoint: function (e, t) {
		return (
			console.warn('THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'),
			this.getBarycoord(e, t)
		);
	},
	midpoint: function (e) {
		return (
			console.warn('THREE.Triangle: .midpoint() has been renamed to .getMidpoint().'),
			this.getMidpoint(e)
		);
	},
	normal: function (e) {
		return (
			console.warn('THREE.Triangle: .normal() has been renamed to .getNormal().'), this.getNormal(e)
		);
	},
	plane: function (e) {
		return (
			console.warn('THREE.Triangle: .plane() has been renamed to .getPlane().'), this.getPlane(e)
		);
	}
});
Object.assign(Ct, {
	barycoordFromPoint: function (e, t, n, r, i) {
		return (
			console.warn('THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'),
			Ct.getBarycoord(e, t, n, r, i)
		);
	},
	normal: function (e, t, n, r) {
		return (
			console.warn('THREE.Triangle: .normal() has been renamed to .getNormal().'),
			Ct.getNormal(e, t, n, r)
		);
	}
});
Object.assign(qr.prototype, {
	extractAllPoints: function (e) {
		return (
			console.warn(
				'THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.'
			),
			this.extractPoints(e)
		);
	},
	extrude: function (e) {
		return (
			console.warn('THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.'),
			new Di(this, e)
		);
	},
	makeGeometry: function (e) {
		return (
			console.warn('THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.'),
			new Ni(this, e)
		);
	}
});
Object.assign(W.prototype, {
	fromAttribute: function (e, t, n) {
		return (
			console.warn('THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().'),
			this.fromBufferAttribute(e, t, n)
		);
	},
	distanceToManhattan: function (e) {
		return (
			console.warn(
				'THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().'
			),
			this.manhattanDistanceTo(e)
		);
	},
	lengthManhattan: function () {
		return (
			console.warn('THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().'),
			this.manhattanLength()
		);
	}
});
Object.assign(R.prototype, {
	setEulerFromRotationMatrix: function () {
		console.error(
			'THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.'
		);
	},
	setEulerFromQuaternion: function () {
		console.error(
			'THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.'
		);
	},
	getPositionFromMatrix: function (e) {
		return (
			console.warn(
				'THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().'
			),
			this.setFromMatrixPosition(e)
		);
	},
	getScaleFromMatrix: function (e) {
		return (
			console.warn(
				'THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().'
			),
			this.setFromMatrixScale(e)
		);
	},
	getColumnFromMatrix: function (e, t) {
		return (
			console.warn(
				'THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().'
			),
			this.setFromMatrixColumn(t, e)
		);
	},
	applyProjection: function (e) {
		return (
			console.warn(
				'THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.'
			),
			this.applyMatrix4(e)
		);
	},
	fromAttribute: function (e, t, n) {
		return (
			console.warn('THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().'),
			this.fromBufferAttribute(e, t, n)
		);
	},
	distanceToManhattan: function (e) {
		return (
			console.warn(
				'THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().'
			),
			this.manhattanDistanceTo(e)
		);
	},
	lengthManhattan: function () {
		return (
			console.warn('THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().'),
			this.manhattanLength()
		);
	}
});
Object.assign(rt.prototype, {
	fromAttribute: function (e, t, n) {
		return (
			console.warn('THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().'),
			this.fromBufferAttribute(e, t, n)
		);
	},
	lengthManhattan: function () {
		return (
			console.warn('THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().'),
			this.manhattanLength()
		);
	}
});
Object.assign(Re.prototype, {
	computeTangents: function () {
		console.error('THREE.Geometry: .computeTangents() has been removed.');
	},
	computeLineDistances: function () {
		console.error(
			'THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.'
		);
	}
});
Object.assign(se.prototype, {
	getChildByName: function (e) {
		return (
			console.warn('THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().'),
			this.getObjectByName(e)
		);
	},
	renderDepth: function () {
		console.warn('THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.');
	},
	translate: function (e, t) {
		return (
			console.warn(
				'THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.'
			),
			this.translateOnAxis(t, e)
		);
	},
	getWorldRotation: function () {
		console.error(
			'THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.'
		);
	}
});
Object.defineProperties(se.prototype, {
	eulerOrder: {
		get: function () {
			return (
				console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'), this.rotation.order
			);
		},
		set: function (e) {
			console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'),
				(this.rotation.order = e);
		}
	},
	useQuaternion: {
		get: function () {
			console.warn(
				'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'
			);
		},
		set: function () {
			console.warn(
				'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'
			);
		}
	}
});
Object.defineProperties($s.prototype, {
	objects: {
		get: function () {
			return console.warn('THREE.LOD: .objects has been renamed to .levels.'), this.levels;
		}
	}
});
Object.defineProperty(Gu.prototype, 'useVertexTexture', {
	get: function () {
		console.warn('THREE.Skeleton: useVertexTexture has been removed.');
	},
	set: function () {
		console.warn('THREE.Skeleton: useVertexTexture has been removed.');
	}
});
zs.prototype.initBones = function () {
	console.error('THREE.SkinnedMesh: initBones() has been removed.');
};
Object.defineProperty(xe.prototype, '__arcLengthDivisions', {
	get: function () {
		return (
			console.warn('THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.'),
			this.arcLengthDivisions
		);
	},
	set: function (e) {
		console.warn('THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.'),
			(this.arcLengthDivisions = e);
	}
});
bt.prototype.setLens = function (e, t) {
	console.warn(
		'THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.'
	),
		t !== void 0 && (this.filmGauge = t),
		this.setFocalLength(e);
};
Object.defineProperties(ct.prototype, {
	onlyShadow: {
		set: function () {
			console.warn('THREE.Light: .onlyShadow has been removed.');
		}
	},
	shadowCameraFov: {
		set: function (e) {
			console.warn('THREE.Light: .shadowCameraFov is now .shadow.camera.fov.'),
				(this.shadow.camera.fov = e);
		}
	},
	shadowCameraLeft: {
		set: function (e) {
			console.warn('THREE.Light: .shadowCameraLeft is now .shadow.camera.left.'),
				(this.shadow.camera.left = e);
		}
	},
	shadowCameraRight: {
		set: function (e) {
			console.warn('THREE.Light: .shadowCameraRight is now .shadow.camera.right.'),
				(this.shadow.camera.right = e);
		}
	},
	shadowCameraTop: {
		set: function (e) {
			console.warn('THREE.Light: .shadowCameraTop is now .shadow.camera.top.'),
				(this.shadow.camera.top = e);
		}
	},
	shadowCameraBottom: {
		set: function (e) {
			console.warn('THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.'),
				(this.shadow.camera.bottom = e);
		}
	},
	shadowCameraNear: {
		set: function (e) {
			console.warn('THREE.Light: .shadowCameraNear is now .shadow.camera.near.'),
				(this.shadow.camera.near = e);
		}
	},
	shadowCameraFar: {
		set: function (e) {
			console.warn('THREE.Light: .shadowCameraFar is now .shadow.camera.far.'),
				(this.shadow.camera.far = e);
		}
	},
	shadowCameraVisible: {
		set: function () {
			console.warn(
				'THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.'
			);
		}
	},
	shadowBias: {
		set: function (e) {
			console.warn('THREE.Light: .shadowBias is now .shadow.bias.'), (this.shadow.bias = e);
		}
	},
	shadowDarkness: {
		set: function () {
			console.warn('THREE.Light: .shadowDarkness has been removed.');
		}
	},
	shadowMapWidth: {
		set: function (e) {
			console.warn('THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.'),
				(this.shadow.mapSize.width = e);
		}
	},
	shadowMapHeight: {
		set: function (e) {
			console.warn('THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.'),
				(this.shadow.mapSize.height = e);
		}
	}
});
Object.defineProperties(Ie.prototype, {
	length: {
		get: function () {
			return (
				console.warn('THREE.BufferAttribute: .length has been deprecated. Use .count instead.'),
				this.array.length
			);
		}
	}
});
Object.assign(Ie.prototype, {
	copyIndicesArray: function () {
		console.error('THREE.BufferAttribute: .copyIndicesArray() has been removed.');
	},
	setArray: function (e) {
		return (
			console.warn(
				'THREE.BufferAttribute: .setArray has been deprecated. Use BufferGeometry .setAttribute to replace/resize attribute buffers'
			),
			(this.count = e !== void 0 ? e.length / this.itemSize : 0),
			(this.array = e),
			this
		);
	}
});
Object.assign(ae.prototype, {
	addIndex: function (e) {
		console.warn('THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().'),
			this.setIndex(e);
	},
	addDrawCall: function (e, t, n) {
		n !== void 0 &&
			console.warn('THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.'),
			console.warn('THREE.BufferGeometry: .addDrawCall() is now .addGroup().'),
			this.addGroup(e, t);
	},
	clearDrawCalls: function () {
		console.warn('THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().'),
			this.clearGroups();
	},
	computeTangents: function () {
		console.warn('THREE.BufferGeometry: .computeTangents() has been removed.');
	},
	computeOffsets: function () {
		console.warn('THREE.BufferGeometry: .computeOffsets() has been removed.');
	}
});
Object.defineProperties(ae.prototype, {
	drawcalls: {
		get: function () {
			return (
				console.error('THREE.BufferGeometry: .drawcalls has been renamed to .groups.'), this.groups
			);
		}
	},
	offsets: {
		get: function () {
			return (
				console.warn('THREE.BufferGeometry: .offsets has been renamed to .groups.'), this.groups
			);
		}
	}
});
Object.assign(Zr.prototype, {
	setArray: function (e) {
		return (
			console.warn(
				'THREE.InterleavedBuffer: .setArray has been deprecated. Use BufferGeometry .setAttribute to replace/resize attribute buffers'
			),
			(this.count = e !== void 0 ? e.length / this.stride : 0),
			(this.array = e),
			this
		);
	}
});
Object.assign(rr.prototype, {
	getArrays: function () {
		console.error('THREE.ExtrudeBufferGeometry: .getArrays() has been removed.');
	},
	addShapeList: function () {
		console.error('THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.');
	},
	addShape: function () {
		console.error('THREE.ExtrudeBufferGeometry: .addShape() has been removed.');
	}
});
Object.defineProperties(ml.prototype, {
	dynamic: {
		set: function () {
			console.warn(
				'THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.'
			);
		}
	},
	onUpdate: {
		value: function () {
			return (
				console.warn(
					'THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.'
				),
				this
			);
		}
	}
});
Object.defineProperties(De.prototype, {
	wrapAround: {
		get: function () {
			console.warn('THREE.Material: .wrapAround has been removed.');
		},
		set: function () {
			console.warn('THREE.Material: .wrapAround has been removed.');
		}
	},
	overdraw: {
		get: function () {
			console.warn('THREE.Material: .overdraw has been removed.');
		},
		set: function () {
			console.warn('THREE.Material: .overdraw has been removed.');
		}
	},
	wrapRGB: {
		get: function () {
			return console.warn('THREE.Material: .wrapRGB has been removed.'), new he();
		}
	},
	shading: {
		get: function () {
			console.error(
				'THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.'
			);
		},
		set: function (e) {
			console.warn(
				'THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.'
			),
				(this.flatShading = e === Wc);
		}
	},
	stencilMask: {
		get: function () {
			return (
				console.warn(
					'THREE.' + this.type + ': .stencilMask has been removed. Use .stencilFuncMask instead.'
				),
				this.stencilFuncMask
			);
		},
		set: function (e) {
			console.warn(
				'THREE.' + this.type + ': .stencilMask has been removed. Use .stencilFuncMask instead.'
			),
				(this.stencilFuncMask = e);
		}
	}
});
Object.defineProperties(wn.prototype, {
	metal: {
		get: function () {
			return (
				console.warn(
					'THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.'
				),
				!1
			);
		},
		set: function () {
			console.warn(
				'THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead'
			);
		}
	}
});
Object.defineProperties(Ot.prototype, {
	derivatives: {
		get: function () {
			return (
				console.warn(
					'THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.'
				),
				this.extensions.derivatives
			);
		},
		set: function (e) {
			console.warn(
				'THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.'
			),
				(this.extensions.derivatives = e);
		}
	}
});
Object.assign(hh.prototype, {
	clearTarget: function (e, t, n, r) {
		console.warn(
			'THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.'
		),
			this.setRenderTarget(e),
			this.clear(t, n, r);
	},
	animate: function (e) {
		console.warn('THREE.WebGLRenderer: .animate() is now .setAnimationLoop().'),
			this.setAnimationLoop(e);
	},
	getCurrentRenderTarget: function () {
		return (
			console.warn('THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().'),
			this.getRenderTarget()
		);
	},
	getMaxAnisotropy: function () {
		return (
			console.warn(
				'THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().'
			),
			this.capabilities.getMaxAnisotropy()
		);
	},
	getPrecision: function () {
		return (
			console.warn('THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.'),
			this.capabilities.precision
		);
	},
	resetGLState: function () {
		return (
			console.warn('THREE.WebGLRenderer: .resetGLState() is now .state.reset().'),
			this.state.reset()
		);
	},
	supportsFloatTextures: function () {
		return (
			console.warn(
				"THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
			),
			this.extensions.get('OES_texture_float')
		);
	},
	supportsHalfFloatTextures: function () {
		return (
			console.warn(
				"THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
			),
			this.extensions.get('OES_texture_half_float')
		);
	},
	supportsStandardDerivatives: function () {
		return (
			console.warn(
				"THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
			),
			this.extensions.get('OES_standard_derivatives')
		);
	},
	supportsCompressedTextureS3TC: function () {
		return (
			console.warn(
				"THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
			),
			this.extensions.get('WEBGL_compressed_texture_s3tc')
		);
	},
	supportsCompressedTexturePVRTC: function () {
		return (
			console.warn(
				"THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
			),
			this.extensions.get('WEBGL_compressed_texture_pvrtc')
		);
	},
	supportsBlendMinMax: function () {
		return (
			console.warn(
				"THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
			),
			this.extensions.get('EXT_blend_minmax')
		);
	},
	supportsVertexTextures: function () {
		return (
			console.warn(
				'THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.'
			),
			this.capabilities.vertexTextures
		);
	},
	supportsInstancedArrays: function () {
		return (
			console.warn(
				"THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
			),
			this.extensions.get('ANGLE_instanced_arrays')
		);
	},
	enableScissorTest: function (e) {
		console.warn('THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().'),
			this.setScissorTest(e);
	},
	initMaterial: function () {
		console.warn('THREE.WebGLRenderer: .initMaterial() has been removed.');
	},
	addPrePlugin: function () {
		console.warn('THREE.WebGLRenderer: .addPrePlugin() has been removed.');
	},
	addPostPlugin: function () {
		console.warn('THREE.WebGLRenderer: .addPostPlugin() has been removed.');
	},
	updateShadowMap: function () {
		console.warn('THREE.WebGLRenderer: .updateShadowMap() has been removed.');
	},
	setFaceCulling: function () {
		console.warn('THREE.WebGLRenderer: .setFaceCulling() has been removed.');
	},
	allocTextureUnit: function () {
		console.warn('THREE.WebGLRenderer: .allocTextureUnit() has been removed.');
	},
	setTexture: function () {
		console.warn('THREE.WebGLRenderer: .setTexture() has been removed.');
	},
	setTexture2D: function () {
		console.warn('THREE.WebGLRenderer: .setTexture2D() has been removed.');
	},
	setTextureCube: function () {
		console.warn('THREE.WebGLRenderer: .setTextureCube() has been removed.');
	},
	getActiveMipMapLevel: function () {
		return (
			console.warn('THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().'),
			this.getActiveMipmapLevel()
		);
	}
});
Object.defineProperties(hh.prototype, {
	shadowMapEnabled: {
		get: function () {
			return this.shadowMap.enabled;
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.'),
				(this.shadowMap.enabled = e);
		}
	},
	shadowMapType: {
		get: function () {
			return this.shadowMap.type;
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.'),
				(this.shadowMap.type = e);
		}
	},
	shadowMapCullFace: {
		get: function () {
			console.warn(
				'THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.'
			);
		},
		set: function () {
			console.warn(
				'THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.'
			);
		}
	},
	context: {
		get: function () {
			return (
				console.warn('THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.'),
				this.getContext()
			);
		}
	}
});
Object.defineProperties(lh.prototype, {
	cullFace: {
		get: function () {
			console.warn(
				'THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.'
			);
		},
		set: function () {
			console.warn(
				'THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.'
			);
		}
	},
	renderReverseSided: {
		get: function () {
			console.warn(
				'THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.'
			);
		},
		set: function () {
			console.warn(
				'THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.'
			);
		}
	},
	renderSingleSided: {
		get: function () {
			console.warn(
				'THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.'
			);
		},
		set: function () {
			console.warn(
				'THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.'
			);
		}
	}
});
Object.defineProperties(Jr.prototype, {
	activeCubeFace: {
		set: function () {
			console.warn(
				'THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().'
			);
		}
	},
	activeMipMapLevel: {
		set: function () {
			console.warn(
				'THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().'
			);
		}
	}
});
Object.defineProperties(Jt.prototype, {
	wrapS: {
		get: function () {
			return (
				console.warn('THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.'), this.texture.wrapS
			);
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.'),
				(this.texture.wrapS = e);
		}
	},
	wrapT: {
		get: function () {
			return (
				console.warn('THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.'), this.texture.wrapT
			);
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.'),
				(this.texture.wrapT = e);
		}
	},
	magFilter: {
		get: function () {
			return (
				console.warn('THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'),
				this.texture.magFilter
			);
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'),
				(this.texture.magFilter = e);
		}
	},
	minFilter: {
		get: function () {
			return (
				console.warn('THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'),
				this.texture.minFilter
			);
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'),
				(this.texture.minFilter = e);
		}
	},
	anisotropy: {
		get: function () {
			return (
				console.warn('THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'),
				this.texture.anisotropy
			);
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'),
				(this.texture.anisotropy = e);
		}
	},
	offset: {
		get: function () {
			return (
				console.warn('THREE.WebGLRenderTarget: .offset is now .texture.offset.'),
				this.texture.offset
			);
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderTarget: .offset is now .texture.offset.'),
				(this.texture.offset = e);
		}
	},
	repeat: {
		get: function () {
			return (
				console.warn('THREE.WebGLRenderTarget: .repeat is now .texture.repeat.'),
				this.texture.repeat
			);
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderTarget: .repeat is now .texture.repeat.'),
				(this.texture.repeat = e);
		}
	},
	format: {
		get: function () {
			return (
				console.warn('THREE.WebGLRenderTarget: .format is now .texture.format.'),
				this.texture.format
			);
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderTarget: .format is now .texture.format.'),
				(this.texture.format = e);
		}
	},
	type: {
		get: function () {
			return (
				console.warn('THREE.WebGLRenderTarget: .type is now .texture.type.'), this.texture.type
			);
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderTarget: .type is now .texture.type.'), (this.texture.type = e);
		}
	},
	generateMipmaps: {
		get: function () {
			return (
				console.warn('THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.'),
				this.texture.generateMipmaps
			);
		},
		set: function (e) {
			console.warn('THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.'),
				(this.texture.generateMipmaps = e);
		}
	}
});
Object.defineProperties(Ul.prototype, {
	standing: {
		set: function () {
			console.warn('THREE.WebVRManager: .standing has been removed.');
		}
	},
	userHeight: {
		set: function () {
			console.warn('THREE.WebVRManager: .userHeight has been removed.');
		}
	}
});
Va.prototype.load = function (e) {
	console.warn('THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.');
	var t = this,
		n = new vl();
	return (
		n.load(e, function (r) {
			t.setBuffer(r);
		}),
		this
	);
};
Sh.prototype.getData = function () {
	return (
		console.warn('THREE.AudioAnalyser: .getData() is now .getFrequencyData().'),
		this.getFrequencyData()
	);
};
ma.prototype.updateCubeMap = function (e, t) {
	return console.warn('THREE.CubeCamera: .updateCubeMap() is now .update().'), this.update(e, t);
};
Kr.crossOrigin = void 0;
Kr.loadTexture = function (e, t, n, r) {
	console.warn(
		'THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.'
	);
	var i = new zu();
	i.setCrossOrigin(this.crossOrigin);
	var a = i.load(e, n, void 0, r);
	return t && (a.mapping = t), a;
};
Kr.loadTextureCube = function (e, t, n, r) {
	console.warn(
		'THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.'
	);
	var i = new $u();
	i.setCrossOrigin(this.crossOrigin);
	var a = i.load(e, n, void 0, r);
	return t && (a.mapping = t), a;
};
Kr.loadCompressedTexture = function () {
	console.error(
		'THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.'
	);
};
Kr.loadCompressedTextureCube = function () {
	console.error(
		'THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.'
	);
};
typeof __THREE_DEVTOOLS__ < 'u' &&
	__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('register', { detail: { revision: Sd } }));
var yl = function () {};
yl.prototype = {
	constructor: yl,
	parse: (function () {
		var e = new R(),
			t = new R(),
			n = new R(),
			r = new R(),
			i = new R(),
			a = new R();
		return function (o) {
			var u = o.geometry;
			if (!u.isBufferGeometry) return null;
			var l = u.getIndex().array,
				f = u.attributes.position.array,
				c = Math.floor(l.length / 3),
				h = 80,
				p = c * 2 + c * 3 * 4 * 4 + 80 + 4,
				d = new ArrayBuffer(p),
				m = new DataView(d);
			m.setUint32(h, c, !0), (h += 4);
			for (var v = 0, g = l.length; v < g; v += 3) {
				var x = 3 * l[v],
					M = 3 * l[v + 1],
					_ = 3 * l[v + 2];
				e.set(f[x], -f[x + 2], f[x + 1]),
					t.set(f[M], -f[M + 2], f[M + 1]),
					n.set(f[_], -f[_ + 2], f[_ + 1]),
					r.subVectors(t, e),
					i.subVectors(n, e),
					a.crossVectors(r, i).normalize(),
					m.setFloat32(h, a.x, !0),
					(h += 4),
					m.setFloat32(h, a.y, !0),
					(h += 4),
					m.setFloat32(h, a.z, !0),
					(h += 4),
					m.setFloat32(h, e.x, !0),
					(h += 4),
					m.setFloat32(h, e.y, !0),
					(h += 4),
					m.setFloat32(h, e.z, !0),
					(h += 4),
					m.setFloat32(h, t.x, !0),
					(h += 4),
					m.setFloat32(h, t.y, !0),
					(h += 4),
					m.setFloat32(h, t.z, !0),
					(h += 4),
					m.setFloat32(h, n.x, !0),
					(h += 4),
					m.setFloat32(h, n.y, !0),
					(h += 4),
					m.setFloat32(h, n.z, !0),
					(h += 4),
					m.setUint16(h, 0, !0),
					(h += 2);
			}
			return d;
		};
	})()
};
var $n, ht, O_, Qt, wl, Gr, Dh, Ml, Vr;
Dh = new wn({ color: new he(14013909) });
var F_ = `

        varying vec2 vUv;

        void main() {

            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

        }

    `,
	k_ = `

        uniform sampler2D theMap;
        varying vec2 vUv;

        void main() {

            float gray = texture2D( theMap, vUv ).g;

            vec3 finalColor = vec3( 1.0, 1.0, 1.0 );

            gl_FragColor = vec4( ( 1.0 - gray * 0.7 ) * finalColor, gray * 0.2 + 0.8 );

        }
    `;
Ml = new Ot({
	transparent: !0,
	vertexShader: F_,
	fragmentShader: k_,
	uniforms: { theMap: { value: null } }
});
function U_(e, t) {
	if (
		(($n = {
			litophaneWidth: (t == null ? void 0 : t.width) || 100,
			minThickness: (t == null ? void 0 : t.minThickness) || 0.32,
			maxThickness: (t == null ? void 0 : t.maxThickness) || 2,
			xyAngle: 0,
			zStartAngle: 90,
			zEndAngle: 90,
			invertImage: !0,
			realistic: !1
		}),
		(ht = e),
		ht.width < 2 || ht.height < 2)
	) {
		(ht = null), alert('Minimum image size is 2 pixels wide');
		return;
	}
	var n = Qt === void 0;
	if (n) {
		(Qt = document.createElement('canvas')), (Qt.width = ht.width), (Qt.height = ht.height);
		var r = ht.width * ht.height;
		wl = new Float32Array(r);
	}
	var i = Qt.getContext('2d');
	console.log(i), i.drawImage(ht, 0, 0);
	for (
		var a = i.getImageData(0, 0, ht.width, ht.height),
			s = a.data,
			o = $n.invertImage,
			u = ht.width,
			l = ht.height,
			f = 0,
			c = ht.width * (ht.height - 1),
			h = 0;
		h < l;
		h++
	) {
		for (var p = 0; p < u; p++) {
			var d = (s[f] + s[f + 1] + s[f + 2]) / 767;
			o && (d = 1 - d), (wl[c++] = d), (d *= 255), (s[f++] = d), (s[f++] = d), (s[f++] = d), f++;
		}
		c -= 2 * u;
	}
	i.putImageData(a, 0, 0), (Ml.uniforms.theMap.value = new ya(Qt));
	var m = Math.round(0.15 * window.innerWidth, 6),
		v = Math.round((m * ht.height) / ht.width, 6);
	return (
		(Qt.style.width = m + 'px'),
		(Qt.style.height = v + 'px'),
		(Qt.style.display = 'block'),
		(Qt.style.position = 'absolute'),
		(Qt.style.bottom = '0%'),
		(Qt.style.left = '0%'),
		n &&
			(document.body.appendChild(Qt),
			Gr && ((Gr = null), (Vr = null)),
			(Gr = B_($n.realistic ? Ml : Dh)),
			(Gr.matrixAutoUpdate = !1),
			Gr.updateMatrix()),
		V_(),
		Gr
	);
}
function B_(e) {
	var t = G_();
	return new wt(t, e);
}
function G_() {
	var e = ht.width,
		t = ht.height,
		n = e * 0.5,
		r = e * t,
		i = e - 1,
		a = t - 1,
		s = new ae(),
		o = [];
	Vr = new Float32Array(2 * r * 3);
	for (var u = [], l = [], f = 0, c = 1 / a, h = 1 / i, p = 0; p < 2; p++)
		for (var d = -p, m = 0, v = 0; v < t; v++) {
			for (var g = 0, x = 0; x < e; x++)
				(Vr[f++] = x - n), (Vr[f++] = v), (Vr[f++] = d), u.push(g, m), l.push(0, 0, 1), (g += h);
			m += c;
		}
	for (var p = 0; p < 2; p++)
		for (var v = 0; v < a; v++)
			for (var x = 0; x < i; x++) {
				var M = x + v * e + p * r,
					_ = M + 1,
					y = M + e,
					L = y + 1;
				p === 0 ? (o.push(M, _, y), o.push(_, L, y)) : (o.push(M, y, _), o.push(_, y, L));
			}
	for (var x = 0; x < i; x++) {
		var M = x,
			_ = M + r,
			y = M + 1,
			L = y + r;
		o.push(M, _, y), o.push(_, L, y);
	}
	for (var x = 0; x < i; x++) {
		var M = e * a + x,
			_ = M + 1,
			y = M + r,
			L = _ + r;
		o.push(M, _, y), o.push(_, L, y);
	}
	for (var v = 0; v < a; v++) {
		var M = v * e,
			_ = M + e,
			y = M + r,
			L = _ + r;
		o.push(M, _, y), o.push(_, L, y);
	}
	for (var v = 0; v < a; v++) {
		var M = v * e + i,
			_ = M + e,
			y = _ + r,
			L = M + r;
		o.push(M, y, _), o.push(M, L, y);
	}
	return (
		s.setIndex(o),
		s.addAttribute('position', new Ie(Vr, 3)),
		s.addAttribute('normal', new re(l, 3)),
		s.addAttribute('uv', new re(u, 2)),
		s
	);
}
function V_() {
	if (ht) {
		H_(
			ht.width,
			ht.height,
			wl,
			Vr,
			$n.litophaneWidth,
			$n.xyAngle,
			$n.zStartAngle,
			$n.zEndAngle,
			$n.maxThickness,
			$n.minThickness
		);
		var e = Gr.geometry;
		e.computeBoundingBox(), (e.attributes.position.needsUpdate = !0), e.computeVertexNormals();
	}
}
function H_(e, t, n, r, i, a, s, o, u, l) {
	var f = i,
		c = f * 0.5,
		h = ht.height / ht.width,
		p = f * h,
		d = (a * Math.PI) / 180,
		m = d / (e - 1),
		v = -d * 0.5,
		g = 0;
	m !== 0 && (g = c / Math.sin(Math.min(Math.abs(v), Math.PI * 0.5)));
	var x = ((o - s) * Math.PI) / 180 / (t - 1),
		M = (s * Math.PI) / 180;
	if ((x < 0 && ((M = (o * Math.PI) / 180), (x = -x)), u < l)) {
		var _ = u;
		(u = l), (l = _);
	}
	for (var y = g - u, L = u - l, C = g - L, T = p / (t - 1), P = 0, k = 0, I = 0; I < 2; I++)
		for (var w = M - Math.PI * 0.5, U = 0, N = 0; N < t; N++) {
			for (var D = v, B = 0; B < e; B++) {
				var q = 0,
					H = 0,
					j = 1;
				if ((x !== 0 && m !== 0 && (j *= Math.cos(w)), I === 0)) {
					var K = n[k++];
					j *= K * L + C;
				} else j *= y;
				m !== 0
					? ((q = Math.sin(D) * j), (H = Math.cos(D) * j - g), (D += m))
					: ((q = f * (B / e - 0.5)), (H = j)),
					(r[P++] = q),
					(r[P++] = U),
					(r[P++] = H);
			}
			(w += x), (U += T);
		}
}
function W_(e) {
	var t = new yl(),
		n = t.parse(e, { binary: !0 }),
		r = window.document.createElement('a');
	(r.href = window.URL.createObjectURL(new Blob([n]), { type: 'model/stl' })),
		(r.download = 'Lithophane_' + O_ + '.stl'),
		document.body.appendChild(r),
		r.click(),
		document.body.removeChild(r);
}
var q_ = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
	Xn = function (e) {
		return typeof e == 'string' ? e.length > 0 : typeof e == 'number';
	},
	Mt = function (e, t, n) {
		return (
			t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n + 0
		);
	},
	sn = function (e, t, n) {
		return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e > t ? e : t;
	},
	Nh = function (e) {
		return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
	},
	yc = function (e) {
		return { r: sn(e.r, 0, 255), g: sn(e.g, 0, 255), b: sn(e.b, 0, 255), a: sn(e.a) };
	},
	bu = function (e) {
		return { r: Mt(e.r), g: Mt(e.g), b: Mt(e.b), a: Mt(e.a, 3) };
	},
	j_ = /^#([0-9a-f]{3,8})$/i,
	Ds = function (e) {
		var t = e.toString(16);
		return t.length < 2 ? '0' + t : t;
	},
	Oh = function (e) {
		var t = e.r,
			n = e.g,
			r = e.b,
			i = e.a,
			a = Math.max(t, n, r),
			s = a - Math.min(t, n, r),
			o = s ? (a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s) : 0;
		return { h: 60 * (o < 0 ? o + 6 : o), s: a ? (s / a) * 100 : 0, v: (a / 255) * 100, a: i };
	},
	Fh = function (e) {
		var t = e.h,
			n = e.s,
			r = e.v,
			i = e.a;
		(t = (t / 360) * 6), (n /= 100), (r /= 100);
		var a = Math.floor(t),
			s = r * (1 - n),
			o = r * (1 - (t - a) * n),
			u = r * (1 - (1 - t + a) * n),
			l = a % 6;
		return {
			r: 255 * [r, o, s, s, u, r][l],
			g: 255 * [u, r, r, o, s, s][l],
			b: 255 * [s, s, u, r, r, o][l],
			a: i
		};
	},
	wc = function (e) {
		return { h: Nh(e.h), s: sn(e.s, 0, 100), l: sn(e.l, 0, 100), a: sn(e.a) };
	},
	Mc = function (e) {
		return { h: Mt(e.h), s: Mt(e.s), l: Mt(e.l), a: Mt(e.a, 3) };
	},
	Ec = function (e) {
		return Fh(
			((n = (t = e).s),
			{
				h: t.h,
				s: (n *= ((r = t.l) < 50 ? r : 100 - r) / 100) > 0 ? ((2 * n) / (r + n)) * 100 : 0,
				v: r + n,
				a: t.a
			})
		);
		var t, n, r;
	},
	la = function (e) {
		return {
			h: (t = Oh(e)).h,
			s:
				(i = ((200 - (n = t.s)) * (r = t.v)) / 100) > 0 && i < 200
					? ((n * r) / 100 / (i <= 100 ? i : 200 - i)) * 100
					: 0,
			l: i / 2,
			a: t.a
		};
		var t, n, r, i;
	},
	K_ =
		/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
	J_ =
		/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
	X_ =
		/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
	Y_ =
		/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
	Sc = {
		string: [
			[
				function (e) {
					var t = j_.exec(e);
					return t
						? (e = t[1]).length <= 4
							? {
									r: parseInt(e[0] + e[0], 16),
									g: parseInt(e[1] + e[1], 16),
									b: parseInt(e[2] + e[2], 16),
									a: e.length === 4 ? Mt(parseInt(e[3] + e[3], 16) / 255, 2) : 1
								}
							: e.length === 6 || e.length === 8
								? {
										r: parseInt(e.substr(0, 2), 16),
										g: parseInt(e.substr(2, 2), 16),
										b: parseInt(e.substr(4, 2), 16),
										a: e.length === 8 ? Mt(parseInt(e.substr(6, 2), 16) / 255, 2) : 1
									}
								: null
						: null;
				},
				'hex'
			],
			[
				function (e) {
					var t = X_.exec(e) || Y_.exec(e);
					return t
						? t[2] !== t[4] || t[4] !== t[6]
							? null
							: yc({
									r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
									g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
									b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
									a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
								})
						: null;
				},
				'rgb'
			],
			[
				function (e) {
					var t = K_.exec(e) || J_.exec(e);
					if (!t) return null;
					var n,
						r,
						i = wc({
							h: ((n = t[1]), (r = t[2]), r === void 0 && (r = 'deg'), Number(n) * (q_[r] || 1)),
							s: Number(t[3]),
							l: Number(t[4]),
							a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
						});
					return Ec(i);
				},
				'hsl'
			]
		],
		object: [
			[
				function (e) {
					var t = e.r,
						n = e.g,
						r = e.b,
						i = e.a,
						a = i === void 0 ? 1 : i;
					return Xn(t) && Xn(n) && Xn(r)
						? yc({ r: Number(t), g: Number(n), b: Number(r), a: Number(a) })
						: null;
				},
				'rgb'
			],
			[
				function (e) {
					var t = e.h,
						n = e.s,
						r = e.l,
						i = e.a,
						a = i === void 0 ? 1 : i;
					if (!Xn(t) || !Xn(n) || !Xn(r)) return null;
					var s = wc({ h: Number(t), s: Number(n), l: Number(r), a: Number(a) });
					return Ec(s);
				},
				'hsl'
			],
			[
				function (e) {
					var t = e.h,
						n = e.s,
						r = e.v,
						i = e.a,
						a = i === void 0 ? 1 : i;
					if (!Xn(t) || !Xn(n) || !Xn(r)) return null;
					var s = (function (o) {
						return { h: Nh(o.h), s: sn(o.s, 0, 100), v: sn(o.v, 0, 100), a: sn(o.a) };
					})({ h: Number(t), s: Number(n), v: Number(r), a: Number(a) });
					return Fh(s);
				},
				'hsv'
			]
		]
	},
	Lc = function (e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n][0](e);
			if (r) return [r, t[n][1]];
		}
		return [null, void 0];
	},
	Z_ = function (e) {
		return typeof e == 'string'
			? Lc(e.trim(), Sc.string)
			: typeof e == 'object' && e !== null
				? Lc(e, Sc.object)
				: [null, void 0];
	},
	yu = function (e, t) {
		var n = la(e);
		return { h: n.h, s: sn(n.s + 100 * t, 0, 100), l: n.l, a: n.a };
	},
	wu = function (e) {
		return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
	},
	Tc = function (e, t) {
		var n = la(e);
		return { h: n.h, s: n.s, l: sn(n.l + 100 * t, 0, 100), a: n.a };
	},
	Ac = (function () {
		function e(t) {
			(this.parsed = Z_(t)[0]), (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
		}
		return (
			(e.prototype.isValid = function () {
				return this.parsed !== null;
			}),
			(e.prototype.brightness = function () {
				return Mt(wu(this.rgba), 2);
			}),
			(e.prototype.isDark = function () {
				return wu(this.rgba) < 0.5;
			}),
			(e.prototype.isLight = function () {
				return wu(this.rgba) >= 0.5;
			}),
			(e.prototype.toHex = function () {
				return (
					(t = bu(this.rgba)),
					(n = t.r),
					(r = t.g),
					(i = t.b),
					(s = (a = t.a) < 1 ? Ds(Mt(255 * a)) : ''),
					'#' + Ds(n) + Ds(r) + Ds(i) + s
				);
				var t, n, r, i, a, s;
			}),
			(e.prototype.toRgb = function () {
				return bu(this.rgba);
			}),
			(e.prototype.toRgbString = function () {
				return (
					(t = bu(this.rgba)),
					(n = t.r),
					(r = t.g),
					(i = t.b),
					(a = t.a) < 1
						? 'rgba(' + n + ', ' + r + ', ' + i + ', ' + a + ')'
						: 'rgb(' + n + ', ' + r + ', ' + i + ')'
				);
				var t, n, r, i, a;
			}),
			(e.prototype.toHsl = function () {
				return Mc(la(this.rgba));
			}),
			(e.prototype.toHslString = function () {
				return (
					(t = Mc(la(this.rgba))),
					(n = t.h),
					(r = t.s),
					(i = t.l),
					(a = t.a) < 1
						? 'hsla(' + n + ', ' + r + '%, ' + i + '%, ' + a + ')'
						: 'hsl(' + n + ', ' + r + '%, ' + i + '%)'
				);
				var t, n, r, i, a;
			}),
			(e.prototype.toHsv = function () {
				return (t = Oh(this.rgba)), { h: Mt(t.h), s: Mt(t.s), v: Mt(t.v), a: Mt(t.a, 3) };
				var t;
			}),
			(e.prototype.invert = function () {
				return zt({ r: 255 - (t = this.rgba).r, g: 255 - t.g, b: 255 - t.b, a: t.a });
				var t;
			}),
			(e.prototype.saturate = function (t) {
				return t === void 0 && (t = 0.1), zt(yu(this.rgba, t));
			}),
			(e.prototype.desaturate = function (t) {
				return t === void 0 && (t = 0.1), zt(yu(this.rgba, -t));
			}),
			(e.prototype.grayscale = function () {
				return zt(yu(this.rgba, -1));
			}),
			(e.prototype.lighten = function (t) {
				return t === void 0 && (t = 0.1), zt(Tc(this.rgba, t));
			}),
			(e.prototype.darken = function (t) {
				return t === void 0 && (t = 0.1), zt(Tc(this.rgba, -t));
			}),
			(e.prototype.rotate = function (t) {
				return t === void 0 && (t = 15), this.hue(this.hue() + t);
			}),
			(e.prototype.alpha = function (t) {
				return typeof t == 'number'
					? zt({ r: (n = this.rgba).r, g: n.g, b: n.b, a: t })
					: Mt(this.rgba.a, 3);
				var n;
			}),
			(e.prototype.hue = function (t) {
				var n = la(this.rgba);
				return typeof t == 'number' ? zt({ h: t, s: n.s, l: n.l, a: n.a }) : Mt(n.h);
			}),
			(e.prototype.isEqual = function (t) {
				return this.toHex() === zt(t).toHex();
			}),
			e
		);
	})(),
	zt = function (e) {
		return e instanceof Ac ? e : new Ac(e);
	};
function Rc(e) {
	let t;
	return {
		c() {
			(t = te('input')), this.h();
		},
		l(n) {
			(t = ne(n, 'INPUT', { type: !0, name: !0 })), this.h();
		},
		h() {
			G(t, 'type', 'hidden'), G(t, 'name', e[3]), (t.value = e[0]);
		},
		m(n, r) {
			Ve(n, t, r);
		},
		p(n, r) {
			r & 8 && G(t, 'name', n[3]), r & 1 && (t.value = n[0]);
		},
		d(n) {
			n && ee(t);
		}
	};
}
function Q_(e) {
	let t,
		n,
		r,
		i,
		a,
		s,
		o,
		u,
		l,
		f = e[3] && Rc(e);
	return {
		c() {
			(t = te('div')),
				(n = te('div')),
				(r = Fe()),
				(i = te('div')),
				(s = Fe()),
				f && f.c(),
				(o = fn()),
				this.h();
		},
		l(c) {
			t = ne(c, 'DIV', {
				class: !0,
				role: !0,
				'aria-orientation': !0,
				'aria-valuemax': !0,
				'aria-valuemin': !0,
				'aria-valuenow': !0,
				'aria-valuetext': !0,
				'aria-label': !0,
				'aria-labelledby': !0,
				'aria-controls': !0,
				tabindex: !0
			});
			var h = Ge(t);
			(n = ne(h, 'DIV', { class: !0 })),
				Ge(n).forEach(ee),
				(r = ke(h)),
				(i = ne(h, 'DIV', { class: !0 })),
				Ge(i).forEach(ee),
				h.forEach(ee),
				(s = ke(c)),
				f && f.l(c),
				(o = fn()),
				this.h();
		},
		h() {
			G(n, 'class', 'track svelte-x7oaj0'),
				G(i, 'class', 'thumb svelte-x7oaj0'),
				G(t, 'class', 'slider svelte-x7oaj0'),
				G(t, 'role', 'slider'),
				G(t, 'aria-orientation', e[4]),
				G(t, 'aria-valuemax', e[11]),
				G(t, 'aria-valuemin', e[10]),
				G(t, 'aria-valuenow', e[0]),
				G(t, 'aria-valuetext', (a = e[2](e[0]))),
				G(t, 'aria-label', e[7]),
				G(t, 'aria-labelledby', e[8]),
				G(t, 'aria-controls', e[9]),
				G(t, 'tabindex', '0'),
				Li(t, 'reverse', e[5]),
				Rt(t, '--position', e[12]);
		},
		m(c, h) {
			Ve(c, t, h),
				Q(t, n),
				Q(t, r),
				Q(t, i),
				e[22](t),
				Ve(c, s, h),
				f && f.m(c, h),
				Ve(c, o, h),
				u ||
					((l = [
						Ke(window, 'mousemove', e[15]),
						Ke(window, 'mouseup', e[16]),
						Ke(t, 'keydown', e[13]),
						Ke(
							t,
							'mousedown',
							Zh(function () {
								mi(e[6] ? void 0 : e[14]) && (e[6] ? void 0 : e[14]).apply(this, arguments);
							})
						),
						Ke(
							t,
							'touchstart',
							zn(function () {
								mi(e[6] ? void 0 : e[17]) && (e[6] ? void 0 : e[17]).apply(this, arguments);
							}),
							{ passive: !1 }
						),
						Ke(
							t,
							'touchmove',
							zn(function () {
								mi(e[6] ? void 0 : e[17]) && (e[6] ? void 0 : e[17]).apply(this, arguments);
							}),
							{ passive: !1 }
						),
						Ke(
							t,
							'touchend',
							zn(function () {
								mi(e[6] ? void 0 : e[17]) && (e[6] ? void 0 : e[17]).apply(this, arguments);
							}),
							{ passive: !1 }
						)
					]),
					(u = !0));
		},
		p(c, [h]) {
			(e = c),
				h & 16 && G(t, 'aria-orientation', e[4]),
				h & 2048 && G(t, 'aria-valuemax', e[11]),
				h & 1024 && G(t, 'aria-valuemin', e[10]),
				h & 1 && G(t, 'aria-valuenow', e[0]),
				h & 5 && a !== (a = e[2](e[0])) && G(t, 'aria-valuetext', a),
				h & 128 && G(t, 'aria-label', e[7]),
				h & 256 && G(t, 'aria-labelledby', e[8]),
				h & 512 && G(t, 'aria-controls', e[9]),
				h & 32 && Li(t, 'reverse', e[5]),
				h & 4096 && Rt(t, '--position', e[12]),
				e[3]
					? f
						? f.p(e, h)
						: ((f = Rc(e)), f.c(), f.m(o.parentNode, o))
					: f && (f.d(1), (f = null));
		},
		i: Wt,
		o: Wt,
		d(c) {
			c && (ee(t), ee(s), ee(o)), e[22](null), f && f.d(c), (u = !1), wr(l);
		}
	};
}
function $_(e, t, n) {
	let r,
		i,
		a,
		s,
		{ min: o = 0 } = t,
		{ max: u = 100 } = t,
		{ step: l = 1 } = t,
		{ value: f = 50 } = t,
		{ ariaValueText: c = (D) => D.toString() } = t,
		{ name: h = void 0 } = t,
		{ direction: p = 'horizontal' } = t,
		{ reverse: d = !1 } = t,
		{ keyboardOnly: m = !1 } = t,
		{ slider: v = void 0 } = t,
		{ ariaLabel: g = void 0 } = t,
		{ ariaLabelledBy: x = void 0 } = t,
		{ ariaControls: M = void 0 } = t,
		{ isDragging: _ = !1 } = t;
	const y = Za();
	function L(D) {
		const B = 1 / a,
			q = Math.round(D * B) / B;
		return Math.max(r, Math.min(i, q));
	}
	function C(D) {
		const B = D.shiftKey ? a * 10 : a;
		D.key === 'ArrowUp' || D.key === 'ArrowRight'
			? (n(0, (f += B)), D.preventDefault())
			: D.key === 'ArrowDown' || D.key === 'ArrowLeft'
				? (n(0, (f -= B)), D.preventDefault())
				: D.key === 'Home'
					? (n(0, (f = r)), D.preventDefault())
					: D.key === 'End'
						? (n(0, (f = i)), D.preventDefault())
						: D.key === 'PageUp'
							? (n(0, (f += a * 10)), D.preventDefault())
							: D.key === 'PageDown' && (n(0, (f -= a * 10)), D.preventDefault()),
			n(0, (f = L(f))),
			y('input', f);
	}
	const T = {
		horizontal: { clientSize: 'clientWidth', offset: 'left', client: 'clientX' },
		vertical: { clientSize: 'clientHeight', offset: 'top', client: 'clientY' }
	};
	function P(D) {
		const B = (v == null ? void 0 : v[T[p].clientSize]) || 120,
			q = (v == null ? void 0 : v.getBoundingClientRect()[T[p].offset]) || 0;
		let H = D[T[p].client] - q;
		p === 'vertical' && (H = -1 * H + B),
			d ? n(0, (f = i - (H / B) * (i - r))) : n(0, (f = (H / B) * (i - r) + r)),
			n(0, (f = L(f))),
			y('input', f);
	}
	function k(D) {
		P(D), n(18, (_ = !0));
	}
	function I(D) {
		_ && P(D);
	}
	function w() {
		n(18, (_ = !1));
	}
	function U(D) {
		P({ clientX: D.changedTouches[0].clientX, clientY: D.changedTouches[0].clientY });
	}
	function N(D) {
		Nt[D ? 'unshift' : 'push'](() => {
			(v = D), n(1, v);
		});
	}
	return (
		(e.$$set = (D) => {
			'min' in D && n(19, (o = D.min)),
				'max' in D && n(20, (u = D.max)),
				'step' in D && n(21, (l = D.step)),
				'value' in D && n(0, (f = D.value)),
				'ariaValueText' in D && n(2, (c = D.ariaValueText)),
				'name' in D && n(3, (h = D.name)),
				'direction' in D && n(4, (p = D.direction)),
				'reverse' in D && n(5, (d = D.reverse)),
				'keyboardOnly' in D && n(6, (m = D.keyboardOnly)),
				'slider' in D && n(1, (v = D.slider)),
				'ariaLabel' in D && n(7, (g = D.ariaLabel)),
				'ariaLabelledBy' in D && n(8, (x = D.ariaLabelledBy)),
				'ariaControls' in D && n(9, (M = D.ariaControls)),
				'isDragging' in D && n(18, (_ = D.isDragging));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 524288 && n(10, (r = typeof o == 'string' ? parseFloat(o) : o)),
				e.$$.dirty & 1048576 && n(11, (i = typeof u == 'string' ? parseFloat(u) : u)),
				e.$$.dirty & 2097152 && (a = typeof l == 'string' ? parseFloat(l) : l),
				e.$$.dirty & 3073 && n(12, (s = (((f - r) / (i - r)) * 1).toFixed(4)));
		}),
		[f, v, c, h, p, d, m, g, x, M, r, i, s, C, k, I, w, U, _, o, u, l, N]
	);
}
class Ro extends En {
	constructor(t) {
		super(),
			Sn(this, t, $_, Q_, Mn, {
				min: 19,
				max: 20,
				step: 21,
				value: 0,
				ariaValueText: 2,
				name: 3,
				direction: 4,
				reverse: 5,
				keyboardOnly: 6,
				slider: 1,
				ariaLabel: 7,
				ariaLabelledBy: 8,
				ariaControls: 9,
				isDragging: 18
			});
	}
}
function z_(e) {
	let t, n, r, i, a, s, o, u, l, f, c, h, p;
	var d = e[2].pickerIndicator;
	function m(_, y) {
		return { props: { pos: _[6], isDark: _[3] } };
	}
	d && (n = cn(d, m(e)));
	function v(_) {
		e[13](_);
	}
	let g = { keyboardOnly: !0, ariaValueText: ex, ariaLabel: 'saturation color' };
	e[0] !== void 0 && (g.value = e[0]), (a = new Ro({ props: g })), Nt.push(() => yn(a, 'value', v));
	function x(_) {
		e[14](_);
	}
	let M = {
		keyboardOnly: !0,
		ariaValueText: tx,
		direction: 'vertical',
		ariaLabel: 'brightness color'
	};
	return (
		e[1] !== void 0 && (M.value = e[1]),
		(l = new Ro({ props: M })),
		Nt.push(() => yn(l, 'value', x)),
		{
			c() {
				(t = te('div')),
					n && gt(n.$$.fragment),
					(r = Fe()),
					(i = te('div')),
					gt(a.$$.fragment),
					(o = Fe()),
					(u = te('div')),
					gt(l.$$.fragment),
					this.h();
			},
			l(_) {
				t = ne(_, 'DIV', { class: !0 });
				var y = Ge(t);
				n && Vt(n.$$.fragment, y), (r = ke(y)), (i = ne(y, 'DIV', { class: !0 }));
				var L = Ge(i);
				Vt(a.$$.fragment, L), L.forEach(ee), (o = ke(y)), (u = ne(y, 'DIV', { class: !0 }));
				var C = Ge(u);
				Vt(l.$$.fragment, C), C.forEach(ee), y.forEach(ee), this.h();
			},
			h() {
				G(i, 'class', 's svelte-amfbfx'),
					Rt(i, '--pos-y', e[6].y),
					G(u, 'class', 'v svelte-amfbfx'),
					Rt(u, '--pos-x', e[6].x),
					G(t, 'class', 'picker svelte-amfbfx'),
					Rt(t, '--picker-color-bg', e[5]);
			},
			m(_, y) {
				Ve(_, t, y),
					n && _t(n, t, null),
					Q(t, r),
					Q(t, i),
					_t(a, i, null),
					Q(t, o),
					Q(t, u),
					_t(l, u, null),
					e[15](t),
					(c = !0),
					h ||
						((p = [
							Ke(window, 'mouseup', e[8]),
							Ke(window, 'mousedown', e[10]),
							Ke(window, 'mousemove', e[9]),
							Ke(t, 'mousedown', zn(e[7])),
							Ke(t, 'touchstart', e[11], { passive: !1 }),
							Ke(t, 'touchmove', zn(e[11]), { passive: !1 }),
							Ke(t, 'touchend', e[11], { passive: !1 })
						]),
						(h = !0));
			},
			p(_, [y]) {
				if (y & 4 && d !== (d = _[2].pickerIndicator)) {
					if (n) {
						on();
						const T = n;
						$e(T.$$.fragment, 1, 0, () => {
							xt(T, 1);
						}),
							un();
					}
					d
						? ((n = cn(d, m(_))), gt(n.$$.fragment), qe(n.$$.fragment, 1), _t(n, t, r))
						: (n = null);
				} else if (d) {
					const T = {};
					y & 64 && (T.pos = _[6]), y & 8 && (T.isDark = _[3]), n.$set(T);
				}
				const L = {};
				!s && y & 1 && ((s = !0), (L.value = _[0]), _r(() => (s = !1))),
					a.$set(L),
					y & 64 && Rt(i, '--pos-y', _[6].y);
				const C = {};
				!f && y & 2 && ((f = !0), (C.value = _[1]), _r(() => (f = !1))),
					l.$set(C),
					y & 64 && Rt(u, '--pos-x', _[6].x),
					y & 32 && Rt(t, '--picker-color-bg', _[5]);
			},
			i(_) {
				c || (n && qe(n.$$.fragment, _), qe(a.$$.fragment, _), qe(l.$$.fragment, _), (c = !0));
			},
			o(_) {
				n && $e(n.$$.fragment, _), $e(a.$$.fragment, _), $e(l.$$.fragment, _), (c = !1);
			},
			d(_) {
				_ && ee(t), n && xt(n), xt(a), xt(l), e[15](null), (h = !1), wr(p);
			}
		}
	);
}
function Ns(e, t, n) {
	return Math.min(Math.max(t, e), n);
}
const ex = (e) => `${e}%`,
	tx = (e) => `${e}%`;
function nx(e, t, n) {
	const r = Za();
	let { components: i } = t,
		{ h: a } = t,
		{ s } = t,
		{ v: o } = t,
		{ isDark: u } = t,
		l,
		f = !1,
		c,
		h = { x: 100, y: 0 };
	function p(L) {
		const { width: C, left: T, height: P, top: k } = l.getBoundingClientRect(),
			I = { x: Ns(L.clientX - T, 0, C), y: Ns(L.clientY - k, 0, P) };
		n(0, (s = Ns(I.x / C, 0, 1) * 100)), n(1, (o = Ns((P - I.y) / P, 0, 1) * 100));
	}
	function d(L) {
		L.button === 0 && ((f = !0), p(L));
	}
	function m() {
		f = !1;
	}
	function v(L) {
		f && p(L);
	}
	function g(L) {
		L.target.isSameNode(l);
	}
	function x(L) {
		L.preventDefault(), p(L.changedTouches[0]);
	}
	function M(L) {
		(s = L), n(0, s);
	}
	function _(L) {
		(o = L), n(1, o);
	}
	function y(L) {
		Nt[L ? 'unshift' : 'push'](() => {
			(l = L), n(4, l);
		});
	}
	return (
		(e.$$set = (L) => {
			'components' in L && n(2, (i = L.components)),
				'h' in L && n(12, (a = L.h)),
				's' in L && n(0, (s = L.s)),
				'v' in L && n(1, (o = L.v)),
				'isDark' in L && n(3, (u = L.isDark));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 4096 &&
				typeof a == 'number' &&
				n(5, (c = zt({ h: a, s: 100, v: 100, a: 1 }).toHex())),
				e.$$.dirty & 19 &&
					typeof s == 'number' &&
					typeof o == 'number' &&
					l &&
					n(6, (h = { x: s, y: 100 - o })),
				e.$$.dirty & 3 && r('input', { s, v: o });
		}),
		[s, o, i, u, l, c, h, d, m, v, g, x, a, M, _, y]
	);
}
class rx extends En {
	constructor(t) {
		super(), Sn(this, t, nx, z_, Mn, { components: 2, h: 12, s: 0, v: 1, isDark: 3 });
	}
}
function ix(e) {
	let t;
	return {
		c() {
			(t = te('div')), this.h();
		},
		l(n) {
			(t = ne(n, 'DIV', { class: !0 })), Ge(t).forEach(ee), this.h();
		},
		h() {
			G(t, 'class', 'picker-indicator svelte-i5mg2p'),
				Li(t, 'is-dark', e[1]),
				Rt(t, '--pos-x', e[0].x),
				Rt(t, '--pos-y', e[0].y);
		},
		m(n, r) {
			Ve(n, t, r);
		},
		p(n, [r]) {
			r & 2 && Li(t, 'is-dark', n[1]),
				r & 1 && Rt(t, '--pos-x', n[0].x),
				r & 1 && Rt(t, '--pos-y', n[0].y);
		},
		i: Wt,
		o: Wt,
		d(n) {
			n && ee(t);
		}
	};
}
function ax(e, t, n) {
	let { pos: r } = t,
		{ isDark: i } = t;
	return (
		(e.$$set = (a) => {
			'pos' in a && n(0, (r = a.pos)), 'isDark' in a && n(1, (i = a.isDark));
		}),
		[r, i]
	);
}
class sx extends En {
	constructor(t) {
		super(), Sn(this, t, ax, ix, Mn, { pos: 0, isDark: 1 });
	}
}
function ox(e) {
	let t, n, r, i, a, s, o, u, l, f;
	return {
		c() {
			(t = te('input')), (r = Fe()), (i = te('input')), (s = Fe()), (o = te('input')), this.h();
		},
		l(c) {
			(t = ne(c, 'INPUT', { 'aria-label': !0, type: !0, min: !0, max: !0, class: !0 })),
				(r = ke(c)),
				(i = ne(c, 'INPUT', { 'aria-label': !0, type: !0, min: !0, max: !0, class: !0 })),
				(s = ke(c)),
				(o = ne(c, 'INPUT', { 'aria-label': !0, type: !0, min: !0, max: !0, class: !0 })),
				this.h();
		},
		h() {
			G(t, 'aria-label', (n = e[4].label.h)),
				(t.value = e[9]),
				G(t, 'type', 'number'),
				G(t, 'min', '0'),
				G(t, 'max', '360'),
				G(t, 'class', 'svelte-p68edl'),
				G(i, 'aria-label', (a = e[4].label.s)),
				(i.value = e[8]),
				G(i, 'type', 'number'),
				G(i, 'min', '0'),
				G(i, 'max', '100'),
				G(i, 'class', 'svelte-p68edl'),
				G(o, 'aria-label', (u = e[4].label.v)),
				(o.value = e[7]),
				G(o, 'type', 'number'),
				G(o, 'min', '0'),
				G(o, 'max', '100'),
				G(o, 'class', 'svelte-p68edl');
		},
		m(c, h) {
			Ve(c, t, h),
				Ve(c, r, h),
				Ve(c, i, h),
				Ve(c, s, h),
				Ve(c, o, h),
				l ||
					((f = [
						Ke(t, 'input', e[12]('h')),
						Ke(i, 'input', e[12]('s')),
						Ke(o, 'input', e[12]('v'))
					]),
					(l = !0));
		},
		p(c, h) {
			h & 16 && n !== (n = c[4].label.h) && G(t, 'aria-label', n),
				h & 512 && t.value !== c[9] && (t.value = c[9]),
				h & 16 && a !== (a = c[4].label.s) && G(i, 'aria-label', a),
				h & 256 && i.value !== c[8] && (i.value = c[8]),
				h & 16 && u !== (u = c[4].label.v) && G(o, 'aria-label', u),
				h & 128 && o.value !== c[7] && (o.value = c[7]);
		},
		d(c) {
			c && (ee(t), ee(r), ee(i), ee(s), ee(o)), (l = !1), wr(f);
		}
	};
}
function ux(e) {
	let t, n, r, i, a, s, o, u, l, f, c, h, p;
	return {
		c() {
			(t = te('input')), (i = Fe()), (a = te('input')), (u = Fe()), (l = te('input')), this.h();
		},
		l(d) {
			(t = ne(d, 'INPUT', { 'aria-label': !0, type: !0, min: !0, max: !0, class: !0 })),
				(i = ke(d)),
				(a = ne(d, 'INPUT', { 'aria-label': !0, type: !0, min: !0, max: !0, class: !0 })),
				(u = ke(d)),
				(l = ne(d, 'INPUT', { 'aria-label': !0, type: !0, min: !0, max: !0, class: !0 })),
				this.h();
		},
		h() {
			G(t, 'aria-label', (n = e[4].label.r)),
				(t.value = r = e[0].r),
				G(t, 'type', 'number'),
				G(t, 'min', '0'),
				G(t, 'max', '255'),
				G(t, 'class', 'svelte-p68edl'),
				G(a, 'aria-label', (s = e[4].label.g)),
				(a.value = o = e[0].g),
				G(a, 'type', 'number'),
				G(a, 'min', '0'),
				G(a, 'max', '255'),
				G(a, 'class', 'svelte-p68edl'),
				G(l, 'aria-label', (f = e[4].label.b)),
				(l.value = c = e[0].b),
				G(l, 'type', 'number'),
				G(l, 'min', '0'),
				G(l, 'max', '255'),
				G(l, 'class', 'svelte-p68edl');
		},
		m(d, m) {
			Ve(d, t, m),
				Ve(d, i, m),
				Ve(d, a, m),
				Ve(d, u, m),
				Ve(d, l, m),
				h ||
					((p = [
						Ke(t, 'input', e[11]('r')),
						Ke(a, 'input', e[11]('g')),
						Ke(l, 'input', e[11]('b'))
					]),
					(h = !0));
		},
		p(d, m) {
			m & 16 && n !== (n = d[4].label.r) && G(t, 'aria-label', n),
				m & 1 && r !== (r = d[0].r) && t.value !== r && (t.value = r),
				m & 16 && s !== (s = d[4].label.g) && G(a, 'aria-label', s),
				m & 1 && o !== (o = d[0].g) && a.value !== o && (a.value = o),
				m & 16 && f !== (f = d[4].label.b) && G(l, 'aria-label', f),
				m & 1 && c !== (c = d[0].b) && l.value !== c && (l.value = c);
		},
		d(d) {
			d && (ee(t), ee(i), ee(a), ee(u), ee(l)), (h = !1), wr(p);
		}
	};
}
function lx(e) {
	let t, n, r, i;
	return {
		c() {
			(t = te('input')), this.h();
		},
		l(a) {
			(t = ne(a, 'INPUT', { 'aria-label': !0, class: !0 })), this.h();
		},
		h() {
			G(t, 'aria-label', (n = e[4].label.hex)),
				(t.value = e[1]),
				G(t, 'class', 'svelte-p68edl'),
				Rt(t, 'flex', 3);
		},
		m(a, s) {
			Ve(a, t, s), r || ((i = Ke(t, 'input', e[10])), (r = !0));
		},
		p(a, s) {
			s & 16 && n !== (n = a[4].label.hex) && G(t, 'aria-label', n),
				s & 2 && t.value !== a[1] && (t.value = a[1]);
		},
		d(a) {
			a && ee(t), (r = !1), i();
		}
	};
}
function Cc(e) {
	let t, n, r, i;
	return {
		c() {
			(t = te('input')), this.h();
		},
		l(a) {
			(t = ne(a, 'INPUT', { 'aria-label': !0, type: !0, min: !0, max: !0, step: !0, class: !0 })),
				this.h();
		},
		h() {
			G(t, 'aria-label', (n = e[4].label.a)),
				(t.value = e[6]),
				G(t, 'type', 'number'),
				G(t, 'min', '0'),
				G(t, 'max', '1'),
				G(t, 'step', '0.01'),
				G(t, 'class', 'svelte-p68edl');
		},
		m(a, s) {
			Ve(a, t, s),
				r ||
					((i = Ke(t, 'input', function () {
						mi(e[5] <= 1 ? e[11]('a') : e[12]('a')) &&
							(e[5] <= 1 ? e[11]('a') : e[12]('a')).apply(this, arguments);
					})),
					(r = !0));
		},
		p(a, s) {
			(e = a),
				s & 16 && n !== (n = e[4].label.a) && G(t, 'aria-label', n),
				s & 64 && t.value !== e[6] && (t.value = e[6]);
		},
		d(a) {
			a && ee(t), (r = !1), i();
		}
	};
}
function Pc(e) {
	let t,
		n,
		r = e[4].color[e[3][e[5]]] + '',
		i,
		a,
		s,
		o = e[4].changeTo + '',
		u,
		l,
		f = e[4].color[e[3][(e[5] + 1) % 3]] + '',
		c,
		h,
		p;
	return {
		c() {
			(t = te('button')),
				(n = te('span')),
				(i = Mi(r)),
				(a = Fe()),
				(s = te('span')),
				(u = Mi(o)),
				(l = Fe()),
				(c = Mi(f)),
				this.h();
		},
		l(d) {
			t = ne(d, 'BUTTON', { class: !0 });
			var m = Ge(t);
			n = ne(m, 'SPAN', { class: !0, 'aria-hidden': !0 });
			var v = Ge(n);
			(i = Ei(v, r)), v.forEach(ee), (a = ke(m)), (s = ne(m, 'SPAN', { class: !0 }));
			var g = Ge(s);
			(u = Ei(g, o)), (l = ke(g)), (c = Ei(g, f)), g.forEach(ee), m.forEach(ee), this.h();
		},
		h() {
			G(n, 'class', 'disappear svelte-p68edl'),
				G(n, 'aria-hidden', 'true'),
				G(s, 'class', 'appear svelte-p68edl'),
				G(t, 'class', 'svelte-p68edl');
		},
		m(d, m) {
			Ve(d, t, m),
				Q(t, n),
				Q(n, i),
				Q(t, a),
				Q(t, s),
				Q(s, u),
				Q(s, l),
				Q(s, c),
				h || ((p = Ke(t, 'click', e[14])), (h = !0));
		},
		p(d, m) {
			m & 56 && r !== (r = d[4].color[d[3][d[5]]] + '') && ra(i, r),
				m & 16 && o !== (o = d[4].changeTo + '') && ra(u, o),
				m & 56 && f !== (f = d[4].color[d[3][(d[5] + 1) % 3]] + '') && ra(c, f);
		},
		d(d) {
			d && ee(t), (h = !1), p();
		}
	};
}
function fx(e) {
	let t, n, r, i;
	function a(f, c) {
		return f[5] === 0 ? lx : f[5] === 1 ? ux : ox;
	}
	let s = a(e),
		o = s(e),
		u = e[2] && Cc(e),
		l = e[3].length > 1 && Pc(e);
	return {
		c() {
			(t = te('div')),
				(n = te('div')),
				o.c(),
				(r = Fe()),
				u && u.c(),
				(i = Fe()),
				l && l.c(),
				this.h();
		},
		l(f) {
			t = ne(f, 'DIV', { class: !0 });
			var c = Ge(t);
			n = ne(c, 'DIV', { class: !0 });
			var h = Ge(n);
			o.l(h),
				(r = ke(h)),
				u && u.l(h),
				h.forEach(ee),
				(i = ke(c)),
				l && l.l(c),
				c.forEach(ee),
				this.h();
		},
		h() {
			G(n, 'class', 'input-container svelte-p68edl'), G(t, 'class', 'text-input svelte-p68edl');
		},
		m(f, c) {
			Ve(f, t, c), Q(t, n), o.m(n, null), Q(n, r), u && u.m(n, null), Q(t, i), l && l.m(t, null);
		},
		p(f, [c]) {
			s === (s = a(f)) && o ? o.p(f, c) : (o.d(1), (o = s(f)), o && (o.c(), o.m(n, r))),
				f[2] ? (u ? u.p(f, c) : ((u = Cc(f)), u.c(), u.m(n, null))) : u && (u.d(1), (u = null)),
				f[3].length > 1
					? l
						? l.p(f, c)
						: ((l = Pc(f)), l.c(), l.m(t, null))
					: l && (l.d(1), (l = null));
		},
		i: Wt,
		o: Wt,
		d(f) {
			f && ee(t), o.d(), u && u.d(), l && l.d();
		}
	};
}
const cx = /^#?([A-F0-9]{6}|[A-F0-9]{8})$/i;
function hx(e, t, n) {
	let r, i, a, s;
	const o = Za();
	let { isAlpha: u } = t,
		{ rgb: l } = t,
		{ hsv: f } = t,
		{ hex: c } = t,
		{ textInputModes: h } = t,
		{ texts: p } = t,
		d = 0;
	function m(M) {
		const _ = M.target;
		cx.test(_.value) && (n(1, (c = _.value)), o('input', { hex: c }));
	}
	function v(M) {
		return function (_) {
			n(0, (l = { ...l, [M]: parseFloat(_.target.value) })), o('input', { rgb: l });
		};
	}
	function g(M) {
		return function (_) {
			n(13, (f = { ...f, [M]: parseFloat(_.target.value) })), o('input', { hsv: f });
		};
	}
	const x = () => n(5, (d = (d + 1) % 3));
	return (
		(e.$$set = (M) => {
			'isAlpha' in M && n(2, (u = M.isAlpha)),
				'rgb' in M && n(0, (l = M.rgb)),
				'hsv' in M && n(13, (f = M.hsv)),
				'hex' in M && n(1, (c = M.hex)),
				'textInputModes' in M && n(3, (h = M.textInputModes)),
				'texts' in M && n(4, (p = M.texts));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 8192 && n(9, (r = Math.round(f.h))),
				e.$$.dirty & 8192 && n(8, (i = Math.round(f.s))),
				e.$$.dirty & 8192 && n(7, (a = Math.round(f.v))),
				e.$$.dirty & 8192 && n(6, (s = f.a === void 0 ? 1 : Math.round(f.a * 100) / 100));
		}),
		[l, c, u, h, p, d, s, a, i, r, m, v, g, f, x]
	);
}
class dx extends En {
	constructor(t) {
		super(),
			Sn(this, t, hx, fx, Mn, { isAlpha: 2, rgb: 0, hsv: 13, hex: 1, textInputModes: 3, texts: 4 });
	}
}
function px(e) {
	let t, n, r, i, a, s, o, u, l, f, c;
	return {
		c() {
			(t = te('label')),
				(n = te('div')),
				(r = te('input')),
				(i = Fe()),
				(a = te('div')),
				(s = Fe()),
				(o = te('div')),
				(u = Fe()),
				(l = Mi(e[2])),
				this.h();
		},
		l(h) {
			t = ne(h, 'LABEL', { class: !0 });
			var p = Ge(t);
			n = ne(p, 'DIV', { class: !0 });
			var d = Ge(n);
			(r = ne(d, 'INPUT', { type: !0, name: !0, 'aria-haspopup': !0, class: !0 })),
				(i = ke(d)),
				(a = ne(d, 'DIV', { class: !0 })),
				Ge(a).forEach(ee),
				(s = ke(d)),
				(o = ne(d, 'DIV', { class: !0 })),
				Ge(o).forEach(ee),
				d.forEach(ee),
				(u = ke(p)),
				(l = Ei(p, e[2])),
				p.forEach(ee),
				this.h();
		},
		h() {
			G(r, 'type', 'color'),
				G(r, 'name', e[3]),
				(r.value = e[1]),
				G(r, 'aria-haspopup', 'dialog'),
				G(r, 'class', 'svelte-r4tbal'),
				G(a, 'class', 'alpha svelte-r4tbal'),
				G(o, 'class', 'color svelte-r4tbal'),
				Rt(o, 'background', e[1]),
				G(n, 'class', 'container svelte-r4tbal'),
				G(t, 'class', 'svelte-r4tbal');
		},
		m(h, p) {
			Ve(h, t, p),
				Q(t, n),
				Q(n, r),
				Q(n, i),
				Q(n, a),
				Q(n, s),
				Q(n, o),
				Q(t, u),
				Q(t, l),
				e[5](t),
				f ||
					((c = [
						Ke(r, 'click', zn(Os)),
						Ke(r, 'mousedown', zn(Os)),
						Ke(t, 'click', zn(Os)),
						Ke(t, 'mousedown', zn(Os))
					]),
					(f = !0));
		},
		p(h, [p]) {
			p & 8 && G(r, 'name', h[3]),
				p & 2 && (r.value = h[1]),
				p & 2 && Rt(o, 'background', h[1]),
				p & 4 && ra(l, h[2]);
		},
		i: Wt,
		o: Wt,
		d(h) {
			h && ee(t), e[5](null), (f = !1), wr(c);
		}
	};
}
function Os() {}
function vx(e, t, n) {
	let { labelElement: r } = t,
		{ hex: i } = t,
		{ label: a } = t,
		{ name: s = void 0 } = t,
		{ isOpen: o } = t;
	function u(l) {
		Nt[l ? 'unshift' : 'push'](() => {
			(r = l), n(0, r);
		});
	}
	return (
		(e.$$set = (l) => {
			'labelElement' in l && n(0, (r = l.labelElement)),
				'hex' in l && n(1, (i = l.hex)),
				'label' in l && n(2, (a = l.label)),
				'name' in l && n(3, (s = l.name)),
				'isOpen' in l && n(4, (o = l.isOpen));
		}),
		[r, i, a, s, o, u]
	);
}
class mx extends En {
	constructor(t) {
		super(), Sn(this, t, vx, px, Mn, { labelElement: 0, hex: 1, label: 2, name: 3, isOpen: 4 });
	}
}
function gx(e) {
	let t, n, r;
	const i = e[4].default,
		a = Qh(i, e, e[3], null);
	return {
		c() {
			(t = te('div')), a && a.c(), this.h();
		},
		l(s) {
			t = ne(s, 'DIV', { class: !0, role: !0, 'aria-label': !0 });
			var o = Ge(t);
			a && a.l(o), o.forEach(ee), this.h();
		},
		h() {
			G(t, 'class', 'wrapper svelte-1h4o41o'),
				G(t, 'role', (n = e[2] ? 'dialog' : void 0)),
				G(t, 'aria-label', 'color picker'),
				Li(t, 'is-open', e[1]);
		},
		m(s, o) {
			Ve(s, t, o), a && a.m(t, null), e[5](t), (r = !0);
		},
		p(s, [o]) {
			a && a.p && (!r || o & 8) && $h(a, i, s, s[3], r ? ed(i, s[3], o, null) : zh(s[3]), null),
				(!r || (o & 4 && n !== (n = s[2] ? 'dialog' : void 0))) && G(t, 'role', n),
				(!r || o & 2) && Li(t, 'is-open', s[1]);
		},
		i(s) {
			r || (qe(a, s), (r = !0));
		},
		o(s) {
			$e(a, s), (r = !1);
		},
		d(s) {
			s && ee(t), a && a.d(s), e[5](null);
		}
	};
}
function _x(e, t, n) {
	let { $$slots: r = {}, $$scope: i } = t,
		{ wrapper: a } = t,
		{ isOpen: s } = t,
		{ isDialog: o } = t;
	function u(l) {
		Nt[l ? 'unshift' : 'push'](() => {
			(a = l), n(0, a);
		});
	}
	return (
		(e.$$set = (l) => {
			'wrapper' in l && n(0, (a = l.wrapper)),
				'isOpen' in l && n(1, (s = l.isOpen)),
				'isDialog' in l && n(2, (o = l.isDialog)),
				'$$scope' in l && n(3, (i = l.$$scope));
		}),
		[a, s, o, i, r, u]
	);
}
class xx extends En {
	constructor(t) {
		super(), Sn(this, t, _x, gx, Mn, { wrapper: 0, isOpen: 1, isDialog: 2 });
	}
}
const Mu = {
		label: {
			h: 'hue channel',
			s: 'saturation channel',
			v: 'brightness channel',
			r: 'red channel',
			g: 'green channel',
			b: 'blue channel',
			a: 'alpha channel',
			hex: 'hex color',
			withoutColor: 'without color'
		},
		color: { rgb: 'rgb', hsv: 'hsv', hex: 'hex' },
		changeTo: 'change to '
	},
	kh =
		"a[href], area[href], input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
function bx(e) {
	return function (t) {
		if (t.target === window) return;
		const n = t.target;
		if (!e.contains(n)) return;
		const r = e.querySelectorAll(kh),
			i = r[0],
			a = r[r.length - 1];
		function s(u) {
			return u.code === 'Tab' && !u.shiftKey;
		}
		function o(u) {
			return u.code === 'Tab' && u.shiftKey;
		}
		s(t) && t.target === a
			? (t.preventDefault(), i.focus())
			: o(t) && t.target === i && (t.preventDefault(), a.focus());
	};
}
const yx = (e) => {
	const t = e.querySelector(kh);
	t && t.focus();
	const n = bx(e);
	return (
		document.addEventListener('keydown', n),
		{
			destroy() {
				document.removeEventListener('keydown', n);
			}
		}
	);
};
function wx(e) {
	let t,
		n,
		r,
		i,
		a,
		s,
		o = e[1].label.withoutColor + '',
		u,
		l,
		f;
	return {
		c() {
			(t = te('label')),
				(n = te('div')),
				(r = te('input')),
				(i = Fe()),
				(a = te('span')),
				(s = Fe()),
				(u = Mi(o)),
				this.h();
		},
		l(c) {
			t = ne(c, 'LABEL', { class: !0 });
			var h = Ge(t);
			n = ne(h, 'DIV', { class: !0 });
			var p = Ge(n);
			(r = ne(p, 'INPUT', { type: !0, class: !0 })),
				(i = ke(p)),
				(a = ne(p, 'SPAN', { class: !0 })),
				Ge(a).forEach(ee),
				p.forEach(ee),
				(s = ke(h)),
				(u = Ei(h, o)),
				h.forEach(ee),
				this.h();
		},
		h() {
			G(r, 'type', 'checkbox'),
				G(r, 'class', 'svelte-pt866j'),
				G(a, 'class', 'svelte-pt866j'),
				G(n, 'class', 'svelte-pt866j'),
				G(t, 'class', 'nullability-checkbox svelte-pt866j');
		},
		m(c, h) {
			Ve(c, t, h),
				Q(t, n),
				Q(n, r),
				(r.checked = e[0]),
				Q(n, i),
				Q(n, a),
				Q(t, s),
				Q(t, u),
				l || ((f = Ke(r, 'change', e[2])), (l = !0));
		},
		p(c, [h]) {
			h & 1 && (r.checked = c[0]), h & 2 && o !== (o = c[1].label.withoutColor + '') && ra(u, o);
		},
		i: Wt,
		o: Wt,
		d(c) {
			c && ee(t), (l = !1), f();
		}
	};
}
function Mx(e, t, n) {
	let { isUndefined: r } = t,
		{ texts: i } = t;
	function a() {
		(r = this.checked), n(0, r);
	}
	return (
		(e.$$set = (s) => {
			'isUndefined' in s && n(0, (r = s.isUndefined)), 'texts' in s && n(1, (i = s.texts));
		}),
		[r, i, a]
	);
}
class Ex extends En {
	constructor(t) {
		super(), Sn(this, t, Mx, wx, Mn, { isUndefined: 0, texts: 1 });
	}
}
function Sx(e) {
	let t;
	return {
		c() {
			(t = te('input')), this.h();
		},
		l(n) {
			(t = ne(n, 'INPUT', { type: !0, name: !0 })), this.h();
		},
		h() {
			G(t, 'type', 'hidden'), (t.value = e[2]), G(t, 'name', e[6]);
		},
		m(n, r) {
			Ve(n, t, r);
		},
		p(n, r) {
			r[0] & 4 && (t.value = n[2]), r[0] & 64 && G(t, 'name', n[6]);
		},
		i: Wt,
		o: Wt,
		d(n) {
			n && ee(t);
		}
	};
}
function Lx(e) {
	let t, n, r, i;
	function a(u) {
		e[33](u);
	}
	var s = e[23]().input;
	function o(u, l) {
		let f = { isOpen: !0, hex: u[2], label: u[5], name: u[6] };
		return u[21] !== void 0 && (f.labelElement = u[21]), { props: f };
	}
	return (
		s && ((t = cn(s, o(e))), Nt.push(() => yn(t, 'labelElement', a))),
		{
			c() {
				t && gt(t.$$.fragment), (r = fn());
			},
			l(u) {
				t && Vt(t.$$.fragment, u), (r = fn());
			},
			m(u, l) {
				t && _t(t, u, l), Ve(u, r, l), (i = !0);
			},
			p(u, l) {
				if (s !== (s = u[23]().input)) {
					if (t) {
						on();
						const f = t;
						$e(f.$$.fragment, 1, 0, () => {
							xt(f, 1);
						}),
							un();
					}
					s
						? ((t = cn(s, o(u))),
							Nt.push(() => yn(t, 'labelElement', a)),
							gt(t.$$.fragment),
							qe(t.$$.fragment, 1),
							_t(t, r.parentNode, r))
						: (t = null);
				} else if (s) {
					const f = {};
					l[0] & 4 && (f.hex = u[2]),
						l[0] & 32 && (f.label = u[5]),
						l[0] & 64 && (f.name = u[6]),
						!n && l[0] & 2097152 && ((n = !0), (f.labelElement = u[21]), _r(() => (n = !1))),
						t.$set(f);
				}
			},
			i(u) {
				i || (t && qe(t.$$.fragment, u), (i = !0));
			},
			o(u) {
				t && $e(t.$$.fragment, u), (i = !1);
			},
			d(u) {
				u && ee(r), t && xt(t, u);
			}
		}
	);
}
function Ic(e) {
	let t, n, r, i;
	function a(u) {
		e[34](u);
	}
	var s = e[23]().nullabilityCheckbox;
	function o(u, l) {
		let f = { texts: u[24]() };
		return u[16] !== void 0 && (f.isUndefined = u[16]), { props: f };
	}
	return (
		s && ((t = cn(s, o(e))), Nt.push(() => yn(t, 'isUndefined', a))),
		{
			c() {
				t && gt(t.$$.fragment), (r = fn());
			},
			l(u) {
				t && Vt(t.$$.fragment, u), (r = fn());
			},
			m(u, l) {
				t && _t(t, u, l), Ve(u, r, l), (i = !0);
			},
			p(u, l) {
				if (s !== (s = u[23]().nullabilityCheckbox)) {
					if (t) {
						on();
						const f = t;
						$e(f.$$.fragment, 1, 0, () => {
							xt(f, 1);
						}),
							un();
					}
					s
						? ((t = cn(s, o(u))),
							Nt.push(() => yn(t, 'isUndefined', a)),
							gt(t.$$.fragment),
							qe(t.$$.fragment, 1),
							_t(t, r.parentNode, r))
						: (t = null);
				} else if (s) {
					const f = {};
					!n && l[0] & 65536 && ((n = !0), (f.isUndefined = u[16]), _r(() => (n = !1))), t.$set(f);
				}
			},
			i(u) {
				i || (t && qe(t.$$.fragment, u), (i = !0));
			},
			o(u) {
				t && $e(t.$$.fragment, u), (i = !1);
			},
			d(u) {
				u && ee(r), t && xt(t, u);
			}
		}
	);
}
function Dc(e) {
	var i;
	let t, n, r;
	return (
		(n = new Ro({
			props: {
				min: 0,
				max: 1,
				step: 0.01,
				value: ((i = e[1]) == null ? void 0 : i.a) ?? e[18].a,
				direction: e[12],
				reverse: e[12] === 'vertical',
				ariaLabel: e[24]().label.a
			}
		})),
		n.$on('input', e[27]('a')),
		{
			c() {
				(t = te('div')), gt(n.$$.fragment), this.h();
			},
			l(a) {
				t = ne(a, 'DIV', { class: !0 });
				var s = Ge(t);
				Vt(n.$$.fragment, s), s.forEach(ee), this.h();
			},
			h() {
				G(t, 'class', 'a svelte-1n1d6qa'),
					Rt(t, '--alphaless-color', (e[2] ? e[2] : e[19]).substring(0, 7));
			},
			m(a, s) {
				Ve(a, t, s), _t(n, t, null), (r = !0);
			},
			p(a, s) {
				var u;
				const o = {};
				s[0] & 262146 && (o.value = ((u = a[1]) == null ? void 0 : u.a) ?? a[18].a),
					s[0] & 4096 && (o.direction = a[12]),
					s[0] & 4096 && (o.reverse = a[12] === 'vertical'),
					n.$set(o),
					s[0] & 524292 && Rt(t, '--alphaless-color', (a[2] ? a[2] : a[19]).substring(0, 7));
			},
			i(a) {
				r || (qe(n.$$.fragment, a), (r = !0));
			},
			o(a) {
				$e(n.$$.fragment, a), (r = !1);
			},
			d(a) {
				a && ee(t), xt(n);
			}
		}
	);
}
function Nc(e) {
	let t, n, r;
	var i = e[23]().textInput;
	function a(s, o) {
		return {
			props: {
				hex: s[2] ?? s[19],
				rgb: s[0] ?? s[17],
				hsv: s[1] ?? s[18],
				isAlpha: s[8],
				textInputModes: s[11],
				texts: s[24]()
			}
		};
	}
	return (
		i && ((t = cn(i, a(e))), t.$on('input', e[35])),
		{
			c() {
				t && gt(t.$$.fragment), (n = fn());
			},
			l(s) {
				t && Vt(t.$$.fragment, s), (n = fn());
			},
			m(s, o) {
				t && _t(t, s, o), Ve(s, n, o), (r = !0);
			},
			p(s, o) {
				if (i !== (i = s[23]().textInput)) {
					if (t) {
						on();
						const u = t;
						$e(u.$$.fragment, 1, 0, () => {
							xt(u, 1);
						}),
							un();
					}
					i
						? ((t = cn(i, a(s))),
							t.$on('input', s[35]),
							gt(t.$$.fragment),
							qe(t.$$.fragment, 1),
							_t(t, n.parentNode, n))
						: (t = null);
				} else if (i) {
					const u = {};
					o[0] & 524292 && (u.hex = s[2] ?? s[19]),
						o[0] & 131073 && (u.rgb = s[0] ?? s[17]),
						o[0] & 262146 && (u.hsv = s[1] ?? s[18]),
						o[0] & 256 && (u.isAlpha = s[8]),
						o[0] & 2048 && (u.textInputModes = s[11]),
						t.$set(u);
				}
			},
			i(s) {
				r || (t && qe(t.$$.fragment, s), (r = !0));
			},
			o(s) {
				t && $e(t.$$.fragment, s), (r = !1);
			},
			d(s) {
				s && ee(n), t && xt(t, s);
			}
		}
	);
}
function Tx(e) {
	let t, n, r;
	var i = e[23]().a11yNotice;
	function a(s, o) {
		return {
			props: {
				components: s[23](),
				a11yColors: s[13],
				hex: s[2] || '#00000000',
				a11yTexts: s[15],
				a11yLevel: s[14]
			}
		};
	}
	return (
		i && (t = cn(i, a(e))),
		{
			c() {
				t && gt(t.$$.fragment), (n = fn());
			},
			l(s) {
				t && Vt(t.$$.fragment, s), (n = fn());
			},
			m(s, o) {
				t && _t(t, s, o), Ve(s, n, o), (r = !0);
			},
			p(s, o) {
				if (i !== (i = s[23]().a11yNotice)) {
					if (t) {
						on();
						const u = t;
						$e(u.$$.fragment, 1, 0, () => {
							xt(u, 1);
						}),
							un();
					}
					i
						? ((t = cn(i, a(s))), gt(t.$$.fragment), qe(t.$$.fragment, 1), _t(t, n.parentNode, n))
						: (t = null);
				} else if (i) {
					const u = {};
					o[0] & 8192 && (u.a11yColors = s[13]),
						o[0] & 4 && (u.hex = s[2] || '#00000000'),
						o[0] & 32768 && (u.a11yTexts = s[15]),
						o[0] & 16384 && (u.a11yLevel = s[14]),
						t.$set(u);
				}
			},
			i(s) {
				r || (t && qe(t.$$.fragment, s), (r = !0));
			},
			o(s) {
				t && $e(t.$$.fragment, s), (r = !1);
			},
			d(s) {
				s && ee(n), t && xt(t, s);
			}
		}
	);
}
function Ax(e) {
	var v, g, x, M;
	let t,
		n,
		r,
		i,
		a,
		s,
		o,
		u,
		l = e[23]().a11yNotice,
		f,
		c,
		h = e[7] && Ic(e);
	(n = new rx({
		props: {
			components: e[23](),
			h: ((v = e[1]) == null ? void 0 : v.h) ?? e[18].h,
			s: ((g = e[1]) == null ? void 0 : g.s) ?? e[18].s,
			v: ((x = e[1]) == null ? void 0 : x.v) ?? e[18].v,
			isDark: e[3]
		}
	})),
		n.$on('input', e[28](['s', 'v'])),
		(a = new Ro({
			props: {
				min: 0,
				max: 360,
				step: 1,
				value: ((M = e[1]) == null ? void 0 : M.h) ?? e[18].h,
				direction: e[12],
				reverse: e[12] === 'vertical',
				ariaLabel: e[24]().label.h
			}
		})),
		a.$on('input', e[27]('h'));
	let p = e[8] && Dc(e),
		d = e[10] && Nc(e),
		m = l && Tx(e);
	return {
		c() {
			h && h.c(),
				(t = Fe()),
				gt(n.$$.fragment),
				(r = Fe()),
				(i = te('div')),
				gt(a.$$.fragment),
				(s = Fe()),
				p && p.c(),
				(o = Fe()),
				d && d.c(),
				(u = Fe()),
				m && m.c(),
				(f = fn()),
				this.h();
		},
		l(_) {
			h && h.l(_),
				(t = ke(_)),
				Vt(n.$$.fragment, _),
				(r = ke(_)),
				(i = ne(_, 'DIV', { class: !0 }));
			var y = Ge(i);
			Vt(a.$$.fragment, y),
				y.forEach(ee),
				(s = ke(_)),
				p && p.l(_),
				(o = ke(_)),
				d && d.l(_),
				(u = ke(_)),
				m && m.l(_),
				(f = fn()),
				this.h();
		},
		h() {
			G(i, 'class', 'h svelte-1n1d6qa');
		},
		m(_, y) {
			h && h.m(_, y),
				Ve(_, t, y),
				_t(n, _, y),
				Ve(_, r, y),
				Ve(_, i, y),
				_t(a, i, null),
				Ve(_, s, y),
				p && p.m(_, y),
				Ve(_, o, y),
				d && d.m(_, y),
				Ve(_, u, y),
				m && m.m(_, y),
				Ve(_, f, y),
				(c = !0);
		},
		p(_, y) {
			var T, P, k, I;
			_[7]
				? h
					? (h.p(_, y), y[0] & 128 && qe(h, 1))
					: ((h = Ic(_)), h.c(), qe(h, 1), h.m(t.parentNode, t))
				: h &&
					(on(),
					$e(h, 1, 1, () => {
						h = null;
					}),
					un());
			const L = {};
			y[0] & 262146 && (L.h = ((T = _[1]) == null ? void 0 : T.h) ?? _[18].h),
				y[0] & 262146 && (L.s = ((P = _[1]) == null ? void 0 : P.s) ?? _[18].s),
				y[0] & 262146 && (L.v = ((k = _[1]) == null ? void 0 : k.v) ?? _[18].v),
				y[0] & 8 && (L.isDark = _[3]),
				n.$set(L);
			const C = {};
			y[0] & 262146 && (C.value = ((I = _[1]) == null ? void 0 : I.h) ?? _[18].h),
				y[0] & 4096 && (C.direction = _[12]),
				y[0] & 4096 && (C.reverse = _[12] === 'vertical'),
				a.$set(C),
				_[8]
					? p
						? (p.p(_, y), y[0] & 256 && qe(p, 1))
						: ((p = Dc(_)), p.c(), qe(p, 1), p.m(o.parentNode, o))
					: p &&
						(on(),
						$e(p, 1, 1, () => {
							p = null;
						}),
						un()),
				_[10]
					? d
						? (d.p(_, y), y[0] & 1024 && qe(d, 1))
						: ((d = Nc(_)), d.c(), qe(d, 1), d.m(u.parentNode, u))
					: d &&
						(on(),
						$e(d, 1, 1, () => {
							d = null;
						}),
						un()),
				l && m.p(_, y);
		},
		i(_) {
			c || (qe(h), qe(n.$$.fragment, _), qe(a.$$.fragment, _), qe(p), qe(d), qe(m), (c = !0));
		},
		o(_) {
			$e(h), $e(n.$$.fragment, _), $e(a.$$.fragment, _), $e(p), $e(d), $e(m), (c = !1);
		},
		d(_) {
			_ && (ee(t), ee(r), ee(i), ee(s), ee(o), ee(u), ee(f)),
				h && h.d(_),
				xt(n, _),
				xt(a),
				p && p.d(_),
				d && d.d(_),
				m && m.d(_);
		}
	};
}
function Rx(e) {
	let t, n, r, i, a, s, o, u, l, f;
	const c = [Lx, Sx],
		h = [];
	function p(g, x) {
		return g[9] ? 0 : g[6] ? 1 : -1;
	}
	~(n = p(e)) && (r = h[n] = c[n](e));
	function d(g) {
		e[36](g);
	}
	var m = e[23]().wrapper;
	function v(g, x) {
		let M = { isOpen: g[4], isDialog: g[9], $$slots: { default: [Ax] }, $$scope: { ctx: g } };
		return g[22] !== void 0 && (M.wrapper = g[22]), { props: M };
	}
	return (
		m && ((a = cn(m, v(e))), Nt.push(() => yn(a, 'wrapper', d))),
		{
			c() {
				(t = te('span')), r && r.c(), (i = Fe()), a && gt(a.$$.fragment), this.h();
			},
			l(g) {
				t = ne(g, 'SPAN', { class: !0 });
				var x = Ge(t);
				r && r.l(x), (i = ke(x)), a && Vt(a.$$.fragment, x), x.forEach(ee), this.h();
			},
			h() {
				G(t, 'class', (o = 'color-picker ' + e[12] + ' svelte-1n1d6qa'));
			},
			m(g, x) {
				Ve(g, t, x),
					~n && h[n].m(t, null),
					Q(t, i),
					a && _t(a, t, null),
					e[37](t),
					(u = !0),
					l || ((f = [Ke(window, 'mousedown', e[25]), Ke(window, 'keyup', e[26])]), (l = !0));
			},
			p(g, x) {
				let M = n;
				if (
					((n = p(g)),
					n === M
						? ~n && h[n].p(g, x)
						: (r &&
								(on(),
								$e(h[M], 1, 1, () => {
									h[M] = null;
								}),
								un()),
							~n
								? ((r = h[n]), r ? r.p(g, x) : ((r = h[n] = c[n](g)), r.c()), qe(r, 1), r.m(t, i))
								: (r = null)),
					m !== (m = g[23]().wrapper))
				) {
					if (a) {
						on();
						const _ = a;
						$e(_.$$.fragment, 1, 0, () => {
							xt(_, 1);
						}),
							un();
					}
					m
						? ((a = cn(m, v(g))),
							Nt.push(() => yn(a, 'wrapper', d)),
							gt(a.$$.fragment),
							qe(a.$$.fragment, 1),
							_t(a, t, null))
						: (a = null);
				} else if (m) {
					const _ = {};
					x[0] & 16 && (_.isOpen = g[4]),
						x[0] & 512 && (_.isDialog = g[9]),
						(x[0] & 1047951) | (x[1] & 4096) && (_.$$scope = { dirty: x, ctx: g }),
						!s && x[0] & 4194304 && ((s = !0), (_.wrapper = g[22]), _r(() => (s = !1))),
						a.$set(_);
				}
				(!u || (x[0] & 4096 && o !== (o = 'color-picker ' + g[12] + ' svelte-1n1d6qa'))) &&
					G(t, 'class', o);
			},
			i(g) {
				u || (qe(r), a && qe(a.$$.fragment, g), (u = !0));
			},
			o(g) {
				$e(r), a && $e(a.$$.fragment, g), (u = !1);
			},
			d(g) {
				g && ee(t), ~n && h[n].d(), a && xt(a), e[37](null), (l = !1), wr(f);
			}
		}
	);
}
function Cx(e, t, n) {
	const r = Za();
	let { components: i = {} } = t,
		{ label: a = 'Choose a color' } = t,
		{ name: s = void 0 } = t,
		{ nullable: o = !1 } = t,
		{ rgb: u = o ? void 0 : { r: 255, g: 0, b: 0, a: 1 } } = t,
		{ hsv: l = o ? void 0 : { h: 0, s: 100, v: 100, a: 1 } } = t,
		{ hex: f = o ? void 0 : '#ff0000' } = t,
		{ color: c = void 0 } = t,
		{ isDark: h = !1 } = t,
		{ isAlpha: p = !0 } = t,
		{ isDialog: d = !0 } = t,
		{ isOpen: m = !d } = t,
		{ isTextInput: v = !0 } = t,
		{ textInputModes: g = ['hex', 'rgb', 'hsv'] } = t,
		{ sliderDirection: x = 'vertical' } = t,
		{ disableCloseClickOutside: M = !1 } = t,
		{ a11yColors: _ = [{ bgHex: '#ffffff' }] } = t,
		{ a11yLevel: y = 'AA' } = t,
		{ texts: L = void 0 } = t,
		{ a11yTexts: C = void 0 } = t,
		T = { r: 255, g: 0, b: 0, a: 1 },
		P = { h: 0, s: 100, v: 100, a: 1 },
		k = '#ff0000',
		I = !1,
		w = I,
		U,
		N,
		D,
		B;
	const q = { pickerIndicator: sx, textInput: dx, input: mx, nullabilityCheckbox: Ex, wrapper: xx };
	function H() {
		return { ...q, ...i };
	}
	function j() {
		return {
			label: { ...Mu.label, ...(L == null ? void 0 : L.label) },
			color: { ...Mu.color, ...(L == null ? void 0 : L.color) },
			changeTo: (L == null ? void 0 : L.changeTo) ?? Mu.changeTo
		};
	}
	function K({ target: E }) {
		d &&
			(N.contains(E) || N.isSameNode(E)
				? n(4, (m = !m))
				: m && !D.contains(E) && !M && n(4, (m = !1)));
	}
	function Z({ key: E, target: S }) {
		if (d)
			E === 'Enter' && N.contains(S)
				? (n(4, (m = !m)),
					setTimeout(() => {
						B = yx(D);
					}))
				: E === 'Escape' &&
					m &&
					(n(4, (m = !1)), U.contains(S) && (N == null || N.focus(), B == null || B.destroy()));
		else return;
	}
	function ve() {
		if (I && !w) {
			(w = !0),
				n(1, (l = n(0, (u = n(2, (f = void 0)))))),
				r('input', { color: c, hsv: l, rgb: u, hex: f });
			return;
		} else if (w && !I) {
			(w = !1),
				n(1, (l = P)),
				n(0, (u = T)),
				n(2, (f = k)),
				r('input', { color: c, hsv: l, rgb: u, hex: f });
			return;
		}
		if (!l && !u && !f) {
			n(16, (I = !0)), (w = !0), r('input', { color: void 0, hsv: l, rgb: u, hex: f });
			return;
		}
		(l &&
			u &&
			l.h === P.h &&
			l.s === P.s &&
			l.v === P.v &&
			l.a === P.a &&
			u.r === T.r &&
			u.g === T.g &&
			u.b === T.b &&
			u.a === T.a &&
			f === k) ||
			(n(16, (I = !1)),
			l && l.a === void 0 && n(1, (l.a = 1), l),
			P.a === void 0 && n(18, (P.a = 1), P),
			u && u.a === void 0 && n(0, (u.a = 1), u),
			T.a === void 0 && n(17, (T.a = 1), T),
			(f == null ? void 0 : f.substring(7)) === 'ff' && n(2, (f = f.substring(0, 7))),
			(f == null ? void 0 : f.substring(7)) === 'ff' && n(2, (f = f.substring(0, 7))),
			l && (l.h !== P.h || l.s !== P.s || l.v !== P.v || l.a !== P.a)
				? (n(29, (c = zt(l))), n(0, (u = c.toRgb())), n(2, (f = c.toHex())))
				: u && (u.r !== T.r || u.g !== T.g || u.b !== T.b || u.a !== T.a)
					? (n(29, (c = zt(u))), n(2, (f = c.toHex())), n(1, (l = c.toHsv())))
					: f && f !== k && (n(29, (c = zt(f))), n(0, (u = c.toRgb())), n(1, (l = c.toHsv()))),
			c && n(3, (h = c.isDark())),
			f &&
				(n(18, (P = Object.assign({}, l))),
				n(17, (T = Object.assign({}, u))),
				n(19, (k = f)),
				(w = I),
				r('input', { color: c, hsv: l, rgb: u, hex: f })));
	}
	function _e(E) {
		return (S) => {
			l || n(1, (l = { ...P })), n(1, (l[E] = S.detail), l);
		};
	}
	function V(E) {
		return (S) => {
			l || n(1, (l = { ...P })),
				E.forEach((J) => {
					l && n(1, (l[J] = S.detail[J]), l);
				});
		};
	}
	function be(E) {
		(N = E), n(21, N);
	}
	function le(E) {
		(I = E), n(16, I);
	}
	const pe = ({ detail: E }) => {
		E.hsv ? n(1, (l = E.hsv)) : E.rgb ? n(0, (u = E.rgb)) : E.hex && n(2, (f = E.hex));
	};
	function Me(E) {
		(D = E), n(22, D);
	}
	function Ye(E) {
		Nt[E ? 'unshift' : 'push'](() => {
			(U = E), n(20, U);
		});
	}
	return (
		(e.$$set = (E) => {
			'components' in E && n(30, (i = E.components)),
				'label' in E && n(5, (a = E.label)),
				'name' in E && n(6, (s = E.name)),
				'nullable' in E && n(7, (o = E.nullable)),
				'rgb' in E && n(0, (u = E.rgb)),
				'hsv' in E && n(1, (l = E.hsv)),
				'hex' in E && n(2, (f = E.hex)),
				'color' in E && n(29, (c = E.color)),
				'isDark' in E && n(3, (h = E.isDark)),
				'isAlpha' in E && n(8, (p = E.isAlpha)),
				'isDialog' in E && n(9, (d = E.isDialog)),
				'isOpen' in E && n(4, (m = E.isOpen)),
				'isTextInput' in E && n(10, (v = E.isTextInput)),
				'textInputModes' in E && n(11, (g = E.textInputModes)),
				'sliderDirection' in E && n(12, (x = E.sliderDirection)),
				'disableCloseClickOutside' in E && n(31, (M = E.disableCloseClickOutside)),
				'a11yColors' in E && n(13, (_ = E.a11yColors)),
				'a11yLevel' in E && n(14, (y = E.a11yLevel)),
				'texts' in E && n(32, (L = E.texts)),
				'a11yTexts' in E && n(15, (C = E.a11yTexts));
		}),
		(e.$$.update = () => {
			e.$$.dirty[0] & 7 && (l || u || f) && ve(), e.$$.dirty[0] & 65536 && ve();
		}),
		[
			u,
			l,
			f,
			h,
			m,
			a,
			s,
			o,
			p,
			d,
			v,
			g,
			x,
			_,
			y,
			C,
			I,
			T,
			P,
			k,
			U,
			N,
			D,
			H,
			j,
			K,
			Z,
			_e,
			V,
			c,
			i,
			M,
			L,
			be,
			le,
			pe,
			Me,
			Ye
		]
	);
}
class Px extends En {
	constructor(t) {
		super(),
			Sn(
				this,
				t,
				Cx,
				Rx,
				Mn,
				{
					components: 30,
					label: 5,
					name: 6,
					nullable: 7,
					rgb: 0,
					hsv: 1,
					hex: 2,
					color: 29,
					isDark: 3,
					isAlpha: 8,
					isDialog: 9,
					isOpen: 4,
					isTextInput: 10,
					textInputModes: 11,
					sliderDirection: 12,
					disableCloseClickOutside: 31,
					a11yColors: 13,
					a11yLevel: 14,
					texts: 32,
					a11yTexts: 15
				},
				null,
				[-1, -1]
			);
	}
}
function Ix(e) {
	let t,
		n,
		r,
		i,
		a,
		s,
		o = 'Translucency: ',
		u,
		l,
		f,
		c,
		h,
		p,
		d = 'layer: ',
		m,
		v,
		g,
		x,
		M,
		_,
		y;
	function L(T) {
		e[3](T);
	}
	let C = { nullable: !0 };
	return (
		e[0][0] !== void 0 && (C.hex = e[0][0]),
		(n = new Px({ props: C })),
		Nt.push(() => yn(n, 'hex', L)),
		{
			c() {
				(t = te('div')),
					gt(n.$$.fragment),
					(i = te('br')),
					(a = Fe()),
					(s = te('label')),
					(s.textContent = o),
					(u = te('br')),
					(l = Fe()),
					(f = te('input')),
					(c = te('br')),
					(h = Fe()),
					(p = te('label')),
					(p.textContent = d),
					(m = te('br')),
					(v = Fe()),
					(g = te('input')),
					(x = te('br')),
					this.h();
			},
			l(T) {
				t = ne(T, 'DIV', {});
				var P = Ge(t);
				Vt(n.$$.fragment, P),
					(i = ne(P, 'BR', {})),
					(a = ke(P)),
					(s = ne(P, 'LABEL', { 'data-svelte-h': !0 })),
					Dn(s) !== 'svelte-10mt6id' && (s.textContent = o),
					(u = ne(P, 'BR', {})),
					(l = ke(P)),
					(f = ne(P, 'INPUT', { type: !0 })),
					(c = ne(P, 'BR', {})),
					(h = ke(P)),
					(p = ne(P, 'LABEL', { 'data-svelte-h': !0 })),
					Dn(p) !== 'svelte-1jz0sn7' && (p.textContent = d),
					(m = ne(P, 'BR', {})),
					(v = ke(P)),
					(g = ne(P, 'INPUT', { type: !0, min: !0, max: !0 })),
					(x = ne(P, 'BR', {})),
					P.forEach(ee),
					this.h();
			},
			h() {
				G(f, 'type', 'number'), G(g, 'type', 'number'), G(g, 'min', e[1]), G(g, 'max', e[2]);
			},
			m(T, P) {
				Ve(T, t, P),
					_t(n, t, null),
					Q(t, i),
					Q(t, a),
					Q(t, s),
					Q(t, u),
					Q(t, l),
					Q(t, f),
					an(f, e[0][1]),
					Q(t, c),
					Q(t, h),
					Q(t, p),
					Q(t, m),
					Q(t, v),
					Q(t, g),
					an(g, e[0][2]),
					Q(t, x),
					(M = !0),
					_ || ((y = [Ke(f, 'input', e[4]), Ke(g, 'input', e[5])]), (_ = !0));
			},
			p(T, [P]) {
				const k = {};
				!r && P & 1 && ((r = !0), (k.hex = T[0][0]), _r(() => (r = !1))),
					n.$set(k),
					P & 1 && Bs(f.value) !== T[0][1] && an(f, T[0][1]),
					(!M || P & 2) && G(g, 'min', T[1]),
					(!M || P & 4) && G(g, 'max', T[2]),
					P & 1 && Bs(g.value) !== T[0][2] && an(g, T[0][2]);
			},
			i(T) {
				M || (qe(n.$$.fragment, T), (M = !0));
			},
			o(T) {
				$e(n.$$.fragment, T), (M = !1);
			},
			d(T) {
				T && ee(t), xt(n), (_ = !1), wr(y);
			}
		}
	);
}
function Dx(e, t, n) {
	let { color: r = [null, null] } = t,
		{ min: i } = t,
		{ max: a } = t;
	function s(l) {
		e.$$.not_equal(r[0], l) && ((r[0] = l), n(0, r));
	}
	function o() {
		(r[1] = Bs(this.value)), n(0, r);
	}
	function u() {
		(r[2] = Bs(this.value)), n(0, r);
	}
	return (
		(e.$$set = (l) => {
			'color' in l && n(0, (r = l.color)),
				'min' in l && n(1, (i = l.min)),
				'max' in l && n(2, (a = l.max));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 1 && console.log(r);
		}),
		[r, i, a, s, o, u]
	);
}
class Uh extends En {
	constructor(t) {
		super(), Sn(this, t, Dx, Ix, Mn, { color: 0, min: 1, max: 2 });
	}
}
function Oc(e, t, n) {
	const r = e.slice();
	return (r[20] = t[n]), (r[21] = t), (r[22] = n), r;
}
function Fc(e) {
	let t, n, r, i;
	function a(o) {
		e[13](o, e[20], e[21], e[22]);
	}
	let s = {};
	return (
		e[20] !== void 0 && (s.color = e[20]),
		(n = new Uh({ props: s })),
		Nt.push(() => yn(n, 'color', a)),
		{
			c() {
				(t = te('li')), gt(n.$$.fragment);
			},
			l(o) {
				t = ne(o, 'LI', {});
				var u = Ge(t);
				Vt(n.$$.fragment, u), u.forEach(ee);
			},
			m(o, u) {
				Ve(o, t, u), _t(n, t, null), (i = !0);
			},
			p(o, u) {
				e = o;
				const l = {};
				!r && u & 512 && ((r = !0), (l.color = e[20]), _r(() => (r = !1))), n.$set(l);
			},
			i(o) {
				i || (qe(n.$$.fragment, o), (i = !0));
			},
			o(o) {
				$e(n.$$.fragment, o), (i = !1);
			},
			d(o) {
				o && ee(t), xt(n);
			}
		}
	);
}
function kc(e) {
	let t, n;
	return (
		(t = new sd({ props: { sketch: e[11] } })),
		{
			c() {
				gt(t.$$.fragment);
			},
			l(r) {
				Vt(t.$$.fragment, r);
			},
			m(r, i) {
				_t(t, r, i), (n = !0);
			},
			p: Wt,
			i(r) {
				n || (qe(t.$$.fragment, r), (n = !0));
			},
			o(r) {
				$e(t.$$.fragment, r), (n = !1);
			},
			d(r) {
				xt(t, r);
			}
		}
	);
}
function Nx(e) {
	let t,
		n,
		r = '<title>Glazer</title>',
		i,
		a,
		s,
		o,
		u,
		l,
		f,
		c,
		h = '<label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>',
		p,
		d,
		m,
		v,
		g,
		x,
		M,
		_,
		y,
		L,
		C,
		T,
		P,
		k,
		I = 'Redraw',
		w,
		U,
		N,
		D = 'Width: ',
		B,
		q,
		H,
		j,
		K = 'Height: ',
		Z,
		ve,
		_e,
		V,
		be = 'thickness: ',
		le,
		pe,
		Me,
		Ye,
		E = 'layerHeight: ',
		S,
		J,
		z,
		ye,
		me = 'Layers: ',
		ie,
		we,
		Te,
		Ne,
		ze,
		et,
		ge,
		Be,
		Ze,
		st;
	function vt($) {
		e[12]($);
	}
	let Oe = {};
	e[4] !== void 0 && (Oe.color = e[4]),
		(y = new Uh({ props: Oe })),
		Nt.push(() => yn(y, 'color', vt));
	let F = jl(e[9]),
		X = [];
	for (let $ = 0; $ < F.length; $ += 1) X[$] = Fc(Oc(e, F, $));
	const fe = ($) =>
		$e(X[$], 1, 1, () => {
			X[$] = null;
		});
	let ue = e[0] && kc(e);
	return {
		c() {
			(t = te('html')),
				(n = te('head')),
				(n.innerHTML = r),
				(i = Fe()),
				(a = te('body')),
				(s = te('br')),
				(o = Fe()),
				(u = te('div')),
				(l = te('input')),
				(f = Fe()),
				(c = te('div')),
				(c.innerHTML = h),
				(p = Fe()),
				(d = te('div')),
				(m = te('label')),
				(v = Fe()),
				(g = te('ul')),
				(x = te('input')),
				(M = Fe()),
				(_ = te('li')),
				gt(y.$$.fragment),
				(C = Fe());
			for (let $ = 0; $ < X.length; $ += 1) X[$].c();
			(T = Fe()),
				(P = te('li')),
				(k = te('button')),
				(k.textContent = I),
				(w = Fe()),
				(U = te('li')),
				(N = te('lable')),
				(N.textContent = D),
				(B = te('input')),
				(q = Fe()),
				(H = te('li')),
				(j = te('lable')),
				(j.textContent = K),
				(Z = te('input')),
				(ve = Fe()),
				(_e = te('li')),
				(V = te('lable')),
				(V.textContent = be),
				(le = te('input')),
				(pe = Fe()),
				(Me = te('li')),
				(Ye = te('lable')),
				(Ye.textContent = E),
				(S = te('input')),
				(J = Fe()),
				(z = te('li')),
				(ye = te('lable')),
				(ye.textContent = me),
				(ie = te('input')),
				(we = Fe()),
				(Te = te('li')),
				(Ne = te('button')),
				(ze = Mi('download STL')),
				(ge = Fe()),
				ue && ue.c(),
				this.h();
		},
		l($) {
			t = ne($, 'HTML', { lang: !0 });
			var de = Ge(t);
			(n = ne(de, 'HEAD', { 'data-svelte-h': !0 })),
				Dn(n) !== 'svelte-luwugc' && (n.innerHTML = r),
				(i = ke(de)),
				(a = ne(de, 'BODY', {}));
			var Pe = Ge(a);
			(s = ne(Pe, 'BR', {})), (o = ke(Pe)), (u = ne(Pe, 'DIV', { class: !0 }));
			var Ee = Ge(u);
			(l = ne(Ee, 'INPUT', { id: !0, type: !0, class: !0 })),
				(f = ke(Ee)),
				(c = ne(Ee, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				Dn(c) !== 'svelte-11wnb9w' && (c.innerHTML = h),
				(p = ke(Ee)),
				(d = ne(Ee, 'DIV', { class: !0 }));
			var at = Ge(d);
			(m = ne(at, 'LABEL', { for: !0, 'aria-label': !0, class: !0 })),
				Ge(m).forEach(ee),
				(v = ke(at)),
				(g = ne(at, 'UL', { class: !0 }));
			var Se = Ge(g);
			(x = ne(Se, 'INPUT', { accept: !0, id: !0, name: !0, type: !0 })),
				(M = ke(Se)),
				(_ = ne(Se, 'LI', {}));
			var yt = Ge(_);
			Vt(y.$$.fragment, yt), yt.forEach(ee), (C = ke(Se));
			for (let Tn = 0; Tn < X.length; Tn += 1) X[Tn].l(Se);
			(T = ke(Se)), (P = ne(Se, 'LI', {}));
			var St = Ge(P);
			(k = ne(St, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
				Dn(k) !== 'svelte-1vvse4r' && (k.textContent = I),
				St.forEach(ee),
				(w = ke(Se)),
				(U = ne(Se, 'LI', {}));
			var Ln = Ge(U);
			(N = ne(Ln, 'LABLE', { 'data-svelte-h': !0 })),
				Dn(N) !== 'svelte-1mjoam' && (N.textContent = D),
				(B = ne(Ln, 'INPUT', {})),
				Ln.forEach(ee),
				(q = ke(Se)),
				(H = ne(Se, 'LI', {}));
			var Hn = Ge(H);
			(j = ne(Hn, 'LABLE', { 'data-svelte-h': !0 })),
				Dn(j) !== 'svelte-xg6mwv' && (j.textContent = K),
				(Z = ne(Hn, 'INPUT', {})),
				Hn.forEach(ee),
				(ve = ke(Se)),
				(_e = ne(Se, 'LI', {}));
			var Ut = Ge(_e);
			(V = ne(Ut, 'LABLE', { 'data-svelte-h': !0 })),
				Dn(V) !== 'svelte-kvm0js' && (V.textContent = be),
				(le = ne(Ut, 'INPUT', {})),
				Ut.forEach(ee),
				(pe = ke(Se)),
				(Me = ne(Se, 'LI', {}));
			var Er = Ge(Me);
			(Ye = ne(Er, 'LABLE', { 'data-svelte-h': !0 })),
				Dn(Ye) !== 'svelte-u4ez2g' && (Ye.textContent = E),
				(S = ne(Er, 'INPUT', {})),
				Er.forEach(ee),
				(J = ke(Se)),
				(z = ne(Se, 'LI', {}));
			var Sr = Ge(z);
			(ye = ne(Sr, 'LABLE', { 'data-svelte-h': !0 })),
				Dn(ye) !== 'svelte-1wakub0' && (ye.textContent = me),
				(ie = ne(Sr, 'INPUT', {})),
				Sr.forEach(ee),
				(we = ke(Se)),
				(Te = ne(Se, 'LI', {}));
			var Lr = Ge(Te);
			Ne = ne(Lr, 'BUTTON', { class: !0 });
			var Tr = Ge(Ne);
			(ze = Ei(Tr, 'download STL')),
				Tr.forEach(ee),
				Lr.forEach(ee),
				Se.forEach(ee),
				at.forEach(ee),
				Ee.forEach(ee),
				(ge = ke(Pe)),
				ue && ue.l(Pe),
				Pe.forEach(ee),
				de.forEach(ee),
				this.h();
		},
		h() {
			G(l, 'id', 'my-drawer-4'),
				G(l, 'type', 'checkbox'),
				G(l, 'class', 'drawer-toggle'),
				G(c, 'class', 'drawer-content'),
				G(m, 'for', 'my-drawer-4'),
				G(m, 'aria-label', 'close sidebar'),
				G(m, 'class', 'drawer-overlay'),
				G(x, 'accept', 'image/png, image/jpeg'),
				G(x, 'id', 'avatar'),
				G(x, 'name', 'avatar'),
				G(x, 'type', 'file'),
				G(k, 'class', 'btn'),
				(ie.disabled = !0),
				(ie.value = e[7]),
				(Ne.disabled = et = !e[8]),
				G(Ne, 'class', 'btn'),
				G(g, 'class', 'menu p-4 w-120 min-h-full bg-base-200 text-base-content'),
				G(d, 'class', 'drawer-side'),
				G(u, 'class', 'drawer drawer-end'),
				G(t, 'lang', 'en');
		},
		m($, de) {
			Ve($, t, de),
				Q(t, n),
				Q(t, i),
				Q(t, a),
				Q(a, s),
				Q(a, o),
				Q(a, u),
				Q(u, l),
				Q(u, f),
				Q(u, c),
				Q(u, p),
				Q(u, d),
				Q(d, m),
				Q(d, v),
				Q(d, g),
				Q(g, x),
				Q(g, M),
				Q(g, _),
				_t(y, _, null),
				Q(g, C);
			for (let Pe = 0; Pe < X.length; Pe += 1) X[Pe] && X[Pe].m(g, null);
			Q(g, T),
				Q(g, P),
				Q(P, k),
				Q(g, w),
				Q(g, U),
				Q(U, N),
				Q(U, B),
				an(B, e[5]),
				Q(g, q),
				Q(g, H),
				Q(H, j),
				Q(H, Z),
				an(Z, e[6]),
				Q(g, ve),
				Q(g, _e),
				Q(_e, V),
				Q(_e, le),
				an(le, e[2]),
				Q(g, pe),
				Q(g, Me),
				Q(Me, Ye),
				Q(Me, S),
				an(S, e[3]),
				Q(g, J),
				Q(g, z),
				Q(z, ye),
				Q(z, ie),
				Q(g, we),
				Q(g, Te),
				Q(Te, Ne),
				Q(Ne, ze),
				Q(a, ge),
				ue && ue.m(a, null),
				(Be = !0),
				Ze ||
					((st = [
						Ke(x, 'change', e[10]),
						Ke(k, 'click', function () {
							mi(e[1]) && e[1].apply(this, arguments);
						}),
						Ke(B, 'input', e[14]),
						Ke(Z, 'input', e[15]),
						Ke(le, 'input', e[16]),
						Ke(S, 'input', e[17]),
						Ke(Ne, 'click', e[18])
					]),
					(Ze = !0));
		},
		p($, [de]) {
			e = $;
			const Pe = {};
			if (
				(!L && de & 16 && ((L = !0), (Pe.color = e[4]), _r(() => (L = !1))), y.$set(Pe), de & 512)
			) {
				F = jl(e[9]);
				let Ee;
				for (Ee = 0; Ee < F.length; Ee += 1) {
					const at = Oc(e, F, Ee);
					X[Ee]
						? (X[Ee].p(at, de), qe(X[Ee], 1))
						: ((X[Ee] = Fc(at)), X[Ee].c(), qe(X[Ee], 1), X[Ee].m(g, T));
				}
				for (on(), Ee = F.length; Ee < X.length; Ee += 1) fe(Ee);
				un();
			}
			de & 32 && B.value !== e[5] && an(B, e[5]),
				de & 64 && Z.value !== e[6] && an(Z, e[6]),
				de & 4 && le.value !== e[2] && an(le, e[2]),
				de & 8 && S.value !== e[3] && an(S, e[3]),
				(!Be || (de & 128 && ie.value !== e[7])) && (ie.value = e[7]),
				(!Be || (de & 256 && et !== (et = !e[8]))) && (Ne.disabled = et),
				e[0]
					? ue
						? (ue.p(e, de), de & 1 && qe(ue, 1))
						: ((ue = kc(e)), ue.c(), qe(ue, 1), ue.m(a, null))
					: ue &&
						(on(),
						$e(ue, 1, 1, () => {
							ue = null;
						}),
						un());
		},
		i($) {
			if (!Be) {
				qe(y.$$.fragment, $);
				for (let de = 0; de < F.length; de += 1) qe(X[de]);
				qe(ue), (Be = !0);
			}
		},
		o($) {
			$e(y.$$.fragment, $), (X = X.filter(Boolean));
			for (let de = 0; de < X.length; de += 1) $e(X[de]);
			$e(ue), (Be = !1);
		},
		d($) {
			$ && ee(t), xt(y), td(X, $), ue && ue.d(), (Ze = !1), wr(st);
		}
	};
}
function Ox(e, t, n) {
	let r = null,
		i = () => {},
		a = null,
		s = ['black'],
		o = 100,
		u = 100,
		l = 2,
		f = 0.08,
		c = Math.round(l / f),
		h = null,
		p = [
			['red', 0.2, 4],
			['yellow', 0.2, 7],
			['white', 0.8, 18]
		];
	function d(C) {
		var k, I;
		const T = (I = (k = C.target) == null ? void 0 : k.files) == null ? void 0 : I[0];
		if (!T) return;
		const P = new FileReader();
		(P.onloadend = () => {
			P.result && n(0, (r = P.result));
		}),
			P.readAsDataURL(T);
	}
	const m = (C) => {
		let T = null,
			P = null,
			k = 255,
			I = 600,
			w = 1,
			U = Date.now(),
			N = null,
			D = null,
			B,
			q = null,
			H = null;
		const j = () => {
			(T = C.loadImage(r)), (P = C.loadImage(r));
		};
		function K() {
			(N = parseInt(k / c)),
				T.resize(I, 0),
				P.resize(I, 0),
				T.loadPixels(),
				P.loadPixels(),
				C.createCanvas(T.width * 2 + 200, T.height, 'WEBGL'),
				n(
					1,
					(i = () => {
						(w = 1), C.blend(0, 0, I, T.height, 0, 0, I, T.height, 'REPLACE'), C.redraw(), C.loop();
					})
				);
		}
		const Z = () => {
			if (w <= c) {
				let ve = parseInt(N * (w - 1));
				for (let _e = 0; _e < P.pixels.length; _e += 4)
					T.pixels[_e + 3] != 0 &&
						(w == 1
							? ((D = C.color([s[0]])), (H = [s[0], 1]))
							: (D = C.color(P.pixels[_e], P.pixels[_e + 1], P.pixels[_e + 2])),
						(q = (T.pixels[_e] + T.pixels[_e + 1] + T.pixels[_e + 2]) / 3),
						q >= ve &&
							((H = p.find((V) => V[2] == w) || H),
							(B = Ed.lerp(D.levels, C.color(H[0]).levels, H[1])),
							(P.pixels[_e + 0] = B[0]),
							(P.pixels[_e + 1] = B[1]),
							(P.pixels[_e + 2] = B[2])));
				P.updatePixels(), C.image(P, 0, 0), C.image(T, T.width + 20, 0), w++;
			} else
				console.log('Took:' + (Date.now() - U) / 1e3 + 's'),
					(a = P.canvas),
					n(8, (h = U_(a))),
					C.noLoop();
		};
		(C.preload = j), (C.setup = K), (C.draw = Z);
	};
	function v(C) {
		(s = C), n(4, s);
	}
	function g(C, T, P, k) {
		(P[k] = C), n(9, p);
	}
	function x() {
		(o = this.value), n(5, o);
	}
	function M() {
		(u = this.value), n(6, u);
	}
	function _() {
		(l = this.value), n(2, l);
	}
	function y() {
		(f = this.value), n(3, f);
	}
	const L = () => W_(h);
	return (
		(e.$$.update = () => {
			e.$$.dirty & 15 && (i(r), n(7, (c = Math.round(l / f))));
		}),
		[r, i, l, f, s, o, u, c, h, p, d, m, v, g, x, M, _, y, L]
	);
}
class Bx extends En {
	constructor(t) {
		super(), Sn(this, t, Ox, Nx, Mn, {});
	}
}
export { Bx as component };
function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = [];
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
