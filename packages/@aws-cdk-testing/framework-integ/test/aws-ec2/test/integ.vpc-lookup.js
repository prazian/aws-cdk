"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const ec2 = require("aws-cdk-lib/aws-ec2");
const appWithVpc = new cdk.App();
const stack = new cdk.Stack(appWithVpc, 'StackWithVpc', {
    env: {
        region: 'eu-west-1',
        account: '123456',
    },
});
const testVpc = new ec2.Vpc(stack, 'MyVpc', {
    vpcName: 'my-vpc-name',
});
const appUnderTest = new cdk.App();
const stackLookup = new cdk.Stack(appUnderTest, 'StackUnderTest', {
    env: {
        region: 'us-east-2',
        account: '123456',
    },
});
const vpcFromVpcAttributes = ec2.Vpc.fromVpcAttributes(stackLookup, 'VpcFromVpcAttributes', {
    region: 'eu-west-1',
    availabilityZones: ['eu-west-1a'],
    vpcId: testVpc.vpcId,
});
const vpcFromLookup = ec2.Vpc.fromLookup(stack, 'VpcFromLookup', {
    region: 'eu-west-1',
    vpcName: 'my-vpc-name',
});
new cdk.CfnOutput(stackLookup, 'OutputFromVpcAttributes', {
    value: `Region fromVpcAttributes: ${vpcFromVpcAttributes.env.region}`,
});
new cdk.CfnOutput(stackLookup, 'OutputFromLookup', {
    value: `Region fromLookup: ${vpcFromLookup.env.region}`,
});
new integ_tests_alpha_1.IntegTest(appUnderTest, 'ArchiveTest', {
    testCases: [stackLookup],
});
appWithVpc.synth();
appUnderTest.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcudnBjLWxvb2t1cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnLnZwYy1sb29rdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsa0VBQXVEO0FBQ3ZELDJDQUEyQztBQUUzQyxNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNqQyxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGNBQWMsRUFBRTtJQUN0RCxHQUFHLEVBQUU7UUFDSCxNQUFNLEVBQUUsV0FBVztRQUNuQixPQUFPLEVBQUUsUUFBUTtLQUNsQjtDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFO0lBQzFDLE9BQU8sRUFBRSxhQUFhO0NBQ3ZCLENBQUMsQ0FBQztBQUVILE1BQU0sWUFBWSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ25DLE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUU7SUFDaEUsR0FBRyxFQUFFO1FBQ0gsTUFBTSxFQUFFLFdBQVc7UUFDbkIsT0FBTyxFQUFFLFFBQVE7S0FDbEI7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLHNCQUFzQixFQUFFO0lBQzFGLE1BQU0sRUFBRSxXQUFXO0lBQ25CLGlCQUFpQixFQUFFLENBQUMsWUFBWSxDQUFDO0lBQ2pDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztDQUNyQixDQUFDLENBQUM7QUFFSCxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsZUFBZSxFQUFFO0lBQy9ELE1BQU0sRUFBRSxXQUFXO0lBQ25CLE9BQU8sRUFBRSxhQUFhO0NBQ3ZCLENBQUMsQ0FBQztBQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUseUJBQXlCLEVBQUU7SUFDeEQsS0FBSyxFQUFFLDZCQUE2QixvQkFBb0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO0NBQ3RFLENBQUMsQ0FBQztBQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLEVBQUU7SUFDakQsS0FBSyxFQUFFLHNCQUFzQixhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtDQUN4RCxDQUFDLENBQUM7QUFFSCxJQUFJLDZCQUFTLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRTtJQUN6QyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7Q0FDekIsQ0FBQyxDQUFDO0FBQ0gsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ25CLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBJbnRlZ1Rlc3QgfSBmcm9tICdAYXdzLWNkay9pbnRlZy10ZXN0cy1hbHBoYSc7XG5pbXBvcnQgKiBhcyBlYzIgZnJvbSAnYXdzLWNkay1saWIvYXdzLWVjMic7XG5cbmNvbnN0IGFwcFdpdGhWcGMgPSBuZXcgY2RrLkFwcCgpO1xuY29uc3Qgc3RhY2sgPSBuZXcgY2RrLlN0YWNrKGFwcFdpdGhWcGMsICdTdGFja1dpdGhWcGMnLCB7XG4gIGVudjoge1xuICAgIHJlZ2lvbjogJ2V1LXdlc3QtMScsXG4gICAgYWNjb3VudDogJzEyMzQ1NicsXG4gIH0sXG59KTtcblxuY29uc3QgdGVzdFZwYyA9IG5ldyBlYzIuVnBjKHN0YWNrLCAnTXlWcGMnLCB7XG4gIHZwY05hbWU6ICdteS12cGMtbmFtZScsXG59KTtcblxuY29uc3QgYXBwVW5kZXJUZXN0ID0gbmV3IGNkay5BcHAoKTtcbmNvbnN0IHN0YWNrTG9va3VwID0gbmV3IGNkay5TdGFjayhhcHBVbmRlclRlc3QsICdTdGFja1VuZGVyVGVzdCcsIHtcbiAgZW52OiB7XG4gICAgcmVnaW9uOiAndXMtZWFzdC0yJyxcbiAgICBhY2NvdW50OiAnMTIzNDU2JyxcbiAgfSxcbn0pO1xuXG5jb25zdCB2cGNGcm9tVnBjQXR0cmlidXRlcyA9IGVjMi5WcGMuZnJvbVZwY0F0dHJpYnV0ZXMoc3RhY2tMb29rdXAsICdWcGNGcm9tVnBjQXR0cmlidXRlcycsIHtcbiAgcmVnaW9uOiAnZXUtd2VzdC0xJyxcbiAgYXZhaWxhYmlsaXR5Wm9uZXM6IFsnZXUtd2VzdC0xYSddLFxuICB2cGNJZDogdGVzdFZwYy52cGNJZCxcbn0pO1xuXG5jb25zdCB2cGNGcm9tTG9va3VwID0gZWMyLlZwYy5mcm9tTG9va3VwKHN0YWNrLCAnVnBjRnJvbUxvb2t1cCcsIHtcbiAgcmVnaW9uOiAnZXUtd2VzdC0xJyxcbiAgdnBjTmFtZTogJ215LXZwYy1uYW1lJyxcbn0pO1xuXG5uZXcgY2RrLkNmbk91dHB1dChzdGFja0xvb2t1cCwgJ091dHB1dEZyb21WcGNBdHRyaWJ1dGVzJywge1xuICB2YWx1ZTogYFJlZ2lvbiBmcm9tVnBjQXR0cmlidXRlczogJHt2cGNGcm9tVnBjQXR0cmlidXRlcy5lbnYucmVnaW9ufWAsXG59KTtcblxubmV3IGNkay5DZm5PdXRwdXQoc3RhY2tMb29rdXAsICdPdXRwdXRGcm9tTG9va3VwJywge1xuICB2YWx1ZTogYFJlZ2lvbiBmcm9tTG9va3VwOiAke3ZwY0Zyb21Mb29rdXAuZW52LnJlZ2lvbn1gLFxufSk7XG5cbm5ldyBJbnRlZ1Rlc3QoYXBwVW5kZXJUZXN0LCAnQXJjaGl2ZVRlc3QnLCB7XG4gIHRlc3RDYXNlczogW3N0YWNrTG9va3VwXSxcbn0pO1xuYXBwV2l0aFZwYy5zeW50aCgpO1xuYXBwVW5kZXJUZXN0LnN5bnRoKCk7Il19