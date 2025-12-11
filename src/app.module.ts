import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { HotelsModule } from './hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';
import { BookingsModule } from './bookings/bookings.module';
import { ReviewsModule } from './reviews/reviews.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { StripeModule } from './stripe/stripe.module';

import { EmailModule } from './email/email.module';

import { UmrahModule } from './umrah/umrah.module';
import { UmrahbookingsModule } from './umrahbookings/umrahbookings.module';

import { InvoicesModule } from './invoices/invoices.module';
import { InvoiceModule } from './invoice/invoice.module';
import { HotelInvoiceModule } from './hotel-invoice/hotel-invoice.module';
import { NotificationsModule } from './notifications/notifications.module';


@Module({
  imports: [UserModule,
    ConfigModule.forRoot(),
     TypeOrmModule.forRoot({
    type: 'postgres',
    // host: process.env.DB_HOST,
    // port: Number(process.env.DB_PORT),
    // database: process.env.DB_NAME,
    // username: process.env.DB_USER ,
    // password: process.env.DB_PASSWORD,
    // url:process.env.DATABASE_URL,
    url:process.env.database_url,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],

    synchronize: false,
      ssl: {
     rejectUnauthorized: true,
     },
  }),
     AuthModule,
     HotelsModule,
     RoomsModule,
     BookingsModule,
     ReviewsModule,
    FileUploadModule,
    StripeModule,
   
    EmailModule,
   
    UmrahModule,
    UmrahbookingsModule,
   
    InvoicesModule,
    InvoiceModule,
    HotelInvoiceModule,
    NotificationsModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
