/**
 * @typedef {Object} Tag
 * @property {String} label
 * @property {String} href
 */

/**
 * @typedef {Object} Media
 * @property {String} title
 * @property {String} src
 * @property {('video'|'image')} type
 */

/**
 * @typedef {Object} Skills
 * @property {String} title
 * @property {String} text (Markdown)
 * @property {Array<Tag>} tags
 */

/**
 * @typedef {Object} Project
 * @property {String} title
 * @property {String} text (Markdown)
 * @property {Array<Tag>} tags
 * @property {String} pictureURL
 * @property {Array<Media>}  media
 * @property {String} testTitle
 * @property {String} testText
 * @property {String} repositoryURL
 * @property {String} downloadURL
 */

/**
 * @typedef {Object} Portafolio
 * @property {String} title
 * @property {String} text (Markdown)
 * @property {String} email
 * @property {String} profilePictureSrc
 * @property {Array<Skills>} skills
 * @property {Array<Project>} projects
 */

/**
 *
 * @param {String} label
 * @param {String} href
 * @returns {Tag}
 */
export function tag(label, href) {
  return { label, href };
}

/**
 *
 * @param {String} title
 * @param {String} src
 * @param {('video'|'image')} type
 * @returns {Media}
 */
export function media(title, src, type = "video") {
  return { title, src, type };
}

/**
 *
 * @param {Project} project
 * @returns
 */
export function createProject(project) {
  return project;
}

/**
 *
 * @param {Skills} skill
 */
export function createSkill(skill) {
  return skill;
}

/**
 *
 * @param {Portafolio} portafolio
 * @returns {Portafolio}
 */
export function createPortafolio(portafolio) {
  return portafolio;
}
