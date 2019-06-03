import { Module } from '@nestjs/common';
import { SSHServer } from './ssh.server';
import { DomainMapperService } from './domain-mapper/domain-mapper.service';
import { TunnelService } from './tunnel/tunnel.service';
import { Counter } from './cli-interface';
import * as React from 'react';
import { CliInterfaceFactory } from './cli-interface/cli-interface.factory';


@Module({
  providers: [
    SSHServer,
    DomainMapperService,
    TunnelService,
    {
      useFactory: CliInterfaceFactory,
      provide: 'UI',
      inject: [DomainMapperService],
    },

  ],
  exports: [DomainMapperService],
})
export class SshModule {}