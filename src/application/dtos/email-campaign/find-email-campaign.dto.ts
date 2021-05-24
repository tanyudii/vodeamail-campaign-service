import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class FindEmailCampaignDto {
  @IsNotEmpty()
  @IsUUID('4')
  organization_id: string;

  @IsOptional()
  @IsUUID('4')
  id?: string;

  @IsOptional()
  @IsUUID('4', { each: true })
  ids?: string[];
}