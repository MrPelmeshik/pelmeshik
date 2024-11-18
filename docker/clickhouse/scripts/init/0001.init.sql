create database if not exists finance;

create table if not exists finance.app_api_log
(
    timestamp   DateTime64(5, 'UTC'),
    level       String,
    message     String,
    logger      String,
    call_site    String,
    exception   String
)
engine = Log;
