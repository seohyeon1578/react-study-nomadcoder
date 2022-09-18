// @ts-check
/**
 * init은 초기화를 위한 함수입니다.
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
 export function init(config) {
  return true;
}

/**
 * exit은 종료를 위한 함수입니다.
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}