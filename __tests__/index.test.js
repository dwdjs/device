
import Device from '../src';
import * as us from './ua';

// const userAgent = window.navigator;
const userAgent = us.wechat;
const ua = new Device(userAgent);

// 终端
test('version', () => {
  ua.set(us.wechat);
  expect(ua.version()).toBe(true);
});

// 设备
test('device', () => {
  ua.set(us.wechat);
  expect(ua.device('mac')).toBe(true);

  ua.set(us.alipay);
  expect(ua.device('iphone')).toBe(true);
  expect(ua.device('android')).toBe(true);
});

// 平台
test('platform', () => {
  expect(ua.platform('mac')).toBe(true);

  expect(ua.platform('iphone')).toBe(true);
  expect(ua.platform('android')).toBe(true);
});

// 操作系统
test('os', () => {
  expect(ua.os('mac')).toBe(true);
  expect(ua.os('windows')).toBe(true);
  expect(ua.os('linux')).toBe(true);

  expect(ua.os('ios')).toBe(true);
  expect(ua.os('android')).toBe(true);
});

// 浏览器
test('browser', () => {
  expect(ua.browser('mac')).toBe(true);
  expect(ua.browser('windows')).toBe(true);
  expect(ua.browser('linux')).toBe(true);

  expect(ua.browser('ios')).toBe(true);
  expect(ua.browser('android')).toBe(true);
});

// 宿主
test('host', () => {
  expect(ua.host('iqg')).toBe(true);
  expect(ua.host('hsq')).toBe(true);
  expect(ua.host('msf')).toBe(true);
  expect(ua.host('wechat')).toBe(true);
  expect(ua.host('alipay')).toBe(true);
  expect(ua.host('alipay').version()).toBe(true);
});

// 终端
test('terminal', () => {
  expect(ua.terminal('wechat')).toBe(true);
  expect(ua.terminal('alipay')).toBe(true);
});

// is
// test('is', () => {
//   expect(ua.set().terminal('mac')).toBe(true);
// });
