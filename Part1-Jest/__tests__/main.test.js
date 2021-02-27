/*
function formatVolumeIconPath(volumeValue) {
  if (volumeValue > 66) {
    iconLevel = "3";
  } else if (volumeValue > 33) {
    iconLevel = "2";
  } else if (volumeValue > 0) {
    iconLevel = "1";
  } else {
    iconLevel = "0";
  }
  return `./assets/media/icons/volume-level-${iconLevel}.svg`
}
*/
const formatVolumeIconPath = require('../assets/scripts/main');

describe('level 3', () => {
    test('max level 3', () => {
        expect(formatVolumeIconPath(100)).toMatch('./assets/media/icons/volume-level-3.svg');
        expect(formatVolumeIconPath(100)).toContain('3');
    })
    test('min level 3', () => {
        expect(formatVolumeIconPath(67)).toMatch('./assets/media/icons/volume-level-3.svg');
        expect(formatVolumeIconPath(67)).toContain('3');
    })
})

describe('level 2', () => {
    test('max level 2', () => {
        expect(formatVolumeIconPath(66)).toMatch('./assets/media/icons/volume-level-2.svg');
        expect(formatVolumeIconPath(66)).toContain('2');
    })
    test('min level 2', () => {
        expect(formatVolumeIconPath(34)).toMatch('./assets/media/icons/volume-level-2.svg');
        expect(formatVolumeIconPath(34)).toContain('2');
    })
})

describe('level 1', () => {
    test('max level 1', () => {
        expect(formatVolumeIconPath(33)).toMatch('./assets/media/icons/volume-level-1.svg');
        expect(formatVolumeIconPath(33)).toContain('1');
    })
    test('min level 1', () => {
        expect(formatVolumeIconPath(1)).toMatch('./assets/media/icons/volume-level-1.svg');
        expect(formatVolumeIconPath(1)).toContain('1');
    })
})

describe('level 0', () => {
    test('max level 0', () => {
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
        expect(formatVolumeIconPath(0)).toContain('0');
    })
    test('min level 0', () => {
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
        expect(formatVolumeIconPath(0)).toContain('0');
    })
})