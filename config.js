/**
 * Created by sahaque on 10/23/2017.
 */

const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.info('*********');
    console.info(message);
    console.log('**********');
}
export default {
    port: env.PORT || 8080
};