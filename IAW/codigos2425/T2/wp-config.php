<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         'bs545Y|>7`qMg^8BI3.Q2]hn!);DhT1?:as8:J|m-],ms?R!A[V=vTQ/064 Fg{a' );
define( 'SECURE_AUTH_KEY',  '-78MMGap^mwqM_,N=VSOR#fW4&%vNm:z@{9z(O%M9B;[[b4E]b _}F,}iI0Q`H4A' );
define( 'LOGGED_IN_KEY',    '$B}A1F_L-yTlC(Nq9/#xI.:k?)mSu!dDJm]^mV`U7nUt-P^?ed5m.}(sk11eSTrJ' );
define( 'NONCE_KEY',        'I!GR`OlwfR(Qw:iqvP_Q>2Lr;;xP$Iyfd1yF~?3-Yy|pryk[/$jIQP.h|$|$%lfp' );
define( 'AUTH_SALT',        'd%cmZV)%:?S@~R<?[0QW#mpxa+BiI{:{+Ab9_&Y)6Wu6 UcNN}$PSeEf>/I<E=:w' );
define( 'SECURE_AUTH_SALT', 'Uz.jqHL5%ld<i=`Z.+Zy:4 WkD<?c@ /#3(i%w*rci_).N?+@F6syuZin$k+_6SL' );
define( 'LOGGED_IN_SALT',   '`zNl?|QvnkN(FF:D<)j:)y/9HdzZdv*.f[ybLXD&U?]kGSAHLl:)<3rEY)?0::+c' );
define( 'NONCE_SALT',       '8aAFL$NM|jcFJ.>>zEj9AIIi!`w`bM|#jkP#wWHX6BW@g{aKXQUm6NG-(k7vH>HG' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
