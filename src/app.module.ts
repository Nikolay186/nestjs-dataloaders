import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CardModule } from './card/card.module';
import { ColumnModule } from './column/column.module';
import { DataloaderModule } from './dataloader/dataloader.module';
import { DataloaderService } from './dataloader/dataloader.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [DataloaderModule],
      inject: [DataloaderService],
      useFactory: (dl_service: DataloaderService) => {
        return {
          autoSchemaFile: true,
          context: () => ({
            loaders: dl_service.create_loaders(),
          }),
        };
      },
    }),
    ColumnModule,
    CardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
