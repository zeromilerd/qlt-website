<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'guorrrmy_wp865' );

/** Database username */
define( 'DB_USER', 'guorrrmy_wp865' );

/** Database password */
define( 'DB_PASSWORD', '-1(S7pEe8o' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '0dbcldj0mxwz0dvq01lplivkatjjohptqrhglrlxwfsavbm91oie9jwrz3nx2m25' );
define( 'SECURE_AUTH_KEY',  'k54a9pdhzjt1ldnevgca24koi2prmwepck65lgn7x14h5qhx0w9i9uvuxxcydpdj' );
define( 'LOGGED_IN_KEY',    'hfzu7vqk1jsa2pwcwttb5rrip4l1b9nkfu9kkkh2h4egbeze505ghu08hiiu4gm8' );
define( 'NONCE_KEY',        'xkuz0mkesyh18mtihd2c8np8rutcxf6f5lralcwoqnwg6mg4c5idgbrbw17wr1im' );
define( 'AUTH_SALT',        'ot8wvltq2kp64sunopyhgx2pg4i8w4fa3ee4k33udjia9rzy1fhebvxa9lwciqfc' );
define( 'SECURE_AUTH_SALT', 'gxy6dvaityvmkkvk6mrxkelwlpimfnpfzsolesn6qeauesaw0gcfywjajw4osutv' );
define( 'LOGGED_IN_SALT',   'ha0fodwn8soanvowlcowkdtdica8qxzuiijvaghone7oicre5uwgw06n5f7jkqpg' );
define( 'NONCE_SALT',       'nsvz3t3lg0sil1b8obpt5ubbg4jehq4zvkkl4abzdyvj06d7adr8rgbm6vmhkcgk' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpwx_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define( 'AUTOSAVE_INTERVAL', 300 );
define( 'WP_POST_REVISIONS', 20 );
define( 'EMPTY_TRASH_DAYS', 7 );
define( 'WP_AUTO_UPDATE_CORE', true );
define( 'WP_CRON_LOCK_TIMEOUT', 120 );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
