/**
 * HighLighter - A source code syntax highlighter using Highlight.js
 *   For more information on Hightlight.js see http://highlightjs.org/
 *
 * @author Dave Auld <dave@dave-auld.net>
 * @copyright 2014 Dave Auld
 */
function HighLighterPlugin(){}

/**
 * Called when the application is being installed for the first time.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
HighLighterPlugin.onInstall = function(cb) {
	cb(null, true);
};

/**
 * Called when the application is uninstalling this plugin.  The plugin should
 * make every effort to clean up any plugin-specific DB items or any in function
 * overrides it makes.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
HighLighterPlugin.onUninstall = function(cb) {
	cb(null, true);
};

/**
 * Called when the application is starting up. The function is also called at
 * the end of a successful install. It is guaranteed that all core PB services
 * will be available including access to the core DB.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
HighLighterPlugin.onStartup = function(cb) {
    cb(null, true);
};

/**
 * Called when the application is gracefully shutting down.  No guarantees are
 * provided for how much time will be provided the plugin to shut down.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
HighLighterPlugin.onShutdown = function(cb) {
	cb(null, true);
};

//exports
module.exports = HighLighterPlugin;
